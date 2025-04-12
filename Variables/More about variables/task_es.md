Recordamos que las variables pueden representarse como cajas. El nombre de la variable es una etiqueta en la caja, y el valor es lo que está almacenado dentro.  
Nada nos impide colocar el valor de una caja en otra, es decir, podemos asignar a una variable el valor de otra variable.

```
let greeting = 'Hello!';
let morning = 'Good morning!';
let evening = 'Good evening!';
console.log(greeting); // Imprime 'Hello!'

greeting = morning;
console.log(greeting); // Imprime 'Good morning!'

greeting = evening;
console.log(greeting); // Imprime 'Good evening!'
```

### Comentarios  
Los programadores pueden añadir comentarios a un programa. Este es un texto que no afecta de ninguna manera al programa, pero ayuda a entender cómo funciona.  
Los comentarios en JavaScript comienzan con los caracteres `//`:  
```javascript
// Esto es un comentario
// console.log("Esta instrucción está comentada y no será ejecutada");
```

### Punto y coma  
En JavaScript, como en algunos otros lenguajes de programación, las instrucciones terminan con un punto y coma (`;`).  
Aunque omitirlo no es un error en JavaScript, lo incluiremos por coherencia.

### Bueno saber  
En programas antiguos, es posible que encuentres el uso de `var` en lugar de `let`. Este estilo está algo "desactualizado" hoy en día. Aunque hay una pequeña diferencia entre `let` y `var`, no es relevante para nosotros todavía.  
```
var message = 'Hello!';
```
Lo principal a recordar es usar `let` para declarar variables. Si tienes mucho interés en profundizar en la diferencia, lee [aquí](https://javascript.info/var).

### Tarea  
Declara una variable llamada `deliveryAddress` y asígnale el valor de la variable llamada `harryAddress`.