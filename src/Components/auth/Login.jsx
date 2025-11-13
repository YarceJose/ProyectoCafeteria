/**
 * Componente Login - Formulario de Inicio de Sesión
 *
 * Este componente presenta un formulario de login con dos campos (usuario y contraseña)
 * y valida las credenciales contra credenciales mock (admin/admin). En una aplicación
 * real, estas credenciales se validarían contra un servidor backend.
 *
 * @component
 * @returns {JSX.Element} Formulario de login con imagen lateral
 *
 * @description
 * Características:
 * - Formulario con campos de usuario y contraseña
 * - Validación de credenciales (usuario: admin, contraseña: admin)
 * - Redirección al home si el login es exitoso
 * - Mensaje de error si las credenciales son incorrectas
 * - Imagen lateral para contexto visual
 * - Botones de navegación a registro y login
 *
 * @state
 * - formData: Objeto con username y password del usuario
 *
 * @example
 * <Login />
 *
 * @note
 * Credenciales de prueba: usuario: admin, contraseña: admin
 * En producción, reemplazar validación mock con llamadas a API
 */

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
// Usamos la misma imagen lateral que en el registro para consistencia visual
import coffee from '../../assets/registro-login/login-registro.png';

const Login = () => {
  // Estado del formulario: almacena los valores de usuario y contraseña
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  // Hook para navegar entre rutas de React Router
  const navigate = useNavigate();

  /**
   * Maneja el cambio de valores en los inputs del formulario
   * @param {Event} e - Evento del input que disparó el cambio
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Maneja el envío del formulario de login
   * Valida las credenciales y redirige al home si son correctas
   * @param {Event} e - Evento del formulario
   */
  const handleLogin = (e) => {
    e.preventDefault();
    // Verificamos las credenciales (nota: en producción validar contra API)
    if (formData.username === "admin" && formData.password === "admin") {
      // Credenciales correctas - navegar al home
      navigate('/');
    } else {
      // Credenciales incorrectas - mostrar mensaje de error
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="login-page">
      
      {/* Contenedor centrado que divide Imagen | Formulario */}
      <div className="contenido-principal">
        
        {/* Sección Izquierda: Imagen Vertical */}
        <div className="seccion-imagen">
          <img src={coffee} alt="Bienvenido al Login" className="imagen-lateral" />
        </div>

        {/* Sección Derecha: Formulario con fondo blanco */}
        <form className="Login" onSubmit={handleLogin}>
          <h2 className="titulo-Login">Iniciar Sesión</h2>

          <div className="input-group">
            <input 
              required 
              id="username" 
              name="username"
              type="text" 
              autoComplete="off" 
              className="input"
              value={formData.username}
              onChange={handleInputChange}
            />
            <label className="user-label">USUARIO</label>
          </div>

          <div className="input-group">
            <input 
              required 
              id="password" 
              name="password"
              type="password" 
              autoComplete="off" 
              className="input"
              value={formData.password}
              onChange={handleInputChange}
            />
            <label className="user-label">CONTRASEÑA</label>
          </div>

          <div className="Contenedor-botones">
            {/* Botón secundario lleva al registro */}
            <button type="button" className="btn-registro" onClick={() => navigate('/register')}>
              REGISTRARSE
            </button>
            {/* Botón primario envía el formulario */}
            <button type="submit" className="btn-ingresar">
              INGRESAR
            </button>
          </div>

          <div className="contenedor-volver">
            <Link to="/" className="link-volver">Volver al inicio</Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;