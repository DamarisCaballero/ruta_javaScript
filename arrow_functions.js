var func = (a, b) => { // Create arrow function for taking sum of two numbers
    var sum = a + b; // take sum of a and b and assign to sum variable
    return sum; // return sum
}
console.log("Sum of 1 and 3:" , func(1,3)); 


/*************************************/
/*************************************/

var func1 = a  => ({'1' : a }); 
var func2 = a  => { return {'1' : a }}; 

console.log("Object with '1' property as 'OK':" , func1('OK')); 
console.log("Object with '1' property as 'OK':" , func2('OK')); 

/*************************************/
/*************************************/