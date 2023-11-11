import { getDocument } from "./node_modules/pdfjs-dist/webpack.mjs"
import { RULEBOOK_MONSTERS, PAGE_OFFSET, MODULE } from './constants.js'

export default class Foo {
    constructor() {}
    async getTextFromPDF(file) {
        this.useAlias = this.#getSetting('useAlias')

        const monsterImporter = new shadowdark.apps.MonsterImporterSD()
        const doc = await getDocument(file).promise;

        const testPage = 195//196

        let pageNumber = testPage
        let info = RULEBOOK_MONSTERS.get(pageNumber)

        // for (const [pageNumber, info] of RULEBOOK_MONSTERS) {
        console.log(`Parsing Page ${pageNumber}`)

            const excludePattern = info.exclude ? new RegExp(info.exclude) : ''
            const monsters = info.entries
            const page = await doc.getPage(pageNumber + PAGE_OFFSET);
            const content = await page.getTextContent();
            const strings = content.items.map(function(item) {
                return item.str;
            });
            console.log(monsters)
            const text = strings.join(' ').replace(/\s\s+/g, ' ').replace(excludePattern, '')
            console.log(text)
            monsters.forEach((monster, index) => {

                const pattern = [`${monster.name.toUpperCase()}\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+`]
                if (monster.features) {
                    if (monster.features.length > 1){
                        pattern.push(`(${monster.features.join('.*?)\\s+(')}.*?)`)
                            if (index < monsters.length - 1) {
                                pattern.push(`\\s+${(monsters[index + 1].name).toUpperCase()}`)
                            }
                            // pattern.push('.*')
                    } else if (monster.features.length == 1) {
                        pattern.push(`(${monster.features[0]}.*)`)
                            if (index < monsters.length - 1) {
                                pattern.push(`\\s+${(monsters[index + 1].name).toUpperCase()}`)
                            }
                            // pattern.push('.*')
                }}
                console.log(pattern.join(''))

                const regex = new RegExp(pattern.join(''), 'gm')
                let m;

                while ((m = regex.exec(text)) !== null) {
                    // This is necessary to avoid infinite loops with zero-width matches
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }
                    console.log(`Name: ${monster.name}, Alias: ${monster?.alias}`)
                    console.log(this.useAlias)

                    m[0] = (this.useAlias) ? (monster.alias || monster.name) : monster.name
                    console.log(m[0])

                    const monsterText = m.join('\n')

                    console.log(monsterText)

                    monsterImporter._importMonster(monsterText)
                }
            })
        // }
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

