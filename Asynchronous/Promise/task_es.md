Usando operaciones asincrónicas, puede parecer inicialmente poco claro cómo recuperar sus resultados, verificar si el resultado está listo o determinar si ocurrió un error durante la ejecución.  
Para manejar estos desafíos, el lenguaje JavaScript utiliza _promesas_.

### Promesa
Una _promesa_ representa el resultado eventual de una operación asincrónica.  
Actúa como un marcador de posición para un valor que no está disponible de inmediato pero que será resuelto en un momento posterior.

Para crear un objeto de este tipo, utilizamos la clase `Promise`. El constructor de la clase `Promise` acepta una función.  
Esta función, conocida como _ejecutor_, puede aceptar dos argumentos de tipo callback, los cuales JavaScript proporciona automáticamente.  
Cuando el ejecutor obtiene el resultado, invoca uno de los siguientes callbacks:  
- `resolve(value)` — se llama cuando la operación se completa con éxito, con el resultado `value`.  
- `reject(error)` — se llama si ocurre un error durante la ejecución, donde `error` es el objeto de error.  

Una vez creada una `Promise`, la función _ejecutor_ se ejecuta, y los siguientes atributos se establecen en el objeto de la promesa: `state: "pending"` y `result: undefined`.  
Cuando el ejecutor llama a `resolve` o `reject`, el `state` de la promesa cambiará a `fulfilled` o `rejected`, respectivamente.  
El atributo `result` se actualizará al `value` pasado a `resolve` o al `error` pasado a `reject`.

### El método `.then`
En muchos casos, es necesario "suscribirse" a actualizaciones del estado de una promesa. JavaScript ofrece esta posibilidad.  
Para esto, se utiliza el método `.then`, que permite especificar dos controladores:  
el primero se ejecuta cuando la `Promise` se resuelve con éxito, y el segundo cuando es rechazada.

```js
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("value"), 2000);
});
promise.then(
  (result) => console.log(result),
  (error) => console.log(error.message), // no se ejecuta
);

console.log("Primera línea");

// Este programa imprime:
/*
Primera línea
value
*/
```

En este ejemplo, primero se imprime el mensaje `Primera línea`.  
Después de que el temporizador finaliza, se llama al método `resolve`, el estado de la promesa cambia,  
el primer controlador proporcionado en `.then` se ejecuta y se imprime la línea `value`.  

Si en su lugar se llama al método `reject`, se ejecutará el segundo controlador.  
```js
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("Ooops!")), 1000);
});
promise.then(
  (result) => console.log(result), // no se ejecuta
  (error) => console.log(error.message),
);

console.log("Primera línea");

// Este programa imprime:
/*
Primera línea
Ooops!
*/
```

<div class="hint" title="finally">

  A veces, es necesario realizar acciones independientemente de si una promesa se resuelve o se rechaza. Para estas situaciones, JavaScript ofrece el método `finally`.  
  ```js
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("value"), 2000);
  });
  promise.then(
    (result) => console.log(result),
    (error) => console.log(error.message),
  );
  promise.finally(() => console.log("Promesa lista"));
  
  console.log("Primera línea");

  // Este programa imprime:
  /*
  Primera línea
  value
  Promesa lista
  */
  ```
</div>

Puedes leer más sobre promesas [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Tarea
Implementa un paso de validación en la función `delayedGreeter`.

Esta validación debe asegurar que el argumento `name` proporcionado a la función sea válido (por ejemplo, definido y no vacío).  
Si la entrada es inválida (`null`, `undefined` o una cadena vacía), debes rechazar la promesa pasando un objeto `Error` con el mensaje `"Name is required"` como argumento al método `reject`.

No necesitas agregar tiempos de espera adicionales al llamar a `reject` para esta tarea.

<div class="hint" title="Comprobar cadenas inválidas">

  Puedes usar [Conversiones de tipo implícitas](course://Operators/Implicit type conversions) para comprobar si la cadena es inválida, como se explica en los materiales teóricos de esta tarea.
</div>