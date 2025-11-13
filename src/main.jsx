/**
 * ENTRY POINT PRINCIPAL - main.jsx
 *
 * Este es el punto de entrada de la aplicación React.
 * Aquí se inicializa la aplicación, se monta en el DOM y se configura
 * el enrutamiento del lado del cliente.
 *
 * @description
 * PROCESO DE INICIALIZACIÓN:
 * 1. Se importan las dependencias necesarias (React, ReactDOM, Router, App)
 * 2. Se obtiene el elemento HTML con id "root"
 * 3. Se crea la raíz de React
 * 4. La app se envuelve en:
 *    - React.StrictMode: Detecta problemas potenciales en desarrollo
 *    - BrowserRouter: Habilita navegación SPA con react-router-dom
 * 5. Se renderiza la aplicación en el DOM
 *
 * FLUJO:
 * main.jsx
 *   ├── BrowserRouter (habilita routing)
 *   │   └── App
 *   │       └── AppRoutes (define las rutas)
 *
 * @architecture
 * Esta estructura permite que la aplicación sea una Single Page App (SPA)
 * con navegación cliente-lado sin recargar la página.
 *
 * NOTA DE DESARROLLO:
 * En producción, React.StrictMode se desactiva automáticamente.
 * Es solo para desarrollo y ayuda a encontrar bugs.
 */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Obtener el elemento raíz del HTML (index.html tiene <div id="root"></div>)
const root = createRoot(document.getElementById('root'))

// Renderizar la aplicación en el DOM
root.render(
  // StrictMode: Solo en desarrollo, ayuda a detectar problemas
  <React.StrictMode>
    {/* BrowserRouter: Habilita navegación SPA con react-router-dom */}
    <BrowserRouter>
      {/* App: Componente raíz de la aplicación */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)