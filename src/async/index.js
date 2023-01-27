const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('This would appear'), 2000) 
            : reject(new Error('error!'));
    })
}

const anotherFunction = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('So be patient');
}

console.log('Before the async');
anotherFunction();
console.log('After the async');

// Async, la usamos siempre al inicio de la función, y lo que hace es definir que esa función será asincrona

// ⭐ Await, la usamos básicamente para indicar por cuales líneas de código se deben esperar a que terminen de ejecutarse antes de seguir ejecutando la función.