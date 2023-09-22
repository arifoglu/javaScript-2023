let a = 10 ;

a += 5;
console.log(a);
a -= 4;
console.log(a);    
a *= 5;
console.log(a);
a /= 11;
console.log(a);
a **= 3;
console.log(a);
a %= 100;
console.log(a);
//at the beginning a equal >25< after 30 after 26 
let firstOne = a+=5;
let secondOne= a-=4;
console.log(firstOne*secondOne)
let total = firstOne * secondOne ;
document.getElementById("myOperator").innerHTML = total;

let text1 = "bill"
let text2 = "takes"
let text3 = text1 + " " + text2 ;
console.log(text3);
text3 += "35ans"
console.log(text3);
//
let x = 5;
x++;
console.log(x);
let y = 4;
y--;
console.log(y);
let z = 6;
//exponentiation
let t = z**3;
console.log(t);

let d = 4;
let Myresult = Math.pow(d,4);
console.log(Myresult);
