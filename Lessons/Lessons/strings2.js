let text = "this text four words"
console.log(text.length);

let fruits = "apple,banana,kiwi"
let part1 = fruits.slice(0,5);
let part2 = fruits.slice(6);
let part3 = part1 + "," + part2;
console.log(part3);

let part4 =fruits.substring(0,5);
console.log(part4)

let explication = "This is reel"
let newExplication = explication.replace("reel","NOT REEL");

console.log(newExplication);

document.getElementById("demo").innerHTML = explication ;


function myFunctionExplication(){
    let lastPhrase = document.getElementById("demo").innerHTML = newExplication ;

    return lastPhrase;
}
/////////////////////////////////////////////
//  replaceALL()
let animals = "cat_white,cat_blue,cat_red,dog_white,dog_blue,bird_white,bird_blue,bird_red"
let newAnimals = animals.replaceAll(/cat/g,"CAT");
console.log(newAnimals);

//  toUpperCase() toLoverCase
let animals2 = "cat_white,cat_blue,cat_red,dog_white,dog_blue,bird_white,bird_blue,bird_red"
let animalsUpper = animals2.toUpperCase();
console.log(animalsUpper);
let animalsNamesLover =animalsUpper.toLowerCase();
console.log(animalsNamesLover);
/// concat()  joins two or more strings:
let text1 = "hi";
let text2 = "salut";
let text3 = text1.concat(" ",text2);
console.log(text3.toUpperCase());

// trim()  method removes whitespace from both sides of a string:
let textpart1 = "      bonjour       ";
let textpart2 = "      salutation       ";
console.log(textpart1.length,textpart2.length);
let textpart3 = textpart1.trim();
let textpart4 = textpart2.trimEnd
();
console.log(textpart3.length,textpart4.length);

//// padStart() padEnd()
let numero = "3301228";
let numeroDisplay = numero.padStart(11,"+41 ");
console.log(numeroDisplay);

let chiffre = "555666";
let chiffreOk = chiffre.padEnd(10,"0");
console.log(chiffreOk);

let totalApplicants = 45;
let totalApplicantsDisplay = totalApplicants.toString();
console.log(typeof totalApplicantsDisplay);
let Display1 = totalApplicantsDisplay.padStart(5,"000");
let Display2 = totalApplicantsDisplay.padEnd(5,"---")
console.log(Display1);
console.log(Display2);

/// charAt()
let salutem = "bonjour a tout"
let detection = salutem.charAt(13);
console.log(detection);
let detectionNew = salutem[12];
console.log(detectionNew);

/// split() 
// from a string to Array and different changement 
let lettres = "a,b,c,d,e,f,g,h,j,k,l,m"
let lettresArray = lettres.split(",");
console.log(lettresArray);
console.log(lettresArray[0].toUpperCase().padEnd(3,"++"));
console.log(lettresArray[1].toUpperCase().padStart(2,"+"));

// indexOf()
let textOne = "Ce ligne a été fait par js"
let myIndex = textOne.indexOf("été");
console.log(myIndex);

console.log(textOne.indexOf("lignet"));

console.log(textOne.indexOf("é",15));

console.log(textOne.search("gn"));
