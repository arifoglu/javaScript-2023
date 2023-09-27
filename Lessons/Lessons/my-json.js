//  JSON names require double quotes. JavaScript names do not.

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
console.log(text);
console.log(typeof text); // string

/// for transforme js object
const obj = JSON.parse(text);       // JSON.parse()

console.log(obj);
console.log(typeof obj);        //  Object { employees: (3) […] }

console.log(obj.employees)      //  Array(3) [ {…}, {…}, {…} ]
console.log(obj.employees[0]);  //  Object { firstName: "John", lastName: "Doe" }
console.log(obj.employees[0].firstName) // John

//////
const cars = '["Ford", "BMW", "Audi", "Fiat"]';
let carsList = JSON.parse(cars);
console.log(carsList);                   // Array 
console.log(carsList[0]);                // Ford 
console.log(carsList.includes("Ford")); // true 

////// 
const person = {name: "John", age: 30, city: "New York"};
console.log(typeof person); // object

const personJSON = JSON.stringify(person);
console.log(typeof personJSON) // string

///////////////////////////////////////////////////////////
////////////// Storing DATA ///////////////////////////////
const myObj = {name: "John", age: 31, city: "New York"};
const myJSON = JSON.stringify(myObj);
console.log(myJSON); // we transformed our datas to JSON string
localStorage.setItem("testJSON", myJSON);

//// Receving DATA
let infos = localStorage.getItem("testJSON");
let infosObj = JSON.parse(infos);
console.log(infosObj);
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////





