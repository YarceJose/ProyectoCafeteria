/**
 * Módulo de Autenticación
 *
 * Conjunto de funciones auxiliares para manejar la autenticación de usuarios.
 * Actualmente usa validación mock y localStorage para almacenar sesiones.
 * En producción, estas funciones se conectarían con un backend/API.
 *
 * @module auth
 *
 * @description
 * FUNCIONES DISPONIBLES:
 * - validateCredentials: Valida usuario y contraseña
 * - saveUserData: Guarda datos de usuario en localStorage
 * - getUserData: Obtiene datos del usuario guardados
 * - clearUserData: Elimina datos del usuario (logout)
 * - isAuthenticated: Verifica si hay usuario autenticado
 *
 * @note
 * Todas las funciones trabajan con localStorage, que NO es seguro para
 * información sensible. En producción usar tokens JWT y cookies httpOnly.
 */

/**
 * Valida las credenciales de un usuario
 *
 * @function validateCredentials
 * @param {string} username - Nombre de usuario a validar
 * @param {string} password - Contraseña a validar
 * @returns {boolean} true si las credenciales son correctas, false en caso contrario
 *
 * @note En producción, reemplazar con llamada a API backend
 * @example
 * const isValid = validateCredentials('admin', 'admin');
 * // returns true
 */
export const validateCredentials = (username, password) => {
  // Validación simple con credenciales hardcodeadas
  // En producción: hacer POST a /api/auth/login con username y password
  return username === "admin" && password === "admin";
};

/**
 * Guarda los datos del usuario en localStorage
 *
 * @function saveUserData
 * @param {Object} userData - Datos del usuario a guardar
 * @param {string} userData.username - Nombre de usuario
 * @param {string} userData.email - Email del usuario
 * @returns {void}
 *
 * @note En producción, guardar en base de datos backend
 * @example
 * saveUserData({ username: 'admin', email: 'admin@coffee.com' });
 */
export const saveUserData = (userData) => {
  // Serializar y guardar en localStorage
  // Nota: localStorage es inseguro para datos sensibles en producción
  localStorage.setItem('userData', JSON.stringify(userData));
};

/**
 * Obtiene los datos del usuario guardados en localStorage
 *
 * @function getUserData
 * @returns {Object|null} Datos del usuario si existen, null en caso contrario
 *
 * @example
 * const user = getUserData();
 * if (user) {
 *   console.log(user.username);
 * }
 */
export const getUserData = () => {
  // Obtener y parsear datos de localStorage
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
};

/**
 * Elimina los datos del usuario de localStorage (logout)
 *
 * @function clearUserData
 * @returns {void}
 *
 * @example
 * clearUserData(); // Cierra la sesión
 */
export const clearUserData = () => {
  // Eliminar datos de sesión del usuario
  localStorage.removeItem('userData');
};

/**
 * Verifica si hay un usuario autenticado actualmente
 *
 * @function isAuthenticated
 * @returns {boolean} true si hay usuario autenticado, false en caso contrario
 *
 * @example
 * if (isAuthenticated()) {
 *   // Mostrar contenido protegido
 * }
 */
export const isAuthenticated = () => {
  // Comprobar si existen datos de usuario en la sesión
  return getUserData() !== null;
};
