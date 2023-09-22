///////        regular Expression  /pattern/modifiers
// search()
let text = "visit Suisse";
console.log(text.search("Suisse")) ;   // 6
console.log(text.search(/suisse/i)) ;  // 6

// replace()
let textNew =  text.replace(/italy/i,"Suisse") ;
console.log(textNew) // this is not work at firefox;

// match()
let text2 = "Visit Suisse";
let result = text2.match(/[i]/g);
console.log(result);  // Array(3) [ "i", "i", "i" ]

let numero ="123456789";
console.log(numero.match(/[4-7]/g));  //Array(5) ["4", "5", "6", "7"]

//  text()
const text3 = "The best things in life";
const pattern = /e/;
const pattern2 = /k/;

console.log(pattern.test(text3));      //  true
console.log(/e/.test(text3));         //  true

console.log(pattern2.test(text3));    // false
console.log(/k/.test(text3));        // false




