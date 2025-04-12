## Introducción a las funciones

A menudo, necesitamos realizar la misma operación múltiples veces. Es muy útil cuando esta operación se puede llamar fácilmente en cualquier momento de nuestro programa, tal como usamos la _función_ `console.log()` para mostrar mensajes en la pantalla.

Así es típicamente como se estructuran los programas: están divididos en "bloques" lógicos que se utilizan según sea necesario. El tipo principal de estos "bloques" son las _funciones_.

Intentemos crear nuestra propia función:
```js
function hello() {
    console.log("Hello!");
}
```

Este proceso se conoce como una _declaración de función_ o una _instrucción de función_.

Consiste en:

* La palabra clave `function`.
* Un nombre de función, como `hello`.
* Una lista de _parámetros_ entre paréntesis (puede no haber parámetros, como en el ejemplo).
* El _cuerpo de la función_ encerrado entre llaves, que en este caso contiene una sola instrucción para imprimir en la pantalla.

Para llamar a una función, simplemente especifica su nombre seguido de paréntesis. Dado que nuestra función actualmente no tiene parámetros, utiliza paréntesis vacíos. Cuando llames a la función, se ejecutarán las instrucciones dentro de su cuerpo.
```js
hello()  // Imprimirá "Hello!"
```

Puedes leer más sobre funciones [aquí](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions).


### Tarea

Declara una función llamada `welcome` que muestre el mensaje `"¡Bienvenido al curso de JavaScript!"` cuando sea llamada.