import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';
// Importamos la imagen para el lateral izquierdo
import coffee from '../../assets/registro-login/login-registro.png';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del registro:', formData);
    alert('Registro exitoso!');
    navigate('/');
  };

  return (
    <div className="register-page">
      
      {/* Contenedor centrado que divide Imagen | Formulario */}
      <div className="contenido-principal">
        
        {/* Sección Izquierda: Imagen Vertical */}
        <div className="seccion-imagen">
          <img src={coffee} alt="Bienvenido" className="imagen-lateral" />
        </div>

        {/* Sección Derecha: Formulario con fondo blanco */}
        <form className="Registro" onSubmit={handleSubmit}>
          <h2 className="titulo-Registro">Registro</h2>
          
          <div className="Contenedor-nombre-apellido">
            <div className="Contenedor-input-nombre">
              <input 
                required 
                id="nombre" 
                name="nombre"
                type="text" 
                autoComplete="off" 
                className="input-nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
              <label className="user-label-nombre">NOMBRE</label>
            </div>

            <div className="Contenedor-input-apellido">
              <input 
                required 
                id="apellido" 
                name="apellido"
                type="text" 
                autoComplete="off" 
                className="input-apellido"
                value={formData.apellido}
                onChange={handleInputChange}
              />
              <label className="user-label-apellido">APELLIDO</label>
            </div>
          </div>

          <div className="input-group">
            <input 
              required 
              id="email" 
              name="email"
              type="email" 
              autoComplete="off" 
              className="input"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label className="user-label">EMAIL</label>
          </div>

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
            <button type="button" className="btn-volver" onClick={() => navigate('/')}>VOLVER</button>
            <button type="submit" className="btn-guardar">GUARDAR</button>
          </div>

          {/* === NUEVO: Texto "¿Ya tienes una cuenta? Iniciar sesión" === */}
          <div className="texto-iniciar-sesion">
            <span>¿Ya tienes una cuenta?</span>
            <Link to="/login" className="link-iniciar">Iniciar sesión</Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;