// //when someone entered any 2 numbers for two input areas our function will compared that two numbers // 

window.onload = function(){ 

 document.getElementById("compare").onclick = function(){
    
    let input1;
    let input2;
    let show = document.getElementById("result");
// we have to change to Number
    input1 = Number(document.getElementById("numero1").value) ; 
    input2 = Number( document.getElementById("numero2").value);
    
    if(input1 < input2 ){
        show.innerHTML = input2;
        document.getElementById("numero2").style.color = "green" ; 
    } else if( input1 > input2){
        show.innerHTML = input1;
        document.getElementById("numero1").style.color = "green" ;
    }else if( input1 == input2){    
        show.innerHTML = "egal"
    }else{

    }
};

function clearFields() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
};
clearFields();
}
