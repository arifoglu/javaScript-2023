const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits.get("oranges")); //200

/// set and get 
fruits.set("kiwi",900); // we can set this elements to this map
fruits.set("apples",199) // we cahnaged values of apples
console.log(fruits.get("kiwi"));
console.log(fruits.get("apples"));

//// size
console.log(fruits.size); //4

/// delete
console.log(fruits.delete("apples"));
console.log(fruits);  ///{'bananas' => 300, 'oranges' => 200, 'kiwi' => 900}

// has  for checked an element if exist
console.log(fruits.has("apples")); // false

//////////////////////// forEach in Map

const legumes = new Map([
    ["raisin",10],["abricot",20],["melon",35]
]);
let myLegumes = "";
legumes.forEach((value,key)=> myLegumes += key  + "stocked " + value +"/////" );
console.log(myLegumes);

/////
console.log(typeof null);