Ya hemos hablado mucho sobre los objetos y cómo trabajar con ellos en las lecciones de [Tipos de Datos](course://Data Types) y [Estructuras de Datos](course://Data Structures).  
Sin embargo, aún no hemos tratado el tema de copiar objetos.

Cuando se trata de copiar tipos primitivos, el proceso es sencillo. Obtenemos dos variables, cada una almacenando su propio valor.

```javascript
let name = "John"

// copiando el nombre a otra variable
let login = name

// cambiando el valor original de la variable
name = "Bob"

console.log(name)  // Bob
console.log(login) // John
```

Sin embargo, si realizamos esta operación con un objeto, el resultado podría sorprendernos.

```javascript
let user = {
    name: "John"
}

let lastLoggedIn = user

// cambiando el valor original de la propiedad name 
user.name = "Bob";

console.log(user);         // { name: 'Bob' }
console.log(lastLoggedIn); // { name: 'Bob' }
```

Esto sucede porque, en el caso de los objetos, la variable no almacena el valor real, sino una referencia a él. Como resultado, al realizar la asignación `lastLoggedIn = user`, no se copia el valor del objeto, sino únicamente la referencia a este.  
![alt_text](two_ref_one_obj.png)

Sin embargo, no siempre queremos este comportamiento y, afortunadamente, JavaScript ofrece una forma de crear una copia de un objeto en lugar de solo una referencia a él.  
Aunque esto puede hacerse manualmente iterando por todos los campos de un objeto y asignándolos a otro, existe una manera más conveniente: usar el método `Object.assign()`.

El método toma el objeto _destino_ como su primer argumento y uno o más objetos _fuente_ como argumentos posteriores.  
Como resultado, todos los atributos del (o los) objeto(s) _fuente_ se copian al objeto _destino_. Si el objeto _destino_ ya contiene atributos con el mismo nombre, sus valores se sobrescriben.

```javascript
let user = {
    name: "Bob"
}
let data = {
    name: "John",
    position: "developer"
}

Object.assign(user, data);

console.log(user);  // { name: 'John', position: 'developer' }
```

Puedes leer más sobre el método `Object.assign` [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

### Tarea  
Estás creando credenciales para los participantes de la conferencia JavaScript Day 2025.  
Dado que las credenciales difieren solo por el nombre del participante, decidiste hacer una plantilla que contenga todos los campos comunes y luego usar la función `createBadge`.  
La función toma la plantilla como su primer parámetro y el nombre del participante como su segundo parámetro.  
Como resultado, debe devolver una nueva credencial que contenga todos los atributos de la `template`, con el atributo `name` configurado al `participantName` proporcionado.

Sin embargo, el programa actualmente no crea un nuevo objeto y no está funcionando correctamente. Corrige la función `createBadge` para que cree un nuevo objeto cada vez, combinando los atributos de la `template` junto con el `name` especificado en `participantName`.