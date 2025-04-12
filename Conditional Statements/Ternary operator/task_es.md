En programación, a menudo es necesario definir el valor de una variable en función de una condición. Por ejemplo: 
```js
let guestType = "adult";
let tickerPrice;
if (guestType === "adult"){
    tickerPrice = 10;
} else {
    tickerPrice = 5;
}
console.log(tickerPrice);  // 10
```

Sin embargo, puedes notar lo engorrosa que parece una operación tan simple.  
Por lo tanto, en estos casos, es más fácil usar el _operador condicional (ternario)_. Recuerda que en JavaScript, tenemos operadores unarios y binarios, que tienen uno y dos operandos, respectivamente. Como habrás adivinado, este operador tiene _3 operandos_.

```js
let guestType = "adult";
let tickerPrice = guestType === "adult" ? 10 : 5;
console.log(tickerPrice);  // 10
```

La idea es la siguiente:  
- El primer operando es una _condición_ (`guestType === "adult"`).  
- Si la _condición_ es `true`, se evaluará el operando que sigue al signo `?` (`10`).  
- Si la condición es `false`, se evaluará el operando que sigue al signo `:` (`5`).  

En otras palabras, dependiendo de la condición, el valor de toda la expresión `guestType === "adult" ? 10 : 5` será `10` o `5`.

Puedes leer más sobre el _operador condicional ternario_ [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

### Instrucción  
Usando el operador ternario, calcula el [valor absoluto](https://en.wikipedia.org/wiki/Absolute_value#Real_numbers) de la variable `n` en una sola línea.