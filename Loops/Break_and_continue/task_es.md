Anteriormente, mencionamos que la condición del bucle determina cuántas veces se ejecutará el bucle y cuándo terminará.  
Sin embargo, hay dos palabras clave que pueden alterar ligeramente el comportamiento del bucle: `continue` y `break`.  

Cuando se ejecuta una instrucción `continue`, la iteración actual del bucle se interrumpe inmediatamente y el bucle pasa a la siguiente iteración.  

```js
for(let i = 1; i < 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
// Imprime: 1 2 4 5 7 8
```

`break`, por otro lado, detiene inmediatamente el bucle, finalizando también la iteración actual.  

```js
for(let i = 1; i < 10; i++) {
    if (i % 3 === 0) {
        break;
    }
    console.log(i);
}
// Imprime: 1 2
```

Si los bucles están anidados, `break` y `continue` solo se aplican al bucle en el que se llaman.  

```js
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (const row of matrix){
    for (const elem of row){
        if (elem % 2 === 0) {
            break;
        }
        console.log(elem);
    }
}

// Imprime: 1 7
```

Ten en cuenta que el mismo efecto se puede lograr sin usar estos operadores.  
Puedes hacerlo utilizando declaraciones condicionales o modificando la condición del bucle.  
El uso excesivo de `break` y `continue` puede hacer que tus programas sean más difíciles de leer, así que utilízalos solo cuando sea necesario.  

Puedes leer más sobre [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) y [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) por tu cuenta.  

### Tarea  
Vamos a practicar trabajando con matrices bidimensionales. Se te da una matriz bidimensional, `matrix`.  
Implementa una función `maxNegRow` que:  
- Encuentre el primer elemento negativo en cada fila de la `matrix`.  
- Luego, encuentre el máximo entre todos estos elementos.  

Se garantiza que al menos hay un elemento negativo en cada fila.  

<div class="hint">
  Usa <code>break</code> para salir del bucle tan pronto como encuentres el primer elemento negativo.
</div>

<div class="hint">
  Usa la función <code>arrayMax</code> de la tarea anterior para encontrar el elemento máximo en el arreglo.
</div>