export const MODULE = {
    ID: 'shadowdark-pdf-importer'
}
const RULEBOOK_MONSTERS = new Map([
    [194, {
        exclude: 'Monster Statistics',
        entries: [
            {
                name: 'Aboleth',
                features: ['Curse', 'Enslave', 'Telepathic'],
                size: 2
            },
            {
                name: 'Acolyte',
                features: ['Healing Touch']
            }
        ]
    }],
    [195, {
        exclude: 'ANGELS.*',
        entries: [
            {
                name: 'Angel, Seraph',
                features: ['Bless'],
                alias: 'Seraph'
            },
            {
                name: 'Angel, Domini',
                features: ['Horn'],
                alias: 'Domini Angel'
            },
            {
                name: 'Angel, Principi',
                features: ['Moonlight Aura', 'Truesight'],
                alias: 'Principi Angel'
            },
            {
                name: 'Archangel',
                features: ['Command', 'Crown of Fire']
            }
        ]
    }],
    [196, {
        entries: [
            {
                name: 'Ape, Snow',
                features: ['Thick Fur'],
                alias: 'Snow Ape'
            },
            {
                name: 'Ape'
            },
            {
                name: 'Ankheg',
                size: 2
            },
            {
                name: 'Animated Armor'
            },
            {
                name: 'Apprentice',
                features: ['Beguile', 'Magic Bolt']
            }
        ]
    }],
    [197, {
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
        ]
    }],
    [198, {
        entries: [
            {
                name: 'Basilisk',
                features: ['Petrify']
            },
            {
                name: 'Bat, Giant',
                alias: 'Giant Bat',
                size: 2
            },
            {
                name: 'Bat, Swarm',
                alias: 'Bat Swarm'
            },
            {
                name: 'Bear, Brown',
                features: ['Crush'],
                alias: 'Brown Bear',
                size: 2,
                replace: {
                    'b)': 'b),' // The comma is missing in the book text
                }
            },
            {
                name: 'Bear, Polar',
                features: ['Crush', 'Thick Fur'],
                alias: 'Polar Bear',
                size: 2
            },
            {
                name: 'Beastman',
                features: ['Brutal']
            }
        ]
    }],
    [199, {
        entries: [
            {
                name: 'Berserker',
                features: ['Rage']
            },
            {
                name: 'Boar',
                features: ['Gore']
            },
            {
                name: 'Black Pudding',
                features: ['Impervious', 'Corrosive'],
                size: 2
            },
            {
                name: 'Brain Eater',
                features: ['Hear Thoughts', 'Latch', 'Mind Blast', 'Mind Control']
            }
        ]
    }],
    [200, {
        entries: [
            {
                name: 'Bugbear',
                features: ['Stealthy']
            },
            {
                name: 'Bulette',
                features: ['Leap'],
                size: 2
            },
            {
                name: 'Camel',
                size: 2
            },
            {
                name: 'Cave Brute',
                features: ['Bewilder'],
                size: 2
            },
            {
                name: 'Cave Creeper',
                features: ['Toxin'],
                size: 2
            }
        ]
    }],
    [201, {
        entries: [
            {
                name: 'Centaur',
                size: 2
            },
            {
                name: 'Centipede, Giant',
                features: ['Poison'],
                alias: 'Giant Centipede'
            },
            {
                name: 'Centipede, Swarm',
                features: ['Poison'],
                alias: 'Centipede Swarm'
            },
            {
                name: 'Chimera',
                features: ['Fire Breath'],
                size: 2
            },
            {
                name: 'Chuul',
                features: ['Grab'],
                size: 2
            }
        ]
    }],
    [202, {
        entries: [
            {
                name: 'Cloaker',
                features: ['Phantoms', 'Screech'],
                size: 2
            },
            {
                name: 'Cockatrice',
                features: ['Petrify']
            },
            {
                name: 'Couatl',
                features: ['Change Shape', 'Poison', 'Restore']
            },
            {
                name: 'Crab, Giant',
                features: ['Crush']
            }
        ]
    }],
    [203, {
        entries: [
            {
                name: 'Crocodile',
                size: 2
            },
            {
                name: 'Cultist',
                features: ['Fearless', 'Deathtouch']
            },
            {
                name: 'Cyclops',
                size: 3
            },
            {
                name: 'Darkmantle',
                features: ['Darkness']
            },
            {
                name: 'Deep One',
                features: ['Sunblind']
            }
        ]
    }],
    [204, {
        entries: [
            {
                name: 'Demon, Balor',
                features: ['Impervious', 'Grab', 'Hellfire'],
                alias: 'Balor',
                size: 3
            },
            {
                name: 'Demon, Glabrezu',
                features: ['Crush'],
                alias: 'Glabrezu',
                size: 2
            },
            {
                name: 'Demon, Dretch',
                features: ['Gas'],
                alias: 'Dretch'
            }
        ]
    }],
    [205, {
        entries: [
            {
                name: 'Demon, Marilith',
                features: ['Parry'],
                alias: 'Marilith',
                size: 2
            },
            {
                name: 'Demon, Vrock',
                features: ['Carrion Mist', 'Screech'],
                alias: 'Vrock',
                size: 2
            }
        ]
    }],
    [206, {
        entries: [
            {
                name: 'Archdevil',
                features: ['Impervious', 'Crown of Darkness', 'Soulbind']
            },
            {
                name: 'Devil, Barbed',
                features: ['Barb'],
                alias: 'Barbed Devil'
            }
        ]
    }],
    [207, {
        entries: [
            {
                name: 'Devil, Cubi',
                features: ['Change Shape', 'Charm', 'Drain'],
                alias: 'Cubi'
            },
            {
                name: 'Devil, Erinyes',
                features: ['Poison'],
                alias: 'Erinyes'
            },
            {
                name: 'Devil, Horned',
                features: ['Iron Hide'],
                alias: 'Horned Devil',
                size: 2
            },
            {
                name: 'Devil, Imp',
                features: ['Impervious', 'Contract', 'Poison'],
                alias: 'Imp',
                size: 0.5
            }
        ]
    }],
    [208, {
        entries: [
            {
                name: 'Pterodactyl',
                features: ['Grab']
            },
            {
                name: 'Tyrannosaurus',
                size: 3
            },
            {
                name: 'Triceratops',
                features: ['Charge'],
                size: 3
            },
            {
                name: 'Brachiosaurus',
                size: 4
            },
            {
                name: 'Plesiosaurus',
                size: 2
            },
            {
                name: 'Velociraptor',
                features: ['Clever'],
                size: 0.5
            }
        ]
    }],
    [209, {
        entries: [
            {
                name: 'Djinni',
                features: ['Impervious', 'Whirlwind', 'Wish'],
                size: 2
            },
            {
                name: 'Doppelganger',
                features: ['Change Shape', 'Telepathy']
            }
        ]
    }],
    [210, {
        entries: [
            {
                name: 'Dragon, Desert',
                features: ['Stormblood', 'Lightning Breath', 'Mirage'],
                alias: 'Desert Dragon',
                size: 3
            },
            {
                name: 'Dragon, Fire',
                features: ['Fireblood', 'Fire Breath'],
                alias: 'Fire Dragon',
                size: 3
            }
        ]
    }],
    [211, {
        entries: [
            {
                name: 'Dragon, Forest',
                features: ['Animate Plants', 'Poison Breath'],
                alias: 'Forest Dragon',
                size: 3
            },
            {
                name: 'Dragon, Frost',
                features: ['Frostblood', 'Ice Breath'],
                alias: 'Frost Dragon',
                size: 3
            },
            {
                name: 'Dragon, Sea',
                features: ['Steam Breath', 'Water Spout'],
                alias: 'Sea Dragon',
                size: 3
            },
            {
                name: 'Dragon, Swamp',
                features: ['Smog Breath'],
                alias: 'Swamp Dragon',
                size: 3
            }
        ]
    }],
    [212, {
        exclude: '212.*goddess\.',
        entries: [
            {
                name: 'Drow',
                features: ['Poison', 'Sunblind']
            },
            {
                name: 'Drow, Priestess',
                features: ['Poison', 'Sunblind', 'Snuff', 'Summon Spiders', 'Web'],
                alias: 'Drow Priestess'
            }
            ,
            {
                name: 'Drow, Drider',
                features: ['Poison', 'Sunblind'],
                alias: 'Drider',
                size: 2
            }
        ]
    }],
    [213, {
        entries: [
            {
                name: 'Druid',
                features: ['Barkskin', 'Conjure Flames', 'Imbue', 'Summon Bear', 'Thunderclap']
            },
            {
                name: 'Dryad',
                features: ['Charm', 'Meld']
            },
            {
                name: 'Duergar',
                features: ['Enlarge', 'Invisibility', 'Sunblind']
            }
        ]
    }],
    [214, {
        entries: [
            {
                name: 'Dung Beetle, Giant',
                features: ['Knock'],
                alias: 'Giant Dung Beetle'
            },
            {
                name: 'Efreeti',
                features: ['Impervious', 'Wall of Flame', 'Wish'],
                size: 2
            }
        ]
    }],
    [215, {
        entries: [
            {
                name: 'Elemental, Air (Lesser)',
                alias: 'Lesser Air Elemental',
                regex: '(A .*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(W.*?)\\sE',
                replace: {
                    '29/42': '29',
                    '2d6/3d6': '2d6',
                    '6/9': '6'
                }
            },
            {
                name: 'Elemental, Earth (Lesser)',
                alias: 'Lesser Earth Elemental',
                regex: '(A t.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(A.*?)\\sE',
                replace: {
                    '31/44': '31',
                    '2d6/3d6': '2d6',
                    '6/9': '6'
                }
            },
            {
                name: 'Elemental, Fire (Lesser)',
                alias: 'Lesser Fire Elemental',
                regex: '(A r.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(I.*?)\\sE',
                replace: {
                    '30/43': '30',
                    '2d6/3d6': '2d6',
                    '6/9': '6'
                }
            },
            {
                name: 'Elemental, Water (Lesser)',
                alias: 'Lesser Water Elemental',
                regex: '(A c.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(W.*?)\\sE',
                replace: {
                    '29/42': '29',
                    '2d6/3d6': '2d6',
                    '6/9': '6'
                }
            },
            {
                name: 'Elemental, Air (Greater)',
                alias: 'Greater Air Elemental',
                regex: '(A .*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(W.*?)\\sE',
                replace: {
                    '29/42': '42',
                    '2d6/3d6': '3d6',
                    '6/9': '9'
                },
                size: 2
            },
            {
                name: 'Elemental, Earth (Greater)',
                alias: 'Greater Earth Elemental',
                regex: '(A t.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(A.*?)\\sE',
                replace: {
                    '31/44': '44',
                    '2d6/3d6': '3d6',
                    '6/9': '9'
                },
                size: 2
            },
            {
                name: 'Elemental, Fire (Greater)',
                alias: 'Greater Fire Elemental',
                regex: '(A r.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(I.*?)\\sE',
                replace: {
                    '30/43': '43',
                    '2d6/3d6': '3d6',
                    '6/9': '9'
                },
                size: 2
            },
            {
                name: 'Elemental, Water (Greater)',
                alias: 'Greater Water Elemental',
                regex: '(A c.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(W.*?)\\sE',
                replace: {
                    '29/42': '42',
                    '2d6/3d6': '3d6',
                    '6/9': '9'
                },
                size: 2
            },
        ]
    }],
    [216, {
        entries: [
            {
                name: 'Elephant',
                features: ['Charge'],
                size: 3
            },
            {
                name: 'Elf',
                features: ['Feyblood']
            },
            {
                name: 'Ettercap',
                features: ['Poison Web']
            },
            {
                name: 'Fairy',
                features: ['Poison'],
                size: 0.5
            },
            {
                name: 'Frog, Giant',
                features: ['Tongue'],
                alias: 'Giant Frog'
            },
            {
                name: 'Gargoyle',
                features: ['Impervious']
            }
        ]
    }],
    [217, {
        entries: [
            {
                name: 'Gelatinous Cube',
                features: ['Engulf', 'Rubbery', 'Toxin'],
                size: 2
            },
            {
                name: 'Ghast',
                features: ['Undead', 'Carrion Stench', 'Paralyze']
            },
            {
                name: 'Ghoul',
                features: ['Undead', 'Paralyze']
            },
            {
                name: 'Ghost',
                features: ['Greater Undead', 'Incorporeal', 'Life Drain', 'Possess']
            }
        ]
    }],
    [218, {
        entries: [
            {
                name: 'Giant, Cloud',
                features: ['Alert'],
                alias: 'Cloud Giant',
                size: 3
            },
            {
                name: 'Giant, Fire',
                features: ['Fireblood'],
                alias: 'Fire Giant',
                size: 3
            }
        ]
    }],
    [219, {
        entries: [
            {
                name: 'Giant, Frost',
                features: ['Frostblood'],
                alias: 'Frost Giant',
                size: 3
            },
            {
                name: 'Giant, Stone',
                features: ['Stone Hide'],
                alias: 'Stone Giant',
                size: 3
            },
            {
                name: 'Giant, Goat',
                alias: 'Goat Giant',
                size: 3
            },
            {
                name: 'Giant, Storm',
                features: ['Stormblood', 'Lightning Bolt'],
                alias: 'Storm Giant',
                size: 3
            },
            {
                name: 'Giant, Hill',
                alias: 'Hill Giant',
                size: 3
            }
        ]
    }],
    [220, {
        entries: [
            {
                name: 'Gibbering Mouther',
                features: ['Gibbering', 'Latch']
            },
            {
                name: 'Gladiator'
            },
            {
                name: 'Gnoll',
                features: ['Rage']
            },
            {
                name: 'Gnome, Deep',
                features: ['Stone Meld'],
                alias: 'Deep Gnome'
            }
        ]
    }],
    [221, {
        exclude: '221.*sorcery.',
        entries: [
            {
                name: 'Goblin',
                features: ['Keen Senses']
            },
            {
                name: 'Goblin, Boss',
                features: ['Keen Senses'],
                alias: 'Goblin Boss'
            },
            {
                name: 'Goblin, Shaman',
                features: ['Keen Senses', 'Bug Brain', 'Skitter', 'Stink Bomb'],
                alias: 'Goblin Shaman'
            }
        ]
    }],
    [222, {
        exclude: '222.*rituals.',
        entries: [
            {
                name: 'Golem, Clay',
                features: ['Golem', 'Curse'],
                alias: 'Clay Golem',
                size: 2
            },
            {
                name: 'Golem, Flesh',
                features: ['Golem', 'Berserk'],
                alias: 'Flesh Golem'
            },
            {
                name: 'Golem, Iron',
                features: ['Golem', 'Poison Breath'],
                alias: 'Iron Golem',
                size: 2
            },
            {
                name: 'Golem, Stone',
                features: ['Golem', 'Slow'],
                alias: 'Stone Golem',
                size: 2
            }
        ]
    }],
    [223, {
        entries: [
            {
                name: 'Gorgon',
                features: ['Charge', 'Petrifying Breath'],
                size: 2
            },
            {
                name: 'Gorilla'
            },
            {
                name: 'Gray Ooze',
                features: ['Impervious', 'Corrosive']
            },
            {
                name: 'Grick',
                features: ['Camouflage', 'Grab']
            }
        ]
    }],
    [224, {
        entries: [
            {
                name: 'Griffon',
                size: 2
            },
            {
                name: 'Grimlow',
                features: ['Grab'],
                size: 2
            },
            {
                name: 'Guard'
            }
        ]
    }],
    [225, {
        exclude: '225.*woods.',
        entries: [
            {
                name: 'Hag, Weald',
                features: ['Drink Pain', 'Shapechange'],
                alias: 'Weald Hag'
            },
            {
                name: 'Hag, Night',
                features: ['Blind', 'Shapechange'],
                alias: 'Night Hag'
            },
            {
                name: 'Hag, Sea',
                features: ['Shapechange', 'Terrify'],
                alias: 'Sea Hag'
            }
        ]
    }],
    [226, {
        entries: [
            {
                name: 'Harpy',
                features: ['Song']
            },
            {
                name: 'Hell Hound',
                features: ['Impervious', 'Fire Breath']
            },
            {
                name: 'Hippogriff',
                size: 2
            },
            {
                name: 'Hippopotamus',
                features: ['Stumpy'],
                size: 2
            }
        ]
    }],
    [227, {
        entries: [
            {
                name: 'Hobgoblin',
                features: ['Phalanx']
            },
            {
                name: 'Horse',
                size: 2
            },
            // Hydra defaults to one head (LV 2, HP 11)
            {
                name: 'Hydra',
                regex: '(A t.*?)\\s+(AC.*?LV \\*)\\s+(H.*?)\\s+I',
                replace: {
                    'HP *': 'HP 11',
                    'LV *': 'LV 2'
                },
                size: 3
            },
            {
                name: 'Invisible Stalker',
                features: ['Bound', 'Invisible', 'Tracking']
            }
        ]
    }],
    [228, {
        entries: [
            {
                name: 'Jellyfish',
                features: ['Toxin'],
                size: 0.5
            },
            {
                name: 'Knight',
                features: ['Oath']
            },
            {
                name: 'Kobold',
                features: ['Dodge']
            },
            {
                name: 'Kobold, Sorcerer',
                features: ['Dodge', 'Scorpion Sting', 'Spider Swarm'],
                alias: 'Kobold Sorcerer'
            }
        ]
    }],
    [229, {
        entries: [
            {
                name: 'Kraken',
                features: ['Impervious', 'Crush', 'Lightning Bolt', 'Storm'],
                size: 4
            },
            {
                name: 'Leech, Giant',
                features: ['Attach'],
                alias: 'Giant Leech',
                size: 0.5
            }
        ]
    }],
    [230, {
        entries: [
            {
                name: 'Leprechaun',
                features: ['Alert', 'Slippery', 'Fool\'s Gold', 'Illusion', 'Invisibility']
            },
            {
                name: 'Lich',
                features: ['Supreme Undead', 'Phylactery', 'Paralysis', 'Flight', 'Null', 'Shadow Leap', 'Sigil of Doom', 'Wither']
            }
        ]
    }],
    [231, {
        entries: [
            {
                name: 'Lion',
                size: 2
            },
            {
                name: 'Lizardfolk'
            },
            {
                name: 'Mage',
                features: ['Arcane Armor', 'Blast', 'Cancel', 'Levitate', 'Snare']
            },
            {
                name: 'Mammoth',
                features: ['Thick Fur', 'Charge'],
                size: 3
            }
        ]
    }],
    [232, {
        entries: [
            {
                name: 'Manta Ray, Giant',
                features: ['Poison'],
                alias: 'Giant Manta Ray',
                size: 3
            },
            {
                name: 'Manticore',
                features: ['Spikes'],
                size: 2
            },
            {
                name: 'Mastiff'
            },
            {
                name: 'Medusa',
                features: ['Godborn', 'Petrify', 'Poison']
            },
            {
                name: 'Merfolk'
            },
            {
                name: 'Mimic',
                features: ['Stick']
            }
        ]
    }],
    [233, {
        entries: [
            {
                name: 'Minotaur',
                features: ['Charge'],
                size: 2
            },
            {
                name: 'Moose',
                size: 2
            }
        ]
    }],
    [234, {
        entries: [
            {
                name: 'Mordanticus the Flayed',
                regex: '(A.*?)\\s+(A.*V.*?\\d+)\\s+(L.*?)\\s+(C.*)\\s+(N.*)\\s+(P.*?)\\s+(A.*?)\\s+(B.*?)\\s+(B.*?)\\s+(B.*?)\\s+(P.*?)\\s+(Tr.*)\\s+M'
            }
        ]
    }],
    [236, {
        entries: [
            {
                name: 'Mummy',
                features: ['Supreme Undead', 'Desiccated', 'Necrosis']
            },
            {
                name: 'Mushroomfolk',
                features: ['Sunblind', 'Telepathic']
            }
        ]
    }],
    [237, {
        entries: [
            {
                name: 'Naga',
                features: ['Poison', 'Agony', 'Hypnotize', 'Whispers'],
                size: 2
            },
            {
                name: 'Naga, Bone',
                features: ['Greater Undead'],
                size: 2
            },
            {
                name: 'Nightmare',
                features: ['Impervious'],
                size: 2
            }
        ]
    }],
    [238, {
        entries: [
            {
                name: 'Obe-Ixx of Azarumme',
                regex: '(A.*?)\\s+(AC.*V.*?\\d+)\\s+(L.*?)\\s+(B.*?)\\s+(Ch.*?)\\s+(Di.*?)\\s+(M.*?)\\s+(U.*?)\\s+O'
            }
        ]
    }],
    [239, {
        entries: [
            {
                name: 'Ochre Jelly',
                features: ['Split'],
                size: 2
            },
            {
                name: 'Octopus, Giant',
                features: ['Grab', 'Ink'],
                alias: 'Giant Octopus',
                size: 2
            },
            {
                name: 'Ogre',
                size: 2
            },
            {
                name: 'Oni',
                features: ['Shapeshift', 'Fade', 'Hellfrost', 'Mist'],
                size: 2
            }
        ]
    }],
    [240, {
        entries: [
            {
                name: 'Orc',
                features: ['Rage']
            },
            {
                name: 'Orc, Chieftain',
                features: ['Rage'],
                alias: 'Orc Chieftain'
            },
            {
                name: 'Otyugh',
                features: ['Disease'],
                size: 2
            }
        ]
    }],
    [241, {
        entries: [
            {
                name: 'Primordial Slime',
                features: ['Impervious', 'Dissolve']
            },
            {
                name: 'Void Spawn',
                features: ['Impervious', 'Toxin'],
                size: 2
            },
            {
                name: 'Void Spider',
                features: ['Impervious', 'Phase', 'Poison']
            },
            {
                name: 'Rime Walker',
                features: ['Impervious', 'Ice Aura'],
                size: 2
            }

        ]
    }],
    [242, {
        entries: [
            {
                name: 'Owlbear',
                features: ['Crush'],
                size: 2
            },
            {
                name: 'Panther'
            },
            {
                name: 'Peasant'
            },
            {
                name: 'Pegasus',
                size: 2
            }
        ]
    }],
    [243, {
        entries: [
            {
                name: 'Phoenix',
                features: ['Impervious', 'Explosion', 'Heat Aura', 'Rebirth'],
                size: 3
            },
            {
                name: 'Piranha, Swarm',
                features: ['Savage'],
                alias: 'Piranha Swarm'
            },
            {
                name: 'Pirate'
            },
            {
                name: 'Priest',
                features: ['Anoint', 'Healing Touch', 'Holy Flame', 'Rebuke']
            }
        ]
    }],
    [244, {
        entries: [
            {
                name: 'Purple Worm',
                features: ['Poison', 'Swallow'],
                size: 4
            },
            {
                name: 'Rakshasa',
                features: ['Impervious', 'Mesmerism', 'Weakness']
            }
        ]
    }],
    [245, {
        entries: [
            {
                name: 'Rat',
                features: ['Disease'],
                size: 0.5
            },
            {
                name: 'Rat, Giant',
                features: ['Disease'],
                alias: 'Giant Rat',
                size: 0.5
            },
            {
                name: 'Rat, Dire',
                features: ['Disease'],
                alias: 'Dire Rat'
            },
            {
                name: 'Rat, Swarm',
                features: ['Disease'],
                alias: 'Rat Swarm'
            }
        ]
    }],
    [246, {
        entries: [
            {
                name: 'Rathgamnon',
                regex: '(A.*?)\\s+(AC.*V.*?\\d+)\\s+(L.*?)\\s+(Ro.*?)\\s+(A.*?)\\s+(A.*?)\\s+(A.*?)\\s+(G.*?)\\s+(P.*?)\\s+(T.*?)\\s+RA',
                size: 2
            }
        ]
    }],
    [247, {
        entries: [
            {
                name: 'Reaver',
                features: ['Bloodlust']
            },
            {
                name: 'Remorhaz',
                features: ['Impervious', 'Melt', 'Swallow'],
                size: 3
            }
        ]
    }],
    [248, {
        entries: [
            {
                name: 'Rhinoceros',
                features: ['Charge'],
                size: 2
            },
            {
                name: 'Roc',
                features: ['Grab'],
                size: 3
            },
            {
                name: 'Roper',
                features: ['Impervious', 'Grab', 'Pull', 'Tendrils'],
                size: 2
            }
        ]
    }],
    [249, {
        entries: [
            {
                name: 'Rot Flower',
                features: ['Toxin']
            },
            {
                name: 'Rust Monster',
                features: ['Corrosive']
            },
            {
                name: 'Sahuagin',
                features: ['Half-Amphibious']
            },
            {
                name: 'Salamander',
                features: ['Impervious', 'Heat Aura']
            },
            {
                name: 'Scarab, Swarm',
                alias: 'Scarab Swarm'
            },
            {
                name: 'Scarecrow',
                features: ['Scream']
            }
        ]
    }],
    [250, {
        entries: [
            {
                name: 'Scorpion',
                features: ['Poison'],
                size: 0.5
            },
            {
                name: 'Scorpion, Giant',
                features: ['Grab', 'Poison'],
                alias: 'Giant Scorpion',
                size: 2
            },
            {
                name: 'Shadow',
                features: ['Drain']
            }
        ]
    }],
    [251, {
        entries: [
            {
                name: 'Shambling Mound',
                features: ['Impervious', 'Engulf'],
                size: 2
            },
            {
                name: 'Shark',
                size: 2
            },
            {
                name: 'Shark, Megalodon',
                features: ['Fearless'],
                alias: 'Megalodon',
                size: 3
            },
            {
                name: 'Siren',
                features: ['Song']
            },
            {
                name: 'Skeleton',
                features: ['Undead']
            },
            {
                name: 'Smilodon',
                size: 2
            }
        ]
    }],
    [252, {
        entries: [
            {
                name: 'Snake, Giant',
                features: ['Constrict'],
                alias: 'Giant Snake',
                size: 3
            },
            {
                name: 'Snake, Cobra',
                features: ['Poison'],
                alias: 'Cobra',
                size: 0.5
            },
            {
                name: 'Snake, Swarm',
                features: ['Poison'],
                alias: 'Snake Swarm'
            },
            {
                name: 'Soldier'
            }
        ]
    }],
    [253, {
        entries: [
            {
                name: 'Sphinx',
                features: ['Roar', 'Gate', 'Omens', 'Riddle', 'Time Bend', 'Unmake'],
                size: 2
            }
        ]
    }],
    [254, {
        entries: [
            {
                name: 'Spider',
                features: ['Poison'],
                size: 0.5
            },
            {
                name: 'Spider, Giant',
                features: ['Poison'],
                alias: 'Giant Spider',
                size: 2
            },
            {
                name: 'Spider, Swarm',
                features: ['Poison'],
                alias: 'Spider Swarm'
            },
            {
                name: 'Stingbat',
                features: ['Blood Drain'],
                size: 0.5
            },
            {
                name: 'Strangler',
                features: ['Stealthy', 'Strangle']
            }
        ]
    }],
    [255, {
        entries: [
            {
                name: 'The Ten-Eyed Oracle',
                regex: '(A.*?)\\s+(AC.*V.*?\\d+)\\s+(L.*?)\\s+(E.*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d+\\..*?)\\s+T',
                size: 2
            }
        ]
    }],
    [256, {
        entries: [
            {
                name: 'The Tarrasque',
                regex: '(A.*?)\\s+(AC.*V.*?\\d+)\\s+(L.*?)\\s+(De.*?)\\s+(P.*?)\\s+(R.*?)\\s+(R.*?)\\s+(R.*?)\\s+(S.*?)\\s+(S.*?)\\s+TH',
                size: 4
            }
        ]
    }],
    [258, {
        entries: [
            {
                name: 'The Wandering Merchant',
                regex: '(A.*?)\\s+(AC.*V.*?\\d+)\\s+(L.*?)\\s+(A.*?)\\s+(B.*?)\\s+(D.*?)\\s+(L.*?)\\s+(R.*?)\\s+(S.*?)\\s+TH'
            }
        ]
    }],
    [259, {
        entries: [
            {
                name: 'Thief',
                features: ['Stealthy', 'Backstab']
            },
            {
                name: 'Thug'
            },
            {
                name: 'Treant',
                features: ['Animate Tree'],
                size: 3
            },
            {
                name: 'Troll',
                features: ['Regenerate'],
                size: 2
            }
        ]
    }],
    [260, {
        entries: [
            {
                name: 'Troll, Frost',
                features: ['Impervious', 'Regenerate'],
                alias: 'Frost Troll',
                size: 2
            },
            {
                name: 'Unicorn',
                features: ['Healing Horn'],
                size: 2
            },
            {
                name: 'Vampire',
                features: ['Supreme Undead', 'Blood Drain', 'Charm', 'Shapechange', 'Vampire']
            }
        ]
    }],
    [261, {
        entries: [
            {
                name: 'Vampire Spawn',
                features: ['Greater Undead', 'Blood Drain', 'Vampire']
            },
            {
                name: 'Violet Fungus'
            }
        ]
    }],
    [262, {
        exclude: '262.*warriors.',
        entries: [
            {
                name: 'Viperian'
            },
            {
                name: 'Viperian, Ophid',
                features: ['Impervious'],
                alias: 'Viperian Ophid'
            },
            {
                name: 'Viperian, Wizard',
                features: ['Hiss', 'Summon Cobra', 'Venom', 'Whispers'],
                alias: 'Viperian Wizard'
            }
        ]
    }],
    [263, {
        entries: [
            {
                name: 'Vulture',
                features: ['Carrion Tracker']
            },
            {
                name: 'Wasp, Giant',
                features: ['Venom'],
                alias: 'Giant Wasp'
            },
            {
                name: 'Werewolf',
                features: ['Impervious', 'Lycanthropy']
            },
            {
                name: 'Wererat',
                features: ['Impervious', 'Lycanthropy']
            },
            {
                name: 'Wight',
                features: ['Greater Undead', 'Life Drain']
            }
        ]
    }],
    [264, {
        entries: [
            {
                name: 'Will-o\'-Wisp',
                features: ['Life Drain'],
                size: 0.5
            },
            {
                name: 'Wolf',
                features: ['Pack Hunter']
            },
            {
                name: 'Wolf, Dire',
                features: ['Pack Hunter'],
                alias: 'Dire Wolf',
                size: 2
            },
            {
                name: 'Wolf, Winter',
                features: ['Impervious', 'Frost Breath'],
                alias: 'Winter Wolf'
            }
        ]
    }],
    [265, {
        entries: [
            {
                name: 'Worg',
                size: 2
            },
            {
                name: 'Wraith',
                features: ['Greater Undead', 'Incorporeal', 'Life Drain']
            },
            {
                name: 'Wyvern',
                features: ['Poison'],
                size: 2
            },
            {
                name: 'Zombie',
                features: ['Undead', 'Relentless']
            }
        ]
    }],
])
const CURSED_SCROLL_1 = new Map([
    [46, {
        entries: [
            {
                name: 'Bittermold',
                features: ['Rubbery']
            },
            {
                name: 'Bogthorn',
                features: ['Poison']
            },
            {
                name: 'Dralech',
                features: ['Shatter'],
                size: 2
            },
            {
                name: 'Gordock Breeg',
                features: ['Algae-Eater']
            },
            {
                name: 'Hexling',
                features: ['Energy Drain']
            },
            {
                name: 'Howler',
                features: ['Mob']
            }
        ]
    }],
    [47, {
        entries: [
            {
                name: 'Ichor Ooze',
                features: ['Rubbery', 'Corrosive']
            },
            {
                name: 'Marrow Fiend',
                features: ['Devour', 'Sap'],
                size: 2
            },
            {
                name: 'Mugdulblub',
                features: ['Rubbery', 'Mutagenic', 'Dissolve'],
                size: 4
            },
            {
                name: 'Mutant Catfish',
                features: ['Poison']
            }
        ]
    }],
    [48, {
        exclude: ' THE WILLOWMAN',
        entries: [
            {
                name: 'Tar Bat',
                features: ['Pyro'],
                size: 0.5
            },
            {
                name: 'Plogrina B.',
                alias: 'Plogrina Bittermold',
                features: ['Rubbery', 'Slime Form']
            },
            {
                name: 'Skrell',
                features: ['Clever'],
                regex: 'LL\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(C.*?)\\s+A\\s'
            },
            {
                name: 'The Willowman',
                features: ['Fearless', 'Terrify', 'Waking Nightmare'],
                regex: '\\s+(A pa.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(F.*?)\\s+(T.*?)\\s+(W.*s\.)',
                size: 2
            }
        ]
    }]
])
const CURSED_SCROLL_2 = new Map([
    [40, {
        entries: [
            {
                name: 'Dust Devil',
                features: ['Impervious', 'Fling']
            },
            {
                name: 'Dunefiend',
                features: ['Howl']
            },
            {
                name: 'Canyon Ape',
                features: ['Ambush', 'Stalk']
            },
            {
                name: 'Donkey',
                size: 2
            },
            {
                name: 'Camel, Silver',
                alias: 'Silver Camel',
                size: 2
            },
        ]
    }],
    [41, {
        entries: [
            {
                name: 'Horse, War',
                alias: 'War Horse',
                size: 2
            },
            {
                name: 'Ras-Godai',
                features: ['Assassinate']
            },
            {
                name: 'Rookie'
            },
            {
                name: 'Mirage',
                features: ['Delude', 'Leech']
            },
            {
                name: 'Hero'
            }
        ]
    }],
    [43, {
        entries: [
            {
                name: 'Scrag, War',
                alias: 'War Scrag',
                size: 2
            },
            {
                name: 'Siruul',
                features: ['Desert Born', 'Mount']
            },
            {
                name: 'Scrag',
                size: 2
            },
            {
                name: 'The Scourge',
                features: ['Stormblood', 'Corruption', 'Lightning Breath', 'Mirage'],
                regex: '\\s+(The\\s.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(S.*?)\\s+(C.*?)\\s+(L.*?)\\s+(M.*s\.)',
                size: 3
            }
        ]
    }]
])
const CURSED_SCROLL_3 = new Map([
    [44, {
        entries: [
            {
                name: 'Drake, Greater',
                alias: 'Greater Drake',
                features: ['Fireblood', 'Fire Gout'],
                size: 3
            },
            {
                name: 'Drake, Lesser',
                alias: 'Lesser Drake',
                features: ['Fireblood', 'Fire Spit'],
                size: 2
            }
        ]
    }],
    [45, {
        entries: [
            {
                name: 'Draugr',
                features: ['Greater Undead', 'Death Chill', 'Stone Swim']
            },
            {
                name: 'Dverg',
                features: ['Shapeshift']
            },
            {
                name: 'Nord',
                features: ['Shield Wall']
            }
        ]
    }],
    [46, {
        entries: [
            {
                name: 'Troll, Deep',
                alias: 'Deep Troll',
                features: ['Regenate'],
                size: 2
            },
            {
                name: 'Sea Serpent',
                size: 4
            },
            {
                name: 'Sea Nymph',
                features: ['Sing']
            },
            {
                name: 'Orca',
                features: ['Pod Hunter'],
                size: 3
            },
            {
                name: 'Oracle',
                features: ['Berserk', 'Fate', 'Mjolnir', 'Strike Blind']
            }
        ]
    }],
    [47, {
        entries: [
            {
                name: 'Werebear',
                features: ['Impervious', 'Crush', 'Lycanthropy']
            },
            {
                name: 'Valkyrie',
                features: ['Impervious', 'Divine Courage']
            }
        ]
    }]
])
const MONSTER_MONDAY_1 = new Map([
    [2, {
        entries: [
            {
                name: 'Brain Eater, Elder',
                alias: 'Elder Brain Eater',
                features: ['Telepathic', 'Latch', 'Mind Blast', 'Mind Control'],
                regex: 'BRAIN EATER, ELDER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(T.*?)\\s+(L.*?)\\s+(M.*?)\\s+(M.*?)\\s+A'
            },
            {
                name: 'Alpha Brain',
                features: ['Telepathic'],
                size: 2,
                regex: 'ALPHA BRAIN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(T.*?)\\s+B'
            },
            {
                name: 'Brain Dog',
                features: ['Stun'],
                regex: 'BRAIN DOG\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)\\sB'
            },
        ]
    }]
])
const MONSTER_MONDAY_2 = new Map([
    [2, {
        entries: [
            {
                name: 'Crabstrosity',
                features: ['Crush', 'Toxin'],
                size: 3,
                regex: 'CRABSTROSITY\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(C.*?)\\s+(T.*?)\\sS'
            },
            {
                name: 'Sting Barnacle',
                feastures: ['Toxin'],
                size: 0.5,
                regex: 'STING BARNACLE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(T.*?)\\sCr'
            }
        ]
    }]
])
const MONSTER_MONDAY_3 = new Map([
    [2, {
        entries: [
            {
                name: 'Heal Cube',
                features: ['Engulf', 'Heal', 'Rubbery'],
                size: 2,
                regex: 'HEAL CUBE(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(E.*?)(H.*?)(R.*?)\\sM'
            }
        ]
    }]
])
const MONSTER_MONDAY_4 = new Map([
    [2, {
        entries: [
            {
                
            }
        ]
    }]
])
const CONCEALED_ABBEY = new Map([
    [3, {
        entries: [
            {
                
            }
        ]
    }]
])
export const BOOKS = new Map([
    ['Shadowdark RPG Core Rulebook', {
        checkPage: 332,
        checkText: 'ShadowDark RPG Core Rulebook',
        offset: 4,
        map: RULEBOOK_MONSTERS
    }],
    ['Cursed Scroll 1: Diablerie', {
        checkPage: 1,
        checkText: 'Cursed Scroll Shadowdark Zine Vol. 1: Diablerie!',
        offset: 0,
        map: CURSED_SCROLL_1
    }],
    ['Cursed Scroll 2: Red Sands', {
        checkPage: 1,
        checkText: 'Cursed Scroll Shadowdark Zine 2: Red Sands',
        offset: 0,
        map: CURSED_SCROLL_2
    }],
    ['Cursed Scroll 3: Midnight Sun', {
        checkPage: 1,
        checkText: 'Cursed Scroll Shadowdark Zine 3: Midnight Sun',
        offset: 0,
        map: CURSED_SCROLL_3
    }],
    ['Monster Monday 1: Brain Eaters', {
        checkPage: 2,
        checkText: 'Brain Eaters',
        offset: 0,
        map: MONSTER_MONDAY_1
    }],
    ['Monster Monday 2: Crabstrosity', {
        checkPage: 2,
        checkText: 'Crabstrosity',
        offset: 0,
        map: MONSTER_MONDAY_2
    }],
    ['Monster Monday 3: Ooze Cubes', {
        checkPage: 2,
        checkText: 'Ooze Cubes',
        offset: 0,
        map: MONSTER_MONDAY_3
    }],
    ['Monster Monday 4: Mazzim the Mesmerist', {
        checkPage: 2,
        checkText: 'Mazzim the Mesmerist',
        offset: 0,
        map: MONSTER_MONDAY_4
    }],
    ['The Concealed Abbey of the Dragonfly Horde', {
        checkPage: 1,
        checkText: 'The Concealed Abbey of the Dragonfly Horde',
        offset: 0,
        map: CONCEALED_ABBEY
    }]
])
