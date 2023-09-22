//  JSON names require double quotes. JavaScript names do not.
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';


/// for transforme js object

const obj = JSON.parse(text);

console.log(obj);