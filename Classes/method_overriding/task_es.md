La herencia puede implicar no solo agregar nueva funcionalidad, sino también modificar o reutilizar funcionalidad existente.  
Por ejemplo, podría requerir cambiar el comportamiento de ciertos métodos en la clase padre. Continuemos con nuestro ejemplo del profesor de la tarea anterior.

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

    intro() {
        return "Soy " + this.name + ". Profesor en el departamento de " + this.department + ".";
    }
}

let professor = new Professor("Scott Williams", "Labs", "Robótica");

console.log(professor.intro());
// Soy Scott Williams. Profesor en el departamento de Labs.
```

De esta manera, _sobrescribimos_ el método `intro()` en la clase hija. Cuando este método se llama en un objeto de la clase `Professor`,  
la búsqueda del atributo se realiza primero en la clase hija y luego en la clase padre. Esto nos permite sobrescribir métodos modificando su comportamiento.

A menudo, no necesitamos cambiar completamente el comportamiento de un método, sino simplemente agregarle algo.  
Para lograr esto, podemos llamar al método de la clase padre usando la palabra clave `super`.

```javascript
class Professor extends Employee {
    constructor(name, department, researchArea) {
        super(name, department);
        this.researchArea = researchArea;
    }

    intro() {
        return super.intro() + " Profesor en el departamento de " + this.department + ".";
    }
}

let professor = new Professor("Scott Williams", "Labs", "Robótica");

console.log(professor.intro());
// Soy Scott Williams. Profesor en el departamento de Labs.
```

Este enfoque es ciertamente preferible, ya que evita la duplicación de código.

### Tarea  
Practicaremos la sobrescritura de métodos utilizando el ejemplo de la ya conocida clase `Point`.  
Imagina que necesitas implementar la clase `Point3D`, que es una hija de la clase `Point`.  
Sin embargo, en el caso tridimensional, la implementación del método `distanceFromOrigin` de la clase `Point` ya no es adecuada.

Completa el programa implementando el constructor y sobrescribiendo el método `distanceFromOrigin` para la clase `Point3D`.  
Puedes utilizar [esta fórmula](https://es.wikipedia.org/wiki/Sistema_de_coordenadas_cartesiano#Distancia_entre_dos_puntos) para calcular la distancia en el caso 3D.