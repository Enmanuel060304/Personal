En programación, incrementar o decrementar una variable en uno es una operación muy comúnmente utilizada.  
Tanto así que existen operaciones dedicadas para ello:  
- `++` para _incrementar_  
- `--` para _decrementar_  

El desafío para los principiantes es que estas operaciones se pueden usar tanto en forma de _prefijo_ como de _postfijo_. Aclarémoslo con ejemplos:

```javascript
let sum = 10;
sum++;
console.log(sum);  // 11
++sum;
console.log(sum);  // 12
```

Hasta ahora, parece que no hay diferencia, hasta que intentamos asignar el resultado de esta operación.

```javascript
let temp  // declara una variable más

sum = 10;
temp = sum++;
console.log(sum);   // 11
console.log(temp);  // 10

sum = 10;
temp = ++sum;
console.log(sum);   // 11
console.log(temp);  // 11
```

Ahora podemos ver la diferencia:  
La forma de _prefijo_ devuelve el valor ya incrementado como el resultado del operador, mientras que la forma de _postfijo_ devuelve el valor antiguo antes de realizar la operación de incremento.

El operador de decremento funciona exactamente de la misma manera.  
También puedes leer más sobre [incremento](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/