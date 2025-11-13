/**
 * Componente ProductCard - Tarjeta de Producto
 *
 * Componente presentacional reutilizable para mostrar la información de un producto
 * en formato de tarjeta. Se utiliza en el menú para presentar bebidas y comidas
 * de forma visual y atractiva.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.product - Objeto del producto a mostrar
 * @param {number} props.product.id - ID único del producto
 * @param {string} props.product.name - Nombre del producto
 * @param {string} props.product.description - Descripción del producto
 * @param {string} props.product.price - Precio del producto
 * @param {string} props.product.image - URL de la imagen del producto
 * @returns {JSX.Element} Tarjeta de producto con imagen, nombre, descripción y precio
 *
 * @description
 * Estructura:
 * - Imagen del producto con alt text
 * - Nombre del producto en encabezado H3
 * - Descripción del producto en párrafo
 * - Footer con precio y botón de agregar al carrito
 *
 * @example
 * const producto = {
 *   id: 1,
 *   name: 'Americano',
 *   description: 'Un café suave y aromático',
 *   price: '$5000',
 *   image: '/Cafeamericano.jpeg'
 * };
 * <ProductCard product={producto} />
 */
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  // Nota: El botón de agregar es decorativo por ahora
  // En el futuro se conectará con un carrito de compras
  return (
    <article className="card">
      <img
        className="imagen-producto"
        src={product.image}
        alt={product.name}
      />
      <div className="info-producto">
        <h3 className="nombre-producto">{product.name}</h3>
        <p className="descripcion-producto">{product.description}</p>
      </div>
        <div className="card-footer">
          <span className="precio-producto">{product.price}</span>
          <button className="boton-agregar">+</button>
        </div>
    </article>
  );
};

export default ProductCard;
