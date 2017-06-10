var names = ["Avatar (Male)","Avatar (Female)","Avatar (Logbook)","Chrom","Lissa","Frederick","Virion","Sully","Vaike","Stahl","Miriel","Kellam","Sumia","Lon'qu","Ricken","Maribelle","Panne","Gaius","Cordelia","Gregor","Nowi","Libra","Tharja","Olivia","Cherche","Henry","Lucina","Say'ri","Basilio","Flavia","Donnel","Anna","Owain","Inigo","Brady","Kjelle","Cynthia","Severa","Gerome","Morgan (Male)","Morgan (Female)","Yarne","Laurent","Noire","Nah","Tiki","Gangrel","Walhart","Emmeryn","Yen'fay","Aversa","Priam","Marth","Dummy","Monster (Unpromoted)","Monster (Promoted)","Merchant"]

var skills = ["None","HP +5","Strength +2","Magic +2","Skill +2","Speed +2","Defense +2","Resistance +2","Hit Rate +10","Hit Rate +20","Avoid +10","Movement +1","Locktouch","Veteran","Aptitude","Discipline","Armsthrift","Dual Support +","Dual Strike +","Dual Guard +","Rightful King","Odd Rhythm","Even Rhythm","Quick Start","Slow Start","Lucky 7","Zeal","Outdoor Fighter","Indoor Fighter","Tantivy","Focus","Gamble","Wrath","Prescience","Paitence","Underdog","Charm","Solidarity","Demoiselle","Hex","Anathema","Healtouch","Relief","Renewal","Deliverer","Defender","Acrobat","Pass","Swordfaire","Lancefaire","Axefaire","Bowfaire","Tomefaire","Luck +4","Special Dance","Rally Strength","Rally Magic","Rally Skill","Rally Speed","Rally Luck","Rally Defence","Rally Resistance","Rally Movement","Rally Spectrum","Swordbreaker","Lancebreaker","Axebreaker","Bowbreaker","Tomebreaker","Wyrmsbane","Beastbane","Lethality","Aether","Astra","Sol","Luna","Ignis","Vengance","Vantage","Pavise","Aegis","Counter","Miracle","Despoil","Galeforce","Lifetaker","Conquest","Shadowgift","All Stats +2 (DLC)","Paragon (DLC)","Iote's Shield (DLC)","Limit Breaker (DLC)","Dragonskin","Rightful God","Hawkeye","Luna +","Vantage +","Pavise +","Aegis +","Resistance +10 (DLC)","Aggressor (DLC)","Rally Heart (DLC)","Bond (DLC)","? (Crashes the Game)"]

var classes = ["Lord M","Lord F","Great Lord M","Great Lord F","Tactician M","Tactician F","Grandmaster M","Grandmaster F","Cavalier M","Cavalier F","Knight M","Knight F","Paladin M","Paladin F","Great Knight M","Great Knight F","General M","General F","Barbarian","Fighter","Mercenary M","Mercenary F","Archer M","Archer F","Berserker","Warrior","Hero M","Hero F","Bow Knight M","Bow Knight F","Sniper M","Sniper F","Myrmidon M","Myrmidon F","Thief M","Thief F","Swordmaster M","Swordmaster F","Assassin M","Assassin F","Trickster M","Trickster F","Pegasus Knight","Falcon Knight","Dark Flier","Wyvern Rider M","Wyvern Rider F","Wyvern Lord M","Wyvern Lord F","Griffon Rider M","Griffon Rider F","Troubadour","Priest","Cleric","Mage M","Mage F","Dark Mage M","Dark Mage F","Valkyrie","War Monk","War Cleric","Sage M","Sage F","Dark Knight M","Dark Knight F","Sorcerer M","Sorcerer F","Dancer","Manakete","Taguel M","Taguel F","Soldier","Villager","Mercheant","Reverant","Entombed","Conqueror","Lodestar","Grima","Mirage","Dread Fighter","Bride"]

var fileStr;
var blocks = [];
var characterRegex = /07..00......................................ffffffff04........04........04........04........04..........00..00..00..00..00.............*?ffff0000000002..................................................................*?00000000......ff(0000|0106)/g;
var skillBlock = ""
var modBlock;
var current = null;

function toDec(num){
	return parseInt(num, 16)
}

function toHex(num){
	return num.toString(16)
}

function updateFileStr(n){
	fileStr.replace(blocks[n], modBlocks);
	blocks[n] = modBlocks;
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

function parseFile(){
	blocks = fileStr.match(characterRegex);
	makeList();
}

function readFile(){
	var file = $("#input")[0].files[0];
	with(new FileReader) readAsArrayBuffer(file), onload = function() {
		for (i in u = new Uint8Array(result)) fileStr += (0 + u[i].toString(16)).slice(-2);
	}
	parseFile();
}

function makeList(){
	for(var i = 0; i < blocks.length; i++){
		$("#unitList")[0].innerHTML += ("<li id=\"unit" + i + "\">" + names[toDec(blocks[i].substr(2,2))] + "</li>")
	}
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
	//$("#hairColor")[0].value = "#" + blocks[current].substring(blocks[current].length - 9, blocks[current].length - 3)
	skillBlock = blocks[current].substring(blocks[current].length - 152,blocks[current].length - 120)
}

$(document).ready(function() {

	$("#hairColor").change(function(){
		$("#hairColor")[0].style.backgroundColor = $("#hairColor")[0].value;
	});
	$('#import').click(function(){
		readFile();
	});
	$(document).on( 'click', 'li', function () {
		readBlock($(this).index());
	});

	$(document).on("click", '#update',function(){
		updateFileStr(current);
	});
	$(document).on("click", '#import',function(){
		beginApp(current);
	});

	setup();

});
