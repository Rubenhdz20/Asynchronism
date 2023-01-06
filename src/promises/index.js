const promise = new Promise(function(resolve, reject) {
    resolve('hey');
})

const cows = 15;

const countCows = new Promise(function(resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows in the Farm`);
    } else {
        reject("There are no cows in the Farm");
    }
})
 
countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));


function delay(time, message) {
    return new Promise ((resolve, reject) => {
        window.setTimeout(() => {
            resolve(message);
        }, time);
    });
}
  