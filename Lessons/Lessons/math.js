////////////////////// Math.property()
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
console.log(Math.round(4.6)) // 5 
console.log(Math.ceil(4.1)) // 5
console.log(Math.floor(4.9)) // 4
console.log(Math.sign(4)) // 1 
console.log(Math.pow(3,4)) /// 81 
console.log(Math.sqrt(81)) // 9
console.log(Math.min(0, 150, 30, 20, -8, -200));// -200
console.log(Math.max(0, 150, 30, 20, -8, -200));// 150
console.log(Math.random());
console.log(Math.log2(32)); // 5 
console.log(Math.log10(1000)); // 3 
///////////////////////////////////////
// Returns a random integer from 0 to 9:
let myRandom = Math.floor(Math.random() * 10)
console.log(myRandom);
// Returns a random integer from 0 to 10:
let myRandom2 = Math.floor(Math.random() * 11)
console.log(myRandom2);
////////////
function  myFunction(min,max){
    return Math.floor(Math.random() * (max -min) + min);
};
function myClick(){
 return document.getElementById("demo").innerHTML = myFunction(0,10);

}
console.log(myFunction(0,10));