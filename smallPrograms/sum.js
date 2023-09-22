document.getElementById("js_part2").style.fontSize = "20px";

let numeros = [0,4,9,16,25,36,49,64,81,100];

document.getElementById("demo").innerHTML = `let numeros= [${numeros}]`

//  sum
let numerosLength = numeros.length;
let sum = 0;
let numerosSum = numeros.forEach(num => {sum += num})

document.getElementById("demo2").innerHTML = `length = 
${numerosLength}`;
document.getElementById("demo3").innerHTML = `sum = 
${sum}`;
document.getElementById("demo4").innerHTML = `average = 
${sum / numerosLength }`;
console.log(sum);

// 


