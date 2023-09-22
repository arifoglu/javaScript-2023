window.onload = function (){

    let images = document.querySelectorAll("div.vignettes > img");
  //  console.log(images);

    let tableau = document.querySelectorAll("div.figure > img");
  //  console.log(tableau);

    let h1 = document.querySelector("div#header h1");
  //  console.log(h1);

Array.prototype.forEach.call(images,function(imgObj){
   
    if(imgObj.querySelectorAll("div.vignettes > img"))

    imgObj.onmouseover = function(){

        this.style.opacity = "0.5"; 
        console.log( imgObj );

        tableau[0].src = imgObj.src;        
        tableau[0].style.width = "250px";

        h1.style.backgroundColor = "#a2abe6";

    };

    imgObj.onmouseout = function(){

        this.style.opacity = 1; 
        tableau[0].src = "./images/grandes/blue.jpg";

        h1.style.backgroundColor = "#ddd";

    };

})


}