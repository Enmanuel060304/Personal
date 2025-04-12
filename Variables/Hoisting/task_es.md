¿Qué sucede si intentamos referirnos a una variable que aún no está definida, pero que será definida más adelante en el programa?  
```
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 123;
```

Puedes notar esta peculiaridad. A pesar de que, en el momento en que se ejecuta `console.log()` en ambos casos, `b` aún no ha sido declarada,  
en el segundo caso, el intérprete (el programa especial que ejecuta nuestro código) es consciente de la variable `b`. Esto ocurre debido al Hoisting.

El Hoisting es un mecanismo de JavaScript donde las declaraciones de variables y funciones se mueven al inicio de su ámbito antes de la ejecución del código.

Esto también funciona con funciones:

```
func();

function func() {
    console.log("Hello from func()");
}
```

Aunque func() aún no ha sido declarada en el momento de la llamada a func(), gracias al Hoisting, podemos llamarla correctamente.

### Tarea  
Coloca las declaraciones de las variables en el orden correcto. El programa debería imprimir:
```
[func] a: 10
[func] b: 20
[global] a: 10
[global] b: 20