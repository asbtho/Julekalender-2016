'use strict';

function run(){
	let directions = $('textarea#text').val();
	let dirArray = directions.split("\n");
	let walked = [0,0];
	for(let i in dirArray){
		let direction = getDirection(dirArray[i]);
		let meters = getMeters(dirArray[i]);
		walked[0] += direction[0]*meters;
		walked[1] += direction[1]*meters;
	}
	console.log(walked[0]+","+walked[1]);
}

function getMeters(str){
	return str.match(/\d+/g)[0];
}

function getDirection(str){
	if (str.includes('north')){
		return [1,0];
	}else if (str.includes('south')){
		return [-1,0];
	}else if (str.includes('east')){
		return [0,-1];
	}else if (str.includes('west')){
		return [0,1];
	}else{
		return;
	}
}

setTimeout(function(){ 
	console.time('run');
	run();
	console.timeEnd('run');
}, 2000);