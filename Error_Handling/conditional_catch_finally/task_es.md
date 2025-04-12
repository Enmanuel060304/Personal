Dado que los errores pueden ser de diferentes tipos, es posible que necesitemos responder a ellos de distintas maneras.  
Para lograr esto, podemos usar el [operador `instanceof` ya conocido](course://Classes/class_checking_instanceof) para verificar si un objeto pertenece a una clase específica.  
Para mayor claridad, imprimiremos el atributo `name` del objeto error, el cual contiene el tipo de error.

Además, en este ejemplo, puedes encontrar el bloque `finally`.  
Este bloque siempre se ejecutará, independientemente de si ocurre una excepción en el bloque `try`.  
Este bloque es opcional y puede ser omitido, como lo hicimos en las tareas previas.  
A menudo se utiliza para cerrar un archivo con el que el programa estaba trabajando, ya que se garantiza su ejecución en cualquier caso.

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

let examples = [
    [1, -20, 123],
    null,
    [2, 4, "8"]
];

for (let example of examples) {
    try {
        console.log(intArraySum(example));
    } catch (e) {
        console.log("Capturado: " + e.name);
        if (e instanceof TypeError) {
            console.log("Se produjo un TypeError");
        } else {
            console.log("Se produjo otro tipo de error");
        }
    } finally {
        console.log("Bloque finally ejecutado\n");
    }
}

/* Resultado:
104
Bloque finally ejecutado

Capturado: TypeError
Se produjo un TypeError
Bloque finally ejecutado

Capturado: Error
Se produjo otro tipo de error
Bloque finally ejecutado
*/
```

En el ejemplo anterior, llamamos a la función `intArraySum` previamente definida con diferentes argumentos:  
1. La primera vez, pasamos un arreglo válido.  
2. La segunda vez, pasamos `null` como argumento, lo que hace que JavaScript genere automáticamente una excepción de tipo `TypeError`. Manejamos esto con una condición separada en el bloque `catch`, que imprime el mensaje `"Se produjo un TypeError"`.  
3. La tercera vez, el arreglo contiene un elemento que no es un número, y la función `intArraySum` genera una excepción de tipo `Error`.

La instrucción en el bloque `finally` se ejecuta cada vez.

Puedes leer más sobre cómo usar `instanceof` al procesar errores [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch#bloques_catch_condicionales).

### Tarea
Imagina que quieres escribir un ejemplo para demostrar cómo funciona la función [Number.toString()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toString).  
A partir de la documentación, has aprendido que puede generar dos tipos de errores:  
* `RangeError`: Provocado si el `radix` es menor que 2 o mayor que 36.  
* `TypeError`: Provocado si el método se invoca en un objeto que no es de tipo `Number`.

Completa la función `toStringExplanation` para que devuelva la descripción del error correspondiente cuando ocurra:  
* Para `RangeError`: `"El radix es menor que 2 o mayor que 36"`.  
* Para `TypeError`: `"El método se invoca en un objeto que no es un Number"`.