La estructura de datos Set difiere de las anteriores. Almacena valores sin claves. La peculiaridad de un Set es que cada valor solo puede almacenarse una vez.  
Esto puede ser muy útil cuando no queremos llevar un registro manual de elementos duplicados.

La declaración es tan simple como para un _Map_:
```
let data = new Set();
```

Los métodos principales son los siguientes:  
- `data.add()` – añade un nuevo valor al Set `data`.  
- `data.delete()` – elimina un valor del Set `data`.  
- `data.has()` – verifica si el Set `data` contiene un elemento con una clave en particular.  
- `data.clear()` – elimina todos los elementos del Set `data`.  

```javascript
let data = new Set();
data.add("One");
data.add("Two");
data.add("Two");
console.log(data);  // Set(2) { 'One', 'Two' }
```

Para más información sobre Set, lee [este documento](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

### Tarea
Crea un Set llamado `names` y añade los elementos `"Ron"` y `"Harry"`.