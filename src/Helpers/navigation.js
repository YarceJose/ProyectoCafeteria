/**
 * Módulo de Helpers de Navegación
 *
 * Conjunto de funciones utilitarias para navegación usando la API del navegador.
 * Se usan en componentes donde no se quiere depender directamente de React Router.
 * Estas funciones manipulan directamente window.location y window.history.
 *
 * @module navigation
 * 
 * @description
 * FUNCIONES DISPONIBLES:
 * - navigateTo: Navega a una ruta específica (hard refresh)
 * - goBack: Retrocede una página en el historial
 * - goHome: Navega al home
 * - goToLogin: Navega a la página de login
 * - goToRegister: Navega a la página de registro
 *
 * @note
 * Alternativa: Use useNavigate hook de React Router en componentes funcionales
 * cuando sea posible. Use estos helpers solo cuando useNavigate no esté disponible.
 * 
 * @warning
 * Todas estas funciones causan hard refresh de página.
 * Para navegación SPA suave, prefiera React Router hooks.
 */

/**
 * Navega a una ruta específica reemplazando la URL actual
 * 
 * Utiliza window.location.href para hacer una navegación completa de página.
 * Esto causa un hard refresh y recarga todos los recursos.
 *
 * @function navigateTo
 * @param {string} path - Ruta destino (por ejemplo '/login', '/menu', '/')
 * @returns {void}
 *
 * @warning Causa hard refresh de página. Use React Router para navegación SPA cuando sea posible
 * @example
 * navigateTo('/menu'); // Navega al menú
 * navigateTo('/'); // Navega al home
 */
export const navigateTo = (path) => {
  // Realizar navegación con hard refresh
  window.location.href = path;
};

/**
 * Retrocede una página en el historial del navegador
 * 
 * Equivalente a hacer clic en el botón 'Atrás' del navegador.
 * Implementación usando window.history.back().
 *
 * @function goBack
 * @returns {void}
 *
 * @example
 * goBack(); // Vuelve a la página anterior
 */
export const goBack = () => {
  // Retroceder una entrada en el historial
  window.history.back();
};

/**
 * Navega al home (página principal)
 * 
 * Atajo para navegar directamente a la página de inicio.
 * Internamente usa navigateTo('/').
 *
 * @function goHome
 * @returns {void}
 *
 * @example
 * goHome(); // Ir al home
 */
export const goHome = () => {
  // Navegar a página principal
  navigateTo('/');
};

/**
 * Navega a la página de login
 * 
 * Atajo para navegar directamente a la página de inicio de sesión.
 * Internamente usa navigateTo('/login').
 *
 * @function goToLogin
 * @returns {void}
 *
 * @example
 * goToLogin(); // Ir al login
 */
export const goToLogin = () => {
  // Navegar a página de autenticación
  navigateTo('/login');
};

/**
 * Navega a la página de registro
 * 
 * Atajo para navegar directamente a la página de creación de cuenta.
 * Internamente usa navigateTo('/register').
 *
 * @function goToRegister
 * @returns {void}
 *
 * @example
 * goToRegister(); // Ir a registro
 */
export const goToRegister = () => {
  // Navegar a página de registro
  navigateTo('/register');
};
