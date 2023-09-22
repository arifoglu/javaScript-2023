///////////////////////new Date() method
let showTime = new Date();
//Tue Sep 05 2023 09:39:28 GMT+0200 (heure d’été d’Europe centrale);
console.log(showTime);

let showTime2 = new Date(2019,10,3,10,45,36); //specificly we can adjust
//Sun Nov 03 2019 10:45:36 GMT+0100 (heure normale d’Europe centrale);
console.log(showTime2); 

//Tue Sep 05 2023
console.log(showTime.toDateString());//

console.log(showTime.toUTCString());//

//////////////////////////// getDate()
let showTime3 = new Date();
console.log(showTime3.getDate());
console.log(showTime3.getMinutes());
console.log(showTime3.getUTCFullYear());

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let m = new Date();
console.log(months[m.getMonth()]);
console.log(days[m.getDay()]);

/////////////////////////////////setDate()

let d = new Date();
d.setFullYear(1998,12,23);
console.log(d);

/// this does not work i dont know why
let myText ="";
const today = new Date();
const someday =new Date();
someday.setFullYear(2100,0,14);

function myFunction(){
   if (someday > today) {
        myText = "Today is before January 14, 2100.";
      } else {
        myText = "Today is after January 14, 2100.";
      }
      return  
};
console.log(myFunction());