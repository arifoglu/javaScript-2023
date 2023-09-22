let myDate = new Date();

///// short if writing    ()? "":""
let showDate = myDate.getDate();
let x = (showDate < 15) ? "begining of the september":"end of the september";
console.log(x);

//////
let showHours =myDate.getHours();
console.log(showHours);
if (showHours < 10){
    console.log("afternoon");
}else if (showHours < 20) {
    console.log("good day");
} else {
    console.log("good morning");
};
////////////////////////////////////
let day ;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  };
  console.log(day);

///////////////////////////////////
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text = "";
for (let i = 0 ; i < cars.length ; i++){
  text += cars[i] + "<br>"
};
document.getElementById("demo").innerHTML = text;

///////////////////////////////////////
let Numbers = "";
for(let i = 0 ; i < 10 ; i++){
  Numbers += "this is a number" + i + "<br>";
};
console.log(Numbers);
for(let i = 9;  i < 15 ; i++){
  console.log(i);
};

////////////////////////////////////////// for in
const person = {fname:"John", lname:"Doe", age:25};
let myList ="";
for(let x in person){
  myList += person[x];
};
console.log(myList);

const numbers = [45, 4, 9, 16, 25];
let myNumbers ="";
for(let x in numbers){
  myNumbers += numbers[x];
};
console.log(myNumbers);
//////////////////////////////////////////
let myNumbers2 ="";
numbers.forEach(myFunction);
function myFunction(p){
  myNumbers2 += p + 5 +"/";
};
console.log(myNumbers2)
//////////////////////////////////////////
let myNames =["marie","john","pierre","dolly","gerard","sarah"];
let myNamesShow ="";
myNames.forEach(myFunctionList);
function myFunctionList(){
  myNamesShow += myNames + "<br>";
};
document.getElementById("demo").innerHTML = myNamesShow;
console.log(myNamesShow);


////////////////////////////////////////for of 















