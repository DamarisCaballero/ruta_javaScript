function cuentaAtras(numero) {
    // Condición base: Si el número que recibe es
    // menor de 0 entonces salimos de la función
    if (numero < 0) { return }

    // Si el número era mayor o igual a 0, lo mostramos
    console.log(numero)

    // Y llamamos a la función con el número anterior
    cuentaAtras(numero - 1)
}