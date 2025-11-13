/**
 * Componente Home - Página Principal de Crazy Coffee
 * 
 * Este componente representa la página de inicio de la cafetería.
 * Muestra información sobre los servicios y características del establecimiento
 * con imágenes, textos descriptivos y un diseño atractivo.
 * 
 * @component
 * @returns {JSX.Element} Componente de la página principal
 * 
 * @description
 * La página Home incluye:
 * - SECCIÓN HERO con bienvenida e imagen grande
 * - SECCIÓN DE CARACTERÍSTICAS (3 tarjetas con efectos):
 *   • Zona Coworking - para trabajar/estudiar
 *   • Zona de Lectura - ambiente tranquilo
 *   • Patio De Ideas - espacio creativo
 * 
 * CARACTERÍSTICAS TÉCNICAS:
 * - Efectos hover en imágenes (overlay negro 20%)
 * - Carga lazy de imágenes para mejor performance
 * - Manejo de errores de carga de imágenes con fallback
 * - Responsive design con Grid layout
 * 
 * @example
 * <Home />
 *
 * @styling
 * - Grid layout responsivo
 * - Overlay effect on hover (rgba black 0.2) - pseudo-elemento ::after
 * - Lazy loading para optimización de carga
 * - Media queries para dispositivos móviles
 */

import React from 'react';
import './Home.css';
// Importar imágenes del directorio de assets para optimización Vite
import welcome from '../../assets/home/welcome.png';
import zonaLectura from '../../assets/home/ZonaLectura.png';
import coworking from '../../assets/home/Coworking.png';
import patio from '../../assets/home/Patio.png';



const Home = () => {
  return (
    <div className="home-container">
      <main className="home">
        {/* ============================================================ */}
        {/* SECCIÓN HERO - Bienvenida principal */}
        {/* ============================================================ */}

        <section className="welcome">
          <div className="welcome-container">
            {/* Imagen principal de bienvenida */}
            <img src={welcome} alt="Bienvenida a Crazy Coffee" className="welcome-image" />
            {/* Overlay con texto de bienvenida */}
            <div className="welcome-overlay">
              <h1>Bienvenido a Crazy Coffee</h1>
              <p>Tu espacio para crear, conectar y disfrutar.</p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECCIÓN DE CARACTERÍSTICAS - 3 tarjetas con servicios */}
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
              <img src={zonaLectura} 
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
              <img src={patio} 
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

        {/* Sección de promociones */}
        
      </main>
    </div>
  );
};

export default Home;