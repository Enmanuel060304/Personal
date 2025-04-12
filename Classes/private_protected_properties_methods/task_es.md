La programación orientada a objetos ofrece otra ventaja: permite ocultar los detalles de la implementación de los métodos.  
Esto permite al programador definir una _interfaz_ – la forma esperada de interactuar con los objetos de una clase.  
En programas simples, esto puede parecer redundante, pero en proyectos grandes, tales soluciones mejoran significativamente el mantenimiento y ayudan a prevenir el mal uso accidental.  

Por ejemplo, supongamos que almacenamos el kilometraje de un auto en una propiedad. Nada podría evitar que este campo se disminuya accidentalmente o incluso se le asigne un valor negativo, lo cual contradeciría la lógica de la clase.  

```javascript
class Vehicle {
    constructor(model, mileage) {
        this.model = model;
        this.mileage = mileage;
    }
}

let car = new Vehicle("Audi A4", 98000);

car.mileage = -12000;      // rompe la lógica
console.log(car.mileage);  // -12000
```

Las propiedades `model` y `mileage` son _públicas,_ lo que significa que sus valores pueden ser modificados libremente accediendo directamente a estos campos.  
Para proporcionar más control sobre la modificación de estos campos, JavaScript admite campos _privados_ y ofrece formas de emular campos y métodos _protegidos._  

### Propiedades protegidas
Las propiedades protegidas son accesibles solo a través de métodos de la clase y métodos de clases que heredan.  
Aunque JavaScript no admite campos protegidos de forma nativa a nivel del lenguaje, los programadores pueden usar soluciones alternativas para emularlos.  

Por convención, los campos protegidos se nombran con un guion bajo inicial (`_`).  

```javascript
class Vehicle {
    constructor(model, mileage) {
        this.model = model;
        this._mileage = mileage;  // _mileage es ahora una propiedad "protegida"
    }
    set mileage(value) {
        if (value >= this._mileage) {
            this._mileage = value;
        }
    }
    get mileage() {
        return this._mileage;
    }
}

let car = new Vehicle("Audi A4", 4300);
car.mileage = 27000;
car.mileage = -12000;      // no rompe nada
console.log(car.mileage);  // 27000
car._mileage = 10;          // todavía es posible acceder directamente
console.log(car.mileage);  // 10
```

El campo `mileage` ahora se accede exclusivamente a través de un getter y un setter, lo que garantiza que cualquier modificación a este campo cumpla con los requisitos para mantener la consistencia del objeto.  
Aunque técnicamente aún es posible eludir estas restricciones, realmente no deberías hacerlo 🙂.  

### Propiedades privadas
JavaScript admite propiedades y métodos privados a nivel de lenguaje. Estos solo pueden ser accedidos desde los métodos de la misma clase.  
Incluso las clases heredadas no pueden acceder directamente a campos o métodos privados. Los nombres de los campos privados deben comenzar con `#`.  

```javascript
class Vehicle {
    #mileage;  // declaración de campo privado
    constructor(model, mileage) {
        this.model = model;
        this.#mileage = mileage;
    }
    set mileage(value) {
        if (value >= this.#mileage) {
            this.#mileage = value;
        }
    }
    get mileage() {
        return this.#mileage;
    }
}

let car = new Vehicle("Audi A4", 4300);
car.mileage = 27000;
car.mileage = -12000;      // no rompe nada
console.log(car.mileage);  // 27000
car.#mileage = 10;          // error
```

Las clases hijas no pueden acceder a los campos privados de una clase padre, lo que puede ser útil en ciertos casos. Por lo tanto, los programadores, con mayor frecuencia, prefieren usar campos **protegidos** en su lugar.  

<div class="hint">

  Todo lo anterior también se aplica a los métodos, pero para ser breves, no nos centraremos en eso por ahora.  

  ```javascript
  class Measurement{
      constructor(meters){
          this.meters = meters;
      }

      #toCentimeters(){
          return this.meters * 100;
      }

      getCentimeters(){
          return this.#toCentimeters();
      }
  }

  let height = new Measurement(1.8);
  console.log(height.getCentimeters());  // 180
  ```
</div>

Puedes leer más sobre propiedades y métodos privados y protegidos [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_properties).  

### Tarea
Se te da la clase `Vehicle`, que, para simplificar, incluye solo una propiedad que representa el nivel actual de combustible en el tanque.  
También hay un campo estático, `fuelCapacity`, que especifica la capacidad máxima del tanque de combustible.  

Tu tarea es implementar los métodos setter y getter para la propiedad `_fuel`. En el setter, antes de modificar `_fuel`, debes asegurarte de que el nuevo valor sea mayor o igual a cero y no exceda `fuelCapacity`.  
Si esta condición no se cumple, el nivel de combustible debe permanecer sin cambios.