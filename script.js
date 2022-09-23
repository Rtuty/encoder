function CezarEncrypt(theText) {
	output = new String;
	Temp = new Array();
	Temp2 = new Array();
	TextSize = theText.length;
	for (i = 0; i < TextSize; i++) {
		rnd = Math.round(Math.random() * 122) + 68;
		Temp[i] = theText.charCodeAt(i) + rnd;
		Temp2[i] = rnd;
	}
	for (i = 0; i < TextSize; i++) {
		output += String.fromCharCode(Temp[i], Temp2[i]);
	}
	return output;
}

function CezarunEncrypt(theText) {
	output = new String;
	Temp = new Array();
	Temp2 = new Array();
	TextSize = theText.length;
	for (i = 0; i < TextSize; i++) {
		Temp[i] = theText.charCodeAt(i);
		Temp2[i] = theText.charCodeAt(i + 1);
	}
	for (i = 0; i < TextSize; i = i+2) {
		output += String.fromCharCode(Temp[i] - Temp2[i]);
	}
	return output;
}

function VernamCrypt(theText)
{
	// генератор случайных чисел в заданном диапазоне
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}
	var input, output, key;
	var inp, k;
	input = theText

	key = prompt("Введите ключ и запишите его - он потребуется для расшифровки сообщения");

	// если длина ключа меньше длины сообщения — говорим пользователю и генерируем свой ключ
	if ((key.length) < (input.length)) {
		alert("Ключ короче сообщения, это небезопасно. Скопируйте новый сгенерированный ключ из консоли браузера.");
		key = "";
		// генерируем новый ключ такой же длины, как и сообщение
		for (var i = 0; i < input.length; i++) {
			key += String.fromCharCode(getRandomInt(0, 66535));
		}
		console.log("Скопируйте новый ключ ↓");
		console.log(key);
	}

	// чтобы расшифровать сообщение НЌѷѲФЂѸЄЀЉІѷЃЉЋѶЃЇѳЍІѹѰЀЌѶЊЍ -сообщение, 54321678905647385432167890564738 - код
	// шифруем сообщение
	output = "";
	for (i = 0; i < input.length; i++) {
		inp = input.charCodeAt(i);
		k = key.charCodeAt(i);
		output += String.fromCharCode(inp ^ k);
	}
	return output;
}

function AesCrypt(theText) {
	var hex = theText.toString();
	var str = '';
	for (var i = 0; i < hex.length; i += 2)
		str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
	return str;
}
