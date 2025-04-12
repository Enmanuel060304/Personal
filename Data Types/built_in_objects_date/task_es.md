El objeto `Date` se utiliza para trabajar con fechas y horas.

<div class="hint" title="Algunos métodos de Date">
Usa los métodos del objeto <code>Date</code> para manipular y trabajar con fechas y horas. Aquí tienes algunos de los métodos más utilizados:

- <code>now()</code>: Devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970, 00:00:00 UTC.
- <code>getFullYear()</code>: Devuelve el año de la fecha especificada.
- <code>toDateString()</code>: Devuelve la parte de la fecha de un objeto <code>Date</code> como una cadena legible para humanos.

Para más información, consulta la <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">documentación actualizada de JavaScript sobre el objeto <code>Date</code>.</a>
</div>

```javascript
let date = new Date();
console.log(date.toDateString()); // por ejemplo, "Mon Oct 09 2023"
console.log(date.getFullYear()); // por ejemplo, 2023
```

### Tarea
Practica trabajando con fechas:
 - Crea un nuevo objeto `Date` con la fecha y hora actuales.
 - Extrae el año de esta fecha.
 - Convierte la fecha a una cadena legible para humanos.

<div class="hint" title="No reinventes la rueda"> Recuerda usar los métodos del objeto <code>Date</code> para manipular y trabajar con fechas y horas. </div>