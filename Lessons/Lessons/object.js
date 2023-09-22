const person = {
    firstname : "dave",
    lastname  : "gandalf",
    age       : 35,
    eyecolor  : "blue" ,
}
document.getElementById("demo").innerHTML = "this person's information are" + person.firstname + person.lastname + person.age + person.eyecolor ;
console.log(person);
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
//two types of write for acceder an object properties of the object
console.log(person["age"]);
///////////
const family = {
    firstchild  : "leo",
    secondchild : "meo",
    lastnames   : "golfrey",
    school      : "mauverney",
    fullinfo    : function myInfo(){
        return this.firstchild + " "+this.secondchild + " " + this.lastnames + " " + this.school;
    }
}
console.log(family.firstchild);
console.log(family["firstchild"]);
console.log(family.fullinfo());
//////object
const fruits ={
    banana : 3 ,
    kiwi   : 5 ,
    melon  : 7 ,
    strawberry : function  functionFruit(){
        return (this.banana * this.kiwi) + this.melon ;
    },
    list : ["banana","kiwi","melon"]   
}
console.log(fruits.banana);
console.log(fruits.strawberry());
console.log(fruits["kiwi"]);
document.getElementById("demo").innerHTML = fruits.strawberry();
console.log(fruits);
console.log(fruits.list[1])


/// array 
const fruit = ["banana","kiwi","melon"]
console.log(fruit[0],fruit[2]);








