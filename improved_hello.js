/**Write a program that asks the user for his first
 *  and last name and returns an appropriate hello 
 * message from the sayHello() function. */

function sayHello() {
    var firstName = prompt("what is your name");
    var lastName = prompt("What is your last name");
    var hello = "Hello" + firstName + " " + lastName + " " + "! bienvenidos";
    return hello;
}

var saludo = sayHello();
console.log(saludo);