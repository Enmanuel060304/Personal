Los objetos permiten almacenar valores basados en claves, pero a menudo necesitamos un tipo de almacenamiento de datos ligeramente diferente.  
Por ejemplo, en forma de una secuencia ordenada. Este tipo de almacenamiento se llama un array. La forma más sencilla de crear un array vacío es:  
```javascript
let colors = [];
```

Si queremos declarar un array que contenga algunos datos, simplemente los proporcionamos entre corchetes.  
También podemos mostrar todo el array en la pantalla usando la función `console.log()`:

```javascript
let colors = ["red", "blue", "green", "yellow"];
console.log(colors);  // imprime [ 'red', 'blue', 'green', 'yellow' ]
```

La característica principal de los arrays es que son un almacenamiento indexado. Es decir, cada elemento tiene su propio número (_índice_). Los índices son secuenciales y comienzan desde **cero**. Usándolos, puedes interactuar con los elementos del array.  
```javascript
console.log(colors[0]);  // imprime "red"
console.log(colors[3]);  // imprime "yellow"
colors[1] = "purple";    // reemplaza "blue" por "purple"
console.log(colors[1]);  // imprime "purple"
colors[4] = "pink";      // añade un nuevo elemento al array
console.log(colors);     // [ 'red', 'purple', 'green', 'yellow', 'pink' ]
```

Podrías pensar que añadir un elemento al final de un array usando un índice es inconveniente. Y tendrías razón. En las siguientes tareas, aprenderemos cómo hacerlo de manera más sencilla.

### Tarea  
Añade dos colores más **al final del array**: `"brown"` y `"black"`.