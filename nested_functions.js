function outer (a){ // This is the outer function
    console.log("Outer function executed with arg",a);
    function inner(b){ // This is the inner function 
        console.log("Inner function executed with arg:",b);
      return; // Exit inner function
    }
    inner(a); // Call inner function declared above 
    return; // Exit outer function
}
  outer(1); // Call outer function declared above


/*************************************/
/*************************************/

function outer (a){ 
    console.log("Outer function executed with arg",a);
    a++; 
    return a; 
}
    function inner(b){ 
        console.log("Inner function executed with arg:",b);
        return; 
}
    var outerReturn = outer(1); 
    inner(outerReturn); 

/*************************************/
/*************************************/

function outer (a){ 
    console.log("Outer function executed with arg",a);
    a++; 
    var b = 5; 
    function inner(){
        console.log("Inner function executed and have access to:", a, b);
        return; 
    }
    inner(); 
    return a;
}
    var outerReturn = outer(1); 