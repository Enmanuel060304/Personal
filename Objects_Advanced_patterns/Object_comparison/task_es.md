Cuando trabajamos con tipos primitivos, usamos los operadores de comparación `==` y `===`. Sin embargo, aún no hemos explorado cómo se comportan cuando se aplican a objetos.

```javascript
let car1 = {
    model: "Volkswagen Golf",
    year: 2016
};

let car2 = {
    model: "Volkswagen Golf",
    year: 2016
};

let car3 = car1;

console.log(car1 == car2);   // false
console.log(car1 === car2);  // false
console.log(car1 == car3);   // true
console.log(car1 === car3);  // true
```

Es posible que ya hayas deducido que, al comparar objetos, se comparan sus referencias, no los objetos en sí.  
Por ejemplo, la variable `car3` almacena una referencia al mismo objeto que la variable `car1`, mientras que la variable `car2` almacena una referencia a otro objeto,  
aunque tenga exactamente el mismo conjunto de atributos con valores idénticos.

Desafortunadamente, JavaScript no proporciona métodos integrados para comparar los valores de objetos.  
Para evitar iterar manualmente sobre los atributos de los objetos comparados, recomendamos usar el método `_.isEqual()` de la biblioteca [Lodash](https://lodash.com).

Para ello, necesitamos agregar la siguiente línea al principio del archivo:
```javascript
const _ = require("lodash");
```

Luego podrás comparar los valores de los objetos como se muestra a continuación:
```javascript
console.log(_.isEqual(car1, car2));  // true
```

Puedes leer más sobre `_.isEqual()` y otros métodos de la biblioteca Lodash [aquí](https://lodash.com/docs/4.17.15#isEqual).

### Tarea
Estás buscando un coche y quieres saber cuántas opciones están disponibles.  

Para hacerlo, necesitas implementar la función `countCars`. Esta función debe iterar a través de todos los elementos del array `cars`,  
el cual se pasa como el primer parámetro, y comparar cada uno con el objeto `car` proporcionado como el segundo parámetro.  

La función debe contar el número de objetos que son iguales a `car` y devolver este conteo como su resultado.