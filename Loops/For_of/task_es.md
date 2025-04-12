Por supuesto, el caso más común es cuando necesitamos recorrer los elementos de alguna estructura de datos.  
Para esto, existe un bucle especial `for..of`. Es similar al bucle `for..in`, pero no son intercambiables.  

Usa `for..of` para iterar sobre **estructuras de datos** y `for..in` para iterar sobre **las propiedades de un objeto**.

```js
let colors = ["red", "blue", "green", "yellow"];

for (const color of colors) {
    console.log(color);
}

// Imprime:
// red
// blue
// green
// yellow
```

Como puedes ver, `color` toma los valores de los elementos del array `colors` uno por uno, permitiéndonos recorrer todos los elementos.

Podríamos lograr lo mismo con un bucle `for`, pero si no necesitamos los índices de los elementos, `for..of` es más corto y sencillo.

Además, `for..of` puede usarse para iterar sobre más que solo arrays. Por ejemplo, puedes usarlo con un [Set](course://Data Structures/Set) o un [Map](course://Data Structures/Map) también:

```js
const fruitWeights = new Map([
    ["Orange", 0.28],
    ["Pineapple", 1.34],
    ["Apple", 0.217],
]);

for (const entry of fruitWeights) {
    console.log(entry);
}
```

Puedes leer más sobre el bucle `for..of` [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of).

### Tarea  
Implementa la función `arrayMax`, que toma un array de números como parámetro y devuelve el valor máximo del array.

El proceso para encontrar el elemento máximo es sencillo:
- Inicialmente, asume que el elemento más grande es el primero, y almacena su valor en una variable, como `maxVal`.
- Después, recorremos todos los elementos, comparando cada uno con `maxVal`.
- Si un elemento es mayor que `maxVal`, actualizamos `maxVal` con su valor.

Al final del bucle, `maxVal` contendrá el valor máximo del array.