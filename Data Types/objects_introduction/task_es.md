En JavaScript, los objetos son un tipo de datos fundamental utilizado para almacenar colecciones de datos y entidades más complejas. Un objeto es una colección de propiedades, donde cada propiedad se define como un par clave-valor.

### creando un objeto
Puedes crear un objeto usando la sintaxis de objeto literal:

```javascript
// Ejemplo: Creando un objeto
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};

console.log(person); // { name: "Alice", age: 25, isStudent: true }
```

### accediendo a propiedades de un objeto
Puedes acceder a las propiedades de un objeto utilizando notación de punto o notación de corchetes:
```javascript
// Accediendo a propiedades usando notación de punto
console.log(person.name); // "Alice"
console.log(person.age); // 25

// Accediendo a propiedades usando notación de corchetes
console.log(person["name"]); // "Alice"
console.log(person["age"]); // 25
```

### tarea
Crea un objeto llamado `car` con las siguientes propiedades:  
 - manufacturer (cadena)
 - model (cadena)
 - year (número)

Inicialízalas de acuerdo con el vehículo: un Toyota Corolla del año de producción 2020. Imprime el objeto `car` en la consola.

<div class="hint" title="Cómo crear un objeto"> Recuerda usar la sintaxis de objeto literal para crear el objeto `car`. Puedes consultar el ejemplo anterior para orientación. </div>

<div class="hint" title="¿Quieres saber más?"> Para más información, consulta la <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects">documentación actualizada de JavaScript sobre objetos.</a></div>