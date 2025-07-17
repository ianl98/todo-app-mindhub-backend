# To-Do App (Node.js + Express.js)

Este proyecto es una aplicación de tareas (to-do list) construida con Node.js y Express.js.

## Requisitos previos

- Node.js (v16 o superior recomendado)
- npm (v8 o superior) o yarn

## Instalación

1. Clona el repositorio o descarga el código fuente.
2. Abre una terminal en la carpeta del proyecto.
3. Instala las dependencias:

   ```bash
   npm install
   # o
   yarn install
   ```

## Levantar el proyecto

En la terminal, dentro de la carpeta raiz, ejecuta:

```bash
node index.js
```

Esto iniciará el servidor de desarrollo.

## Notas

- Puedes probar los endpoints en Postman usando la url base de http://localhost:3000.

## Experiencia usando GitHub Copilot

## 1. Backend: resultados sobresalientes ✅

| Aspecto | Qué pasó |
|---------|----------|
| **Generación de funcionalidades** | Copilot respetó fielmente el modelo de datos exigido por la tarea. |
| **Instalaciones de dependencias** | Sugerencias claras de los paquetes `npm` necesarios; todo funcionó a la primera. |
| **Experiencia general** | Flujo de trabajo fluido y sin bloqueos. |

---

## 2. Frontend: funcionamiento correcto, pero con tropiezos ⚠️

| Aspecto | Observación |
|---------|-------------|
| **Cumplimiento de funcionalidades** | Las implementó y quedaron operativas desde el primer *prompt*. |
| **Estilos y maquetado** | Dificultades para posicionar los elementos según lo esperado; necesitó varios ajustes. |

---

## 3. Puntos de mejora 🔍

1. **Falta de separación de responsabilidades**  
   - Los estilos CSS fueron incrustados en el mismo archivo del componente, en lugar de extraerse a un archivo dedicado.  
   - En el backend, Copilot escribió todos los *endpoints* en `index.js` en vez de organizarlos en rutas separadas.

2. **Mantenibilidad**  
   - Al no modularizar estilos y rutas, el código resultante es menos escalable y más difícil de testear.

---

## 5. Conclusión
- **Backend**: experiencia muy positiva, lista de dependencias e implementación sin contratiempos.  
- **Frontend**: funcionalidad lista rápidamente, pero se requirió trabajo extra para refinar la presentación visual.  
- **Aprendizaje clave**: GitHub Copilot acelera tareas repetitivas, pero conviene **revisar la arquitectura** resultante (separación de archivos, estilos y rutas) para mantener un código limpio y escalable.
