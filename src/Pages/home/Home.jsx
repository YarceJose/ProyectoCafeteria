/**
 * Componente Home - Página Principal de Crazy Coffee
 * 
 * Este componente representa la página de inicio estática de la cafetería,
 * mostrando información sobre los servicios y características del establecimiento.
 * 
 * @component
 * @returns {JSX.Element} Componente de la página principal
 * 
 * @description
 * La página Home incluye:
 * - Header de navegación
 * - Sección hero con mensaje de bienvenida
 * - Sección de características (Coworking, Juegos, Talleres)
 * - Sección de promociones
 * 
 * @example
 * <Home />
 */

import React from 'react';
import './Home.css';
//imagnes
import welcome from '../../assets/home/welcome.png';
import zonaLectura from '../../assets/home/ZonaLectura.png';
import coworking from '../../assets/home/Coworking.png';
import patio from '../../assets/home/Patio.png';



const Home = () => {
  return (
    <div className="home-container">
      <main className="home">
        {/* Sección Hero con mensaje de bienvenida */}
        

        <section className="welcome">
          <div className="welcome-container">
            <img src={welcome} alt="Bienvenida a Crazy Coffee" className="welcome-image" />
            <div className="welcome-overlay">
              <h1>Bienvenido a Crazy Coffee</h1>
              <p>Tu espacio para crear, conectar y disfrutar.</p>
            </div>
          </div>
        </section>

        {/* Sección de características */}
        <section className="features">
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

            <div className="feature-container">
              <img src={zonaLectura} alt="Zona de Lectura" className="feature-image" />
              <div className="feature-overlay">
                <h2>Zona de Lectura</h2>
                <p>Sumérgete en un rincón tranquilo con buena luz, café aromático y libros que inspiran.</p>
              </div>
            </div>

            <div className="feature-container">
              <img src={patio} alt="Patio de Ideas" className="feature-image" />
              <div className="feature-overlay">
                <h2>Patio De Ideas</h2>
                <p>Espacio creativo para conectar, compartir y relajarte.</p>
              </div>
            </div>
        </section>

        {/* Sección de promociones */}
        
      </main>
    </div>
  );
};

export default Home;