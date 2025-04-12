En la [lección sobre Alcance de Variables](course://Variables/Variable scopes), aprendimos que todas las variables tienen su propio alcance.  
Por ejemplo, en este caso, el alcance de la variable `name` está limitado a la función `helloGenerator`. No podemos usarla fuera del cuerpo de esta función:  
```js
function helloGenerator(name){
    // ...
}
console.log(name);  // ReferenceError: name is not defined
```
Sin embargo, JavaScript tiene un mecanismo que permite a una función recordar el entorno en el que fue creada. Este mecanismo se llama _closure_ (o cierre).  
```js
function helloGenerator(name){
    function hello(){
        console.log("Hola, " + name);
    }
    hello();
}

helloGenerator("Tom");  // imprimirá "Hola, Tom"
```

Pero podemos ir más allá. Recuerda que una función puede actuar como un valor regular. Entonces, intentemos devolver una función como el valor de retorno de otra función.  
```js
function helloGenerator(name){
    function hello(){
        console.log("Hola, " + name);
    }
    return hello;  // ¡sin paréntesis ()! No queremos llamar a la función hello aquí
}

helloTom = helloGenerator("Tom");
helloTom();  // imprimirá "Hola, Tom"
```
Nota que, en este ejemplo, estamos llamando a la función `hello` utilizando la variable `helloTom` fuera de la función `helloGenerator`.  
¡Sin embargo, la función todavía recuerda el contexto en el cual fue creada y el valor de la variable `name`!

Este enfoque, donde una función necesita recordar algún contexto, es especialmente común en el desarrollo web. Puedes leer más sobre cierres [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures).

### Tarea

Imagina que tenemos una aplicación que muestra la temperatura, y usamos la función `showTemperature` para generar un mensaje para la pantalla basado en el parámetro de temperatura.  
La temperatura predeterminada en nuestra aplicación está en [Celsius](https://es.wikipedia.org/wiki/Grado_Celsius), pero también queremos admitir [Fahrenheit](https://es.wikipedia.org/wiki/Grado_Fahrenheit).

Sería inconveniente pasar constantemente un parámetro adicional a la función `showTemperature` para especificar si la temperatura debe mostrarse en Celsius o Fahrenheit. ¡Es aquí donde son útiles los cierres!

Completa los espacios en blanco en la función `makeShowTemperature` para que, si `isFahrenheit` es verdadero, se devuelva una función que genere un mensaje en Fahrenheit; de lo contrario, una función que genere un mensaje en Celsius será devuelta.

Puedes usar esta fórmula para convertir Celsius a Fahrenheit:

$$c\ °C\ a\ f\ °F:\ f = c × 1.8 + 32$$