/**
 * Componente Header - Encabezado de Navegación
 * 
 * Este componente representa el encabezado de la aplicación con navegación
 * principal y botones de autenticación. Incluye enlaces funcionales a las
 * secciones del menú con navegación por anclas.
 * 
 * @component
 * @returns {JSX.Element} Header con navegación y botones de autenticación
 * 
 * @description
 * Funcionalidades incluidas:
 * - Logo de la empresa
 * - Enlaces de navegación a secciones del menú (Bebidas, Comida)
 * - Navegación con anclas para scroll automático a secciones específicas
 * - Botones de registro e inicio de sesión
 * 
 * @navigation
 * - "Bebidas" → navega a /menu#bebidas (sección de bebidas)
 * - "Comida" → navega a /menu#comida (sección de comida)
 * - "Registrate" → navega a /register
 * - "Iniciar sesión" → navega a /login
 * 
 * @example
 * <Header />
 */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Tailwind CSS eliminado
import './Header.css';
import logo from '../../assets/logo/logo.png';

const Header = () => {
  // Hook para obtener la ubicación actual
  const location = useLocation();

  // Función para determinar si un enlace está activo
  const isActive = (path) => {
    if (path === '/menu#bebidas') {
      return location.pathname === '/menu' && location.hash === '#bebidas';
    }
    if (path === '/menu#comida') {
      return location.pathname === '/menu' && location.hash === '#comida';
    }
    return location.pathname === path;
  };

  return (
    <header className="Encabezado">
      {/* Sección principal del header con logo y navegación */}
      <main>
        <div className="Contenedor-principal">
          {/* Logo de la empresa - Click para ir al home */}
          <Link to="/" className="logo-link">
              <div className="logo">
                <img src={logo} alt="Logo de Crazzy Coffee" />
              </div>
          </Link>
          
          {/* Enlaces de navegación a secciones del menú con anclas */}
          <Link
            className={`bebidas ${isActive('/menu#bebidas') ? 'active' : ''}`}
            to="/menu#bebidas"
          >
            Bebidas
          </Link>
          <Link
            className={`Comestibles ${isActive('/menu#comida') ? 'active' : ''}`}
            to="/menu#comida"
          >
            Comestibles
          </Link>
        </div>
      </main>

      {/* Sección de botones de autenticación */}
      <main className="menu">
        <div className="Contenedor-secundario">
          {/* Botón de registro */}
          <Link to="/register">
            <button className='boton-registro' id="registro">Registrate</button>
          </Link>

          {/* Botón de inicio de sesión */}
          <Link to="/login">
            <button className='boton-login' id="login">Iniciar sesión</button>
          </Link>
        </div>
      </main>
    </header>
  );
};

export default Header;
