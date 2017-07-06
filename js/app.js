var names = ["Avatar (Male)","Avatar (Female)","Avatar (Logbook)","Chrom","Lissa","Frederick","Virion","Sully","Vaike","Stahl","Miriel","Kellam","Sumia","Lon'qu","Ricken","Maribelle","Panne","Gaius","Cordelia","Gregor","Nowi","Libra","Tharja","Olivia","Cherche","Henry","Lucina","Say'ri","Basilio","Flavia","Donnel","Anna","Owain","Inigo","Brady","Kjelle","Cynthia","Severa","Gerome","Morgan (Male)","Morgan (Female)","Yarne","Laurent","Noire","Nah","Tiki","Gangrel","Walhart","Emmeryn","Yen'fay","Aversa","Priam","Marth","Dummy","Monster (Unpromoted)","Monster (Promoted)","Merchant"]

var skills = ["None","HP +5","Strength +2","Magic +2","Skill +2","Speed +2","Defense +2","Resistance +2","Hit Rate +10","Hit Rate +20","Avoid +10","Movement +1","Locktouch","Veteran","Aptitude","Discipline","Armsthrift","Dual Support +","Dual Strike +","Dual Guard +","Rightful King","Odd Rhythm","Even Rhythm","Quick Start","Slow Start","Lucky 7","Zeal","Outdoor Fighter","Indoor Fighter","Tantivy","Focus","Gamble","Wrath","Prescience","Paitence","Underdog","Charm","Solidarity","Demoiselle","Hex","Anathema","Healtouch","Relief","Renewal","Deliverer","Defender","Acrobat","Pass","Swordfaire","Lancefaire","Axefaire","Bowfaire","Tomefaire","Luck +4","Special Dance","Rally Strength","Rally Magic","Rally Skill","Rally Speed","Rally Luck","Rally Defence","Rally Resistance","Rally Movement","Rally Spectrum","Swordbreaker","Lancebreaker","Axebreaker","Bowbreaker","Tomebreaker","Wyrmsbane","Beastbane","Lethality","Aether","Astra","Sol","Luna","Ignis","Vengance","Vantage","Pavise","Aegis","Counter","Miracle","Despoil","Galeforce","Lifetaker","Conquest","Shadowgift","All Stats +2 (DLC)","Paragon (DLC)","Iote's Shield (DLC)","Limit Breaker (DLC)","Dragonskin","Rightful God","Hawkeye","Luna +","Vantage +","Pavise +","Aegis +","Resistance +10 (DLC)","Aggressor (DLC)","Rally Heart (DLC)","Bond (DLC)","? (Crashes the Game)"]

var classes = ["Lord M","Lord F","Great Lord M","Great Lord F","Tactician M","Tactician F","Grandmaster M","Grandmaster F","Cavalier M","Cavalier F","Knight M","Knight F","Paladin M","Paladin F","Great Knight M","Great Knight F","General M","General F","Barbarian","Fighter","Mercenary M","Mercenary F","Archer M","Archer F","Berserker","Warrior","Hero M","Hero F","Bow Knight M","Bow Knight F","Sniper M","Sniper F","Myrmidon M","Myrmidon F","Thief M","Thief F","Swordmaster M","Swordmaster F","Assassin M","Assassin F","Trickster M","Trickster F","Pegasus Knight","Falcon Knight","Dark Flier","Wyvern Rider M","Wyvern Rider F","Wyvern Lord M","Wyvern Lord F","Griffon Rider M","Griffon Rider F","Troubadour","Priest","Cleric","Mage M","Mage F","Dark Mage M","Dark Mage F","Valkyrie","War Monk","War Cleric","Sage M","Sage F","Dark Knight M","Dark Knight F","Sorcerer M","Sorcerer F","Dancer","Manakete","Taguel M","Taguel F","Soldier","Villager","Mercheant","Reverant","Entombed","Conqueror","Lodestar","Grima","Mirage","Dread Fighter","Bride"]

var items = ["Bronze Sword", "Iron Sword", "Steel Sword", "Silver Sword", "Brave Sword", "Armor Slayer", "Wyrmslayer", "Killing Edge", "Levin Sword", "Rapier", "Noble Rapier", "Missletainn", "Sol", "Amatsu", "Falchion", "Exalted Falchion", "Parallel Falchion", "Mercurius", "Tyrfing", "Mystletainn", "Balmung", "Sol Katti", "Ragnell", "Ragnell Inf Durability", "Tree Branch", "Soothing Sword", "Glass Sword", "Superior Edge", "Eliwoods Blade", "Roys Blade", "Alms Blade", "Leifs Blade", "Eirikas Blade", "Seliphs Blade", "Bronze Lance", "Iron Lance", "Steel Lance", "Silver Lance", "Brave Lance", "Javelin", "Short Spear", "Spear", "Beast Killer", "Blessed Lance", "Killer Lance", "Luna", "Gradivus", "Gungnir", "Gae Bolg", "Log", "Miniature Lance", "Shockstick", "Glass Lance", "Superior Lance", "Sigurds Lance", "Ephraims Lance", "Finns Lance", "Bronze Axe", "Iron Axe", "Steel Axe", "Silver Sxe", "Brave Axe", "Hand Axe", "Short Axe", "Tomahawk", "Hammer", "Bolt Axe", "Killer Axe", "Vengance", "Wolf Berg", "Hauteclare", "Helswath", "Armads", "Ladle", "Imposing Axe", "Volant Axe", "Glass Axe", "Superior Axe", "Titanias Axe", "Orsins Hatchet", "Hectors Axe", "Bronze Bow", "Iron Bow", "Steel Bow", "Silver Bow", "Brave Bow", "Blessed Bow", "Killer Bow", "Long Bow", "Astra", "Parthia", "Yewfelle", "Nidhogg", "Double Bow", "Slack Bow", "Towering Bow", "Underdog Bow", "Glass Bow", "Superior Bow", "Wolts Bow", "Innes Bow", "Fire", "Elfire", "Arcfire", "Bolganone", "Valflame", "Thunder", "Elthunder", "Arcthunder", "Thoron", "Mjollnir", "Wind", "Elwind", "Arcwind", "Rexcalibur", "Forseti", "Excalibur", "Book of Naga", "Flux", "Nosferatu", "Ruin", "Waste", "Goetia", "Grimas Truth", "Mire", "Dying Blaze", "Micaiahs Pyre", "Superior Jolt", "Katarinas Bolt", "Wilderwind", "Celias Gale", "Aversas Night", "Heal", "Mend", "Physic", "Recover", "Fortify", "Goddess Staff", "Rescue", "Ward", "Hammerne", "Kneader", "Balmwood Staff", "Catharsis", "Dragonstone", "Dragonstone plus", "Beaststone", "Beaststone plus", "Blighted Claws", "Blighted Talons", "Expiration", "Vulnerary", "Concoction", "Elixer", "Pure Water", "HP Tonic", "Strength Tonic", "Magic Tonic", "Skill Tonic", "Speed Tonic", "Luck Tonic", "Defense Tonic", "Resistance Tonic", "Door Key", "Chest Key", "Master Key", "Seraph Robe", "Energy Drop", "Sprit Dist", "Secret Book", "Speedwing", "Goddess Icon", "Dracoshield", "Talisman", "Nagas Tear", "Boots", "Arms Scroll", "Master Seal", "Second Seal", "Bullion S", "Bullion M", "Bullion L", "Sweet Tincture", "Gaius Confect", "Kris Confect", "Tikis Tear", "Seed of Trust", "Reeking Box", "Rift Door", "Supreme Emblem", "All Stats plus 2", "Paragon", "Iotes Shield", "Limit Breaker", "Silver Card", "Dread Scroll", "Wedding Bouquet", "1000 Gold", "3000 Gold", "5000 Gold", "7000 Gold"]

function toDec(num){
	return parseInt(num, 16)
}

function toHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
    while (hex.length < padding) {
        hex = "0" + hex;
    }
    return hex;
}

function toAscii(h) {
    var hex = h.toString();
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function toBin(h) {
	var output = '';
	for (var i = 0; i < h.length; i++) {
		var decimal = parseInt(h.charAt(i), 16);
		var binary = decimal.toString(2)
		while (binary.length < 4) {
          binary = "0" + binary;
      }
		output += binary;
	}
	return output;
}

function bToHex(b) {
	var output = '';
        for (var i = 0; i < b.length; i += 4) {
            var bytes = b.substr(i, 4);
            var decimal = parseInt(bytes, 2);
            var hex = decimal.toString(16);
            output += hex;
        }
        return output;
}

var values = {
	CHARACTER_HEADER : "54494e55", //TINU
	CHARACTER_FOOTER : "ff49464552", //ÿIFER
	CHARACTER_ID : "ffff04",
	FUCK_START_YOUR_SOUL: "32ffff",
	FUCK : "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
	FUCK_DLC : "ffff00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
	unitNumber: 0,
};

//unit constructor function
function Unit(str){
	this.characterStr = str;
	this.prevCharacterStr = str;
	this.charID;
	this.name;
	this.class;
	this.aSkills = {
		"1": null, "2": null, "3": null, "4": null, "5": null
	}
	this.lSkills = {
		hex: null, bin: null, binR: null,
		reverse: function(input){
			var out = "";
			for(var i = 0; i <= input.length - 8; i += 8){
				var t = input.substr(i, 8);
				out += t.split("").reverse().join("");
			}

			return out;
		}
	};
	this.hairColor;
	this.stats = {
		str: null, mag: null, spd: null, skl: null, lck: null, def: null, res: null, hp: null, exp: null, mov: null
	}
	this.weaponExp = {
		sword: null, spear: null, axe: null, bow: null, tomb: null, stave: null
	}
	this.avatarData = {
		asset: null, flaw: null, gender: null, build: null, face: null, hair: null, voice: null
	}
	this.name;
	this.isAvatar = function(){
		if(toDec(this.charID) == 0 || toDec(this.charID) == 1){
			return true;
		} else return false;
	}
	this.isChild = function(){
		if(toDec(this.charID) >= 32 && toDec(this.charID) <= 44){
			return true;
		} else return false;
	}
	this.isDLC = function(){
		if(toDec(this.charID) == 2) {
			return true;
		} else return false;
	}
	this.setValues = function(){
		this.charID = this.characterStr.substring(2,4);
		if(this.isAvatar() || this.isDLC()) {
			if(this.characterStr.indexOf(values.FUCK) != -1){
				this.name = toAscii(this.characterStr.substr(this.characterStr.indexOf(values.FUCK) + values.FUCK.length + 30, 48).replace(/00/g, ""));
			} else {
				this.name = toAscii(this.characterStr.substr(this.characterStr.indexOf(values.FUCK_DLC) + values.FUCK_DLC.length + 30, 48).replace(/00/g, ""));
			}
		} else {
			this.name = names[toDec(this.charID)];
		}
		this.class = this.characterStr.substr(6,2);

		this.aSkills[1] = this.characterStr.substr(102, 2);
		this.aSkills[2] = this.characterStr.substr(106, 2);
		this.aSkills[3] = this.characterStr.substr(110, 2);
		this.aSkills[4] = this.characterStr.substr(114, 2);
		this.aSkills[5] = this.characterStr.substr(118, 2);

		this.stats.str = this.characterStr.substr(22,2);
		this.stats.mag = this.characterStr.substr(24,2);
		this.stats.skl = this.characterStr.substr(26,2);
		this.stats.spd = this.characterStr.substr(28,2);
		this.stats.lck = this.characterStr.substr(30,2);
		this.stats.def = this.characterStr.substr(32,2);
		this.stats.res = this.characterStr.substr(34,2);
		this.stats.hp = this.characterStr.substr(20,2);

		this.stats.exp = this.characterStr.substr(38,2);
		this.stats.mov = this.characterStr.substr(42,2);
		this.stats.lvl = this.characterStr.substr(36,2);

		this.weaponExp.sword = this.characterStr.substr(122,2);
		this.weaponExp.spear = this.characterStr.substr(124,2);
		this.weaponExp.axe = this.characterStr.substr(126,2);
		this.weaponExp.bow = this.characterStr.substr(128,2);
		this.weaponExp.tomb = this.characterStr.substr(130,2);
		this.weaponExp.stave = this.characterStr.substr(132,2);

		var bSkillBlock = this.characterStr.indexOf("ffff0000000002") + 32 + "ffff0000000002".length;
		var eSkillBlock = this.characterStr.indexOf("ffff0000000002") + 58 + "ffff0000000002".length;
		this.lSkills.hex = this.characterStr.substring(bSkillBlock, eSkillBlock)
		this.lSkills.bin = toBin(this.lSkills.hex);
		this.lSkills.binR = this.lSkills.reverse(this.lSkills.bin);

		if(this.isChild()) {
			this.hairColor = "#" + this.characterStr.substr(this.characterStr.indexOf(values.FUCK_START_YOUR_SOUL) + 90 + values.FUCK_START_YOUR_SOUL.length, 6);
		}
		if(this.isDLC() || this.isAvatar()) {
			var offset = this.characterStr.indexOf(values.FUCK) + values.FUCK.length + 38 + 48;
			this.avatarData.build = this.characterStr.substr(offset + 2, 2);
			this.avatarData.face = this.characterStr.substr(offset + 4, 2);
			this.avatarData.hair = this.characterStr.substr(offset + 6, 2);
			this.hairColor = "#" + this.characterStr.substr(offset - 68, 6);
			this.avatarData.voice = this.characterStr.substr(offset + 16, 2);
		}
	}
	this.loadValues = function(){
		$("#current")[0].innerHTML = this.name;
		$("#classes").val(toDec(this.class));
		$("#lvl")[0].value = toDec(this.stats.lvl);
		$("#exp")[0].value = toDec(this.stats.exp);
		$("#boots")[0].value = toDec(this.stats.mov);

		$("#skill1").val(toDec(this.aSkills[1]));
		$("#skill2").val(toDec(this.aSkills[2]));
		$("#skill3").val(toDec(this.aSkills[3]));
		$("#skill4").val(toDec(this.aSkills[4]));
		$("#skill5").val(toDec(this.aSkills[5]));

		$("#hp")[0].value  = toDec(this.stats.hp);
		$("#str")[0].value = toDec(this.stats.str);
		$("#mag")[0].value = toDec(this.stats.mag);
		$("#skl")[0].value = toDec(this.stats.skl);
		$("#spd")[0].value = toDec(this.stats.spd);
		$("#lck")[0].value = toDec(this.stats.lck);
		$("#def")[0].value = toDec(this.stats.def);
		$("#res")[0].value = toDec(this.stats.res);

		$("#swordExp")[0].value = toDec(this.weaponExp.sword);
		$("#spearExp")[0].value = toDec(this.weaponExp.spear);
		$("#axeExp")[0].value = toDec(this.weaponExp.axe);
		$("#bowExp")[0].value = toDec(this.weaponExp.bow);
		$("#tombExp")[0].value = toDec(this.weaponExp.tomb);
		$("#staveExp")[0].value = toDec(this.weaponExp.stave);

		if(this.isAvatar() || this.isChild() || this.isDLC()){
			$("#hairC").show();
			$("#hairColor")[0].value = this.hairColor;

		} else {
			$("#hairC").hide();
		}

		if(this.isAvatar() || this.isDLC()){
			$("#apperance").show();
			$("#build").val(this.avatarData.build);
			$("#face").val(this.avatarData.face);
			$("#hairType").val(this.avatarData.hair);
			$("#voice").val(this.avatarData.voice);
		} else {
			$("#apperance").hide();
		}
		var skillElements = document.getElementsByName('skill');
		for(var i = 1; i < skills.length - 1; i++) {
			if(this.lSkills.binR.substr(i, 1) == 1){
				skillElements[i - 1].checked = true;
			} else {
				skillElements[i - 1].checked = false;
			}
		}
	}
	this.replace = function(b,r){
		this.characterStr = this.characterStr.substring(0, b) + r + this.characterStr.substring(b + r.length, this.characterStr.length);
	}
	this.buildNewUnitBlock = function() {
		this.replace(20, toHex($("#hp")[0].value));
		this.replace(22, toHex($("#str")[0].value));
		this.replace(24, toHex($("#mag")[0].value));
		this.replace(26, toHex($("#skl")[0].value));
		this.replace(28, toHex($("#spd")[0].value));
		this.replace(30, toHex($("#lck")[0].value));
		this.replace(32, toHex($("#def")[0].value));
		this.replace(34, toHex($("#res")[0].value));

		this.replace(122, toHex($("#swordExp")[0].value));
		this.replace(124, toHex($("#spearExp")[0].value));
		this.replace(126, toHex($("#axeExp")[0].value));
		this.replace(128, toHex($("#bowExp")[0].value));
		this.replace(130, toHex($("#tombExp")[0].value));
		this.replace(132, toHex($("#staveExp")[0].value));

		this.replace(102, toHex($("#skill1").val()));
		this.replace(106, toHex($("#skill2").val()));
		this.replace(110, toHex($("#skill3").val()));
		this.replace(114, toHex($("#skill4").val()));
		this.replace(118, toHex($("#skill5").val()));

		this.replace(38, toHex($("#exp")[0].value));
		this.replace(42, toHex($("#boots")[0].value));
		this.replace(36, toHex($("#lvl")[0].value));

		this.replace(6, toHex($("#classes").val()));

		if(this.isChild()) {
			this.replace(this.characterStr.substr(this.characterStr.indexOf(values.FUCK_START_YOUR_SOUL) + 90 + values.FUCK_START_YOUR_SOUL.length, $("#hairColor")[0].value.replace("#", "")));
		}


		var newSkillBin = "0";
		var skillElements = document.getElementsByName('skill');
		for(var i = 0; i < skillElements.length; i++) {
				if(skillElements[i].checked == 1){
					newSkillBin += "1";
				} else {
					newSkillBin += "0";
				}
		}
		newSkillBin += "0";
		var newSkillHex = bToHex(this.lSkills.reverse(newSkillBin));
		this.replace(this.characterStr.indexOf("ffff0000000002") + 32 + "ffff0000000002".length, newSkillHex);

		if(this.isAvatar() || this.isDLC()){
			var offset = this.characterStr.indexOf(values.FUCK) + values.FUCK.length + 38 + 48;
			this.replace(offset + 2, $("#build").val());
			this.replace(offset + 4, $("#face").val());
			this.replace(offset + 6, $("#hairType").val());
			this.replace(offset + 16, $("#voice").val());
			this.replace(offset + 8, $("#hairColor")[0].value.replace("#", ""));
			this.replace(offset - 68, $("#hairColor")[0].value.replace("#", ""))

		}

	}
}



var fileStr;
var blocks = [];
var current = null;
var compiledFile = "";
var fileName = "";





function setup(){
	for(var i = 1; i <= 5; i++){
		for(var j = 0; j < skills.length; j++) {
			var c = '<option value="' + j + '">' + skills[j] + '</option>';
			$("#skill" + i)[0].innerHTML += c;
		}
	}
	for(var j = 0; j < classes.length; j++) {
		var c = '<option value="' + j + '">' + classes[j] + '</option>';
		$("#classes")[0].innerHTML += c;
	}
	for(var i = 0; i < items.length; i++) {
		var c = "<div class=\"item\" id=" + items[i].replace(/ /g, "") + "><p>" + items[i] + "</p><input type=\"text\"></div>"
		$("#convoy")[0].innerHTML += c;
	}
	for(var i = 1; i < skills.length - 1; i++) {
		var c = "<div><input name=\"skill\" type=\"checkbox\">" + skills[i] + "</div>";
		$("#lSkillsForm")[0].innerHTML += c;

	}
}

function beginApp(){
	$("#welcome").hide();
	$("#app").show();
}

function makeList(){
	for(var i = 0; i < blocks.length; i++){
		$("#unitList")[0].innerHTML += ("<li id=\"unit" + i + "\">" + blocks[i].name + "</li>")
	}
}

function readCharacterBlocks(){
	blocks = [];
	while(blocks.length > 0) {
   	blocks.pop();
	}
	var indexes = [];
	while(indexes.length > 0) {
   	indexes.pop();
	}
	var characterBlock = fileStr.substring(fileStr.indexOf(values.CHARACTER_HEADER) + values.CHARACTER_HEADER.length, fileStr.indexOf(values.CHARACTER_FOOTER));
	values.unitNumber = toDec(characterBlock.substring(4, 6));
	for(var i = characterBlock.indexOf(values.CHARACTER_ID); i >= 0; i = characterBlock.indexOf(values.CHARACTER_ID, i + 1)) {
		var temp = characterBlock.substring(i - 48);
		if(temp.substring(0,2) == "07" && temp.substring(4,6) == "00"){
			indexes.push(i - 48);
		}
	}
	for(var i = 0; i < indexes.length; i++){
		if(i + 1 < indexes.length){
			blocks[i] = new Unit(characterBlock.substring(indexes[i], indexes[i + 1]));
			blocks[i].setValues();
		}
	}


	makeList();
}

function readFile(){
	fileName = $("#input")[0].value.split(/(\\|\/)/g).pop();
	var file = $("#input")[0].files[0];
	with(new FileReader)readAsArrayBuffer(file),onload=function(){
		for(i in u = new Uint8Array(result)){
			fileStr += toHex(u[i]);

		}
	}
	readCharacterBlocks();
}

function updateFileStrConvoy(){
	var t = "";
	var index = fileStr.indexOf("4e415254046001") + "4e415254046001".length + 4;
	for(var i = 0; i < items.length; i++){
		var temp = toHex(parseInt($("#" + items[i].replace(/ /g, "") + " input")[0].value), 4);
		var trueVal = temp.substring(2,4) + temp.substring(0,2);
		t += trueVal;
	}

	fileStr = fileStr.replace(fileStr.substring(index, index + t.length), t)
	console.log((fileStr.substring(index, index + t.length)))
}

function download(filename, text) {
	$("#download")[0].setAttribute('href', 'data:application/octet-stream;base64,' + encodeURIComponent(text));
	$("#download")[0].setAttribute('download', fileName);
}

function makeFile(){
	y=[];
	for(var i = 0; i < blocks.length; i++) {
		fileStr = fileStr.replace(blocks[i].prevCharacterStr, blocks[i].characterStr);
	}
	(fileStr.replace('undefined','')+" ").replace(/.{1,2}/g,function(a){
		y.push(parseInt(a,16))
	});
	compiledFile = btoa(String.fromCharCode.apply(!1,new Uint8Array(y)))
	download("new_saveFile", compiledFile)
}

function readConvoy(){
	var index = fileStr.indexOf("4e415254046001") + "4e415254046001".length + 4;
	var t = "";
	for(var i = 0; i < items.length; i++){
		var temp = fileStr.substring(index + i * 4, index + i * 4 + 4);
		var trueVal = temp.substring(2, 4) + temp.substring(0, 2);
		$("#" + items[i].replace(/ /g, "") + " input")[0].value = toDec(trueVal);
		t+=trueVal;
	}
	console.log(t)
}

function readMisc(){
	var index = fileStr.substring(25,33);
	var difficulty = fileStr.substring(fileStr.indexOf(index) + index.length + 2, fileStr.indexOf(index) + index.length + 4);
	$("#difficulty").val(toDec(difficulty));
	console.log(difficulty);
	var gold = fileStr.substring(fileStr.indexOf(index, 33 + index.length) + index.length + 4, fileStr.indexOf(index, 33 + index.length) + index.length + 10);
	gold = toDec(gold.substring(4,6) + gold.substring(2,4) + gold.substring(0,2))
	$("#gold")[0].value = gold;
}

function updateFileStrMisc(){
	var index = fileStr.substring(25,33);
	var prevDiff = fileStr.substring(fileStr.indexOf(index) + index.length + 2, fileStr.indexOf(index) + index.length + 4);
	fileStr = fileStr.substring(0, fileStr.indexOf(index) + index.length + 2) + toHex($("#difficulty").val()) + fileStr.substring(fileStr.indexOf(index) + index.length + 4, fileStr.length);
	//console.log(fileStr.substring(25, 41))
	var prevGold = fileStr.substring(fileStr.indexOf(index, 33 + index.length) + index.length + 4, fileStr.indexOf(index, 33 + index.length) + index.length + 10);
	var gold = toHex($("#gold")[0].value, 6);
	gold = gold.substring(4,6) + gold.substring(2,4) + gold.substring(0,2);
	console.log(gold);
	fileStr = fileStr.substring(0, fileStr.indexOf(index, 33 + index.length) + index.length + 4) + gold + fileStr.substring(fileStr.indexOf(index, 33 + index.length) + index.length + 10, fileStr.length);

}

$(document).ready(function() {
	$("#hairColor").on("change keyup paste click", function(){
    	$("#hairColor")[0].style.backgroundColor = $("#hairColor")[0].value;
	});

	$(document).on('click', '#unitList li', function () {
		blocks[$(this).index()].setValues();
		blocks[$(this).index()].loadValues();
		current = $(this).index();
		$("#hairColor")[0].style.backgroundColor = $("#hairColor")[0].value;
	});

	$(document).on("click", '#updateUnit',function(){
		blocks[current].buildNewUnitBlock();
		console.log(blocks[current].characterStr)
	});

	$(document).on("click", '#updateConvoy',function(){
		updateFileStrConvoy();
	});

	$(document).on("click", '#updateMisc',function(){
		updateFileStrMisc();
	});

	$(document).on("click", '#import',function(){
		beginApp();
		$("#updateConvoy")[0].style.pointerEvents = "none";
		$("#updateMisc")[0].style.pointerEvents = "none";
		$("#updateMisc")[0].style.pointerEvents = "none";
		readFile();
	});

	$(document).on("click", "#download", function(){
		makeFile();
	});

	$(document).on("change", "#stat input", function(){
		if(parseInt(this.value) > 255 || parseInt(this.value) < 0 || isNaN(this.value)){
			alert("invalid value, only numbers between 0 and 255");
			this.value = 0;
		}
	});

	$(document).on("change", "#all", function(){
		for(var i = 0; i < items.length; i++){
			$("#" + items[i].replace(/ /g, "") + " input")[0].value = $("#all")[0].value;
		}
	})

	$(document).on("click", "#UnitEditor", function(){
		$("#units").show();
		$("#convoy").hide();
		$("#updateConvoy")[0].style.pointerEvents = "none";
		$("#misc").hide();
		$("#updateMisc")[0].style.pointerEvents = "none";
		$("#updateUnit")[0].style.pointerEvents = "auto";
	});

	$(document).on("click", "#ConvoyEditor", function(){
		$("#units").hide();
		$("#updateUnit")[0].style.pointerEvents = "none";
		$("#misc").hide();
		$("#updateMisc")[0].style.pointerEvents = "none";
		$("#convoy").show();
		$("#updateConvoy")[0].style.pointerEvents = "auto";
		readConvoy();
	});

	$(document).on("click", "#MiscEditor", function(){
		$("#misc").show();
		$("#units").hide();
		$("#updateUnit")[0].style.pointerEvents = "none";
		$("#convoy").hide();
		$("#updateConvoy")[0].style.pointerEvents = "none";
		readMisc();
		$("#updateMisc")[0].style.pointerEvents = "auto";
	});

	$(document).on("click", "#godBox", function() {
		checkboxes = document.getElementsByName('skill');
		for(var i = 0; i < checkboxes.length; i++) {
			checkboxes[i].checked = $("#godBox")[0].checked;
		}
	});
	setup();

});
