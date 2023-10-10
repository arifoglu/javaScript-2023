window.onload = function(){

    // we will define our selections

    let counter = 0;

    let top = document.querySelector("#topPart");
    //console.log(top);
    let middle = document.querySelector("#middlePart");
    //console.log(middle);
    let bottom = document.querySelector("#bottomPart");
    //console.log(bottom);

    let raiseBtn = document.querySelector("#raiseButton");
    //console.log(raiseBtn);
    let reduceBtn = document.querySelector("#reduceButton");
    //console.log(reduceBtn);

    raiseBtn.onclick = function(){
        if(counter < 3)
        {
            counter = counter+1
        }
        if(counter == 1)
        {
            bottom.style.backgroundColor ="red";
        }
        else if(counter == 2)
        {
            bottom.style.backgroundColor ="yellow";
            middle.style.backgroundColor ="yellow";

        }
        else if ( counter == 3)
        {
            bottom.style.backgroundColor ="green";
            middle.style.backgroundColor ="green";
            top.style.backgroundColor ="green"; 
            
        }
    }
    reduceBtn.onclick = function(){
        if(counter > 0)
        {
            counter = counter-1
        }
        if(counter == 2)
        {
           top.style.backgroundColor ="white"; 
           middle.style.backgroundColor ="yellow";
           bottom.style.backgroundColor ="yellow";
        }
        if( counter == 1)
        {
            top.style.backgroundColor ="white"; 
            middle.style.backgroundColor ="white";
            bottom.style.backgroundColor ="red";
        }
        if( counter == 0)
        {
            top.style.backgroundColor ="white"; 
            middle.style.backgroundColor ="white";
            bottom.style.backgroundColor ="white";
        }
    }











}