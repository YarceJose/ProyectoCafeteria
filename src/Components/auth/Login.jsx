import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
// fondo is served from the public/ folder; reference it by URL instead of importing
const fondo = '/Fondo/coffee.jpg';
// Tailwind CSS eliminado
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Verificamos las credenciales
    if (username === "admin" && password === "admin") {
      // Si las credenciales son correctas, redirigimos al home
      navigate('/');
    } else {
      // Si las credenciales son incorrectas, mostramos un mensaje
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${fondo})` }}>
      
      {/* inicio de sesión - ingreso de datos*/}
      <form className="login">
        <h2 className="titulo-login">inicio de sesión</h2>
        
        <div className="input-group">
          <input 
            required 
            id="username" 
            type="text" 
            name="text" 
            autoComplete="off" 
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="user-label">USUARIO</label>
        </div>

        <div className="input-group">
          <input 
            required 
            id="password" 
            type="password" 
            name="text" 
            autoComplete="off" 
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="user-label">CONTRASEÑA</label>
        </div>

  <button type="button" className="button-login" onClick={handleLogin}>Iniciar sesión</button>
        <a className="boton-registro" href="/register">Registro</a>
      </form>
    </div>
  );
};

export default Login;
