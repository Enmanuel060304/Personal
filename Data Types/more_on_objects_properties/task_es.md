En JavaScript, una propiedad de datos es una propiedad que contiene un valor. Tiene cuatro atributos:  
- `value`: El valor de la propiedad.  
- `writable`: Si es `true`, el valor de la propiedad puede ser modificado.  
- `enumerable`: Si es `true`, la propiedad será listada en los bucles.  
- `configurable`: Si es `true`, la propiedad puede ser eliminada o modificada.  

Puedes definir una propiedad de datos utilizando la sintaxis de objetos literales:

```javascript
let person = {
    name: "Alice",
    age: 25
};

console.log(person.name); // "Alice"
```

### Entendiendo las propiedades accesorias  
Las propiedades accesorias son propiedades definidas por un par de funciones getter y setter. No mantienen un valor, sino que lo calculan al ser accedidas.  

- `get`: Una función que se llama cuando se lee la propiedad.  
- `set`: Una función que se llama cuando se establece la propiedad.  

Hablaremos más sobre las funciones en detalle en la [lección sobre funciones](course://Functions).  
Por ahora, basta con imaginar que las funciones `get` y `set` son fragmentos de código que se ejecutarán al leer o modificar el campo correspondiente.  

Puedes definir propiedades accesorias utilizando el método `Object.defineProperty`:

```javascript
let person = {
    firstName: "Alice",
    lastName: "Smith"
};

Object.defineProperty(person, "fullName", {
    get: function() {
        return this.firstName + " " + this.lastName;
    },
    set: function(name) {
        [this.firstName, this.lastName] = name.split(" ");
    }
});

console.log(person.fullName); // "Alice Smith"
person.fullName = "Bob Johnson";
console.log(person.firstName); // "Bob"
console.log(person.lastName); // "Johnson"
```

### Tarea  
Se te proporciona un objeto llamado `book` con las siguientes propiedades de datos:  
- `title`  
- `author`  
- `year`  

Define la propiedad accesoria `summary`.  
La propiedad `summary` debe devolver una cadena con el formato: `"Título por Autor, publicado en Año"`.  

<div class="hint" title="Pista para la Tarea">  
Recuerda usar el método `Object.defineProperty` para definir la propiedad accesoria `summary`.  
</div>  

<div class="hint" title="¿Quieres saber más?">  
Para más información, consulta la <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_properties">documentación actualizada de JavaScript sobre propiedades de objetos</a>.  
</div>