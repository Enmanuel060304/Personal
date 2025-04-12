Podemos acceder a las propiedades de un objeto usando el operador de punto (`.`) y también cambiar el valor de las propiedades.  
```javascript
let car = {     // un objeto
  brand: "Volkswagen",  // clave "brand" con valor "Volkswagen"
  mileage: 32485        // clave "mileage" con valor 32485
};
console.log(car.brand)  // imprime "Volkswagen"
car.mileage = car.mileage + 750  // incrementa la propiedad mileage
```

Además, JavaScript permite agregar nuevas propiedades o eliminar las existentes en cualquier momento. Si intentas acceder al valor de una propiedad inexistente, será `undefined`. También puedes eliminar cualquier propiedad existente utilizando el operador `delete`.
```javascript
console.log(car.color)  // imprime "undefined"
car.color = "Red"
console.log(car.color)  // imprime "Red"
delete car.color        // elimina la propiedad "color"
console.log(car.color)  // imprime "undefined"
```

Si necesitamos verificar si un objeto tiene una propiedad en particular, podemos usar el operador `in` para ello:
```javascript
console.log("model" in car)  // imprime "false"
console.log("brand" in car)  // imprime "true"
```

### Tarea
- Agrega dos nuevas propiedades al objeto `car`:
  - `price` con el valor `9250`
  - `currency` con el valor `"USD"`
- Elimina la propiedad `owner` del objeto `car`.