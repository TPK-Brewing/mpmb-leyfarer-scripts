var iFileName = "The Leyfarer's Chronicle.js";
RequiredSheetVersion(13.1);

SourceList["TPK"] = {
	name : "The Leyfarer's Chronicle",
	abbreviation : "TPK",
	group : "TPK Brewing",
	url : "https://www.tpkbrewing.com/",
	date: "2024/06/10"
};

function cleanup_ancestries() {
	for (var feature in ClassList["tlc_ancestries"]["features"]) {
		var choice_list = GetFeatureChoice("classes", "tlc_ancestries", feature, true);
		if (choice_list.length !== 0) {
			for (var i = 0; i < choice_list.length; i++){ ClassFeatureOptions(["tlc_ancestries", feature, choice_list[i], true, true, true], "remove"); }
		}
	}  
}


/*
*
* ANCESTRIES
*
*/

// Sidekick class as a frame to hold ancestries NOT MEANT TO BE USED AS A CLASS!!!!
ClassList["tlc_ancestries"] = {
	defaultExcluded : true,
	prereqeval : global_TCoE_Sidekick_fn.prereqeval,
	regExpSearch : /^(?=.*TLC)(?=.*Ancestries).*$/i,
	name : "Leyfarer",
	source : [["T", 146]],
	primaryAbility : "Strength, Dexterity, or Constitution",
	prereqs : "Can't multiclass",
	improvements : levels.map(function (n) {
		return n < 4 ? 0 : n < 8 ? 1 : n < 12 ? 2 : n < 14 ? 3 : n < 16 ? 4 : n < 19 ? 5 : 6;
	}),
	die : CurrentVars.sidekickHD ? CurrentVars.sidekickHD[1] : 8,
	skillstxt : {
		primary : "Choose two from Acrobatics, Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival"
	},
	armorProfs : {
		primary : [true, true, true, false]
	},
	equipment : "",
	// subclasses : ["Basic Elf", "Brair Elf", "Moon Elf", "Shadow Elf", "Sun Elf", "Basic Catfolk", "Grimalkin Catfolk", "Maneko Catfolk", []],
	subclasses : ["", []],
	attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3],
	features : {
		"elf_ancestries" : {
			name : "(Ancestry Trait) Elf",
			source : [["TPK", 4]],
			description : "",
			extraname : "Elf Ancestry",
			extrachoices : ['Darkvision', 'Dreamless', 'Graceling', 'Fey Magic'],
			'darkvision' : {
				name : "Darkvision",
				description : " Within a range of 60 feet, you can perceive darkness and dim light as though it were one degree brighter. Colors appear more muted in darkness, and are difficult to distinguish.",
				vision : [["Darkvision", 60]]
			},
			'dreamless' : {
				name : "Dreamless",
				description : " You don’t need to sleep, and magic can’t put you to sleep. Instead, you enter a semiconscious trance for 4 hours each day. After resting in this way, you gain the same benefit that other creatures do from 8 hours of sleep.",
				vision : [["Dreamless", 0]],
			},
			'graceling' : {
				name : "Graceling",
				description : " Your walking speed is 35 instead of 30.",
				speed : { walk : "+5" }
			},
			'fey magic' : {
				name : "Fey Magic",
				description : " You know one cantrip of your choice. Your spellcasting ability for it is either Wisdom or Charisma, which you select when you choose this trait.",
				spellcastingBonus : [{
					spellcastingAbility : [5, 6],
					'class' : ['wizard','bard','cleric','sorcerer','druid', 'warlock'],
					name : "Elf (Fey Magic)",
					level : [0, 0],
					firstCol : "atwill",
				}]
			}
		},
		"elf_briar_ancestries" : {
			name : "(Origin Trait) Briar Elf",
			source : [["TPK", 4]],
			description : "",
			extraname : "Origin Trait",
			extrachoices : ['Armor of Thorns', 'Sweetbriar Perfume' ],
			'armor of thorns' : {
				name : "Armor of Thorns",
				description : " While you are grappled by a creature, it takes piercing damage equal to your Constitution modifier at the end of each of its turns."
			},
			'sweetbriar perfume' : {
				name : "Sweetbriar Perfume",
				description : " You have advantage on Charisma checks directed at non-hostile creatures."
			}
		},
		"elf_moon_ancestries" : {
			name : "(Origin Trait) Moon Elf",
			source : [["TPK", 4]],
			description : "",
			extraname : "Origin Trait",
			extrachoices : [ 'Dreamweaver', 'Twilight Child' ],
			'dreamweaver' : {
				name : "Dreamweaver",
				description : " You have a +1 bonus to your spell save DC when you cast illusion spells."
			},
			'twilight child' : {
				name : "Twilight Child",
				description : " While you are in direct moonlight, you have darkvision with a range of 60 feet. If you already have darkvision, your darkvision range is increased by 60 feet. In addition, in direct moonlight, you have advantage on Perception checks.",
				vision: [['(In Moonlight) Darkvision +60ft and Perception Check Adv.', 0]]
			}
		},
		"elf_shadow_ancestries" : {
			name : "(Origin Trait) Shadow Elf",
			source : [["TPK", 4]],
			description : "",
			extraname : "Origin Trait",
			extrachoices : [ 'Cloak of Silence', 'Eyes of Night' ],
			'cloak of silence' : {
				name : "Cloak of Silence",
				description : " You have proficiency in the Stealth skill. If you are already proficient in Stealth, you gain expertise in it instead, which means your proficiency bonus is doubled for any Stealth checks you make. Your Stealth skill cannot benefit from other features that also double your proficiency bonus.",
				skills : [
					["Stealth", "increment"],
				],
			},
			'eyes of night' : {
				name : "Eyes of Night",
				description : " Within 10 feet, you can see invisible creatures and objects as if they were visible. In addition, you have advantage on ability checks to determine whether something within 10 feet of you is an illusion.",
				vision: [
					['See Invisible', 10],
					['Perception Adv. on illusions', 10]
				]
			}
		},
		"elf_sun_ancestries" : {
			name : "(Origin Trait) Sun Elf",
			source : [["TPK", 5]],
			description : "",
			extraname : "Origin Trait",
			extrachoices : [ 'Dawn’s Embrace', 'Illumination' ],
			'dawn’s embrace' : {
				name : "Dawn’s Embrace",
				description : " While you are in direct sunlight, you have resistance to radiant damage. In addition, when you are in direct sunlight and one of your spells or abilities deals fire damage, you can choose to deal radiant damage instead.",
				dmgres : [
					["Radiant", "Radiant. (in sunlight)"],
				]

			},
			'illumination' : {
				name : "Illumination",
				description : " You learn the light cantrip. In addition, you have advantage on ability checks to detect traps and secret doors that are in bright light.",
				spellcastingBonus : [{
					spells : ["light"],
					name : "Sun Elf (Illumination)",
					selection : ["light"],
					firstCol : "atwill",
				}]
			}
		},
		"gnome_ancestries" : {
			name : "(Ancestry Trait) Gnome",
			source : [["TPK", 6]],
			description : "",
			extraname : "Gnome Ancestry",
			extrachoices : [ 'Adaptable Trait', 'Expert Researcher', 'Improvised Spell', 'Overcharge', 'Temporary Focus', 'Tinker' ],
			'adaptable trait' : {
				name : "Adaptable Trait",
				description : " You can choose one trait from any ancestry that does not require an origin. You gain the chosen trait and it does not count as one of your selectable traits.",
				bonusClassExtrachoices : [{
					"class" : "tlc_ancestries",
					"feature" : "mixed_lineages",
					"bonus" : 1
				}],
			},
			'expert researcher' : {
				name : "Expert Researcher",
				description : " Choose one skill or tool that you are proficient in. You gain expertise with that skill or tool, which means your proficiency bonus is doubled for any ability check you make with it. The skill or tool you choose must be one that isn't already benefiting from a feature that doubles your proficiency bonus.",
				skillstxt: "Expertise with any one skill that you are already proficient with."
			},
			'improvised spell' : {
				name : "Improvised Spell",
				description : " Using this trait, you can cast any wizard cantrip, and Intelligence is your spellcasting ability for it. You can use this trait a number of times per long rest equal to your proficiency bonus.",
				usages : "Proficiency bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest",
				spellcastingAbility : 4
			},
			'overcharge' : {
				name : "Overcharge",
				description : " While touching a magic item that holds charges, you can use an action to add one charge to it. If the item is already holding its maximum number of charges, nothing happens. You can use this trait a number of times per long rest equal to your proficiency bonus minus 1.",
				action : [ "action", "Overcharge"],
				usages : "Proficiency bonus per ", 
				usagescalc : "event.value = Math.max(1, What('Proficiency Bonus') - 1);",
				recovery : "long rest"
			},
			'temporary focus' : {
				name : "Temporary Focus",
				description : " When you finish a long rest, you can choose a weapon, shield, or other object. Until your next long rest, you can use the chosen item as a spellcasting focus while you carry it in one or more hands."
			},
			'tinker' : {
				name : "Tinker",
				description : " You are proficient in one tool or vehicle of your choice and either Arcana or History.",
				toolProfs : ["from Tinker", 1],
				skillstxt : "Choose Arcana or History"
			}
		},
		"catfolk_ancestries" : {
			name : "(Ancestry Trait) Catfolk",
			source : [["TPK", 12]],
			description : "",
			extraname : "Catfolk Ancestry",
			extrachoices : [ 'Catching Claws Medium', 'Catching Claws Small', 'Darkvision', 'Feline Finesse', 'Land on Your Feet', 'Premonition' ],
			'catching claws medium' : {
				name : "Catching Claws",
				prereqeval : function(v) { return tDoc.getField('Size Category').currentValueIndices !== 4; },
				description : " You can use your claws to make unarmed strikes. When you hit with them, you deal 1d6 + Strength (1d4 + Dexterity if small) modifier slashing damage  In addition, you have a climbing speed equal to your walking speed.",
				weaponsAdd : ["Catching Claws"],
				weaponOptions : [{
					regExpSearch : /^(?=.*catching)(?=.*claws).*$/i,
					name : "Catching Claws",
					baseWeapon : "unarmed strike",
					damage : [1, 6, "slashing"],
					ability : 1,
					range : "Melee",
					description : "Light",
					abilitytodamage : true,
					
				},],
				speed : {
					climb : { spd : "walk", enc : "walk" },
				}
			},
			'catching claws small' : {
				name : "Catching Claws",
				prereqeval : function(v) { return tDoc.getField('Size Category').currentValueIndices === 4; },
				description : " You can use your claws to make unarmed strikes. When you hit with them, you deal 1d6 + Strength (1d4 + Dexterity if small) modifier slashing damage  In addition, you have a climbing speed equal to your walking speed.",
				weaponsAdd : ["Catching Claws"],
				weaponOptions : [{
					regExpSearch : /^(?=.*cat)(?=.*claws).*$/i,
					name : "Catching Claws",
					baseWeapon : "unarmed strike",
					damage : [1, 4, "slashing"],
					ability : 2,
					range : "Melee",
					description : "Finesse, light",
					abilitytodamage : true,
				},],
				speed : {
					climb : { spd : "walk", enc : "walk" },
				}
			},
			'darkvision' : {
				name : "Darkvision",
				description : " Within a range of 60 feet, you can perceive darkness and dim light as though it were one degree brighter. Colors appear more muted in darkness, and are difficult to distinguish.",
				vision : [["Darkvision", 60]]
			},
			'feline finesse' : {
				name : "Feline Finesse",
				description : " You are proficient in your choice of two of the following skills: Acrobatics, Deception, Religion, and Stealth.",
				skillstxt : "Choose two from Acrobatics, Deception, Religion, and Stealth",
			},
			'land on your feet' : {
				name : "Land on Your Feet",
				description : " You have resistance to fall damage, and taking damage from falling does not knock you prone.",
				dmgres : ["Fall Dmg"],
				savetxt : { text : ["Falling can't knock you prone"] }
			},
			'premonition' : {
				name : "Premonition",
				description : " You have a +1 bonus when you roll initiative.",
				addMod : { type : "skill", field : "Init", mod : 1, text : "I have a +1 bonus on initiative rolls." }
			}
		},
		"catfolk_grimalkin_ancestries" : {
			name : "(Origin Trait) Grimalkin",
			source : [["TPK", 13]],
			description : "",
			extraname : "Origin Trait",
			extrachoices : [ 'Catwalk' ],
			'catwalk' : {
				name : "Catwalk",
				description : " As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. Once you use this trait, you can’t do so again until you finish a short or long rest.",
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
		},
		"catfolk_maneko_ancestries" : {
			name : "(Origin Trait) Maneko",
			source : [["TPK", 13]],
			description : "",
			extraname : "Origin Trait",
			extrachoices : [ 'Nine Lives' ],
			'nine lives' : {
				name : "Nine Lives",
				description : " You have a +1 bonus to death saving throws. In addition, when you receive massive damage, you are knocked unconscious instead of being instantly killed. If this happens nine times, something unexpected may happen.",
				savetxt : { text : ["+1 on Death Saving Throws"] }
			}
		},
		"lizardfolk_ancestries" : {
			name : "(Ancestry Trait) Lizardfolk",
			source : [["TPK", 14]],
			description : "",
			extraname : "Lizadfolk Ancestry",
			extrachoices : [ 'Camouflage', 'Sharp Teeth Medium', 'Sharp Teeth Small', 'Natural Armor', 'Reptilian Resourcefulness', 'Sticky Tongue' ],
			'camouflage' : {
				name : "Camouflage",
				description : " While you are unarmored or wearing light armor, whenever you roll a Dexterity (Stealth) check to hide, you can roll 1d4 and add it to the result."
			},
			'sharp teeth medium' : {
				name : "Sharp Teeth",
				prereqeval : function(v) { return tDoc.getField('Size Category').currentValueIndices !== 4; },
				description : " You can use your teeth to make unarmed strikes. When you hit with them, you deal 1d6 + your Strength (1d4 if small) modifier piercing damage. In addition, after you hit a creature with an attack roll using your teeth, you can attempt to grapple them in the same turn using a bonus action.",
				weaponsAdd : ["Sharp Teeth"],
				weaponOptions : {
					regExpSearch : /^(?=.*sharp)(?=.*teeth).*$/i,
					name : "Sharp Teeth",
					baseWeapon : "unarmed strike",
					damage : [1, 6, "piercing"],
					ability : 1,
					range : "Melee",
					description : "Light. After hit, can attempt to grapple as a bonus action",
					abilitytodamage : true,
				},
				action : [
					["bonus action", "(After hit) Teeth Grapple"]
				],
			},
			'sharp teeth small' : {
				name : "Sharp Teeth",
				prereqeval : function(v) { return tDoc.getField('Size Category').currentValueIndices === 4; },
				description : " You can use your teeth to make unarmed strikes. When you hit with them, you deal 1d6 + your Strength (1d4 if small) modifier piercing damage. In addition, after you hit a creature with an attack roll using your teeth, you can attempt to grapple them in the same turn using a bonus action.",
				weaponsAdd : ["Sharp Teeth"],
				weaponOptions : {
					regExpSearch : /^(?=.*sharp)(?=.*teeth).*$/i,
					name : "Sharp Teeth",
					baseWeapon : "unarmed strike",
					damage : [1, 4, "piercing"],
					ability : 1,
					range : "Melee",
					description : "Light. After hit, can attempt to grapple as a bonus action",
					abilitytodamage : true,
				},
				action : [
					["bonus action", "(After hit) Teeth Grapple"]
				],
			},
			'natural armor' : {
				name : "Natural Armor",
				description : " When you aren’t wearing armor, your base AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield’s benefits apply as normal while you use your natural armor.",
				armorOptions : {
					regExpSearch : /^(?=.*natural)(?=.*armor).*$/i,
					name : "Natural Armor",
					ac : 13,
				},
				armorAdd : "Natural Armor"
			},
			'reptilian resourcefulness' : {
				name : "Reptilian Resourcefulness",
				description : " You are proficient in your choice of two of the following skills: Athletics, Nature, Religion, and Survival.",
				skillstxt : "Choose two from Athletics, Nature, Religion, and Survival",
			},
			'sticky tongue' : {
				name : "Sticky Tongue",
				description : " As a bonus action, you can interact with a tiny object within 10 feet. For example, You could flip a lever, retrieve a torch, or pick up a coin.",
				action : [
					["bonus action", "Sticky Tongue"]
				],
			}
		},
		"lizardfolk_busaya_ancestries" : {
			name : "(Origin Trait) Busaya",
			source : [["TPK", 14]],
			description : "",
			extraname : "Origin Trait",
			extrachoices : [ 'Wetlander' ],
			'wetlander' : {
				name : "Wetlander",
				description : " You can hold your breath for up to 15 minutes at a time, and you have a swimming speed equal to your walking speed. If you are Small size, you can move your walking speed across the surface of a body of water before falling in.",
				speed : {
					swim : { spd : "walk", enc : 0 }
				}
			}
		},
		"lizardfolk_drakasi_ancestries" : {
			name : "(Origin Trait) Drakasi",
			source : [["TPK", 15]],
			description : "",
			extraname : "Origin Trait",
			extrachoices : [ 'Arboreal Acrobat' ],
			'arboreal acrobat' : {
				name : "Arboreal Acrobat",
				description : " You have a climbing speed of 20. While falling, use your action to slow descent to 60 feet until the end of your turn. Use your movement to go horizontally in space up to your walking speed. If you land before the turn ends, you take no falling damage.",
				speed : {
					climb : { spd : 20, enc : 0 }
				},
				action : [
					["action", "Arboreal Acrobat"]
				],
			}
		},
		"lizardfolk_voranos_ancestries" : {
			name : "(Origin Trait) Voranos",
			source : [["TPK", 15]],
			description : "",
			extraname : "Origin Trait",
			extrachoices : [ 'Desert Dweller' ],
			'desert dweller' : {
				name : "Desert Dweller",
				description : " You are resistant to fire damage. In addition, you have advantage on Constitution saving throws to avoid exhaustion due to heat.",
				dmgres : ["Fire"],
				savetxt : { text : ["Adv. against exhaust via heat"] }
			}
		},
		"orc_ancestries" : {
			name : "(Ancestry Trait) Orc",
			source : [["TPK", 9]],
			description : "",
			extraname : "Orc Ancestry",
			extrachoices : [ 'Hunting Companion', 'Bushcraft', 'Martial Training', 'Prowess Weapon' , 'Tenacious', 'Wanderer’s Endurance' ],
			'hunting companion' : {
				name : "Hunting Companion",
				description : " Choose a Beast (select Race on Companion Page) that has a challenge rating of 0. The beast obeys your commands as best as it can. With your companion, you have advantage on ability checks to forage for food. You can use an action to command your companion to interact with an object.",
				action : [
					["action", "Companion Interact"]
				],
			},
			'bushcraft' : {
				name : "Bushcraft",
				description : " You are proficient in your choice of two of the following skills: Animal Handling, Medicine, Nature, and Survival.",
				skillstxt : "Choose two from Animal Handling, Medicine, Nature, and Survival"
			},
			'martial training' : {
				name : "Martial Training",
				description : " You are proficient in two weapons of your choice.",
				weaponProfs : [false, false, ["Training 1", "Training 2"]]
			},
			'prowess weapon' : {
				name : "Prowess Weapon",
				description : " When you make a ranged weapon attack using a weapon with the heavy property, you can choose to use your Strength modifier instead of Dexterity for the attack and damage rolls.",
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
				description : " You have advantage on saving throws to avoid exhaustion.",
				savetxt : { text : ["Adv. to avoid exhaustion"] }
			},
			'tenacious' : {
				name : "Tenacious",
				description : " Your hit point maximum increases by 1, and whenever you gain a level, your hit point maximum increases by 1 additional point.",
				calcChanges : {
					hp : function (totalHD) {
						return [totalHD, '\n + ' + totalHD + ' \xD7 1 from the Tenacious Trait (' + (totalHD) + ')', true];
					}
				}
			}
		},
		"birdfolk_ancestries" : {
			name : "(Ancestry Trait) Birdfolk",
			source : [["TPK", 11]],
			description : "",
			extraname : "Birdfolk Ancestry",
			extrachoices : [ 'Avian Artistry', 'Darkvision', 'Extraordinary Eyesight', 'Flight' , 'Mimicry', 'Seizing Talons Medium', 'Seizing Talons Small' ],
			'avian artistry' : {
				name : "Avian Artistry",
				description : " You are proficient in your choice of two of the following skills: Athletics, Performance, Stealth, and Sleight of Hand.",
				skillstxt : "Choose two from Athletics, Performance, Stealth, and Sleight of Hand"
			},
			'darkvision' : {
				name : "Darkvision",
				description : " Within a range of 60 feet, you can perceive darkness and dim light as though it were one degree brighter. Colors appear more muted in darkness, and are difficult to distinguish.",
				vision : [["Darkvision", 60]]
			},
			'extraordinary eyesight' : {
				name : "Extraordinary Eyesight",
				description : " When you make a Wisdom (Perception) check that relies on sight, you can roll 1d4 and add it to the result. In addition, you have a +2 bonus to your Passive Perception",
				addMod : { type : "skill", field : "passive perception", mod : 2, text : "I have a +2 bonus to passive Wisdom (Perception)." }
			},
			'flight' : {
				name : "Flight",
				description : " Your wings grant you a flying speed equal to your walking speed. You can't use this flying speed if you're wearing medium or heavy armor.",
				speed : { fly : { spd : "walk", enc : 0 } }
			},
			'mimicry' : {
				name : "Mimicry",
				description : " When you make an ability check using Charisma to imitate sounds, any creature whose Insight skill modifier +10 is lower than your roll cannot identify it as an imitation.",
			},
			'seizing talons medium' : {
				name : "Seizing Talons",
				prereqeval : function(v) { return tDoc.getField('Size Category').currentValueIndices !== 4; },
				description : " You can use your claws to make unarmed strikes. When you hit with them, you deal 1d6 + your Strength modifier (1d4 + Dex if small) slashing damage. In addition, moving at least 15 feet before making an unarmed strike, the creature hit cannot make opportunity attacks against you until the end of your turn.",
				weaponsAdd : ["Seizing Talons"],
				weaponOptions : {
					regExpSearch : /^(?=.*seizing)(?=.*talons).*$/i,
					name : "Seizing Talons",
					baseWeapon : "unarmed strike",
					damage : [1, 6, "slashing"],
					ability : 1,
					range : "Melee",
					description : "Light. If moved 15 ft and hit, target cannot make opp. attack against me",
					abilitytodamage : true,
				},
			},
			'seizing talons small' : {
				name : "Seizing Talons",
				prereqeval : function(v) { return tDoc.getField('Size Category').currentValueIndices === 4; },
				description : " You can use your claws to make unarmed strikes. When you hit with them, you deal 1d6 + your Strength modifier (1d4 + Dex if small) slashing damage. In addition, moving at least 15 feet before making an unarmed strike, the creature hit cannot make opportunity attacks against you until the end of your turn.",
				weaponsAdd : ["Seizing Talons"],
				weaponOptions : {
					regExpSearch : /^(?=.*seizing)(?=.*talons).*$/i,
					name : "Seizing Talons",
					baseWeapon : "unarmed strike",
					damage : [1, 4, "slashing"],
					ability : 2,
					range : "Melee",
					description : "Finesse, light. If moved 15 ft and hit, target cannot make opp. attack against me",
					abilitytodamage : true,
				},
			}
		},
		"ratfolk_ancestries" : {
			name : "(Ancestry Trait) Ratfolk",
			source : [["TPK", 16]],
			description : "",
			extraname : "Ratfolk Ancestry",
			extrachoices : [ 'Blindsight', 'Charming Features', 'Cheek Pouches', 'Gnawing Teeth Medium', 'Gnawing Teeth Small', 'Murine Moxie', 'Swarm' ],
			'blindsight' : {
				name : "Blindsight",
				description : " Your keen senses of hearing and smell give you blindsight with a range of 30 feet. Within that range, you can effectively see anything that isn’t behind total cover, even if you’re blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.",
				vision : [
					["Blindsight", 30],
				],
			},
			'charming features' : {
				name : "Charming Features",
				description : " When you make a Charisma check, you can roll 1d4 and add it to the result. After you use this trait in an interaction with a creature, you can’t use it in subsequent interactions with the same creature until you finish a short or long rest."
			},
			'cheek pouches' : {
				name : "Cheek Pouches",
				description : " Your cheeks have pouches that you can use to store tiny objects equal to twice your proficiency bonus. While using half or less capacity, the items are hidden. While using more than half of your cheeks’ capacity, you have difficulty speaking and it is obvious to onlookers that your cheeks are full.",
				addMod : { type : "skill", field : "passive perception", mod : 2, text : "I have a +2 bonus to passive Wisdom (Perception)." }
			},
			'murine moxie' : {
				name : "Murine Moxie",
				description : " You are proficient in your choice of two of the following skills: Medicine, Perception, Sleight of Hand, and Survival.",
				skillstxt : "Choose two from Medicine, Perception, Sleight of Hand, and Survival"
			},
			'gnawing teeth medium' : {
				name : "Gnawing Teeth",
				prereqeval : function(v) { return tDoc.getField('Size Category').currentValueIndices !== 4; },
				description : " You can use your incisors to make unarmed strikes. When you hit with them, you deal 1d6 + your Strength modifier piercing damage (1d4 + Dexterity if Small.) In addition, you have a burrow speed of 10 feet.",
				weaponsAdd : ["Gnawing Teeth"],
				weaponOptions : {
					regExpSearch : /^(?=.*gnawing)(?=.*teeth).*$/i,
					name : "Gnawing Teeth",
					baseWeapon : "unarmed strike",
					damage : [1, 6, "piercing"],
					ability : 1,
					range : "Melee",
					description : "Light",
					abilitytodamage : true,
				},
				speed : { burrow : { spd : 10, enc : 0 } }
			},
			'gnawing teeth small' : {
				name : "Gnawing Teeth",
				prereqeval : function(v) { return tDoc.getField('Size Category').currentValueIndices === 4; },
				description : " You can use your incisors to make unarmed strikes. When you hit with them, you deal 1d6 + your Strength modifier piercing damage (1d4 + Dexterity if Small.) In addition, you have a burrow speed of 10 feet.",
				weaponsAdd : ["Gnawing Teeth"],
				weaponOptions : {
					regExpSearch : /^(?=.*gnawing)(?=.*teeth).*$/i,
					name : "Gnawing Teeth",
					baseWeapon : "unarmed strike",
					damage : [1, 4, "piercing"],
					ability : 2,
					range : "Melee",
					description : "Finesse, light",
					abilitytodamage : true,
				},
				speed : { burrow : { spd : 10, enc : 0 } }
			},
			'swarm' : {
				name : "Swarm",
				description : " You can move through the space of any creature that is of a size larger than yours. In addition, if your size is Small, you can end your movement in the same square as a Small companion. No more than two creatures can occupy the same square using this trait.",
			}
		},
		"human_ancestries" : {
			name : "(Ancestry Trait) Human",
			source : [["TPK", 8]],
			description : "",
			extraname : "Human Ancestry",
			extrachoices : [ 'Beginner’s Luck', 'Hearthkeeper', 'Intrepid', 'Irrepressible' , 'Juke', 'Well Traveled' ],
			'beginner’s luck' : {
				name : "Human (Beginner’s Luck)",
				description : " When you make an attack roll, saving throw, or ability check and the number on the die is greater than your character level, add +1 to the result."
			},
			'hearthkeeper' : {
				name : "Hearthkeeper",
				description : " When you make an ability check involving brewer's supplies or cook's utensils, you can roll 1d4 and add it to the result. In addition, the next time a creature takes a short rest after consuming food that you’ve prepared, it receives +1 healing per Hit Die spent to recover hit points."
			},
			'intrepid' : {
				name : "Intrepid",
				description : " You have advantage on saving throws to end ongoing conditions.",
				savetxt : { text : ["Adv. on saves to end conditions"] }
			},
			'irrepressible' : {
				name : "Irrepressible",
				description : " Choose an ability. You gain proficiency in saving throws using the chosen ability.",
				// savetxt: { text : ["Irrepressible: Prof in one extra saving throw"] }
				choices : ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"],
				eval : function() {
					var AEoptions = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];
					var attr_map =  {"Str" : "Strength", "Dex" : "Dexterity", "Con" : "Constitution", "Int" : "Intelligence", "Wis" : "Wisdom", "Cha" : "Charisma"};
					for (var save in CurrentProfs["save"]){
						if (AEoptions.indexOf(attr_map[save]) !== -1) { AEoptions.splice(AEoptions.indexOf(attr_map[save]), 1); }
					}
					var theChoice = AskUserOptions('Irrepressible Human Ancestry', 'The Irrepressible Ancestry offers a choice of an additional save proficiency. You can change this selection by unselecting the ancestry and re-selecting it.', AEoptions, 'radio', true);
					switch (theChoice) {
						case "Strength":
							SetProf("save", true, "Str", "Irrepressible")
							break;
						case "Dexterity":
							SetProf("save", true, "Dex", "Irrepressible")
							break;
						case "Constitution":
							SetProf("save", true, "Con", "Irrepressible")
							break;
						case "Intelligence":
							SetProf("save", true, "Int", "Irrepressible")
							break;
						case "Wisdom":
							SetProf("save", true, "Wis", "Irrepressible")
							break;
						case "Charisma":
							SetProf("save", true, "Cha", "Irrepressible")
							break;
					};
				},
				removeeval : function() {
					for (var save in CurrentProfs["save"]){
						if (CurrentProfs["save"][save].indexOf("Irrepressible") !== -1) {
							switch (save) {
								case "Str":
									SetProf("save", false, "Str", "Irrepressible")
									break;
								case "Dex":
									SetProf("save", false, "Dex", "Irrepressible")
									break;
								case "Con":
									SetProf("save", false, "Con", "Irrepressible")
									break;
								case "Int":
									SetProf("save", false, "Int", "Irrepressible")
									break;
								case "Wis":
									SetProf("save", false, "Wis", "Irrepressible")
									break;
								case "Cha":
									SetProf("save", false, "Cha", "Irrepressible")
									break;
							};
						}
					}
				},
			},
			'juke' : {
				name : "Juke",
				description : " Once per long rest, when you are hit with an attack or when you fail an attack roll, you can use your reaction. The attacking creature must reroll the attack and use the new result.",
				usages : 1,
				recovery : "long rest",
				action : [
					["reaction", "Juke"]
				],
			},
			'well traveled' : {
				name : "Well Traveled",
				description : " You are proficient in one skill and one language of your choice. You can select this trait more than once.",
				skillstxt : "Choose any one skill",
				languageProfs : [1]
			}
		},
		"snailfolk_ancestries" : {
			name : "(Ancestry Trait) Snailfolk",
			source : [["TPK", 17]],
			description : "",
			extraname : "Snailfolk Ancestry",
			extrachoices : [ 'Boneless', 'Molluscan Mastery', 'Mucus Coat', 'Quick Withdraw' , 'Slime Trail', 'Wall Crawler' ],
			'boneless' : {
				name : "Boneless",
				description : " You are resistant to nonmagical bludgeoning damage, and you have advantage on ability checks to escape being grappled or restrained.",
				dmgres : [
					["Bludgeoning", "Bludg. (nonmagical)"],
				],
				savetxt : { text : ["Adv. on saves to escape grapple/restrained"] } 
			},
			'molluscan mastery' : {
				name : "Molluscan Mastery",
				description : " Choose a tool proficiency.If you are already proficient in the chosen tool, you gain expertise in it instead, which means your proficiency bonus is doubled for any ability checks you make. You cannot benefit from other features that also double your proficiency bonus for the chosen tool.",
				toolProfs : ["from Molluscan Mastery", 1],
			},
			'mucus coat' : {
				name : "Mucus Coat",
				description : " You can disengage as a bonus action.",
				action : [
					["bonus action", "Disengage"]
				],
			},
			'quick withdraw' : {
				name : "Quick Withdraw",
				description : " When you take damage from a single source, you can use your reaction to withdraw into your shell. When you do, reduce the total damage by your proficiency bonus plus your constitution modifier.",
				action : [
					["reaction", "Quick Withdraw"]
				],
			},
			'slime trail' : {
				name : "Slime Trail",
				description : " Moving through nonmagical difficult terrain costs you no extra movement.",
			},
			'wall crawler' : {
				name : "Wall Crawler",
				description : " You have a climbing speed equal to your walking speed. In addition, you can move across vertical surfaces and upside down along ceilings without using your hands.",
				speed : {
					climb : { spd : "walk", enc : 0 },
				},
			}
		},
		"frogfolk_ancestries" : {
			name : "(Ancestry Trait) Frogfolk",
			source : [["TPK", 14]],
			description : "",
			extraname : "Frogfolk Ancestry",
			extrachoices : [ 'Amphibious', 'Dynamic Leap', 'Powerful Tongue' ],
			'amphibious' : {
				name : "Amphibious",
				description : " You can breathe air and water, and you have a swim speed equal to your walking speed.",
				speed : {
					swim : { spd : "walk", enc : 0 },
				},
			},
			'dynamic leap' : {
				name : "Dynamic Leap",
				description : " Your long jump distance is equal to your walking speed and your high jump distance is equal to half your walking speed, rounded down. This is true whether you have a running start or not.",
			},
			'powerful tongue' : {
				name : "Powerful Tongue",
				description : " Your tongue has a range of 10 feet, and when you hit with it, you deal 1d4 + your Str Mod bludgeoning damage. You can also use your tongue to interact with a tiny object within 10 feet, such as pressing a button, picking up a bottle, or snatching a falling document out of the air.",
				weaponsAdd : ["Powerful Tongue"],
				weaponOptions : {
					regExpSearch : /^(?=.*powerful)(?=.*tongue).*$/i,
					name : "Powerful Tongue",
					baseWeapon : "unarmed strike",
					damage : [1, 4, "bludgeoning"],
					ability : 1,
					range : "10 ft",
					description : "Can interact with tiny objects",
					abilitytodamage : true,
				},
			},
		},
		"frogfolk_ranga_ancestries" : {
			name : "(Origin Trait) Ranga",
			source : [["TPK", 15]],
			description : "",
			extraname : "Origin Trait",
			extrachoices : [ 'Poison Immunity', 'Secrete Toxin' ],
			'poison immunity' : {
				name : "Poison Immunity",
				description : " You are immune to poison damage and the poisoned condition.",
				savetxt : {
					immune : ["poison"],
				},
			},
			'secrete toxin' : {
				name : "Secrete Toxin",
				description : " Any creature that comes into direct contact with your skin must succeed on a Constitution saving throw (DC = 8 + Con Mod + Prof) or become poisoned until the end of its next turn. In addition, as a bonus action you can apply this poison to a piercing weapon, and it remains potent for one hour.",
				action : [
					["bonus action", "Secret Toxin"]
				],
			},
	
		},
		"frogfolk_wark_ancestries" : {
			name : "(Origin Trait) Wark",
			source : [["TPK", 15]],
			description : "",
			extraname : "Origin Trait",
			extrachoices : [ 'Deafening Croak', 'Wark Training' ],
			'deafening croak' : {
				name : "Deafening Croak",
				description : " One attack can be replaced a thunderous bellow that affects creatures in a 15-foot cone. Each creature in that area must make a Constitution saving throw (DC = 8 + Con Mod + Prof). On a failed save, the creature takes 1d6 thunder damage and is deafened for one minute. On a successful save, it takes half as much damage and is not deafened. This damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6). You can use this ability a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
				usages : "Proficiency bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest",
			},
			'wark training' : {
				name : "Wark Training",
				description : " You have proficiency with spears, whips, blowguns, nets, and light armor.",
				armorProfs : [
					[true, false, false, false],
				],
				weapons : [ 
					[false, false, ["spears", "whips", "blowguns", "nets"]], 
				],
			},
		},
		"kobold_ancestries" : {
			name : "(Ancestry Trait) Kobold",
			source : [["TPK", 14]],
			description : "",
			extraname : "Kobold Ancestry",
			extrachoices : [ 'Blindsight', 'Improvised Ingenuity', 'Tunnel Fighter', 'Underfoot' ],
			'blindsight' : {
				name : "Blindsight",
				description : " You have blindsight with a range of 30 feet.",
				vision : [
					["Blindsight", 30],
				],
			},
			'improvised ingenuity' : {
				name : "Improvised Ingenuity",
				description : " You don't need a tool kit to craft or make skill checks for tools you are proficient with as long as you have at least 10 minutes to spend cobbling together supplies.",
			},
			'tunnel fighter' : {
				name : "Tunnel Fighter",
				description : " When you make a ranged weapon attack using a thrown weapon, you don’t incur disadvantage by being within 5 feet of one or more enemies.",
			},
			'underfoot' : {
				name : "Underfoot",
				description : " You can disengage as a bonus action, and, on turns where you disengage, you can pass through enemy squares if they are at least one size larger than you.",
				action : [
					["bonus action", "Underfoot (Disengage)"]
				],
			},
		},
		"kobold_vagrant_ancestries" : {
			name : "(Origin Trait) Vagrant",
			source : [["TPK", 15]],
			description : "",
			extraname : "Origin Trait",
			extrachoices : [ 'Ambusher', 'Piercing Cry' ],
			'ambusher' : {
				name : "Ambusher",
				description : " When you and an ally are on opposite sides of a creature that is within 5 feet of both of you, you have advantage on attacks against that creature.",
			},
			'piercing cry' : {
				name : "Piercing Cry",
				description : " As a reaction, before rolling dex save, you and your allies within 10 feet add 1d4 to save. You can use this ability a number of times equal to your proficiency bonus, regain on short rest.",
				usages : "Proficiency bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "short rest",
				action : [
					["reaction", "Piercing Cry"]
				],
			},
	
		},
		"kobold_sovereign_ancestries" : {
			name : "(Origin Trait) Sovereign",
			source : [["TPK", 15]],
			description : "",
			extraname : "Sovereigns Gift",
			extrachoices : [ 'Draconic Aegis', 'Dragons Breath', 'Sovereigns Gift' ],
			'draconic aegis' : {
				name : "Draconic Aegis",
				description : " You are resistant to the type of damage associated with your draconic patron. In addition, you may use Constitution instead of Dexterity to determine your AC bonus, following any limitations for the type of armor.",
				eval : function() {
					var AEoptions = ["Cold", "Fire", "Force", "Lightning", "Psychic", "Radiant", "Thunder"];
					var theChoice = AskUserOptions('Draconic Aegis', 'The Draconic Aegis Ancestry offers a choice of a damage resistance. You can change this selection by unselecting the ancestry and re-selecting it.', AEoptions, 'radio', true);
					switch (theChoice) {
						case "Cold":
							SetProf("resistance", true, 'cold', "Draconic Aegis");
							break;
						case "Fire":
							SetProf("resistance", true, 'fire', "Draconic Aegis")
							break;
						case "Force":
							SetProf("resistance", true, 'force', "Draconic Aegis")
							break;
						case "Lightning":
							SetProf("resistance", true, 'lightning', "Draconic Aegis")
							break;
						case "Psychic":
							SetProf("resistance", true, 'psychic', "Draconic Aegis")
							break;
						case "Radiant":
								SetProf("resistance", true, 'radiant', "Draconic Aegis")
								break;
						case "Thunder":
							SetProf("resistance", true, 'thunder', "Draconic Aegis")
							break;
					};
				},
				armorOptions : [
				{
					regExpSearch : /^(?=.*draconic)(?=.*aegis)(?=.*unarmored).*$/i,
					name : "Draconic Aegis Unarmored (Con)",
					source : [["TPK", 12]],
					ac : "10+Con",
					dex : -10,
				},
				{
					regExpSearch : /^(?=.*draconic)(?=.*aegis)(?=.*mage).*$/i,
					name : "Draconic Aegis Mage armor (Con)",
					source : [["TPK", 12]],
					ac : "13+Con",
					list : "magic",
					affectsWildShape : true,
					dex : -10,
				},
				{
					regExpSearch : /^(?=.*draconic)(?=.*aegis)(?=.*padded).*$/i,
					name : "Draconic Aegis Padded (Con)",
					source : [["TPK", 12]],
					type : "light",
					ac : "11+Con",
					stealthdis : true,
					weight : 8,
					strReq : 0,
					dex : -10,
					invName : "Draconic Aegis Padded armor"
				},
				{
					regExpSearch : /^(?=.*draconic)(?=.*aegis)(?=.*leather).*$/i,
					name : "Draconic Aegis Leather (Con)",
					source : [["TPK", 12]],
					type : "light",
					ac : "11+Con",
					dex : -10,
					weight : 10,
					invName : "Leather armor"
				},
				{
					regExpSearch : /^(?=.*draconic)(?=.*aegis)(?=.*studded).*$/i,
					name : "Draconic Aegis Studded leather (Con)",
					source : [["TPK", 12]],
					type : "light",
					ac : "12+Con",
					dex : -10,
					weight : 13,
					invName : "Studded leather armor"
				},
				{
					regExpSearch : /^(?=.*draconic)(?=.*aegis)(?=.*hide).*$/i,
					name : "Draconic Aegis Hide (Con)",
					source : [["TPK", 12]],
					type : "medium",
					ac : "12+min(oCon|2)",
					weight : 12,
					dex : -10,
					invName : "Hide armor"
				},
				{
					regExpSearch : /^(?=.*draconic)(?=.*aegis)(?=.*chain).*$/i,
					name : "Draconic Aegis Chain shirt (Con)",
					source : [["TPK", 12]],
					type : "medium",
					ac : "13+min(oCon|2)",
					dex : -10,
					weight : 20
				},
				{
					regExpSearch : /^(?=.*draconic)(?=.*aegis)(?=.*scale).*$/i,
					name : "Draconic Aegis Scale mail (Con)",
					source : [["TPK", 12]],
					type : "medium",
					ac : "14+min(oCon|2)",
					dex : -10,
					stealthdis : true,
					weight : 45
				},
				{
					regExpSearch : /^(?=.*draconic)(?=.*aegis)(?=.*breastplate).*$/i,
					name : "Draconic Aegis Breastplate (Con)",
					source : [["TPK", 12]],
					type : "medium",
					ac : "14+min(oCon|2)",
					dex : -10,
					weight : 20
				},
				{
					regExpSearch : /^(?=.*draconic)(?=.*aegis)(?=.*half).*$/i,
					name : "Draconic Aegis Half plate (Con)",
					source : [["TPK", 12]],
					type : "medium",
					ac : "15+min(oCon|2)",
					stealthdis : true,
					weight : 40,
					dex : -10,
					invName : "Half plate armor"
				},
				],
			},
			'dragons breath' : {
				name : "Dragons Breath",
				description : " Replace one of your attacks with a breath weapon. Creatures save in a 30-foot line save against your Consititution (8 + Con Mod + Prof). Targets take 1d10 damage, save halves. Increases by 1d10 at levels 5, 11, and 17.",
				usages : "Proficiency bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest",
				weaponOptions : [{
					regExpSearch : /^(?=.*dragons)(?=.*breath).*$/i,
					name : "Dragons Breath weapon",
					source : [["TPK", 12]],
					ability : 3,
					type : "Natural",
					damage : [1, 10, "fire"],
					range : "30-ft line",
					description : "Hits all in area; Dex save, success - half damage",
					abilitytodamage : false,
					dc : true,
					kbBreathWeapon : true,
					selectNow : true
				}],
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if (v.theWea.kbBreathWeapon) {
								fields.Damage_Die = (CurrentRace.level < 6 ? 2 : CurrentRace.level < 11 ? 3 : CurrentRace.level < 16 ? 4 : 5) + 'd10';
								var AEoptions = ["Cold", "Fire", "Force", "Lightning", "Psychic", "Radiant", "Thunder"];
								var theChoice = AskUserOptions('Dragons Breath', 'The Dragons Breath Ancestry offers a choice of a breath weapon damage. You can change this selection by unselecting the ancestry and re-selecting it.', AEoptions, 'radio', true);
								switch (theChoice) {
									case "Cold":
										fields.Damage_Type = 'cold';
										break;
									case "Fire":
										fields.Damage_Type = 'fire';
										break;
									case "Force":
										fields.Damage_Type = 'force';
										break;
									case "Lightning":
										fields.Damage_Type = 'lightning';
										break;
									case "Psychic":
										fields.Damage_Type = 'psychic';
										fields.Description = fields.Description.replace(/Dex save/i, 'Wis save');
										break;
									case "Radiant":
										fields.Damage_Type = 'radiant';
										break;
									case "Thunder":
										fields.Damage_Type = 'thunder';
										break;
								};
							};
						},
						"",
						1
					]
				},
			},
			'sovereigns gift' : {
				name : "Sovereigns Gift",
				description : " You gain a draconic lineage trait determined by your draconic patron.",
				bonusClassExtrachoices : [{
					"class" : "tlc_ancestries",
					"feature" : "sovereigns_gift_ancestries",
					"bonus" : 1
				}],
			},
		},
		"sovereigns_gift_ancestries" : {
			name : "(Origin Trait) Sovereign Gift",
			source : [["TPK", 15]],
			description : "",
			extraname : "Origin Trait",
			extrachoices : [ 'Sovereigns Gift of the cindergale', 'Sovereigns Gift of the Levintide', 'Sovereigns Gift of the Mindsire', 'Sovereigns Gift of the Mooneater', 'Sovereigns Gift of the Mourningstar', 'Sovereigns Gift of the Neverbeast', 'Sovereigns Gift of the Windrose' ],
			'sovereigns gift of the cindergale' : {
				name : "Sovereigns Gift of the Cindergale",
				source : [["TPK", 19]],
				description : " When your spells or abilities deal fire damage to a creature or object that has fire resistance, the amount of damage is not reduced. When your spells or abilities deal fire damage to a creature or object that is immune to fire, it is dealt damage as though it was resistant to fire instead."
			},
			'sovereigns gift of the levintide' : {
				name : "Sovereigns Gift of the Levintide",
				source : [["TPK", 19]],
				description : " When you deal lightning or thunder damage, you can use this trait to reroll a number of damage dice up to your Constitution modifier. You must use the new result. You can use this ability a number of times per long rest equal to your proficiency bonus.",
				usages : "Proficiency bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest",
			},
			'sovereigns gift of the mindsire' : {
				name : "Sovereigns Gift of the Mindsire",
				source : [["TPK", 19]],
				description : " You gain a number of charges equal to your proficiency bonus minus 1. As an action, spend any number of charges to gain a spell slot. The level of this spell slot is equal to the number of charges spent. When you take a long rest, you regain your spent charges and lose any spell slots created using this trait.",
				action : [ "action", "Gift of the Mindsire"],
				usages : "Proficiency bonus per ", 
				usagescalc : "event.value = Math.max(1, What('Proficiency Bonus') - 1);",
				recovery : "long rest"
			},
			'sovereigns gift of the mooneater' : {
				name : "Sovereigns Gift of the Mooneater",
				source : [["TPK", 20]],
				description : " You have the ability to communicate telepathically with creatures that can breathe underwater. In addition, when you roll a 1 on a damage die for a spell or ability that deals cold damage, you can reroll the die. You must use the new roll."
			},
			'sovereigns gift of the mourningstar' : {
				name : "Sovereigns Gift of the Mourningstar",
				source : [["TPK", 20]],
				description : " You can maintain concentration on two spells at the same time, provided that at least one is a divination spell. If you lose concentration for any reason, including failing a concentration check or becoming incapacitated, you lose concentration on both spells."
			},
			'sovereigns gift of the neverbeast' : {
				name : "Sovereigns Gift of the Neverbeast",
				source : [["TPK", 20]],
				description : " Spells and abilities that affect monstrosities also affect you. In addition, your spells and abilities that reference beasts also include monstrosities with an Intelligence score of 4 or less and monstrosities that don’t comprehend any languages.",
				savetxt : {
					text : ["Affected by Monstrosites spells/abilites"]
				},
			},
			'sovereigns gift of the windrose' : {
				name : "Sovereigns Gift of the Windrose",
				source : [["TPK", 20]],
				description : " While singing, you have advantage on checks made to navigate through wilderness and to detect the presence of secret doors."
			},

		},
		"mixed_lineages" : {
			name : "Mixed Lineage",
			source : [["TPK", 20]],
			description : "",
			extraname : "Mixed Lineage",
			extrachoices : ["Elf", "Gnome", "Human", "Orc", "Birdfolk", "Catfolk", "Lizardfolk", "Ratfolk", "Snailfolk", "Frogfolk"],
			'elf' : {
				name : "Mixed Lineage - Elf",
				bonusClassExtrachoices : [{
					"class" : "tlc_ancestries",
					"feature" : "elf_ancestries",
					"bonus" : 1
				}],
			},
			'gnome' : {
				name : "Mixed Lineage - Gnome",
				bonusClassExtrachoices : [{
					"class" : "tlc_ancestries",
					"feature" : "gnome_ancestries",
					"bonus" : 1
				}],
			},
			'human' : {
				name : "Mixed Lineage - Human",
				bonusClassExtrachoices : [{
					"class" : "tlc_ancestries",
					"feature" : "human_ancestries",
					"bonus" : 1
				}],
			},
			'orc' : {
				name : "Mixed Lineage - Orc",
				bonusClassExtrachoices : [{
					"class" : "tlc_ancestries",
					"feature" : "orc_ancestries",
					"bonus" : 1
				}],
			},
			'birdfolk' : {
				name : "Mixed Lineage - Birdfolk",
				bonusClassExtrachoices : [{
					"class" : "tlc_ancestries",
					"feature" : "birdfolk_ancestries",
					"bonus" : 1
				}],
			},
			'catfolk' : {
				name : "Mixed Lineage - Catfolk",
				bonusClassExtrachoices : [{
					"class" : "tlc_ancestries",
					"feature" : "catfolk_ancestries",
					"bonus" : 1
				}],
			},
			'lizardfolk' : {
				name : "Mixed Lineage - Lizardfolk",
				bonusClassExtrachoices : [{
					"class" : "tlc_ancestries",
					"feature" : "lizardfolk_ancestries",
					"bonus" : 1
				}],
			},
			'ratfolk' : {
				name : "Mixed Lineage - Ratfolk",
				bonusClassExtrachoices : [{
					"class" : "tlc_ancestries",
					"feature" : "ratfolk_ancestries",
					"bonus" : 1
				}],
			},
			'snailfolk' : {
				name : "Mixed Lineage - Snailfolk",
				bonusClassExtrachoices : [{
					"class" : "tlc_ancestries",
					"feature" : "snailfolk_ancestries",
					"bonus" : 1
				}],
			},
			'frogfolk' : {
				name : "Mixed Lineage - Frogfolk",
				bonusClassExtrachoices : [{
					"class" : "tlc_ancestries",
					"feature" : "frogfolk_ancestries",
					"bonus" : 1
				}],
			},
			'kobold' : {
				name : "Mixed Lineage - Kobold",
				bonusClassExtrachoices : [{
					"class" : "tlc_ancestries",
					"feature" : "kobold_ancestries",
					"bonus" : 1
				}],
			},
		},
		"exotic_lineages" : {
			name : "(Lineage Trait) Exotic Lineage",
			source : [["TPK", 18]],
			description : "",
			extraname : "Exotic Lineage",
			extrachoices : [ 'Blessed Birth', 'Cursed Birth', 'Gift of the Cindergale', 'Gift of the Levintide', 'Gift of the Mindsire', 'Gift of the Mooneater', 'Gift of the Mourningstar', 'Gift of the Neverbeast', 'Gift of the Windrose',
					'Aspect of the Buried One', 'Aspect of the Burning One', 'Aspect of the Caged One', 'Aspect of the Sleeping One', 'Aspect of the Wandering One',
					'Effortless Enchantment', 'Guarded Mind', 'Hybrid Flora', 'Unwavering Focus', 'Weald Walker',],
			'blessed birth' : {
				name : "Blessed Birth",
				source : [["TPK", 18]],
				description : " You gain a fate die. When you make a roll using a d20, you can choose to expend your fate die to replace the number on the die with 10. You regain expended fate dice on a long rest. In addition, you can cast Bless once per long rest, using Charisma as your spellcasting ability.",
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
				name : "Cursed Birth",
				source : [["TPK", 18]],
				description : " You gain a fate die. When you make a roll using a d20, you can choose to expend your fate die to replace the number on the die with 10. You regain expended fate dice on a long rest. In addition, you can cast Bane once per long rest, using Charisma as your spellcasting ability.",
				usages : 1,
				recovery : "long rest",
				spellcastingBonus : [{
					spells : ["bane"],
					name : "Lineage (Cursed Birth)",
					selection : ["bane"],
					times : 1,
					spellcastingAbility : 6
				}]
			},
			'gift of the cindergale' : {
				name : "Gift of the Cindergale",
				source : [["TPK", 19]],
				description : " When your spells or abilities deal fire damage to a creature or object that has fire resistance, the amount of damage is not reduced. When your spells or abilities deal fire damage to a creature or object that is immune to fire, it is dealt damage as though it was resistant to fire instead."
			},
			'gift of the levintide' : {
				name : "Gift of the Levintide",
				source : [["TPK", 19]],
				description : " When you deal lightning or thunder damage, you can use this trait to reroll a number of damage dice up to your Constitution modifier. You must use the new result. You can use this ability a number of times per long rest equal to your proficiency bonus.",
				usages : "Proficiency bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest",
			},
			'gift of the mindsire' : {
				name : "Gift of the Mindsire",
				source : [["TPK", 19]],
				description : " You gain a number of charges equal to your proficiency bonus minus 1. As an action, spend any number of charges to gain a spell slot. The level of this spell slot is equal to the number of charges spent. When you take a long rest, you regain your spent charges and lose any spell slots created using this trait.",
				action : [ "action", "Gift of the Mindsire"],
				usages : "Proficiency bonus per ", 
				usagescalc : "event.value = Math.max(1, What('Proficiency Bonus') - 1);",
				recovery : "long rest"
			},
			'gift of the mooneater' : {
				name : "Gift of the Mooneater",
				source : [["TPK", 20]],
				description : " You have the ability to communicate telepathically with creatures that can breathe underwater. In addition, when you roll a 1 on a damage die for a spell or ability that deals cold damage, you can reroll the die. You must use the new roll."
			},
			'gift of the mourningstar' : {
				name : "Gift of the Mourningstar",
				source : [["TPK", 20]],
				description : " You can maintain concentration on two spells at the same time, provided that at least one is a divination spell. If you lose concentration for any reason, including failing a concentration check or becoming incapacitated, you lose concentration on both spells."
			},
			'gift of the neverbeast' : {
				name : "Gift of the Neverbeast",
				source : [["TPK", 20]],
				description : " Spells and abilities that affect monstrosities also affect you. In addition, your spells and abilities that reference beasts also include monstrosities with an Intelligence score of 4 or less and monstrosities that don’t comprehend any languages.",
				savetxt : {
					text : ["Affected by Monstrosites spells/abilites"]
				},
			},
			'gift of the windrose' : {
				name : "Gift of the Windrose",
				source : [["TPK", 20]],
				description : " While singing, you have advantage on checks made to navigate through wilderness and to detect the presence of secret doors."
			},
			'aspect of the buried one' : {
				name : "Aspect of the Buried One",
				source : [["TPK", 19]],
				description : " Your fingertips and other extremities blacken, as if perpetually covered in charcoal. You can cast spells without material components, unless a material component is consumed by the spell.",
			},
			'aspect of the burning one' :{
				name : "Aspect of the Burning One",
				source : [["TPK", 19]],
				description : " Your eyes are the color of fire, with red-orange sclera and yellow irises. When you deal bludgeoning, piercing, or slashing damage using a weapon attack, you can instead choose to deal fire damage.",
				calcChanges : {
					atkAdd : [
						function (fields, v) {
							if ((/piercing|bludgeoning|slashing/i).test(fields.Damage_Type)){
								fields.Description += (fields.Description ? '; ' : '') + 'Can deal Fire damage instead';
							};
						},
						"I can use fire damage instead of piercing, bludgeoning, or slashing."
					]
				}
			},
			'aspect of the caged one' : {
				name : "Aspect of the Caged One",
				source : [["TPK", 19]],
				description : " Scar-like spiral patterns cover your skin. When one of your attacks deals damage to a creature, reduce the target’s temporary hit points to zero before calculating damage. You can use this ability a number of times per long rest equal to your proficiency bonus.",
				usages : "Proficiency bonus per ",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest",
			},
			'aspect of the sleeping one' : {
				name : "Aspect of the Sleeping One",
				source : [["TPK", 19]],
				description : " Flower buds grow in your hair. After you take a short rest, you regain one expended spell slot of your choice. The level of this spell slot must be less than or equal to your proficiency bonus.",
			},
			'aspect of the wandering one' : {
				name : "Aspect of the Wandering One",
				source : [["TPK", 19]],
				description : " After you take a short rest, you can change your appearance/voice. You determine the specifics of the changes. You can adjust height/weight and change size between Medium/Small. You can as another ancestry. It must be an individual you have seen and you cannot change your pupil shape.",
			},
			'effortless enchantment' : {
				name : "Effortless Enchantment",
				source : [["TPK", 20]],
				description : " You can maintain concentration on two spells at once, provided that at least one is an enchantment spell. If you lose concentration for any reason, including failing a concentration check or becoming incapacitated, you lose concentration on both spells.",
			},
			'guarded mind' : {
				name : "Guarded Mind",
				source : [["TPK", 20]],
				description : " You have advantage on saving throws against charm, memory loss, and other mind-altering effects.",
				savetxt : { text : ["Adv. against charm, mem lost, mind effects"] }
			},
			'hybrid flora' : {
				name : "Hybrid Flora",
				source : [["TPK", 21]],
				description : " Your spells and abilities that refer to beasts also refer to plants.",
			},
			'unwavering focus' : {
				name : "Unwavering Focus",
				source : [["TPK", 21]],
				description : " While you aren’t maintaining concentration on any spells, your spell attack bonus and spell save DC are both increased by half of your proficiency bonus, rounded down. [Not calulated in sheet]",
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
				name : "Weald Walker",
				source : [["TPK", 21]],
				description : " In forested areas you are unaffected by difficult terrain due to plants, and you have advantage on saving throws and ability checks to avoid or escape being grappled by plants.",
				savetxt : { text : ["Adv. against grapple from plants"] }
			}
		},

		/* Background Features */
		"explorer_ranks" : {
			name : "Explorer Ranks",
			source : [["TPK", 26]],
			description : "",
			extraname : "Explorer Ranks",
			extrachoices : [ 'Adept', 'Mentor'],
			'adept' : {
				name : "Adept",
				skills : ["Survival"],
			},
			'mentor' : {
				name : "Mentor",
				skills : ["Survival"],
				spellcastingBonus : [{
					spells : ["comprehend languages"],
					name : "Explorer (Mentor)",
					selection : ["comprehend languages"],
					spellcastingAbility : 4,
				}],
			},

		},
		"naturalist_ranks" : {
			name : "Naturalist Ranks",
			source : [["TPK", 26]],
			description : "",
			extraname : "Naturalist Ranks",
			extrachoices : [ 'Adept', 'Mentor'],
			'adept' : {
				name : "Adept",
				skills : ["Nature"],
			},
			'mentor' : {
				name : "Mentor",
				skills : ["Nature"],
				spellcastingBonus : [{
					spells : ["detect poison and disease"],
					name : "Naturalist (Mentor)",
					selection : ["detect poison and disease"],
					spellcastingAbility : 4,
				}],
			},
		},
		"scholar_ranks" : {
			name : "Scholar Ranks",
			source : [["TPK", 26]],
			description : "",
			extraname : "Scholar Ranks",
			extrachoices : [ 'Adept', 'Mentor'],
			'adept' : {
				name : "Adept",
				skills : ["History"],
			},
			'mentor' : {
				name : "Mentor",
				skills : ["History"],
				spellcastingBonus : [{
					spells : ["identify"],
					name : "Scholar (Mentor)",
					selection : ["identify"],
					spellcastingAbility : 4,
				}],
			},
		},
	},
}


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
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Elf",
		"   - (Lineage Trait) Lineage"
	]),
	
	removeeval : function () { cleanup_ancestries(); },
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "elf_ancestries",
		"bonus" : 3
	}],
	
};

AddRacialVariant("elf (tpk)","briar", {
	regExpSearch : /^(?=.*briar).*$/i,
	name : "Brair elf",
    sortname : "Elf, Briar",
	source : [["TPK", 4]],
	plural : "Briar elves",
	trait : "Briar Elf (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
        "Dreamtouched. Spells and abilities that affect Fey also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Elf",
		"   - (Origin Trait) Briar Elf",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "elf_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "elf_briar_ancestries",
		"bonus" : 1
	}],
});

AddRacialVariant("elf (tpk)","moon", {
	regExpSearch : /^(?=.*moon).*$/i,
	name : "Moon elf",
    sortname : "Elf, Moon",
	source : [["TPK", 4]],
	plural : "Moon elves",
	trait : "Moon Elf (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
        "Dreamtouched. Spells and abilities that affect Fey also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Elf",
		"   - (Origin Trait) Moon Elf",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "elf_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "elf_moon_ancestries",
		"bonus" : 1
	}],
});

AddRacialVariant("elf (tpk)", "shadow",  {
	regExpSearch : /^(?=.*shadow).*$/i,
	name : "Shadow elf",
    sortname : "Elf, Shadow",
	source : [["TPK", 4]],
	plural : "Shadow elves",
	trait : "Shadow Elf (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
        "Dreamtouched. Spells and abilities that affect Fey also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Elf",
		"   - (Origin Trait) Shadow Elf",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "elf_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "elf_shadow_ancestries",
		"bonus" : 1
	}],
});

AddRacialVariant("elf (tpk)", "sun", {
	regExpSearch : /^(?=.*sun).*$/i,
	name : "Sun elf",
    sortname : "Elf, Sun",
	source : [["TPK", 4]],
	plural : "Sun elves",
	trait : "Sun Elf (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
        "Dreamtouched. Spells and abilities that affect Fey also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Elf",
		"   - (Origin Trait) Sun Elf",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "elf_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "elf_sun_ancestries",
		"bonus" : 1
	}],
});

AddRacialVariant("elf (tpk)", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Elven Lineage",
	source : [["TPK", 14]],
	plural : "Mixed Lineage",
	trait : "Mixed Elven Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
        "Dreamtouched. Spells and abilities that affect Fey also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Elf",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "elf_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "mixed_lineages" ,
		"bonus" : 1
	}],
});

AddRacialVariant("elf (tpk)", "exotic lineage", {
	regExpSearch : /exotic/i,
	name : "Exotic Elven Lineage",
	source : [["TPK", 14]],
	plural : "Exotic Lineage",
	trait : "Mixed Elven Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
        "Dreamtouched. Spells and abilities that affect Fey also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Elf",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from an exotic lineage",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "elf_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "exotic_lineages" ,
		"bonus" : 1
	}],
});

//GNOMES

RaceList["gnome (tpk)"] = {
	regExpSearch : /^(?=.*gnome)(?=.*\(tpk\)).*$/i,
	name : "Gnome",
    sortname : "(TPK) Gnome",
	source : [["TPK", 6]],
	plural : "Gnomes",
	size : [4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Nomic"],
	scorestxt : "+2/+1 to two ability scores or +1/+1/+1 to three ability scores of my choice",

	trait : "Gnome (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
			"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
			"   Available Trait Options:",
			"   - (Ancestry Trait) Gnome",
			"   - (Lineage Trait) Lineage",
	]),
	
	removeeval : function () { cleanup_ancestries(); },
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "gnome_ancestries",
		"bonus" : 3
	}],
};

AddRacialVariant("gnome (tpk)", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Gnomish Lineage",
	source : [["TPK", 6]],
	plural : "Mixed Lineage",
	trait : "Mixed Gnomish Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Gnome",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "gnome_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "mixed_lineages" ,
		"bonus" : 1
	}],
});

AddRacialVariant("gnome (tpk)", "exotic lineage", {
	regExpSearch : /exotic/i,
	name : "Exotic Gnomish Lineage",
	source : [["TPK", 6]],
	plural : "Exotic Lineage",
	trait : "Mixed Gnomish Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Gnome",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from an exotic lineage",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "gnome_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "exotic_lineages" ,
		"bonus" : 1
	}],
});

//CATFOLK

RaceList["catfolk"] = {
	regExpSearch : /^(?=.*catfolk).*$/i,
	name : "Catfolk",
    sortname : "(TPK) Catfolk",
	source : [["TPK", 12]],
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
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Catfolk",
		"   - (Lineage Trait) Lineage",
	]),
	
	removeeval : function () { cleanup_ancestries(); },
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "catfolk_ancestries",
		"bonus" : 3
	}],
};

AddRacialVariant("catfolk", "grimalkin", {
	regExpSearch : /^(?=.*grimalkin).*$/i,
	name : "Grimalkin Catfolk",
    sortname : "Catfolk, Grimalkin",
	source : [["TPK", 12]],
	plural : "Grimalkins",
	trait : "Grimalkin Catfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Catfolk",
		"   - (Origin Trait) Grimalkin Catfolk",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "catfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "catfolk_grimalkin_ancestries",
		"bonus" : 1
	}],
});

AddRacialVariant("catfolk", "maneko", {
	regExpSearch : /^(?=.*maneko).*$/i,
	name : "Maneko Catfolk",
    sortname : "Catfolk, Maneko",
	source : [["TPK", 12]],
	plural : "Manekos",
	trait : "Maneko Catfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Catfolk",
		"   - (Origin Trait) Maneko Catfolk",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "catfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "catfolk_maneko_ancestries",
		"bonus" : 1
	}],
});

AddRacialVariant("catfolk", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Catfolk Lineage",
	source : [["TPK", 12]],
	plural : "Mixed Lineage",
	trait : "Mixed Catfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Catfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "catfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "mixed_lineages" ,
		"bonus" : 1
	}]

});

AddRacialVariant("catfolk", "exotic lineage", {
	regExpSearch : /exotic/i,
	name : "Exotic Catfolk Lineage",
	source : [["TPK", 12]],
	plural : "Exotic Lineage",
	trait : "Mixed Catfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Catfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from an exotic lineage",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "catfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "exotic_lineages" ,
		"bonus" : 1
	}]

});

//LIZARDFOLK

RaceList["lizardfolk (tpk)"] = {
	regExpSearch : /^(?=.*lizardfolk)(?=.*\(tpk\)).*$/i,
	name : "Lizardfolk",
    sortname : "(TPK) Lizardfolk",
	source : [["TPK", 13]],
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
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Lizardfolk",
		"   - (Lineage Trait) Lineage",
	]),
	
	removeeval : function () { cleanup_ancestries(); },
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "lizardfolk_ancestries",
		"bonus" : 3
	}],
};

AddRacialVariant("lizardfolk (tpk)", "busaya", {
	regExpSearch : /^(?=.*busaya).*$/i,
	name : "Busaya Lizardfolk",
    sortname : "Lizardfolk, Busaya",
	source : [["TPK", 13]],
	plural : "Busaya",
	trait : "Busaya Lizardfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Lizardfolk",
		"   - (Origin Trait) Busaya Lizardfolk",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "lizardfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "lizardfolk_busaya_ancestries",
		"bonus" : 1
	}],
});

AddRacialVariant("lizardfolk (tpk)", "drakasi",  {
	regExpSearch : /^(?=.*drakasi).*$/i,
	name : "Drakasi Lizardfolk",
    sortname : "Lizardfolk, Drakasi",
	source : [["TPK", 13]],
	plural : "Drakasi",
	trait : "Drakasi Lizardfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Lizardfolk",
		"   - (Origin Trait) Drakasi Lizardfolk",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "lizardfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "lizardfolk_drakasi_ancestries",
		"bonus" : 1
	}],
});

AddRacialVariant("lizardfolk (tpk)", "voranos",  {
	regExpSearch : /^(?=.*voranos).*$/i,
	name : "Voranos Lizardfolk",
	source : [["TPK", 14]],
	plural : "Voranos",
	trait : "Voranos Lizardfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Lizardfolk",
		"   - (Origin Trait) Voranos Lizardfolk",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "lizardfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "lizardfolk_voranos_ancestries",
		"bonus" : 1
	}],
});

AddRacialVariant("lizardfolk (tpk)", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Lizardfolk Lineage",
	source : [["TPK", 14]],
	plural : "Mixed Lineage",
	trait : "Mixed Lizardfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
        "Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Lizardfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "lizardfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "mixed_lineages" ,
		"bonus" : 1
	}],
});

AddRacialVariant("lizardfolk (tpk)", "exotic lineage", {
	regExpSearch : /exotic/i,
	name : "Exotic Lizardfolk Lineage",
	source : [["TPK", 14]],
	plural : "Exotic Lineage",
	trait : "Mixed Lizardfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
        "Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Lizardfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from an exotic lineage",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "lizardfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "exotic_lineages" ,
		"bonus" : 1
	}],
});

//ORC ZUG ZUG

RaceList["orc (tpk)"] = {
	regExpSearch : /^(?=.*orc)(?=.*\(tpk\)).*$/i,
	name : "Orc (TPK)",
    sortname : "(TPK) Orc",
	source : [["TPK", 9]],
	plural : "Orcs",
	size : 3,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Orokan"],
	scorestxt : "+2/+1 to two ability scores or +1/+1/+1 to three ability scores of my choice",
	trait : "Orc (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Orc",
		"   - (Lineage Trait) Lineage",
	]),
	
	removeeval : function () { cleanup_ancestries(); },
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "orc_ancestries",
		"bonus" : 3
	}],
};

AddRacialVariant("orc (tpk)", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Orcish Lineage",
	source : [["TPK", 9]],
	plural : "Mixed Lineage",
	trait : "Mixed Orcish Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Orc",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "orc_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "mixed_lineages" ,
		"bonus" : 1
	}],
});

AddRacialVariant("orc (tpk)", "exotic lineage", {
	regExpSearch : /exotic/i,
	name : "Exotic Orcish Lineage",
	source : [["TPK", 9]],
	plural : "Exotic Lineage",
	trait : "Mixed Orcish Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Orc",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from an exotic lineage",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "orc_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "exotic_lineages" ,
		"bonus" : 1
	}],
});

RaceList["human (tpk)"] = {
	regExpSearch : /^(?=.*human)(?=.*\(tpk\)).*$/i,
	name : "Human (TPK)",
    sortname : "(TPK) Human",
	source : [["TPK", 8]],
	plural : "Humans",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", 1],
	scorestxt : "+2/+1 to two ability scores or +1/+1/+1 to three ability scores of my choice",
	trait : "Human (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Human",
		"   - (Lineage Trait) Lineage",
	]),
	
	removeeval : function () { cleanup_ancestries(); },
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "human_ancestries",
		"bonus" : 3
	}],
};

AddRacialVariant("human (tpk)", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Human Lineage",
	source : [["TPK", 8]],
	plural : "Mixed Lineage",
	trait : "Mixed Human Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Human",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "human_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "mixed_lineages" ,
		"bonus" : 1
	}],
});

AddRacialVariant("human (tpk)", "exotic lineage", {
	regExpSearch : /exotic/i,
	name : "Exotic Human Lineage",
	source : [["TPK", 8]],
	plural : "Exotic Lineage",
	trait : "Mixed Human Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Human",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from an exotic lineage",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "human_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "exotic_lineages" ,
		"bonus" : 1
	}],
});


RaceList["ratfolk"] = {
	regExpSearch : /^(?=.*ratfolk).*$/i,
	name : "Ratfolk",
    sortname : "(TPK) Ratfolk",
	source : [["TPK", 15]],
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
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Ratfolk",
		"   - (Lineage Trait) Lineage",
	]),
	
	removeeval : function () { cleanup_ancestries(); },
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "ratfolk_ancestries",
		"bonus" : 3
	}],
};

AddRacialVariant("ratfolk", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Ratfolk Lineage",
	source : [["TPK", 15]],
	plural : "Mixed Lineage",
	trait : "Mixed Ratfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Ratfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "ratfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "mixed_lineages" ,
		"bonus" : 1
	}],
});

AddRacialVariant("ratfolk", "exotic lineage", {
	regExpSearch : /exotic/i,
	name : "Exotic Ratfolk Lineage",
	source : [["TPK", 15]],
	plural : "Exotic Lineage",
	trait : "Mixed Ratfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Ratfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from an exotic lineage",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "ratfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "exotic_lineages" ,
		"bonus" : 1
	}],
});

RaceList["birdfolk"] = {
	regExpSearch : /^(?=.*birdfolk).*$/i,
	name : "Birdfolk",
    sortname : "(TPK) Birdfolk",
	source : [["TPK", 10]],
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
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Birdfolk",
		"   - (Lineage Trait) Lineage",
	]),
	
	removeeval : function () { cleanup_ancestries(); },
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "birdfolk_ancestries",
		"bonus" : 3
	}],
};

AddRacialVariant("birdfolk", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Birdfolk Lineage",
	source : [["TPK", 10]],
	plural : "Mixed Lineage",
	trait : "Mixed Birdfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Birdfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "birdfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "mixed_lineages" ,
		"bonus" : 1
	}],
});

AddRacialVariant("birdfolk", "exotic lineage", {
	regExpSearch : /exotic/i,
	name : "Exotic Birdfolk Lineage",
	source : [["TPK", 10]],
	plural : "Exotic Lineage",
	trait : "Mixed Birdfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Birdfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from an exotic lineage",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "birdfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "exotic_lineages" ,
		"bonus" : 1
	}],
});

//SNAILFOLK

RaceList["snailfolk"] = {
	regExpSearch : /^(?=.*snailfolk).*$/i,
	name : "Snailfolk",
    sortname : "(TPK) Snailfolk",
	source : [["TPK", 17]],
	plural : "Snailfolk",
	size : 4,
	speed : {
		walk : { spd : 20, enc : 10 }
	},
	languageProfs : ["Common", 'Sneklik'],
	scorestxt : "+2/+1 to two ability scores or +1/+1/+1 to three ability scores of my choice",
	trait : "Snailfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Snailfolk",
		"   - (Lineage Trait) Lineage",
	]),
	
	removeeval : function () { cleanup_ancestries(); },
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "snailfolk_ancestries",
		"bonus" : 3
	}],
};

AddRacialVariant("Snailfolk", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Snailfolk Lineage",
	source : [["TPK", 17]],
	plural : "Mixed Lineage",
	trait : "Mixed Snailfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Snailfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),

	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "snailfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "mixed_lineages" ,
		"bonus" : 1
	}],
});

AddRacialVariant("Snailfolk", "exotic lineage", {
	regExpSearch : /exotic/i,
	name : "Exotic Snailfolk Lineage",
	source : [["TPK", 17]],
	plural : "Exotic Lineage",
	trait : "Mixed Snailfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Snailfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from an exotic lineage",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "snailfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "exotic_lineages" ,
		"bonus" : 1
	}],
});

RaceList["frogfolk (tpk)"] = {
	regExpSearch : /^(?=.*frogfolk)(?=.*\(tpk\)).*$/i,
	name : "Frogfolk (TPK)",
    sortname : "(TPK) Frogfolk",
	source : [["TPK", 13]],
	plural : "Frogfolk",
	size : 4,
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Gorok"],
	scorestxt : "+2/+1 to two ability scores or +1/+1/+1 to three ability scores of my choice",
	savetxt : {
		text : ["Affected by Beast spells/abilites"]
	},
	trait : "Frogfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect Beasts also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Frogfolk",
		"   - (Lineage Trait) Lineage",
	]),
	
	removeeval : function () { cleanup_ancestries(); },
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "frogfolk_ancestries",
		"bonus" : 3
	}],
};

AddRacialVariant("frogfolk (tpk)", "ranga", {
	regExpSearch : /^(?=.*ranga).*$/i,
	name : "Ranga Frogfolk",
    sortname : "Frogfolk, Ranga",
	source : [["TPK", 13]],
	plural : "Ranga",
	trait : "Ranga Frogfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Frogfolk",
		"   - (Origin Trait) Ranga Frogfolk",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "frogfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "frogfolk_ranga_ancestries",
		"bonus" : 1
	}],
});

AddRacialVariant("frogfolk (tpk)", "wark", {
	regExpSearch : /^(?=.*wark).*$/i,
	name : "Wark Frogfolk",
    sortname : "Frogfolk, Wark",
	source : [["TPK", 13]],
	plural : "Wark",
	trait : "Wark Frogfolk (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect beasts also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Frogfolk",
		"   - (Origin Trait) Wark Frogfolk",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "frogfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "frogfolk_wark_ancestries",
		"bonus" : 1
	}],
});


AddRacialVariant("frogfolk (tpk)", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Frogfolk Lineage",
	source : [["TPK", 8]],
	plural : "Mixed Lineage",
	savetxt : {
		text : ["Affected by Beast spells/abilites"]
	},
	trait : "Mixed Frogfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect Beasts also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Frogfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "frogfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "mixed_lineages" ,
		"bonus" : 1
	}],
});

AddRacialVariant("frogfolk (tpk)", "exotic lineage", {
	regExpSearch : /exotic/i,
	name : "Exotic Frogfolk Lineage",
	source : [["TPK", 8]],
	plural : "Exotic Lineage",
	savetxt : {
		text : ["Affected by Beast spells/abilites"]
	},
	trait : "Mixed frogfolk Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Wilderfolk. Spells and abilities that affect Beasts also affect you.",
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Frogfolk",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from an exotic lineage",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "frogfolk_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "exotic_lineages" ,
		"bonus" : 1
	}],
});


RaceList["kobold (tpk)"] = {
	regExpSearch : /^(?=.*kobold)(?=.*\(tpk\)).*$/i,
	name : "kobold (TPK)",
    sortname : "(TPK) Kobold",
	source : [["TPK", 11]],
	plural : "Kobold",
	size : [3, 4],
	speed : {
		walk : { spd : 30, enc : 20 }
	},
	languageProfs : ["Common", "Gobalo"],
	scorestxt : "+2/+1 to two ability scores or +1/+1/+1 to three ability scores of my choice",
	trait : "Kobold (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Kobold",
		"   - (Lineage Trait) Lineage",
	]),
	
	removeeval : function () { cleanup_ancestries(); },
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "kobold_ancestries",
		"bonus" : 3
	}],
};

AddRacialVariant("kobold (tpk)", "vagrant", {
	regExpSearch : /^(?=.*vagrant).*$/i,
	name : "Vagrant Kobold",
    sortname : "Kobold, Vagrant",
	source : [["TPK", 11]],
	plural : "Vagrant Kobold",
	trait : "Vagrant Kobold (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Kobold",
		"   - (Origin Trait) Vagrant Kobold",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "kobold_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "kobold_vagrant_ancestries",
		"bonus" : 1
	}],
});

AddRacialVariant("kobold (tpk)", "sovereign", {
	regExpSearch : /^(?=.*sovereign).*$/i,
	name : "Sovereign Kobold",
    sortname : "Kobold, Sovereign",
	source : [["TPK", 11]],
	plural : "Sovereign Kobold",
	trait : "Sovereign Kobold (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Kobold",
		"   - (Origin Trait) Sovereign Kobold",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "kobold_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "kobold_sovereign_ancestries",
		"bonus" : 1
	}],
});


AddRacialVariant("kobold (tpk)", "mixed lineage", {
	regExpSearch : /mixed/i,
	name : "Mixed Kobold Lineage",
	source : [["TPK", 11]],
	plural : "Mixed Lineage",
	trait : "Mixed Kobold Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Kobold",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from one other ancestry",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "kobold_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "mixed_lineages" ,
		"bonus" : 1
	}],
});

AddRacialVariant("kobold (tpk)", "exotic lineage", {
	regExpSearch : /exotic/i,
	name : "Exotic Kobold Lineage",
	source : [["TPK", 8]],
	plural : "Exotic Lineage",
	trait : "Mixed Kobold Lineage (+2/+1 OR +1/+1/+1 to any ability scores)" + desc([
		"Traits. I can choose three traits. Select in the \"Choose Feature\"\n   section in the top left of this page.",
		"   Available Trait Options:",
		"   - (Ancestry Trait) Kobold",
		"   - (Lineage Trait) Lineage",
		"   - Any trait from an exotic lineage",
	]),
	
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "kobold_ancestries",
		"bonus" : 2
	},
	{
		"class" : "tlc_ancestries",
		"feature" : "exotic_lineages" ,
		"bonus" : 1
	}],
});


/*
*
*
* SUBCLASSES
*
*/

AddSubClass("artificer", "Sunforge", {
	regExpSearch : /^(?=.*sunforge).*$/i,
	subname : "Sunforge",
	source : ["TPK", 28],
	features : {
		"subclassfeature3" : {
			name : "Tool Proficiency",
			source : [["TPK", 29]],
			minlevel : 3,
			description : "\n   " + "You gain proficiency with jeweler’s tools. If you already have this proficiency, " +
			"\n   " + "you gain proficiency with one other type of artisan's tools of your choice.",
			toolProfs : ["Jeweler's Tools", 1],
			spellcastingExtra : ["guiding bolt", "helling rebuke" , "continual flmae", "flame blade", "blinding smite", "daylight", "fire shield", "sickening radiance", "destructive wave", "wall of light"]
		},
		"subclassfeature3.1" : {
			name : "Synthesize Sunshard",
			source : [["TPK", 32]],
			minlevel : 3,
			description : desc([
				"After long rest, create sunshard with a number of charges equal to your highest-level",
				"spell slot. Action to expend a spell slot to create additional. Charges equal to spell slot",
				"Sunshards can cast light and are destroyed when depleted or at next long rest.",
			]),
			action : ["action", ""]
		},
		"subclassfeature3.2" : {
			name : "Sunshard Infusion",
			source : [["TPK", 32]],
			minlevel : 3,
			description : desc([
				"As an action, attach sunshard to an item to imbue it with an infusion (see Notes Page)",
				"Removing destroys sunshard. Max one per item, total equal to Prof Bonus.",
			]),
			action : ["action", ""],
			toNotesPage : [{
				name : "Sunshard Infusions Table",
				note: "Sunshard Infusions",
				note : [
					"Any Item:",
					"  - Overcharge. Increase the magic item’s number of charges by the number of",
					"    charges on the sunshard. When you expend charges from the item, use the",
					"    sunshard’s charges first.",
					"Armor or Shield: ",
					"  - Solar Shield. When you take damage from an attack, as a reaction you can",
					"    expend one charge from the sunshard to halve the attack’s damage, or",
					"    reduce it to zero if it is radiant damage.",
					"Spellcasting Focus:",
					"  - Arcane Brilliance. When you cast a spell that deals damage, you can ",
					"    expend one charge from the sunshard to cast it as though it were",
					"    one spell level higher.",
					"Weapon:",
					"  - Cutting Edge. When you hit with an attack using the infused weapon,",
					"    you can expend one charge from the sunshard to deal an additional",
					"    weapon die of radiant damage.",
				],
			}],
			
		},
		"subclassfeature5" : {
			name : "Efficient Caster",
			source : [["TPK", 30]],
			minlevel : 5,
			description : desc([
				"When you cast a spell of 2nd level or higher, roll 1d10 and add your Intelligence modifier.",
				"On a 10 or higher, you simultaneously synthesize a sunshard with one charge.",
			]),
		},
		"subclassfeature9" : {
			name : "Improved Infusion",
			source : [["TPK", 30]],
			minlevel : 9,
			description : desc([
				"When sunshard infusion has 2+ charges remaining, gains additional effects (see Notes)",
				"Number of items you can infuse is now Prof Bonus + Int Mod.",
			]),
			toNotesPage : [{
				name : "Improved Infusions Table",
				note: "Improved Infusions",
				note : [
					"Overcharge:",
					"  - Overdrive. If the infused item has less than its maximum number of charges",
					"    at the time it is infused, it regains one charge.",
					"Solar Shield : ",
					"  - Solar Aegis. The infused armor has an additional +1 to AC and makes the",
					"    wearer resistant to radiant damage.",
					"Arcane Brilliance:",
					"  - Arcane Radiance. Spells cast using the infused spellcasting focus have a",
					"    +1 bonus to spell attack and spell save DC.",
					"Cutting Edge:",
					"  - Razor’s Edge. The infused weapon has an additional +1 to attacks rolls",
					"    and damage and can deal radiant damage instead of its normal damage type.",
				],
				amendTo : "Sunshard Infusions Table",
			}],

		},
		"subclassfeature14" : {
			name : "Sunforge Mastery",
			source : [["TPK", 27]],
			minlevel : 14,
			description : "\n   " + "You gain the following abilities:" +
			"\n   " + "• Action to destroy a sunshard that you synthesized, regain a spell slot equal to the number of charges." +
			"\n   " + "• When you cast a spell while touching a synthesized sunshard, you can siphon power from it and convert it into arcane energy, expending any number of charges from it to increase the spell level by the same number. You can only do this with one sunshard at a time." +
			"\n   " + "• When you cast a spell that deals radiant damage, after rolling damage you can change the result on any number of dice to your Intelligence modifier or the highest number on the die, whichever is lower.",
			action : ["action", ""] 
		},
	}
});

AddSubClass("bard", "college of calamity", {
	regExpSearch : /^(?=.*calamity).*$/i,
	subname : "College of Calamity",
	source : ["TPK", 27],
	features : {
		"subclassfeature3" : {
			name : "Hard Knocks",
			source : [["TPK", 27]],
			minlevel : 3,
			description : "\n   " + "When you join the College of Calamity at 3rd level, you gain proficiency in intimidation and learn the cantrip vicious mockery. In addition, you gain the Tavern Brawler feat.",
			skills : [
				["Intimidation"],
			],
			spellcastingBonus : {
				name : "Bonus Cantrips (College of Calamity)",
				times : 1,
				spells : ["vicious mockery"],
				selection : ["vicious mockery"]
			},
			eval : function() { AddFeat("Tavern Brawler"); },
			removeeval : function() { RemoveFeat("Tavern Brawler"); }
		},
		"subclassfeature3.1" : {
			name : "Bardic Sinsperation",
			source : [["TPK", 27]],
			minlevel : 3,
			description : desc([
				"When bardic inspiration dice rolls a of 1, the roller can choose to re-roll the die",
				"but must use the second result. During re-roll, the creature using the bardic",
				"inspiration die must do something rude as a free action, such as hurling an insult,",
				"cutting a rank fart, or another creative crude gesture.",
			])
		},
		"subclassfeature6" : {
			name : "Dumb Luck",
			source : [["TPK", 27]],
			minlevel : 6,
			description : desc([
				"When you take damage from a source you can see, you can use your reaction to reduce",
				"the damage by 1d6 plus your charisma modifier. Usages: 1 plus your charisma modifier",
				"per long rest. After you activate your last use of this ability, your next attack roll,",
				"ability check or saving throw is made at disadvantage as luck catches up with you.",
			]),
			recovery : "long rest",
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod')) + 1;",
			action : ["reaction", ""]
		},
		"subclassfeature14" : {
			name : "Feast of Fortune",
			source : [["TPK", 27]],
			minlevel : 14,
			description : "\n   " + "Whenever one of your bardic inspiration die is used and the result is a maximum roll on the die, you regain a bardic inspiration die.",
		},
	}
});

AddSubClass("cleric", "rune priest", {
	regExpSearch : /^(?=.*rune)(?=.*priest).*$/i,
	subname : "Rune Priest",
	source : [["TPK", 36]],
	spellcastingExtra : ["alarm", "catapult", "arcane lock", "branding smite", "erupting earth,", "glyph of warding", "stoneskin", "deathward", "wall of stone", "circle of power"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Proficiency",
			source : [["TPK", 37]],
			minlevel : 3,
			description : "\n   " + "You gain proficiency with jeweler’s tools. If you already have this proficiency, " +
			"\n   " + "you gain proficiency with one other type of artisan's tools of your choice.",
			toolProfs : ["Mason's Tools", 1],
			armorProfs : [false, false, true, false]
		},
		"subclassfeature1.1" : {
			name : "Runecraft",
			source : [["TPK", 37]],
			minlevel : 1,
			description : "\n   " + "Create magical runes on items, max half cleric level (rounded down) + prof mod. 10-minute ritual, last until you finish a long rest. Each rune can be activated once, and then vanishes. Each creature can only carry one rune-inscribed item at a time. See third page for Runes",
			"runecraft table" : {
				name : "Runecraft Table",
				extraname : "Rune Priest 1",
				source : [["TPK", 37]],
				description : desc([
					"Rune of Escape. As a bonus action, you can move up to your speed without provoking attacks of opportunity", 
					"Rune of Accuracy. You can add +5 to an attack roll after it has been rolled but before it has been determined to be a success or failure.",
					"Rune of Resilience. You can add +5 to a saving throw after it has been rolled but before it has been determined to be a success or failure.",
					"Rune of Absorption. You can use your reaction to gain resistance to a single damage type from a single source." ,
					"Rune of Warding. You can use your reaction to gain a +5 bonus to your Armor Class against a single incoming attack." ,
					"Rune of Impact. You can activate this rune after making a successful melee or ranged weapon attack to add 2d6 thunder damage to the attack's normal damage.",
				]),
			},
			autoSelectExtrachoices : [{ extrachoice : "runecraft table" }],
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Rune of Destruction",
			source : [["TPK", 37]],
			minlevel : 2,
			description : "\n   " + "As an action, summon a 10-foot square rune on the ground I can see within 60 feet. Creatures inside the rune make a Con Saving Throw. Take 3d6 force dmg and stunned until end of their next turn on fail. Save half, no stun.",
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Connecting Runes",
			source : [["TPK", 30]],
			minlevel : 6,
			description : desc([  
				"- Creatures carrying one or more items inscribed with your runes gain +1 to AC.",
				"- As a bonus action, you can activate one of your runes being worn by any creature",
				" within 60 feet. When activated in this way, instead of the rune's normal ability",
				" it heals them for 2d6 + your Wisdom modifier. After this, the rune vanishes.",
				"- When a creature activates one of your runes, they also gain 5 temporary hit points.",
				"- Creatures can carry a number of items with your runes equal to their prof bonus.",
			]),
			action: ["bonus action", ""]
		},
		"subclassfeature8" : {
			name : "Runic Weapon",
			source : [["TPK", 38]],
			minlevel : 8,
			description : "\n   " + "After a long rest you can inscribe a personal rune your weapon with radiant, fire, lightning, thunder, cold, acid, or necrotic. Deals an additional 1d6 damage of the chosen type. Advantage to hit elementals and constructs.",
		},
		"subclassfeature17" : {
			name : "Runemaster",
			source : [["TPK", 38]],
			minlevel : 17,
			description : desc([  
				"- Each rune you inscribe can be activated 2 times before vanishing.",
				"- As long as you aren’t incapacitated, you gain the benefits of the",
				" Stoneskin spell without requiring concentration.",
				"- You can expend a spell slot of 3rd level or higher to inscribe a",
				" rune as an action. This rune does not count towards your maximum number of runes.",
			]),
			action : ["action", ""],
		}
	}
});

AddSubClass("fighter", "frog knight", {
	regExpSearch : /^(?=.*frog)(?=.*knight).*$/i,
	subname : "Frog Knight",
	source : ["TPK", 32],
	features : {
		"subclassfeature3" : {
			name : "Bonus Proficiency",
			source : [["TPK", 32]],
			minlevel : 3,
			description : "\n   " + "Gain one of the following skills: History, Insight, Performance, or Religion. If you are already" +
			"\n   " + "trained in one of these skills, you can instead choose to gain expertise in it.",
			skillstxt : "Choose one from History, Insight, Performance, or Religion. Gain Expertise if already proficient in chosen skill.",
		},
		"subclassfeature3.1" : {
			name : "Leaping Strike",
			source : [["TPK", 32]],
			minlevel : 3,
			description : desc([
				"As a bonus action, you can leap 10 feet in any direction. Opportunity attacks provoked",
				"by this movement are made with disadvantage. In addition, if you use this ability ",
				"and then make a melee weapon attack with a weapon you are wielding with two hands,",
				"you can roll a Strength (Athletics) check to add additional effects from the table below.",
				"0–10        +1d6 damage",
				"11–15       +1d6 damage, one size larger and under Str Save or be knocked prone",
				"15+         +1d8 damage, one size larger and under Str Save or be knocked prone",
				"At level 7, the damage dealt increases to 2d6/2d8, and at level 15 to 3d6/3d8."
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Froggly Honor",
			source : [["TPK", 32]],
			minlevel : 7,
			description : desc([
				"You have advantage on saving throws against fear and charm. In addition, medium and heavy", 
				"armor you wear does not impose disadvantage on Dexterity (Stealth) checks that you make."
			]),
			savetxt : { text : ["Adv. vs fear, charm"] },

		},
		"subclassfeature10" : {
			name : "Defensive Leap",
			source : [["TPK", 32]],
			minlevel : 10,
			description : "\n   " + "When you use a leaping strike on your turn, your armor class increases by 3 until the "+ 
			"\n   " + "start of your next turn.",
		},
		"subclassfeature15" : {
			name : "Defensive Leap",
			source : [["TPK", 32]],
			minlevel : 15,
			description : "\n   " + "when an ally within 15 feet is hit by a melee attack, you can use your reaction to leap in the way and change the target of the attack to you. If the attack roll is less than your AC, the attack misses instead. If it hits, you take half damage from the attack and the original target takes none. In addition, you move to a space that is adjacent to both your ally and the attacker. This ability only works if you can see the attacker and your ally, there is room to move next to them, and there is no obstacle impeding the movement. You can use this ability 2 times per short or long rest." 
			+ "\n   " + "The range of your leaping strike increases to 15 feet.",
			usages : 2,
			recovery : "short rest"
		},
		"subclassfeature15" : {
			name : "Relentless Tongue",
			source : [["TPK", 33]],
			minlevel : 15,
			description : "\n   " + "As a bonus action on each of your turns, you may use your tongue to target a creature within 15 feet with one of the following abilities." +
			"\n   " + "• Make an unarmed strike that deals 1d8 + Strength modifier damage." +
			"\n   " + "• Push a creature 10 feet away from you if they fail a Strength saving throw." +
			"\n   " + "• Pull a creature 10 feet toward you if they fail a Strength saving throw." +
			"\n   " + "• Disarm a creature that is one size larger than you or smaller if they fail a Strength saving throw.",
			action : ["bonus action", ""]
		},
	}
});

AddSubClass("ranger", "ghostscale reaver", {
	regExpSearch : /^(?=.*ghostscale).*$/i,
	subname : "Ghostscale Reaver",
	source : ["TPK", 29],
	features : {
		"subclassfeature3" : {
			name : "Fallen Sprits",
			source : [["TPK", 29]],
			minlevel : 3,
			description : "\n   " + "When you reduce a target to zero hit points with a spell or weapon attack, you gain a number of temporary hit points equal to your wisdom modifier. In addition, while you have temporary hit points gained from this ability, you are resistant to necrotic damage.",
			spellcastingExtra : ["divine favor", "spiritual weapon", "vampiric touch", "guardian of faith", "holy weapon"],
			dmgres : ["Necrotic", "Necro. (when temp HP from Fallen Spirits)"]
		},
		"subclassfeature3.1" : {
			name : "Spirit Strike",
			source : [["TPK", 29]],
			minlevel : 3,
			description : desc([ 
				"As a bonus action, the next creature you hit with a weapon attack takes necrotic damage.",
			    "If this die roll results in an 8, you regain 4 hit points.",
		    ]),
			additional : levels.map(function (n) { return n < 3 ? "" : "+" + (n < 11 ? 1 : 2) + "d8 necrotic damage"; }),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Ghost Shroud",
			source : [["TPK", 30]],
			minlevel : 7,
			description : desc([
				"You can manifest a ghostly barrier in the heat of battle. Information on 3rd page.",
			]),
			"ghost shroud" : {
				name : "Ghost Shroud",
				extraname : "Ghostscale Reaver 7",
				source : [["TPK", 30]],
				description : desc([
					"Can be used in the following ways:",
					" ● When are you targeted by an attack, as a reaction you can increase your armor class by your wisdom",
					"   modifier until the start of your next turn.",
					" ● When you make a saving throw against a spell or spell-like ability, as a reaction you can roll another d20 and take the higher of the two rolls.",
					"You can choose to activate this feature after the attack roll or saving throw is made, but before the GM determines the result. You can use this ability a number of times per day equal to 1 plus your wisdom modifier",
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "ghost shroud" }],
			recovery : "long rest",
			usages : "Wisdom modifier per ",
			usagescalc : "event.value = Math.max(1, What('Wis Mod')) + 1;",
			action : ["reaction", ""]
		},
		"subclassfeature11" : {
			name : "Death's Chosen",
			source : [["TPK", 30]],
			minlevel : 11,
			description : desc([
				"When you are reduced to 0 hit points, you manifest an aura of spirits within 10 feet.",
				"Full Information on third page."

			]),
			"death's chosen" : {
				name : "Death's Chosen",
				extraname : "Ghostscale Reaver 11",
				source : [["TPK", 30]],
				description : desc([
					"When an enemy starts its turn in this area or enters it for the first time on its turn,",
					"it must succeed on a wisdom saving throw against your spell save DC or take 2d8",
					"necrotic damage. If this reduces a creature to zero hit points, you regain one hit point. ",
					"When an ally starts its turn in this area or enters it for the first time on its turn, ",
					"it regains a number of hit points equal to 1d6 plus your wisdom modifier. ",
					"This effect lasts until you die or regain consciousness.",
					"In addition, you have advantage on death saving throws.",
				])
			},
			autoSelectExtrachoices : [{ extrachoice : "death's chosen" }],
			savetxt : { text : ["Adv. on death saving throws"] }
		},
		"subclassfeature15" : {
			name : "Retributive Spirit",
			source : [["TPK", 30]],
			minlevel : 15,
			description : desc([
				"When a creature within 30 feet deals damage to you, you can use your reaction to deal",
				"3d8 necrotic damage to that creature. In addition, it cannot regain hit points until",
				"the end of your next turn.",
			]),
			action : ["reaction", ""],
		},
	}
});


AddSubClass("paladin", "oath of the ivory knight", {
	regExpSearch : /^(?=.*ivory)(?=.*knight).*$/i,
	subname : "Oath of the Ivory Knight",
	source : ["TPK", 28],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Ward of Fangs",
			source : [["TPK", 28]],
			minlevel : 3,
			description : "\n   " + "As a bonus action, you surround yourself with a radiant aura of divine fangs for 1 minute. If a creature ends their turn within 5 feet of you, you can choose to deal them 1d6 piercing damage. If this ability reduces a creature to zero hit points, you gain 5 temporary hit points + 1 per paladin level. Temporary hit points gained from this ability last until they're depleted or you finish a long rest.",
			action : ["bonus action", ""],
			spellcastingExtra : ["magic missile", "tasha’s hideous laughter", "gentle repose", "magic mouth", "hunger of hadar", "mass healing word", "aura of purity", "sickening radiance", "wall of stone", "holy weapon"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Blinding Smile",
			source : [["TPK", 28]],
			minlevel : 3,
			description : "\n   " + "As a bonus action, you create a flash of blinding radiant light. Each creature of your choice within 30 feet of you must succeed on a Dexterity saving throw or be blinded for one minute.",
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Pearly Aura",
			source : [["TPK", 28]],
			minlevel : 7,
			description :"\n   " +  "You and friendly creatures within 10 feet of you have resistance to bludgeoning, piercing and slashing damage from non-magical attacks.",
			additional : ["", "", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		},
		"subclassfeature15" : {
			name : "Jaws of Life",
			source : [["TPK", 28]],
			minlevel : 15,
			description : "\n   " + "Once per long rest, if an ally within 30 feet of you is reduced to zero hit points, as a reaction, you can move up to your speed without provoking opportunity attacks and use Lay on Hands on that ally.",
			action : ["reaction", ""],
			usages: 1,
			recovery : "long rest",

		},
		"subclassfeature20" : {
			name : "Perfect Smile",
			source : [["TPK", 28]],
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
	source : [["TPK", 30]],
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
			source : [["TPK", 30]],
			minlevel : 1,
			description : "\n   " + "When you cast a spell that deals fire, cold, thunder, lightening or acid damage, I can change the damage type to piercing."
		},
		"subclassfeature1.2" : {
			name : "Tooth Taker",
			source : [["TPK", 30]],
			minlevel : 1,
			description : "\n   " + "I can use the tooth of a creature of CR 1 or higher in place of any spell component up to 500 gold in value if they’re still alive or have been dead for less than a day. The tooth vanishes upon being used in this way, as it is transported to the Lady of Ivory’s collection, and the material cost of the spell is waived."
		},
		"subclassfeature6" : {
			name : "Many Mouths",
			source : [["TPK", 30]],
			minlevel : 6,
			description : "\n   " + "while holding the tooth of a creature, you can understand any of its spoken languages but do not gain the ability to speak them.",
		},
		"subclassfeature10" : {
			name : "Deep Roots",
			source : [["TPK", 30]],
			minlevel : 10,
			description : "\n   " + "I am immune to being knocked prone or pushed. In addition, I can use my movement action to move up to my speed by teleporting myself to a location I can see.",
		},
		"subclassfeature14" : {
			name : "Enamel Grafting",
			source : [["TPK", 30]],
			minlevel : 14,
			description : "\n   " + "I gain resistance to piercing, bludgeoning and slashing damage from nonmagical attacks.",
			dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
		}
	}
});

BackgroundList["leyfarer"] = {
	regExpSearch : /^(?=.*leyfarer)(?=.*initiate).*$/i,
	name : "Leyfarer Initiate",
	source : ["TPK", 21],
	gold : 15,
	equipleft : [
		["Leyfarer's Journal", "", 5],
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
	eval : function () { AddString('Feat Note 1', 'Background bonus feat') },
	removeeval : function() { RemoveString('Feat Note 1', 'Background bonus feat'); },
};

AddBackgroundVariant("leyfarer", "explorer", {
	regExpSearch : /^(?=.*explorer)(?=.*leyfarer).*$/i,
	name : "Leyfarer Explorer Focus",
	source : ["TPK", 26],
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "explorer_ranks",
		"bonus" : 1
	}],
});

AddBackgroundVariant("leyfarer", "naturalist", {
	regExpSearch : /^(?=.*naturalist)(?=.*leyfarer).*$/i,
	name : "Leyfarer Naturalist Focus",
	source : ["TPK", 26],
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "naturalist_ranks",
		"bonus" : 1
	}],
});

AddBackgroundVariant("leyfarer", "scholar", {
	regExpSearch : /^(?=.*scholar)(?=.*leyfarer).*$/i,
	name : "Leyfarer Scholar Focus",
	source : ["TPK", 26],
	bonusClassExtrachoices : [{
		"class" : "tlc_ancestries",
		"feature" : "scholar_ranks",
		"bonus" : 1
	}],
});

BackgroundFeatureList["leyfarer's journey"] = {
	description : "Choose two skills and a total of two tool proficiencies or languages. \nChoose a feat. \nCreate two personality traits, one ideal, one bond, and one flaw.",
	source : ["TPK", 21],
};

GearList["leyfarer's Journal"] = {
	infoname : "Leyfarer's Journal [priceless]",
	name : "Leyfarer's Journal",
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


// FEATS

FeatsList["adaptive mycelia"] = {
	name : "Adaptive Mycelia",
	source : [["TPK", 31]],
	description :
		"When damaged, use a reaction to make a melee spell attack against the attacker within 30ft."
		+ " Your attack bonus is equal to your Con mod + Prof Bonus. Spend 1 hit die for damage (necro). +1 hit die at levels 4 and 8."
		+ " You can use this a number of times equal to your proficiency bonus. [+1 Consitution]",
	allowDuplicates: false,
	recovery : "long rest",
	usages : "Proficiency bonus per ",
	usagescalc : "event.value = How('Proficiency Bonus');",
	action : ["reaction", ""],
	scores : [0, 0, 1, 0, 0, 0],
};


// SPELLS

SpellsList["Final Breath"] = {
	name : "Final Breath",
	classes : ["cleric", "sorcerer", "wizard"],
	source : [["TPK", 32]],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	duration : "Conc, 1 min",
	compMaterial : "A jaw with the dying creature's final breath",
	description : "Spell atk 5d6/8/10 at full/missing/half target HP; Kill creates zombie",
	descriptionFull : desc([
		"You reach out and touch a creature to push them one step closer to the grave.",
		"Make a melee spell attack against a creature you can reach. On a hit, the creature takes 5d6 necrotic",
		"damage. If the creature is below full health, it takes 5d8 necrotic damage instead. If the creature is below",
		"half health, they take 5d10 necrotic damage instead.",
		"If this damage reduces the target creature to zero hit points, they immediately transform into a zombie",
		"under your command. During your turn, if the zombie is within 60 feet, you can use your bonus action to",
		"command it to take an action and move. If not given a command, the zombie will take the dodge action",
		"at the end of your turn. This zombie remains for one minute or until you lose concentration, at which",
		"point it collapses to the ground as a corpse.",
	]),
};

SpellsList["Squeeb's Shellward"] = {
	name : "Squeeb's Shellward",
	classes : ["sorcerer", "wizard"],
	source : [["TPK", 32]],
	level : 2,
	school : "Abjur",
	time : "1 rea",
	range : "Self",
	components : "V,S,M",
	duration : "Instantaneous",
	compMaterial : "A piece of snailfolk shell",
	description : "Cast when hit by spell w/ saving throw, adv. on save against same SL or lower; 20 negates",
	descriptionFull : desc([
		"When the caster is hit or targeted by a spell that requires a saving throw, as a reaction they can manifest",
		"Squeeb’s Shellward before rolling their save. This gives them advantage on the saving throw against the",
		"spell, and if they roll a 20 on this save, the spell is negated. This only works on spells of level 2 or lower.",
		"At Higher Levels: If cast as a 3rd level spell it will work against spells of level 3 or lower. For each",
		"additional level this spell is cast at, this increased is applied",
	]),
};


SpellsList["Squeeb’s Tenacious Tendrils"] = {
	name : "Squeeb’s Tenacious Tendrils",
	classes : ["sorcerer", "wizard"],
	source : [["TPK", 33]],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	duration : "Conc, 1 min",
	save: "Dex",
	compMaterial : "A vial of snailfolk slime",
	description : "10-ft radius, diff. terr.; 2d6+1d6/SL bludg. dmg, grappled. Escape vs. Spell DC. Save half, not grappled",
	descriptionFull : desc([
		"A pool of enchanted snail slime with a 10 ft radius covers a portion of ground the caster can see. Any",
		"creature in the area must succeed on a dexterity saving throw or take 2d6 bludgeoning damage as gooey",
		"tendrils rise up and pummel them. Any creature that fails their save is also grappled. The DC to escape",
		"this grapple is equal to the caster’s spell DC. If a creature starts its turn grappled by this spell, they take",
		"2d6 bludgeoning damage. If a creature enters this area or starts their turn there, if they aren’t grappled",
		"by the spell they must succeed on a dexterity saving throw or take 2d6 bludgeoning damage and become",
		"grappled. On a successful save they take half damage and are not grappled. The area is considered",
		"difficult terrain.",
		"At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases",
		"by 1d6 for each slot level above 3rd.",
	]),
};