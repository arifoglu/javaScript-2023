let x = 123e-3;
console.log(x);
let a = 0.5;
let b = 0.2;
console.log(a + b);

//// ATTENTION  
let a1 = "20";
let b1 = "10";
/////only + does not work with string
console.log(a1 + b1); // 2010 result

///// - * /  works with strings
console.log(a1 - b1);   // 10
console.log(a1 * b1);  //  200
console.log(a1 / b1);  //  2


////// Nan (not a number)
let numero = 100 / "apple";
console.log(isNaN(numero)); //Nan
/// infinity is a number

let myInfini = 2 / 0;
console.log(myInfini);
console.log(typeof myInfini);  //number

///////// toString()

let myNumber = 23;
console.log(myNumber.toString());

// Number.isInteger()
let d = 37;
let f = "37";
console.log(Number.isInteger(d));
console.log(Number.isInteger(f));


///////////////toString()///////////////////

let numero1 = 123 ;
let myNew = numero1.toString();
let numero2 = 11;
console.log(numero1+numero2); // 134   result
console.log(myNew+numero1);   // 12311 result

///////////////////toFixed() turn string //////////////////

let myMoney = 9.65 ;
console.log(myMoney.toFixed(0)); // 10    result string  
let news = myMoney.toFixed(0);
console.log(typeof news);/// 
console.log(myMoney.toFixed(1)); // 9.7   result string 
console.log(myMoney.toFixed(2)); // 9.65  result string 

//////////////////////Number() Methods/////////////////////////////////////////////

let word1 = "10";
let word1Number = Number(word1);
console.log(word1Number);
console.log(typeof word1);        //string
console.log(typeof word1Number);  //number

let word2 = "ten"
console.log(Number(word2));       /// Nan 

////////////////////Number propertys
let Numeros1 = Number.MAX_SAFE_INTEGER;
console.log(Numeros1);
let Numeros2 = Number.MAX_VALUE;
console.log(Numeros2);
let Numeros3 = Number.MIN_SAFE_INTEGER;
console.log(Numeros3);
let Numeros4 = Number.MIN_VALUE;
console.log(Numeros4);
let Numeros5 = Number.EPSILON;
console.log(Numeros5);
let Numeros6 = Number.POSITIVE_INFINITY;
console.log(Numeros6);
let Numeros7 = Number.NEGATIVE_INFINITY;
console.log(Numeros7);




