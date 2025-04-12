El objeto `Number` se utiliza para representar y manipular números.

<div class="hint" title="Algunos métodos de Number">

Utiliza los métodos del objeto <code>Number</code> para manipular y trabajar con números. A continuación, se presentan algunos de los métodos más comunes:

- <code>toString()</code>: Convierte un número a una cadena.
- <code>isInteger(value)</code>: Determina si el valor es un número entero.
- <code>parseInt(string, radix)</code>: Convierte una cadena en un número entero de la base (radix) especificada.

Para más información, consulta la <a href ="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number">documentación actualizada de JavaScript sobre el objeto <code>Number</code>.</a>
</div>


```javascript
let num = 42;
console.log(num.toString()); // "42"
console.log(Number.isInteger(num)); // true
```

### Tarea
Practica trabajando con números:
 - Convierte el número a una cadena.
 - Verifica si el número es un entero.
 - Convierte la representación en cadena del número en un entero.

Imprime los resultados de cada operación en la consola.  
<div class="hint" title="No reinventes la rueda"> Recuerda utilizar los métodos del objeto <code>Number</code> para manipular y trabajar con números. </div>