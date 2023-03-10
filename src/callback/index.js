function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

// Para comprender este tema, hice una funci贸n para una orden dentro de un restaurante.

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
// La orden est谩 lista. 馃崝
// Este peque帽o ejercicio me ayud贸 a entender mejor el callback.

// Los callbacks aseguran que una funci贸n no se va a ejecutar antes de que se complete una tarea, sino que se ejecutar谩 justo despu茅s de que la tarea se haya completado. Nos ayuda a desarrollar c贸digo JavaScript as铆ncrono y nos mantiene a salvo de problemas y errores.

// Un Callback es una una funci贸n que se pasa como argumento de otra funci贸n y que luego ser谩 invocada. Aseguran de que un determinado codigo no que ejecuta hasta que otro codigo haya terminado de ejecutarse

// Tienes la funci贸n execCallback que recibir谩 un callback es decir una funci贸n como par谩metro, tu reto es ejecutar esa funci贸n con un tiempo de demora de 2 segundos.

// Para hacer que la funci贸n se demore 2 segundos debes usar la funci贸n setTimeout, pero para ejecutarla debes llamarla mediante el namescpace window para poder monitorear su uso en la ejecuci贸n de pruebas, ejemplo:

window.setTimeout(() => {
  // code
})

// Dentro del cuerpo de la funci贸n execCallback debes escribir tu soluci贸n.

// Ejemplo:

// Input:
// const myFunc = () => console.log('Log after 2s')
// execCallback(myFunc);

// Output:
// // Execute myFunc 2s after

export function execCallback(callback) {
    window.setTimeout(callback, 2000);
}