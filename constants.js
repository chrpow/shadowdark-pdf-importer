export const MODULE = {
    ID: 'shadowdark-pdf-importer'
}
export const PAGE_OFFSET = 4
export const RULEBOOK_VERSION = '4.8'
export const RULEBOOK_MONSTERS = new Map([
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
    ]}],
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
                alias: 'Giant Bat'
            },
            {
                name: 'Bat, Swarm',
                alias: 'Bat Swarm'
            },
            {
                name: 'Bear, Brown',
                features: ['Crush'],
                alias: 'Brown Bear'
            },
            {
                name: 'Bear, Polar',
                features: ['Crush', 'Thick Fur'],
                alias: 'Polar Bear'
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
                name: 'Boar',
                features: ['Gore']
            },
            {
                name: 'Black Pudding',
                features: ['Impervious', 'Corrosive']
            },
            {
                name: 'Brain Eater',
                features: ['Hear Thoughts', 'Latch', 'Mind Blast', 'Mind Control']
            }
    ]}],
    [200, {
        entries: [
            {
                name: 'Bugbear',
                features: ['Stealthy']
            },
            {
                name: 'Bulette',
                features: ['Leap']
            },
            {
                name: 'Camel',
            },
            {
                name: 'Cave Brute',
                features: ['Bewilder']
            },
            {
                name: 'Cave Creeper',
                features: ['Toxin']
            }
    ]}],
    [201, {
        entries: [
            {
                name: 'Centaur'
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
                features: ['Fire Breath']
            },
            {
                name: 'Chuul',
                features: ['Grab']
            }
    ]}],
    [202, {
        entries: [
            {
                name: 'Cloaker',
                features: ['Phantoms', 'Screech']
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
    ]}],
    [203, {
        entries: [
            {
                name: 'Crocodile'
            },
            {
                name: 'Cultist',
                features: ['Fearless', 'Deathtouch']
            },
            {
                name: 'Cyclops'
            },
            {
                name: 'Darkmantle',
                features: ['Darkness']
            },
            {
                name: 'Deep One',
                features: ['Sunblind']
            }
    ]}],
    [204, {
        entries: [
            {
                name: 'Demon, Balor',
                features: ['Impervious', 'Grab', 'Hellfire'],
                alias: 'Balor'
            },
            {
                name: 'Demon, Glabrezu',
                features: ['Crush'],
                alias: 'Glabrezu'
            },
            {
                name: 'Demon, Dretch',
                features: ['Gas'],
                alias: 'Dretch'
            }
    ]}],
    [205, {
        entries: [
            {
                name: 'Demon, Marilith',
                features: ['Parry'],
                alias: 'Marilith'
            },
            {
                name: 'Demon, Vrock',
                features: ['Carrion Mist', 'Screech'],
                alias: 'Vrock'
            }
    ]}],
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
    ]}],
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
                alias: 'Horned Devil'
            },
            {
                name: 'Devil, Imp',
                features: ['Impervious', 'Contract', 'Poison'],
                alias: 'Imp'
            }
    ]}],
    [208, {
        entries: [
            {
                name: 'Pterodactyl',
                features: ['Grab']
            },
            {
                name: 'Tyrannosaurus'
            },
            {
                name: 'Triceratops',
                features: ['Charge']
            },
            {
                name: 'Brachiosaurus'
            },
            {
                name: 'Plesiosaurus'
            },
            {
                name: 'Velociraptor',
                features: ['Clever']
            }
    ]}],
    [209, {
        entries: [
            {
                name: 'Djinni',
                features: ['Impervious', 'Whirlwind', 'Wish']
            },
            {
                name: 'Doppelganger',
                features: ['Change Shape', 'Telepathy']
            }
    ]}],
    [210, {
        entries: [
            {
                name: 'Dragon, Desert',
                features: ['Stormblood', 'Lightning Breath', 'Mirage'],
                alias: 'Desert Dragon'
            },
            {
                name: 'Dragon, Fire',
                features: ['Fireblood', 'Fire Breath'],
                alias: 'Fire Dragon'
            }            
    ]}],
    [211, {
        entries: [
            {
                name: 'Dragon, Forest',
                features: ['Animate Plants', 'Poison Breath'],
                alias: 'Forest Dragon'
            },
            {
                name: 'Dragon, Frost',
                features: ['Frostblood', 'Ice Breath'],
                alias: 'Frost Dragon'
            },
            {
                name: 'Dragon, Sea',
                features: ['Steam Breath', 'Water Spout'],
                alias: 'Sea Dragon'
            },
            {
                name: 'Dragon, Swamp',
                features: ['Smog Breath'],
                alias: 'Swamp Dragon'
            }
    ]}],
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
                alias: 'Drider'
            }
    ]}],
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
    ]}],
    [214, {
        entries: [
            {
                name: 'Dung Beetle, Giant',
                features: ['Knock'],
                alias: 'Giant Dung Beetle'
            },
            {
                name: 'Efreeti',
                features: ['Impervious', 'Wall of Flame', 'Wish']
            }
    ]}],
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
                }
            },
            {
                name: 'Elemental, Earth (Greater)',
                alias: 'Greater Earth Elemental',
                regex: '(A t.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(A.*?)\\sE',
                replace: {
                    '31/44': '44',
                    '2d6/3d6': '3d6',
                    '6/9': '9'
                }
            },
            {
                name: 'Elemental, Fire (Greater)',
                alias: 'Greater Fire Elemental',
                regex: '(A r.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(I.*?)\\sE',
                replace: {
                    '30/43': '43',
                    '2d6/3d6': '3d6',
                    '6/9': '9'
                }
            },
            {
                name: 'Elemental, Water (Greater)',
                alias: 'Greater Water Elemental',
                regex: '(A c.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(W.*?)\\sE',
                replace: {
                    '29/42': '42',
                    '2d6/3d6': '3d6',
                    '6/9': '9'
                }
            },
    ]}],
    [216, {
        entries: [
            {
                name: 'Elephant',
                features: ['Charge']
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
                features: ['Poison']
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
    ]}],
    [217, {
        entries: [
            {
                name: 'Gelatinous Cube',
                features: ['Engulf', 'Rubbery', 'Toxin']
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
    ]}],
    [218, {
        entries: [
            {
                name: 'Giant, Cloud',
                features: ['Alert'],
                alias: 'Cloud Giant'
            },
            {
                name: 'Giant, Fire',
                features: ['Fireblood'],
                alias: 'Fire Giant'
            }
    ]}],
    [219, {
        entries: [
            {
                name: 'Giant, Frost',
                features: ['Frostblood'],
                alias: 'Frost Giant'
            },
            {
                name: 'Giant, Stone',
                features: ['Stone Hide'],
                alias: 'Stone Giant'
            },
            {
                name: 'Giant, Goat',
                alias: 'Goat Giant'
            },
            {
                name: 'Giant, Storm',
                features: ['Stormblood', 'Lightning Bolt'],
                alias: 'Storm Giant'
            },
            {
                name: 'Giant, Hill',
                alias: 'Hill Giant'
            }
    ]}],
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
    ]}],
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
    ]}],
    [222, {
        exclude: '222.*rituals.',
        entries: [
            {
                name: 'Golem, Clay',
                features: ['Golem', 'Curse'],
                alias: 'Clay Golem'
            },
            {
                name: 'Golem, Flesh',
                features: ['Golem', 'Berserk'],
                alias: 'Flesh Golem'
            },
            {
                name: 'Golem, Iron',
                features: ['Golem', 'Poison Breath'],
                alias: 'Iron Golem'
            },
            {
                name: 'Golem, Stone',
                features: ['Golem', 'Slow'],
                alias: 'Stone Golem'
            }
    ]}],
    [223, {
        entries: [
            {
                name: 'Gorgon',
                features: ['Charge', 'Petrifying Breath']
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
    ]}],
    [224, {
        entries: [
            {
                name: 'Griffon'
            },
            {
                name: 'Grimlow',
                features: ['Grab']
            },
            {
                name: 'Guard'
            }
    ]}],
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
    ]}],
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
                name: 'Hippogriff'
            },
            {
                name: 'Hippopotamus',
                features: ['Stumpy']
            }
    ]}],
    [227, {
        entries: [
            {
                name: 'Hobgoblin',
                features: ['Phalanx']
            },
            {
                name: 'Horse'
            },
            // Hydra defaults to one head (LV 2, HP 11)
            {
                name: 'Hydra',
                regex: '(A t.*?)\\s+(AC.*?LV \\*)\\s+(H.*?)\\s+I',
                replace: {
                    'HP *': 'HP 11',
                    'LV *': 'LV 2'
                }
            },
            {
                name: 'Invisible Stalker',
                features: ['Bound', 'Invisible', 'Tracking']
            }
    ]}],
    [228, {
        entries: [
            {
                name: 'Jellyfish',
                features: ['Toxin']
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
    ]}],
    [229, {
        entries: [
            {
                name: 'Kraken',
                features: ['Impervious', 'Crush', 'Lightning Bolt', 'Storm']
            },
            {
                name: 'Leech, Giant',
                features: ['Attach'],
                alias: 'Giant Leech'
            }
    ]}],
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
    ]}],
    [231, {
        entries: [
            {
                name: 'Lion'
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
                features: ['Thick Fur', 'Charge']
            }
    ]}],
    [232, {
        entries: [
            {
                name: 'Manta Ray, Giant',
                features: ['Poison'],
                alias: 'Giant Manta Ray'
            },
            {
                name: 'Manticore',
                features: ['Spikes']
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
    ]}],
    [233, {
        entries: [
            {
                name: 'Minotaur',
                features: ['Charge']
            },
            {
                name: 'Moose'
            }
    ]}],
    [234, {
        entries: [
            {
                name: 'Mordanticus the Flayed',
                regex: '(A.*?)\\s+(A.*V.*?\\d+)\\s+(L.*?)\\s+(C.*)\\s+(N.*)\\s+(P.*?)\\s+(A.*?)\\s+(B.*?)\\s+(B.*?)\\s+(B.*?)\\s+(P.*?)\\s+(Tr.*)\\s+M'
            }
    ]}],
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
    ]}],
    [237, {
        entries: [
            {
                name: 'Naga',
                features: ['Poison', 'Agony', 'Hypnotize', 'Whispers']
            },
            {
                name: 'Naga, Bone',
                features: ['Greater Undead']
            },
            {
                name: 'Nightmare',
                features: ['Impervious']
            }
    ]}],
    [238, {
        entries: [
            {
                name: 'Obe-Ixx of Azarumme',
                regex: '(A.*?)\\s+(AC.*V.*?\\d+)\\s+(L.*?)\\s+(B.*?)\\s+(Ch.*?)\\s+(Di.*?)\\s+(M.*?)\\s+(U.*?)\\s+O'
            }
    ]}],
    [239, {
        entries: [
            {
                name: 'Ochre Jelly',
                features: ['Split']
            },
            {
                name: 'Octopus, Giant',
                features: ['Grab', 'Ink'],
                alias: 'Giant Octopus'
            },
            {
                name: 'Ogre'
            },
            {
                name: 'Oni',
                features: ['Shapeshift', 'Fade', 'Hellfrost', 'Mist']
            }
    ]}],
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
                features: ['Disease']
            }
    ]}],
    [241, {
        entries: [
            {
                name: 'Primordial Slime',
                features: ['Impervious', 'Dissolve']
            },
            {
                name: 'Void Spawn',
                features: ['Impervious', 'Toxin']
            },
            {
                name: 'Void Spider',
                features: ['Impervious', 'Phase', 'Poison']
            },
            {
                name: 'Rime Walker',
                features: ['Impervious', 'Ice Aura']
            }
            
    ]}],
    [242, {
        entries: [
            {
                name: 'Owlbear',
                features: ['Crush']
            },
            {
                name: 'Panther'
            },
            {
                name: 'Peasant'
            },
            {
                name: 'Pegasus'
            }
    ]}],
    [243, {
        entries: [
            {
                name: 'Phoenix',
                features: ['Impervious', 'Explosion', 'Heat Aura', 'Rebirth']
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
    ]}],
    [244, {
        entries: [
            {
                name: 'Purple Worm',
                features: ['Poison', 'Swallow']
            },
            {
                name: 'Rakshasa',
                features: ['Impervious', 'Mesmerism', 'Weakness']
            }
    ]}],
    [245, {
        entries: [
            {
                name: 'Rat',
                features: ['Disease']
            },
            {
                name: 'Rat, Giant',
                features: ['Disease'],
                alias: 'Giant Rat'
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
    ]}],
    [246, {
        entries: [
            {
                name: 'Rathgamnon',
                regex: '(A.*?)\\s+(AC.*V.*?\\d+)\\s+(L.*?)\\s+(Ro.*?)\\s+(A.*?)\\s+(A.*?)\\s+(A.*?)\\s+(G.*?)\\s+(P.*?)\\s+(T.*?)\\s+RA'
            }
    ]}],
    [247, {
        entries: [
            {
                name: 'Reaver',
                features: ['Bloodlust']
            },
            {
                name: 'Remorhaz',
                features: ['Impervious', 'Melt', 'Swallow']
            }
    ]}],
    [248, {
        entries: [
            {
                name: 'Rhinoceros',
                features: ['Charge']
            },
            {
                name: 'Roc',
                features: ['Grab']
            },
            {
                name: 'Roper',
                features: ['Impervious', 'Grab', 'Pull', 'Tendrils']
            }
    ]}],
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
    ]}],
    [250, {
        entries: [
            {
                name: 'Scorpion',
                features: ['Poison']
            },
            {
                name: 'Scorpion, Giant',
                features: ['Grab', 'Poison'],
                alias: 'Giant Scorpion'
            },
            {
                name: 'Shadow',
                features: ['Drain']
            }
    ]}],
    [251, {
        entries: [
            {
                name: 'Shambling Mound',
                features: ['Impervious', 'Engulf']
            },
            {
                name: 'Shark'
            },
            {
                name: 'Shark, Megalodon',
                features: ['Fearless'],
                alias: 'Megalodon'
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
                name: 'Smilodon'
            }
    ]}],
    [252, {
        entries: [
            {
                name: 'Snake, Giant',
                features: ['Constrict'],
                alias: 'Giant Snake'
            },
            {
                name: 'Snake, Cobra',
                features: ['Poison'],
                alias: 'Cobra'
            },
            {
                name: 'Snake, Swarm',
                features: ['Poison'],
                alias: 'Snake Swarm'
            },
            {
                name: 'Soldier'
            }
    ]}],
    [253, {
        entries: [
            {
                name: 'Sphinx',
                features: ['Roar', 'Gate', 'Omens', 'Riddle', 'Time Bend', 'Unmake']
            }
    ]}],
    [254, {
        entries: [
            {
                name: 'Spider',
                features: ['Poison']
            },
            {
                name: 'Spider, Giant',
                features: ['Poison'],
                alias: 'Giant Spider'
            },
            {
                name: 'Spider, Swarm',
                features: ['Poison'],
                alias: 'Spider Swarm'
            },
            {
                name: 'Stingbat',
                features: ['Blood Drain']
            },
            {
                name: 'Strangler',
                features: ['Stealthy', 'Strangle']
            }
    ]}],
    [255, {
        entries: [
            {
                name: 'The Ten-Eyed Oracle',
                regex: '(A.*?)\\s+(AC.*V.*?\\d+)\\s+(L.*?)\\s+(E.*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d+\\..*?)\\s+T'
            }
    ]}],
    [256, {
        entries: [
            {
                name: 'The Tarrasque',
                regex: '(A.*?)\\s+(AC.*V.*?\\d+)\\s+(L.*?)\\s+(De.*?)\\s+(P.*?)\\s+(R.*?)\\s+(R.*?)\\s+(R.*?)\\s+(S.*?)\\s+(S.*?)\\s+TH'
            }
    ]}],
    [258, {
        entries: [
            {
                name: 'The Wandering Merchant',
                regex: '(A.*?)\\s+(AC.*V.*?\\d+)\\s+(L.*?)\\s+(A.*?)\\s+(B.*?)\\s+(D.*?)\\s+(L.*?)\\s+(R.*?)\\s+(S.*?)\\s+TH'
            }
    ]}],
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
                features: ['Animate Tree']
            },
            {
                name: 'Troll',
                features: ['Regenerate']
            }
    ]}],
    [260, {
        entries: [
            {
                name: 'Troll, Frost',
                features: ['Impervious', 'Regenerate'],
                alias: 'Frost Troll'
            },
            {
                name: 'Unicorn',
                features: ['Healing Horn']
            },
            {
                name: 'Vampire',
                features: ['Supreme Undead', 'Blood Drain', 'Charm', 'Shapechange', 'Vampire']
            }
    ]}],
    [261, {
        entries: [
            {
                name: 'Vampire Spawn',
                features: ['Greater Undead', 'Blood Drain', 'Vampire']
            },
            {
                name: 'Violet Fungus'
            }
    ]}],
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
    ]}],
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
            },            {
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
    ]}],
    [264, {
        entries: [
            {
                name: 'Will-o\'-Wisp',
                features: ['Life Drain']
            },
            {
                name: 'Wolf',
                features: ['Pack Hunter']
            },
            {
                name: 'Wolf, Dire',
                features: ['Pack Hunter'],
                alias: 'Dire Wolf'
            },
            {
                name: 'Wolf, Winter',
                features: ['Impervious', 'Frost Breath'],
                alias: 'Winter Wolf'
            }
    ]}],
    [265, {
        entries: [
            {
                name: 'Worg'
            },
            {
                name: 'Wraith',
                features: ['Greater Undead', 'Incorporeal', 'Life Drain']
            },
            {
                name: 'Wyvern',
                features: ['Poison']
            },
            {
                name: 'Zombie',
                features: ['Undead', 'Relentless']
            }
    ]}],
])
