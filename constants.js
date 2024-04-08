export const MODULE = {
	ID: "shadowdark-pdf-importer"
};
const CORE_RULEBOOK = new Map([
	[
		194,
		{
			exclude: "Monster Statistics",
			entries: [
				{
					name: "Aboleth",
					regex: "ABOLETH\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(E.*?)\\s+(T.*?)\\s+ACOLYTE",
					size: 2
				},
				{
					name: "Acolyte",
					regex: "ACOLYTE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)"
				}
			]
		}
	],
	[
		195,
		{
			exclude: "ANGELS.*",
			entries: [
				{
					name: "Angel, Seraph",
					regex: "ANGEL,\\sSERAPH\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+ANGEL,\\sDOMINI",
					alias: "Seraph"
				},
				{
					name: "Angel, Domini",
					regex: "ANGEL,\\sDOMINI\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+ANGEL,\\sPRINCIPI",
					alias: "Domini Angel"
				},
				{
					name: "Angel, Principi",
					regex: "ANGEL,\\sPRINCIPI\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(T.*?)\\s+ARCHANGEL",
					alias: "Principi Angel"
				},
				{
					name: "Archangel",
					regex: "ARCHANGEL\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(Cr.*)"
				}
			]
		}
	],
	[
		196,
		{
			entries: [
				{
					name: "Ape, Snow",
					regex: "APE,\\sSNOW\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+APE",
					alias: "Snow Ape"
				},
				{
					name: "Ape",
					regex: "APE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				},
				{
					name: "Ankheg",
					regex: "ANKHEG\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				},
				{
					name: "Animated Armor",
					regex: "ANIMATED\\sARMOR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				},
				{
					name: "Apprentice",
					regex: "APPRENTICE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(M.*)"
				}
			]
		}
	],
	[
		197,
		{
			entries: [
				{
					name: "Archmage",
					regex: "ARCHMAGE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(E.*?)\\s+(Fi.*?)\\s+(F.*?)\\s+(M.*?)\\s+(V.*?)\\s+ASSASSIN"
				},
				{
					name: "Assassin",
					regex: "ASSASSIN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+AZER"
				},
				{
					name: "Azer",
					regex: "AZER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+BADGER"
				},
				{
					name: "Badger",
					regex: "BADGER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+BANDIT"
				},
				{
					name: "Bandit",
					regex: "BANDIT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)"
				}
			]
		}
	],
	[
		198,
		{
			entries: [
				{
					name: "Basilisk",
					regex: "BASILISK\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+BAT,\\sGIANT"
				},
				{
					name: "Bat, Giant",
					regex: "BAT,\\sGIANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					alias: "Giant Bat",
					size: 2
				},
				{
					name: "Bat, Swarm",
					regex: "BAT,\\sSWARM\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					alias: "Bat Swarm"
				},
				{
					name: "Bear, Brown",
					regex: "BEAR,\\sBROWN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+BEAR,\\sPOLAR",
					alias: "Brown Bear",
					size: 2,
					replace: {
						"b)": "b)," // The comma is missing in the book text
					}
				},
				{
					name: "Bear, Polar",
					regex: "BEAR,\\sPOLAR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(T.*?)\\s+BEASTMAN",
					alias: "Polar Bear",
					size: 2
				},
				{
					name: "Beastman",
					regex: "BEASTMAN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)"
				}
			]
		}
	],
	[
		199,
		{
			entries: [
				{
					name: "Berserker",
					regex: "BERSERKER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+BOAR"
				},
				{
					name: "Boar",
					regex: "BOAR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+BLACK\\sPUDDING"
				},
				{
					name: "Black Pudding",
					regex: "BLACK\\sPUDDING\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(C.*?)\\s+BRAIN\\sEATER",
					size: 2
				},
				{
					name: "Brain Eater",
					regex: "BRAIN\\sEATER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(L.*?)\\s+(M.*?)\\s+(M.*)"
				}
			]
		}
	],
	[
		200,
		{
			entries: [
				{
					name: "Bugbear",
					regex: "BUGBEAR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+BULETTE"
				},
				{
					name: "Bulette",
					regex: "BULETTE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+CAMEL",
					size: 2
				},
				{
					name: "Camel",
					regex: "CAMEL\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				},
				{
					name: "Cave Brute",
					regex: "CAVE\\sBRUTE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+CAVE\\sCREEPER",
					size: 2
				},
				{
					name: "Cave Creeper",
					regex: "CAVE\\sCREEPER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					size: 2
				}
			]
		}
	],
	[
		201,
		{
			entries: [
				{
					name: "Centaur",
					size: 2
				},
				{
					name: "Centipede, Giant",
					features: ["Poison"],
					alias: "Giant Centipede"
				},
				{
					name: "Centipede, Swarm",
					features: ["Poison"],
					alias: "Centipede Swarm"
				},
				{
					name: "Chimera",
					features: ["Fire Breath"],
					size: 2
				},
				{
					name: "Chuul",
					features: ["Grab"],
					size: 2
				}
			]
		}
	],
	[
		202,
		{
			entries: [
				{
					name: "Cloaker",
					regex: "CLOAKER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*?)\\s+COCKATRICE",
					size: 2
				},
				{
					name: "Cockatrice",
					regex: "COCKATRICE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+COUATL"
				},
				{
					name: "Couatl",
					regex: "COUATL\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(P.*?)\\s+(R.*?)\\s+CRAB,\\sGIANT"
				},
				{
					name: "Crab, Giant",
					regex: "CRAB,\\sGIANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					alias: "Giant Crab"
				}
			]
		}
	],
	[
		203,
		{
			entries: [
				{
					name: "Crocodile",
					regex: "CROCODILE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				},
				{
					name: "Cultist",
					regex: "CULTIST\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(D.*?)\\s+CYCLOPS"
				},
				{
					name: "Cyclops",
					regex: "CYCLOPS\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 3
				},
				{
					name: "Darkmantle",
					regex: "DARKMANTLE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+DEEP\\sONE"
				},
				{
					name: "Deep One",
					regex: "DEEP\\sONE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)"
				}
			]
		}
	],
	[
		204,
		{
			entries: [
				{
					name: "Demon, Balor",
					regex: "DEMON,\\sBALOR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(G.*?)\\s+(H.*?)\\s+DEMON,\\sGLABREZU",
					alias: "Balor",
					size: 3
				},
				{
					name: "Demon, Glabrezu",
					regex: "DEMON,\\sGLABREZU\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+DEMON,\\sDRETCH",
					alias: "Glabrezu",
					size: 2
				},
				{
					name: "Demon, Dretch",
					regex: "DEMON,\\sDRETCH\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					alias: "Dretch"
				}
			]
		}
	],
	[
		205,
		{
			entries: [
				{
					name: "Demon, Marilith",
					regex: "DEMON,\\sMARILITH\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+DEMON,\\sVROCK",
					alias: "Marilith",
					size: 2
				},
				{
					name: "Demon, Vrock",
					regex: "DEMON,\\sVROCK\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*)",
					alias: "Vrock",
					size: 2
				}
			]
		}
	],
	[
		206,
		{
			entries: [
				{
					name: "Archdevil",
					regex: "ARCHDEVIL\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(C.*?)\\s+(S.*?)\\s+DEVIL,\\sBARBED"
				},
				{
					name: "Devil, Barbed",
					regex: "DEVIL,\\sBARBED\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					alias: "Barbed Devil"
				}
			]
		}
	],
	[
		207,
		{
			entries: [
				{
					name: "Devil, Cubi",
					regex: "DEVIL,\\sCUBI\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(C.*?)\\s+(Dr.*?)\\s+DEVIL,\\sERINYES",
					alias: "Cubi"
				},
				{
					name: "Devil, Erinyes",
					regex: "DEVIL,\\sERINYES\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+DEVIL,\\sHORNED",
					alias: "Erinyes"
				},
				{
					name: "Devil, Horned",
					regex: "DEVIL,\\sHORNED\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+DEVIL,\\sIMP",
					alias: "Horned Devil",
					size: 2
				},
				{
					name: "Devil, Imp",
					regex: "DEVIL,\\sIMP\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(C.*?)\\s+(P.*)",
					alias: "Imp",
					size: 0.5
				}
			]
		}
	],
	[
		208,
		{
			entries: [
				{
					name: "Pterodactyl",
					regex: "PTERODACTYL\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+TYRANNOSAURUS"
				},
				{
					name: "Tyrannosaurus",
					regex: "TYRANNOSAURUS\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 3
				},
				{
					name: "Triceratops",
					regex: "TRICERATOPS\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+BRACHIOSAURUS",
					size: 3
				},
				{
					name: "Brachiosaurus",
					regex: "BRACHIOSAURUS\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 4
				},
				{
					name: "Plesiosaurus",
					regex: "PLESIOSAURUS\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				},
				{
					name: "Velociraptor",
					regex: "VELOCIRAPTOR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					size: 0.5
				}
			]
		}
	],
	[
		209,
		{
			entries: [
				{
					name: "Djinni",
					regex: "DJINNI\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(W.*?)\\s+(W.*?)\\s+DOPPELGANGER",
					size: 2
				},
				{
					name: "Doppelganger",
					regex: "DOPPELGANGER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(T.*)"
				}
			]
		}
	],
	[
		210,
		{
			entries: [
				{
					name: "Dragon, Desert",
					regex: "DRAGON,\\sDESERT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(L.*?)\\s+(M.*?)\\s+DRAGON,\\sFIRE",
					alias: "Desert Dragon",
					size: 3
				},
				{
					name: "Dragon, Fire",
					regex: "DRAGON,\\sFIRE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(Fire B.*)",
					alias: "Fire Dragon",
					size: 3
				}
			]
		}
	],
	[
		211,
		{
			entries: [
				{
					name: "Dragon, Forest",
					regex: "DRAGON,\\sFOREST\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(Po.*?)\\s+DRAGON,\\sFROST",
					alias: "Forest Dragon",
					size: 3
				},
				{
					name: "Dragon, Frost",
					regex: "DRAGON,\\sFROST\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(I.*?)\\s+DRAGON,\\sSEA",
					alias: "Frost Dragon",
					size: 3
				},
				{
					name: "Dragon, Sea",
					regex: "DRAGON,\\sSEA\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(W.*?)\\s+DRAGON,\\sSWAMP",
					alias: "Sea Dragon",
					size: 3
				},
				{
					name: "Dragon, Swamp",
					regex: "DRAGON,\\sSWAMP\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					alias: "Swamp Dragon",
					size: 3
				}
			]
		}
	],
	[
		212,
		{
			exclude: "212.*goddess.",
			entries: [
				{
					name: "Drow",
					regex: "DROW\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*?)\\s+DROW,\\sPRIESTESS"
				},
				{
					name: "Drow, Priestess",
					regex: "DROW,\\sPRIESTESS\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*?)\\s+(S.*?)\\s+(Su.*?)\\s+(W.*?)\\s+DROW,\\sDRIDER",
					alias: "Drow Priestess"
				},
				{
					name: "Drow, Drider",
					regex: "DROW,\\sDRIDER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*)",
					alias: "Drider",
					size: 2
				}
			]
		}
	],
	[
		213,
		{
			entries: [
				{
					name: "Druid",
					regex: "DRUID\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(C.*?)\\s+(I.*?)\\s+(Su.*?)\\s+(T.*?)\\s+DRYAD"
				},
				{
					name: "Dryad",
					regex: "DRYAD\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(M.*?)\\s+DUERGAR"
				},
				{
					name: "Duergar",
					regex: "DUERGAR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(I.*?)\\s+(S.*)"
				}
			]
		}
	],
	[
		214,
		{
			entries: [
				{
					name: "Dung Beetle, Giant",
					regex: "DUNG\\sBEETLE, GIANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+EFREETI",
					alias: "Giant Dung Beetle"
				},
				{
					name: "Efreeti",
					regex: "EFREETI\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(W.*?)\\s+(W.*)",
					size: 2
				}
			]
		}
	],
	[
		215,
		{
			entries: [
				{
					name: "Elemental, Air (Lesser)",
					regex: "(A h.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(W.*?)\\sE",
					alias: "Lesser Air Elemental",
					replace: {
						"29/42": "29",
						"2d6/3d6": "2d6",
						"6/9": "6"
					}
				},
				{
					name: "Elemental, Earth (Lesser)",
					regex: "(A t.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(A.*?)\\sE",
					alias: "Lesser Earth Elemental",
					replace: {
						"31/44": "31",
						"2d6/3d6": "2d6",
						"6/9": "6"
					}
				},
				{
					name: "Elemental, Fire (Lesser)",
					regex: "(A r.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(I.*?)\\sE",
					alias: "Lesser Fire Elemental",
					replace: {
						"30/43": "30",
						"2d6/3d6": "2d6",
						"6/9": "6"
					}
				},
				{
					name: "Elemental, Water (Lesser)",
					regex: "(A c.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(W.*?)\\sE",
					alias: "Lesser Water Elemental",
					replace: {
						"29/42": "29",
						"2d6/3d6": "2d6",
						"6/9": "6"
					}
				},
				{
					name: "Elemental, Air (Greater)",
					regex: "(A h.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(W.*?)\\sE",
					alias: "Greater Air Elemental",
					replace: {
						"29/42": "42",
						"2d6/3d6": "3d6",
						"6/9": "9"
					},
					size: 2
				},
				{
					name: "Elemental, Earth (Greater)",
					regex: "(A t.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(A.*?)\\sE",
					alias: "Greater Earth Elemental",
					replace: {
						"31/44": "44",
						"2d6/3d6": "3d6",
						"6/9": "9"
					},
					size: 2
				},
				{
					name: "Elemental, Fire (Greater)",
					regex: "(A r.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(I.*?)\\sE",
					alias: "Greater Fire Elemental",
					replace: {
						"30/43": "43",
						"2d6/3d6": "3d6",
						"6/9": "9"
					},
					size: 2
				},
				{
					name: "Elemental, Water (Greater)",
					regex: "(A c.*?)\\s+(AC.*?LV.*?\\d\\/\\d).*?\\s(I.*?)\\s(W.*?)\\sE",
					alias: "Greater Water Elemental",
					replace: {
						"29/42": "42",
						"2d6/3d6": "3d6",
						"6/9": "9"
					},
					size: 2
				}
			]
		}
	],
	[
		216,
		{
			entries: [
				{
					name: "Elephant",
					regex: "ELEPHANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+ELF",
					size: 3
				},
				{
					name: "Elf",
					regex: "ELF\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+ETTERCAP"
				},
				{
					name: "Ettercap",
					regex: "ETTERCAP\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+FAIRY"
				},
				{
					name: "Fairy",
					regex: "FAIRY\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+FROG,\\sGIANT",
					size: 0.5
				},
				{
					name: "Frog, Giant",
					regex: "FROG,\\sGIANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+GARGOYLE",
					alias: "Giant Frog"
				},
				{
					name: "Gargoyle",
					regex: "GARGOYLE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)"
				}
			]
		}
	],
	[
		217,
		{
			entries: [
				{
					name: "Gelatinous Cube",
					regex: "GELATINOUS\\sCUBE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(R.*?)\\s+(T.*?)\\s+GHAST",
					size: 2
				},
				{
					name: "Ghast",
					regex: "GHAST\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(C.*?)\\s+(P.*?)\\s+GHOUL"
				},
				{
					name: "Ghoul",
					regex: "GHOUL\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(P.*?)\\s+GHOST"
				},
				{
					name: "Ghost",
					regex: "GHOST\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(In.*?)\\s+(L.*?)\\s+(P.*)"
				}
			]
		}
	],
	[
		218,
		{
			entries: [
				{
					name: "Giant, Cloud",
					regex: "GIANT,\\sCLOUD\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+GIANT,\\sFIRE",
					alias: "Cloud Giant",
					size: 3
				},
				{
					name: "Giant, Fire",
					regex: "GIANT,\\sFIRE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					alias: "Fire Giant",
					size: 3
				}
			]
		}
	],
	[
		219,
		{
			entries: [
				{
					name: "Giant, Frost",
					regex: "GIANT,\\sFROST\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+GIANT,\\sSTONE",
					alias: "Frost Giant",
					size: 3
				},
				{
					name: "Giant, Stone",
					regex: "GIANT,\\sSTONE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+GIANT,\\sGOAT",
					alias: "Stone Giant",
					size: 3
				},
				{
					name: "Giant, Goat",
					regex: "GIANT,\\sGOAT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					alias: "Goat Giant",
					size: 3
				},
				{
					name: "Giant, Storm",
					regex: "GIANT,\\sSTORM\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(L.*?)\\s+GIANT,\\sHILL",
					alias: "Storm Giant",
					size: 3
				},
				{
					name: "Giant, Hill",
					regex: "GIANT,\\sHILL\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					alias: "Hill Giant",
					size: 3
				}
			]
		}
	],
	[
		220,
		{
			entries: [
				{
					name: "Gibbering Mouther",
					regex: "GIBBERING\\sMOUTHER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(L.*?)\\s+GLADIATOR"
				},
				{
					name: "Gladiator",
					regex: "GLADIATOR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				},
				{
					name: "Gnoll",
					regex: "GNOLL\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+GNOME,\\sDEEP"
				},
				{
					name: "Gnome, Deep",
					regex: "GNOME,\\sDEEP\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					alias: "Deep Gnome"
				}
			]
		}
	],
	[
		221,
		{
			exclude: "221.*sorcery.",
			entries: [
				{
					name: "Goblin",
					regex: "GOBLIN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+GOBLIN,\\sBOSS"
				},
				{
					name: "Goblin, Boss",
					regex: "GOBLIN,\\sBOSS\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+GOBLIN,\\sSHAMAN",
					alias: "Goblin Boss"
				},
				{
					name: "Goblin, Shaman",
					regex: "GOBLIN,\\sSHAMAN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(B.*?)\\s+(Sk.*?)\\s+(St.*)",
					alias: "Goblin Shaman"
				}
			]
		}
	],
	[
		222,
		{
			exclude: "222.*rituals.",
			entries: [
				{
					name: "Golem, Clay",
					regex: "GOLEM,\\sCLAY\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(C.*?)\\s+GOLEM,\\sFLESH",
					alias: "Clay Golem",
					size: 2
				},
				{
					name: "Golem, Flesh",
					regex: "GOLEM,\\sFLESH\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(B.*?)\\s+GOLEM,\\sIRON",
					alias: "Flesh Golem"
				},
				{
					name: "Golem, Iron",
					regex: "GOLEM,\\sIRON\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(P.*?)\\s+GOLEM,\\sSTONE",
					alias: "Iron Golem",
					size: 2
				},
				{
					name: "Golem, Stone",
					regex: "GOLEM,\\sSTONE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*)",
					alias: "Stone Golem",
					size: 2
				}
			]
		}
	],
	[
		223,
		{
			entries: [
				{
					name: "Gorgon",
					regex: "GORGON\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(P.*?)\\s+GORILLA",
					size: 2
				},
				{
					name: "Gorilla",
					regex: "GORILLA\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				},
				{
					name: "Gray Ooze",
					regex: "GRAY\\sOOZE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(C.*?)\\s+GRICK"
				},
				{
					name: "Grick",
					regex: "GRICK\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(G.*)"
				}
			]
		}
	],
	[
		224,
		{
			entries: [
				{
					name: "Griffon",
					regex: "GRIFFON\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				},
				{
					name: "Grimlow",
					regex: "GRIMLOW\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+GUARD",
					size: 2
				},
				{
					name: "Guard",
					regex: "GUARD\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				}
			]
		}
	],
	[
		225,
		{
			exclude: "225.*woods.",
			entries: [
				{
					name: "Hag, Weald",
					regex: "HAG,\\sWEALD\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*?)\\s+HAG,\\sNIGHT",
					alias: "Weald Hag"
				},
				{
					name: "Hag, Night",
					regex: "HAG,\\sNIGHT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*?)\\s+HAG,\\sSEA",
					alias: "Night Hag"
				},
				{
					name: "Hag, Sea",
					regex: "HAG,\\sSEA\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(T.*)",
					alias: "Sea Hag"
				}
			]
		}
	],
	[
		226,
		{
			entries: [
				{
					name: "Harpy",
					regex: "HARPY\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+HELL\\sHOUND"
				},
				{
					name: "Hell Hound",
					regex: "HELL\\sHOUND\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(Fire B.*?)\\s+HIPPOGRIFF"
				},
				{
					name: "Hippogriff",
					regex: "HIPPOGRIFF\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				},
				{
					name: "Hippopotamus",
					regex: "HIPPOPOTAMUS\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					size: 2
				}
			]
		}
	],
	[
		227,
		{
			entries: [
				{
					name: "Hobgoblin",
					regex: "HOBGOBLIN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+HORSE"
				},
				{
					name: "Horse",
					regex: "HORSE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				},
				// Hydra defaults to one head (LV 2, HP 11)
				{
					name: "Hydra",
					regex: "(A t.*?)\\s+(AC.*?LV \\*)\\s+(H.*?)\\s+I",
					replace: {
						"HP *": "HP 11",
						"LV *": "LV 2"
					},
					size: 3
				},
				{
					name: "Invisible Stalker",
					regex: "INVISIBLE\\sSTALKER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(I.*?)\\s+(T.*)"
				}
			]
		}
	],
	[
		228,
		{
			entries: [
				{
					name: "Jellyfish",
					regex: "JELLYFISH\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+KNIGHT",
					size: 0.5
				},
				{
					name: "Knight",
					regex: "KNIGHT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+KOBOLD"
				},
				{
					name: "Kobold",
					regex: "KOBOLD\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+KOBOLD,\\sSORCERER"
				},
				{
					name: "Kobold, Sorcerer",
					regex: "KOBOLD,\\sSORCERER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*?)\\s+(Spi.*)",
					alias: "Kobold Sorcerer"
				}
			]
		}
	],
	[
		229,
		{
			entries: [
				{
					name: "Kraken",
					regex: "KRAKEN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(C.*?)\\s+(L.*?)\\s+(Sto.*?)\\s+LEECH,\\sGIANT",
					size: 4
				},
				{
					name: "Leech, Giant",
					regex: "LEECH,\\sGIANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					alias: "Giant Leech",
					size: 0.5
				}
			]
		}
	],
	[
		230,
		{
			entries: [
				{
					name: "Leprechaun",
					regex: "LEPRECHAUN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				},
				{
					name: "Lich",
					regex: "LICH\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(P.*?)\\s+(P.*?)\\s+(F.*?)\\s+(N.*?)\\s+(Sh.*?)\\s+(Si.*?)\\s+(W.*)"
				}
			]
		}
	],
	[
		231,
		{
			entries: [
				{
					name: "Lion",
					regex: "LION\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				},
				{
					name: "Lizardfolk",
					regex: "LIZARDFOLK\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				},
				{
					name: "Mage",
					regex: "MAGE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(B.*?)\\s+(C.*?)\\s+(L.*?)\\s+(Sn.*?)\\s+MAMMOTH"
				},
				{
					name: "Mammoth",
					regex: "MAMMOTH\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(Ch.*)",
					size: 3
				}
			]
		}
	],
	[
		232,
		{
			entries: [
				{
					name: "Manta Ray, Giant",
					regex: "MANTA\\sRAY, GIANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+MANTICORE",
					alias: "Giant Manta Ray",
					size: 3
				},
				{
					name: "Manticore",
					regex: "MANTICORE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+MASTIFF",
					size: 2
				},
				{
					name: "Mastiff",
					regex: "MASTIFF\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				},
				{
					name: "Medusa",
					regex: "MEDUSA\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(P.*?)\\s+(P.*?)\\s+MERFOLK"
				},
				{
					name: "Merfolk",
					regex: "MERFOLK\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				},
				{
					name: "Mimic",
					regex: "MIMIC\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)"
				}
			]
		}
	],
	[
		233,
		{
			entries: [
				{
					name: "Minotaur",
					regex: "MINOTAUR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+MOOSE",
					size: 2
				},
				{
					name: "Moose",
					regex: "MOOSE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				}
			]
		}
	],
	[
		234,
		{
			entries: [
				{
					name: "Mordanticus the Flayed",
					regex: "(A.*?)\\s+(A.*V.*?\\d+)\\s+(L.*?)\\s+(C.*)\\s+(N.*)\\s+(P.*?)\\s+(A.*?)\\s+(B.*?)\\s+(B.*?)\\s+(B.*?)\\s+(P.*?)\\s+(Tr.*)\\s+M"
				}
			]
		}
	],
	[
		236,
		{
			entries: [
				{
					name: "Mummy",
					regex: "MUMMY\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(D.*?)\\s+(N.*?)\\s+MUSHROOMFOLK"
				},
				{
					name: "Mushroomfolk",
					regex: "MUSHROOMFOLK\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(T.*)"
				}
			]
		}
	],
	[
		237,
		{
			entries: [
				{
					name: "Naga",
					regex: "NAGA\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(A.*?)\\s+(H.*?)\\s+(W.*?)\\s+NAGA,\\sBONE",
					size: 2
				},
				{
					name: "Naga, Bone",
					regex: "NAGA,\\sBONE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+NIGHTMARE",
					size: 2
				},
				{
					name: "Nightmare",
					regex: "NIGHTMARE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					size: 2
				}
			]
		}
	],
	[
		238,
		{
			entries: [
				{
					name: "Obe-Ixx of Azarumme",
					regex: "(A.*?)\\s+(AC.*V.*?\\d+)\\s+(L.*?)\\s+(B.*?)\\s+(Ch.*?)\\s+(Di.*?)\\s+(M.*?)\\s+(U.*?)\\s+O"
				}
			]
		}
	],
	[
		239,
		{
			entries: [
				{
					name: "Ochre Jelly",
					regex: "OCHRE\\sJELLY\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+OCTOPUS,\\sGIANT",
					size: 2
				},
				{
					name: "Octopus, Giant",
					regex: "OCTOPUS,\\sGIANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(I.*?)\\s+OGRE",
					alias: "Giant Octopus",
					size: 2
				},
				{
					name: "Ogre",
					regex: "OGRE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				},
				{
					name: "Oni",
					regex: "ONI\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(F.*?)\\s+(H.*?)\\s+(M.*)",
					size: 2
				}
			]
		}
	],
	[
		240,
		{
			entries: [
				{
					name: "Orc",
					regex: "ORC\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+ORC,\\sCHIEFTAIN"
				},
				{
					name: "Orc, Chieftain",
					regex: "ORC,\\sCHIEFTAIN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+OTYUGH",
					alias: "Orc Chieftain"
				},
				{
					name: "Otyugh",
					regex: "OTYUGH\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					size: 2
				}
			]
		}
	],
	[
		241,
		{
			entries: [
				{
					name: "Primordial Slime",
					regex: "PRIMORDIAL\\sSLIME\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(D.*?)\\s+VOID\\sSPAWN"
				},
				{
					name: "Void Spawn",
					regex: "VOID\\sSPAWN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(T.*?)\\s+VOID\\sSPIDER",
					size: 2
				},
				{
					name: "Void Spider",
					regex: "VOID\\sSPIDER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(P.*?)\\s+(P.*?)\\s+RIME\\sWALKER"
				},
				{
					name: "Rime Walker",
					regex: "RIME\\sWALKER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(Ic.*)",
					size: 2
				}
			]
		}
	],
	[
		242,
		{
			entries: [
				{
					name: "Owlbear",
					regex: "OWLBEAR\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+PANTHER",
					size: 2
				},
				{
					name: "Panther",
					regex: "PANTHER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				},
				{
					name: "Peasant",
					regex: "PEASANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				},
				{
					name: "Pegasus",
					regex: "PEGASUS\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				}
			]
		}
	],
	[
		243,
		{
			entries: [
				{
					name: "Phoenix",
					regex: "PHOENIX\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(E.*?)\\s+(H.*?)\\s+(R.*?)\\s+PIRANHA,\\sSWARM",
					size: 3
				},
				{
					name: "Piranha, Swarm",
					regex: "PIRANHA,\\sSWARM\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+PIRATE",
					alias: "Piranha Swarm"
				},
				{
					name: "Pirate",
					regex: "PIRATE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				},
				{
					name: "Priest",
					regex: "PRIEST\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(H.*?)\\s+(Ho.*?)\\s+(R.*)"
				}
			]
		}
	],
	[
		244,
		{
			entries: [
				{
					name: "Purple Worm",
					regex: "PURPLE\\sWORM\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*?)\\s+RAKSHASA",
					size: 4
				},
				{
					name: "Rakshasa",
					regex: "RAKSHASA\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(M.*?)\\s+(W.*)"
				}
			]
		}
	],
	[
		245,
		{
			entries: [
				{
					name: "Rat",
					regex: "RAT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+RAT,\\sGIANT",
					size: 0.5
				},
				{
					name: "Rat, Giant",
					regex: "RAT,\\sGIANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+RAT,\\sDIRE",
					alias: "Giant Rat",
					size: 0.5
				},
				{
					name: "Rat, Dire",
					regex: "RAT,\\sDIRE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+RAT,\\sSWARM",
					alias: "Dire Rat"
				},
				{
					name: "Rat, Swarm",
					regex: "RAT,\\sSWARM\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					alias: "Rat Swarm"
				}
			]
		}
	],
	[
		246,
		{
			entries: [
				{
					name: "Rathgamnon",
					regex: "(A.*?)\\s+(AC.*V.*?\\d+)\\s+(L.*?)\\s+(Ro.*?)\\s+(A.*?)\\s+(A.*?)\\s+(A.*?)\\s+(G.*?)\\s+(P.*?)\\s+(T.*?)\\s+RA",
					size: 2
				}
			]
		}
	],
	[
		247,
		{
			entries: [
				{
					name: "Reaver",
					regex: "REAVER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+REMORHAZ"
				},
				{
					name: "Remorhaz",
					regex: "REMORHAZ\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(M.*?)\\s+(S.*)",
					size: 3
				}
			]
		}
	],
	[
		248,
		{
			entries: [
				{
					name: "Rhinoceros",
					regex: "RHINOCEROS\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+ROC",
					size: 2
				},
				{
					name: "Roc",
					regex: "ROC\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+ROPER",
					size: 3
				},
				{
					name: "Roper",
					regex: "ROPER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(G.*?)\\s+(P.*?)\\s+(T.*)",
					size: 2
				}
			]
		}
	],
	[
		249,
		{
			entries: [
				{
					name: "Rot Flower",
					regex: "ROT\\sFLOWER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+RUST\\sMONSTER"
				},
				{
					name: "Rust Monster",
					regex: "RUST\\sMONSTER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+SAHUAGIN"
				},
				{
					name: "Sahuagin",
					regex: "SAHUAGIN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+SALAMANDER"
				},
				{
					name: "Salamander",
					regex: "SALAMANDER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(H.*?)\\s+SCARAB,\\sSWARM"
				},
				{
					name: "Scarab, Swarm",
					regex: "SCARAB,\\sSWARM\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					alias: "Scarab Swarm"
				},
				{
					name: "Scarecrow",
					regex: "SCARECROW\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)"
				}
			]
		}
	],
	[
		250,
		{
			entries: [
				{
					name: "Scorpion",
					regex: "SCORPION\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+SCORPION,\\sGIANT",
					size: 0.5
				},
				{
					name: "Scorpion, Giant",
					regex: "SCORPION,\\sGIANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(P.*?)\\s+SHADOW",
					alias: "Giant Scorpion",
					size: 2
				},
				{
					name: "Shadow",
					regex: "SHADOW\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)"
				}
			]
		}
	],
	[
		251,
		{
			entries: [
				{
					name: "Shambling Mound",
					regex: "SHAMBLING\\sMOUND\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(E.*?)\\s+SHARK",
					size: 2
				},
				{
					name: "Shark",
					regex: "SHARK\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				},
				{
					name: "Shark, Megalodon",
					regex: "SHARK,\\sMEGALODON\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+SIREN",
					alias: "Megalodon",
					size: 3
				},
				{
					name: "Siren",
					regex: "SIREN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+SKELETON"
				},
				{
					name: "Skeleton",
					regex: "SKELETON\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+SMILODON"
				},
				{
					name: "Smilodon",
					regex: "SMILODON\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				}
			]
		}
	],
	[
		252,
		{
			entries: [
				{
					name: "Snake, Giant",
					regex: "SNAKE,\\sGIANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+SNAKE,\\sCOBRA",
					alias: "Giant Snake",
					size: 3
				},
				{
					name: "Snake, Cobra",
					regex: "SNAKE,\\sCOBRA\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+SNAKE,\\sSWARM",
					alias: "Cobra",
					size: 0.5
				},
				{
					name: "Snake, Swarm",
					regex: "SNAKE,\\sSWARM\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+SOLDIER",
					alias: "Snake Swarm"
				},
				{
					name: "Soldier",
					regex: "SOLDIER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				}
			]
		}
	],
	[
		253,
		{
			entries: [
				{
					name: "Sphinx",
					regex: "SPHINX\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(G.*?)\\s+(Om.*?)\\s+(R.*?)\\s+(T.*?)\\s+(U.*)",
					size: 2
				}
			]
		}
	],
	[
		254,
		{
			entries: [
				{
					name: "Spider",
					regex: "SPIDER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+SPIDER,\\sGIANT",
					size: 0.5
				},
				{
					name: "Spider, Giant",
					regex: "SPIDER,\\sGIANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+SPIDER,\\sSWARM",
					alias: "Giant Spider",
					size: 2
				},
				{
					name: "Spider, Swarm",
					regex: "SPIDER,\\sSWARM\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+STINGBAT",
					alias: "Spider Swarm"
				},
				{
					name: "Stingbat",
					regex: "STINGBAT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+STRANGLER",
					size: 0.5
				},
				{
					name: "Strangler",
					regex: "STRANGLER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(S.*)"
				}
			]
		}
	],
	[
		255,
		{
			entries: [
				{
					name: "The Ten-Eyed Oracle",
					regex: "(A.*?)\\s+(AC.*V.*?\\d+)\\s+(L.*?)\\s+(E.*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d\\..*?)\\s+(\\d+\\..*?)\\s+T",
					size: 2
				}
			]
		}
	],
	[
		256,
		{
			entries: [
				{
					name: "The Tarrasque",
					regex: "(A.*?)\\s+(AC.*V.*?\\d+)\\s+(L.*?)\\s+(De.*?)\\s+(P.*?)\\s+(R.*?)\\s+(R.*?)\\s+(R.*?)\\s+(S.*?)\\s+(S.*?)\\s+TH",
					size: 4
				}
			]
		}
	],
	[
		258,
		{
			entries: [
				{
					name: "The Wandering Merchant",
					regex: "(A.*?)\\s+(AC.*V.*?\\d+)\\s+(L.*?)\\s+(A.*?)\\s+(B.*?)\\s+(D.*?)\\s+(L.*?)\\s+(R.*?)\\s+(S.*?)\\s+TH"
				}
			]
		}
	],
	[
		259,
		{
			entries: [
				{
					name: "Thief",
					regex: "THIEF\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(B.*?)\\s+THUG"
				},
				{
					name: "Thug",
					regex: "THUG\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				},
				{
					name: "Treant",
					regex: "TREANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+TROLL",
					size: 3
				},
				{
					name: "Troll",
					regex: "TROLL\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*)",
					size: 2
				}
			]
		}
	],
	[
		260,
		{
			entries: [
				{
					name: "Troll, Frost",
					regex: "TROLL,\\sFROST\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(R.*?)\\s+UNICORN",
					alias: "Frost Troll",
					size: 2
				},
				{
					name: "Unicorn",
					regex: "UNICORN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+VAMPIRE",
					size: 2
				},
				{
					name: "Vampire",
					regex: "VAMPIRE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(B.*?)\\s+(Ch.*?)\\s+(S.*?)\\s+(V.*)"
				}
			]
		}
	],
	[
		261,
		{
			entries: [
				{
					name: "Vampire Spawn",
					regex: "VAMPIRE\\sSPAWN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(B.*?)\\s+(V.*?)\\s+VIOLET\\sFUNGUS"
				},
				{
					name: "Violet Fungus",
					regex: "VIOLET\\sFUNGUS\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				}
			]
		}
	],
	[
		262,
		{
			exclude: "262.*warriors.",
			entries: [
				{
					name: "Viperian",
					regex: "VIPERIAN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)"
				},
				{
					name: "Viperian, Ophid",
					regex: "VIPERIAN,\\sOPHID\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+VIPERIAN,\\sWIZARD",
					alias: "Viperian Ophid"
				},
				{
					name: "Viperian, Wizard",
					regex: "VIPERIAN,\\sWIZARD\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(Su.*?)\\s+(V.*?)\\s+(W.*)",
					alias: "Viperian Wizard"
				}
			]
		}
	],
	[
		263,
		{
			entries: [
				{
					name: "Vulture",
					regex: "VULTURE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+WASP,\\sGIANT"
				},
				{
					name: "Wasp, Giant",
					regex: "WASP,\\sGIANT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+WEREWOLF",
					alias: "Giant Wasp"
				},
				{
					name: "Werewolf",
					regex: "WEREWOLF\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(L.*?)\\s+WERERAT"
				},
				{
					name: "Wererat",
					regex: "WERERAT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(L.*?)\\s+WIGHT"
				},
				{
					name: "Wight",
					regex: "WIGHT\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(L.*)"
				}
			]
		}
	],
	[
		264,
		{
			entries: [
				{
					name: "Will-o'-Wisp",
					regex: "WILL-O'-WISP\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 0.5
				},
				{
					name: "Wolf",
					regex: "WOLF\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+WOLF,\\sDIRE"
				},
				{
					name: "Wolf, Dire",
					regex: "WOLF,\\sDIRE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+WOLF,\\sWINTER",
					alias: "Dire Wolf",
					size: 2
				},
				{
					name: "Wolf, Winter",
					regex: "WOLF,\\sWINTER\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(F.*)",
					alias: "Winter Wolf"
				}
			]
		}
	],
	[
		265,
		{
			entries: [
				{
					name: "Worg",
					regex: "WORG\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)",
					size: 2
				},
				{
					name: "Wraith",
					regex: "WRAITH\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(In.*?)\\s+(L.*?)\\s+WYVERN"
				},
				{
					name: "Wyvern",
					regex: "WYVERN\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+ZOMBIE",
					size: 2
				},
				{
					name: "Zombie",
					regex: "ZOMBIE\\s+(.*?)\\s+(AC.*?LV.*?\\d+?)\\s+(.*?)\\s+(R.*)"
				}
			]
		}
	]
]);
const CURSED_SCROLL_1 = new Map([
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
const CURSED_SCROLL_2 = new Map([
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
const CURSED_SCROLL_3 = new Map([
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

const MONSTER_MONDAY_1 = new Map([
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
const MONSTER_MONDAY_2 = new Map([
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
const MONSTER_MONDAY_3 = new Map([
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
const MONSTER_MONDAY_4 = new Map([
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

const LFTD_1 = new Map([
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
const LFTD_2 = new Map([
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
const LFTD_3 = new Map([
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
export const BOOKS = new Map([
	[
		"Shadowdark RPG (Core Rulebook)",
		{
			checkPage: 332,
			checkText: "ShadowDark RPG Core Rulebook",
			offset: 4,
			map: CORE_RULEBOOK
		}
	],
	[
		"Cursed Scroll 1: Diablerie",
		{
			checkPage: 1,
			checkText: "Cursed Scroll Shadowdark Zine Vol. 1: Diablerie!",
			offset: 0,
			map: CURSED_SCROLL_1
		}
	],
	[
		"Cursed Scroll 2: Red Sands",
		{
			checkPage: 1,
			checkText: "Cursed Scroll Shadowdark Zine 2: Red Sands",
			offset: 0,
			map: CURSED_SCROLL_2
		}
	],
	[
		"Cursed Scroll 3: Midnight Sun",
		{
			checkPage: 1,
			checkText: "Cursed Scroll Shadowdark Zine 3: Midnight Sun",
			offset: 0,
			map: CURSED_SCROLL_3
		}
	],
	[
		"Monster Monday 1: Brain Eaters",
		{
			checkPage: 2,
			checkText: "Brain Eaters",
			offset: 0,
			map: MONSTER_MONDAY_1
		}
	],
	[
		"Monster Monday 2: Crabstrosity",
		{
			checkPage: 2,
			checkText: "Crabstrosity",
			offset: 0,
			map: MONSTER_MONDAY_2
		}
	],
	[
		"Monster Monday 3: Ooze Cubes",
		{
			checkPage: 2,
			checkText: "Ooze Cubes",
			offset: 0,
			map: MONSTER_MONDAY_3
		}
	],
	[
		"Monster Monday 4: Mazzim the Mesmerist",
		{
			checkPage: 2,
			checkText: "Mazzim the Mesmerist",
			offset: 0,
			map: MONSTER_MONDAY_4
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
			checkPage: 1,
			checkText: "D ESIGNED AND W RITTEN BY C HRIS P OWELL L ETTERS FROM THE D ARK V OL . I: O UT OF T IME",
			offset: 0,
			map: LFTD_1
		}
	],
	[
		"Letters from the Dark Vol. II: Slayer's Moon",
		{
			checkPage: 1,
			checkText: "D ESIGNED AND W RITTEN BY C HRIS P OWELL D ESIGNED AND W RITTEN BY C HRIS P OWELL L ETTERS FROM THE D ARK V OL . II: S LAYER ’ S M OON",
			offset: 0,
			map: LFTD_2
		}
	],
	[
		"Letters from the Dark Vol. III: Tales of the Fey",
		{
			checkPage: 1,
			checkText: "D ESIGNED AND W RITTEN BY C HRIS P OWELL Tales of the Fey",
			offset: 0,
			map: LFTD_3
		}
	]
]);
