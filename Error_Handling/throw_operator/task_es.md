Anteriormente, asumimos que las excepciones se generan automáticamente.  
Antes de aprender cómo generar excepciones manualmente, aclaremos algunos términos.

En Ciencias de la Computación, decimos que cuando ocurre un error, se genera una excepción, la cual luego puede ser capturada y gestionada.  
Sin embargo, esta descripción no explica claramente qué es una "excepción" en JavaScript.  

En JavaScript, una "excepción" es un objeto de error. Este objeto puede pertenecer a una de las clases de error integradas: `Error`, `ReferenceError`, `TypeError` y otras.  

Además, los programadores pueden generar sus propias excepciones y usar el mecanismo `try..catch` para gestionarlas.  
Para generar una excepción, utiliza el operador `throw` con un objeto de error.  
Al crear este objeto, puedes especificar un mensaje personalizado como argumento del constructor. Posteriormente, puedes acceder a este mensaje en el bloque `catch` mediante la propiedad `message` del objeto de error.  

```js
function intArraySum(array) {
    let sum = 0;
    for (let elem of array) {
        if (Number.isInteger(elem)) {
            sum += elem;
        } else {
            throw new Error("Se encontró un valor que no es un entero");
        }
    }
    return sum;
}

try {
    let sum1 = intArraySum([1, -20, 123]);
    console.log(sum1);  // imprime 104

    let sum2 = intArraySum([2, 4, "8"]);  // genera la excepción

    // las siguientes instrucciones dentro del bloque try no se ejecutarán
    console.log(sum2);
    console.log(sum1 + sum2);
} catch (e) {
    console.log(e.message);  // Se encontró un valor que no es un entero
}
```

La línea donde se genera la excepción y el controlador de esa excepción pueden estar ubicados en diferentes funciones o incluso en diferentes archivos.  
Debes prestar atención a dónde se manejará el error y qué instrucciones no se ejecutarán cuando se genere la excepción.  

Además, ten en cuenta que si se genera una excepción dentro de una función, esta termina de inmediato sin devolver ningún valor, ya que el valor de retorno no será utilizado.  

Puedes leer más sobre el operador `throw` [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw).  

### Tarea
A medida que aumenta el número de usuarios, has decidido que la función de saludo escrita anteriormente necesita ser modificada.  
En lugar de saludar a los usuarios cuyos nombres no pueden ser recuperados, la función ahora debe reportar un mensaje de error en tales casos.  

Modifica la función de saludo para que, en lugar de devolver un string saludando a un desconocido,  
genere un `Error` con el mensaje `"Una persona debe tener un nombre y un apellido"`.