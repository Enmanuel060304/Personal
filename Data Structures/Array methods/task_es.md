Los arrays no solo proporcionan el método `at()` para facilitar su manipulación.  
Aquí hay otros métodos:  
- `push()` – **añade** un elemento al **final**  
- `pop()` – **extrae** un elemento del **final**  
- `shift()` – **extrae** un elemento del **inicio**  
- `unshift()` – **añade** un elemento al **inicio**  

```javascript
let colors = ["red", "blue", "green"]
let last = colors.pop()  // extrae "green" y lo devuelve como resultado
console.log(last);       // imprime "green"
colors.push("pink")      // añade "pink" al final

let first = colors.shift()  // extrae "red" y lo devuelve como resultado
console.log(first);         // imprime "red"
colors.unshift("white")     // añade "white" al inicio

console.log(colors)  // [ "white", "blue", "pink" ]
```

Puedes leer sobre muchos otros métodos [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods).

### Tarea
Se te proporciona un array `numbers` con nombres de números.  
Elimina los primeros dos elementos del array y añádelos al array `answer` **en orden inverso**. Esto significa que el array `answer` debería ser:  
```
[ "Two", "One" ]
```

<div class="hint">
  Presta atención a cómo funciona el método <code>shift()</code>.
</div>