

/* Question 1 */

for (var i = 5; i <= 120; i=i+10) {
	console.log("increment by 10",i)
}

/* Question 2 */

for (var i = 4096; i >=1; i=i/2) {
	console.log("decrement by division",i)
} 

/* Question 3 */

var presidents = ["George Washington","John Adams", "Thomas Jefferson"];

for (var i=0; i<presidents.length; i++) {
	console.log("#" + (i+1) + " is " +  presidents[i])
}

/* Question 4 */

var antSpecies = {
  argentine: 1,
  army: 2,
  bigHeaded: 3,
  black: 4,
  bull: 5,
  carpenter: 6,
  crazy: 7,
  fire: 8,
  glider: 9,
  honeyPot: 10,
  jackJumper: 11
}

    
for (var prop in antSpecies) {
  console.log("antSpecies " + prop + " = " + antSpecies[prop]);
}


