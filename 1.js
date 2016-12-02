// O(n) solution

function num(){
	for(i = 6;;i+=10){
		if( (i*4) == (parseInt('6'+removelastint(i))) ){
			console.log(i);
			break;
		}
	}
}

function removelastint(n){
	return Math.floor(n/10);
}

console.time('num');
num();
console.timeEnd('num');