Antes de hablar sobre hoisting, discutamos un poco sobre el ciclo de vida en JavaScript usando la variable como ejemplo.  
```
Declaración -> Inicialización -> Uso
```

```
let a; // Declaración
a = 123; // Inicialización
console.log(a); // Uso
a = 321; // Uso porque a ya está inicializada
```

Declaración e Inicialización pueden realizarse al mismo tiempo  
```
let a = 123; // Declaración + Inicialización
```

¿Qué ocurre si intentamos usar una variable o función no declarada? Obtendremos un error:  
```
console.log(b); // ReferenceError: b is not defined
```

En este caso, si la variable ha sido declarada explícitamente, no habrá más errores, pero el valor de la variable será undefined:  
```
let b;
console.log(b); // undefined
```

### Tarea
Corrige el programa para que imprima el número 123 en pantalla