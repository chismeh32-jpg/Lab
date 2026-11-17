# palabra.

Wordle en español para móvil y escritorio. Node.js 22 o superior; sin dependencias de ejecución.

```sh
npm start
npm test
npm run build
```

El servidor escucha en el puerto 3000 (`PORT` configurable). `dist/` contiene la versión estática.

- 432 soluciones y más de 900 palabras admitidas, con Ñ y normalización de tildes.
- Reto diario compartido que cambia a medianoche de Madrid. Desde el 18 de noviembre de 2026, cada ciclo recorre las 432 soluciones sin repeticiones. Las partidas del día anterior se mantienen compatibles.
- Modo libre con historial reciente para evitar repeticiones, confirmación al abandonar y opción de seguir jugando tras el resultado.
- Modo exigente con posiciones y cantidades de letras obligatorias. Se elige antes del primer intento.
- Tema claro y oscuro, alto contraste, movimiento reducido y sonidos opcionales.
- Estadísticas locales, racha diaria, mejor racha y distribución de intentos. Las estadísticas previas se conservan; la distribución empieza con esta versión.
- Compartir con el menú del móvil o el portapapeles, sin mostrar la solución.

No hay cuentas ni sincronización. El diccionario es una selección local, no un diccionario exhaustivo del español. Los datos dependen del almacenamiento del navegador.

## Publicación

GitHub Pages sirve la raíz de `main`. Las rutas relativas funcionan bajo `/Lab/`. El juego de granja anterior se conserva en `archive/farm` y el primer Wordle en `archive/wordle`.
