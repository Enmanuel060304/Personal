Anteriormente, nuestros programas seguían una secuencia estricta y sencilla de comandos.  
Sin embargo, en programación, esto usualmente no es el caso.  
Una de las súper habilidades de la programación es la capacidad de realizar diferentes acciones dependiendo de las condiciones y los datos que se encuentren mientras el programa se está ejecutando.

Esta técnica en programación se llama _ramificación_ (_branching_), y el operador más básico que nos permite implementarla es `if`.  
Su lógica es muy simple: si la condición entre sus paréntesis es `true`, entonces se ejecuta la secuencia de acciones dentro de sus llaves.

```js
let number = 28;
if (number % 2 === 0){
    // ambas líneas a continuación se ejecutarán:
    console.log("number = " + number);  // number = 28
    console.log("number is even");  // number es par
}
```

Si la condición no se cumple, las instrucciones no se ejecutarán.

El operador `if` se utiliza frecuentemente con un bloque opcional `else`, que se ejecuta cuando la condición es `false`.

```js
let passScore = 25;
let score = 20;
if (score >= passScore){
    // la siguiente línea NO se ejecutará
    console.log("¡Aprobaste el examen!");
} else {
    // la siguiente línea se ejecutará
    console.log("¡Reprobaste el examen!");  // ¡Reprobaste el examen!
}
```

Los bloques condicionales `if` pueden estar anidados unos dentro de otros o combinarse en una cadena.  
```
if (...){
    ...
} else if (...){
    ...
} else if (...){
    ...
}
```

Para evitar confusiones, piensa en los bloques de instrucciones anidados como pequeños programas separados.

Puedes leer más acerca de las declaraciones condicionales y el operador if-else [aquí](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals).

<div class="hint">

Si no especificas las llaves, la declaración `if` solo se aplicará a una de las instrucciones siguientes:  
```js
if (number % 2 === 0)
console.log("number is even");  // number es par
console.log("Hello");  // esto siempre se ejecutará, independientemente del valor de "number"
```
</div>

### Tarea  
Imagina que estás desarrollando un programa de monitoreo de ejercicios. Necesitas estimar la intensidad del ejercicio del usuario en función de su ritmo cardíaco. Llena los espacios según las siguientes condiciones:  
- Si el ritmo cardíaco es _menor o igual a_ `120`, el ejercicio se considera `"Fácil"`.  
- Si el ritmo cardíaco es _mayor que_ `120` pero _menor o igual a_ `155`, el ejercicio se considera `"Moderado"`.  
- Si el ritmo cardíaco es _estrictamente mayor que_ `155`, el ejercicio se considera `"Intenso"`.