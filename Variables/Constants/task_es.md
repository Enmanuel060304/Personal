Una constante es una variable inmutable. Puedes declarar una variable de este tipo utilizando la palabra clave `const`, asignarle un valor, y este no se podrá cambiar de nuevo.  
Estas variables se utilizan en dos casos:  
1. para declarar variables inmutables cuyos valores se conocen en la etapa de escritura del programa, y  
2. para declarar variables que no es necesario cambiar durante la ejecución del programa.  

Comencemos con el primer caso. Por ejemplo, necesitamos usar códigos de aeropuertos en nuestro programa.  
Estas constantes se nombran utilizando letras mayúsculas y guiones bajos.  
```
const AIRPORT_LANZAROTE = "ACE";
const AIRPORT_BRNO = "BRQ";
const AIRPORT_FRIEDRICHSHAFEN = "FDH";

let destination = AIRPORT_BRNO;
```

El uso de tales constantes permite:  
- Simplificar la lectura del código, ya que `AIRPORT_BRNO` es más obvio que `"BRQ"`.  
- Facilitar la escritura de programas, ya que no necesitamos recordar los códigos de aeropuertos y el IDE puede ayudar con la autocompletación de nombres de variables.  
- Si el aeropuerto cambia su código (esto es raro pero posible), solo necesitamos cambiar una línea en nuestro programa con la declaración de la constante y listo.  

En el segundo caso, sigue una regla sencilla: si declaras una variable cuyo valor no cambiará, usa `const` en lugar de `let`.  

```
const homeDirPath = ... // Aquí puede haber código que permita obtener esta ruta
```
### Tarea  
Corrige el/los error(es) en el programa dado.