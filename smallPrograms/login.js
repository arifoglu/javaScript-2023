// my person's info arifoglu@gmail.com and password 12345
let input1 = document.getElementById("email");
//console.log(input1);
let input2 = document.getElementById("password");
//console.log(input2);

function login(){
    if(input1.value == "arifoglu@gmail.com" && input2.value === "12345" )
    {
        alert ("login succesfully done")          
    }
    else
    {
        alert ("please try again")
    }
    return 
};


