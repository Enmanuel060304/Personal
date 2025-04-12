### Parámetros y argumentos

Las funciones ya son un gran avance, pero declarar funciones con _parámetros_ abre aún más oportunidades. Para hacerlo, simplemente especifica los _parámetros_ al declarar la función:
```js
function add(a, b) {
    console.log("a + b =", a + b);
}
```
En el cuerpo de la función, podemos usar los parámetros como variables ordinarias.

Sin embargo, al llamar a una función, necesitamos especificar _argumentos_ — valores que se pasarán a la función en lugar de sus parámetros:
```js
add(10,20);  // a + b = 30
add(-2,-5);  // a + b = -7
```

### Devolver un valor

Una función puede _devolver_ un valor como resultado de su ejecución, el cual puede ser usado en otra parte del programa. Mejoremos nuestra función `add`:
```js
function add(a, b) {
    return a + b;
    console.log("Este mensaje nunca se imprimirá");
}
```
Nota que al ejecutar la instrucción `return`, la función termina inmediatamente.

Veamos cómo podemos usar el valor devuelto por la función:
```js
const result = add(10,20);  // guardar el valor devuelto en una variable
console.log(result);        // 30
console.log(add(-2,-5));    // usar inmediatamente el valor devuelto; imprime -7
```

Puedes leer más sobre cómo devolver valores [aquí](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions).


### Tarea

Escribe una función `isRightTriangle` con tres parámetros que especifiquen las longitudes de los lados de un triángulo: `side1`, `side2` y `side3`.

La función debe verificar si un triángulo con estas longitudes de lados es un triángulo rectángulo. Puedes usar el [teorema de Pitágoras](https://es.wikipedia.org/wiki/Teorema_de_Pit%C3%A1goras) para esta verificación.

Si el triángulo es rectángulo, la función debe devolver `true`, en caso contrario `false`.

<div class="hint">
  Debes considerar que las longitudes de los lados pueden pasarse a la función en cualquier orden.
</div>
<div class="hint">
  No necesitas calcular las raíces cuadradas — simplemente compara los cuadrados de los lados.
</div>