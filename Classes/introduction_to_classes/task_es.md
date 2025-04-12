Como habrás notado en la [lección anterior](course://Objects_Advanced_patterns), a menudo necesitamos crear objetos del mismo tipo.  
El enfoque _orientado a objetos_ de la programación se basa en este concepto.

> En la _programación orientada a objetos_, una _clase_ es una plantilla extensible de código de programa para crear objetos,  
> proporcionando valores iniciales para el estado (atributos de la clase) e implementaciones del comportamiento (métodos de la clase).

En esencia, una clase describe cómo deben ser los objetos, qué deberían hacer y qué propiedades deberían tener.  
Puedes pensar en una clase como un plano y en un objeto como una pieza hecha en estricta conformidad con ese plano.

```javascript
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    intro() {
        return "I'm " + this.name + ".";
    }
};

let emily = new Employee("Emily Taylor", "Planning");
let tom = new Employee("Tom Brown", "Marketing");

console.log(emily.intro());  // I'm Emily Taylor.
console.log(tom.intro());    // I'm Tom Brown.
console.log(tom.department);  // Marketing
```

En este ejemplo, declaramos la clase `Employee` y creamos dos objetos de esta clase utilizando la palabra clave `new`.  
Aunque este enfoque pueda parecer similar a cómo trabajamos con objetos antes, es importante tener en cuenta lo siguiente:  
* No se crearon objetos en el momento en que se declaró la clase. En este ejemplo, solo se crean dos objetos — `emily` y `tom`.  
  Cada uno de estos objetos tiene sus propios campos `name` y `department`.  
* El `constructor` es un método especial que se llama automáticamente cuando se crea un objeto.  
  Su función es inicializar los atributos del objeto. El constructor puede tomar cualquier cantidad de parámetros (o ninguno),  
  dependiendo de cómo lo defina el programador.  
* Al igual que declaramos métodos dentro de un objeto, en los métodos de clase, podemos usar la palabra clave `this` para referirnos a los atributos del objeto.  
* Los atributos y métodos de un objeto pueden accederse directamente utilizando el operador punto (por ejemplo, `tom.department`).

Puedes leer más sobre clases en JavaScript [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

### Tarea
Se te proporciona una clase `Point` incompleta diseñada para almacenar las coordenadas de un punto en el [sistema de coordenadas cartesianas](https://en.wikipedia.org/wiki/Cartesian_coordinate_system).  
Tu tarea es completar lo siguiente:  
1. El método `constructor`, que guarda las coordenadas en los atributos del objeto creado.  
2. El método `distanceFromOrigin`, que determina la distancia al centro del sistema de coordenadas. Puedes usar [esta fórmula](https://en.wikipedia.org/wiki/Cartesian_coordinate_system#Distance_between_two_points) para calcular la distancia.

Nota: utiliza el método `Math.sqrt()` para calcular la raíz cuadrada:  
```javascript
console.log(Math.sqrt(144))  // 12