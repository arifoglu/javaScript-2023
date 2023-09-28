/// for example :this notes was taken from a person's personal agendas
/// this persons takes notes when take a money and spends money
/// first element is salary others are costs
/// we should detect a situation if this person needs a help .

const incomeStatement = 
[15000, 2000, 1000, 300, 200,
"important electronic", 600, 79, "abo", 
342,"printer",
 450, 32, 45, "fitness", 64, 10, 23, 12,
  2, 56, 7];
document.getElementById("agenda").onmouseover =()=>{
    document.getElementById("agendaShow").style.display = "block"
};
document.getElementById("agenda").onmouseout =()=>{
    document.getElementById("agendaShow").style.display = "none"
}


 // 1. we detect salary of person and show on the page
 const salary = incomeStatement[0];
 console.log(salary);// 15000 is salary

 document.getElementById("salary").onclick = ()=>{
    document.getElementById("salaryShow").innerHTML = salary;
 };

 // 2. we have to detect of numbers of Array
 const numbersOfIncome = incomeStatement.filter(value => typeof value === "number");
 console.log(numbersOfIncome); //

 // 3.we will do an addition with these numbers
 let total = 0;
 numbersOfIncome.map(values => total += values);
 console.log(total); // 20222 

 // 4.we will find a costs and show on the page
 let costs = total - salary;
 console.log(costs);     // 5222
 document.getElementById("costs").onclick = ()=>{
    document.getElementById("costShow").innerHTML = costs;
 };


 // 5.we will find a residual income and show on the page
 let residualIncome = salary - costs;
 console.log(residualIncome); // 9778

 document.getElementById("reste").onclick = ()=>{
    document.getElementById("resteShow").innerHTML = residualIncome;
 };

 // 6.we will show a result if any need help and show on the page
 document.getElementById("queryHelp").onclick = ()=>{
    if(residualIncome < 10000){
         alert("this person need an economic help!!!")
      }
      else
      {
         alert("everything is alright be cool :)")
      }
   } ;
 
