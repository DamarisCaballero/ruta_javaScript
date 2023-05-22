function sum(a , b){
    console.log('Taking sum in the function'); // print to see function execute
    var ans = a + b; 
    return ans;
}

var var1 = 5; 
var var2 = 6;
var var3 = sum(var1, var2);
console.log(var3);


//******************************* */
//******************************* */

function sum(a , b){
    console.log('Taking sum in the function'); 
    var ans = a + b; 
    return ans;
}

var var1 = 5; 
var var2 = 6; 
var var3 = sum; 
console.log(var3(var1, var2));


//******************************* */
//******************************* */

var var1 = 5; // assign 5 to var1
var var2 = 6; // assign 6 to var2
var var3 = function (a , b){
    console.log('Taking sum in the function'); // print to see function execute
    var ans = a + b; // assign sum of a and b to ans
    return ans; // return ans as output
}
console.log(var3(var1, var2)); // print the value of var3


//******************************* */
//******************************* */

function getName(){
    console.log('getName function executed'); // print to see function execute
    return 'Jack'; // return string 'Jack'
}

var var3 = getName(); // assign sum to var3
console.log(var3); // print the value of var3