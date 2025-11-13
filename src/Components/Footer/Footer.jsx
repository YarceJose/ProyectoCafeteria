/**
 * Componente Footer
 * * Este componente renderiza el pie de página principal de la aplicación.
 * Muestra información de la marca, enlaces de navegación, detalles de contacto
 * y enlaces a redes sociales.
 * * @component
 * @returns {JSX.Element} El pie de página renderizado.
 * * @example
 * <Footer />
 */
import React from 'react';
import './Footer.css'; // Importamos los estilos CSS dedicados

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                
                {/* Sección 1: Marca (Brand) */}
                <div className="footer-section footer-brand">
                    <h3 className="footer-title">La Esquina del Café</h3>
                    <p>Tu dosis diaria de inspiración y sabor.</p>
                </div>

                {/* Sección 2: Navegación */}
                <div className="footer-section footer-links">
                    <h4 className="footer-title">Navegación</h4>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/menu">Nuestro Menú</a></li>
                        <li><a href="#historia">Nuestra Historia</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>

                {/* Sección 3: Contacto */}
                <div className="footer-section footer-contact">
                    <h4 className="footer-title">Contáctanos</h4>
                    <ul>
                        <li>📍 Calle Falsa 123, Ciudad del Café</li>
                        <li>📞 (555) 123-4567</li>
                        <li>📧 info@esquinadelcafe.com</li>
                    </ul>
                </div>

                {/* Sección 4: Redes Sociales */}
                <div className="footer-section footer-social">
                    <h4 className="footer-title">Síguenos</h4>
                    <div className="social-icons">
                        {/* Para íconos reales, necesitarías una librería como react-icons.*/}
                        <a href="#facebook" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                        <a href="#instagram" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </div>
                </div>
            </div>

            {/* Barra inferior de Copyright */}
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} La Esquina del Café. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;