window.onload = function(){
 let rubriques = document.querySelectorAll("ul#navigation > li ");

 console.log(rubriques); // NodeList(3) [ li, li, li ]

 Array.prototype.forEach.call(rubriques,function( liObj ){
  
     liObj.querySelector("a").onclick = function(e){
      e.preventDefault();
     };

  if(liObj.querySelector("ul.sousmenu"))
   
       liObj.onmouseover = function(){
       liObj.querySelector("ul.sousmenu").style.display = "block";
     }
       liObj.onmouseout = function(){
       liObj.querySelector("ul.sousmenu").style.display = "none";
  };

 });

};