Además de las declaraciones de funciones y las expresiones de funciones, JavaScript tiene una forma más de crear funciones: usando _expresiones de funciones flecha_.

La estructura de una _expresión de función flecha_ es muy simple:
```js
(param) => expresión
```

Como puedes ver, aquí tampoco hay un nombre de función, pero podemos asignar el valor de esta función a una variable:
```js
inc = (a) => a + 1;

console.log(inc(15));
```

Puedes pensar en una función flecha como una alternativa a una expresión de función tradicional, con algunas diferencias semánticas y limitaciones deliberadas en su uso. Por ejemplo, las funciones flecha son excelentes para proporcionar funciones de callback concisas, especialmente cuando se trabaja con métodos de arreglos. Todavía no hemos abordado los temas en los que esto podría ser importante, pero si estás interesado, puedes leer más sobre las expresiones de funciones flecha [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Tarea
Escribe una expresión de función flecha para seleccionar el máximo de sus argumentos. El valor de esta expresión debe ser el valor de la función `max`.

<div class="hint">

  Esta tarea puede realizarse fácilmente con el [operador condicional (ternario)](course://Conditional statements/Ternary operator).
</div>