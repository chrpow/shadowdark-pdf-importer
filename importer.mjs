import { getDocument } from "./node_modules/pdfjs-dist/webpack.mjs"
import { BOOKS, MODULE } from './constants.js'
// import * as fs from 'fs'

export default class Foo {
    constructor() {}
    async getTextFromPDF(file) {//, pageString) {
        const arr = []
        this.useAlias = this.#getSetting('useAlias')
        this.useSizeData = this.#getSetting('useSizeData')

        const monsterImporter = new shadowdark.apps.MonsterImporterSD()
        const doc = await getDocument(file).promise;

        const bookInfo = await this.#identifyRulebook(doc)

        for (const [pageNumber, info] of bookInfo.map) {
        // console.log(`Parsing Page ${pageNumber}`)

            const excludePattern = info?.exclude ? new RegExp(info.exclude) : ''
            const monsters = [...info.entries]
            // console.log(monsters)
            const page = await doc.getPage(pageNumber + bookInfo.offset);
            const content = await page.getTextContent();
            const strings = content.items.map(function(item) {
                return item.str;
            });
            // console.log(monsters)
            const text = strings.join(' ').replace(/\s\s+/g, ' ').replace(excludePattern, '')
            // console.log(text)
            
            monsters.map(async (monster, index) => {
                // console.log(monster)
                // console.log('--------------------------------------------------------')
                if (monster.regex) return
                if (!monster.features) {
                    let r = `${monster.name.toUpperCase().replace(' ', '\\s')}\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)`
                    this.#toObject(monster, r)
                    return
                }
                let i = 0
                let f = 0
                let features = [...monster?.features]
                let naive
                let naive_solution
                let prev_exp
                let prev_feat

                while (true) {
                    // console.log(`i=${i}\nf=${f}`)
                    const pattern = []
                    pattern.push([`${monster.name.toUpperCase().replace(' ', '\\s')}\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)`])
                    if (features || index !== monsters.length - 1) {
                        pattern.push('\\s+')
                    } 
                    if (features) {
                        if (features?.length > 1){
                            pattern.push(`(${features.join('.*?)\\s+(')}.*`)
                                if (index < monsters.length - 1) {
                                    pattern.push(`?)\\s+${(monsters[index + 1].name).toUpperCase().replace(' ', '\\s')}`)
                                } else pattern.push(`)`)
                        } else if (features?.length == 1) {
                            pattern.push(`(${features[0]}.*`)
                                if (index < monsters.length - 1) {
                                    pattern.push(`?)\\s+${(monsters[index + 1].name).toUpperCase().replace(' ', '\\s')}`)
                                } else pattern.push(`)`)
                    }}

                    
                    let reg_str = pattern.join('')
                    // console.log(reg_str)
                    if (i == 0) naive = reg_str
                    // console.log(naive)}

                    const regex = new RegExp(reg_str, 'gm')
                    let m;
                    let monsterText
                    while ((m = regex.exec(text)) !== null) {
                        // This is necessary to avoid infinite loops with zero-width matches
                        if (m.index === regex.lastIndex) {
                            regex.lastIndex++;
                        }

                        m[0] = monster.name
                    
                    // console.log(m)
                    monsterText = m.join('\n\n')
                    }

                    if (i == 0) naive_solution = monsterText
                    // console.log(`naive_solution=${naive_solution}`)}
                    
                    if (!(monsterText === naive_solution)) {
                        // console.log('MISMATCH')
                        // console.log(monsterText)
                        // console.log(naive_solution)
                        features[f] = prev_feat
                        f++
                        if (f >= features?.length) {
                            // console.log(reg_str)
                            // console.log('END')
                            // console.log(monsterText)
                            // console.log(prev_exp)
                            this.#toObject(monster, prev_exp)
                            arr.push(prev_exp)
                            // console.log(features)
                            return
                        }
                    }
                    else {
                        if (features[f]?.length == 0) {
                            // console.log(reg_str)
                            // console.log('END2')
                            // console.log(monsterText)
                            f++
                            i++
                            continue
                        }
                        else {
                            prev_exp = reg_str
                            prev_feat = features[f]
                            if (f >= features?.length) {
                                // console.log(prev_exp)
                                this.#toObject(monster, prev_exp)
                                arr.push(prev_exp)
                                return}
                            else features[f] = features[f].slice(0, - 1)}
                        // console.log(features)
                    }
                        if (i > 100) return
                    i++
                }


            })
        }
    }

    async #toObject (monster, regex) {
        let str = 
        `{\nname: \'${monster.name}\',\nregex: \'${regex.replace('\\', '\\\\')}\',\n${monster.alias ? `alias: \'${monster.alias}\',\n` : ''}${monster.size ? `size: ${monster.size},\n` : ''}}`
        console.log(str)
    }

    async #identifyRulebook (doc) {
        // console.log(`Identifying Rulebook...`)
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
            // console.log(text)
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

function saveDataToFile(content, contentType, fileName) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
  
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  
    URL.revokeObjectURL(a.href);
}