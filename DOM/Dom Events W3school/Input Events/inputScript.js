///////////////////////// DOM input events

//// onblur
let input1 = document.querySelector("#fname");
console.log(input1);

 input1.onblur = ()=>{
    input1.value = input1.value.toUpperCase();
 };

 //// onchange
 let input2 = document.querySelector("#fname2");
 console.log(input2);

 input2.onchange = ()=>{
    input2.value = input2.value.toUpperCase();
 };

 //// onfocus
 let input3 = document.querySelector("#fname3");
 console.log(input3);

 input3.onfocus = ()=>{
    input3.style.backgroundColor = "yellow";
 };

//// onselect
let input4 = document.querySelector("#fname4");
console.log(input4);

input4.onselect = ()=>{
    alert("some text selected");
};

//// onsubmit in the Forms
let formSubmit = document.querySelector("#form1");
console.log(formSubmit);

let input5 = document.querySelector("#fname5");
console.log(input5);

formSubmit.onsubmit =()=>{
    let myInputValue = input5.value;
    alert( myInputValue);
};

//// onreset works automatic
let formSubmit2 = document.querySelector("#form2");
console.log(formSubmit2);

//// onkeydown       << simultaneous shows input on the screen>>
let input7 = document.querySelector("#fname7");
console.log(input7);

input7.onkeydown = ()=>{
   document.querySelector("#demo2").innerHTML = input7.value;
};

//// onkeypress 
let input8 = document.querySelector("#fname8");
console.log(input8);

input8.onkeypress = ()=>{
   document.querySelector("#demo3").innerHTML = input8.value;

}
////  onkeyup and onkeydown
let input9 = document.querySelector("#fname9");
console.log(input9);

input9.onkeyup =()=>{
   input9.style.backgroundColor = "white";

   input9.onkeydown =()=>{
      input9.style.backgroundColor = "yellow"
   };
};





















