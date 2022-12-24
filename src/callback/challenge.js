const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escueljs.co/api/v1';

function fetchData(urlAPI, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlAPI, true);
    xhttp.onreadystatechange = function(event) {
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }
        } else {
            const error = new Error('Error' + urlAPI);
            return callback(error, null);
        }
    }

    xhttp.send();
}

// REQUIRE:Es parte del concepto de módulos implementando por nodejs, la alternativa que nodejs propuso para agregar piezas de código (módulos) a nuestra aplicación. A lo largo del tiempo, JavaScript ha tenido varios métodos para trabajar con módulos, pero el más reciente y parte del estándar es ESM (ECMASCript ModuleS).

// NEW: new es una palabra reservada para crear una instancia de un prototipo en JavaScript, tal como se crean objetos o instancias de clases en otros lenguajes.

// En el caso del XMLHttpRequest, se creará una instancia cada vez que se llame a la función fetchData.

// Y XMLHttpRequest es un prototipo/clase de JavaScript para hacer peticiones hacia servicios en la nube (APIs).

// Variables en MAYUSCULA: escribir el nombre de la variable en mayúscula o minúscula no hara que esta cambie en lo largo del código. Simplemente se hace por convención, es decir, le estamos diciendo a futuros desarrolladores que cuando vean en nuestro código esta variable escrita en mayúsculas, no modifiquen su valor porque es muy importante

// XMLHttpRequest se usa cuando quieres tener un mayor control de la petición.

// uso de NULL: Porque esta habilitando un parámetro en la función que aun no define.
// Y lo habilita porque sabia que la misma funcion en algun punto tendria que manejar los errores, o quizas otras cosas.
// Cuando no sabemos esto, le pasamos “null” hasta que llegue ese momento donde sabemos que se ocupara.
// El lo define en el manejo del error cuando le asigna la variable error";