Antes de esto, todas las variables que declaramos eran accesibles para su uso. Pero ese no es siempre el caso. Hablemos sobre los alcances de las variables. El alcance determina la accesibilidad (visibilidad) de las variables.  
JavaScript tiene 3 tipos de alcance:  
- Alcance global  
- Alcance de bloque  
- Alcance de función  

### Alcance global  
Todas las variables que declaramos anteriormente eran globales. Todos los demás scripts y funciones pueden acceder a estas variables.  
```
let x = 10;
console.log(x);
```

### Alcance de bloque  
JavaScript te permite declarar variables usando `let` o `const` dentro de un bloque encerrado por llaves, y esas variables solo serán accesibles dentro de ese bloque.  
```
let a = 10;
let b = 20;
{
    console.log(b); // puede acceder a la variable desde el alcance global
    let a = 123; // puede declarar una nueva variable con alcance de bloque utilizando el mismo nombre
    console.log(a);
    let c = 30;
    console.log(c);
}
console.log(a); // a desde el alcance global permanece igual
console.log(c); // NO PUEDE acceder a la variable desde el alcance de bloque
```

### Alcance de función  
Es muy similar al alcance de bloque. Cada función crea un nuevo alcance propio.  
```
function func() {
    let sum = 321;
    console.log(sum);
}
```

### Tarea  
Hay algunas líneas en el programa dado que generan errores al ejecutarse. Usan variables que no están disponibles en sus alcances.  
Elimina las líneas que generan errores.  

<div class="hint">
  Hay solo dos líneas de este tipo
</div>