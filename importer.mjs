import { getDocument } from "./node_modules/pdfjs-dist/webpack.mjs"

const map = new Map([
    [194, {
        exclude: 'Monster Statistics',
        entries: [
            {
                name: 'Aboleth',
                features: ['Curse', 'Enslave', 'Telepathic']
            },
            {
                name: 'Acolyte',
                features: ['Healing Touch']
            }
    ]}],
    [195, {
        exclude: 'ANGELS.*',
        entries: [
            {
                name: 'Angel, Seraph',
                features: ['Bless']
            },
            {
                name: 'Angel, Domini',
                features: ['Horn']
            },
            {
                name: 'Angel, Principi',
                features: ['Moonlight Aura', 'Truesight']
            },
            {
                name: 'Archangel',
                features: ['Command', 'Crown of Fire']
            }
    ]}],
    [196, {
        entries: [
            {
                name: 'Ape, Snow',
                features: ['Thick Fur']
            },
            {
                name: 'Ape'
            },
            {
                name: 'Ankheg'
            },
            {
                name: 'Animated Armor'
            },
            {
                name: 'Apprentice',
                features: ['Beguile', 'Magic Bolt']
            }
    ]}],
    [197, {
        exclude: '',
        entries: [
            {
                name: 'Archmage',
                features: ['Death Bolt', 'Enervate', 'Fireblast', 'Float', 'Mithralskin', 'Void Step'],
            },
            {
                name: 'Assassin',
                features: ['Execute'],
            },
            {
                name: 'Azer',
                features: ['Impervious'],
            },
            {
                name: 'Badger',
                features: ['Rage']
            },
            {
                name: 'Bandit',
                features: ['Ambush']
            }
    ]}],
    [198, {
        entries: [
            {
                name: 'Basilisk',
                features: ['Petrify']
            },
            {
                name: 'Bat, Giant',
            },
            {
                name: 'Bat, Swarm',
            },
            {
                name: 'Bear, Brown',
                features: ['Crush']
            },
            {
                name: 'Bear, Polar',
                features: ['Crush', 'Thick Fur']
            },
            {
                name: 'Beastman',
                features: ['Brutal']
            }
    ]}],
    [199, {
        entries: [
            {
                name: 'Berserker',
                features: ['Rage']
            },
            {
                name: 'Black Pudding',
                features: ['Impervious', 'Corrosive']
            },
            {
                name: 'Boar',
                features: ['Gore']
            },
            {
                name: 'Brain Eater',
                features: ['Hear Thoughts', 'Latch', 'Mind Blast', 'Mind Control']
            }
    ]}],







    [666, {
        exclude: '',
        entries: [
            {
                name: 'APE, SNOW',
                features: ['Thick Fur']
            }
    ]}],
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

