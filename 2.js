// O(n) solution

function fib(){
	num = 1;
	num2 = 0;
	sum = 0;
	fib = 0;
	while (sum < 4000000000){
		fib = num + num2;
		num2 = num;
		num = fib;
		if((fib % 2 == 0)){ 
			sum += fib;
		}
		if(sum < 4000000000){console.log(sum);}
	}
}

console.time('fib');
fib();
console.timeEnd('fib');