const animals = ["cow","chicken","pig","chicken","sheep","cow","sheep","cow","cow","sheep","sheep"];

document.getElementById("list").innerHTML = "myDepot = [" + animals + "]";

let cowNumber = animals.filter(p => p == "cow").length;
//console.log("cow" , cowNumber);
document.getElementById("result").innerHTML += "Cows Number = " + cowNumber + "<br>" +"Cows Legs =" + legsCalcul(cowNumber,4);

let chickenNumber = animals.filter(p => p == "chicken").length;
//console.log("chicken" , chickenNumber);
document.getElementById("result").innerHTML += "<br>" + "<br>" + "Chickens Numbers = " + chickenNumber + "<br>" +"Chicken Legs =" + legsCalcul(chickenNumber,2);

let pigNumber = animals.filter(p => p == "pig").length;
//console.log("pig" , pigNumber);
document.getElementById("result").innerHTML += "<br>" + "<br>" + "Pig Numbers = " + pigNumber + "<br>" +"Pigs Legs =" + legsCalcul(pigNumber,4);


let sheepNumber = animals.filter(p => p == "sheep").length;
//console.log("sheep" , sheepNumber);
document.getElementById("result").innerHTML += "<br>" + "<br>" + "Sheeps Numbers = " + sheepNumber + "<br>" +"Sheeps Legs =" + legsCalcul(sheepNumber,4);


//console.log("total animal",animals.length)
document.getElementById("result").innerHTML += "<br>" + "<br>" + "Total Numbers = " + animals.length + "<br>" +"Total Legs =" + legsCalculTotal(cowNumber,chickenNumber,pigNumber,sheepNumber);


function legsCalcul(parameter,number){
    return parameter * number
};
function legsCalculTotal(p1,p2,p3,p4){
    return p1 * 4 + p2 * 2 + p3 * 4 + p4 * 4;
}

