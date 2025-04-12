La mayor parte del tiempo, una aplicación de JavaScript necesita trabajar con información. Esto puede ser, por ejemplo, información sobre algún producto en una tienda en línea. Para trabajar con esto en nuestro programa, necesitamos variables.

Una variable es un "almacenamiento con nombre" para los datos. Puedes imaginarla como una caja en una estantería. La caja almacena los datos, y la caja tiene una etiqueta para que no olvides qué guardaste en ella.

Para crear una variable en JavaScript, usa la palabra clave `let`. `let` es una palabra clave especial en el lenguaje JavaScript. Nos encontraremos con muchas otras palabras clave en el futuro.

Vamos a crear la variable greeting. Este tipo de creación de variables se llama "declaración" en los lenguajes de programación:
```
let greeting;
```

Para asignar un valor a la variable greeting, usamos el operador `=`:
```
greeting = "Hello";
```
Podemos imaginar que colocamos el texto "Hello" en una caja con una etiqueta que dice "greeting".

Podemos cambiar el valor de una variable tantas veces como queramos durante el programa. Además, podemos combinar la declaración de una variable y su asignación:
```
let greeting = "Hello";
```

Por último, aprendamos cómo ver qué está almacenado dentro de una variable. Para hacerlo, usemos la función `console.log` incorporada en JavaScript. Mostrará el valor de la variable cuyo nombre le indiquemos.
```
console.log(greeting);
```
Puedes leer más sobre esta función [aquí](https://developer.mozilla.org/en-US/docs/Web/API/console/log_static).

_Nota: En JavaScript, puedes usar comillas simples o dobles para las cadenas de texto. Para mantener la consistencia, utilizaremos comillas dobles._

```javascript
let greeting = 'Hello';  // también es una cadena válida
```

### Tarea
Modifica el programa para que muestre en pantalla la palabra "JavaScript".

<div class="hint" title="Más sobre variables">
  Puedes encontrar más información al respecto en la <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables"> documentación actualizada</a>.
</div>