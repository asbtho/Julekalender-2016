'use strict';

function run(){
	let messageText = $('textarea#message').val();
	let messageArray = messageText.substring(1, messageText.length-1).replace(/ /g, "").split(',');
	let messagePairs = [];
	let message = '';
	for(let i = 0; i < messageArray.length/2; i++){
		messagePairs.push(fromRoman(messageArray[i])+fromRoman(messageArray[messageArray.length-i-1]));
	}
	for(let i = 0; i < messagePairs.length; i++){
		message += toChar(messagePairs[i]);
	}
	console.log(message);
}

function fromRoman(str){
	let result = 0;
	if(str === '0'){
		return 0;
	}
	let decimal = [10, 9, 5, 4, 1];
	let roman = ["X","IX","V","IV","I"];
	for(let i = 0;i < decimal.length; i++){
		while(str.indexOf(roman[i]) === 0){
			result += decimal[i];
			str = str.replace(roman[i],'');
		}
	}
	return result;
}

function toChar(num){
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	return alphabet[num-1];
}

setTimeout(function(){ 
	console.time('run');
	run();
	console.timeEnd('run');
}, 2000);