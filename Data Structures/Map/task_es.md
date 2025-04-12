Ya hemos visto los _objetos_, que nos permiten almacenar datos como pares clave-valor, y los _arrays_, que están diseñados para almacenar datos en un orden específico. Pero los programadores a menudo necesitan estructuras de datos más especializadas.

Un _Map_ es muy similar a un _Objeto_. También está diseñado para almacenar datos en forma de pares clave-valor. La principal diferencia entre un _Map_ y un _Objeto_ es que, en un _Map_, las claves pueden ser de cualquier tipo.

Comencemos con la declaración:
```javascript
let squares = new Map();
```

Ahora nuestro Map `squares` está vacío. Para agregar nuevos elementos, podemos usar el método `set()`, que toma como argumentos una `clave` y un `valor`.  
Si un valor con la misma clave se ha agregado anteriormente, el **valor se reemplaza con el nuevo**.

```javascript
squares.set(4, 16);
squares.set(5, 25);
squares.set("Four",  "Four");
squares.set("Four",  "Sixteen");

console.log(squares);  // Map(3) { 4 => 16, 5 => 25, 'Four' => 'Sixteen' }
```

Map también ofrece métodos adicionales que nos resultan útiles:
- `squares.get()` – devuelve el valor asociado con la clave. Devuelve `undefined` si la clave no existe en el Map `squares`.
- `squares.has()` – verifica si el Map `squares` tiene un elemento con una clave en particular.
- `squares.delete()` – elimina el par con una clave en particular.
- `squares.clear()` – elimina todos los pares del Map `squares`.

```javascript
squares.delete(4)
console.log(squares.has(4));  // "false" porque eliminamos el par con esa clave
console.log(squares.get("Four"));  // "Sixteen"
```

Para más información sobre `Map`, lee [esta documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map).

### tarea
Se te da el mapa `fruitWeights`.  
- Elimina el par con la clave `"Tomato"`.  
- Agrega un nuevo par con la clave `"Pomelo"` y el peso de `1.45`.