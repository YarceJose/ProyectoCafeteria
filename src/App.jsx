/**
 * Componente Raíz App
 *
 * Componente principal de la aplicación que envuelve todo el sistema
 * de rutas y carga los estilos globales.
 *
 * @component
 * @returns {JSX.Element} Contenedor principal con el sistema de rutas
 *
 * @description
 * App es el componente contenedor principal que:
 * - Importa estilos globales (App.css)
 * - Renderiza el sistema de rutas (AppRoutes)
 * - Proporciona el div raíz para la aplicación
 *
 * ARQUITECTURA:
 * En main.jsx, App está envuelto con <BrowserRouter> para habilitar
 * la navegación SPA. Esto permite que AppRoutes funcione correctamente.
 *
 * @example
 * // main.jsx:
 * <BrowserRouter>
 *   <App />
 * </BrowserRouter>
 *
 * @structure
 * App
 *   └── AppRoutes
 *       ├── Header
 *       ├── Routes
 *       │   ├── / → Home
 *       │   ├── /menu → Menu
 *       │   ├── /login → LoginPage
 *       │   └── /register → RegisterPage
 *       └── Footer
 *
 * @note
 * Mantener este componente ligero. La lógica de navegación
 * y componentes UI están en sus respectivos módulos.
 */
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AppRoutes from './Routes/AppRoutes'

/**
 * Función componente App
 * @returns {JSX.Element} Estructura principal de la aplicación
 */
function App() {
  return (
    <div className="App">
        {/* Renderizar todas las rutas y componentes de la aplicación */}
        <AppRoutes />
    </div>
  )
}

export default App