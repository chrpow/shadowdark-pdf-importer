export const MODULE = {
	ID: "shadowdark-pdf-importer"
};

const CS1 = new Map([
	[
		46,
		{
			entries: [
				{
					name: "Bittermold",
					regex: "BITTERMOLD\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+BOGTHORN"
				},
				{
					name: "Bogthorn",
					regex: "BOGTHORN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+DRALECH"
				},
				{
					name: "Dralech",
					regex: "DRALECH\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+GORDOCK\\sBREEG",
					size: 2
				},
				{
					name: "Gordock Breeg",
					regex: "GORDOCK\\sBREEG\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+HEXLING"
				},
				{
					name: "Hexling",
					regex: "HEXLING\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+HOWLER"
				},
				{
					name: "Howler",
					regex: "HOWLER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)"
				}
			]
		}
	],
	[
		47,
		{
			entries: [
				{
					name: "Ichor Ooze",
					regex: "ICHOR\\sOOZE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(C.*?)\\s+MARROW\\sFIEND"
				},
				{
					name: "Marrow Fiend",
					regex: "MARROW\\sFIEND\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*?)\\s+MUGDULBLUB",
					size: 2
				},
				{
					name: "Mugdulblub",
					regex: "MUGDULBLUB\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(M.*?)\\s+(D.*?)\\s+MUTANT\\sCATFISH",
					size: 4
				},
				{
					name: "Mutant Catfish",
					regex: "MUTANT\\sCATFISH\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)"
				}
			]
		}
	],
	[
		48,
		{
			exclude: "THE WILLOWMAN",
			entries: [
				{
					name: "Tar Bat",
					regex: "TAR\\sBAT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+PLOGRINA\\sB.",
					size: 0.5
				},
				{
					name: "Plogrina B.",
					regex: "PLOGRINA\\sB.\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*?)\\s+SKRELL",
					alias: "Plogrina Bittermold"
				},
				{
					name: "Skrell",
					regex: "SKRELL\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+THE\\sWILLOWMAN"
				},
				{
					name: "The Willowman",
					regex: "\\s+(A\\spa.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(F.*?)\\s+(T.*?)\\s+(W.*s\\.)",
					size: 2
				}
			]
		}
	]
]);
const CS2 = new Map([
	[
		40,
		{
			entries: [
				{
					name: "Dust Devil",
					regex: "DUST\\sDEVIL\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(F.*?)\\s+DUNEFIEND"
				},
				{
					name: "Dunefiend",
					regex: "DUNEFIEND\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+CANYON\\sAPE"
				},
				{
					name: "Canyon Ape",
					regex: "CANYON\\sAPE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*?)\\s+DONKEY"
				},
				{
					name: "Donkey",
					regex: "DONKEY\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				},
				{
					name: "Camel, Silver",
					regex: "CAMEL,\\sSILVER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					alias: "Silver Camel",
					size: 2
				}
			]
		}
	],
	[
		41,
		{
			entries: [
				{
					name: "Horse, War",
					regex: "HORSE,\\sWAR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					alias: "War Horse",
					size: 2
				},
				{
					name: "Ras-Godai",
					regex: "RAS-GODAI\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+ROOKIE"
				},
				{
					name: "Rookie",
					regex: "ROOKIE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				},
				{
					name: "Mirage",
					regex: "MIRAGE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(L.*?)\\s+HERO"
				},
				{
					name: "Hero",
					regex: "HERO\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				}
			]
		}
	],
	[
		43,
		{
			exclude: "THE SCOURGE",
			entries: [
				{
					name: "Scrag, War",
					regex: "SCRAG,\\sWAR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					alias: "War Scrag",
					size: 2
				},
				{
					name: "Siruul",
					regex: "SIRUUL\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(M.*?)\\s+SCRAG"
				},
				{
					name: "Scrag",
					regex: "SCRAG\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				},
				{
					name: "The Scourge",
					regex: "\\s+(The\\s.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(S.*?)\\s+(C.*?)\\s+(L.*?)\\s+(M.*s\\.)",
					size: 3
				}
			]
		}
	]
]);
const CS3 = new Map([
	[
		44,
		{
			entries: [
				{
					name: "Drake, Greater",
					regex: "DRAKE,\\sGREATER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(Fire G.*?)\\s+DRAKE,\\sLESSER",
					alias: "Greater Drake",
					size: 3
				},
				{
					name: "Drake, Lesser",
					regex: "DRAKE,\\sLESSER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(Fire S.*)",
					alias: "Lesser Drake",
					size: 2
				}
			]
		}
	],
	[
		45,
		{
			entries: [
				{
					name: "Draugr",
					regex: "DRAUGR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(D.*?)\\s+(S.*?)\\s+DVERG"
				},
				{
					name: "Dverg",
					regex: "DVERG\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+NORD"
				},
				{
					name: "Nord",
					regex: "NORD\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)"
				}
			]
		}
	],
	[
		46,
		{
			entries: [
				{
					name: "Troll, Deep",
					regex: "TROLL,\\sDEEP\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(Regena.*?)\\s+SEA\\sSERPENT",
					alias: "Deep Troll",
					size: 2
				},
				{
					name: "Sea Serpent",
					regex: "SEA\\sSERPENT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 4
				},
				{
					name: "Sea Nymph",
					regex: "SEA\\sNYMPH\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+ORCA"
				},
				{
					name: "Orca",
					regex: "ORCA\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+ORACLE",
					size: 3
				},
				{
					name: "Oracle",
					regex: "ORACLE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(Fa.*?)\\s+(M.*?)\\s+(St.*)"
				}
			]
		}
	],
	[
		47,
		{
			entries: [
				{
					name: "Werebear",
					regex: "WEREBEAR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(C.*?)\\s+(L.*?)\\s+VALKYRIE"
				},
				{
					name: "Valkyrie",
					regex: "VALKYRIE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(D.*)"
				}
			]
		}
	]
]);

const MM1 = new Map([
	[
		2,
		{
			entries: [
				{
					name: "Brain Eater, Elder",
					regex: "BRAIN\\sEATER, ELDER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(L.*?)\\s+(M.*?)\\s+(M.*?)\\s+ALPHA\\sBRAIN",
					alias: "Elder Brain Eater"
				},
				{
					name: "Alpha Brain",
					regex: "ALPHA\\sBRAIN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+BRAIN\\sDOG",
					size: 2
				},
				{
					name: "Brain Dog",
					regex: "BRAIN\\sDOG\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)Brain E"
				}
			]
		}
	]
]);
const MM2 = new Map([
	[
		2,
		{
			entries: [
				{
					name: "Crabstrosity",
					regex: "CRABSTROSITY\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(T.*?)\\s+STING\\sBARNACLE",
					size: 3
				},
				{
					name: "Sting Barnacle",
					regex: "STING\\sBARNACLE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*ds\\.)",
					size: 0.5
				}
			]
		}
	]
]);
const MM3 = new Map([
	[
		2,
		{
			// All monster speeds in this document are missing commas.
			entries: [
				{
					name: "Heal Cube",
					regex: "HEAL\\sCUBE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(H.*?)\\s+(R.*?)\\s+MAGNETIC\\sCUBE",
					size: 2,
					replace: {
						"near S": "near, S"
					}
				},
				{
					name: "Magnetic Cube",
					regex: "MAGNETIC\\sCUBE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(M.*?)\\s+(R.*?)\\s+G",
					size: 2,
					replace: {
						"near S": "near, S"
					}
				},
				{
					name: "Necrotic Cube",
					regex: "(A\\sgre.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(N.*?)\\s+(R.*?)\\s+(S.*)N",
					size: 2,
					replace: {
						"near S": "near, S"
					}
				}
			]
		}
	]
]);
const MM4 = new Map([
	[
		2,
		{
			entries: [
				{
					name: "Mazzim the Mesmerist",
					regex: "(A\\s.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(C.*?)\\s+(E.*?)\\s+(I.*?)\\s+(M.*)MA"
				}
			]
		}
	]
]);
const MM5 = new Map([
	[
		2,
		{
			entries: [
				{
					name: "Lord Hedron Antioch",
					regex: "\\d\\s+(L.*br.*)\\s+(AC.*?LV.*?\\d+?)\\s+(S.*?)\\s+(B.*?)\\s+(Ch.*?)\\s+(Di.*?)\\s+(H.*?)\\s+(V.*?)\\s+L"
				}
			]
		}
	]
]);
const MM6 = new Map([
	[
		2,
		{
			entries: [
				{
					name: "Fungibold",
					regex: "F.*\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*)\\s+FU"
				},
				{
					name: "Fungibold, Magi",
					regex: "MAGI\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(H.*?)\\s+(S.*?)\\s+(Conf.*?)\\s+(M.*?)\\s+(P.*?)\\s+In",
					alias: "Fungibold Magi"
				}
			]
		}
	]
]);
const MM7 = new Map([
	[
		2,
		{
			entries: [
				{
					name: "The Mad Jester",
					regex: "(Pr.*)\\s(AC.*?LV.*?\\d+?)\\s+(D.*?)\\s+(G.*?)\\s+(I.*?)\\s+(Tu.*?)\\s+TH"
				}
			]
		}
	]
]);
const MM8 = new Map([
	[
		2,
		{
			entries: [
				{
					name: "DEMON, LASH",
					regex: "H\\s(.*)\\s+(AC.*?LV.*?\\d+?)\\s+(B.*?)\\s+(B.*?)\\s+(V.*?)\\sL",
					Alias: "Lash Demon"
				}
			]
		}
	]
]);
const MM9 = new Map([
	[
		2,
		{
			entries: [
				{
					name: "Sister Marjory",
					regex: "Y\\s(.*)\\s+(AC.*?LV.*?\\d+?)\\s+(H.*?)\\s+(A.*?)\\s+(E.*?)\\s+(G.*?)\\sL"
				},
				{
					name: "Little Sister",
					regex: " SISTER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(E.*?)\\s+(F.*?)\\sE"
				},
				{
					name: "Elder Sister",
					regex: "R SISTER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(B.*?)\\s+(E.*?)\\s+(Se.*?)\\s+(Sc.*?)\\s+C"
				}
			]
		}
	]
]);
const MM10 = new Map([
	[
		2,
		{
			entries: [
				{
					name: "The Piper",
					regex: "rd\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(C.*?)\\s+(Pa.*?)\\s+(Pu.*?)\\s+(S.*?)\\sTH",
					replace: {
						"( ": "("
					}
				}
			]
		}
	]
]);
const MM11 = new Map([
	[
		2,
		{
			entries: [
				{
					name: "The Shadowbarge",
					regex: "!\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(L.*?)\\s+(So.*?)\\s+(E.*?)\\s+(W.*?)\\s+(T.*?)\\sT",
					size: 4
				}
			]
		}
	]
]);
const MM12 = new Map([
	[
		1,
		{
			entries: [
				{
					name: "Cran-Gelatinous Cube",
					regex: "\\d\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(P.*?)\\s+(R.*?)\\s+(C.*?)\\s+(E.*?)\\s+(Di.*?)\\sC",
					size: 2
				}
			]
		}
	]
]);
const MM13 = new Map([
	[
		1,
		{
			entries: [
				{
					name: "Fire Goblin",
					regex: "N\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(K.*?)\\s+(B.*?)\\s+B"
				},
				{
					name: "Blast Goblin",
					regex: "T GOBLIN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(K.*?)\\s+(I.*?)\\s+When t"
				}
			]
		}
	]
]);
const MM14 = new Map([
	[
		1,
		{
			entries: [
				{
					name: "Roggenwulf",
					regex: "F\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(I.*?)\\s+(H.*?)\\s+(S.*?)\\sW"
				}
			]
		}
	]
]);
const MM15 = new Map([
	[
		1,
		{
			entries: [
				{
					name: "Green Knight",
					regex: "T\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(H.*?)\\s+(Oa.*?)\\sO"
				}
			]
		}
	]
]);
const MM16 = new Map([
	[
		1,
		{
			entries: [
				{
					name: "Lantern Head",
					regex: "D\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(G.*?)\\s+(C.*?)\\s+(Ste.*?)\\s+(W.*?)\\sThe d"
				}
			]
		}
	]
]);
const MM17 = new Map([
	[
		1,
		{
			entries: [
				{
					name: "Naga, Jewel",
					regex: "L\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(P.*?)\\s+(B.*?)\\s+(K.*?)\\s+(Se.*)",
					alias: "Jewel Naga",
					size: 2
				}
			]
		}
	]
]);
const MM18 = new Map([
	[
		1,
		{
			entries: [
				{
					name: "Jolly Roger",
					regex: "R\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(G.*?)\\s+(L.*?)\\s+(S.*?)\\s+(W.*)"
				}
			]
		}
	]
]);
const MM19 = new Map([
	[
		1,
		{
			entries: [
				{
					name: "Hydra Worm",
					regex: "\\d\\s+(.*?)\\s+(AC.*?LV \\*)\\s+(H.*?)\\s+(S.*?)\\sH",
					replace: {
						"HP * + 3": "HP 12",
						"LV *": "LV 2"
					},
					size: 4
				}
			]
		}
	]
]);
const MM20 = new Map([
	[
		1,
		{
			entries: [
				{
					name: "Zomblob",
					regex: "B\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(U.*?)\\s+(E.*?)\\s+(R.*)",
					size: 2
				}
			]
		}
	]
]);
const CONCEALED_ABBEY = new Map([
	[
		3,
		{
			entries: [
				{
					name: "Croakfolk",
					regex: "CROAKFOLK\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*?)\\s+H"
				},
				{
					name: "Dragonfly Cultist",
					regex: "DRAGONFLY\\sCULTIST\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+DRAGONFLY,\\sGIANT"
				},
				{
					name: "Dragonfly, Giant",
					regex: "DRAGONFLY,\\sGIANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					alias: "Giant Dragonfly",
					size: 2
				},
				{
					name: "Dragonfly Avatar",
					regex: "DRAGONFLY\\sAVATAR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(B.*)",
					size: 2
				}
			]
		}
	]
]);

const LFTD1 = new Map([
	[
		44,
		{
			entries: [
				{
					name: "Devil, Marbas",
					regex: "DEVIL, MARBAS\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*?)\\s+E",
					alias: "Marbas"
				},
				{
					name: "Elemental, Steam",
					regex: "ELEMENTAL, STEAM\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(V.*?)\\s+G",
					alias: "Steam Elemental",
					size: 2
				},
				{
					name: "Golem, Amber",
					regex: "GOLEM, AMBER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(G.*?)\\s+(F.*?)\\s+K",
					alias: "Amber Golem",
					size: 2
				},
				{
					name: "Krixi Pigfoggle",
					regex: "KRIXI PIGFOGGLE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(P.*?)\\s+(Sl.*)",
				}
			]
		}
	],
	[
		45,
		{
			entries: [
				{
					name: "Living Rug",
					regex: "LIVING RUG\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*?)\\s+W"
				},
				{
					name: "Wittan",
					regex: "WITTAN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(In.*?)\\s+(F.*?)\\s+Y"
				},
				{
					name: "Yithian",
					regex: "YITHIAN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(M.*)"
				},
			]
		}
	],
	[
		46,
		{
			entries: [
				{
					name: "Clockwork Soldier",
					regex: "CLOCKWORK SOLDIER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(W.*?)\\s+H",
					replace: {
						"3* s": "3 s",
						"3* c": "3 c",
						"r*": "r",
						"1:": "1: [4 = #ATK 3, MV double near], [3 = #ATK 2, MV near], [2 = #ATK 1, MV close], [1 = #ATK 0, MV none]"
					}
				},
				{
					name: "Hedrone",
					regex: "HEDRONE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(E.*?)\\s+(P.*?)\\s+MO",
					size: 0.5
				}
			]
		}
	],
	[
		47,
		{
			entries: [
				{
					name: "Tindalos",
					regex: "TINDALOS\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(D.*?)\\s+(A.*)"
				}
			]
		}
	]
]);
const LFTD2 = new Map([
	[
		36,
		{
			entries: [
				{
					name: "Count Brasov",
					regex: "COUNT BRASOV\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(B.*?)\\s+(Ch.*?)\\s+(E.*?)\\s+(F.*?)\\s+(G.*?)\\s+(M.*?)\\s+(Al.*)"
				}
			]
		}
	],
	[
		37,
		{
			entries: [
				{
					name: "Duchess Dragomir",
					regex: "DUCHESS DRAGOMIR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*?)\\s+(P.*?)\\s+(T.*?)\\s+(E.*?)\\s+(Fl.*?)\\s+(N.*?)\\s+(Sh.*?)\\s+(Si.*?)\\s+(Sk.*?)\\s+(W.*)"
				}
			]
		}
	],
	[
		62,
		{
			entries: [
				{
					name: "Capcaun",
					regex: "CAPCAUN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(G.*?)\\s+(T.*?)\\s+M",
					size: 2
				},
				{
					name: "Martolea",
					regex: "MARTOLEA\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(A.*?)\\s+MU"
				},
				{
					name: "Muma",
					regex: "MUMA\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(F.*?)\\s+(L.*?)\\s+(For.*)\\s+N"
				}
			]
		}
	],
	[
		63,
		{
			entries: [
				{
					name: "Smey",
					regex: "SMEY\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(Fire B.*?)\\s+(S.*?)\\s+S",
					size: 2
				},
				{
					name: "Smeyick",
					regex: "SMEYICK\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(D.*?)\\s+S"
				},
				{
					name: "Samca",
					regex: "SAMCA\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(D.*?)\\s+(F.*?)\\s+S",
					size: 2
				},
				{
					name: "Slayer",
					regex: "SLAYER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(P.*?)\\s+6"
				}
			]
		}
	],
	[
		64,
		{
			entries: [
				{
					name: "Mesmer",
					regex: "MESMER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(B.*?)\\s+(V.*?)\\s+MO"
				},
				{
					name: "Moroi",
					regex: "MOROI\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(In.*?)\\s+(S.*?)\\s+(Gh.*?)\\s+VA"
				}
			]
		}
	],
	[
		65,
		{
			entries: [
				{
					name: "Pricolici",
					regex: "PRICOLICI\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(P.*?)\\s+(S.*?)\\s+ST"
				},
				{
					name: "Stingbat, Vampire",
					regex: "STINGBAT, VAMPIRE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(B.*?)\\s+(Su.*?)\\s+TH",
					alias: "Vampire Stingbat",
					size: 0.5
				},
				{
					name: "Thrall",
					regex: "THRALL\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+VA"
				}
			]
		}
	]
]);
const LFTD3 = new Map([
	[
		54,
		{
			entries: [
				{
					name: "Barghest",
					regex: "BARGHEST\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(H.*?)\\sDULLAHAN"
				},
				{
					name: "Dullahan",
					regex: "DULLAHAN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(F.*?)\\s+(We.*?)\\s+N"
				}
			]
		}
	],
	[
		55,
		{
			entries: [
				{
					name: "Glatisant",
					regex: "GLATISANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\s+(L.*?)\\s+(Y.*?)\\s+(Q.*?)\\sM",
					size: 3
				},
				{
					name: "Muckie",
					regex: "MUCKIE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\s+(E.*?)\\sT",
					size: 3
				},
				{
					name: "Trechend",
					regex: "TRECHEND\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\s+(F.*?)\\s+(G.*?)\\sW",
					size: 2
				},
				{
					name: "White Worm",
					regex: "WHITE WORM\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\s(Co.*)",
					size: 4
				}
			]
		}
	],
	[
		56,
		{
			entries: [
				{
					name: "Archfey Titania",
					regex: "ARCHFEY TITANIA\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\s(Da.*?)\\s(O.*?)\\s(R.*?)\\sB",
					replace: {
						"S +4 ": "S +4," // The comma is missing in the book text
					}
				},
				{
					name: "Baromez",
					regex: "BAROMEZ\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\s(T.*?)S"
				}
			]
		}
	],
	[
		57,
		{
			entries: [
				{
					name: "Bogle",
					regex: "BOGLE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\s(G.*?)DR",
					replace: {
						"6) ": "6)," // The comma is missing in the book text
					}
				},
				{
					name: "Dragon, Fairy",
					regex: "DRAGON, FAIRY\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\sG",
					alias: "Fairy Dragon",
					size: 3
				},
				{
					name: "Gnome, Forest",
					regex: "GNOME, FOREST\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\sN",
					alias: "Forest Gnome"
				},
				{
					name: "Nixie",
					regex: "NIXIE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\sW",
					size: 0.5,
					replace: {
						"4) ": "4)," // The comma is missing in the book text
					}
				},
				{
					name: "Woopit",
					regex: "WOOPIT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\s(C.*?)\\s(J.*)"
				}
			]
		}
	],
	[
		58,
		{
			entries: [
				{
					name: "Archfey Morgana",
					regex: "ARCHFEY MORGANA\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\s(R.*?)\\s(R.*?)\\s(T.*?)\\sB",
					replace: {
						"S +2 ": "S +2," // The comma is missing in the book text
					}
				},
				{
					name: "Banshee",
					regex: "BANSHEE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\s(In.*?)\\s(W.*?)\\s(S.*)"
				}
			]
		}
	],
	[
		59,
		{
			entries: [
				{
					name: "Beggy",
					regex: "BEGGY\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\sG",
				},
				{
					name: "Gogg",
					regex: "GOGG\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\s(S.*?)\\sK"
				},
				{
					name: "Kelpie",
					regex: "KELPIE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\sR"
				},
				{
					name: "Redcap",
					regex: "REDCAP\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\sSP"
				},
				{
					name: "Springheel",
					regex: "SPRINGHEEL\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*?)\\sT",
					replace: {
						"6) ": "6)," // The comma is missing in the book text
					}
				},
				{
					name: "Tooth Fairy",
					regex: "TOOTH FAIRY\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s(.*)",
					size: 0.5,
					replace: {
						"k) ": "k)," // The comma is missing in the book text
					}
				}
			]
		}
	]
]);
const LFTD4 = new Map([
	[
		8,
		{
			entries: [
				{
					name: "Hireling",
					regex: "HIRELING\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				}
			]
		}
	],
	[
		61,
		{
			entries: [
				{
					name: "Deep One, Priest",
					regex: "T\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(S.*?)\\s+(A.*?)\\s+(R.*?)\\s+3",
					alias: "Deep One Priest"
				}
			]
		}
	],
	[
		71,
		{
			entries: [
				{
					name: "Aether Slime",
					regex: "AETHER SLIME\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					size: 2
				}
			]
		}
	],
]);
const LFTD5 = new Map([
	[
		9,
		{
			entries: [
				{
					name: "Buné",
					regex: "(Dr.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)\\s+(Bi.*)\\s+(E.*)\\sC"
				}
			]
		}
	],
	[
		10,
		{
			entries: [
				{
					name: "Pazuzu",
					regex: "(Fo.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)\\s+(P.*)\\s+(V.*)\\s+LI",
					size: 2
				}
			]
		}
	],
	[
		11,
		{
			entries: [
				{
					name: "Berith",
					regex: "(In.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)\\s+(I.*)\\s+(C.*)\\sST",
					size: 2
				}
			]
		}
	],
	[
		12,
		{
			entries: [
				{
					name: "Mammon",
					regex: "(Pi.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)\\s+(W.*)\\s+(A.*)\\sAL",
					size: 2
				}
			]
		}
	],
	[
		13,
		{
			entries: [
				{
					name: "Lamashtu",
					regex: "(Pa.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)\\s+(T.*)\\s+(M.*)\\sTH",
					size: 2
				}
			]
		}
	],
	[
		14,
		{
			entries: [
				{
					name: "Belphegor",
					regex: "(Fe.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(M.*?)\\s+(S.*?)\\sT"
				}
			]
		}
	],
	[
		15,
		{
			entries: [
				{
					name: "Megara",
					regex: "(Ce.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*?)\\s+(R.*?)\\s+D",
					size: 2
				}
			]
		}
	],
	[
		16,
		{
			entries: [
				{
					name: "Verrine",
					regex: "(Ra.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(D.*?)\\s+(P.*?)\\s+M",
					replace: {
						"truth ." : "truth."
					}
				}
			]
		}
	],
	[
		17,
		{
			entries: [
				{
					name: "Malphas",
					regex: "MALPHAS\\s(A.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(U.*?)\\s+(B.*?)\\s+C"
				}
			]
		}
	],
	[
		20,
		{
			entries: [
				{
					name: "Aamon",
					regex: "AAMON\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+A",
					size: 0.5
				},
				{
					name: "Aguar",
					regex: "AGUAR\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+BA",
					size: 2
				},
				{
					name: "Bachim",
					regex: "BACHIM\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(D.*?)\\s+BA"
				},
				{
					name: "Barbato",
					regex: "BARBATO\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+B",
					size: 2
				},
				{
					name: "Buer",
					regex: "BUER\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\sN",
					size: 0.5
				}
			]
		}
	],
	[
		21,
		{
			entries: [
				{
					name: "Cambion",
					regex: "CAMBION\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(Fire B.*?)\\sC"
				},
				{
					name: "Caym",
					regex: "CAYM\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+CE"
				},
				{
					name: "Cerbere",
					regex: "CERBERE\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(T.*?)\\s+(F.*?)\\s+DA",
					size: 3
				},
				{
					name: "Dantalion",
					regex: "DANTALION\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(F.*?)\\s+G"
				},
				{
					name: "Geryon",
					regex: "GERYON\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(P.*?)\\s+(P.*?)\\s+G",
					size: 3
				},
				{
					name: "Gomory",
					regex: "GOMORY\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)"
				}
			]
		}
	],
	[
		22,
		{
			entries: [
				{
					name: "Grootslang",
					regex: "GROOTSLANG\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(C.*?)\\s+(Sw.*?)\\s+H",
					size: 3
				},
				{
					name: "Habor",
					regex: "HABOR\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(I.*?)\\sL",
					size: 0.5
				},
				{
					name: "Lamia",
					regex: "LAMIA\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+L",
					size: 2
				},
				{
					name: "Lemure",
					regex: "LEMURE\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(I.*?)\\s+(C.*?)\\s+M"
				},
				{
					name: "Marbas",
					regex: "MARBAS\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*)"
				}
			]
		}
	],
	[
		23,
		{
			entries: [
				{
					name: "Murmuur",
					regex: "MURMUUR\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+O",
					size: 2
				},
				{
					name: "Oray",
					regex: "ORAY\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+S",
					replace: {
						"1d6 s" : "6 s"
					}
				},
				{
					name: "Styg",
					regex: "STYG\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(F.*?)\\s+(S.*?)\\s+V"
				},
				{
					name: "Vual",
					regex: "VUAL\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(R.*?)\\s+(Hu.*?)\\s+X",
					size: 3
				},
				{
					name: "Xaphan",
					regex: "XAPHAN\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(B.*?)\\s+Z",
					size: 0.5
				},
				{
					name: "Zabub",
					regex: "ZABUB\\s(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					size: 0.5
				}
			]
		}
	]
]);
export const BOOKS = new Map([
	[
		"Cursed Scroll 1: Diablerie",
		{
			checkPage: 1,
			checkText: "Cursed Scroll Shadowdark Zine Vol. 1: Diablerie!",
			offset: 0,
			map: CS1
		}
	],
	[
		"Cursed Scroll 2: Red Sands",
		{
			checkPage: 1,
			checkText: "Cursed Scroll Shadowdark Zine 2: Red Sands",
			offset: 0,
			map: CS2
		}
	],
	[
		"Cursed Scroll 3: Midnight Sun",
		{
			checkPage: 1,
			checkText: "Cursed Scroll Shadowdark Zine 3: Midnight Sun",
			offset: 0,
			map: CS3
		}
	],
	[
		"Monster Monday 1: Brain Eaters",
		{
			checkPage: 2,
			checkText: "Brain Eaters",
			offset: 0,
			map: MM1
		}
	],
	[
		"Monster Monday 2: Crabstrosity",
		{
			checkPage: 2,
			checkText: "Crabstrosity",
			offset: 0,
			map: MM2
		}
	],
	[
		"Monster Monday 3: Ooze Cubes",
		{
			checkPage: 2,
			checkText: "Ooze Cubes",
			offset: 0,
			map: MM3
		}
	],
	[
		"Monster Monday 4: Mazzim the Mesmerist",
		{
			checkPage: 2,
			checkText: "Mazzim the Mesmerist",
			offset: 0,
			map: MM4
		}
	],
		[
		"Monster Monday 5: Lord Hedron Antioch",
		{
			checkPage: 2,
			checkText: "Lord Hedron Antioch",
			offset: 0,
			map: MM5
		}
	],		
	[
		"Monster Monday 6: Fungibolds",
		{
			checkPage: 2,
			checkText: "Fungibold",
			offset: 0,
			map: MM6
		}
	],
		[
		"Monster Monday 7: The Mad Jester",
		{
			checkPage: 2,
			checkText: "The Mad Jester",
			offset: 0,
			map: MM7
		}
	],
		[
		"Monster Monday 8: Lash Demon",
		{
			checkPage: 2,
			checkText: "DEMON, LASH",
			offset: 0,
			map: MM8
		}
	],
	[
		"Monster Monday 9: Sisters of Saint Sofia",
		{
			checkPage: 2,
			checkText: "SISTER MARJORY",
			offset: 0,
			map: MM9
		}
	],
	[
		"Monster Monday 10: The Piper",
		{
			checkPage: 2,
			checkText: "The Piper",
			offset: 0,
			map: MM10
		}
	],
		[
		"Monster Monday 11: Shadowbarge",
		{
			checkPage: 2,
			checkText: "The Shadowbarge",
			offset: 0,
			map: MM11
		}
	],
		[
		"Monster Monday 12: Cran-Gelatinous Cube",
		{
			checkPage: 1,
			checkText: "Cran-Gelatinous Cube",
			offset: 0,
			map: MM12
		}
	],
		[
		"Monster Monday 13: Fire Goblins",
		{
			checkPage: 1,
			checkText: "Fire Goblins",
			offset: 0,
			map: MM13
		}
	],
		[
		"Monster Monday 14: Roggenwulf",
		{
			checkPage: 1,
			checkText: "Roggenwulf",
			offset: 0,
			map: MM14
		}
	],
		[
		"Monster Monday 15: Green Knight",
		{
			checkPage: 1,
			checkText: "Green Knight",
			offset: 0,
			map: MM15
		}
	],
		[
		"Monster Monday 16: Lantern Head",
		{
			checkPage: 1,
			checkText: "Lantern Head",
			offset: 0,
			map: MM16
		}
	],
		[
		"Monster Monday 17: Jewel Naga",
		{
			checkPage: 1,
			checkText: "Jewel Naga",
			offset: 0,
			map: MM17
		}
	],
		[
		"Monster Monday 18: Jolly Roger",
		{
			checkPage: 1,
			checkText: "Jolly Roger",
			offset: 0,
			map: MM18
		}
	],
		[
		"Monster Monday 19: Hydra Worm",
		{
			checkPage: 1,
			checkText: "Hydra Worm",
			offset: 0,
			map: MM19
		}
	],
		[
		"Monster Monday 20: Zomblob",
		{
			checkPage: 1,
			checkText: "Zomblob",
			offset: 0,
			map: MM20
		}
	],
	[
		"The Concealed Abbey of the Dragonfly Horde",
		{
			checkPage: 1,
			checkText: "The Concealed Abbey of the Dragonfly Horde",
			offset: 0,
			map: CONCEALED_ABBEY
		}
	],
	[
		"Letters from the Dark Vol. I: Out of Time",
		{
			checkPage: 52,
			checkText: "LETTERS FROM THE DARK VOL. I: OUT OF TIME",
			offset: 0,
			map: LFTD1
		}
	],
	[
		"Letters from the Dark Vol. II: Slayer's Moon",
		{
			checkPage: 70,
			checkText: "LETTERS FROM THE DARK VOL. II: SLAYER’S MOON",
			offset: 0,
			map: LFTD2
		}
	],
	[
		"Letters from the Dark Vol. III: Tales of the Fey",
		{
			checkPage: 64,
			checkText: "The idyllic Ballyhob Glen",
			offset: 0,
			map: LFTD3
		}
	],
	[
		"Letters from the Dark Vol. IV: Borderlands",
		{
			checkPage: 76,
			checkText: "LETTERS FROM THE DARK VOL. IV: BORDERLANDS",
			offset: 0,
			map: LFTD4
		}
	],
	[
		"Letters from the Dark Vol. V: Hell to Pay",
		{
			checkPage: 106,
			checkText: "LETTERS FROM THE DARK VOL. V: HELL TO PAY",
			offset: 0,
			map: LFTD5
		}
	]//,
	// [
	// 	"Letters from the Dark Vol. VI: Scallywags",
	// 	{
	// 		checkPage: 94,
	// 		checkText: "LETTERS FROM THE DARK VOL. VI: SCALLYWAGS",
	// 		offset: 0,
	// 		map: LFTD6
	// 	}
	// ],
	// [
	// 	"Letters from the Dark Vol. VII: Monster Mash",
	// 	{
	// 		checkPage: 94,
	// 		checkText: "Are we the baddies?",
	// 		offset: 0,
	// 		map: LFTD7
	// 	}
	// ],
	// [
	// 	"Letters from the Dark Vol. VIII: Lucky Stars",
	// 	{
	// 		checkPage: 100,
	// 		checkText: "One giant leap!",
	// 		offset: 0,
	// 		map: LFTD8
	// 	}
	// ],
	// [
	// 	"Letters from the Dark Vol. IX: Book of the Dead",
	// 	{
	// 		checkPage: 88,
	// 		checkText: "Who wants to live forever?",
	// 		offset: 0,
	// 		map: LFTD9
	// 	}
	// ]
]);
