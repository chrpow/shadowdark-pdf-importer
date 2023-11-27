import { getDocument } from "./node_modules/pdfjs-dist/webpack.mjs"
import { BOOKS, MODULE } from './constants.js'

export default class Foo {
    constructor() {}
    async getTextFromPDF(file) {//, pageString) {
        this.useAlias = this.#getSetting('useAlias')
        this.useSizeData = this.#getSetting('useSizeData')

        const monsterImporter = new shadowdark.apps.MonsterImporterSD()
        const doc = await getDocument(file).promise;

        const bookInfo = await this.#identifyRulebook(doc)

        for (const [pageNumber, info] of bookInfo.map) {
        console.log(`Parsing Page ${pageNumber}`)

            const excludePattern = info?.exclude ? new RegExp(info.exclude) : ''
            const monsters = info.entries
            const page = await doc.getPage(pageNumber + bookInfo.offset);
            const content = await page.getTextContent();
            const strings = content.items.map(function(item) {
                return item.str;
            });
            // console.log(monsters)
            const text = strings.join(' ').replace(/\s\s+/g, ' ').replace(excludePattern, '')
            console.log(text)
            monsters.forEach(async (monster, index) => {
                console.log(monster.name)

                const pattern = []
                
                if (monster.regex){
                    pattern.push(monster.regex)
                } else {
                    pattern.push([`${monster.name.toUpperCase()}\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)`])
                    if (monster.features || index !== monsters.length - 1) {
                        // console.log(`${monster.name} at index ${index} of ${monsters.length - 1} either has features or is not the last monster in the array`)
                        pattern.push('\\s+')
                    }
                    if (monster.features) {
                        if (monster.features.length > 1){
                            pattern.push(`(${monster.features.join('.*?)\\s+(')}.*`)
                                if (index < monsters.length - 1) {
                                    pattern.push(`?)\\s+${(monsters[index + 1].name).toUpperCase()}`)
                                } else pattern.push(`)`)
                        } else if (monster.features.length == 1) {
                            pattern.push(`(${monster.features[0]}.*`)
                                if (index < monsters.length - 1) {
                                    pattern.push(`?)\\s+${(monsters[index + 1].name).toUpperCase()}`)
                                } else pattern.push(`)`)
                    }}
                } 
                console.log(pattern.join(''))

                const regex = new RegExp(pattern.join(''), 'gm')
                let m;

                while ((m = regex.exec(text)) !== null) {
                    // This is necessary to avoid infinite loops with zero-width matches
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }

                    m[0] = monster.name

                    if (monster.replace) {
                        for (const target in monster.replace) {
                            const replacement = monster.replace[target]
                            m = m.map((s) => s.replace(target, replacement))
                        }
                    }

                    const monsterText = m.join('\n\n')
                    console.log(monsterText)

                    const options = {}
                    if (this.useSizeData) options.size = monster.size
                    if (this.useAlias) options.alias = monster.alias
                    
                    let newActor = await monsterImporter._importMonster(monsterText)

                    // Update prototype token as needed
                    await Actor.updateDocuments([{
                        _id: newActor.id,
                        "prototypeToken.texture": {...newActor.prototypeToken.texture, src: newActor.img}
                    }])

                    if (options.size != undefined) {
                        await Actor.updateDocuments([{
                            _id: newActor.id,
                            "prototypeToken.height": options.size,
                            "prototypeToken.width": options.size
                        }])
                    }
                    if (options.alias != undefined) {
                        await Actor.updateDocuments([{
                            _id: newActor.id,
                            "prototypeToken.name": options.alias
                        }])
                    }
                }
            })
        }
    }

    async #identifyRulebook (doc) {
        console.log(`Identifying Rulebook...`)
        for (const [book, info] of BOOKS) {
            let page
            try {
                page = await doc.getPage(info.checkPage);
            } catch {
                continue
            }
            const content = await page.getTextContent();
            const strings = content.items.map(function(item) {
                return item.str
            }) 
            const text = strings.join(' ').replace(/\s\s+/g, ' ')
            console.log(text)
            const regex = new RegExp(`(${info.checkText}.*?)`, 'gm')
            let m;
            if (m = regex.exec(text) !== null) {
                ui.notifications.info(`Identified PDF as <strong>${book}</strong>`)
                return info
            }
        }
        return ui.notifications.error(`PDF is not a supported Shadowdark Rulebook. If this seems wrong, please open an issue at https://github.com/chrpow/shadowdark-pdf-importer/issues`)
    }


    #getSetting (key, defaultValue = null) {
        let value = defaultValue ?? null
        try {
            value = game.settings.get(MODULE.ID, key)
        } catch {
            coreModule.api.Logger.debug(`Setting '${key}' not found`)
        }
        return value
    }
}

// function saveDataToFile(content, contentType, fileName) {
//     const a = document.createElement('a');
//     const file = new Blob([content], { type: contentType });
  
//     a.href = URL.createObjectURL(file);
//     a.download = fileName;
//     a.click();
  
//     URL.revokeObjectURL(a.href);
// }