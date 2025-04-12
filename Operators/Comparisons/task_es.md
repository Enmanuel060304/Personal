Estás familiarizado con los operadores de _comparación_ de las matemáticas escolares.  
En JS, tenemos los siguientes operadores de _comparación_. El resultado de estos operadores siempre es de tipo _booleano_.  
```
>  -- mayor que  
<  -- menor que  
>= -- mayor o igual que  
<= -- menor o igual que  
== -- igual a  
!= -- diferente de  
```

Por ejemplo:  
```javascript
console.log(10 <= 20);  // true  
console.log(10 == 20);  // false  
console.log(10 != 20);  // true  
```

### Comparación de cadenas
Puedes comparar cadenas de texto además de números. Se comparan _lexicográficamente_. La idea de este enfoque es la siguiente:  
1. Se comparan los primeros caracteres de las cadenas. Si **no** son iguales, entonces el resultado de comparar las cadenas es el resultado de comparar esos **caracteres**.  
2. Si son **iguales**, entonces se comparan los siguientes caracteres (ir al paso 1).  
3. Si una de las cadenas termina antes en esta comparación carácter por carácter, se considera "menor".  
4. Si las cadenas tienen la misma longitud y **todos los caracteres coinciden**, entonces las cadenas son **iguales**.  

¿Pero cómo se comparan los caracteres? Se comparan según su orden en el alfabeto. Lo que aparece antes, se considera menor.  

¿Qué pasa con los caracteres en _mayúsculas_? Cualquier carácter en _mayúscula_ se considera _menor_ que cualquier carácter en _minúscula_.  
```javascript
console.log("Z" < "a");               // true  
console.log("Abra" < "Abracadabra");  // true  
console.log("Abadef" < "Abc");        // true  
```

### Comparación de diferentes tipos
Si intentas comparar diferentes tipos de datos, JavaScript intentará convertirlos a números:  
```javascript
console.log("20" > 9);   // true, la cadena "20" se convertirá al número 20  
console.log(true == 1);  // true  
```
Puedes leer más sobre los _operadores de comparación_ [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators).

### Tarea
Se te da un programa con espacios en blanco.  
Rellena los espacios en blanco para comprobar si el valor está dentro del rango especificado.

<div class="hint">  
  Al resolver esta tarea, necesitarás usar tanto operadores de <i>comparación</i> como el operador <i>lógico</i>.  
</div>