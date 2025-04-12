JavaScript ofrece varios objetos integrados disponibles en el ámbito global. Estos objetos son fundamentales para el lenguaje y proporcionan una variedad de funcionalidades.

####  `String`
El objeto `String` se utiliza para trabajar con texto y ofrece muchos métodos para manipular cadenas de texto.

<div class="hint" title="Algunos métodos de String">

Utiliza los métodos del objeto `String` para manipular y trabajar con texto. Aquí hay algunos métodos comúnmente utilizados:

- <code>length</code>: Devuelve la longitud de la cadena.
- <code>toUpperCase()</code>: Convierte la cadena a mayúsculas.
- <code>replaceAll(searchValue, newValue)</code>: Reemplaza todas las ocurrencias de `searchValue` con `newValue`.
- <code>split(separator)</code>: Divide la cadena en un array de subcadenas según el separador especificado.

Para más información, consulta la <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String">documentación actualizada de JavaScript sobre el objeto <code>String</code>.</a>
</div>

```javascript
let str = "Hello, World!";
console.log(str.length); // 13
console.log(str.toUpperCase()); // "HELLO, WORLD!"
```

### Tarea
Completa el código para realizar las siguientes operaciones:  
- Calcular la longitud de la cadena.
- Convertir la cadena a mayúsculas.
- Reemplazar todas las ocurrencias de la letra 'a' con '@'.

<div class="hint" title="No reinventes la rueda">
Recuerda utilizar los métodos del objeto `String` para manipular y trabajar con texto. </div>

<div class="hint" title="¿Quieres saber más?">
Para más información, consulta la <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects">documentación actualizada de JavaScript sobre objetos integrados</a>.
</div>