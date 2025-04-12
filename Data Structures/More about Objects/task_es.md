Anteriormente, hemos trabajado con variables de tipos de datos simples, como números y cadenas de texto.  
A estos se les llama _primitivos_. Sin embargo, también discutimos brevemente tipos de datos más complejos, como los objetos. Ahora, analicemos los objetos con más detalle.  
Un objeto puede considerarse como una caja con archivos almacenados dentro. Llamaremos al nombre del archivo el "nombre de la propiedad" y al contenido del archivo el "valor".

Volvamos a la tarea más sencilla de la lección anterior: crear un objeto vacío sin propiedades. Podemos hacerlo de dos maneras:  
```javascript
// Usando la palabra clave "new"
let car = new Object();
// O simplemente con llaves vacías
// Esta declaración se llama un "objeto literal"
let car = {};
```

Si queremos declarar un objeto con algunas propiedades, simplemente enumeramos los pares de propiedad-valor en llaves. El nombre de la propiedad también se conoce como la “clave”.  
```javascript
let car = {     // un objeto
  brand: "Volkswagen",  // clave "brand" con valor "Volkswagen"
  mileage: 32485        // clave "mileage" con valor 32485
};
```

### Tarea  
Declara un objeto llamado `student` con tres propiedades:  
- `name` con el valor `"Bob"`  
- `age` con el valor `21`  
- `averageGrade` con el valor `4.28`