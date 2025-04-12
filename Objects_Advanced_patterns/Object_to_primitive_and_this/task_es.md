Ya hablamos sobre coerción de tipos anteriormente en la lección de [Tipos de Datos](course://Data Types/type_coercion).  
Algunos lenguajes de programación permiten definir operaciones personalizadas en objetos, como suma o resta, pero JavaScript no lo hace.  
En JavaScript, los objetos siempre se convierten automáticamente a valores primitivos al realizar tales operaciones.  
Por lo tanto, aplicar operadores aritméticos a objetos no puede resultar en otro objeto.

Sin embargo, los objetos pueden convertirse a los tipos `Boolean`, `Number` o `String`, dependiendo del contexto en el que se utilicen.  
1. `Boolean`: Los objetos siempre se tratan como `true`. Y eso es todo.  
2. `Number`: Los objetos se convierten a números cuando se realizan operaciones aritméticas sobre ellos.  
3. `String`: En situaciones donde el contexto espera un string, los objetos pueden convertirse a un `String`.

Para controlar cómo se convierte tu objeto, puedes usar el símbolo incorporado [Symbol.toPrimitive()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)  
o los métodos [toString() y valueOf()](https://javascript.info/object-toprimitive#tostring-valueof).  

```javascript
let item = {
    name: "pineapple",
    price: 3.45,
    valueOf(){
        return this.price;
    },
    toString(){
        return this.name;
    }
};
// operador unario más para convertir a un valor numérico; se llama a valueOf()
console.log(+item);  // 3.45

// forzar coerción a un `String`; se llama a toString()
console.log(String(item));  // pineapple
```

### La palabra clave "this"
En el ejemplo anterior, podrías estar confundido por el uso de la palabra clave `this`. Esta se utiliza para referirse al objeto al que pertenece un método.  
Por ejemplo, en el método `valueOf`, necesitamos acceder al campo `price`. Dado que el campo está fuera del ámbito disponible, podemos usar `this` como una referencia al objeto para acceder a él.

Puedes leer más sobre "this" [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) y sobre la conversión de objetos [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion).

### Tarea
Se te da un objeto `subscription` que contiene los detalles de una suscripción a un servicio en línea.  
Más adelante en el programa, sería conveniente usar este objeto en operaciones aritméticas para la planificación del presupuesto.  
En tales escenarios, se espera que el objeto se convierta a un número igual al valor total de la suscripción para el período especificado en el atributo `month`.

Agrega un método `valueOf` al objeto `subscription` para lograr el comportamiento deseado.