const checkbox = function(){
    let articleHeaders = document.querySelectorAll("article header");
   // console.log(articleHeaders);

    Array.prototype.forEach.call(articleHeaders,function( header ){

        header.onclick = function()
        {
            console.log("click");

           if(  this.classList.contains("checked")){
            this.classList.remove("checked");
            this.querySelector("h2 img").src = "images/checkbox-blank.svg";
 
           }
           else{
            this.classList.add("checked");
            this.querySelector("h2 img").src = "images/checkbox-checked.svg";
           }    
        }
    });

};



const menuMobile =function(){
    const menuBurger = document.querySelector("header button");

    menuBurger.onclick = function()
    {
     const body =document.querySelector("body");
     console.log(body);

    if( body.classList.contains("openmenu"))
       {
        body.classList.remove("openmenu");
       }
       else{
        body.classList.add("openmenu");
       
       } 
    }


};



const menuAnim = function(){

    const rubriques = document.querySelectorAll("div.container > aside > ul > li > a");

    console.log( rubriques );

    Array.prototype.forEach.call(rubriques, function( rubrique )
    {
        rubrique.onclick = function( e ){
            e.preventDefault();


            if(this.parentNode.classList.contains("active"))
            {
                this.parentNode.classList.remove("active");

                this.nextElementSibling.style.height = "0px";
            }
            else
            {
                this.parentNode.classList.add("active");

                let ulHeight = this.nextElementSibling.scrollHeight;

                this.nextElementSibling.style.height = ulHeight + "px";
            };


        };
        
    })


};



window.onload = function(){

    checkbox();
    menuMobile();
    menuAnim();

};