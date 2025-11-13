import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
// Importamos la imagen para el lateral izquierdo
import coffee from '../../assets/registro-login/login-registro.png';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica simple de validación (admin/admin)
    if (formData.username === "admin" && formData.password === "admin") {
      navigate('/');
    } else {
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
            {/* Botón secundario */}
            <button type="button" className="btn-registro" onClick={() => navigate('/register')}>
              REGISTRARSE
            </button>
            {/* Botón primario */}
            <button type="submit" className="btn-ingresar">
              INGRESAR
            </button>
          </div>

          {/* === NUEVO: Texto "¿No tienes una cuenta? Únete" === */}
          <div className="texto-crear-cuenta">
            <span>¿No tienes una cuenta?</span>
            <Link to="/register" className="link-unete">Únete</Link>
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