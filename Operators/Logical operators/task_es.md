Existen varios operadores lógicos en el lenguaje JavaScript.  
A pesar de su nombre, pueden funcionar no solo con el tipo de datos _booleano_, pero para simplificar, comenzaremos con este.

### OR
En JS, este operador se representa con dos barras verticales: `||`.  
La idea de la operación _OR_ es que el resultado será `true` si **al menos uno** de los operandos es `true`:
```javascript
console.log(false || false);  // false
console.log(false || true);   // true
console.log(true || false);   // true
console.log(true || true);    // true
```

### AND
En JS, este operador se representa con dos ampersands: `&&`.  
La idea de la operación _AND_ es que el resultado será `true` solo si **ambos** operandos son `true`:
```javascript
console.log(false && false);  // false
console.log(false && true);   // false
console.log(true && false);   // false
console.log(true && true);    // true
```

### NOT
_NOT_ es un operador unario y se representa con un signo de exclamación `!`.  
Su lógica es simple: invierte un valor de `false` a `true` y viceversa:
```javascript
console.log(!false);  // true
console.log(!true);   // false
```

### Uso de operadores con variables
Por supuesto, puedes usar estos operadores con variables:
```javascript
let a = false;
let b = true;
let c =  a || !b;  // La variable "c" será "false"
```
<div class="hint">
Dado que el operador <code>!</code> tiene mayor precedencia que el operador <code>||</code>, se ejecutará primero, y no se requieren paréntesis.
</div>

Si lo deseas, puedes leer más sobre 
[AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND), 
[OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR), 
y [NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT) en la documentación actualizada.

### Tarea
Se te proporciona un fragmento de programa que debe verificar si el pase de un empleado permite el acceso al almacén.  
El acceso al almacén se concede solo si las 3 condiciones se cumplen al mismo tiempo:
- El pase tiene acceso habilitado para el almacén.
- No es un pase de invitado.
- El pase no está bloqueado.

Rellena los espacios en blanco para obtener el resultado correcto.