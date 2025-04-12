JavaScript es de tipado dinámico, lo que significa que las variables no tienen un tipo fijo. El tipo de una variable se determina en tiempo de ejecución basado en el valor asignado. Esto permite una mayor flexibilidad, ya que la misma variable puede contener diferentes tipos de valores en distintos momentos.

```javascript
// Ejemplo 1: Tipado dinámico
let variable = 42; // variable es un número
console.log(typeof variable); // "number"

variable = "¡Hola, mundo!"; // ahora variable es una cadena de texto
console.log(typeof variable); // "string"
```
<div class="hint" title="Ventajas del tipado dinámico">
<ul>
<li><b>Flexibilidad</b>: Las variables pueden contener valores de cualquier tipo, lo que permite un código más flexible y reutilizable.</li>
<li><b>Facilidad de uso</b>: Se requiere menos código repetitivo, ya que no es necesario declarar explícitamente los tipos de las variables.</li>
<li><b>Prototipado rápido</b>: Desarrollo y prototipado más rápidos, ya que se pueden cambiar rápidamente los tipos de las variables sin modificar la estructura del código.</li>
</ul>
</div>

<div class="hint" title="Desventajas del tipado dinámico">
<ul>
<li><b>Errores en tiempo de ejecución</b>: Los errores relacionados con tipos solo se detectan en tiempo de ejecución, lo que puede ocasionar errores más difíciles de encontrar y solucionar.</li>
<li><b>Rendimiento</b>: El tipado dinámico puede llevar a un rendimiento más lento debido al gasto adicional de la verificación y conversión de tipos en tiempo de ejecución.</li>
<li><b>Legibilidad</b>: El código puede volverse más difícil de leer y entender, ya que el tipo de una variable no siempre es claro en el contexto.</li>
</ul>
</div>

### Tipado débil
JavaScript es de tipado débil, lo que significa que permite conversiones implícitas de tipos entre diferentes tipos de datos. Esto puede dar lugar a comportamientos inesperados si no se maneja con cuidado. Por ejemplo, sumar un número y una cadena de texto resultará en concatenación de cadenas en lugar de una suma aritmética.

```javascript
let x = 5;
let y = "10";
let result = x + y; // result es "510" porque y es una cadena de texto
console.log(result);

let a = "5";
let b = 10;
let sum = Number(a) + b; // sum es 15 porque a se convierte en un número
console.log(sum);
```
<div class="hint" title="Ventajas del tipado débil">
<ul>
<li><b>Conveniencia</b>: Las conversiones implícitas de tipos pueden hacer que el código sea más conciso y fácil de escribir, especialmente para operaciones simples.</li>
<li><b>Interoperabilidad</b>: Es más fácil trabajar con diferentes tipos de datos sin necesidad de conversiones explícitas, lo que puede ser útil en el desarrollo web.</li>
</ul>
</div>

<div class="hint" title="Desventajas del tipado débil">
<ul>
<li><b>Comportamiento inesperado</b>: Las conversiones implícitas de tipos pueden generar resultados inesperados y errores difíciles de rastrear.</li>
<li><b>Dificultad para depurar</b>: La depuración puede ser más compleja porque los problemas relacionados con tipos pueden no ser inmediatamente evidentes.</li>
<li><b>Mantenibilidad</b>: El código puede volverse menos mantenible con el tiempo, ya que las conversiones implícitas podrían introducir errores sutiles que son difíciles de corregir.</li>
</ul>
</div>

### Tarea
Declara una variable `result` y asígnale el valor de la suma de la cadena `"10"` y el número `5`. Imprime el resultado en la consola.

<div class="hint" title="Pista para la tarea">
Recuerda que al sumar una cadena de texto y un número en JavaScript, el resultado será una concatenación de cadenas. Asegúrate de entender la diferencia entre conversión implícita y explícita de tipos.
</div>