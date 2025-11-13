import React from 'react';
/**
 * Página RegisterPage - Contenedor de Formulario de Registro
 *
 * Componente contenedor que envuelve el formulario de registro.
 * Actúa como la ruta que integra el componente Register con React Router.
 *
 * @component
 * @returns {JSX.Element} Página de registro
 *
 * @description
 * Esta es una página simple que contiene el componente Register.
 * Se utiliza en el sistema de rutas para renderizar la página
 * en la ruta /register.
 *
 * @example
 * // En AppRoutes.jsx:
 * <Route path="/register" element={<RegisterPage />} />
 *
 * @structure
 * RegisterPage (contenedor)
 *   └── Register (formulario)
 */
import Register from '../../Components/auth/Register';

const RegisterPage = () => {
  return <Register />;
};

export default RegisterPage;
