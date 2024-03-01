# Crear el punto de entrada de una aplicación con React

## Primero instalamos el plugin de react
npm install @vitejs/plugin-react -E

## Instalamos las dependencias de React
npm install react react-dom -E
react: Es toda la biblioteca de react
react-dom: Es la que contiene los bindings para el navegador

## Creamos el archivo vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})

## En el archivo main.js creamos el punto de entrada de la aplicación
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app'))
root.render(<h1>Hello world</h1>)

## Cambiamos a la extensión a jsx para que pueda transpilar el código, así como cambiarlo en el index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/main.jsx"></script>
  </body>
</html>


# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.