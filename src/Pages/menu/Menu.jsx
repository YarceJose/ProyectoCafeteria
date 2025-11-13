/**
 * Componente Menu - Página del Catálogo de Productos con Filtrado
 * 
 * Este componente muestra el catálogo de productos de la cafetería con funcionalidad
 * de filtrado dinámico. Los usuarios pueden ver todas las categorías o filtrar por
 * secciones específicas (bebidas o comida) mediante navegación por anclas.
 * 
 * @component
 * @returns {JSX.Element} Componente de la página del menú con filtrado
 * 
 * @description
 * La página Menu incluye:
 * - Header de navegación con enlaces funcionales
 * - Sistema de filtrado por secciones (bebidas, comida, todas)
 * - Navegación por anclas con scroll automático
 * - Renderizado condicional de secciones
 * - Sección de BEBIDAS con 8 productos (Americano, Espreso, Capuchino, Latte)
 * - Sección de COMIDA con 4 productos (Croissant, Muffin, Brownie, Sándwich)
 * - Uso del componente ProductCard para mostrar cada producto
 * 
 * RUTAS SOPORTADAS:
 * - "/menu" - Muestra todas las secciones
 * - "/menu#bebidas" - Muestra solo la sección de bebidas
 * - "/menu#comida" - Muestra solo la sección de comida
 * 
 * @state
 * - activeSection: Controla qué sección mostrar ('all', 'bebidas', 'comida')
 * 
 * @hooks
 * - useEffect: Escucha cambios en location.hash para actualizar filtro
 * - useLocation: Obtiene la URL actual para navegación por anclas
 * 
 * @example
 * <Menu />
 *
 * @note
 * La navegación se realiza vía React Router con fragmentos (#)
 * El scroll es suave hacia la sección seleccionada
 */

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../Components/productos/ProductCard';
import './Menu.css';

const Menu = () => {
  // Estado que controla qué sección mostrar
  // Valores posibles: 'all' (todas), 'bebidas' o 'comida'
  const [activeSection, setActiveSection] = useState('all');
  // Hook para obtener la URL actual incluyendo hash (#)
  const location = useLocation();

  // Efecto para reaccionar a cambios en la URL (hash)
  useEffect(() => {
  // Función para manejar la navegación por anclas
  const handleScrollToSection = () => {
    // Obtener el hash de la URL actual (ej: #bebidas, #comida)
    const hash = location.hash;
    
    if (hash) {
      // Extraer el nombre de la sección sin el # (ej: bebidas)
      const sectionName = hash.substring(1);
      
      // Validar que sea una sección válida
      if (sectionName === 'bebidas' || sectionName === 'comida') {
        // Actualizar estado para mostrar solo esa sección
        setActiveSection(sectionName);
      } else {
        // Si el hash no es válido, mostrar todas las secciones
        setActiveSection('all');
      }
      
      // Buscar el elemento HTML con ese ID
      const element = document.querySelector(hash);
      
      if (element) {
        // Pequeño delay para asegurar que el DOM está actualizado
        setTimeout(() => {
          // Hacer scroll suave hasta ese elemento
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    } else {
      // Si no hay hash, mostrar todas las secciones
      setActiveSection('all');
    }
  };

  // Ejecutar manejo de navegación cuando cambiar la URL
  handleScrollToSection();
  }, [location.hash]);

  /**
   * Array de BEBIDAS disponibles en el menú
   * Cada bebida contiene: id, name, description, price, image
   */
  const bebidas = [
    {
      id: 1,
      img: "/Cafeamericano.jpeg",
      name: "Americano",
      description: "Un café suave y aromático, preparado con espresso y agua caliente. Ideal para quienes buscan una experiencia clásica con cuerpo ligero y sabor equilibrado.",
      price: "$5000",
      image: "/Cafeamericano.jpeg"
    },
    {
      id: 2,
      name: "Espreso",
      description: "Intenso y concentrado, el espreso es la base de todo buen café. Servido en una porción pequeña, ofrece un sabor profundo y un golpe de energía instantáneo.",
      price: "$5000",
      image: "/expreso.jpeg"
    },
    {
      id: 3,
      name: "Capuchino",
      description: "Una deliciosa combinación de espresso, leche vaporizada y espuma cremosa. Su textura sedosa y su sabor equilibrado lo hacen perfecto para cualquier momento del día.",
      price: "$5000",
      image: "/Capuchino.jpeg"
    },
    {
      id: 4,
      name: "Latte",
      description: "Cálido y reconfortante, el latte mezcla espresso con abundante leche vaporizada. Su suavidad lo convierte en la elección ideal para quienes prefieren un café más ligero y personalizable.",
      price: "$5000",
      image: "/Latte.jpeg"
    },
    
    
  ];

  /**
   * Array de COMIDA disponible en el menú
   * Cada producto contiene: id, name, description, price, image
   */
  const comida = [
    {
      id: 5,
      name: "Croissant",
      description: "Un café suave y aromático, preparado con espresso y agua caliente. Ideal para quienes buscan una experiencia clásica con cuerpo ligero y sabor equilibrado.",
      price: "$5000",
      image: "/croissant.jpg"
    },
    {
      id: 6,
      name: "Muffin",
      description: "Intenso y concentrado, el espreso es la base de todo buen café. Servido en una porción pequeña, ofrece un sabor profundo y un golpe de energía instantáneo.",
      price: "$5000",
      image: "/muffin.jpg"
    },
    {
      id: 7,
      name: "Brownie de chocolate",
      description: "Una deliciosa combinación de espresso, leche vaporizada y espuma cremosa. Su textura sedosa y su sabor equilibrado lo hacen perfecto para cualquier momento del día.",
      price: "$5000",
      image: "/brownie.jpg"
    },
    {
      id: 8,
      name: "Sándwich de jamón y queso",
      description: "Cálido y reconfortante, el latte mezcla espresso con abundante leche vaporizada. Su suavidad lo convierte en la elección ideal para quienes prefieren un café más ligero y personalizable.",
      price: "$5000",
      image: "/sandwich.jpg"
    }
  ];

  return (
    <div className="menu-container">
      {/* ============================================================ */}
      {/* SECCIÓN DE BEBIDAS */}
      {/* Muestra solo si activeSection es 'all' o 'bebidas' */}
      {/* ============================================================ */}
      {(activeSection === 'all' || activeSection === 'bebidas') && (
        <section className="Contenido" id="bebidas">
          <h2 className="titulo-contenido">Bebidas</h2>
          {/* Grid de tarjetas de bebidas */}
          <section className="cards">
            {bebidas.map(bebida => (
              <ProductCard key={bebida.id} product={bebida} />
            ))}
          </section>
        </section>
      )}

      {/* ============================================================ */}
      {/* SECCIÓN DE COMIDA */}
      {/* Muestra solo si activeSection es 'all' o 'comida' */}
      {/* ============================================================ */}
      {(activeSection === 'all' || activeSection === 'comida') && (
        <section className="Contenido" id="comida">
          <h2 className="titulo-contenido">Comestibles</h2>
          {/* Grid de tarjetas de comida */}
          <section className="cards">
            {comida.map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </section>
        </section>
      )}
    </div>
  );
};

export default Menu;
