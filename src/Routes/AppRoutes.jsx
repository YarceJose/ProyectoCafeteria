/**
 * Componente AppRoutes - Configuración Central de Rutas
 * 
 * Este es el componente principal de enrutamiento de la aplicación.
 * Define todas las rutas disponibles usando React Router DOM y
 * proporciona el layout persistente (Header y Footer) para toda la app.
 * 
 * @component
 * @returns {JSX.Element} Estructura de rutas con Header, Routes y Footer
 * 
 * @description
 * RUTAS DISPONIBLES:
 * - "/" → Home (página principal)
 * - "/menu" → Menu (catálogo de productos)
 * - "/login" → LoginPage (página de inicio de sesión)
 * - "/register" → RegisterPage (página de registro)
 * 
 * ESTRUCTURA:
 * - Header: Navegación principal (visible en todas las páginas)
 * - Routes: Contenido dinámico según la ruta actual
 * - Footer: Pie de página (visible en todas las páginas)
 * 
 * @architecture
 * Este componente debe estar envuelto por <BrowserRouter> en index.jsx
 * o App.jsx para funcionar correctamente. NO incluir <Router> aquí
 * para evitar conflictos de enrutamiento.
 * 
 * @example
 * // En index.jsx:
 * <BrowserRouter>
 *   <App />
 * </BrowserRouter>
 * 
 * // En App.jsx:
 * <AppRoutes />
 */


import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Importar todas las páginas de la aplicación
import Home from '../Pages/home/Home'
import Menu from '../Pages/menu/Menu';
import LoginPage from '../Pages/auth/LoginPage';
import RegisterPage from '../Pages/auth/RegisterPage';
// Importar componentes del layout
import Header from '../Components/header/Header';
import Footer from '../Components/Footer/Footer';

// ============================================================================
// ESTRUCTURA DE ENRUTAMIENTO
// ============================================================================
// IMPORTANTE: El <Router> debe estar envuelto en index.jsx con <BrowserRouter>
// No incluir <Router> aquí para evitar conflictos de navegación
// ============================================================================

/**
 * AppRoutes - Define todas las rutas y el layout principal
 *
 * Este componente estructura la aplicación en 3 capas:
 * 1. HEADER: Navegación principal (siempre visible)
 * 2. ROUTES: Contenido dinámico según la URL actual
 * 3. FOOTER: Pie de página (siempre visible)
 *
 * @returns {JSX.Element} Estructura completa con navegación y contenido
 */
const AppRoutes = () => {
  return (
    <>
      {/* ============================================================ */}
      {/* HEADER - Navegación principal y marca */}
      {/* Visible en todas las páginas */}
      {/* ============================================================ */}
      <Header />
      
      {/* ============================================================ */}
      {/* ROUTES - Contenido dinámico según URL */}
      {/* Cada ruta renderiza un componente diferente */}
      {/* ============================================================ */}
      <Routes>
        {/* Ruta principal - Página de inicio */}
        <Route path="/" element={<Home />} />

        {/* Ruta del menú - Catálogo de productos */}
        {/* Soporta navegación por anclas: /menu#bebidas, /menu#comida */}
        <Route path="/menu" element={<Menu />} />

        {/* Ruta de autenticación - Página de inicio de sesión */}
        <Route path="/login" element={<LoginPage />} />

        {/* Ruta de registro - Página de creación de usuario */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>

      {/* ============================================================ */}
      {/* FOOTER - Pie de página con información */}
      {/* Visible en todas las páginas */}
      {/* ============================================================ */}
      <Footer />
    </>
  );
};

export default AppRoutes;
