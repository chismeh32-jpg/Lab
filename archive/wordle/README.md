# palabra.

Juego de cinco letras en español, sin dependencias de ejecución. Requiere Node.js 22 o superior.

```sh
npm start
```

Sirve la aplicación en el puerto 3000 (configurable con `PORT`). Ejecuta `npm test` para validar las pistas y el calendario diario. Incluye reto diario con horario de Madrid, modo libre, guardado local, estadísticas, modo exigente, alto contraste y resultados para compartir.

El diccionario es una selección local limitada y las 25 soluciones diarias rotan de forma determinista. No hay cuentas ni sincronización entre dispositivos. Antes de un lanzamiento público conviene ampliar y revisar el diccionario, incorporar un banco de soluciones mayor y realizar pruebas con usuarios y lectores de pantalla.
