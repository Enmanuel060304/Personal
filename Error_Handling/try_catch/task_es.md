En la tarea anterior añadimos una comprobación para determinar si un objeto contiene ciertos campos, pero no consideramos casos donde, por ejemplo, un parámetro de función sea `null` u otros problemas similares.  
Agregar numerosas comprobaciones a un programa no solo aumenta el tiempo de desarrollo, sino que también hace que el código sea menos legible.  
Afortunadamente, JavaScript tiene un mecanismo más conveniente para manejar errores: _excepciones_.

Cuando ocurre un error crítico, la ejecución del programa se detiene inmediatamente y se muestra información del error.  
Por ejemplo, si intentamos usar `null` en lugar de una referencia a un objeto:

```js
let wrongReference = null;
wrongReference.test = 10;
```

Ejecutar este programa genera una salida como esta:

```text
/usr/local/bin/node task.js
task.js:2
wrongReference.test = 10
                    ^
TypeError: Cannot set properties of null (setting 'test')
    at Object.<anonymous> (task.js:2:21)
    at Module._compile (node:internal/modules/cjs/loader:1368:14)
    ...
```

Por lo tanto, podemos decir que ocurrió una _excepción_ al ejecutar la instrucción de asignación.  
Por supuesto, generalmente no necesitamos terminar el programa cuando ocurre un error,  
así que el programador puede especificar explícitamente cómo desea manejar los errores utilizando el bloque `try...catch`:

```js
try {
    let wrongReference = null;
    wrongReference.test = 10;
    console.log("Esto no se imprimirá");
} catch (e) {
    console.log(e.message);  // Imprime "Cannot set properties of null (setting 'test')"
}
console.log("Listo");  // Listo
```

En el bloque `try`, colocamos instrucciones que podrían generar excepciones.  
Cuando ocurre un error, se detiene la ejecución de las instrucciones restantes en el bloque `try`, y se ejecuta el bloque `catch`,  
cuyo propósito es manejar el error.  
El bloque `catch` puede aceptar un objeto como argumento que contiene información sobre el error.  
Una vez que se ejecuta el bloque `catch`, el programa continúa ejecutando las instrucciones que siguen al constructo `try..catch`.

La principal ventaja de usar el bloque `try..catch` es que separa la lógica del programa del manejo de errores, lo que hace que el código sea más legible.

Puedes leer más sobre el manejo de errores utilizando `try..catch` [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch).

### Tarea  
Imagina que estás escribiendo un programa para mostrar información de vuelos en el aeropuerto.  
Casi has terminado la función `flightBoardPresenter`, que toma como parámetro un arreglo de objetos de la clase `Flight`.  
Usando los métodos `getDeparture` y `getDestination`, estás obteniendo los códigos de los aeropuertos de salida y llegada.

La función `flightBoardPresenter` es crítica para las operaciones del aeropuerto, y quieres asegurarte de que continúe funcionando incluso si,  
por alguna razón, el arreglo `elements` contiene objetos que no tienen los métodos `getDeparture` y `getDestination`.  
Actualmente, el programa se detendrá y no se mostrarán vuelos si ocurre este problema.

Coloca la línea <code>result += &#96;${e.getDeparture()} - ${e.getDestination()}\n&#96;;</code> dentro de un bloque `try`.  
Si ocurre una excepción, añade la cadena `"--- - ---\n"` al resultado para asegurar que el programa produzca la salida esperada.

<div class="hint" title="Carácter de nueva línea">

  La combinación de caracteres <code class="language-text">\n</code> representa un salto de línea.  
  Por ejemplo, la salida del código <code>console.log("abc\ndef\nghi");</code> será:
  ```text
  abc
  def
  ghi
  ```  
</div>