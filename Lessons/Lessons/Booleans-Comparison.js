console.log(Boolean(10 > 9));  //true
console.log(Boolean(10 < 9));  //false
//////////////////////////////////////
let x = 5;
console.log(x == 5); //true
console.log(x == 8); //false
console.log(x == "5"); //true
console.log(x === "5"); //false  value and type
console.log(x != 5); //false
console.log(x != "5"); //false
console.log(x !== 8); //true
/////////////////////////////////////
if(x > 3) text = "X is greater than three";
if(x < 3) text = "X is less than three";
console.log(text);
//////////////////////////////////////
//// && meanings AND
x = 15 ;
y = 9 ;
if(x > 10 && y > 8) text1 ="these are greater than 8";
console.log(text1); 
////  ||   meanings OR
if( x > 8 || y > 8) text2 ="anyone greater than 8";
console.log(text2);
////   !  meanings  NOT
console.log(x == y) // false
console.log(x !== y) // true

////////////////////////////////////////
age = 19;
let votable = (age < 18) ? "Too young":"Old enough";
console.log(votable);

degre = -7;
let checkDegre = (degre < 0) ? "cold":"heat";
console.log(checkDegre);

////////////////////////////////////////////
function myFunction(){
    let show;
    let cityDegre = Number(document.getElementById("degre").value) ;
    if(isNaN(cityDegre)){
        show = "the climat is good";
    }else{
        show = (cityDegre < 20) ? "cold": "heat";
    }
    document.getElementById("demo").innerHTML = show ;
};
///////////////////////////////////////////////
///////////   ??  
let names = null;
let textQ = "missing";
let result = names ?? textQ;
console.log(result);

///////////////////////////////////////////////
///////////   ?.  good searcher
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car?.type);// Fiat
console.log(car?.name);// undefined