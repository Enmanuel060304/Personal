En la lección sobre [Tipos de Datos](course://Data Types/typeof_operator), utilizamos `typeof` para determinar el tipo de dato con el que estábamos trabajando.

```javascript
let a = 123;
console.log(typeof a);  // number
```

Sin embargo, aunque `typeof` funciona para los tipos primitivos, solo identifica objetos de cualquier clase como de tipo `Object`.

```javascript
class Employee {
    constructor(name) {
        this.name = name;
    }
}

class Professor extends Employee {
    constructor(name, researchArea) {
        super(name);
        this.researchArea = researchArea;
    }
}

let professor = new Professor("John", "Computer Science");
let employee = new Employee("Tomas");

console.log(typeof employee);   // object
console.log(typeof professor);  // object
```

Esto es, por supuesto, correcto, pero a veces podríamos querer información más detallada sobre el objeto con el que estamos trabajando.  
Para este propósito, podemos usar el operador `instanceof`, que nos permite verificar si un objeto específico pertenece a una clase en particular o a una de sus clases padre.

```javascript
console.log(professor instanceof Employee);   // true
console.log(professor instanceof Professor);  // true

console.log(employee instanceof Employee);    // true
console.log(employee instanceof Professor);   // false
```

Aunque los programas orientados a objetos suelen permitir el uso de objetos de una clase hija en lugar de objetos de la clase padre al sobrescribir los métodos necesarios, el operador `instanceof` todavía puede ser utilizado para realizar verificaciones específicas requeridas por el programador.

Puedes leer más sobre el operador `instanceof` [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof).

### Tarea
Esta vez, se te proporciona una cadena de clases: la clase `Professor` es una hija de la clase `Employee`, y la clase `LabHead` es una hija de la clase `Professor`.

Además, tienes la función `professorsPresenter`, que está diseñada para presentar a los profesores (se considera que `LabHead` también es un profesor, como lo indica la cadena de herencia de clases).

Tu tarea es implementar lo siguiente:
1. El método `intro` para la clase `LabHead`, que añade el resultado del método `intro` de la clase `Professor` con la cadena `"Head of <labName> lab."`.
2. La función `professorsPresenter` para que:
    - Devuelva el resultado del método `intro` para los objetos de la clase `Professor` y sus subclases.
    - Devuelva `null` para los objetos de cualquier otra clase.