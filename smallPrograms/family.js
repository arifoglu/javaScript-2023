window.onload = function(){
    const families = [
        {
           firstname: "Kevin",
           lastname: "Doe",
           partner: "Lauora",
           childrens: [
              {
                 name: "Mike",
                 age: 8,
                 gender: "boy"
              },
              {
                 name: "Sue",
                 age: 6,
                 gender: "girl"
              },
           ],
           salary: 4000,
        },
        {
           firstname: "Gerard",
           lastname: "Dufford",
           partner: "Elsa",
           childrens: [
              {
                 name: "Melissa",
                 age: 11,
                 gender: "girl"
              },
              {
                 name: "David",
                 age: 6,
                 gender: "boy"
              },
           ],
           salary: 6000,
        },
        {
           firstname: "Jack",
           lastname: "Dorsey",
           partner: "Catherine",
           childrens: [
              {
                 name: "Tom",
                 age: 2,
                 gender: "boy"
              },
              {
                 name: "Michael",
                 age: 6,
                 gender: "boy"
              },
           ],
           salary: 5500,
        },
        {
           firstname: "Mourad",
           lastname: "Hassan",
           partner: "Leila",
           childrens: [
              {
                 name: "Haroon",
                 age: 15,
                 gender: "boy"
              },
              {
                 name: "Samiya",
                 age: 13,
                 gender: "girl"
              },
           ],
           salary: 5300,
        },
        {
           firstname: "Paul",
           lastname: "Dorade",
           partner: "Marie",
           childrens: [
              {
                 name: "Teo",
                 age: 8,
                 gender: "boy"
              },
           ],
           salary: 3000,
        },
        {
           firstname: "Salomon",
           lastname: "Hayko",
           partner: "Selma",
           childrens: [
              {
                 name: "Monica",
                 age: 4,
                 gender: "girl"
              },
           ],
           salary: 7000,
        },
     ];
    
     /////// we will show list in the Html page
     let personList = document.querySelector("#show");
     // console.log(personList);
     personList.onclick = ()=>{
        document.querySelector("article").style.display = "block"
     };
     personList.onmouseout = ()=>{
      document.querySelector("article").style.display = "none"
     };

     ///////    we will find salary more than 5000
     let highSalaryPerson = families.filter((person)=> person.salary > 5000)
                                    .map((person)=>    person.firstname + " " + person.lastname  + "<br> ")
     ;
     //console.log(highSalaryPerson);
    
     let btn1 = document.querySelector("#buttonSalary");
     // console.log(btn1);
     btn1.onclick =()=>{
        document.querySelector("#listSalary").innerHTML = highSalaryPerson;
     };
     btn1.onmouseout =()=>{
        document.querySelector("#listSalary").innerHTML = " ";
     };
    
    
     ///////     we will find chidrens boys
     let boysChildren = families.map((pChild)=> pChild.childrens.filter((pchild)=> pchild.gender == "boy")
                                .map((pchild)=> pchild.name )) // map create new array
                                    
     ;
    // console.log(boysChildren);
    
     let btn2 = document.querySelector("#buttonBoys");
     //console.log(btn2);
     btn2.onclick =()=>{
        document.querySelector("#listBoy").innerHTML += boysChildren;
     };
     btn2.onmouseout =()=>{
        document.querySelector("#listBoy").innerHTML = " ";
     };
    
    
      ///////     we will find chidrens girls
      let girlsChildren = families.map((pchild)=> pchild.childrens.filter((pchild)=> pchild.gender == "girl")
                                  .map((pchild)=> pchild.name))
      ;
      // console.log(girlsChildren);
      let btn3 = document.querySelector("#buttonGirls");
      // console.log(btn3);
      btn3.onclick = ()=>{
        document.querySelector("#listGirls").innerHTML = girlsChildren;
      };
      btn3.onmouseout = ()=>{
        document.querySelector("#listGirls").innerHTML = " ";
      };
      //////     we will find small ages in the childrens
    let kidsList = families.map((pchild)=> pchild.childrens.filter((pkids)=> pkids.age < 8)
                           .map((pkids)=> pkids.name)) // for create new array
                       
    ;
    // console.log(kidsList);
    let btn4 = document.querySelector("#buttonSmallAge");
    // console.log(btn4);
    btn4.onclick = ()=>{
      document.querySelector("#listSmallAge").innerHTML = kidsList;
    };
    btn4.onmouseout = ()=>{
        document.querySelector("#listSmallAge").innerHTML = " ";
      };
    
    
      ///////    we will find big ages in the childrens
      
      let bigKidsList =families.map((pkids)=> pkids.childrens.filter((pkids)=> pkids.age > 8)
                                .map((pkids)=> pkids.name));
    
    // console.log(bigKidsList);
    
    let btn5 = document.querySelector("#buttonBigAge");
    // console.log(btn5);
    btn5.onclick = ()=>{
    document.querySelector("#listBigAge").innerHTML = bigKidsList;
    };
    btn5.onmouseout = ()=>{
        document.querySelector("#listBigAge").innerHTML = " ";
        };
}