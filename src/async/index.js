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