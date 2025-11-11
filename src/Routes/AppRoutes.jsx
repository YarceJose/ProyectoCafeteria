/**
 * Componente AppRoutes - Configuración de Rutas de la Aplicación
 * 
 * Este componente define todas las rutas disponibles en la aplicación
 * utilizando React Router DOM para la navegación SPA (Single Page Application).
 * 
 * @component
 * @returns {JSX.Element} Router con todas las rutas configuradas
 * 
 * @description
 * Rutas disponibles:
 * - "/": Página principal (Home)
 * - "/menu": Página del menú de productos con navegación por secciones
 * - "/login": Página de inicio de sesión
 * - "/register": Página de registro de usuarios
 * 
 * @example
 * <AppRoutes />
 */


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/home/Home'
import Menu from '../Pages/menu/Menu';
import LoginPage from '../Pages/auth/LoginPage';
import RegisterPage from '../Pages/auth/RegisterPage';
import Header from '../Components/header/Header';
import Footer from '../Components/Footer/Footer';

// El componente AppRoutes solo debe definir las rutas,
// el <Router> debería envolverse a nivel superior (ej: en index.jsx o App.jsx).
// Si dejas el <Router> aquí y también hay uno en otro lado, tendrás conflictos
// y la app podría no mostrar nada.

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* Ruta principal - Página de inicio */}
        <Route path="/" element={<Home />} />

        {/* Ruta del menú - Página de productos con navegación por anclas */}
        <Route path="/menu" element={<Menu />} />

        {/* Ruta de autenticación - Página de login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Ruta de registro - Página de registro de usuarios */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
