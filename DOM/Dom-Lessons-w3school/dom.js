/////////////////////// getElementById() ////////////////////////
//document.getElementById("demo").innerHTML = "Hello world";

const firstP = document.getElementById("intro");
document.getElementById("demo").innerHTML = "this word was taken from DOM " + firstP.innerHTML ;

/////////////////////// getElementsByTagName() //////////////

const secondP = document.getElementsByTagName("p");
document.getElementById("demo2").innerHTML = "this word was taken from DOM " +  secondP[0].innerHTML; // index value comes
document.getElementById("demo3").innerHTML = "this word was taken from DOM " +  secondP[1].innerHTML;
////
document.getElementById("last").innerHTML = "these are taken DOM" + "<br>" +
firstP.innerHTML + " / " + secondP[1].innerHTML + " / " + secondP[2].innerHTML + " / "+ secondP[3].innerHTML ;


/////////////////////// getElementsByClassName() //////////////
const thirdP = document.getElementsByClassName("program");
document.getElementById("myTitle").innerHTML = thirdP[0].innerHTML + " " +thirdP[1].innerHTML ;

/////////////////////////// FORMS ////////////////////////////////////
const x = document.forms["frm1"];
let text = "" ;
for(let i = 0 ; i < x.length ; i++){
    text += x.elements[i].value + " <br>"
};
document.getElementById("formResult").innerHTML = text ;

////
document.getElementById("myDate").innerHTML = "Date is " + Date();

/////////// FORM VALIDATION
function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if(x == ""){
        alert("YOU HAVE TO WRITE!");
        return false;
    }
}
////////// FORM VALIDATION
function myFunction(){
    let x = document.getElementById("numb").value;
    if(isNaN(x) || x < 1 || x > 10){
        text = "invalid";
    }else {
        text = "OK";
    };
    document.getElementById("result").innerHTML = text ;
};

////////////////////////////////////CHANGING CSS /////////////////////////
document.getElementById("myLine").innerHTML = "this line was added by me";
let myCss = document.getElementById("myLine").style ;
myCss.fontSize = "23px";
myCss.color = "black";

function myFunctionRed(){
    myCss.color = "red";
    document.getElementById("red").style.backgroundColor = "red";
};

function myFunctionBlue(){
    myCss.color = "blue";
    document.getElementById("blue").style.backgroundColor = "blue";
};

////////////////////////////////////DOM EVENTS////////////////////////

/////// onclick &&  this

function changeText(id){
    id.innerHTML = "ooops";
};
function myClick(id){
    id.style.backgroundColor = "green";
    id.style.color = "yellow";
    document.getElementById("myH2").innerHTML = "this is an event" + " " +
    Date();
};

///////   onclick()

function myClick2(){
    document.getElementById("myH2").innerHTML = Date()
}
document.getElementById("newBtn").onclick = myClick2;

//////    onclick()  

// on defini des variables
let firstStyle = document.getElementById("first").style;   
let secondStyle = document.getElementById("second").style;
let newPStyle   = document.getElementById("newP").style;
// on defini des functions
document.getElementById("first").onclick = ()=>
{
    firstStyle.backgroundColor = "red";
    newPStyle.color = "red";
    // racoursir pour if --  ()? result1 : result2
    // (secondStyle.backgroundColor === "blue")? secondStyle.backgroundColor = "white" : false ; 
   if(secondStyle.backgroundColor === "blue"){
       secondStyle.backgroundColor = "white";
   };
};
document.getElementById("second").onclick = ()=>
{
    secondStyle.backgroundColor = "blue";
    newPStyle.color = "blue";
    // racoursir pour if --  ()? result1 : result2
    // (firstStyle.backgroundColor === "red")? firstStyle.backgroundColor = "white" : false ; 
    if( firstStyle.backgroundColor === "red"){
        firstStyle.backgroundColor = "white"
    } ;
};

//////      onload() and onunload()
function myFontSize(){
    document.getElementById("myDiv").style.fontSize= "46px";
};

/////        onchange()
function myShape(){
    let x = document.getElementById("input1");
    x.value = x.value.toUpperCase();
};


