function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

// Para comprender este tema, hice una función para una orden dentro de un restaurante.

function makingOrder(orden) {
    console.log(`Ready  ${orden}`);
}

function order(orden, callback) {
    console.log(`Taking order ${orden}`);
    setTimeout(() => {
        callback(orden)
    }, 3000)
    console.log(`Doing order ${orden}`,);
}

order('Burger', makingOrder);

// La orden se toma, una hamburguesa.
// Se empieza a preparar la orden.
// La orden está lista. 🍔
// Este pequeño ejercicio me ayudó a entender mejor el callback.

// Los callbacks aseguran que una función no se va a ejecutar antes de que se complete una tarea, sino que se ejecutará justo después de que la tarea se haya completado. Nos ayuda a desarrollar código JavaScript asíncrono y nos mantiene a salvo de problemas y errores.

// Tienes la función execCallback que recibirá un callback es decir una función como parámetro, tu reto es ejecutar esa función con un tiempo de demora de 2 segundos.

// Para hacer que la función se demore 2 segundos debes usar la función setTimeout, pero para ejecutarla debes llamarla mediante el namescpace window para poder monitorear su uso en la ejecución de pruebas, ejemplo:

window.setTimeout(() => {
  // code
})

// Dentro del cuerpo de la función execCallback debes escribir tu solución.

// Ejemplo:

// Input:
// const myFunc = () => console.log('Log after 2s')
// execCallback(myFunc);

// Output:
// // Execute myFunc 2s after

export function execCallback(callback) {
    window.setTimeout(callback, 2000);
}