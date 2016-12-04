// Alle kjenner til leken hvor man går runden rundt og teller men må hoppe over (klappe e.l) alle tall som enten har 7 i seg eller er delig på 7. Et eksempel er gitt under der '( )' indikerer et slikt tall.
// 1 2 3 4 5 6 ( ) 8 9 10 11 12 13 ( ) 15 16 ( ) 18 ...

// Algemannens versjon av denne leken er å fylle inn alle disse '( )' med begynnelsen på tallrekken igjen. Et eksempel under er gitt (legg merke til det siste 1'tallet der..):
// 1 2 3 4 5 6 (1) 8 9 10 11 12 13 (2) 15 16 (3) 18 19 20 (4) 22 23 24 25 26 (5) (6) 29 30 31 32 33 34 (1) 36 (8) 38 ..

// Vi er ute etter hvilket tall som blir stående på plass nr 1337. Svaret oppgis uten '( )' rundt.

function run(){
	firstCounter = 0;
	secondCounter = 0;
	for(i=1;i<1338;i++){
		if(i%7==0 || i.toString().includes('7')){
			firstCounter++;
			if(firstCounter%7==0 || firstCounter.toString().includes('7')){
				secondCounter++;
			}
		}
		console.log(i+" "+firstCounter+" "+secondCounter);
	}
}

console.time('run');
run();
console.timeEnd('run');