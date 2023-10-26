window.onload = function(){

/// for example :this notes was taken from a person's personal agendas
/// this persons takes notes when take a money and spends money
/// first element is salary others are costs
/// we should detect a situation if this person needs a help .

const incomeStatement =
[15000, 2000, 1000, 300, 200,
"important electronic", 600, 79, "abo",
342,"printer",450, 32, 45, "fitness", 64, 10, 23, 12,2, 56, 7];
let currency = "CHF";

// for show this list we have to print on screen

$(document).ready(function(){

   // slideDown && SlideUp
   $("#agenda").on("click",function(){
      $("#agendaShow").slideDown(2000);
   });
   $("#agenda2").on("click",function(){
      $("#agendaShow").slideUp("slow");
   });

   // 1. we detect salary of person and show on the page
   const salary = incomeStatement[0];
   console.log(salary);

   ///mouseenter && mouseleave
   $("#salary").mouseenter(function(){
      $("#salaryShow").text(salary + currency).slideDown("slow");
   });
   $("#salary").mouseleave(function(){
      $("#salaryShow").slideUp("slow");
   });

   ////2. we have to detect of numbers of Array
   const numbersOfIncome = incomeStatement.filter(value => typeof value === "number");
   //console.log(numbersOfIncome);
   let total = 0;
   numbersOfIncome.map(values => total += values);
   //console.log(total); // 20222
   //4.we will find a costs and show on the page
   let costs = total - salary;
   //console.log(costs);     // 5222
   $("#costs").mouseenter(function(){
      $("#costShow").text(costs + currency ).slideDown("slow");
   });
   $("#costs").mouseleave(function(){
      $("#costShow").slideUp("slow");
   });
   // 5.we will find a residual income and show on the page
   let residualIncome = salary - costs;
   // console.log(residualIncome); // 9778
   $("#reste").on("click",function(){
      $("#resteShow").text(residualIncome + currency).slideDown("slow");
   });
   $("#reste").mouseleave(function(){
      $("#resteShow").slideUp("slow");
   });
   // 6.we will show a result if any need help and show on the page
   $("#queryHelp").on("click",function(){
      if(residualIncome < 10000)
      {
         alert("this person need an economic help!!!")
      }
      else
      {
         alert("everything is alright be cool :)")
      }
   })
})

}

