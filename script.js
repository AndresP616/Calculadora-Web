document.getElementById('calcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const operacion = document.getElementById('operacion').value;

    if (isNaN(valor1) || isNaN(valor2)) {
        mostrarResultado('Por favor, ingresa valores numéricos válidos.');
        return;
    }

    const operaciones = {
        suma: (a, b) => a + b,
        resta: (a, b) => a - b,
        multiplicacion: (a, b) => a * b,
        division: (a, b) => b !== 0 ? a / b : 'Error: División entre 0'
    };

    if (!(operacion in operaciones)) {
        mostrarResultado('Operación no válida.');
        return;
    }

    const resultado = operaciones[operacion](valor1, valor2);
    mostrarResultado(`El resultado de la ${operacion} es ${resultado}`);

    limpiarFormulario();
});

function mostrarResultado(mensaje) {
    document.getElementById('resultado').textContent = mensaje;
}

function limpiarFormulario() {
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
    document.getElementById('operacion').selectedIndex = 0;
}

