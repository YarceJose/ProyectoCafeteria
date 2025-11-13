/**
 * Componente Home - Página Principal de Crazy Coffee
 */
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Home.css';

// Importación de imágenes
import welcome from '../../assets/home/welcome.png';
import zonaLectura from '../../assets/home/ZonaLectura.png';
import coworking from '../../assets/home/Coworking.png';
import patio from '../../assets/home/Patio.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <main className="home">
        
        {/* ============================================================ */}
        {/* SECCIÓN HERO - Bienvenida principal */}
        {/* ============================================================ */}
        <section className="welcome">
          <div className="welcome-container">
            <img src={welcome} alt="Bienvenida a Crazy Coffee" className="welcome-image" />
            <div className="welcome-overlay">
              <h1>Bienvenido a Crazy Coffee</h1>
              <p>Tu espacio para crear, conectar y disfrutar.</p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECCIÓN PUNTOS - Sistema de Fidelización */}
        {/* ============================================================ */}
        <section className="puntos-section">
          <div className="puntos-header">
            <h2 className="titulo-puntos">CRAZY PUNTOS</h2>
            <p className="subtitulo-puntos">Premiamos tu lealtad en cada visita</p>
          </div>

          {/* Grid de 3 Beneficios del Programa de Puntos */}
          <div className="puntos-grid">
            {/* Beneficio 1 */}
            <div className="punto-card">
              <div className="punto-icono">💎</div>
              <h3 className="punto-titulo">Acumula Puntos</h3>
              <p className="punto-texto">
                Gana puntos con cada compra que realices. Por cada café o postre, 
                tu saldo crece para acercarte a tu próxima recompensa.
              </p>
            </div>

            {/* Beneficio 2 */}
            <div className="punto-card">
              <div className="punto-icono">🎁</div>
              <h3 className="punto-titulo">Canjea Premios</h3>
              <p className="punto-texto">
                Convierte tus puntos acumulados en bebidas gratis, descuentos 
                exclusivos y productos de nuestra tienda oficial.
              </p>
            </div>

            {/* Beneficio 3 */}
            <div className="punto-card">
              <div className="punto-icono">⭐</div>
              <h3 className="punto-titulo">Nivel VIP</h3>
              <p className="punto-texto">
                Alcanza niveles superiores para desbloquear beneficios especiales, 
                regalos de cumpleaños y acceso anticipado a nuevos sabores.
              </p>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="puntos-botones">
            <button 
              className="btn-punto-primario" 
              onClick={() => navigate('/register')}
            >
              REGÍSTRATE AHORA
            </button>
            <button 
              className="btn-punto-secundario" 
              onClick={() => navigate('/login')}
            >
              iniciar sesion
            </button>
          </div>

        </section>

        {/* ============================================================ */}
        {/* SECCIÓN DE CARACTERÍSTICAS - Servicios del Local */}
        {/* ============================================================ */}
        <section className="features">
          {/* TARJETA 1: Zona Coworking */}
          <div className="feature-container">
            <img
              src={coworking}
              alt="Zona Coworking"
              className="feature-image"
              loading="lazy"
              onError={(e) => { e.currentTarget.src = welcome; }}
            />
            <div className="feature-overlay">
              <h2>Zona Coworking</h2>
              <p>Ambiente relajado para trabajar o estudiar con buena música.</p>
            </div>
          </div>

          {/* TARJETA 2: Zona de Lectura */}
          <div className="feature-container">
            <img 
              src={zonaLectura} 
              alt="Zona de Lectura" 
              className="feature-image" 
              loading="lazy"
              onError={(e) => { e.currentTarget.src = zonaLectura; }}
            />
            <div className="feature-overlay">
              <h2>Zona de Lectura</h2>
              <p>Sumérgete en un rincón tranquilo con buena luz, café aromático y libros que inspiran.</p>
            </div>
          </div>

          {/* TARJETA 3: Patio de Ideas */}
          <div className="feature-container">
            <img 
              src={patio} 
              alt="Patio de Ideas" 
              className="feature-image" 
              loading="lazy"
              onError={(e) => { e.currentTarget.src = patio; }}
            />
            <div className="feature-overlay">
              <h2>Patio De Ideas</h2>
              <p>Espacio creativo para conectar, compartir y relajarte.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;