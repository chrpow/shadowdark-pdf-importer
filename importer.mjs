import { getDocument } from "./node_modules/pdfjs-dist/webpack.mjs"

const map = new Map([
    [194, [
        {
            name: 'Aboleth',
            features: ['Curse', 'Enslave', 'Telepathic'],
            stop: 'Monster'
        },
        {
            name: 'Acolyte',
            features: ['Healing Touch']
        }
    ]]
])

// const monsterImporter = new shadowdark.apps.MonsterImporterSD()
const pageOffset = 4

export default class Foo {
    constructor() {}
    async getTextFromPDF(file) {
        const monsterImporter = new shadowdark.apps.MonsterImporterSD()
        const doc = await getDocument(file).promise;
        for (const [pageNumber, monsters] of map) {
            const page = await doc.getPage(pageNumber + pageOffset);
            const content = await page.getTextContent();
            const strings = content.items.map(function(item) {
                return item.str;
            });
            const text = strings.join(' ').replace(/\s\s+/g, ' ')
            for (const monster of monsters) {
                const pattern = [`${monster.name.toUpperCase()}\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+`]

                if (monster.features.length > 1){
                    pattern.push(`(${monster.features.join('.*?)\\s+(')}.*?)`)
                        if (monster.stop) {
                            pattern.push(`\\s+${monster.stop}`)
                        }
                        pattern.push('.*')
                } else if (monster.features.length == 1) {
                    pattern.push(`(${monster.features[0]}.*)`)
                        if (monster.stop) {
                            pattern.push(`\\s+${monster.stop}`)
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

                    await monsterImporter._importMonster(monsterText)
                }
            }
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

