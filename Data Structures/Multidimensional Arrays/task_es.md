Como discutimos anteriormente, los elementos de un array pueden ser objetos de cualquier tipo, ¡incluso otros arrays!  
Podemos usar esto para almacenar arrays multidimensionales. El ejemplo más simple de uso de estos arrays es una matriz.

Al principio puede parecer intimidante, pero no te preocupes demasiado por ello de inmediato. Considera los arrays anidados como cajas negras hasta que necesites analizar su contenido.

```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);  // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
console.log(matrix.length); // 3
```

Analicemos esto con un ejemplo. `matrix` es simplemente un array con `3` elementos. Veamos el último elemento de este array. El último elemento del array `matrix` es… un array que contiene `[ 7, 8, 9 ]`.

```javascript
console.log(matrix[2]);  // [ 7, 8, 9 ]
```

Lo interesante de esto es que podemos usar inmediatamente el resultado de la expresión `matrix[2]` para acceder a un elemento del array anidado.

```javascript
console.log(matrix[2][1]);  // 8
```

### Tarea
Reemplaza el elemento `999` en `matrix` con `777`.

<div class="hint">
  Puedes usar el atributo <code>length</code> de los arrays externos y anidados para evitar calcular manualmente los índices.
</div>