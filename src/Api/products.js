/**
 * API de Productos
 *
 * Funciones para obtener informacion de productos.
 * Actualmente usan datos simulados (mock data).
 * En produccion, estas funciones harian fetch a un servidor real.
 *
 * @module Api/products
 */

/**
 * Obtiene lista de productos filtrados por categoria.
 *
 * @async
 * @param {string} [category='all'] - Categoria a filtrar ('all', 'drinks', 'food')
 * @returns {Promise<Array>} Array de productos que coinciden con la categoria
 *
 * @example
 * const allProducts = await getProducts();
 * const drinks = await getProducts('drinks');
 */
// Funciones de la API para productos

export const getProducts = async (category = 'all') => {
  // Datos simulados — en una aplicación real esto se obtendría desde una API
  const products = {
    drinks: [
      
      {
        id: 2,
        name: "Espreso",
        description: "Intenso y concentrado, el espreso es la base de todo buen café. Servido en una porción pequeña, ofrece un sabor profundo y un golpe de energía instantáneo.",
        price: "5000$",
        image: "/expreso.jpeg",
        category: "drinks"
      },
      {
        id: 3,
        name: "Capuchino",
        description: "Una deliciosa combinación de espresso, leche vaporizada y espuma cremosa. Su textura sedosa y su sabor equilibrado lo hacen perfecto para cualquier momento del día.",
        price: "5000$",
        image: "/Capuchino.jpeg",
        category: "drinks"
      },
      {
        id: 4,
        name: "Latte",
        description: "Cálido y reconfortante, el latte mezcla espresso con abundante leche vaporizada. Su suavidad lo convierte en la elección ideal para quienes prefieren un café más ligero y personalizable.",
        price: "5000$",
        image: "/Latte.jpeg",
        category: "drinks"
      },
      {
        id: 5,
        img: "/Cafeamericano.jpeg",
        name: "Americano",
        description: "Un café suave y aromático, preparado con espresso y agua caliente. Ideal para quienes buscan una experiencia clásica con cuerpo ligero y sabor equilibrado.",
        price: "$5000",
        image: "/Cafeamericano.jpeg"
      },
      {
        id: 6,
        name: "Espreso",
        description: "Intenso y concentrado, el espreso es la base de todo buen café. Servido en una porción pequeña, ofrece un sabor profundo y un golpe de energía instantáneo.",
        price: "$5000",
        image: "/expreso.jpeg"
      },
      {
        id: 7,
        name: "Capuchino",
        description: "Una deliciosa combinación de espresso, leche vaporizada y espuma cremosa. Su textura sedosa y su sabor equilibrado lo hacen perfecto para cualquier momento del día.",
        price: "$5000",
        image: "/Capuchino.jpeg"
      },
      {
        id: 8,
        name: "Latte",
        description: "Cálido y reconfortante, el latte mezcla espresso con abundante leche vaporizada. Su suavidad lo convierte en la elección ideal para quienes prefieren un café más ligero y personalizable.",
        price: "$5000",
        image: "/Latte.jpeg"
      }
    ],
    food: [
      {
        id: 5,
        name: "Croissant",
        description: "Un café suave y aromático, preparado con espresso y agua caliente. Ideal para quienes buscan una experiencia clásica con cuerpo ligero y sabor equilibrado.",
        price: "5000$",
        image: "/croissant.jpg",
        category: "food"
      },
      {
        id: 6,
        name: "Muffin",
        description: "Intenso y concentrado, el espreso es la base de todo buen café. Servido en una porción pequeña, ofrece un sabor profundo y un golpe de energía instantáneo.",
        price: "5000$",
        image: "/muffin.jpg",
        category: "food"
      },
      {
        id: 7,
        name: "Brownie de chocolate",
        description: "Una deliciosa combinación de espresso, leche vaporizada y espuma cremosa. Su textura sedosa y su sabor equilibrado lo hacen perfecto para cualquier momento del día.",
        price: "5000$",
        image: "/brownie.jpg",
        category: "food"
      },
      {
        id: 8,
        name: "Sándwich de jamón y queso",
        description: "Cálido y reconfortante, el latte mezcla espresso con abundante leche vaporizada. Su suavidad lo convierte en la elección ideal para quienes prefieren un café más ligero y personalizable.",
        price: "5000$",
        image: "/sandwich.jpg",
        category: "food"
      }
    ]
  };

  // Retornar todos los productos o solo los de la categoria solicitada
  if (category === 'all') {
    return [...products.drinks, ...products.food];
  }
  
  return products[category] || [];
};

/**
 * Obtiene un producto especifico por su ID.
 *
 * @async
 * @param {number} id - ID del producto a buscar
 * @returns {Promise<Object|undefined>} Objeto del producto o undefined si no existe
 *
 * @example
 * const product = await getProductById(1);
 */
export const getProductById = async (id) => {
  // Obtener todos los productos y buscar el que coincida con el ID
  const allProducts = await getProducts();
  return allProducts.find(product => product.id === parseInt(id));
};
