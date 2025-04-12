Los atributos o métodos no siempre están vinculados a objetos específicos.  
A veces, una funcionalidad pertenece a la clase en su conjunto, en cuyo caso se puede declarar utilizando la palabra clave `static`.

La diferencia clave es que los métodos y atributos estáticos se acceden utilizando el nombre de la clase en lugar del nombre del objeto.  
Por ejemplo, en nuestra clase `Vehicle`, podríamos querer incluir información sobre las unidades de medida utilizadas en nuestro programa al trabajar con vehículos.  
Además, podríamos querer agregar un método que devuelva un array de tipos básicos de vehículos.  
Estos atributos y métodos no son específicos de un vehículo en particular, sino que se comparten entre todos los objetos de la clase.

Tenga en cuenta que los atributos estáticos **no** son accesibles desde objetos de instancia, ya que no son atributos de objetos individuales.

```javascript
class Vehicle {
    static UnitsOfMeasurement = "km";

    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    static getCommonVehicleTypes() {
        return ["SUV", "Sedan", "Hatchback", "Coupe", "Truck"];
    }
    
    static getUnitsOfMeasurement() {
        // en métodos estáticos, `this` se refiere a una clase, no a una instancia de objeto
        return this.UnitsOfMeasurement;
    }
}

class Truck extends Vehicle {
    constructor(brand, year, payload) {
        super(brand, year);
        this.payload = payload;
    }
}

console.log(Vehicle.UnitsOfMeasurement);  // km
console.log(Vehicle.getCommonVehicleTypes());
// [ 'SUV', 'Sedan', 'Hatchback', 'Coupe', 'Truck' ]
console.log(Truck.getCommonVehicleTypes());
// [ 'SUV', 'Sedan', 'Hatchback', 'Coupe', 'Truck' ]

let ford = new Vehicle("Ford", 2015);
console.log(ford.UnitsOfMeasurement);  // undefined!
```

Tenga en cuenta que los atributos y métodos estáticos son heredados.  

Puede leer más sobre atributos y métodos estáticos [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static).

### Tarea  
Agregue una propiedad estática `coordinateSystem` con el valor `"cartesian"` a la clase `Point`.