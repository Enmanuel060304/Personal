El bucle `for` se utiliza comúnmente en programación. Puede parecer complicado al principio, pero vamos a desglosarlo paso a paso.
```js
for(let i = 0; i < 3; i++) {
    console.log(i);
}
// Imprime: 0 1 2
```

Aunque el bucle `for` puede usarse de varias maneras, su propósito principal es como un _bucle con un contador_.  
Sabemos exactamente cuántas veces se ejecutará. El bucle `for` consta de 3 partes, separadas por punto y coma (`;`):
```js
for(<inicialización>; <condición>; <acción posterior>)
```

- `<inicialización>` – típicamente se utiliza para inicializar una variable de contador. Este bloque se ejecuta una vez antes de que comience el ciclo.
- `<condición>` – al igual que en un bucle `while`, esta es una expresión que se verifica antes de cada iteración del bucle. Si es `false`, el bucle se termina.
- `<acción posterior>` – una instrucción que se ejecuta después de cada iteración, antes de verificar la condición nuevamente. Generalmente se utiliza para actualizar la variable del contador.

El bucle `for` puede ser especialmente útil al trabajar con arreglos:
```js
let colors = ["red", "blue", "green", "yellow"]

for(let i = colors.length - 1; i >= 0; i--) {
    console.log(i, colors[i]);
}

// Imprime:
// 3 yellow
// 2 green
// 1 blue
// 0 red
```

Puedes leer más sobre el bucle `for` [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for).

### Tarea
Escribe una función que calcule la suma de los elementos en un arreglo. Se garantiza que todos los elementos pasados a la función serán números.