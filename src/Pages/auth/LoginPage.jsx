import React from 'react';
/**
 * Página LoginPage - Contenedor de Formulario de Login
 *
 * Componente contenedor que envuelve el formulario de login.
 * Actúa como la ruta que integra el componente Login con React Router.
 *
 * @component
 * @returns {JSX.Element} Página de login
 *
 * @description
 * Esta es una página simple que contiene el componente Login.
 * Se utiliza en el sistema de rutas para renderizar la página
 * en la ruta /login.
 *
 * @example
 * // En AppRoutes.jsx:
 * <Route path="/login" element={<LoginPage />} />
 *
 * @structure
 * LoginPage (contenedor)
 *   └── Login (formulario)
 */
import Login from '../../Components/auth/Login';

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
