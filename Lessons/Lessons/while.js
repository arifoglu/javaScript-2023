///////   while
// let txt ="";
// let i = 0;
// while (i < 10){
//     txt += "<br>" + i ; 
//     i++;
// }
// document.getElementById("demo").innerHTML = txt;
////////  do while
// let txt2 ="";
// let i = 0;
// do {
//     txt2 += " " + i ;
//     i++;
// }while (i < 10);
// document.getElementById("demo").innerHTML = txt2;
///////
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let txt3 ="";
// let i = 0 ;
// for(; cars[i];){
//     txt3 += cars[i];
//     i++;
// }
// console.log(txt3);
///////// break continue
// let txt4 ="";
// for (let i = 0 ; i < 10 ;i++){
//     if(i === 3){ break ; }
//     txt4 += i + "-"; 
// };
// console.log(txt4);
// let txt5 ="";
// for (let i = 0 ; i < 10 ;i++){
//     if(i === 3){ continue ; }
//     txt4 += i + "-"; 
// };
// console.log(txt5);

/////////  for let x of
let names = "javascript";
let myNames ="";
for(let x of names){
    myNames += x.toLocaleUpperCase() + "-" ;
};
console.log(myNames);

//////// for let x of 
let letters = ["a","b","c","d","e"];
let myLetters ="";
for(let x of letters){
    myLetters += x.toLocaleUpperCase() + "--" ;
};
console.log(myLetters);

///////
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  console.log(fruits);
