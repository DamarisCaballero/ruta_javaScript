const number1 = Number(prompt("enter number 1: "));
const number2 = Number(prompt("enter number 2: "));

if (number1 < number2) {
    console.log(`${number1} is less than ${number2 }`);
}else if (number1 > number2) {
    console.log(`${number1}is greater than ${number2}`);
} else {
    console.log(`${number1} and ${number2} are equal`);
}