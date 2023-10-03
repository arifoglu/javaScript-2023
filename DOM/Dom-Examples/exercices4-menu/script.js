//// for checklist 

const checkbox = function(){
    let rubriques = document.querySelectorAll("ul#navigation > li ");
   // console.log(rubriques); //NodeList(3) [li, li, li]
    
    Array.prototype.forEach.call( rubriques , function ( liObj){
    
      liObj.querySelector("a").onclick = function(e){
        e.preventDefault();
      }
    
      if(liObj.querySelector(" header > ul > li > ul"))
      
         liObj.onmouseover = function()
         {
          liObj.querySelector(" header > ul > li > ul").style.display = "block";
         };
         liObj.onmouseout = function()
         {
          liObj.querySelector(" header > ul > li > ul").style.display = "none";
         };
    
    })
  };
  
  //// for BurgerMenu
  
  const menuMobile = function(){
  
   const menuBurger = document.querySelector("header button");
   // console.log(menuBurger);
  
   menuBurger.onclick = function(){
     const body = document.querySelector("body");
     console.log(body);
     
     if(body.classList.contains("openmenu"))
     {
      body.classList.remove("openmenu")
     }
     else
     {
      body.classList.add("openmenu")
     }
   }
  }
  
  window.onload = function(){
  checkbox();
  menuMobile();
  };
  
  