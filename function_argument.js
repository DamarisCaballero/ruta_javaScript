function printHello (){ // Function to print "Hello"
    console.log("Hello");
}

function foo (func){ // Create function taking another function as argument
    console.log("in foo function");
    console.log("calling func");
    func(); // invoke the function passed as argument
    console.log("finished calling");
    console.log("returning");
}

foo(printHello); // invoke foo and pass printHello as argument

/*************************************/
/*************************************/

function foo (func){ // Create function taking another function as argument
    console.log("in foo function");
    console.log("calling func");
    func(); // invoke the function passed as argument
    console.log("finished calling");
    console.log("returning");
}

foo(function (){ // create function
    console.log("Hello")
    }); // invoke foo and pass printHello as argument

/*************************************/
/*************************************/


function foo (func){ // Create function taking another function as argument
    console.log("in foo function");
    console.log("calling func");
    func(); // invoke the function passed as argument
    console.log("finished calling");
    console.log("returning");
}

foo(() => console.log("Hello")); // invoke foo and pass printHello as argument


/*************************************/
/*************************************/


function foo (){ // Create function taking sum as argument
    return () => console.log("This is new Function!"); // return arrow function
}
var newFunc = foo (); // invoke foo and assign returned value to newFunc var
    console.log("foo exited"); // print to signify completion of foo
    console.log("invoking newFunc"); 
    newFunc(); // invoke returned function from foo through variable newFunc


/*************************************/
/*************************************/
console.log(Math.min(4.5, 5)); // 4.5
console.log(Math.min(19, 9));  // 9
console.log(Math.min(1, 1));   // 1
console.log(Math.random());    // A random number between 0 and 1