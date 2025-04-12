En aritmética, el operador más significa sumar números.  
Pero probablemente hayas notado que intuitivamente a menudo denota unión.  
Por ejemplo, si ves `Limonada+Hielo` en un menú de restaurante, entenderás de inmediato lo que significa y no pensarás en las lecciones de matemáticas.

Hay una lógica similar en el lenguaje JavaScript. Por ejemplo, el operador `+` puede usarse para _concatenar_ cadenas de texto:

```javascript
let s = "Hello" + "World";
console.log(s);  // HelloWorld
```

Si el operador de suma tiene solo un elemento de tipo `string`, el segundo elemento se convertirá a tipo string. Dado que las cadenas de texto se concatenan tal como están, debes recordar agregar espacios donde los necesites.
```javascript
console.log(1 + " January");  // 1 January
console.log("January " + 1);  // January 1
```

El operador más es el único operador aritmético binario que hace esto. Los demás, por el contrario, convierten los argumentos en números:
```javascript
console.log("1" - true);  // convierte "true" a 1
console.log("10" / "2");  // convierte ambos operandos a enteros
console.log(10 * "2");  // convierte "2" a entero
```

A veces, si necesitamos convertir un valor que no es un número a un número, el operador más unario viene al rescate. Si el operando ya es un número, no se realizará ninguna otra conversión:
```javascript
console.log(+false);  // convierte false a 0
console.log(+"-10");  // convierte a entero
console.log(+10);     // deja el entero sin realizar ninguna conversión
```

Puedes leer más sobre operadores de cadenas de texto [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#string_operators).

### Tarea  
Se te da un objeto `student`.  
Usando los valores de sus campos y el operador de concatenación de cadenas, escribe una cadena con el siguiente formato en la variable signature:  
```
"<name>, <age> years old, <university> University"
```
Donde en lugar de `<name>`, `<age>` y `<university>` debes usar los valores de los campos `name`, `age` y `university` del objeto `student`, respectivamente.