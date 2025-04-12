Dijimos que los operadores lógicos pueden funcionar no solo con el tipo booleano. Veamos esto más de cerca.  
Primero que nada, si el operando no es de tipo booleano, se convertirá a dicho tipo:
```javascript
a = !(1 || false);  // lo mismo que !(true || false)
console.log(a);  // false
```

Para una lista completa de qué valores pueden convertirse a `true`, consulta la [lista de valores truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).  
Para una lista completa de qué valores pueden convertirse a `false`, consulta la [lista de valores falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).

Para no confundirse completamente, aquí están los valores que se encuentran con mayor frecuencia y que se convierten a `false`:
- `null`
- `0` (cero)
- `""` (cadena vacía)
- `undefined`

```javascript
let itsFalse = null || NaN || 0 || "" || undefined;  // el valor de itsFalse será "undefined"
console.log(!itsFalse);  // la negación de "undefined" es "true"
```

A veces puede ser útil convertir explícitamente un tipo a booleano. Para hacerlo, puedes usar el operador `!!`. De hecho, se puede considerar como dos operadores `!` consecutivos.

```javascript
console.log(!!-2);  // true
```

### Tarea
Se te da un programa con espacios en blanco. Llena los espacios en blanco para que el programa muestre solo `true`, utilizando únicamente el siguiente conjunto de valores posibles.  
Cada valor debe ser usado solo una vez.  
Valores posibles:
- `null`
- `""`
- `-2`