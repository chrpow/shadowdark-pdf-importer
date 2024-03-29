import { getDocument } from "./pdfjs-dist/webpack.mjs";
import { BOOKS, MODULE } from "./constants.js";

export default class Importer {
	constructor() { }
	async getTextFromPDF(file) {
		const blocks = []
		const ids = []
		this.useAlias = this.#getSetting("useAlias");
		this.useSizeData = this.#getSetting("useSizeData");

		const monsterImporter = new shadowdark.apps.MonsterImporterSD();
		const doc = await getDocument(file).promise;

		const book = (await this.#identifyRulebook(doc));

		var promiseArray = [];

		for (const [pageNumber, info] of book.info.map) {
			promiseArray.push(new Promise(async (resolve, reject) => {
				console.log(`Shadowdark PDF Importer | Parsing Page ${pageNumber}`);

				const excludePattern = info?.exclude
					? new RegExp(info.exclude)
					: "";
				const monsters = info.entries;
				const page = await doc.getPage(pageNumber + book.info.offset);
				const content = await page.getTextContent();
				const strings = content.items.map(function (item) {
					return item.str;
				});
				const text = strings
					.join(" ")
					.replace(/\s\s+/g, " ")
					.replace('- ', '-')
					.replace(excludePattern, "");

				monsters.forEach(async (monster, index) => {
					try {
						const pattern = [];

						if (monster.regex) {
							pattern.push(monster.regex);
						} else {
							pattern.push([
								`${monster.name.toUpperCase()}\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)`
							]);
							if (monster.features || index !== monsters.length - 1) {
								pattern.push("\\s+");
							}
							if (monster.features) {
								if (monster.features.length > 1) {
									pattern.push(
										`(${monster.features.join(".*?)\\s+(")}.*`
									);
									if (index < monsters.length - 1) {
										pattern.push(
											`?)\\s+${monsters[
												index + 1
											].name.toUpperCase()}`
										);
									} else pattern.push(`)`);
								} else if (monster.features.length == 1) {
									pattern.push(`(${monster.features[0]}.*`);
									if (index < monsters.length - 1) {
										pattern.push(
											`?)\\s+${monsters[
												index + 1
											].name.toUpperCase()}`
										);
									} else pattern.push(`)`);
								}
							}
						}

						const regex = new RegExp(pattern.join(""), "gm");
						let m;

						while ((m = regex.exec(text)) !== null) {
							// This is necessary to avoid infinite loops with zero-width matches
							if (m.index === regex.lastIndex) {
								regex.lastIndex++;
							}

							m[0] = monster.name;

							if (monster.replace) {
								for (const target in monster.replace) {
									const replacement = monster.replace[target];
									m = m.map((s) => s.replace(target, replacement));
								}
							}

							const monsterText = m.join("\n\n");
							blocks.push(monsterText)

							const options = {};
							if (this.useSizeData) options.size = monster.size;
							if (this.useAlias) options.alias = monster.alias;

							let newActor = await monsterImporter._importMonster(
								monsterText
							);

							ids.push(newActor.id)

							// Update prototype token as needed
							await Actor.updateDocuments([
								{
									_id: newActor.id,
									"prototypeToken.texture": {
										...newActor.prototypeToken.texture,
										src: newActor.img
									}
								}
							]);

							if (options.size != undefined) {
								await Actor.updateDocuments([
									{
										_id: newActor.id,
										"prototypeToken.height": options.size,
										"prototypeToken.width": options.size
									}
								]);
							}
							if (options.alias != undefined) {
								await Actor.updateDocuments([
									{
										_id: newActor.id,
										"prototypeToken.name": options.alias
									}
								]);
							}
						}
						console.log(`Shadowdark PDF Importer | Imported ${monster.name} successfully.`)
					} catch {
						ui.notifications.error(
							`Failed to import ${monster.name}. Check the PDF file or submit an issue on Github if this error persists.`
						)
					}
					resolve()
				});
			}))
		}
		await Promise.all(promiseArray)

		console.log(ids)

		// Create a new folder
		let folder = await this.#createFolder(book.title, "Actor")
		ids.forEach(async i => {
			await game.actors.get(i).update({ folder: folder })
			console.log(`Moved ${game.actors.get(i).name} to ${folder.name}`)
		})
	}

	async #createFolder(name, type) {
		// if (game.folders.getName(name)) return game.folders.getName(name);
		let folder = await Folder.createDocuments([{ name, type, parent: null }]);
		return folder[0];
	}

	async #identifyRulebook(doc) {
		for (const [book, info] of BOOKS) {
			let page;
			try {
				page = await doc.getPage(info.checkPage);
			} catch {
				continue;
			}
			const content = await page.getTextContent();
			const strings = content.items.map(function (item) {
				return item.str;
			});
			const text = strings.join(" ").replace(/\s\s+/g, " ");
			const regex = new RegExp(`(${info.checkText}.*?)`, "gm");
			let m;
			if ((m = regex.exec(text) !== null)) {
				ui.notifications.info(
					`Identified PDF as <strong>${book}</strong>`
				);
				return { title: book, info: info };
			}
		}
		return ui.notifications.error(
			`PDF is not a supported Shadowdark Rulebook. If this seems wrong, please open an issue at https://github.com/chrpow/shadowdark-pdf-importer/issues`
		);
	}

	#getSetting(key, defaultValue = null) {
		let value = defaultValue ?? null;
		try {
			value = game.settings.get(MODULE.ID, key);
		} catch {
			coreModule.api.Logger.debug(`Setting '${key}' not found`);
		}
		return value;
	}

	async #saveDataToFile(content, contentType, fileName) {
		const a = document.createElement('a');
		const file = new Blob([content], { type: contentType });

		a.href = URL.createObjectURL(file);
		a.download = fileName;
		a.click();

		URL.revokeObjectURL(a.href);
	}


}