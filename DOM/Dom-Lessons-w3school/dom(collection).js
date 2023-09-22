/////////    HTML COLLECTION
let myP = document.getElementsByTagName("p");
//console.log(myP);      HTMLCollection { 0: p, 1: p, 2: p#demo, length: 3} ;
console.log(typeof myP)   // object
console.log(myP[0]);      // <p>
console.log(myP[1]);     // <p>
console.log(myP[2]);     // <p id="demo">
console.log(myP.length)  // 3

for(let i =0; i < myP.length ;i++){
    myP[i].style.color = "red";
};

///////////  HTML NODEList
const myP2 = document.querySelectorAll("p");
// console.log(myP2);      NodeList(3) [ p, p, p#demo ]
console.log(typeof myP2);  // object
console.log(myP2[2]);      // <p id="demo" style="color: red;"></p>
console.log(myP2.length); // 3