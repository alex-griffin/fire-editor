var names = ["Avatar (Male)","Avatar (Female)","Avatar (Logbook)","Chrom","Lissa","Frederick","Virion","Sully","Vaike","Stahl","Miriel","Kellam","Sumia","Lon'qu","Ricken","Maribelle","Panne","Gaius","Cordelia","Gregor","Nowi","Libra","Tharja","Olivia","Cherche","Henry","Lucina","Say'ri","Basilio","Flavia","Donnel","Anna","Owain","Inigo","Brady","Kjelle","Cynthia","Severa","Gerome","Morgan (Male)","Morgan (Female)","Yarne","Laurent","Noire","Nah","Tiki","Gangrel","Walhart","Emmeryn","Yen'fay","Aversa","Priam","Marth","Dummy","Monster (Unpromoted)","Monster (Promoted)","Merchant"]

var skills = ["None","HP +5","Strength +2","Magic +2","Skill +2","Speed +2","Defense +2","Resistance +2","Hit Rate +10","Hit Rate +20","Avoid +10","Movement +1","Locktouch","Veteran","Aptitude","Discipline","Armsthrift","Dual Support +","Dual Strike +","Dual Guard +","Rightful King","Odd Rhythm","Even Rhythm","Quick Start","Slow Start","Lucky 7","Zeal","Outdoor Fighter","Indoor Fighter","Tantivy","Focus","Gamble","Wrath","Prescience","Paitence","Underdog","Charm","Solidarity","Demoiselle","Hex","Anathema","Healtouch","Relief","Renewal","Deliverer","Defender","Acrobat","Pass","Swordfaire","Lancefaire","Axefaire","Bowfaire","Tomefaire","Luck +4","Special Dance","Rally Strength","Rally Magic","Rally Skill","Rally Speed","Rally Luck","Rally Defence","Rally Resistance","Rally Movement","Rally Spectrum","Swordbreaker","Lancebreaker","Axebreaker","Bowbreaker","Tomebreaker","Wyrmsbane","Beastbane","Lethality","Aether","Astra","Sol","Luna","Ignis","Vengance","Vantage","Pavise","Aegis","Counter","Miracle","Despoil","Galeforce","Lifetaker","Conquest","Shadowgift","All Stats +2 (DLC)","Paragon (DLC)","Iote's Shield (DLC)","Limit Breaker (DLC)","Dragonskin","Rightful God","Hawkeye","Luna +","Vantage +","Pavise +","Aegis +","Resistance +10 (DLC)","Aggressor (DLC)","Rally Heart (DLC)","Bond (DLC)","? (Crashes the Game)"]

var classes = ["Lord M","Lord F","Great Lord M","Great Lord F","Tactician M","Tactician F","Grandmaster M","Grandmaster F","Cavalier M","Cavalier F","Knight M","Knight F","Paladin M","Paladin F","Great Knight M","Great Knight F","General M","General F","Barbarian","Fighter","Mercenary M","Mercenary F","Archer M","Archer F","Berserker","Warrior","Hero M","Hero F","Bow Knight M","Bow Knight F","Sniper M","Sniper F","Myrmidon M","Myrmidon F","Thief M","Thief F","Swordmaster M","Swordmaster F","Assassin M","Assassin F","Trickster M","Trickster F","Pegasus Knight","Falcon Knight","Dark Flier","Wyvern Rider M","Wyvern Rider F","Wyvern Lord M","Wyvern Lord F","Griffon Rider M","Griffon Rider F","Troubadour","Priest","Cleric","Mage M","Mage F","Dark Mage M","Dark Mage F","Valkyrie","War Monk","War Cleric","Sage M","Sage F","Dark Knight M","Dark Knight F","Sorcerer M","Sorcerer F","Dancer","Manakete","Taguel M","Taguel F","Soldier","Villager","Mercheant","Reverant","Entombed","Conqueror","Lodestar","Grima","Mirage","Dread Fighter","Bride"]

var fileStr;
var blocks = [];
var characterRegex = /07..00......................................ffffffff04........04........04........04........04..........00..00..00..00..00.............*?ffff0000000002..................................................................*?..............ff(00000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................ff....|0000|0106|0001|0000..0000)/g
var modBlock;
var current = null;
var compiledFile = "";
var fileName = "";


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


function replaceBlock(b,e,r){
	blocks[current] = blocks[current].replace(blocks[current].substring(b,e),r)
}

function modBlockUpdate(){
	modBlock = blocks[current];
	replaceBlock(6,8, toHex(parseInt($("#classes")[0].options[$("#classes")[0].selectedIndex].value)))
	replaceBlock(102,104, toHex(parseInt($("#skill1")[0].options[$("#skill1")[0].selectedIndex].value)))
	replaceBlock(106,108, toHex(parseInt($("#skill2")[0].options[$("#skill2")[0].selectedIndex].value)))
	replaceBlock(110,112, toHex(parseInt($("#skill3")[0].options[$("#skill3")[0].selectedIndex].value)))
	replaceBlock(114,116, toHex(parseInt($("#skill4")[0].options[$("#skill4")[0].selectedIndex].value)))
	replaceBlock(118,120, toHex(parseInt($("#skill5")[0].options[$("#skill5")[0].selectedIndex].value)))
	replaceBlock(36,38, toHex(parseInt($("#lvl")[0].value)));
	replaceBlock(38,40, toHex(parseInt($("#exp")[0].value)));
	replaceBlock(42,44, toHex(parseInt($("#boots")[0].value)));
	replaceBlock(20,22, toHex(parseInt($("#hp")[0].value)));
	replaceBlock(22,24, toHex(parseInt($("#str")[0].value)));
	replaceBlock(24,26, toHex(parseInt($("#mag")[0].value)));
	replaceBlock(26,28, toHex(parseInt($("#skl")[0].value)));
	replaceBlock(28,30, toHex(parseInt($("#spd")[0].value)));
	replaceBlock(30,32, toHex(parseInt($("#lck")[0].value)));
	replaceBlock(32,34, toHex(parseInt($("#def")[0].value)));
	replaceBlock(34,36, toHex(parseInt($("#res")[0].value)));





	var bSkillBlock = blocks[current].indexOf("ffff0000000002") + 32 + "ffff0000000002".length;
	var eSkillBlock = blocks[current].indexOf("ffff0000000002") + 58 + "ffff0000000002".length;
	if($("#noChangeSkills").prop("checked") === true){

	} else if($("#allSkills").prop("checked") === true){
		replaceBlock(bSkillBlock,eSkillBlock, "FEFFFFFFFFFFFFFFFFFFFFFF7F");
	} else if($("#allLSkills").prop("checked") === true){
		replaceBlock(bSkillBlock,eSkillBlock, "FEFFFFFFFFFFBFFFFFFFFF0F78");
	} else if($("#NoSkills").prop("checked") === true){
		replaceBlock(bSkillBlock,eSkillBlock, "00000000000000000000000000");
	}
	replaceBlock(blocks[current].length - 12, blocks[current].length - 6,$("#hairColor")[0].value.replace('#',''))

	//boots: !works
	//lvl: !works
	//exp: !works
	//class: !works
	//s1: !works
	//s2: !works
	//s3: !works
	//s4: !works
	//s5: !works
	//lSkills: ~kinda
	//hc: !works
}

function updateFileStr(){
	modBlock = blocks[current]
	modBlockUpdate();
	fileStr = fileStr.replace(modBlock, blocks[current]);
	console.log("\n" +  blocks[current])
	//blocks[current] = modBlock;
}

function setup(){
	for(var i = 1; i <= 5; i++){
		for(var j = 0; j < skills.length; j++){
			var c = '<option value="' + j + '">' + skills[j] + '</option>';
			$("#skill" + i)[0].innerHTML += c;
		}
	}
	for(var j = 0; j < classes.length; j++){
		var c = '<option value="' + j + '">' + classes[j] + '</option>';
		$("#classes")[0].innerHTML += c;
	}
}

function beginApp(){
	$("#welcome").hide();
	$("#app")[0].style.display = "flex";
}

function makeList(){
	for(var i = 0; i < blocks.length; i++){
		$("#unitList")[0].innerHTML += ("<li id=\"unit" + i + "\">" + names[toDec(blocks[i].substr(2,2))] + "</li>")
	}
}

function parseFile(){
	blocks = [];
	blocks = fileStr.match(characterRegex);
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
	parseFile();
}

function readBlock(n){
	current = n;
	$("#current")[0].innerHTML = names[toDec(blocks[current].substring(2,4))];
	$("#classes").val(toDec(blocks[current].substring(6,8)));
	$("#lvl")[0].value = toDec(blocks[current].substring(36,38));
	$("#exp")[0].value = toDec(blocks[current].substring(38,40));
	$("#boots")[0].value = toDec(blocks[current].substring(42,44));
	$("#skill1").val(toDec(blocks[current].substring(102, 104)));
	$("#skill2").val(toDec(blocks[current].substring(106, 108)));
	$("#skill3").val(toDec(blocks[current].substring(110, 112)));
	$("#skill4").val(toDec(blocks[current].substring(114, 116)));
	$("#skill5").val(toDec(blocks[current].substring(118, 120)));
	$("#hairColor")[0].value = "#" + blocks[current].substring(blocks[current].length - 12, blocks[current].length - 6)
	$("#hairColor")[0].style.backgroundColor = $("#hairColor")[0].value;
	$("#hp")[0].value  = toDec(blocks[current].substring(20,22));
	$("#str")[0].value = toDec(blocks[current].substring(22,24));
	$("#mag")[0].value = toDec(blocks[current].substring(24,26));
	$("#skl")[0].value = toDec(blocks[current].substring(26,28));
	$("#spd")[0].value = toDec(blocks[current].substring(28,30));
	$("#lck")[0].value = toDec(blocks[current].substring(30,32));
	$("#def")[0].value = toDec(blocks[current].substring(32,34));
	$("#res")[0].value = toDec(blocks[current].substring(34,36));
	console.log(blocks[current])
}

function download(filename, text) {
	$("#download")[0].setAttribute('href', 'data:application/octet-stream;base64,' + encodeURIComponent(text));
	$("#download")[0].setAttribute('download', fileName);
}

function makeFile(){
	y=[];
	(fileStr.replace('undefined','')+" ").replace(/.{1,2}/g,function(a){
		y.push(parseInt(a,16))
	});
	compiledFile = btoa(String.fromCharCode.apply(!1,new Uint8Array(y)))
	download("new_saveFile", compiledFile)
}

$(document).ready(function() {
	$("#hairColor").on("change keyup paste click", function(){
    	$("#hairColor")[0].style.backgroundColor = $("#hairColor")[0].value;
	});

	//fix this you stupid fucking idiot
	$(document).on('click', 'li', function () {
		readBlock($(this).index());
	});

	$(document).on("click", '#update',function(){
		updateFileStr();
	});
	$(document).on("click", '#import',function(){
		beginApp();
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
	})
	setup();

});
