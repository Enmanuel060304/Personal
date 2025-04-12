Puede parecer trivial tener una línea donde asignamos el valor `"Tom"` a la variable `name`.
```js
let name = "Tom";
```

De hecho, en JavaScript, una función también puede ser un valor y asignarse a una variable:
```js
let hello = function () {
    console.log("¡Hola!");
}

hello();  // imprime "¡Hola!"
```

Esta es otra forma de crear una función, llamada una _Expresión de Función_. Permite definir una función dentro de una expresión.

La principal diferencia entre una _expresión de función_ y una _declaración de función_ es el nombre de la función, que puede omitirse en las _expresiones de función_ para crear funciones _anónimas_.  
Una explicación más detallada está fuera del alcance de este curso por ahora, pero puedes leer más al respecto [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).


### Tarea

Dado que el valor en una asignación puede ser una función, puedes usar esta característica en asignaciones posteriores también.

Declara la variable `summarizer` y asígnale el valor de la variable `add`.