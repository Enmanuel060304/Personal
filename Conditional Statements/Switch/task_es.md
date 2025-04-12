¿Recuerdas la tarea en la que teníamos que determinar la intensidad del entrenamiento de un usuario según el rango en el que se encontraba su frecuencia cardíaca?  
¿Qué pasa si no tenemos un rango, sino un conjunto finito de valores? En este caso, podemos eliminar la necesidad de una cadena de `if-else-if` utilizando el operador `switch`.

Vamos a entender cómo trabajar con él a través de un ejemplo:
```js
let color = "green";
let action = "";
switch(color) {
    case "red":
        action = "Stop";  // Detener
        break;
    case "yellow":
        action = "Caution";  // Precaución
        break;
    case "green":
        action = "Go";  // Avanzar
        break;
    default:
        action = "Invalid";  // Inválido
}
console.log(action);  // Go
```

El operador `switch` toma un valor como _argumento_. Intenta comparar este valor uno por uno con los valores especificados por las palabras clave `case`. Si hay una coincidencia, se ejecutan las instrucciones especificadas después del `case` correspondiente.  
Si ninguno de los valores de las declaraciones `case` coincide, entonces se ejecutan las instrucciones en el bloque `default` (si este bloque está presente). El bloque `default` es opcional.

Podrás notar que todos los bloques `case` tienen una instrucción `break` después de la instrucción de asignación.  
Cuando se ejecuta la instrucción `break`, termina el procesamiento del bloque `switch`. Si eliminas `break`, los bloques `case` subsiguientes se ejecutarán hasta que se encuentre un `break` o se alcance el final del bloque `switch`:
```js
let letter = "b";
switch(letter) {
    case "a": console.log("a");  // NO será ejecutado
    case "b": console.log("b");  // imprimirá "b"
    case "c": console.log("c");  // imprimirá "c"
}
```

La declaración `switch` es bastante específica pero muy flexible. Puedes aprender todos los detalles de su uso [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch).

### Tarea
Se te da un fragmento de un programa que verifica si un día proporcionado de la semana es un fin de semana. Completa los espacios en blanco del `switch` para que:  
- `isWeekend` sea `true` si `dayOfWeek` es igual a `"Saturday"` o `"Sunday"`.  
- `isWeekend` sea `false` en caso contrario.