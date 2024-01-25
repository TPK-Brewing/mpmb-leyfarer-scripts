var iFileName = "The Leyfarer's Cronicle.js";
RequiredSheetVersion(13.1);

SourceList["TPK"] = {
	name : "The Leyfarer's Cronicle",
	abbreviation : "TPK",
	group : "TPK Brewing",
	url : "https://www.tpkbrewing.com/",
	date: "2024/01/13"
};

/*
*
* ANCESTRIES
*
*/

/*  ELVES  */

RaceList["elf (tpk)"] = {
	regExpSearch : /^(?=.*elf)(?=.*\(tpk\)).*$/i,
	name : "Elf",
    sortname : "(TPK) Elf",
	source : [["TPK", 4]],
	plural : "Elves",
	size : [3],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
    savetxt : {
			text : ["Affected by Fey spells/abilites"]
    },
	languageProfs : ["Common", "Noctis or Solis (choose one)"],
	scorestxt : "+2/+1 to two ability scores or +1/+1/+1 to three ability scores of my choice",

	trait : "Elf (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
        "Dreamtouched. Spells and abilities that affect Fey also affect you.",
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Elf",
		"   - (Lineage Trait) Lineage"
	]),
    eval : function () { 
		AddString('Feat Note 2', 'Elf Ancestry Trait 1', '; '); 
		AddString('Feat Note 3', 'Elf Ancestry Trait 2', '; ');
		AddString('Feat Note 4', 'Elf Ancestry Trait 3', '; ');
	},
	
	removeeval : function () {
		RemoveFeat("Lineage"); 
		RemoveFeat("Elf");
		RemoveFeat("Elf");
		RemoveFeat("Briar Elf"); 
		RemoveFeat("Briar Elf"); 
		RemoveFeat("Moon Elf"); 
		RemoveFeat("Moon Elf"); 
		RemoveFeat("Shadow Elf"); 
		RemoveFeat("Shadow Elf");
		RemoveFeat("Sun Elf"); 
		RemoveFeat("Sun Elf");
	 	RemoveString('Feat Note 2', 'Elf Ancestry Trait 1');
		RemoveString('Feat Note 3', 'Elf Ancestry Trait 2');
		RemoveString('Feat Note 4', 'Elf Ancestry Trait 3');
	}
};

AddRacialVariant("elf (tpk)","briar", {
	regExpSearch : /^(?=.*briar).*$/i,
	name : "Brair elf",
    sortname : "Elf, Briar",
	source : [["TPK", 4]],
	plural : "Briar elves",
	trait : "Briar Elf (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
        "Dreamtouched. Spells and abilities that affect Fey also affect you.",
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Elf",
		"   - (Origin Trait) Briar Elf",
	]),
});

AddRacialVariant("elf (tpk)","moon", {
	regExpSearch : /^(?=.*moon).*$/i,
	name : "Moon elf",
    sortname : "Elf, Moon",
	source : [["TPK", 4]],
	plural : "Moon elves",
	trait : "Moon Elf (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
        "Dreamtouched. Spells and abilities that affect Fey also affect you.",
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Elf",
		"   - (Origin Trait) Moon Elf",
	]),
});

AddRacialVariant("elf (tpk)", "shadow",  {
	regExpSearch : /^(?=.*shadow).*$/i,
	name : "Shadow elf",
    sortname : "Elf, Shadow",
	source : [["TPK", 4]],
	plural : "Shadow elves",
	trait : "Shadow Elf (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
        "Dreamtouched. Spells and abilities that affect Fey also affect you.",
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Elf",
		"   - (Origin Trait) Shadow Elf",
	]),
});

AddRacialVariant("elf (tpk)", "sun", {
	regExpSearch : /^(?=.*sun).*$/i,
	name : "Sun elf",
    sortname : "Elf, Sun",
	source : [["TPK", 4]],
	plural : "Sun elves",
	trait : "Sun Elf (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
        "Dreamtouched. Spells and abilities that affect Fey also affect you.",
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Elf",
		"   - (Origin Trait) Sun Elf",
	]),
});

AddRacialVariant("elf (tpk)", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Elven Lineage",
	source : [["TPK", 14]],
	plural : "Mixed Lineage",
	trait : "Mixed Elven Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
        "Dreamtouched. Spells and abilities that affect Fey also affect you.",
		"Mixed Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Elf",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
});



//GNOMES

RaceList["gnome (tpk)"] = {
	regExpSearch : /^(?=.*gnome)(?=.*\(tpk\)).*$/i,
	name : "Gnome",
    sortname : "(TPK) Gnome",
	source : [["TPK", 5]],
	plural : "Gnomes",
	size : [4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Nomic"],
	scorestxt : "+2/+1 to two ability scores or +1/+1/+1 to three ability scores of my choice",

	trait : "Gnome (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
			"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
			"   Available Trait Options:",
			"   - (Ancestry Trait) Gnome",
			"   - (Lineage Trait) Lineage",
	]),
    eval : function () {  
		AddString('Feat Note 2', 'Gnome Ancestry Trait 1', '; '); 
		AddString('Feat Note 3', 'Gnome Ancestry Trait 2', '; ');
		AddString('Feat Note 4', 'Gnome Ancestry Trait 3', '; ');
	},
	
	removeeval : function () {
		RemoveFeat("Gnome");
		RemoveFeat("Gnome");
		RemoveFeat("Gnome");
		RemoveFeat("Lineage");
	 	RemoveString('Feat Note 2', 'Gnome Ancestry Trait 1');
		RemoveString('Feat Note 3', 'Gnome Ancestry Trait 2');
		RemoveString('Feat Note 4', 'Gnome Ancestry Trait 3');
	}
};

AddRacialVariant("gnome (tpk)", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Gnomish Lineage",
	source : [["TPK", 14]],
	plural : "Mixed Lineage",
	trait : "Mixed Gnomish Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Mixed Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Gnome",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
});

//CATFOLK

RaceList["catfolk"] = {
	regExpSearch : /^(?=.*catfolk).*$/i,
	name : "Catfolk",
    sortname : "(TPK) Catfolk",
	source : [["TPK", 10]],
	plural : "Catfolk",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Miau"],
	scorestxt : "+2/+1 to two ability scores or +1/+1/+1 to three ability scores of my choice",
	savetxt : {
		text : ["Affected by Beast spells/abilites"]
	},
	trait : "Catfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect Beasts also affect you.",
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Catfolk",
		"   - (Lineage Trait) Lineage",
	]),
    eval : function () { 
		
		AddString('Feat Note 2', 'Catfolk Ancestry Trait 1', '; '); 
		AddString('Feat Note 3', 'Catfolk Ancestry Trait 2', '; ');
		AddString('Feat Note 4', 'Catfolk Ancestry Trait 3', '; ');
	},
	
	removeeval : function () {
		RemoveFeat("Catfolk");
		RemoveFeat("Catfolk");
		RemoveFeat("Catfolk");	
		RemoveFeat("Lineage");
		RemoveFeat("Grimalkin");
		RemoveFeat("Maneko");
	 	RemoveString('Feat Note 2', 'Catfolk Ancestry Trait 1');
		RemoveString('Feat Note 3', 'Catfolk Ancestry Trait 2');
		RemoveString('Feat Note 4', 'Catfolk Ancestry Trait 3');
	}
};

AddRacialVariant("catfolk", "grimalkin", {
	regExpSearch : /^(?=.*grimalkin).*$/i,
	name : "Grimalkin Catfolk",
    sortname : "Catfolk, Grimalkin",
	source : [["TPK", 9]],
	plural : "Grimalkins",
	trait : "Grimalkin Catfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Catfolk",
		"   - (Origin Trait) Grimalkin Catfolk",
	]),
});

AddRacialVariant("catfolk", "maneko", {
	regExpSearch : /^(?=.*maneko).*$/i,
	name : "Maneko Catfolk",
    sortname : "Catfolk, Maneko",
	source : [["TPK", 9]],
	plural : "Manekos",
	trait : "Maneko Catfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Catfolk",
		"   - (Origin Trait) Maneko Catfolk",
	]),
});

AddRacialVariant("catfolk", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Catfolk Lineage",
	source : [["TPK", 14]],
	plural : "Mixed Lineage",
	trait : "Mixed Catfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Mixed Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Catfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
});

//LIZARDFOLK

RaceList["lizardfolk (tpk)"] = {
	regExpSearch : /^(?=.*lizardfolk)(?=.*\(tpk\)).*$/i,
	name : "Lizardfolk",
    sortname : "(TPK) Lizardfolk",
	source : [["TPK", 11]],
	plural : "Lizardfolk",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Arosi"],
	scorestxt : "+2/+1 to two ability scores or +1/+1/+1 to three ability scores of my choice",
	savetxt : {
		text : ["Affected by Beast spells/abilites"]
	},
	trait : "Lizardfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Lizardfolk",
		"   - (Lineage Trait) Lineage",
	]),
    eval : function () { 
		AddString('Feat Note 2', 'Lizardfolk Ancestry Trait 1', '; '); 
		AddString('Feat Note 3', 'Lizardfolk Ancestry Trait 2', '; ');
		AddString('Feat Note 4', 'Lizardfolk Ancestry Trait 3', '; ');
	},
	
	removeeval : function () {
		RemoveFeat("Lizardfolk");
		RemoveFeat("Lizardfolk");
		RemoveFeat("Lizardfolk");	
		RemoveFeat("Lineage");
		RemoveFeat("Busaya");
		RemoveFeat("Voranos");
		RemoveFeat("Drakasi");
	 	RemoveString('Feat Note 2', 'Lizardfolk Ancestry Trait 1');
		RemoveString('Feat Note 3', 'Lizardfolk Ancestry Trait 2');
		RemoveString('Feat Note 4', 'Lizardfolk Ancestry Trait 3');
	}
};

AddRacialVariant("lizardfolk (tpk)", "busaya", {
	regExpSearch : /^(?=.*busaya).*$/i,
	name : "Busaya Lizardfolk",
    sortname : "Lizardfolk, Busaya",
	source : [["TPK", 10]],
	plural : "Busaya",
	trait : "Busaya Lizardfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Lizardfolk",
		"   - (Origin Trait) Busaya Lizardfolk",
	]),
});

AddRacialVariant("lizardfolk (tpk)", "drakasi",  {
	regExpSearch : /^(?=.*drakasi).*$/i,
	name : "Drakasi Lizardfolk",
    sortname : "Lizardfolk, Drakasi",
	source : [["TPK", 11]],
	plural : "Drakasi",
	trait : "Drakasi Lizardfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Lizardfolk",
		"   - (Origin Trait) Drakasi Lizardfolk",
	]),
});

AddRacialVariant("lizardfolk (tpk)", "voranos",  {
	regExpSearch : /^(?=.*voranos).*$/i,
	name : "Voranos Lizardfolk",
	source : [["TPK", 11]],
	plural : "Voranos",
	trait : "Voranos Lizardfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Lizardfolk",
		"   - (Origin Trait) Voranos Lizardfolk",
	]),
});

AddRacialVariant("lizardfolk (tpk)", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Lizardfolk Lineage",
	source : [["TPK", 14]],
	plural : "Mixed Lineage",
	trait : "Mixed Lizardfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
        "Dreamtouched. Spells and abilities that affect Fey also affect you.",
		"Mixed Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Catfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
});

//ORC ZUG ZUG

RaceList["orc (tpk)"] = {
	regExpSearch : /^(?=.*orc)(?=.*\(tpk\)).*$/i,
	name : "Orc (TPK)",
    sortname : "(TPK) Orc",
	source : [["TPK", 7]],
	plural : "Orcs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Orokan"],
	scorestxt : "+2/+1 to two ability scores or +1/+1/+1 to three ability scores of my choice",
	trait : "Orc (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Orc",
		"   - (Lineage Trait) Lineage",
	]),
    eval : function () { 
		
		AddString('Feat Note 2', 'Orc Ancestry Trait 1', '; '); 
		AddString('Feat Note 3', 'Orc Ancestry Trait 2', '; ');
		AddString('Feat Note 4', 'Orc Ancestry Trait 3', '; ');
	},
	
	removeeval : function () {
		RemoveFeat("Orc");
		RemoveFeat("Orc");
		RemoveFeat("Orc");	
		RemoveFeat("Lineage");
	 	RemoveString('Feat Note 2', 'Orc Ancestry Trait 1');
		RemoveString('Feat Note 3', 'Orc Ancestry Trait 2');
		RemoveString('Feat Note 4', 'Orc Ancestry Trait 3');
	}
};

AddRacialVariant("orc (tpk)", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Orcish Lineage",
	source : [["TPK", 14]],
	plural : "Mixed Lineage",
	trait : "Mixed Orcish Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Mixed Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Orc",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
});


RaceList["human (tpk)"] = {
	regExpSearch : /^(?=.*human)(?=.*\(tpk\)).*$/i,
	name : "Human (TPK)",
    sortname : "(TPK) Human",
	source : [["TPK", 6]],
	plural : "Humans",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	scorestxt : "+2/+1 to two ability scores or +1/+1/+1 to three ability scores of my choice",
	trait : "Human (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Human",
		"   - (Lineage Trait) Lineage",
	]),
    eval : function () { 
		
		AddString('Feat Note 2', 'Human Ancestry Trait 1', '; '); 
		AddString('Feat Note 3', 'Human Ancestry Trait 2', '; ');
		AddString('Feat Note 4', 'Human Ancestry Trait 3', '; ');
	},
	
	removeeval : function () {
		RemoveFeat("Human");
		RemoveFeat("Human");
		RemoveFeat("Human");	
		RemoveFeat("Lineage");
	 	RemoveString('Feat Note 2', 'Human Ancestry Trait 1');
		RemoveString('Feat Note 3', 'Human Ancestry Trait 2');
		RemoveString('Feat Note 4', 'Human Ancestry Trait 3');
	}
};

AddRacialVariant("human (tpk)", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Human Lineage",
	source : [["TPK", 14]],
	plural : "Mixed Lineage",
	trait : "Mixed Human Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Mixed Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Human",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
});

RaceList["ratfolk"] = {
	regExpSearch : /^(?=.*ratfolk).*$/i,
	name : "Ratfolk",
    sortname : "(TPK) Ratfolk",
	source : [["TPK", 12]],
	plural : "Ratfolk",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 'Kuikui'],
	scorestxt : "+2/+1 to two ability scores or +1/+1/+1 to three ability scores of my choice",
	savetxt : {
		text : ["Affected by Beast spells/abilites"]
	},
	trait : "Ratfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Ratfolk",
		"   - (Lineage Trait) Lineage",
	]),
    eval : function () { 
		AddString('Feat Note 2', 'Ratfolk Ancestry Trait 1', '; '); 
		AddString('Feat Note 3', 'Ratfolk Ancestry Trait 2', '; ');
		AddString('Feat Note 4', 'Ratfolk Ancestry Trait 3', '; ');
	},
	
	removeeval : function () {
		RemoveFeat("Ratfolk");
		RemoveFeat("Ratfolk");
		RemoveFeat("Ratfolk");	
		RemoveFeat("Lineage");
	 	RemoveString('Feat Note 2', 'Ratfolk Ancestry Trait 1');
		RemoveString('Feat Note 3', 'Ratfolk Ancestry Trait 2');
		RemoveString('Feat Note 4', 'Ratfolk Ancestry Trait 3');
	}
};

AddRacialVariant("ratfolk", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Ratfolk Lineage",
	source : [["TPK", 14]],
	plural : "Mixed Lineage",
	trait : "Mixed Ratfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Mixed Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Ratfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
});

RaceList["birdfolk"] = {
	regExpSearch : /^(?=.*birdfolk).*$/i,
	name : "Birdfolk",
    sortname : "(TPK) Birdfolk",
	source : [["TPK", 8]],
	plural : "Birdfolk",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 'Karukari'],
	scorestxt : "+2/+1 to two ability scores or +1/+1/+1 to three ability scores of my choice",
	savetxt : {
		text : ["Affected by Beast spells/abilites"]
	},
	trait : "Birdfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Birdfolk",
		"   - (Lineage Trait) Lineage",
	]),
    eval : function () { 
		AddString('Feat Note 2', 'Birdfolk Ancestry Trait 1', '; '); 
		AddString('Feat Note 3', 'Birdfolk Ancestry Trait 2', '; ');
		AddString('Feat Note 4', 'Birdfolk Ancestry Trait 3', '; ');
	},
	
	removeeval : function () {
		RemoveFeat("Birdfolk");
		RemoveFeat("Birdfolk");
		RemoveFeat("Birdfolk");	
		RemoveFeat("Lineage");
	 	RemoveString('Feat Note 2', 'Birdfolk Ancestry Trait 1');
		RemoveString('Feat Note 3', 'Birdfolk Ancestry Trait 2');
		RemoveString('Feat Note 4', 'Birdfolk Ancestry Trait 3');
	}
};

AddRacialVariant("birdfolk", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Birdfolk Lineage",
	source : [["TPK", 14]],
	plural : "Mixed Lineage",
	trait : "Mixed Birdfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Mixed Traits. I can choose three traits. Select in the Feats section\n   on Page 3/4.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Birdfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
});



/*
*
*  TRAITS
*
*/


// ELVES

FeatsList["(ancestry trait) elf"] = {
	name : "(Ancestry Trait) Elf",
	source : [["TPK", 4]],
	description : "",
	prerequisite : "Elf Ancestry",
	allowDuplicates: true,
	prereqeval : function(v) {
		return CurrentRace.known.indexOf('elf') !== -1 || 
		CurrentFeats.known.indexOf("adaptable trait") !== -1 ||
		CurrentRace.variant.indexOf('mixed lineage') !== -1;
	},
	choices : [ 'Darkvision', 'Dreamless', 'Graceling', 'Fey Magic' ],
	'darkvision' : {
		name : "Elf (Darkvision)",
		description : "Within a range of 60 feet, you can perceive darkness and dim light as though it were one degree brighter. Colors appear more muted in darkness, and are difficult to distinguish.",
		vision : [["Darkvision", 60]]
	},
	'dreamless' : {
		name : "Elf (Dreamless)",
		description : "You don’t need to sleep, and magic can’t put you to sleep. Instead, you enter a semiconscious trance for 4 hours each day. After resting in this way, you gain the same benefit that other creatures do from 8 hours of sleep.",
		vision : [["Dreamless", 0]],
	},
	'graceling' : {
		name : "Elf (Graceling)",
		description : "Your walking speed is 35 instead of 30.",
		speed : { walk : "+5" }
	},
	'fey magic' : {
		name : "Elf (Fey Magic)",
		description : "You know one cantrip of your choice. Your spellcasting ability for it is either Wisdom or Charisma, which you select when you choose this trait.",
		spellcastingBonus : [{
			spellcastingAbility : [5, 6],
			'class' : ['wizard','bard','cleric','sorcerer','druid', 'warlock'],
			name : "Elf (Fey Magic)",
			level : [0, 0],
			firstCol : "atwill",
		}]
	}
};

FeatsList["(origin trait) briar elf"] = {
	name : "(Origin Trait) Briar Elf",
	source : [["TPK", 4]],
	description : "",
	prerequisite : "Briar Elf Origin",
	allowDuplicates: true,
	prereqeval : function(v) {
		return CurrentRace.variant.indexOf('briar') !== -1;
	},
	choices : ['Armor of Thorns', 'Sweetbriar Perfume' ],
	'armor of thorns' : {
		name : "Briar Elf (Armor of Thorns)",
		description : "While you are grappled by a creature, it takes piercing damage equal to your Constitution modifier at the end of each of its turns."
	},
	'sweetbriar perfume' : {
		name : "Briar Elf (Sweetbriar Perfume)",
		description : "You have advantage on Charisma checks directed at non-hostile creatures."
	}
};

FeatsList["(origin trait) moon elf"] = {
	name : "(Origin Trait) Moon Elf",
	source : [["TPK", 4]],
	description : "",
	prerequisite : "Moon Elf Origin",
	allowDuplicates: true,
	prereqeval : function(v) {
		return CurrentRace.variant.indexOf('moon') !== -1;
	},
	choices : [ 'Dreamweaver', 'Twilight Child' ],
	'dreamweaver' : {
		name : "Moon Elf (Dreamweaver)",
		description : "You have a +1 bonus to your spell save DC when you cast illusion spells."
	},
	'twilight child' : {
		name : "Moon Elf (Twilight Child)",
		description : "While you are in direct moonlight, you have darkvision with a range of 60 feet. If you already have darkvision, your darkvision range is increased by 60 feet. In addition, in direct moonlight, you have advantage on Perception checks.",
		vision: [['(In Moonlight) Darkvision +60ft and Perception Check Adv.', 0]]
	}
};

FeatsList["(origin trait) shadow elf"] = {
	name : "(Origin Trait) Shadow Elf",
	source : [["TPK", 4]],
	description : "",
	prerequisite : "Shadow Elf Origin",
	allowDuplicates: true,
	prereqeval : function(v) {
		return CurrentRace.variant.indexOf('shadow') !== -1;
	},
	choices : [ 'Cloak of Silence', 'Eyes of Night' ],
	'cloak of silence' : {
		name : "Shadow Elf (Cloak of Silence)",
		description : "You have proficiency in the Stealth skill. If you are already proficient in Stealth, you gain expertise in it instead, which means your proficiency bonus is doubled for any Stealth checks you make. Your Stealth skill cannot benefit from other features that also double your proficiency bonus.",
		skills : [
			["Stealth", "increment"],
		],

	},
	'eyes of night' : {
		name : "Shadow Elf (Eyes of Night)",
		description : "Within 10 feet, you can see invisible creatures and objects as if they were visible. In addition, you have advantage on ability checks to determine whether something within 10 feet of you is an illusion.",
		vision: [
			['See Invisible', 10],
			['Perception Adv. on illusions', 10]
		]
	}
};

FeatsList["(origin trait) sun elf"] = {
	name : "(Origin Trait) Sun Elf",
	source : [["TPK", 4]],
	description : "",
	prerequisite : "Sun Elf Origin",
	allowDuplicates: true,
	prereqeval : function(v) {
		return CurrentRace.variant.indexOf('sun') !== -1;
	},
	choices : [ 'Dawn’s Embrace', 'Illumination' ],
	'dawn’s embrace' : {
		name : "Sun Elf (Dawn’s Embrace)",
		description : "While you are in direct sunlight, you have resistance to radiant damage. In addition, when you are in direct sunlight and one of your spells or abilities deals fire damage, you can choose to deal radiant damage instead.",
		dmgres : [
			["Radiant", "Radiant. (in sunlight)"],
		]

	},
	'illumination' : {
		name : "Sun Elf (Illumination)",
		description : "You learn the light cantrip. In addition, you have advantage on ability checks to detect traps and secret doors that are in bright light.",
		spellcastingBonus : [{
			spells : ["light"],
			name : "Sun Elf (Illumination)",
			selection : ["light"],
			firstCol : "atwill",
		}]
			
	}
};

//LINEAGE

FeatsList["(lineage trait) blessed/cursed lineage"] = {
	name : "(Lineage Trait) Blessed/Cursed Lineage",
	source : [["TPK", 13]],
	description : "",
	allowDuplicates: false,
	choices : [ 'Blessed Birth', 'Cursed Birth',],
	'blessed birth' : {
		name : "Lineage (Blessed Birth)",
		source : [["TPK", 13]],
		description : "You gain a fate die. When you make a roll using a d20, you can choose to expend your fate die to replace the number on the die with 10. You regain expended fate dice on a long rest. In addition, you can cast Bless once per long rest, using Charisma as your spellcasting ability.",
		usages : 1,
		recovery : "long rest",
		spellcastingBonus : [{
			spells : ["bless"],
			name : "Lineage (Blessed Birth)",
			selection : ["bless"],
			times : 1,
			spellcastingAbility : 6
		}]
	},
	'cursed birth' : {
		name : "Lineage (Cursed Birth)",
		source : [["TPK", 13]],
		description : "You gain a fate die. When you make a roll using a d20, you can choose to expend your fate die to replace the number on the die with 10. You regain expended fate dice on a long rest. In addition, you can cast Bane once per long rest, using Charisma as your spellcasting ability.",
		usages : 1,
		recovery : "long rest",
		spellcastingBonus : [{
			spells : ["bane"],
			name : "Lineage (Cursed Birth)",
			selection : ["bane"],
			times : 1,
			spellcastingAbility : 6
		}]
	}
};

FeatsList["(lineage trait) draconic lineage"] = {
	name : "(Lineage Trait) DraconicLineage",
	source : [["TPK", 14]],
	description : "",
	allowDuplicates: false,
	choices : ['Gift of the Cindergale', 'Gift of the Levintide', 'Gift of the Mindsire', 'Gift of the Mooneater', 'Gift of the Mourningstar', 'Gift of the Neverbeast', 'Gift of the Windrose' ],

	'gift of the cindergale' : {
		name : "Lineage (Gift of the Cindergale)",
		source : [["TPK", 14]],
		description : "When your spells or abilities deal fire damage to a creature or object that has fire resistance, the amount of damage is not reduced. When your spells or abilities deal fire damage to a creature or object that is immune to fire, it is dealt damage as though it was resistant to fire instead."
	},
	'gift of the levintide' : {
		name : "Lineage (Gift of the Levintide)",
		source : [["TPK", 14]],
		description : "When you deal lightning or thunder damage, you can use this trait to reroll a number of damage dice up to your Constitution modifier. You must use the new result. You can use this ability a number of times per long rest equal to your proficiency bonus.",
		usages : "Proficiency bonus per ",
		recovery : "long rest",
	},
	'gift of the mindsire' : {
		name : "Lineage (Gift of the Mindsire)",
		source : [["TPK", 15]],
		description : "You gain a number of charges equal to your proficiency bonus minus 1. As an action, spend any number of charges to gain a spell slot. The level of this spell slot is equal to the number of charges spent. When you take a long rest, you regain your spent charges and lose any spell slots created using this trait.",
		action : [ "action", "Gift of the Mindsire"],
		usages : "Proficiency bonus per ", 
		usagescalc : "event.value = Math.max(1, What('Proficiency Bonus') - 1);",
		recovery : "long rest"
	},
	'gift of the mooneater' : {
		name : "Lineage (Gift of the Mooneater)",
		source : [["TPK", 15]],
		description : "You have the ability to communicate telepathically with creatures that can breathe underwater. In addition, when you roll a 1 on a damage die for a spell or ability that deals cold damage, you can reroll the die. You must use the new roll."
	},
	'gift of the mourningstar' : {
		name : "Lineage (Gift of the Mourningstar)",
		source : [["TPK", 14]],
		description : "You can maintain concentration on two spells at the same time, provided that at least one is a divination spell. If you lose concentration for any reason, including failing a concentration check or becoming incapacitated, you lose concentration on both spells."
	},
	'gift of the neverbeast' : {
		name : "Lineage (Gift of the Neverbeast)",
		source : [["TPK", 15]],
		description : "Spells and abilities that affect monstrosities also affect you. In addition, your spells and abilities that reference beasts also include monstrosities with an Intelligence score of 4 or less and monstrosities that don’t comprehend any languages.",
		savetxt : {
			text : ["Affected by Monstrosites spells/abilites"]
		},
	},
	'gift of the windrose' : {
		name : "Lineage (Gift of the Windrose)",
		source : [["TPK", 15]],
		description : "While singing, you have advantage on checks made to navigate through wilderness and to detect the presence of secret doors."
	}
};

FeatsList["(lineage trait) Divine lineage"] = {
	name : "(Lineage Trait) Divine Lineage",
	source : [["TPK", 14]],
	description : "",
	allowDuplicates: false,
	choices : ['Aspect of the Buried One', 'Aspect of the Burning One', 'Aspect of the Caged One', 'Aspect of the Sleeping One', 'Aspect of the Wandering One'  ],

	'aspect of the buried one' : {
		name : "Lineage (Aspect of the Buried One)",
		source : [["TPK", 14]],
		description : "Your fingertips and other extremities blacken, as if perpetually covered in charcoal. You can cast spells without material components, unless a material component is consumed by the spell.",
	},
	'aspect of the burning one' :{
		name : "Lineage (Aspect of the Burning One)",
		source : [["TPK", 14]],
		description : "Your eyes are the color of fire, with red-orange sclera and yellow irises. When you deal bludgeoning, piercing, or slashing damage using a weapon attack, you can instead choose to deal fire damage.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ((/piercing|bludgeoning|slashing/i).test(fields.Damage_Type)){
						fields.Description += (fields.Description ? '; ' : '') + 'Can deal Fire damage instead';
					};
				},
				"I can use fire damage instead of piercing, bludeoning, or slashing."
			]
		}
	},
	'aspect of the caged one' : {
		name : "Lineage (Aspect of the Caged One)",
		source : [["TPK", 14]],
		description : "Scar-like spiral patterns cover your skin. When one of your attacks deals damage to a creature, reduce the target’s temporary hit points to zero before calculating damage. You can use this ability a number of times per long rest equal to your proficiency bonus.",
		usages : "Proficiency bonus per ",
		recovery : "long rest",
	},
	'aspect of the sleeping one' : {
		name : "Lineage (Aspect of the Sleeping One)",
		source : [["TPK", 14]],
		description : "Flower buds grow in your hair. After you take a short rest, you regain one expended spell slot of your choice. The level of this spell slot must be less than or equal to your proficiency bonus.",
	},
	'aspect of the wandering one' : {
		name : "Lineage (Aspect of the Wandering One)",
		source : [["TPK", 14]],
		description : "After you take a short rest, you can change your appearance/voice. You determine the specifics of the changes. You can adjust height/weight and change size between Medium/Small. You can as another ancestry. It must be an individual you have seen and you cannot change your pupil shape.",
	}
};

FeatsList["(lineage trait) wyd-touched lineage"] = {
	name : "(Lineage Trait) Wyd-touched",
	source : [["TPK", 14]],
	description : "",
	allowDuplicates: false,
	choices : ['Effortless Enchantment', 'Guarded Mind', 'Hybrid Flora', 'Unwavering Focus', 'Weald Walker'],
	'effortless enchantment' : {
		name : "Lineage (Effortless Enchantment)",
		source : [["TPK", 15]],
		description : "You can maintain concentration on two spells at once, provided that at least one is an enchantment spell. If you lose concentration for any reason, including failing a concentration check or becoming incapacitated, you lose concentration on both spells.",
	},
	'guarded mind' : {
		name : "Lineage (Guarded Mind)",
		source : [["TPK", 16]],
		description : "You have advantage on saving throws against charm, memory loss, and other mind-altering effects.",
		savetxt : { text : ["Adv. against charm, mem lost, mind effects"] }
	},
	'hybrid flora' : {
		name : "Lineage (Hybrid Flora)",
		source : [["TPK", 16]],
		description : "Your spells and abilities that refer to beasts also refer to plants.",
	},
	'unwavering focus' : {
		name : "Lineage (Unwavering Focus)",
		source : [["TPK", 16]],
		description : "While you aren’t maintaining concentration on any spells, your spell attack bonus and spell save DC are both increased by half of your proficiency bonus, rounded down. [Not calulated in sheet]",
		calcChanges : {
			atkCalc : [
				function (fields, v, output) {
					var profB = Number(How("Proficiency Bonus"));
					if ((/.*unwavering attack.*/i).test(v.WeaponTextName) ){
						output.extraHit = Math.floor(profB/2);
					} else if ((/.*unwavering save dc.*/i).test(v.WeaponTextName) ){
						output.extraHit = Math.floor(profB/2);
					}
				},
				"I add my half my prof bonus (rounded down) when not concentrating."
			],
		},
		weaponOptions : [
		{
			name : "Unwavering Attack",
			baseWeapon : "unarmed strike",
			regExpSearch : /unwavering attack/i,
			isSpell: true,
			description : "Only when not concentrating on spells",
			useSpellcastingAbility : true,
			damage : ["", "", ""],
			range : "See Spell",
		},
		{
			name : "Unwavering Save DC",
			baseWeapon : "unarmed strike",
			regExpSearch : /unwavering save dc/i,
			isSpell: true,
			dc : true,
			description : "Only when not concentrating on spells",
			damage : ["", "", ""],
			useSpellcastingAbility : true,
			range : "See Spell",
		}
		],
		weaponsAdd : ["Unwavering Attack","Unwavering Save DC"]

	},
	'weald walker' : {
		name : "Lineage (Weald Walker)",
		source : [["TPK", 16]],
		description : "In forested areas you are unaffected by difficult terrain due to plants, and you have advantage on saving throws and ability checks to avoid or escape being grappled by plants.",
		savetxt : { text : ["Adv. against grapple from plants"] }
	}
};
//GNOMES

FeatsList["(ancestry trait) gnome"] = {
	name : "(Ancestry Trait) Gnome",
	source : [["TPK", 4]],
	description : "",
	prerequisite : "Gnome Ancestry",
	allowDuplicates: true,
	prereqeval : function(v) {
		return CurrentRace.known.indexOf('gnome') !== -1||
		CurrentRace.variant.indexOf('mixed lineage') !== -1;
	},
	choices : [ 'Adaptable Trait', 'Expert Researcher', 'Improvised Spell', 'Overcharge', 'Temporary Focus', 'Tinker' ],
	'adaptable trait' : {
		name : "Gnome (Adaptable Trait)",
		description : "You can choose one trait from any ancestry that does not require an origin. You gain the chosen trait and it does not count as one of your selectable traits.",
		eval : function() { AddString('Feat Note 5', 'Adaptable Trait'); }
	},
	'expert researcher' : {
		name : "Gnome (Expert Researcher)",
		description : "Choose one skill or tool that you are proficient in. You gain expertise with that skill or tool, which means your proficiency bonus is doubled for any ability check you make with it. The skill or tool you choose must be one that isn't already benefiting from a feature that doubles your proficiency bonus.",
		skillstxt: "Expertise with any one skill that you are already proficient with."
	},
	'improvised spell' : {
		name : "Gnome (Improvised Spell)",
		description : "Using this trait, you can cast any wizard cantrip, and Intelligence is your spellcasting ability for it. You can use this trait a number of times per long rest equal to your proficiency bonus.",
		usages : "Proficiency bonus per ",
		recovery : "long rest",
		spellcastingAbility : 4
	},
	'overcharge' : {
		name : "Gnome (Overcharge)",
		description : "While touching a magic item that holds charges, you can use an action to add one charge to it. If the item is already holding its maximum number of charges, nothing happens. You can use this trait a number of times per long rest equal to your proficiency bonus minus 1.",
		action : [ "action", "Overcharge"],
		usages : "Proficiency bonus per ", 
		usagescalc : "event.value = Math.max(1, What('Proficiency Bonus') - 1);",
		recovery : "long rest"
	},
	'temporary focus' : {
		name : "Gnome (Temporary Focus)",
		description : "When you finish a long rest, you can choose a weapon, shield, or other object. Until your next long rest, you can use the chosen item as a spellcasting focus while you carry it in one or more hands."
	},
	'tinker' : {
		name : "Gnome (Tinker)",
		description : "You are proficient in one tool or vehicle of your choice and either Arcana or History.",
		toolProfs : ["from Tinker", 1],
		skillstxt : "Choose Arcana or History"
	}

};

//CATFOLK

FeatsList["(ancestry trait) catfolk"] = {
	name : "(Ancestry Trait) Catfolk",
	source : [["TPK", 10]],
	description : "",
	prerequisite : "Catfolk Ancestry",
	allowDuplicates: true,
	prereqeval : function(v) {
		return CurrentRace.known.indexOf('catfolk') !== -1 || 
		CurrentFeats.known.indexOf("adaptable trait") !== -1||
		CurrentRace.variant.indexOf('mixed lineage') !== -1;
	},
	choices : [ 'Catching Claws', 'Darkvision', 'Feline Finesse', 'Land on Your Feet', 'Premonition' ],
	'catching claws' : {
		name : "Catfolk (Catching Claws)",
		description : "You can use your claws to make unarmed strikes. When you hit with them, you deal 1d6 + Strength (1d4 + Dexterity if small) modifier slashing damage  In addition, you have a climbing speed equal to your walking speed.",
		weaponsAdd : ["Cat Claws"],
		weaponOptions : {
			baseWeapon : "unarmed strike",
			regExpSearch : /^(?=.*cat)(?=.*claws).*$/i,
			name : "Cat Claws",
			damage : [1, 6, "slashing"],
			ability : 1,
			description : "",
			modifiers : ["Prof+Str", "Str"]
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ((/cat claws/i).test(v.WeaponTextName) && (tDoc.getField('Size Category').currentValueIndices === 4 )){
						fields.Damage_Die = '1d4';
						fields.Mod = 2;
					};
				},
				"I use Strength instead of Dex for heavy ranged weapons."
			]
		},
		climb : { spd : "walk", enc : 0 },
	},
	'darkvision' : {
		name : "Catfolk (Darkvision)",
		description : "Within a range of 60 feet, you can perceive darkness and dim light as though it were one degree brighter. Colors appear more muted in darkness, and are difficult to distinguish.",
		vision : [["Darkvision", 60]]
	},
	'feline finesse' : {
		name : "Catfolk (Feline Finesse)",
		description : "You are proficient in your choice of two of the following skills: Acrobatics, Deception, Religion, and Stealth.",
		skillstxt : "Choose two from Acrobatics, Deception, Religion, and Stealth",
	},
	'land on your feet' : {
		name : "Catfolk (Land on Your Feet)",
		description : "You have resistance to fall damage, and taking damage from falling does not knock you prone.",
		dmgres : ["Fall Dmg"],
		savetxt : { text : ["Falling can't knock you prone"] }
	},
	'premonition' : {
		name : "Catfolk (Premonition)",
		description : "You have a +1 bonus when you roll initiative.",
		addMod : { type : "skill", field : "Init", mod : 1, text : "I have a +1 bonus on initiative rolls." }
	}
};

FeatsList["(origin trait) grimalkin"] = {
	name : "(Origin Trait) Grimalkin",
	source : [["TPK", 10]],
	description : "",
	prerequisite : "Grimalkin Origin",
	allowDuplicates: false,
	prereqeval : function(v) {
		return CurrentRace.variant.indexOf('grimalkin') !== -1;
	},
	choices : [ 'Catwalk' ],
	'catwalk' : {
		name : "Grimalkin (Catwalk)",
		description : "As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can’t do so again until you finish a short or long rest.",
		name : "Grimalkin (Catwalk)",
		limfeaname : "Catwalk",
		minlevel : 1,
		usages : 1,
		recovery : "short rest",
		spellcastingBonus : {
			name : "Catwalk",
			spells : ["misty step"],
			selection : ["misty step"],
			firstCol : 'oncesr'
		}
	}
};

FeatsList["(origin trait) maneko"] = {
	name : "(Origin Trait) Maneko",
	source : [["TPK", 10]],
	description : "",
	prerequisite : "Maneko Origin",
	allowDuplicates: false,
	prereqeval : function(v) {
		return CurrentRace.variant.indexOf('maneko') !== -1;
	},
	choices : [ 'Nine Lives' ],
	'nine lives' : {
		name : "Maneko (Nine Lives)",
		description : "You have a +1 bonus to death saving throws. In addition, when you receive massive damage, you are knocked unconscious instead of being instantly killed. If this happens nine times, something unexpected may happen.",
		savetxt : { text : ["+1 on Death Saving Throws"] }
	}
};

//LIZARDFOLK

FeatsList["(ancestry trait) lizardfolk"] = {
	name : "(Ancestry Trait) Lizardfolk",
	source : [["TPK", 11]],
	description : "",
	prerequisite : "Lizardfolk Ancestry",
	allowDuplicates: true,
	prereqeval : function(v) {
		return CurrentRace.known.indexOf('lizardfolk') !== -1 || 
		CurrentFeats.known.indexOf("adaptable trait") !== -1||
		CurrentRace.variant.indexOf('mixed lineage') !== -1;
	},
	choices : [ 'Camouflage', 'Sharp Teeth', 'Natural Armor', 'Reptilian Resourcefulness', 'Sticky Tongue' ],
	'camouflage' : {
		name : "Lizardfolk (Camouflage)",
		description : "While you are unarmored or wearing light armor, whenever you roll a Dexterity (Stealth) check to hide, you can roll 1d4 and add it to the result."
	},
	'sharp teeth' : {
		name : "Lizardfolk (Sharp Teeth)",
		description : "You can use your teeth to make unarmed strikes. When you hit with them, you deal 1d6 + your Strength (1d4 if small) modifier piercing damage. In addition, after you hit a creature with an attack roll using your teeth, you can attempt to grapple them in the same turn using a bonus action.",
		prerequisite : "Lizardfolk Ancestry",
		weaponsAdd : ["Sharp Teeth"],
		weaponOptions : {
			baseWeapon : "unarmed strike",
			regExpSearch : /^(?=.*sharp)(?=.*teeth).*$/i,
			name : "Sharp Teeth",
			damage : [1, 6, "slashing"],
			ability : 1,
			modifiers : ["Prof+Str", "Str"],
			description : "After hit, can attempt to grapple as a bonus action",
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ((/sharp teeth/i).test(v.WeaponTextName) && (tDoc.getField('Size Category').currentValueIndices === 4 )){
						fields.Damage_Die = '1d4';
					};
				}
			]
		},
		action : [
			["bonus action", "(After hit) Teeth Grapple"]
		],
	},
	'natural armor' : {
		name : "Lizardfolk (Natural Armor)",
		description : "When you aren’t wearing armor, your base AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield’s benefits apply as normal while you use your natural armor.",
		armorOptions : {
			regExpSearch : /^(?=.*natural)(?=.*armor).*$/i,
			name : "Natural Armor",
			ac : 13,
		},
		armorAdd : "Natural Armor"
	},
	'reptilian resourcefulness' : {
		name : "Lizardfolk (Reptilian Resourcefulness)",
		description : "You are proficient in your choice of two of the following skills: Athletics, Nature, Religion, and Survival.",
		skillstxt : "Choose two from Athletics, Nature, Religion, and Survival",
	},
	'sticky tongue' : {
		name : "Lizardfolk (Sticky Tongue)",
		description : "As a bonus action, you can interact with a tiny object within 10 feet. For example, You could flip a lever, retrieve a torch, or pick up a coin.",
		action : [
			["bonus action", "Sticky Tongue"]
		],
	}
};

FeatsList["(origin trait) busaya"] = {
	name : "(Origin Trait) Busaya",
	source : [["TPK", 12]],
	description : "",
	prerequisite : "Busaya Origin",
	allowDuplicates: false,
	prereqeval : function(v) {
		return CurrentRace.variant.indexOf('busaya') !== -1;
	},
	choices : [ 'Wetlander' ],
	'wetlander' : {
		name : "Busaya (Wetlander)",
		description : "You can hold your breath for up to 15 minutes at a time, and you have a swimming speed equal to your walking speed. If you are Small size, you can move your walking speed across the surface of a body of water before falling in.",
		speed : {
			swim : { spd : "walk", enc : 0 }
		}
	}
};

FeatsList["(origin trait) drakasi"] = {
	name : "(Origin Trait) Drakasi",
	source : [["TPK", 12]],
	description : "",
	prerequisite : "Drakasi Origin",
	allowDuplicates: false,
	prereqeval : function(v) {
		return CurrentRace.variant.indexOf('drakasi') !== -1;
	},
	choices : [ 'Arboreal Acrobat' ],
	'arboreal acrobat' : {
		name : "Drakasi (Arboreal Acrobat)",
		description : "You have a climbing speed of 20. While falling, use your action to slow descent to 60 feet until the end of your turn. Use your movement to go horizontally in space up to your walking speed. If you land before the turn ends, you take no falling damage.",
		speed : {
			climb : { spd : 20, enc : 0 }
		},
		action : [
			["action", "Arboreal Acrobat"]
		],
	}
};

FeatsList["(origin trait) voranos"] = {
	name : "(Origin Trait) Voranos",
	source : [["TPK", 12]],
	description : "",
	prerequisite : "Voranos Origin",
	allowDuplicates: false,
	prereqeval : function(v) {
		return CurrentRace.variant.indexOf('voranos') !== -1;
	},
	choices : [ 'Desert Dweller' ],
	'desert dweller' : {
		name : "Voranos (Desert Dweller)",
		description : "You are resistant to fire damage. In addition, you have advantage on Constitution saving throws to avoid exhaustion due to heat.",
		dmgres : ["Fire"],
		savetxt : { text : ["Adv. against exhaust via heat"] }
	}
};

//ORC ZUG ZUG

FeatsList["(ancestry trait) orc"] = {
	name : "(Ancestry Trait) Orc",
	source : [["TPK", 7]],
	description : "",
	prerequisite : "Orc Ancestry",
	allowDuplicates: true,
	prereqeval : function(v) {
		return CurrentRace.known.indexOf('orc') !== -1 || 
		CurrentFeats.known.indexOf("adaptable trait") !== -1||
		CurrentRace.variant.indexOf('mixed lineage') !== -1;
	},
	choices : [ 'Hunting Companion', 'Bushcraft', 'Martial Training', 'Prowess Weapon' , 'Tenacious', 'Wanderer’s Endurance' ],
	'hunting companion' : {
		name : "Orc (Hunting Companion)",
		description : "Choose a Beast (select Race on Companion Page) that has a challenge rating of 0. The beast obeys your commands as best as it can. With your companion, you have advantage on ability checks to forage for food. You can use an action to command your companion to interact with an object.",
		action : [
			["action", "Companion Interact"]
		],
	},
	'bushcraft' : {
		name : "Orc (Bushcraft)",
		description : "You are proficient in your choice of two of the following skills: Animal Handling, Medicine, Nature, and Survival.",
		skillstxt : "Choose two from Animal Handling, Medicine, Nature, and Survival"
	},
	'martial training' : {
		name : "Orc (Martial Training)",
		description : "You are proficient in two weapons of your choice.",
		weaponProfs : [false, false, ["Training 1", "Training 2"]]
	},
	'prowess weapon' : {
		name : "Orc (Prowess Weapon)",
		description : "When you make a ranged weapon attack using a weapon with the heavy property, you can choose to use your Strength modifier instead of Dexterity for the attack and damage rolls.",
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if (v.isRangedWeapon && ((/heavy/i).test(fields.Description)) ){
						fields.Mod = 1;
					};
				},
				"I use Strength instead of Dex for heavy ranged weapons."
			]
		}
	},
	'wanderer’s endurance' : {
		name : "Orc (Wanderer’s Endurance)",
		description : "You have advantage on saving throws to avoid exhaustion.",
		savetxt : { text : ["Adv. to avoid exhaustion"] }
	},
	'tenacious' : {
		name : "Orc (Tenacious)",
		description : "Your hit point maximum increases by 1, and whenever you gain a level, your hit point maximum increases by 1 additional point.",
		calcChanges : {
			hp : function (totalHD) {
				return [totalHD, '\n + ' + totalHD + ' \xD7 1 from the Tenacious Trait (' + (totalHD) + ')', true];
			}
		}
	}
};

FeatsList["(ancestry trait) birdfolk"] = {
	name : "(Ancestry Trait) Birdfolk",
	source : [["TPK", 8]],
	description : "",
	prerequisite : "Birdfolk Ancestry",
	allowDuplicates: true,
	prereqeval : function(v) {
		return CurrentRace.known.indexOf('birdfolk') !== -1 || 
		CurrentFeats.known.indexOf("adaptable trait") !== -1||
		CurrentRace.variant.indexOf('mixed lineage') !== -1;
	},
	choices : [ 'Avian Artistry', 'Darkvision', 'Extraordinary Eyesight', 'Flight' , 'Mimicry', 'Seizing Talons' ],
	'avian artistry' : {
		name : "Birdfolk (Avian Artistry)",
		description : "You are proficient in your choice of two of the following skills: Athletics, Performance, Stealth, and Sleight of Hand.",
		skillstxt : "Choose two from Athletics, Performance, Stealth, and Sleight of Hand"
	},
	'darkvision' : {
		name : "Birdfolk (Darkvision)",
		description : "Within a range of 60 feet, you can perceive darkness and dim light as though it were one degree brighter. Colors appear more muted in darkness, and are difficult to distinguish.",
		vision : [["Darkvision", 60]]
	},
	'extraordinary eyesight' : {
		name : "Birdfolk (Extraordinary Eyesight)",
		description : "When you make a Wisdom (Perception) check that relies on sight, you can roll 1d4 and add it to the result. In addition, you have a +2 bonus to your Passive Perception",
		addMod : { type : "skill", field : "passive perception", mod : 2, text : "I have a +2 bonus to passive Wisdom (Perception)." }
	},
	'flight' : {
		name : "Birdfolk (Flight)",
		description : "Your wings grant you a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.",
		speed : { fly : { spd : "walk", enc : 0 } }
	},
	'mimicry' : {
		name : "Birdfolk (Mimicry)",
		description : "When you make an ability check using Charisma to imitate sounds, any creature whose Insight skill modifier +10 is lower than your roll cannot identify it as an imitation.",
	},
	'seizing talons' : {
		name : "Birdfolk (Seizing Talons)",
		description : "You can use your claws to make unarmed strikes. When you hit with them, you deal 1d6 + your Strength modifier (1d4 + Dex if small) slashing damage. In addition, moving at least 15 feet before making an unarmed strike, the creature hit cannot make opportunity attacks against you until the end of your turn.",
		weaponsAdd : ["Seizing Talons"],
		weaponOptions : {
			baseWeapon : "unarmed strike",
			regExpSearch : /^(?=.*seizing)(?=.*talons).*$/i,
			name : "Seizing Talons",
			damage : [1, 6, "slashing"],
			ability : 1,
			modifiers : ["Prof+Str", "Str"],
			description : "If moved 15 ft and hit, target cannot make opp. attack against me",
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ((/seizing talons/i).test(v.WeaponTextName) && (tDoc.getField('Size Category').currentValueIndices === 4 )){
						fields.Damage_Die = '1d4';
						fields.Mod = 2;
					};
				}
			]
		},
	}
};

FeatsList["(ancestry trait) ratfolk"] = {
	name : "(Ancestry Trait) Ratfolk",
	source : [["TPK", 12]],
	description : "",
	prerequisite : "Ratfolk Ancestry",
	allowDuplicates: true,
	prereqeval : function(v) {
		return CurrentRace.known.indexOf('ratfolk') !== -1 || 
		CurrentFeats.known.indexOf("adaptable trait") !== -1||
		CurrentRace.variant.indexOf('mixed lineage') !== -1;
	},
	choices : [ 'Blindsight', 'Charming Features', 'Cheek Pouches', 'Gnawing Teeth' , 'Murine Moxie', 'Swarm' ],
	'blindsight' : {
		name : "Ratfolk (Blindsight)",
		description : "Your keen senses of hearing and smell give you blindsight with a range of 30 feet. Within that range, you can effectively see anything that isn’t behind total cover, even if you’re blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.",
		vision : [
			["Blindsight", 30],
		],
	},
	'charming features' : {
		name : "Ratfolk (Charming Features)",
		description : "When you make a Charisma check, you can roll 1d4 and add it to the result. After you use this trait in an interaction with a creature, you can’t use it in subsequent interactions with the same creature until you finish a short or long rest."
	},
	'cheek pouches' : {
		name : "Ratfolk (Cheek Pouches)",
		description : "Your cheeks have pouches that you can use to store tiny objects equal to twice your proficiency bonus. While using half or less capacity, the items are hidden. While using more than half of your cheeks’ capacity, you have difficulty speaking and it is obvious to onlookers that your cheeks are full.",
		addMod : { type : "skill", field : "passive perception", mod : 2, text : "I have a +2 bonus to passive Wisdom (Perception)." }
	},
	'murine moxie' : {
		name : "Ratfolk (Murine Moxie)",
		description : "You are proficient in your choice of two of the following skills: Medicine, Perception, Sleight of Hand, and Survival.",
		skillstxt : "Choose two from Medicine, Perception, Sleight of Hand, and Survival"
	},
	'gnawing teeth' : {
		name : "Ratfolk (Gnawing Teeth)",
		description : "You can use your incisors to make unarmed strikes. When you hit with them, you deal 1d6 + your Strength modifier piercing damage (1d4 + Dexterity if Small.) In addition, you have a burrow speed of 10 feet.",
		weaponsAdd : ["Gnawing Teeth"],
		weaponOptions : {
			baseWeapon : "unarmed strike",
			regExpSearch : /^(?=.*gnawing)(?=.*teeth).*$/i,
			name : "Gnawing Teeth",
			damage : [1, 6, "piercing"],
			ability : 1,
			modifiers : ["Prof+Str", "Str"],
			description : "",
		},
		calcChanges : {
			atkAdd : [
				function (fields, v) {
					if ((/gnawing teeth/i).test(v.WeaponTextName) && (tDoc.getField('Size Category').currentValueIndices === 4 )){
						fields.Damage_Die = '1d4';
						fields.Mod = 2;
					};
				}
			]
		},
		speed : { burrow : { spd : 10, enc : 0 } }
	},
	'swarm' : {
		name : "Ratfolk (Swarm)",
		description : "You can move through the space of any creature that is of a size larger than yours. In addition, if your size is Small, you can end your movement in the same square as a Small companion. No more than two creatures can occupy the same square using this trait.",
	}
};

FeatsList["(ancestry trait) human"] = {
	name : "(Ancestry Trait) Human",
	source : [["TPK", 6]],
	description : "",
	prerequisite : "Human Ancestry",
	allowDuplicates: true,
	prereqeval : function(v) {
		return CurrentRace.known.indexOf('human') !== -1 || 
		CurrentFeats.known.indexOf("adaptable trait") !== -1||
		CurrentRace.variant.indexOf('mixed lineage') !== -1;
	},
	choices : [ 'Beginner’s Luck', 'Hearthkeeper', 'Intrepid', 'Irrepressible' , 'Juke', 'Well Traveled' ],
	'beginner’s luck' : {
		name : "Human (Beginner’s Luck)",
		description : "When you make an attack roll, saving throw, or ability check and the number on the die is greater than your character level, add +1 to the result."
	},
	'hearthkeeper' : {
		name : "Human (Hearthkeeper)",
		description : "When you make an ability check involving brewer's supplies or cook's utensils, you can roll 1d4 and add it to the result. In addition, the next time a creature takes a short rest after consuming food that you’ve prepared, it receives +1 healing per Hit Die spent to recover hit points."
	},
	'intrepid' : {
		name : "Human (Intrepid)",
		description : "You have advantage on saving throws to end ongoing conditions.",
		savetxt : { text : ["Adv. on saves to end conditions"] }
	},
	'irrepressible' : {
		name : "Human (Irrepressible)",
		description : "Choose an ability. You gain proficiency in saving throws using the chosen ability.",
		savetxt: { text : ["Irrepressible: Prof in one extra saving throw"] }
	},
	'juke' : {
		name : "Human (Juke)",
		description : "Once per long rest, when you are hit with an attack or when you fail an attack roll, you can use your reaction. The attacking creature must reroll the attack and use the new result.",
		usages : 1,
		recovery : "long rest",
		action : [
			["reaction", "Juke"]
		],
	},
	'well traveled' : {
		name : "Human (Well Traveled)",
		description : "You are proficient in one skill and one language of your choice. You can select this trait more than once.",
		skillstxt : "Choose any one skill",
		languageProfs : [1]
	}
};



/*
*
*
* SUBCLASSES
*
*/

AddSubClass("paladin", "oath of the ivory knight", {
	regExpSearch : /^(?=.*ivory)(?=.*knight).*$/i,
	subname : "Oath of the Ivory Knight",
	source : ["TPK", 21],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Ward of Fangs",
			source : [["TPK", 22]],
			minlevel : 3,
			description : "\n   " + "As a bonus action, you surround yourself with a radiant aura of divine fangs for 1 minute. If a creature ends their turn within 5 feet of you, you can choose to deal them 1d6 piercing damage. If this ability reduces a creature to zero hit points, you gain 5 temporary hit points + 1 per paladin level. Temporary hit points gained from this ability last until they're depleted or you finish a long rest.",
			action : ["bonus action", ""],
			spellcastingExtra : ["magic missile", "tasha’s hideous laughter", "gentle repose", "magic mouth", "hunger of hadar", "mass healing word", "aura of purity", "sickening radiance", "wall of stone", "holy weapon"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Blinding Smile",
			source : [["TPK", 22]],
			minlevel : 3,
			description : "\n   " + "As a bonus action, you create a flash of blinding radiant light. Each creature of your choice within 30 feet of you must succeed on a Dexterity saving throw or be blinded for one minute.",
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Pearly Aura",
			source : [["TPK", 22]],
			minlevel : 7,
			description :"\n   " +  "You and friendly creatures within 10 feet of you have resistance to bludgeoning, piercing and slashing damage from non-magical attacks.",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		},
		"subclassfeature15" : {
			name : "Jaws of Life",
			source : [["TPK", 22]],
			minlevel : 15,
			description : "\n   " + "Once per long rest, if an ally within 30 feet of you is reduced to zero hit points, as a reaction, you can move up to your speed without provoking opportunity attacks and use Lay on Hands on that ally.",
			action : ["reaction", ""],
			usages: 1,
			recovery : "long rest",

		},
		"subclassfeature20" : {
			name : "Perfect Smile",
			source : [["TPK", 22]],
			minlevel : 20,
			description : desc([
				"\n   " + "As a bonus action, you can gain the following benefits for 1 minute once per long rest",
				" \u2022 You gain a number of temporary hit points at the start of your turn equal to your paladin level plus your charisma modifier. These last until they're depleted or you finish a long rest.",
				" \u2022 Hostile creatures that end their turn within 30 feet of you must succeed on a Dexterity saving throw against your spell save DC or be blinded for 1 minute.",
				" \u2022 I assume the beast's HP and HD; I get mine back when I revert back",
				" \u2022 As a bonus action, you can use Lay on Hands with a range of 30 feet.",
				" \u2022 If you reduce a creature to zero hit points, your pool of healing regains a number of points equal to the creature’s challenge rating, rounded down. The total number of points in your pool of healing cannot exceed your paladin level x 5.",
			]),
			recovery : "long rest",
			usages : 1,
			action : ["bonus action", ""]
		}
	}
});

AddSubClass("warlock", "the lady of ivory", {
	regExpSearch : /^(?=.*lady)(?=.*ivory).*$/i,
	subname : "the Lady of Ivory",
	source : [["TPK", 23]],
	spellcastingExtra : ["ice knife", "tasha's hideous laughter", "cloud of daggers", "magic mouth", "revivify,", "speak with dead", "fabricate", "blight", "raise dead", "antilife shell"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrips",
			source : [["TPK", 23]],
			minlevel : 1,
			description : "\n   " + "I learn the Word of Radiance and Friends cantrip if I didn't already know it",
			spellcastingBonus : {
				name : "Bonus Cantrips (Ivory)",
				times : 2,
				spells : ["word of radiance", "friends"],
				selection : ["word of radiance", "friends"]
			}
		},
		"subclassfeature1.1" : {
			name : "Arcane Fangs",
			source : [["TPK", 23]],
			minlevel : 1,
			description : "\n   " + "When you cast a spell that deals fire, cold, thunder, lightening or acid damage, I can change the damage type to piercing."
		},
		"subclassfeature1.2" : {
			name : "Tooth Taker",
			source : [["TPK", 24]],
			minlevel : 1,
			description : "\n   " + "I can use the tooth of a creature of CR 1 or higher in place of any spell component up to 500 gold in value if they’re still alive or have been dead for less than a day. The tooth vanishes upon being used in this way, as it is transported to the Lady of Ivory’s collection, and the material cost of the spell is waived."
		},
		"subclassfeature6" : {
			name : "Many Mouths",
			source : [["TPK", 24]],
			minlevel : 6,
			description : "\n   " + "while holding the tooth of a creature, you can understand any of its spoken languages but do not gain the ability to speak them.",
		},
		"subclassfeature10" : {
			name : "Deep Roots",
			source : [["TPK", 24]],
			minlevel : 10,
			description : "\n   " + "I am immune to being knocked prone or pushed. In addition, I can use my movement action to move up to my speed by teleporting myself to a location I can see.",
		},
		"subclassfeature14" : {
			name : "Enamel Grafting",
			source : [["TPK", 24]],
			minlevel : 14,
			description : "\n   " + "I gain resistance to piercing, bludgeoning and slashing damage from nonmagical attacks.",
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		}
	}
});



/*
*
* THE ONE AND ONLY BACKGROUND!
*
*/

BackgroundList["leyfarer"] = {
	regExpSearch : /leyfarer/i,
	name : "Leyfarer",
	source : ["TPK", 15],
	gold : 15,
	equipleft : [
		["Leyfarer's Book", "", 5],
		["Leyfarer's Emblem", "", ""]
	],
	equipright : [
		["Travler's clothes", "", 3],
		["Ink and Ink Pen", "", 1],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Leyfarer's Journey",
	languageProfs : ["Language or Tool 1", "Language or Tool 2"],
	skillstxt : "Choose any two skills",
	eval : function () { AddString('Feat Note 1', 'Background bonus feat') }
};

BackgroundFeatureList["leyfarer's journey"] = {
	description : "Choose two skills and a total of two tool proficiencies or languages. \nChoose a feat. \nCreate two personality traits, one ideal, one bond, and one flaw.",
	source : ["TPK", 15],
};

GearList["leyfarer's book"] = {
	infoname : "Leyfarer's Book [priceless]",
	name : "Leyfarer's Book",
	source : [["TPK", 15]],
	amount : 1,
	weight : 1
};
GearList["leyfarer's emblem"] = {
	infoname : "Leyfarer's Emblem [fancy]",
	name : "Leyfarer's Emblem",
	source : [["TPK", 15]],
	amount : 1,
	weight : ""
};