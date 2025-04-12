Anteriormente, discutimos cómo especificar un manejador para que se llame después de la finalización de una acción asíncrona e incluso aprendimos cómo construir una cadena de dichos manejadores.  
Todas estas acciones se ejecutan automáticamente e independientemente del programa principal, pero a veces necesitamos esperar explícitamente a que una acción se complete.

Para comenzar, vamos a declarar una función `async`.  
En este caso, especificamos explícitamente que la función maneja operaciones asíncronas y siempre devolverá un `Promise`.  
Puedes notar que el código escrito de esta manera es mucho más fácil de leer.

```js
async function hello() {
  return "Hello, World!";
}

// Equivalente a:
function hello() {
  return Promise.resolve("Hello, World!");
}
```

Dentro de las funciones `async`, podemos usar la palabra clave `await` para esperar hasta que la promesa se resuelva.  
Esta es una acción _bloqueante_, lo que significa que la ejecución de la función actual se detendrá mientras se espera. Sin embargo, esto no afecta de ninguna manera la ejecución del resto del programa.

Comparemos dos programas como ejemplo. En el primero, definimos un manejador para la promesa utilizando `.then`,  
y la ejecución del programa continúa inmediatamente después. Una vez que la promesa se resuelve, `Hello!` será impreso en la pantalla.

```js
async function hello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello!"), 1000);
  });
}

function example1() {
  console.log("Before");
  hello().then(console.log);
  console.log("After");
}

example1();

// Este programa imprime:
/*
Before
After
Hello!
*/
```

<div class="hint">

  Si queremos pasar el valor de una promesa resuelta a otra función en `.then`, simplemente podemos especificar el nombre de esa función.  
  Por ejemplo, la línea de código anterior es equivalente a:
  ```js
  hello().then(function (result) {
    console.log(result);
    });
  ```
</div>

En el segundo caso (con la misma función `hello`), el resultado es diferente.
```js
async function example2() {
  console.log("Before");
  let result = await hello();
  console.log(result);
  console.log("After");
  return result;
}

example2().then(console.log);

// Este programa imprime:
/*
Before
Hello!
After
Hello!
*/
```

El uso de la palabra clave `await` nos permite esperar explícitamente el resultado antes de continuar con la ejecución.  
También podemos usar la promesa devuelta por la función `example2` para trabajar con su valor resuelto más tarde.

Puedes leer más sobre [funciones async](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function) y [`await`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/await) si te interesa.

### Tarea
La función `collector` es una función asíncrona que toma dos promesas (`number1` y `number2`) como entradas.  
Debe esperar hasta que ambas promesas se resuelvan, agregar los valores resueltos a un arreglo en el orden `[number1, number2]`, y devolver este arreglo como el resultado de la función.

Sin embargo, la implementación actual no funciona en absoluto. Corrige la función utilizando `await` en tu solución.