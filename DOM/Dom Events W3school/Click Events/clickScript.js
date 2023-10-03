//
//// onclick
let btn1 = document.querySelector("#ShowDate");
console.log(btn1);

btn1.onclick = ()=>{
    document.querySelector("#demo1").innerHTML = Date();
};
btn1.ondblclick = ()=>{
    document.querySelector("#demo1").style.color = "red";
};
