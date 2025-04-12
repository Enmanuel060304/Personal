Esto puede no ser obvio, pero todos los operadores tienen diferentes prioridades, es decir, el orden en el que serán ejecutados.  
Puedes leer un excelente y detallado artículo sobre la precedencia de operadores [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence).  

Por ejemplo:  
```javascript
console.log(+"1" + +"2" - 2**2);  // -1
```
Los operadores de _más unario_ tienen la mayor precedencia, por lo que podemos imaginar que en el primer paso, los cálculos serán transformados a:  

```javascript
console.log(1 + 2 - 2**2);  // -1
```

Después, se realizará la operación de potenciación.  
```javascript
console.log(1 + 2 - 4);  // -1
```
Y solo después, la suma y la resta.  

No te pediremos que memorices la tabla de precedencia de operaciones, incluso a un programador experimentado a veces puede confundirle.  
Te sugerimos que, en cualquier situación en la que no estés seguro/a sobre la prioridad de las operaciones, utilices paréntesis para controlar la prioridad:  
```javascript
console.log( (+("1" + "2") - 2)**2 );  // 100
```

### Tarea  
Coloca paréntesis en la expresión para que la variable `result` contenga el valor `74`.