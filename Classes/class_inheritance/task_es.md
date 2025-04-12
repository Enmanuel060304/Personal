La *herencia* de clases te permite crear una nueva clase que extiende la funcionalidad de una existente.  
En esencia, es muy similar a la [herencia prototípica](course://Objects_Advanced_patterns/Prototypal_inheritance) en los objetos.

<div class="hint" title="Clase y herencia prototípica">

  El mecanismo de herencia de clases en realidad se basa en la herencia prototípica. No entraremos en detalles aquí, pero si estás interesado, puedes leer más al respecto [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).
</div>

Continuemos con nuestro ejemplo de empleados de la tarea anterior. Supongamos que queremos describir a un profesor que es empleado de una universidad.

```javascript
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    intro() {
        return "Soy " + this.name + ".";
    }
}

class Professor extends Employee {
    constructor(name, department, researchArea) {
        super(name, department);
        this.researchArea = researchArea;
    }
}

let professor = new Professor("Scott Williams", "Laboratorios", "Robótica");

console.log(professor.intro());       // Soy Scott Williams.
console.log(professor.department);    // Laboratorios
console.log(professor.researchArea);  // Robótica
```

Para crear una clase `Professor` que hereda de `Employee`, usamos la palabra clave `extends` al declarar la clase.  
Para describir la relación entre estas clases, podemos decir que `Professor` es una clase _hija_, mientras que `Employee` es una clase _padre_.  
En la clase que hereda, podemos declarar atributos y métodos adicionales según sea necesario. Sin embargo, se debe prestar especial atención al constructor.

Al crear un objeto de la clase `Professor`, debemos proporcionar valores para los campos `name` y `department`, que pertenecen a la clase `Employee`,  
además del valor para `researchArea`, que es específico de la clase `Professor`.  
Por lo tanto, el constructor de la clase `Professor` debe tomar los tres valores.

El constructor de cada clase es responsable de inicializar correctamente sus propios campos. El constructor de la clase `Professor`  
inicializa los campos específicos de `Professor`, mientras que el constructor de la clase `Employee` inicializa sus propios campos.  
Para lograr esto, el constructor de `Professor` llama explícitamente al constructor de `Employee` utilizando la palabra clave `super`.

Siempre debes llamar al constructor de la clase base usando `super` dentro del constructor de la clase hija.  
Es importante destacar que esta llamada debe ocurrir **antes** de usar `this` dentro del constructor.

<div class="hint" title="Constructor por defecto">

  Si no definimos un constructor para la clase `Professor`, JavaScript automáticamente creará un constructor por defecto para nosotros.  
  De hecho, este constructor por defecto simplemente pasa todos los argumentos al constructor de la clase padre.

  ```javascript
  class Professor extends Employee {
  }

  let professor = new Professor("Scott Williams", "Laboratorios");

  console.log(professor.intro());       // Soy Scott Williams.
  console.log(professor.department);    // Laboratorios
  ```
</div>

Puedes leer más sobre herencia en JavaScript [aquí](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#inheritance) y en más detalle [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

### Tarea  
Se te proporciona una clase `Vehicle`, que almacena información sobre la marca y el año de un vehículo e incluye un método que genera un string con esta información.  
También tienes una clase `Truck`, que hereda de la clase `Vehicle` y almacena información sobre la capacidad de carga del camión.

Tu tarea es completar el programa implementando el constructor para la clase `Truck` y añadiendo un método que devuelva el valor de la capacidad de carga.