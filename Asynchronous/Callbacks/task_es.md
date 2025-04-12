En JavaScript, los _callbacks_ desempeñan un papel fundamental al manejar tareas que no se completan de inmediato (estas tareas se llaman _asíncronas_).  
Proporcionan una forma de continuar ejecutando el código después de que una operación haya finalizado, evitando que el programa quede bloqueado mientras espera que se complete la operación.

Un _callback_ es una función que se pasa como argumento a otra función, lo que permite que la función callback se ejecute en un momento posterior.  
Antes de profundizar en los detalles de la ejecución de programas asíncronos, comencemos con los conceptos básicos.

Veamos el ejemplo a continuación. La función `calculateAsync` toma dos números y un `callback`, que es una función que más tarde se llamará con el resultado de la suma como argumento.  
Internamente, se utiliza un método especial incorporado en JavaScript, `setTimeout`. Este método permite que las instrucciones que le pases se ejecuten después de un retraso; en este caso, 2000 ms.

De hecho, en lugar de usar `setTimeout`, podrían haber tareas como la carga de datos u otras operaciones "lentas".  
Sin embargo, en este curso, para simplificar, usaremos `setTimeout` como un ejemplo de una operación asíncrona.

```js
function calculateAsync(a, b, callback) {
  console.log("Iniciando cálculo...");

  setTimeout(() => {
    // este bloque se ejecutará de forma asíncrona
    const result = a + b;
    callback(result);
  }, 2000);
}

function logResult(result) {
  console.log(`La suma asíncrona es: ${result}`);
}

calculateAsync(5, 10, logResult);

console.log("¿Después del cálculo?");
```

Si ejecutas este programa, el resultado puede sorprenderte:
```text
Iniciando cálculo...
¿Después del cálculo?
La suma asíncrona es: 15
```

Esto es lo que sucede:
- Primero se llama a la función `calculateAsync`.  
  Imprime el mensaje `Iniciando cálculo...` en la pantalla y llama al método `setTimeout`.  
  Esta llamada al método es **no bloqueante**, lo que significa que el programa no se "detendrá" en este punto, sino que continuará ejecutando el código subsiguiente.
- Mientras el programa continúa, la función `calculateAsync` se completa exitosamente, y se imprime el mensaje `¿Después del cálculo?`.
- Dos segundos más tarde, se ejecutan las instrucciones pasadas al método `setTimeout`.  
  Esto incluye sumar los dos números y llamar a la función `logResult`, que pasamos como callback.

Puedes leer más acerca de las funciones callback [aquí](https://developer.mozilla.org/es/docs/Glossary/Callback_function).

### Tarea  
Implementa la función `arrayProcessor`, que modifica un `array` aplicando una función `transform` callback dada a cada elemento.

La función `transform` toma un elemento del array como entrada y devuelve un valor transformado.  
Esta función puede realizar cualquier operación.

<div class="hint" title="Iteración sobre los elementos del array">

  Puedes recordar cómo iterar a través de los elementos de un array en [esta](course://Loops/For) tarea.
</div>