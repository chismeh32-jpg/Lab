# Valle Verde

Juego de granja isométrica en español, dibujado con Canvas, sin dependencias de ejecución. Node.js 22 o superior.

```sh
npm start
npm test
```

Abre el servidor del puerto 3000 (`PORT` configurable). Usa WASD, flechas, clic en el terreno o joystick táctil. Acércate a los cultivos para cosechar automáticamente; al mercado para vender por 5 monedas. El maíz crece en 12 segundos de juego activo. Compra mejoras y completa las tres misiones. El progreso se guarda localmente, sin cuentas ni servicios externos. La pausa y las pestañas en segundo plano detienen el juego. El sonido se activa de forma opcional.

La primera versión incluye dos parcelas, tres capacidades de mochila y tres misiones. No es un juego comercial completo: no incluye multijugador, economía en servidor ni progreso sin conexión. La fuente web es opcional y tiene alternativas locales.

El prototipo anterior de palabras se conserva en `archive/wordle`.

## Publicación en GitHub Pages

En Settings → Pages selecciona Deploy from a branch, rama `main`, carpeta `/ (root)` y Save. La aplicación usa rutas relativas para funcionar bajo `/Lab/`.
