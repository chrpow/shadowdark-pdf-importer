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
                features: ['Poison']
            },
            {
                name: 'Centipede, Swarm',
                features: ['Poison']
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
                features: ['Impervious', 'Grab', 'Hellfire']
            },
            {
                name: 'Demon, Glabrezu',
                features: ['Crush']
            },
            {
                name: 'Demon, Dretch',
                features: ['Gas']
            }
    ]}],
    [205, {
        entries: [
            {
                name: 'Demon, Marilith',
                features: ['Parry']
            },
            {
                name: 'Demon, Vrock',
                features: ['Carrion Mist', 'Screech']
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
                features: ['Barb']
            }
    ]}],
    [207, {
        entries: [
            {
                name: 'Devil, Cubi',
                features: ['Change Shape', 'Charm', 'Drain']
            },
            {
                name: 'Devil, Erinyes',
                features: ['Poison']
            },
            {
                name: 'Devil, Horned',
                features: ['Iron Hide']
            }
    ]}],
    [208, {
        entries: [
            {
                name: 'Brachiosaurus'
            },
            {
                name: 'Plesiosaurus'
            },
            {
                name: 'Pterodactyl',
                features: ['Grab']
            },
            {
                name: 'Triceratops',
                features: ['Charge']
            },
            {
                name: 'Tyrannosaurus'
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
                features: ['Stormblood', 'Lightning Breath', 'Mirage']
            },
            {
                name: 'Demon, Fire',
                features: ['Fireblood', 'Fire Breath']
            }            
    ]}],
    [211, {
        entries: [
            {
                name: 'Dragon, Forest',
                features: ['Animate Plants', 'Poison Breath']
            },
            {
                name: 'Dragon, Frost',
                features: ['Frostblood', 'Ice Breath']
            },
            {
                name: 'Dragon, Sea',
                features: ['Steam Breath', 'Water Spout']
            },
            {
                name: 'Dragon, Swamp',
                features: ['Smog Breath']
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
                name: 'Drow, Drider',
                features: ['Poison', 'Sunblind']
            },
            {
                name: 'Drow, Priestess',
                features: ['Poison', 'Sunblind', 'Snuff', 'Summon Spiders', 'Web']
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
                features: ['Knock']
            },
            {
                name: 'Efreeti',
                features: ['Impervious', 'Wall of Flame', 'Wish']
            }
    ]}],
    // [215, {SPECIAL************************************************
    //     entries: [
    //         {
    //             name: 'Dung Beetle, Giant',
    //             features: ['Knock']
    //         },
    //         {
    //             name: 'Efreeti',
    //             features: ['Impervious', 'Wall of Flame', 'Wish']
    //         }
    // ]}],
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
                features: ['Tongue']
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
                name: 'Ghost',
                features: ['Greater Undead', 'Incorporeal', 'Life Drain', 'Possess']
            },
            {
                name: 'Ghoul',
                features: ['Undead', 'Paralyze']
            }
    ]}],
    [218, {
        entries: [
            {
                name: 'Giant, Cloud',
                features: ['Alert']
            },
            {
                name: 'Giant, Fire',
                features: ['Fireblood']
            }
    ]}],
    [219, {
        entries: [
            {
                name: 'Giant, Frost',
                features: ['Frostblood']
            },
            {
                name: 'Giant, Goat'
            },
            {
                name: 'Giant, Hill'
            },
            {
                name: 'Giant, Stone',
                features: ['Stone Hide']
            },
            {
                name: 'Giant, Storm',
                features: ['Stormblood', 'Lightning Bolt']
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
                features: ['Stone Meld']
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
                features: ['Keen Senses']
            },
            {
                name: 'Goblin, Shaman',
                features: ['Keen Senses', 'Bug Brain', 'Skitter', 'Stink Bomb']
            }
    ]}],
    [222, {
        exclude: '222.*rituals.',
        entries: [
            {
                name: 'Golem, Clay',
                features: ['Golem', 'Curse']
            },
            {
                name: 'Golem, Flesh',
                features: ['Golem', 'Berserk']
            },
            {
                name: 'Golem, Iron',
                features: ['Golem', 'Poison Breath']
            },
            {
                name: 'Golem, Stone',
                features: ['Golem', 'Slow']
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
                name: 'Gorilla',
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
                features: ['Drink Pain', 'Shapechange']
            },
            {
                name: 'Hag, Night',
                features: ['Blind', 'Shapechange']
            },
            {
                name: 'Hag, Sea',
                features: ['Shapechange', 'Terrify']
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
            {
                name: 'Hydra',
                feature: ['Heads']
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
                features: ['Dodge', 'Scorpion Sting', 'Spider Swarm']
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
                features: ['Attach']
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
                features: ['Poison']
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
    // [234, {************************************************************
    //     entries: [
    //         {
    //             name: 'Minotaur',
    //             features: ['Charge']
    //         },
    //         {
    //             name: 'Moose'
    //         }
    // ]}],
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
    // [237, {********************************************************************
    //     entries: [
    //         {
    //             name: 'Naga',
    //             features: ['Poison', 'Agony', 'Hypnotize', 'Whispers']
    //         },
    //         {
    //             name: 'Naga, Bone',
    //             features: ['Greater Undead']
    //         },
    //         {
    //             name: 'Nightmare',
    //             features: ['Impervious']
    //         }
    // ]}],
    [239, {
        entries: [
            {
                name: 'Ochre Jelly',
                features: ['Split']
            },
            {
                name: 'Octopus, Giant',
                features: ['Grab', 'Ink']
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
                name: 'Orc, Chieftan',
                features: ['Rage']
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
                name: 'Rime Walker',
                features: ['Impervious', 'Ice Aura']
            },
            {
                name: 'Void Spawn',
                features: ['Impervious', 'Toxin']
            },
            {
                name: 'Void Spider',
                features: ['Impervious', 'Phase', 'Poison']
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
                features: ['Savage']
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
                features: ['Disease']
            },
            {
                name: 'Rat, Dire',
                features: ['Disease']
            },
            {
                name: 'Rat, Swarm',
                features: ['Disease']
            }
    ]}],
    // [246, {
    //     entries: [
    //         {
    //             name: 'Rat',
    //             features: ['Disease']
    //         },
    //         {
    //             name: 'Rat, Giant',
    //             features: ['Disease']
    //         },
    //         {
    //             name: 'Rat, Dire',
    //             features: ['Disease']
    //         },
    //         {
    //             name: 'Rat, Swarm',
    //             features: ['Disease']
    //         }
    // ]}],
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
                name: 'Scarab, Swarm'
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
                features: ['Grab', 'Poison']
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
                features: ['Fearless']
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
                name: 'Snake, Cobra',
                features: ['Poison']
            },
            {
                name: 'Snake, Giant',
                features: ['Constrict']
            },
            {
                name: 'Snake, Swarm',
                features: ['Poison']
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
                features: ['Poison']
            },
            {
                name: 'Spider, Swarm',
                features: ['Poison']
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
    // [255, {**************************
    //     entries: [
    //         {
    //             name: 'Spider',
    //             features: ['Poison']
    //         },
    //         {
    //             name: 'Spider, Giant',
    //             features: ['Poison']
    //         },
    //         {
    //             name: 'Spider, Swarm',
    //             features: ['Poison']
    //         },
    //         {
    //             name: 'Stingbat',
    //             features: ['Blood Drain']
    //         },
    //         {
    //             name: 'Strangler',
    //             features: ['Stealthy', 'Strangle']
    //         }
    // ]}],
        // [256, {**************************
    //     entries: [
    //         {
    //             name: 'Spider',
    //             features: ['Poison']
    //         },
    //         {
    //             name: 'Spider, Giant',
    //             features: ['Poison']
    //         },
    //         {
    //             name: 'Spider, Swarm',
    //             features: ['Poison']
    //         },
    //         {
    //             name: 'Stingbat',
    //             features: ['Blood Drain']
    //         },
    //         {
    //             name: 'Strangler',
    //             features: ['Stealthy', 'Strangle']
    //         }
    // ]}],
        // [258, {**************************
    //     entries: [
    //         {
    //             name: 'Spider',
    //             features: ['Poison']
    //         },
    //         {
    //             name: 'Spider, Giant',
    //             features: ['Poison']
    //         },
    //         {
    //             name: 'Spider, Swarm',
    //             features: ['Poison']
    //         },
    //         {
    //             name: 'Stingbat',
    //             features: ['Blood Drain']
    //         },
    //         {
    //             name: 'Strangler',
    //             features: ['Stealthy', 'Strangle']
    //         }
    // ]}],
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
                features: ['Impervious', 'Regenerate']
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
            },
            {
                name: 'Vampire',
                features: ['Supreme Undead', 'Blood Drain', 'Charm', 'Shapechange', 'Vampire']
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
                features: ['Impervious']
            },
            {
                name: 'Viperian, Wizard',
                features: ['Hiss', 'Summon Cobra', 'Venom', 'Whispers']
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
                features: ['Venom']
            },
            {
                name: 'Wererat',
                features: ['Impervious', 'Lycanthropy']
            },
            {
                name: 'Werewolf',
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
                features: ['Pack Hunter']
            },
            {
                name: 'Wolf, Winter',
                features: ['Impervious', 'Frost Breath']
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

