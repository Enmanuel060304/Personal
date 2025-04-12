Al trabajar con arreglos, a menudo es necesario saber la `length` del arreglo, es decir, el número de elementos almacenados en él. Para esto, puedes usar la propiedad incorporada del arreglo `length`:
```javascript
let colors = ["red", "blue", "green", "yellow"];
console.log(colors.length);  // 4
```

Usando `length`, puedes encontrar fácilmente el índice del último elemento del arreglo:
```javascript
console.log(colors[colors.length-1]);  // "yellow"
```

Como una nueva característica, los arreglos en JavaScript ahora tienen un método llamado `at()`. Este hace lo mismo que obtener elementos por índice con `[]`, pero admite índices negativos.  
Los índices negativos indican que se está indexando desde el final del arreglo. Por lo tanto, el último elemento al usar `at` tiene el índice `-1`.
```javascript
console.log(colors.at(-3));  // “blue”
```

Ya habremos notado que la función `console.log()` sabe cómo mostrar el arreglo en una forma "bonita".  
Sin embargo, también es posible convertir un elemento de un arreglo en una cadena de texto directamente en un programa de JavaScript usando la función `toString()`:
```javascript
let colorsStr = colors.toString();
console.log(colorsStr);  // red,blue,green,yellow
```

### Tarea
Reemplaza el quinto elemento desde el final del arreglo con `"black"`.

<div class="hint">
  Pista: <code>at()</code> no permite modificar elementos. Para resolver la tarea, usa <code>length</code>.
</div>