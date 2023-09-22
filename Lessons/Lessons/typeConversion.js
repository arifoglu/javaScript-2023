///////// Number
let pi = "3.14";
let myPI = Number(pi); // 3.14
console.log(myPI); 

let a = "";
console.log(Number(a)); /// 0

let a1 = "dani";
console.log(Number(a1)); // NaN

let b = 4.5;
console.log(parseInt(b));  // 4

console.log(parseFloat(b)); // 4.5

// let a1 = "dani"; let b = 4.5  ;
let c ="4"
console.log(a1 + b) // dani4.5
console.log(c  + b) // 44.5

/////////////////////////// toString()
let x = 30 ;
console.log(typeof x) //number 30
let newX = x.toString();
console.log(typeof newX)  //string 30  

/////////////////////////// Number() 
let myTime =new Date();
let myYear = myTime.getFullYear();
console.log(typeof myTime)// object
console.log(typeof myYear)// number
console.log(typeof Number(myTime))// number
console.log(typeof myTime.toString())// String

//// Number for Booleans true  or false
console.log(Number(true)) // 1
console.log(Number(false)) // 0
//// String for Booleans  true or false
console.log(typeof true.toString()) //  true    String
console.log(typeof false.toString()) // false   String
