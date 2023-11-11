import { getDocument } from "./node_modules/pdfjs-dist/webpack.mjs"
import { RULEBOOK_MONSTERS, PAGE_OFFSET } from './constants.js'

export default class Foo {
    constructor() {}
    async getTextFromPDF(file) {
        const monsterImporter = new shadowdark.apps.MonsterImporterSD()
        const doc = await getDocument(file).promise;
        for (const [pageNumber, info] of RULEBOOK_MONSTERS) {
        console.log(`Parsing Page ${pageNumber}`)

            const excludePattern = info.exclude ? new RegExp(info.exclude) : ''
            const monsters = info.entries
            const page = await doc.getPage(pageNumber + PAGE_OFFSET);
            const content = await page.getTextContent();
            const strings = content.items.map(function(item) {
                return item.str;
            });
            const text = strings.join(' ').replace(/\s\s+/g, ' ').replace(excludePattern, '')
            monsters.forEach((monster, index) => {
                console.log(`Parsing ${monster.name}`)

                const pattern = [`${monster.name.toUpperCase()}\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+`]

                if (monster.features.length > 1){
                    pattern.push(`(${monster.features.join('.*?)\\s+(')}.*?)`)
                        if (index < monster.features.length - 1) {
                            pattern.push(`\\s+${monsters[index + 1].name}`)
                        }
                        pattern.push('.*')
                } else if (monster.features.length == 1) {
                    pattern.push(`(${monster.features[0]}.*)`)
                        if (index < monster.features.length - 1) {
                            pattern.push(`\\s+${monsters[index + 1].name}`)
                        }
                        pattern.push('.*')
                }
                // pattern.push(`\\s+${monster.stop}.*` || '.*')
                console.log(pattern.join(''))

                const regex = new RegExp(pattern.join(''), 'gm')
                let m;

                while ((m = regex.exec(text)) !== null) {
                    // This is necessary to avoid infinite loops with zero-width matches
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }

                    m[0] = monster.name

                    const monsterText = m.join('\n')

                    console.log(monsterText)

                    // monsterImporter._importMonster(monsterText)
                }
            })
        }
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

