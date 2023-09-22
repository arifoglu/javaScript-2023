
//// we can also defined after a array
const array1 = [];
array1[0] = "apple";
array1[1] = "banana";
array1[2] = "kiwi";
console.log(array1);


/// we can create with <<<<new>>>>> new array 
const array2 = new Array("apple-fresh","banana-fresh","kiwi-fresh");
console.log(array2);

/////par exemple we added these vairables to new array3
let firstOne = "melon";
let secondOne = "lemon";
let lastOne = "grape";
const array3 = new Array(firstOne,secondOne,lastOne);
console.log(array3);
console.log(array3[2]); // grape
/// we can change or add new fruits
array3[2] = "grape-fresh";
console.log(array3[2]); // grape-fresh

////// toString() from Array to String /////////////////////

let fruitsSuisse = ["abricot","raisin","prune"];
let fruitsSuisseNames = fruitsSuisse.toString();
console.log(fruitsSuisseNames);

///////// length   
console.log(fruitsSuisse.length);
console.log(fruitsSuisse[1]);
console.log(fruitsSuisse[fruitsSuisse.length -1]); // last element  >length-1<

////// for loop  examples
let fruitTotal = fruitsSuisse.length;
let list1 ="<ol>";
for (let i = 0 ; i < fruitTotal ;i++){
    list1 += "<li>" + fruitsSuisse[i] + "</li>";
} list1 += "</ol>";

document.getElementById("fruitSuisse").innerHTML = list1 ;


////////////////////////////////////////////////////////
let fruitsEspagne =["avocat","peach","strawberry"];
let flen = fruitsEspagne.length;
let text = "<ul>";
for (let i = 0; i < flen ; i++){
    text += "<li>" + fruitsEspagne[i] + "</li>";
}  
text += "</ul>";

document.getElementById("fruitEspagne").innerHTML = text ;
///////////////////////////////////////////////////////////

let legumeSuisse = ["tomates","patato","onion"];
let legumeFlen = legumeSuisse.length;

let list2 ="<ul>";
for (i = 0 ; i < legumeFlen ; i++){
    list2 += "<li>" + legumeSuisse[i] + "</li>";
} list2 += "</ul>";
document.getElementById("legumeSuisse").innerHTML = list2 ;

////////////////////////////////////////////////////////////

let fruitItaly = ["mango","ananas","peach"];
function myFunction(p1){
    myList += "<li>" + p1 + "</li>";
};
let myList ="<ul>";
fruitItaly.forEach(myFunction);
myList += "</ul>";
document.getElementById("fruitItaly").innerHTML = myList;

/////////////////////////////////////////////////////////////
////// Array.isArray() we can verifiy with this method//////
console.log(typeof fruitItaly);
console.log(Array.isArray(fruitItaly));
const Names ={
    firstName : "sali",
    lastName : "dali",
};
console.log(typeof Names);
console.log(Array.isArray(Names));

//////////////////////////////////////////////////////////////
 
////// join() from Array to string with separator " "
document.getElementById("demo").innerHTML = fruitItaly.join("-----");

////// push() added
fruitItaly.push("ORANGE"); /// orange added  
console.log(fruitItaly);
//['mango', 'ananas', 'peach', 'ORANGE']

////// pop()  removed last element of Array
fruitItaly.pop();   /// orange removed
console.log(fruitItaly);
//['mango', 'ananas', 'peach']

///// shift() removed first element of Array
fruitItaly.shift(); // mango removed
console.log(fruitItaly);
//['ananas', 'peach']

///// unshift() added first element 
fruitItaly.unshift("mango");
console.log(fruitItaly);  // mango added
//['mango', 'ananas', 'peach']

///// concat() merge two or more Array
let fruitEurope = fruitItaly.concat(fruitsEspagne,fruitsSuisse);
console.log(fruitEurope);  // 3 array has merged
//['mango', 'ananas', 'peach', 'avocat', 'peach', 'strawberry', 'abricot', 'raisin', 'prune']


//// splice() added new items into Array
fruitEurope.splice(3,0,"THIS PART");  /// 3 is position 0 is for removed
console.log(fruitEurope); 
//['mango', 'ananas', 'peach', 'THIS PART', 'avocat', 'peach', 'strawberry', 'abricot', 'raisin]

///// slice() this methodes create new Array
let mySlice = fruitEurope.slice(3); 
console.log(mySlice);
let mySlice2 = fruitEurope.slice(4,7);
console.log(mySlice2);

///////// sort()  sorts alphabetically
console.log(fruitEurope.sort());
/// reverse() 
console.log(fruitEurope.reverse());
//////for sort we can use this function
let points1 =[20,30,40,5,10,100];
let use1 = (a,b)=> {return (a - b)}; //we add this function
console.log(points1.sort(use1));

console.log(points1[0]);                 /// lowest values  5
console.log(points1[points1.length-1]); //// highest values 100

///// Math.max.apply()  Math.min.apply()
let use2 = (arr)=> {return Math.max.apply(null,arr)};
let use3 = (arr)=> {return Math.min.apply(null,arr)}
console.log(use2(points1));   //// highest values 100     
console.log(use3(points1));   /// lowest values  5

////////////////////////////
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
let myCarList = (a,b)=> {return a.year - b.year};
console.log(cars.sort(myCarList));

//////////////////// map()        flatMap()
const numbers1 = [45, 4, 9, 16, 25];
function myMap(value,index,array){return value * 2 }
const numbers2 =numbers1.map(myMap);
console.log(numbers2);
const numbers3 = numbers1.flatMap((x)=> x * 3);
console.log(numbers3);
const numbers4 = numbers1.map((p) => p * 4 );
console.log(numbers4);

//////////////////// filter()
const childList = numbers1.filter((p)=> p < 18);
const adultList = numbers1.filter((p)=> p > 18);
const oldAgeList = numbers1.filter((p,index)=> p > 4 && index > 3);// two parameters
const theAgeList = numbers1.filter((p,index)=> p > 18 && index < 3);

console.log(childList);
console.log(adultList);
console.log(oldAgeList);
console.log(theAgeList);

///////////////////// every() detected  true or false 
const oldest = numbers1.every((p)=> p > 60);
console.log(oldest);

//////////////////// some()   detected true or false
const oldest2 = numbers1.some((p)=> p > 18);
console.log(oldest2);

////////////////////// indexOf() position of element in the array
console.log(numbers1.indexOf(25));
//////////////////////  lastIndexOf()
console.log(numbers1.lastIndexOf(4));

//////////////////////// find() 
let myFind = numbers1.find((p)=> p < 10 );
console.log(myFind);

//////////////////////// Array.from() to create an array
let myList2 = Array.from("ABCD");
console.log(myList2);

////////////////////////Array.includes()
console.log(numbers1.includes(4)); /// true
console.log(numbers1.includes(2)); /// false

//////////////////////// ... spread //////////////////
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const myTotal = [...q1,...q2,...q3,...q4];
console.log(myTotal);

////////////////////////////
const voitures = ["Audi", "Mazda", "BMW"];    
console.log(voitures[1]);
















