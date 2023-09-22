function changeText(id){
    id.innerHTML = "ooops!";
};
function myClick(){
    document.getElementById("myBtn").style.fontSize = "20px";
}
function myUpperCase(){
    let x = document.getElementById("fname");
    x.value =x.value.toUpperCase();
};
////    onmouseover()
function myOver(id){
    id.innerHTML = "merci"
};
////     onmouseout()

function myOut(id){
    id.innerHTML = "bye"
};
///      onmousedown()

function myDown(obj){
    obj.style.backgroundColor = "red";
};
///      onmouseup()

function myUp(obj){
    obj.style.backgroundColor = "#DA94A38";
};

////     onfocus()
function myFocus(id){
    id.style.backgroundColor = "yellow";
};

///////////////////////////// HTML DOM EventListener
let myTime = new Date();
document.getElementById("event").addEventListener("click",()=>{ 
document.getElementById("demo").innerHTML = myTime;
});
// "click"
document.getElementById("event2").addEventListener("click",()=>{
    alert("fait attention!!!");
});

document.getElementById("event2").addEventListener("mouseover",()=>{
    document.getElementById("demo2").innerHTML = myTime;
});

// "resize"
window.addEventListener("resize",()=>{
    document.getElementById("demo3").innerHTML = Math.random();
})
//
let firstInput = document.getElementById("firstName").value;
let secondInput = document.getElementById("lastName").value;

document.getElementById("myButton").addEventListener("click",function(){
    myFunction(firstInput,secondInput);
});
function myFunction(a,b){
    document.getElementById("showNames").innerHTML = a + b ;
};

/// removeEventListener()
let newTime = new Date();
console.log(newTime);
 