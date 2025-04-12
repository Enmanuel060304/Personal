# Entendiendo la Coerción de Tipos en JavaScript

La coerción de tipos es el proceso de convertir un valor de un tipo a otro (como de una cadena a un número) en JavaScript. Esto puede ocurrir de manera implícita (automáticamente por JavaScript) o explícita (manualmente por el desarrollador).

### Coerción de Tipo Implícita
JavaScript a menudo convierte tipos automáticamente al realizar operaciones. Esto se conoce como coerción de tipo implícita.

```javascript
console.log("5" - 3); // 2 (la cadena "5" es convertida al número 5)
console.log("5" + 3); // "53" (el número 3 es convertido a la cadena "3")
```

### Coerción de Tipo Explícita
También puedes convertir tipos manualmente utilizando funciones como `Number()`, `String()` y `Boolean()`.

```javascript
console.log(Number("5")); // 5
console.log(String(5)); // "5"
console.log(Boolean(0)); // false
```

### Tarea
Este código está diseñado para calcular e imprimir la suma de números representados como cadenas en las variables `a` y `b`, pero tiene un fallo.

Sin cambiar los tipos de las variables `a` y `b`, calcula la suma de los números y guarda el resultado en la variable `sum`. El resultado debe ser un número, no una cadena.

<div class="hint" title="Una función que puede ayudarte"> Recuerda usar la función `Number()` para convertir valores a números. </div>