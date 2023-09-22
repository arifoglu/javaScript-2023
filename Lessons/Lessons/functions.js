function myfunction1(p1,p2){
    return p1 * p2
}
function myfunction2(p1,p2,p3){
    return (p1 + p2)/p3
}


let x = myfunction1(6,4);
let y = myfunction2(6,9,5)
document.getElementById("demo").innerHTML = x;
document.getElementById("demo2").innerHTML = y;
document.getElementById("demo3").innerHTML = x * y ;


function myfunction3(f){
    return (5/9) * (f-32)
}
let myDegre = myfunction3(105)
document.getElementById("heat").innerHTML = myDegre + "°";
//you can write directly function in the code 
document.getElementById("heat2").innerHTML = myfunction3(25) + "°";

let calcul = (p1,p2)=> p1 * p2;
console.log(calcul(3,8));

