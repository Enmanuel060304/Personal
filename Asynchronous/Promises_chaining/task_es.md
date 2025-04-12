A menudo, las acciones asincrónicas pueden estar vinculadas a otras acciones asincrónicas.  
Por ejemplo, primero necesitamos cargar los datos, luego procesarlos de alguna manera, y solo después mostrarlos al usuario.  
Así, obtenemos una cadena de manejadores. Afortunadamente, cada llamada a `.then` devuelve una nueva promesa, lo que nos permite llamar al siguiente `.then` sobre esta.

```js
new Promise(function (resolve, reject) {
  setTimeout(() => resolve("1"), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result + "2";
  })
  .then(function (result) {
    console.log(result); // 12
    return result + "3";
  })
  .then(function (result) {
    console.log(result); // 123
  });
```

En el ejemplo anterior, primero creamos una promesa, después especificamos un manejador para imprimir el `result` en pantalla, y luego devolvemos `result + "2"` como el valor de retorno.  
Ya que `.then` devuelve una nueva promesa, podemos especificar el siguiente manejador para esta, y así sucesivamente.  
Dicha cadena es necesaria para activar el manejador solo cuando el resultado está listo.

Al principio, puede parecer difícil entender esta secuencia.  
Sugerimos observar una declaración `.then` a la vez y preguntarse: "¿Qué situación se está manejando ahora?"  
y "¿cuál es el resultado para la siguiente declaración `.then`?".

<div class="hint" title="Devolviendo una promesa personalizada">

  Si es necesario, podemos definir explícitamente una promesa personalizada que devolverá un operador `.then` en una cadena:  
  ```js
  new Promise(function (resolve, reject) {
    resolve("1");
  })
    .then(function (result) {
      console.log(result); // 1
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve("#"), 1000);
      });
    })
    .then(function (result) {
      console.log(result); // #
      return result + "3";
    })
    .then(function (result) {
      console.log(result); // #3
    });
  ```
</div>

Dado que una promesa puede informar no solo el resultado de una operación completada exitosamente, sino también de un error, podemos agregar manejadores de errores a la cadena de `.then` también:  
```js
new Promise(function (resolve, reject) {
  setTimeout(() => resolve("1"), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result + "2";
  })
  .then(function (result) {
    console.log(result); // 12
    throw new Error("Algo salió mal");
    return result + "3";
  })
  .then(
    function (result) {
      console.log(result); // no se ejecuta
    },
    function (error) {
      console.log(error.message); // Algo salió mal
    },
  );
```

Puedes leer más sobre encadenamiento de promesas [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining).

### Tarea  
Implementa la función `summarizeNumbers`.  
El propósito de esta función es tomar un `numbersPromise` (una promesa que se resuelve a un arreglo de números) y devolver una nueva promesa que se resuelve a la suma de esos números.

Pasos para implementar:  
1. Calcula la suma de los números.  
2. Al final de la función manejadora, devuelve la suma. Esto garantizará que la función `summarizeNumbers` devuelva una promesa que se resuelve a la suma calculada.