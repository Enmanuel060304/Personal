Convertir los operandos a números al comparar puede ser tanto una característica como un problema.  
Por ejemplo, `0` y `false` se consideran lo mismo para la igualdad con `==`:

```javascript
console.log(0 == false);    // true
console.log("" == false);   // true, porque "" se convierte a 0 con el operador ==
console.log("0" == false);  // true, porque "0" se convierte a 0 con el operador ==
```

Sin embargo, ¡no siempre necesitamos estas conversiones!  
En estos casos, el operador de estricta igualdad `===` nos ayuda.  
Este verifica la igualdad sin conversión de tipos. Por lo tanto, comparar operandos de diferentes tipos siempre dará `false`.

También existe un operador de _"estricta desigualdad"_ `!==`.

```javascript
console.log(0 === false);   // false
console.log("" !== false);  // true
```

JS tiene otra forma de realizar comparaciones: el método `Object.is()`.  
Funciona casi igual que `===`, pero la única diferencia es cómo maneja `+0`, `-0` y `NaN`:

```javascript
console.log(-0 === +0);            // true
console.log(Object.is(-0, +0));    // false
console.log(NaN === NaN);          // false
console.log(Object.is(NaN, NaN));  // true
```

Podrías pensar que es fácil confundirse con las comparaciones, ¡y tendrías toda la razón!  
Por lo tanto, en cualquier situación poco clara, puedes consultar [esta tabla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#comparing_equality_methods) de la documentación actualizada.

### Tarea  
Se te da un programa con espacios en blanco. Llena los espacios en blanco para que el programa muestre solo `true`, utilizando únicamente el siguiente conjunto de valores posibles.  
Cada valor debe usarse solo una vez.  
Valores posibles:  
- `""`  
- `undefined`  
- `0`