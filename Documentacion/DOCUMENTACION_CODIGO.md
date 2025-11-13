# Documentación del Código - Proyecto Cafetería

## Descripción General
Este proyecto es una aplicación web de cafetería desarrollada con React, que permite a los usuarios visualizar productos (bebidas y comida), registrarse e iniciar sesión. La aplicación utiliza React Router para la navegación y está estructurada de manera modular.

---

## Estructura del Proyecto

```
src/
├── Api/                    # Funciones de API y datos de productos
├── Components/             # Componentes reutilizables de React
├── Helpers/               # Funciones auxiliares
├── Pages/                 # Páginas principales de la aplicación
├── Routes/                # Configuración de rutas
├── App.css               # Estilos globales de la aplicación
├── App.jsx               # Componente principal de la aplicación
├── index.css             # Estilos base y fuentes
└── main.jsx              # Punto de entrada de la aplicación
```

---

## Archivos Principales

### 1. main.jsx
**Propósito:** Punto de entrada de la aplicación React
**Descripción:** Este archivo inicializa la aplicación React y monta el componente principal en el DOM.

```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**Características:**
- Utiliza `StrictMode` para detectar problemas potenciales
- Importa los estilos globales desde `index.css`
- Monta el componente `App` en el elemento con id "root"

### 2. App.jsx
**Propósito:** Componente raíz de la aplicación
**Descripción:** Componente principal que envuelve toda la aplicación y maneja el enrutamiento.

```javascript
import './App.css'
import AppRoutes from './Routes/AppRoutes'

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  )
}

export default App
```

**Características:**
- Importa los estilos específicos de la aplicación
- Renderiza el componente de rutas `AppRoutes`
- Proporciona el contenedor principal de la aplicación

### 3. Estilos Globales

#### App.css
**Propósito:** Estilos globales específicos de la aplicación
**Características principales:**
- Configuración de fuente: "Open Sans"
- Color de fondo: #EFDCAB (tono beige)
- Reset de márgenes y padding
- Configuración del contenedor principal `.App`

#### index.css
**Propósito:** Estilos base y configuración de fuentes
**Características principales:**
- Importación de fuentes de Google Fonts (Open Sans y Roboto)
- Reset básico de estilos
- Configuración de tipografía global

---

## API y Datos de Productos

### Api/products.js
**Propósito:** Manejo de datos de productos y funciones de API simuladas

#### Funciones Principales:

**1. getProducts(category = 'all')**
- **Parámetros:** `category` - Categoría de productos ('all', 'drinks', 'food')
- **Retorna:** Array de productos según la categoría especificada
- **Descripción:** Simula una llamada a API y retorna datos mock de productos

**Estructura de productos:**
```javascript
{
  id: number,           // Identificador único
  name: string,         // Nombre del producto
  description: string,  // Descripción detallada
  price: string,        // Precio formateado
  image: string,        // Ruta de la imagen
  category: string      // Categoría ('drinks' o 'food')
}
```

**Productos disponibles:**
- **Bebidas:** Americano, Espreso, Capuchino, Latte
- **Comida:** Croissant, Muffin, Brownie de chocolate, Sándwich de jamón y queso

**2. getProductById(id)**
- **Parámetros:** `id` - ID del producto a buscar
- **Retorna:** Objeto del producto encontrado o undefined
- **Descripción:** Busca un producto específico por su ID

---

## Componentes

### 1. Header.jsx
**Propósito:** Componente de encabezado de la aplicación
**Ubicación:** `Components/Header.jsx`

**Características:**
- Logo de la empresa
- Enlaces de navegación (Bebidas, Comida)
- Botones de registro e inicio de sesión
- Diseño responsive con flexbox

**Estructura:**
```javascript
const Header = () => {
  return (
    <header className="Encabezado">
      <main>
        <div className="Contenedor-principal">
          <div className="logo">
            <img src="/logo.png" alt="Logo de Crazzy Coffee" />
          </div>
          <a className="bebidas" href="#bebidas">Bebidas</a>
          <a className="comida" href="#comida">Comida</a>
        </div>
      </main>
      
      <main className="menu">
        <div className="Contenedor-secundario">
          <Link to="/register">
            <button id="registro">Registrate</button>
          </Link>
          <Link to="/login">
            <button id="login">Iniciar sesión</button>
          </Link>
        </div>
      </main>
    </header>
  );
};
```

**Estilos (Header.css):**
- Color de fondo: #654828 (marrón oscuro)
- Logo circular con bordes redondeados
- Efectos hover en enlaces y botones
- Transiciones suaves para mejor UX

### 2. ProductCard.jsx
**Propósito:** Componente para mostrar información de productos
**Ubicación:** `Components/ProductCard.jsx`

**Props:**
- `product` - Objeto con información del producto

**Características:**
- Muestra imagen, nombre, descripción y precio
- Diseño de tarjeta con efectos hover
- Animaciones CSS para mejor interactividad

**Estructura:**
```javascript
const ProductCard = ({ product }) => {
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
        <h3 className="precio-producto">{product.price}</h3>
      </div>
    </article>
  );
};
```

**Estilos (ProductCard.css):**
- Tarjetas con bordes redondeados
- Efectos de elevación en hover
- Sombras animadas
- Imágenes con object-fit cover

### 3. Login.jsx
**Propósito:** Componente de formulario de inicio de sesión
**Ubicación:** `Components/Login.jsx`

**Características:**
- Formulario con campos de usuario y contraseña
- Validación simple (admin/admin)
- Navegación a página principal tras login exitoso
- Diseño con imagen de fondo

**Estado local:**
```javascript
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
```

**Funciones principales:**
- `handleLogin()` - Valida credenciales y navega
- Validación hardcodeada para demo

**Estilos (Login.css):**
- Fondo con imagen de café
- Formulario con overlay semi-transparente
- Campos de entrada con etiquetas flotantes
- Efectos de transición en botones

### 4. Register.jsx
**Propósito:** Componente de formulario de registro de usuarios
**Ubicación:** `Components/Register.jsx`

**Características:**
- Formulario completo con múltiples campos
- Gestión de estado con objeto formData
- Validación de campos requeridos
- Navegación tras registro exitoso

**Estado local:**
```javascript
const [formData, setFormData] = useState({
  nombre: '',
  apellido: '',
  email: '',
  username: '',
  password: ''
});
```

**Funciones principales:**
- `handleInputChange()` - Actualiza el estado del formulario
- `handleSubmit()` - Procesa el envío del formulario

**Estilos (Register.css):**
- Diseño similar al login pero con más campos
- Contenedores flexibles para nombre y apellido
- Botones de acción múltiples

---

## Funciones Auxiliares

### Helpers/auth.js
**Propósito:** Funciones de autenticación y manejo de datos de usuario

#### Funciones disponibles:

**1. validateCredentials(username, password)**
- Valida credenciales de usuario
- Retorna boolean
- Implementación simple para demo

**2. saveUserData(userData)**
- Guarda datos de usuario en localStorage
- Recibe objeto con datos del usuario

**3. getUserData()**
- Recupera datos de usuario desde localStorage
- Retorna objeto parseado o null

**4. clearUserData()**
- Elimina datos de usuario del localStorage

**5. isAuthenticated()**
- Verifica si el usuario está autenticado
- Retorna boolean basado en presencia de datos

### Helpers/navigation.js
**Propósito:** Funciones auxiliares para navegación

#### Funciones disponibles:

**1. navigateTo(path)**
- Navega a una ruta específica
- Utiliza window.location.href

**2. goBack()**
- Regresa a la página anterior
- Utiliza window.history.back()

**3. goHome()**
- Navega a la página principal

**4. goToLogin()**
- Navega a la página de login

**5. goToRegister()**
- Navega a la página de registro

---

## Páginas

### 1. Home.jsx
**Propósito:** Página principal de la aplicación
**Ubicación:** `Pages/Home.jsx`

**Características:**
- Muestra el encabezado
- Dos secciones: Bebidas y Comida
- Renderiza productos usando ProductCard
- Datos hardcodeados (duplicados desde API)

**Estructura:**
```javascript
const Home = () => {
  // Arrays de bebidas y comida hardcodeados
  const bebidas = [...];
  const comida = [...];

  return (
    <div className="home-container">
      <Header />
      
      <section className="Contenido" id="bebidas">
        <h2 className="titulo-contenido">Bebidas</h2>
        <section className="cards">
          {bebidas.map(bebida => (
            <ProductCard key={bebida.id} product={bebida} />
          ))}
        </section>
      </section>

      <section className="Contenido" id="comida">
        <h2 className="titulo-contenido">Comida</h2>
        <section className="cards">
          {comida.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </section>
      </section>
    </div>
  );
};
```

**Estilos (Home.css):**
- Fondo beige (#EFDCAB)
- Títulos grandes (80px)
- Layout flexbox para distribución de productos
- Secciones de altura completa (100vh)

### 2. LoginPage.jsx
**Propósito:** Página contenedora para el componente de login
**Ubicación:** `Pages/LoginPage.jsx`

```javascript
const LoginPage = () => {
  return <Login />;
};
```

### 3. RegisterPage.jsx
**Propósito:** Página contenedora para el componente de registro
**Ubicación:** `Pages/RegisterPage.jsx`

```javascript
const RegisterPage = () => {
  return <Register />;
};
```

---

## Rutas

### Routes/AppRoutes.jsx
**Propósito:** Configuración de rutas de la aplicación
**Ubicación:** `Routes/AppRoutes.jsx`

**Características:**
- Utiliza React Router para navegación SPA
- Tres rutas principales configuradas

**Rutas disponibles:**
```javascript
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};
```

**Descripción de rutas:**
- `/` - Página principal (Home)
- `/login` - Página de inicio de sesión
- `/register` - Página de registro

---

## Consideraciones Técnicas

### Tecnologías Utilizadas:
- **React 18** - Framework principal
- **React Router** - Navegación SPA
- **CSS3** - Estilos y animaciones
- **JavaScript ES6+** - Sintaxis moderna

### Patrones de Diseño:
- **Componentes funcionales** - Uso de hooks
- **Props drilling** - Paso de datos entre componentes
- **CSS Modules** - Estilos encapsulados por componente
- **Single Page Application** - Navegación sin recarga

### Áreas de Mejora Identificadas:
1. **Datos duplicados** - Los productos están hardcodeados tanto en API como en Home
2. **Validación simple** - El sistema de autenticación es muy básico
3. **Estado global** - Falta un sistema de manejo de estado
4. **API real** - Los datos son mock, no hay backend
5. **Responsive design** - Podría mejorarse la adaptabilidad móvil

### Funcionalidades Futuras Sugeridas:
- Sistema de carrito de compras
- Integración con API real
- Sistema de autenticación robusto
- Panel de administración
- Búsqueda y filtros de productos
- Sistema de pedidos en línea

---

## Conclusión

Este proyecto de cafetería demuestra una implementación básica pero funcional de una aplicación React. La estructura modular facilita el mantenimiento y la escalabilidad. Aunque tiene limitaciones en términos de funcionalidad real, proporciona una base sólida para futuras mejoras y expansiones del sistema.
