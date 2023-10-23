// // if user click on  any button, the result display on the screen
// // i will  put 10 button in  html code .
// // i will  hide this person to 7.vagon
// // if user click on compartiment 7 the result (congratulations) will write on the screen
// // if user click on the others button the results will change

// variables
window.onload = function(){


let  clicks = 0 ;
let result = document.getElementById("result");
let result2 = document.getElementById("clicksnumber");


 let btn1 = document.getElementById("vg1");
 //console.log(btn1);
 btn1.onclick = function(){
    clicks += 1;
    result.innerHTML = "You didnt find it He is far away" + "<br>" + clicks ;
    this.style.backgroundColor = "red";
    if (clicks > 3)
   result2.innerHTML = "GAME OVER AHMET HAS GONE";
    if (clicks > 4)
    alert("!!!DONT TRY IT!!! ");
 }
 let btn2 = document.getElementById("vg2");
 //console.log(btn1);
 btn2.onclick = function(){
    clicks += 1;
    result.innerHTML = "You didnt find it He is far away" + "<br>" + clicks ;
    this.style.backgroundColor = "red";
    if (clicks > 3)
   result2.innerHTML = "GAME OVER AHMET HAS GONE";
    if (clicks > 4)
    alert("!!!DONT TRY IT!!! ");
 }
 let btn3 = document.getElementById("vg3");
 //console.log(btn1);
 btn3.onclick = function(){
    clicks += 1;
    result.innerHTML = "You didnt find it He is far away" + "<br>" + clicks ;
    this.style.backgroundColor = "red";
    if (clicks > 3)
   result2.innerHTML = "GAME OVER AHMET HAS GONE";
    if (clicks > 4)
    alert("!!!DONT TRY IT!!! ");
 }
 let btn4 = document.getElementById("vg4");
 //console.log(btn1);
 btn4.onclick = function(){
    clicks += 1;
    result.innerHTML = "You didnt find it but he can be near" + "<br>" + clicks ;
    this.style.backgroundColor = "yellow";
    if (clicks > 3)
   result2.innerHTML = "GAME OVER AHMET HAS GONE";
    if (clicks > 4)
    alert("!!!DONT TRY IT!!! ");
 }
 let btn5 = document.getElementById("vg5");
 //console.log(btn1);
 btn5.onclick = function(){
    clicks += 1;
    result.innerHTML = "You didnt find it but he can be near" + "<br>" + clicks ;
    this.style.backgroundColor = "yellow";
    if (clicks > 3)
   result2.innerHTML = "GAME OVER AHMET HAS GONE";
    if (clicks > 4)
    alert("!!!DONT TRY IT!!! ");
 }
 let btn6 = document.getElementById("vg6");
 //console.log(btn1);
 btn6.onclick = function(){
    clicks += 1;
    result.innerHTML = "You didnt find it but he can be near" + "<br>" + clicks ;
    this.style.backgroundColor = "yellow";
    if (clicks > 3)
   result2.innerHTML = "GAME OVER AHMET HAS GONE";
    if (clicks > 4)
    alert("!!!DONT TRY IT!!! ");
 }
 let btn7 = document.getElementById("vg7");
 //console.log(btn1);
 btn7.onclick = function(){
    clicks += 1;
    result.innerHTML = "<strong>!!!Congratulations You found it !!!" ;
    this.style.backgroundColor = "rgb(79, 238, 79)";
     if (clicks > 4)
    alert("!!!DONT TRY IT!!! ");
 }
 let btn8 = document.getElementById("vg8");
 //console.log(btn1);
 btn8.onclick = function(){
    clicks += 1;
    result.innerHTML = "You didnt find it but he can be near" + "<br>" + clicks ;
    this.style.backgroundColor = "yellow";
    if (clicks > 3)
   result2.innerHTML = "GAME OVER AHMET HAS GONE";
    if (clicks > 4)
    alert("!!!DONT TRY IT!!! ");
 }
 let btn9 = document.getElementById("vg9");
 //console.log(btn1);
 btn9.onclick = function(){
    clicks += 1;
    result.innerHTML = "You didnt find it but he can be near" + "<br>" + clicks ;
    this.style.backgroundColor = "yellow";
    if (clicks > 3)
   result2.innerHTML = "GAME OVER AHMET HAS GONE";
    if (clicks > 4)
    alert("!!!DONT TRY IT!!! ");
 }
 let btn10 = document.getElementById("vg10");
 //console.log(btn1);
 btn10.onclick = function(){
    clicks += 1;
    result.innerHTML = "You didnt find it but he can be near" + "<br>" + clicks ;
    this.style.backgroundColor = "yellow";
    if (clicks > 3)
   result2.innerHTML = "GAME OVER AHMET HAS GONE";
    if (clicks > 4)
    alert("!!!DONT TRY IT!!! ");
 }


/*
/// this part of code was created by AI

let  clicks = 0 ;
 const hideVagon = Math.floor(Math.random() * 10) + 1;

 // We select all vagons

 const vagons = document.querySelectorAll('.vagon');

 // we create for loops

 vagons.forEach(function (vagon, index) {
     vagon.addEventListener('click', function () {
         if (index + 1 === hideVagon) 
         {
             vagon.style.backgroundColor = 'green';
             alert('You found him');
         } 
         else 
         {
             vagon.style.backgroundColor = 'red';
         }
     });
 });
 */

}