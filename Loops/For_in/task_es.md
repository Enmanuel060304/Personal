El próximo bucle que veremos es `for..in`. A pesar de la similitud en el nombre, es bastante diferente del bucle `for`.

En la [lección de Estructuras de Datos](course://Data Structures), aprendimos cómo trabajar con propiedades de objetos. Tomemos la declaración del objeto de [este](course://Data Structures/Working with properties) ejemplo:

```js
let car = {
    brand: "BMW",
    mileage: 268794,
    owner: "Jacob"
};
```

Usando el bucle `for..in`, puedes iterar sobre todas las claves de este objeto y obtener sus valores:

```js
for (const key in car) {
    console.log(key, ":", car[key]);
}
// Imprime
// brand : BMW
// mileage : 268794
// owner : Jacob
```

En cada iteración del bucle, `key` tomará el próximo nombre de clave del objeto `car`. De hecho, `key` es una cadena de texto (string).

Es posible que hayas notado que las claves se recuperaron en el mismo orden en que fueron declaradas. Sin embargo, este no siempre es el caso.  
Por ejemplo, si hay enteros no negativos entre las claves, se recorrerán primero en orden ascendente:

```js
let car = {
    brand: "BMW",
    "10": "1024",
    mileage: 268794,
    owner: "Jacob",
    "3": "8"
};

for (const key in car) {
    console.log(key, ":", car[key]);
}
// Imprime
// 3 : 8
// 10 : 1024
// brand : BMW
// mileage : 268794
// owner : Jacob
```

Puedes leer más sobre el bucle `for..in` [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in).

<div class="hint">

  Nota que si declaras la variable `key` en un bucle sin el modificador `let` o `const`, su alcance se extenderá más allá del bucle. Esto no siempre es el comportamiento deseado.
  ```javascript
  for (key in car) {
    // ...
  }
  console.log(key); // "owner"
  ```
  En la mayoría de los casos, se utiliza `const` aquí:
  ```javascript
  for (const key in car) {
    // ...
  }
  console.log(key); // ReferenceError: key is not defined
  ```
</div>

### Tarea
Se te da un objeto `medals`, que contiene información sobre países (como claves) y el número de medallas que recibieron en los Juegos Olímpicos (como valores).

Implementa la función `medalsFilter`, que toma dos argumentos:
- Un objeto `medals`.
- Un número `count`. 

Como resultado, la función debe devolver un arreglo con los nombres de los países (las claves del objeto `medals`) que han recibido estrictamente más medallas que `count`.