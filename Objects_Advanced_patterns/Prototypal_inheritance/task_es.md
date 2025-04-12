En programación, a menudo necesitamos no solo crear nuevos objetos, sino también extender los existentes. En JavaScript, tenemos la capacidad de lograr esto.

_La herencia prototípica_ es un mecanismo que nos permite especificar qué objeto queremos extender.

Por ejemplo, imagina que tenemos un objeto `car` que describe las propiedades generales de un automóvil.  
Para describir un automóvil específico que le pertenece a alguien, podemos extender el conjunto actual de propiedades agregando otras nuevas.  
Hacemos esto utilizando una propiedad especial llamada `[[Prototype]]` y su configurador, `__proto__`. De forma predeterminada, la propiedad `[[Prototype]]` es `null`, pero podemos asignarle una referencia a un objeto prototipo.  

```javascript
let car = {
    model: "Audi A6",
    year: 2022,
    color: "cherry"
};

let registeredCar = {
    __proto__: car,
    owner: "Alex",
    numberPlate: "12AB345"
};

console.log(registeredCar.color);  // cherry
car.color = "black";
console.log(registeredCar.color);  // black
```

Al establecer el objeto `car` como prototipo del objeto `registeredCar`, hemos especificado que cuando se acceda a una propiedad del objeto `registeredCar` y esta no exista,  
la búsqueda de esa propiedad continuará en el objeto `car`. Esta redirección ocurre automáticamente.

De esta manera, más de dos objetos pueden combinarse en una cadena.

<div class="hint" title='"this" en herencia' >
  No olvides que cuando se llama un método, la referencia <code>this</code> seguirá apuntando al objeto desde el cual se invocó el método.

  ```javascript
  let car = {
    model: "Audi A6",
    year: 2022,
    color: "cherry",
    accident(){
      this.damaged = true;
    }
  };
  
  let registeredCar = {
    __proto__: car,
    owner: "Alex",
    numberPlate: "12AB345"
  };
  
  console.log(registeredCar);  // imprime { owner: 'Alex', numberPlate: '12AB345' }
  
  registeredCar.accident();
  
  console.log(registeredCar);  // imprime { owner: 'Alex', numberPlate: '12AB345', damaged: true }
  ```
  
  Por lo tanto, aunque el método `accident` está declarado dentro del objeto `car`, cuando se llama desde el objeto `registeredCar`,  
  la propiedad `damaged` se establecerá específicamente en el objeto `registeredCar`.
</div>

Puedes leer más sobre herencia y la cadena de prototipos [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

### Tarea
Se te proporciona un objeto `car` que contiene información sobre un automóvil, y un objeto `registeredCar` que extiende el objeto `car` con detalles adicionales como el número de matrícula y el propietario.

Debes declarar un objeto `hiredCar` utilizando el objeto `registeredCar` como su prototipo y agregar un atributo `lessee` con el valor `"Jacob"`.