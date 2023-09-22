let text1 = `Hello World "salut!"`;
console.log(text1);
let firstName = "john";
let lastName = "volta";
let myList = `welcome ${firstName},${lastName}`;
console.log(myList);

///// html templates
let news = "Salut"
let myTitle = `<h1>${news}</h1>`;
document.getElementById("demo").innerHTML = myTitle;