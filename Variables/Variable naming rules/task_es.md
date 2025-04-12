Hablando de nombres de variables, podemos distinguir entre restricciones y reglas.

- Restricciones (limitaciones de JavaScript):
  - El nombre debe contener solo letras, dígitos o los símbolos $ y _
  - El primer carácter no debe ser un dígito.
  - NO debe coincidir con los nombres reservados de JavaScript: let, var, ... lista completa [aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)
  
- Reglas (acuerdos entre programadores):
  - Cuando el nombre contiene varias palabras, utiliza [camelCase](https://es.wikipedia.org/wiki/Camel_case) para nombrarlas: `complexVariableName`.
  - Intenta elegir nombres de variables significativos. Es difícil adivinar qué hay en una caja con la etiqueta `EOq3I_S499$`, ¿verdad? 🙂

Ejemplos de nombres de variables válidos en JavaScript:
- `text`
- `totalAmount`
- `$`, `_` – sí, un nombre de variable puede consistir en un solo carácter, incluso si es un carácter `$` o `_`
- `EOq3I_S499$`

### Tarea
Elimina las declaraciones de variables con nombres inválidos en JavaScript.

<div class="hint">
  En esta tarea, presta atención únicamente a la corrección de los nombres en términos del lenguaje JavaScript. Incluso si no tienen sentido.
</div>