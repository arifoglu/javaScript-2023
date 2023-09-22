/////////////////////  onmouseover()    and this
document.querySelector(".blue").onmouseover = function()
{
    this.src ="./images/green.jpg";
    document.querySelector("div#container").style.backgroundColor = "#073d41"
}

/////////////////////  onmouseout()     and  this

document.querySelector(".blue").onmouseout = function()
{
    this.src = "./images/blue.jpg";
    document.querySelector("div#container").style.backgroundColor = "#719171" ;

}

//////////////////////      forEach()

let images =document.querySelectorAll("div#container > img");
   console.log(images);

Array.prototype.forEach.call(images,function( imgObj ){
    console.log(imgObj); 
    // <img class="blue" src="/DOM-Atelier/Source 1- I…useover/images/blue.jpg">

    imgObj.onclick = function(){
        this.style.opacity = "0.5";
        this.classList.add("anim");
        console.log(this);
    };
    imgObj.ondblclick = function(){
        this.style.opacity = 1;
        this.classList.remove("anim");
        console.log(this);
    };
})
