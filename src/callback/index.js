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