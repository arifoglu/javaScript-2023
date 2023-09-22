
let myTitle = document.getElementById("demo").innerHTML;
console.log(myTitle);

let myTitle2 = document.getElementById("demo").firstChild.nodeValue;
console.log(myTitle2);

let myTitle3 = document.getElementById("demo").childNodes[0].nodeValue;
console.log(myTitle3);

////   document.body    ===    document.documentElement
document.getElementById("demoP").innerHTML = document.body.innerHTML;
document.getElementById("demoP2").innerHTML = document.documentElement.innerHTML;

//// nodeName    tags names seems
console.log(document.getElementById("demoP").nodeName);    //  P
console.log(document.getElementById("demo").nodeName);    //   TITLE

///  nodeValue    
console.log(document.getElementById("demoP").nodeValue);    //   null

///
console.log(document.getElementById("demoP").nodeType);    //   null


//////////////////////////////// create new element by JS node
const paragraf =document.createElement("p");
const node = document.createTextNode("this  is new line ");
paragraf.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(paragraf);

////// remove()
const elmnt =document.getElementById("myH6");
elmnt.remove();