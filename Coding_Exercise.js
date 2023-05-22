function min (num1, num2){
    if (num1 < num2){
        return num1;
    } else {
        return num2;
    }
}

var numero1 = 10;
var numero2 = 7;
var resultado = min(numero1, numero2);
console.log("el numero minimo es: " + resultado);