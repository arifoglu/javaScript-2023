try{
    adlert("welcome!")
}
catch(err){
    document.getElementById("demo").innerHTML = err.message;
}
// adlert not defined

////         this()

const personA = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullNameA : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(personA.firstName);     //  "John"
  console.log(personA.lastName);     //   "Doe"
  console.log(personA.fullNameA());   //   "John Doe"

  ////        call()

  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  const person = {
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName.call(person2)); // Mary Doe