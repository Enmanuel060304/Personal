Una de las grandes ventajas de los programas de computadora es que te permiten automatizar tareas repetitivas.  
Imagina que necesitas mostrar los números del 1 al 10 en la pantalla.  
Por supuesto, no querrías escribir 10 comandos `console.log` separados; aquí es donde los _bucles_ vienen al rescate.

En JavaScript, como en la mayoría de los otros lenguajes, hay varios tipos de bucles. Comencemos con el más simple: el bucle `while`.  
El concepto es sencillo: defines las acciones a repetirse y la condición bajo la cual deben continuar.

```js
let a = 3
while(a > 0){  // condición
    // cuerpo del bucle
    console.log(a);
    a--;
}
// Imprime: 3 2 1
```

Tan pronto como la ejecución del programa llega al bucle, se verifica la condición `a > 0` antes de ejecutar el cuerpo.  
Como es `true`, se ejecutará la primera _iteración_ del bucle. La variable `a` será impresa, y luego `a` será decrementada.

Después de esta iteración, el algoritmo se repite: se verifica la condición, y si sigue siendo verdadera, se ejecuta nuevamente el cuerpo del bucle.

Durante la última iteración del bucle, el valor de `a` será impreso (será `1`), y `a` será decrementada.  
En este punto, `a` será igual a cero. Cuando se vuelva a verificar la condición `a > 0`, será `false`, y la ejecución del bucle finalizará.

Por lo tanto, al usar la condición del bucle, podemos controlar cuántas veces se ejecuta su cuerpo y cuándo se detendrá.  
Uno de los errores más comunes que cometen los programadores al trabajar con bucles es crear un _bucle infinito_, que ocurre cuando la condición de terminación del bucle nunca se cumple:

```js
// Error: bucle infinito
// La variable `a` siempre es igual a 3
let a = 3
while(a > 0){
    console.log(a);
}
```

O un ejemplo un poco más complejo:

```js
// Error: bucle infinito
// La variable `a` no llegará a cero, sino que será negativa
let a = 3
while(a !== 0){
    console.log(a);
    a = a - 2;
}
```

Puedes leer más sobre el ciclo `while` [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while).

### Tarea  
Escribe una función para calcular el [máximo común divisor](https://es.wikipedia.org/wiki/M%C3%A1ximo_com%C3%BAn_divisor) de dos números.  
Puedes usar el [algoritmo de Euclides](https://es.wikipedia.org/wiki/Algoritmo_de_Euclides#Implementaciones) para hacerlo.