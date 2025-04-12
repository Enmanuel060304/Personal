Al escribir programas educativos o simples ejemplos, a menudo no consideramos la posibilidad de errores, como datos iniciales incorrectos o problemas que puedan surgir durante la ejecución del programa.  
Sin embargo, en la práctica, es crucial que el programa siga siendo funcional y que, en caso de un problema, informe al usuario de manera clara e inequívoca sobre lo que salió mal.  
Por ejemplo, al registrarse en un sitio web, es mucho más útil ver un mensaje como  
"Ya existe un usuario con este correo electrónico" que una lista de decenas de líneas de error incomprensibles.  

Supongamos que estamos escribiendo un programa para mostrar la raíz cuadrada del valor almacenado en la variable `discriminant`:  
```javascript
let discriminant = 225;
console.log(Math.sqrt(discriminant));  // 15
```

Este programa es claro, pero si `discriminant` es negativo, el usuario verá `NaN`, lo cual nos dirá poco sobre la causa del error.  
Para manejar esto, podemos agregar una verificación antes de calcular la raíz cuadrada:

```javascript
let discriminant = -225;
if (discriminant < 0) {
    console.log("El discriminante es negativo");  // esta línea se ejecutará
} else {
    console.log(Math.sqrt(discriminant));
}
```

### Tarea  
Estás escribiendo un programa muy educado que siempre saluda al usuario.  
Con este propósito, hay una función especial llamada `greeting`, que toma un objeto que contiene el nombre y apellido del usuario como parámetro y devuelve el saludo: `"¡Hola, <Nombre> <Apellido>!"`.  

Sin embargo, hay un problema: a veces esta función puede recibir un objeto que no contiene los atributos requeridos.  
En tales casos, la función aún debe devolver un mensaje de saludo, pero será `"¡Hola, desconocido!"`.

<div class="hint">
  Puedes encontrar cómo verificar si un objeto contiene los atributos requeridos en la tarea <a href="course://Data Structures/Working with properties">Trabajando con propiedades</a>.
</div>

<div class="hint" title="Cadena de plantilla">

  En programación, es bastante común necesitar llenar una cadena de texto siguiendo un cierto patrón.  
  Una _cadena de plantilla_ es una cadena especial encerrada entre acentos graves (<code>&#96;</code>) que permite insertar expresiones usando marcadores de posición como `${expression}`.

  ```
  let num = 10;
  let str = "Ejemplo";
  console.log(`${str}: número^2 = ${num*num}`);  // Ejemplo: número^2 = 100
  ```

  Puedes ver otro ejemplo de cómo usar una cadena de plantilla en esta tarea y leer más sobre ellas <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">aquí</a>.
</div>