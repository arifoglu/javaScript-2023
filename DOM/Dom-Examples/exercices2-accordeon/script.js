const menuAccordeon = function(){

    const boissonsImages = document.querySelectorAll("div#page > dl > dt");
   // console.log(boissonsImages); // all dt comes

   Array.prototype.forEach.call(boissonsImages ,function( boissonsLink){
   console.log(boissonsLink);  // dt comes separately
   
   boissonsLink.onclick = function(e){
      
     e.preventDefault();
   // console.log(boissonsLink); 
     
   if(this.classList.contains("active"))
   {
    this.classList.remove("active"); 
    this.nextElementSibling.style.display = "block";
   }
   else
   {
    this.classList.add("active");
    this.nextElementSibling.style.display = "none"; 
   }  
   } 
})

}

window.onload =function(){
    menuAccordeon();
}