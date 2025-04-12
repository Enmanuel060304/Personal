En JavaScript, los tipos primitivos son los tipos de datos más básicos. Son inmutables y se comparan por valor. JavaScript tiene siete tipos primitivos:

1. **Number**: Representa tanto números enteros como de punto flotante.
2. **String**: Representa una secuencia de caracteres.
3. **Boolean**: Representa una entidad lógica y puede tener dos valores: `true` y `false`.
4. **Undefined**: Una variable que ha sido declarada pero no se le ha asignado un valor.
5. **Null**: Representa la ausencia intencionada de cualquier valor de objeto.
6. **Symbol**: Un tipo de dato único e inmutable que se utiliza para crear identificadores únicos para objetos.
7. **BigInt**: Representa enteros de magnitud arbitraria. Permite almacenar y realizar operaciones de manera segura en enteros grandes, incluso aquellos que exceden el límite de enteros seguros.

```javascript
// Ejemplo: Uso de diferentes tipos primitivos
let number = 42;
console.log(typeof number); // "number"

let string = "¡Hola, mundo!";
console.log(typeof string); // "string"

let boolean = true;
console.log(typeof boolean); // "boolean"

let undefinedVar;
console.log(typeof undefinedVar); // "undefined"

let nullVar = null;
console.log(typeof nullVar); // "object"

let symbol = Symbol("único");
console.log(typeof symbol); // "symbol"

let integerNumber = Number.MAX_SAFE_INTEGER;
console.log(integerNumber);  // 9007199254740991

console.log(integerNumber * integerNumber);
// 8.112963841460666e+31

let bigIntegerNumber = BigInt(Number.MAX_SAFE_INTEGER);
console.log(bigIntegerNumber * bigIntegerNumber);
// 81129638414606663681390495662081n
```
Recuerda que `typeof` devuelve "object" para `null`, lo cual puede ser confuso.

<div class="hint" title="Ventajas de usar tipos primitivos">
<ul>
<li>Rendimiento: Los tipos primitivos generalmente son más rápidos y eficientes en comparación con los tipos complejos.</li>
<li>Simplicidad: Son fáciles de usar y entender, lo que los hace ideales para operaciones y comparaciones básicas.</li>
</ul>
</div> 
<div class="hint" title="Comportamiento específico">
<ul>
<li>Inmutabilidad: Los tipos primitivos son inmutables, lo que significa que sus valores no se pueden cambiar una vez creados.</li>
<li>Funcionalidad limitada: Carecen de los métodos y propiedades que los objetos tienen, lo que limita su funcionalidad.</li>
</ul>
</div>

### Tarea
Declara una variable `value` y asígnale diferentes valores de tipos primitivos: `number`, `string`, `boolean`, `undefined`, `null` y `symbol`.

<div class="hint" title="¿Quieres saber más?">
Para más información, consulta la <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values">documentación actualizada de JavaScript sobre tipos primitivos</a>.

Puedes leer más sobre <code>BigInt</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type">aquí</a>.
</div>