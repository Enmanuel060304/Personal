Ya hemos utilizado el _operador de asignación_ (`=`) en nuestros programas del curso.  
En esta lección, analizaremos más a fondo qué otros operadores están disponibles en JavaScript, así como algunas de sus particularidades.

Antes de comenzar, aclaremos algunos términos para estar en la misma página:  
- Un _operando_ (o _argumento_) es aquello sobre lo que un _operador_ realiza una acción. Por ejemplo, en la expresión `2 + 3`, el operador `+` tiene dos operandos: `2` y `3`.  
- Los operadores a menudo tienen dos operandos y se llaman _binarios_. Sin embargo, también existen operadores _unarios_, que toman un solo argumento. Por ejemplo, hay un operador unario de negación que cambia el signo de un número: `-10`.

Comenzaremos con operadores que conocemos desde la escuela: los operadores _aritméticos_.  
```
+  -- suma  
-  -- resta  
*  -- multiplicación  
/  -- división  
%  -- resto de la división entera  
** -- exponenciación  
```

La manera más fácil de familiarizarse con ellos es a través de ejemplos:

```javascript
console.log(11 + 3);  // 14
console.log(11 - 3);  // 8
console.log(11 * 3);  // 33
console.log(11 / 3);  // 3.6666666666666665
console.log(11 % 3);  // 2
console.log(11 ** 3); // 1331
console.log(16 ** 0.5 ); // 4 (elevar a la potencia de 0.5 es lo mismo que calcular la raíz cuadrada)
```
Puedes leer más sobre los _operadores aritméticos_ [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#arithmetic_operators).

<div class="hint" title="Operadores de asignación">

  Es bastante común en programación asignar a una variable el valor de una expresión que utiliza el valor previamente almacenado en esa variable:
  ```javascript
  a = a + 10;
  x = x * 2;
  ```
  En tales casos, JavaScript proporciona operadores de asignación, lo que te permite escribir el mismo código de forma más conveniente:  
  ```
  a += 10;
  x *= 2;
  ```
  Puedes leer más sobre los operadores de asignación [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators).  
</div>

### Tarea  
Escribe un programa para calcular el discriminante de un polinomio cuadrático:  
$${\displaystyle ax^{2}+bx+c}$$  
Esto puede hacerse usando la fórmula:  
$${\displaystyle b^{2}-4ac}$$  

Los coeficientes del polinomio están almacenados en las variables `a`, `b` y `c`. Escribe el resultado en la variable `disc`.