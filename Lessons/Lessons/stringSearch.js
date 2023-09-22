// indexOf()
let textOne = "Ce ligne a été fait par js"
let myIndex = textOne.indexOf("é");
console.log(myIndex);

console.log(textOne.indexOf("lignet"));

console.log(textOne.indexOf("é",15));

console.log(textOne.search("gn"));


/// match()
let textSecond = "The rain in SPAIN stays mainly in the plain"
//console.log(textSecond.match("rain"));
//console.log(textSecond.match(/rain/));//regular expression
console.log(textSecond.matchAll("in"));

// includes()  method returns true if a string contains a specified value.
let textThird = "Hello world ,welcome to world";
console.log(textThird.length);
console.log(textThird.includes("world"));
console.log(textThird.indexOf("world"));
console.log(textThird.lastIndexOf("world"));

// startsWith() method returns true if a string begins with a specified value
// endsWith()   method returns true if a string ends with a specified value.

console.log(textThird.startsWith("world",6));
console.log(textThird.endsWith("world"));


let phrase = "My first expression is first day first job"





//////////////// trying
// ---fi\rst--\-----\-----\-----\-----\--fir\st---\--
console.log(phrase.length);
console.log(phrase.includes("first"));
console.log(phrase.indexOf("first"));
console.log(phrase.lastIndexOf("first"));
console.log(phrase.startsWith("first",33));
console.log(phrase.endsWith("first",8));
console.log(phrase.search("first"));
console.log(phrase.matchAll(/st/g));







