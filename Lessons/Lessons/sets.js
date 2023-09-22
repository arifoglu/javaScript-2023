/////////////////////////// add
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);  // {'a', 'b', 'c'};

const letters2  = new Set();
let x = "x";
let y = "y";
let z = "z";
letters2.add(x);
letters2.add(y);
letters2.add(z);
console.log(letters2);  // {'x', 'y', 'z'};

letters2.add("Q");
letters2.add("Q"); // only first element can add
console.log(letters2);  // {'x', 'y', 'z', 'Q'}

/////////////////////////// forEach()

let letters3 = new Set(["p","l","m","n"]);
let text ="";
 letters3.forEach(myFunction);
 function myFunction(value){
     text += value + "/"  ;
 };
console.log(text);
//short function wrtiting
// letters3.forEach((value)=> text += value + "/");     

let numeros = [0,1,2,3,4,5,6,7,8,9];
let myNumeros ="";
numeros.forEach((value)=> myNumeros += (value + 2)/2  + "//");
console.log(myNumeros);

/////////////////////////////////// values()
console.log(letters3.values()); ///SetIterator {'p', 'l', 'm', 'n'};
