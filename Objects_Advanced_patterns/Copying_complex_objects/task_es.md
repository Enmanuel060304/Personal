Ya sabemos de la tarea anterior cómo copiar los atributos de un objeto a otro.  
Sin embargo, este enfoque puede no funcionar como se espera cuando los atributos son a su vez objetos o al trabajar con estructuras de datos más complejas.

```javascript
let arr = [
    {name: "Alice"},
    {name: "Bob"},
];

let arr1 = [];
Object.assign(arr1, arr);

arr[0].name = "Dave";  // cambio en el array original

console.log(arr1);  // [ { name: 'Dave' }, { name: 'Bob' } ]
```

Si necesitamos copiar un objeto complejo, incluyendo todas sus propiedades anidadas, es mejor usar la función `structuredClone()`. Puedes encontrar más detalles sobre esta función [aquí](https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone).

```javascript
arr1 = structuredClone(arr);

arr[0].name = "Dave";

console.log(arr1);  // [ { name: 'Alice' }, { name: 'Bob' } ]
```

Este enfoque se llama [copia profunda](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy).

### Tarea  
Esta vez, necesitas pedir camisetas para los participantes de la conferencia. Para ello, crea un array de objetos, donde cada objeto contenga el nombre del participante, la talla y el color de su camiseta.

La función `addToOrder` toma el array `orders` como su primer parámetro y la información de la camiseta `tShirt` como su segundo parámetro. Debe agregar el artículo al array.  
Sin embargo, la función no funciona correctamente, ya que todos los elementos del array comparten la misma referencia al objeto `tShirt`.

Corrige la función para que la salida del programa coincida con el resultado esperado, asegurándote de que todos los participantes de la conferencia reciban camisetas de la talla correcta.