///////////////////////JAVASCRIPT ////////////////////////////
document.getElementById("js_part1").style.fontSize = "22px"
//
let legumes = ["poivron","tomate","pomme dt","aubergine","courgette","champignon"];
document.getElementById("legumeArray").innerHTML = "let legumes = " + " [ "  + legumes  +  " ] " ;

/////////////////////// DIFFERENTS METHODS //////////////////
// length
let legumesTotal = legumes.length;
console.log(legumesTotal);
document.getElementById("demo").innerHTML = "<strong>length()</strong> " + "legumes length :" + " "  + legumesTotal;

//  toString()
let legumesList = legumes.toString();
console.log(legumesList);
document.getElementById("demo2").innerHTML ="<strong>toString()</strong> " + "legumes STRING :" + " "  + legumesList;

//   join()
let legumesList2 = legumes.join(" - ");
console.log(legumesList2);
document.getElementById("demo3").innerHTML ="<strong>join()</strong> " + "legumes STRING and added (-) :" + " "  + legumesList2;


//   toUpperCase
let legumesListUpper = legumes.toString().toUpperCase();
console.log(legumesListUpper);
document.getElementById("demo4").innerHTML = "<strong>toUpperCase()</strong> " + "legumes STRING and UPPERCASE :" + " "  + legumesListUpper;

//   Math.random() et Math.floor()

let myRandom = Math.random();
console.log(myRandom);
document.getElementById("demo5").innerHTML = "<strong>Math.random()</strong> " + "Ce numero est choisi aléatoir = " +  myRandom  + " / " + "cette fois  on a transformé integer" + " = "+ Math.floor(myRandom * 10) ;

let legumesRandom = legumes[Math.floor(Math.random()* legumes.length)]
console.log(legumesRandom);
document.getElementById("demo6").innerHTML ="<strong>Math.floor()</strong> " + "Ce legume est chosi aléatoir = " + legumesRandom ;

//   includes()
document.getElementById("demo7").innerHTML ="<strong>includes()</strong> " + "Ce legume exist =" + `${legumesRandom}` + " / "  + legumes.includes("tomate") ;
console.log(legumes.includes(`${legumesRandom}`));

//   sort()
let legumeSort = legumes.sort();
document.getElementById("demo8").innerHTML ="<strong>sort()</strong> " + "List trié par sort = " + "[" + legumeSort + " ] ";
console.log(legumeSort);
 //  push()
 let legumeNew = legumes.push("PASTEQUE");
 console.log(legumes);
 document.getElementById("demo9").innerHTML ="<strong>push()</strong> " + "-Pasteque- est mis = " + "[" + legumes + " ] ";
 //   pop()
 let legumePop = legumes.pop("PASTEQUE");
 document.getElementById("demo10").innerHTML ="<strong>pop()</strong> " + "-Pasteque est enlevé = " + "[" + legumes + " ] ";
//    shift()  
let legumeShift = legumes.shift();
document.getElementById("demo11").innerHTML ="<strong>shift()</strong> " + "Premier élément est enlevé = " + "[" + legumes + " ] ";
console.log(legumes)

//   unshift()
let legumeUnshift = legumes.unshift(`${legumeShift}`);
document.getElementById("demo12").innerHTML ="<strong>unshift()</strong> " + "Premier élément est mis = " + "[" + legumes + " ] ";
console.log(legumes)
 // concat()
let fruits = ["melon","lemon","prune","raisin"];
let legumes_fruits = legumes.concat(fruits);
document.getElementById("demo13").innerHTML ="<strong>concat()</strong> " + "Deux list est composé = " + "[" + legumes_fruits + " ] ";
console.log(legumes_fruits);

// reverse()
let  legumes_fruitsReverse= legumes_fruits.reverse()
document.getElementById("demo13").innerHTML ="<strong>reverse()</strong> " + "List est reversé = " + "[" + legumes_fruits + " ] ";
console.log(legumes_fruitsReverse);

// indexOf()
let listIndex = legumes_fruitsReverse.indexOf(`${legumesRandom}`);
document.getElementById("demo14").innerHTML ="<strong>indexOf()</strong> " + `<strong> ${legumesRandom} </strong>` + " index = " + listIndex ;
console.log(listIndex);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

