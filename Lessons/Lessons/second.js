
let x , y ,z ;
x = 5;
y = 7;
z = x + y;

document.getElementById("paragraph").style.fontSize="24px";
document.getElementById("demo").innerHTML= z + ".";
console.log(z);
///
let a , b , c ;
a = 15 ;
b = 10 ;
c = 3 ; 
document.getElementById("paragraph2").innerHTML = 5 + 5 + a ;
document.getElementById("paragraph2").innerHTML = a + z ;
document.getElementById("paragraph3").innerHTML = "five" + "+" + "seven" + "=" + z ;
console.log(a+z);
console.log((a + b + 2 )/c )
console.log((a * c + b)/5 + (c))

const price1 = 50 ;
const price2 = 40 ;
let total = price1 + price2;
console.log("this price is :" + total );

// - , / , * these works just as algebra seulement "+" does not work   // 
let as = 3 ;
let sa = "33";
let mytotal =  sa + as ;
let mytotal1 = sa - as ;
let mytotal2 = sa * as ;
let mytotal3 = sa / as ;
console.log(mytotal);
console.log(mytotal1);
console.log(mytotal2);
console.log(mytotal3);



let carName  =  "volvo" , 
    person   =  "jane" ,
    caryears =  "2023" ,
    color;
    
document.getElementById("cars").innerHTML = "carname :" + carName + "<br>" + "person :" + person + "<br>" + "caryears :" + caryears + "<br>" + color ;

const myCars = ["saab" ,"volvo" ,"bmw"]
console.log(myCars);
myCars[0] = "toyota"
myCars[1] = "toyota"
myCars[2] = "toyota"
console.log(myCars);

