function sumar() {
    // Obtén los valores de los inputs
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);

    //Hacer operacion
    const resultado = num1 + num2;

    // Muestra el resultado en el div
    document.getElementById('resultado').textContent = "Resultado: " + resultado;
}