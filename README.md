> **Nota:** Este proyecto fue desarrollado con fines educativos para el curso de React en Coderhouse. Las credenciales de Firebase se encuentran incluidas en el código para facilitar la corrección y revisión del tutor.

# La Taza de la Abuela ☕🥐

¡Bienvenido a **La Taza de la Abuela**! Este proyecto es una plataforma de e-commerce desarrollada para una cafetería artesanal. La aplicación permite a los usuarios explorar un catálogo de productos que incluye desde bebidas clásicas y jugos naturales hasta piezas de panadería tradicional como churros, facturas y donas, etc, ofreciendo una experiencia de compra fluida e integrada con servicios en la nube.


## ✨ Funcionalidades Principales

* **Catálogo Dinámico:** Presentación completa de todos los productos disponibles en la tienda. Cada artículo se muestra de forma clara, permitiendo al usuario tener una visión general de la oferta gastronómica de la cafetería.
* **Filtrado por Categorías:** Navegación optimizada mediante un sistema de categorías que permite segmentar los productos (promociones, bebidas y panaderia). Esto facilita que el usuario encuentre rápidamente lo que busca sin necesidad de recorrer todo el catálogo.
* **Gestión Detallada de Productos:** Cada ítem cuenta con una vista de detalle específica donde el usuario puede seleccionar la cantidad exacta de unidades que desea añadir al carrito antes de confirmar su elección.
* **Carrito de Compras Especializado:** El sistema permite gestionar los productos seleccionados de forma eficiente. El usuario tiene la posibilidad de eliminar ítems individuales del listado o vaciar el carrito por completo para reiniciar su orden.
* **Sistema de Checkout y Órdenes de Compra:** La aplicación cuenta con un formulario de finalización de compra que recopila los datos del cliente. Al confirmar, se genera una orden de compra detallada que incluye:
    * Información de contacto del comprador.
    * Listado de productos (nombres y precios unitarios).
    * Cálculo automático del total a pagar.
    * Registro exacto de la fecha y hora de la transacción.
* **Persistencia en la Nube:** Integración con base de datos para asegurar que los productos y las órdenes de compra se gestionen de manera segura y en tiempo real.


## 🏗️ Arquitectura y Estructura

El proyecto se basa en una arquitectura modular que prioriza la escalabilidad y el mantenimiento del código.

### Patrón de Diseño: Componentes de Presentación y Contenedores
Se ha implementado el patrón de **Smart & Dumb Components** para separar la lógica de negocio de la interfaz visual:
* **Contenedores (Smart):** Se encargan de la lógica, el manejo del estado y las peticiones a Firebase.
* **Componentes de Vista (Dumb/Presentational):** Se limitan a recibir datos por *props* y renderizar la interfaz, garantizando que sean altamente reutilizables.

### Gestión de Estado (Context API)
Se implementó un **`CartProvider`** para centralizar la lógica del carrito de compras. Esto permite que el estado de la compra sea accesible de forma global en toda la aplicación sin necesidad de realizar *prop drilling*.

### Organización de Carpetas
* **`/components`**: Componentes visuales y de presentación.
* **`/context`**: Proveedores de estado global (Context API).
* **`/services`**: Configuración y funciones de comunicación con Firebase.


## 🛠️ Tecnologías utilizadas

### ⚛️ React
**Biblioteca de JavaScript para construir interfaces de usuario basadas en componentes de manera declarativa.**

**📚 Documentación:**  
https://react.dev/

---

### ⚡ Vite
**Herramienta de construcción de proyectos de última generación que proporciona un entorno de desarrollo extremadamente ágil.**

**📚 Documentación:**  
https://vitejs.dev/

---

### 🔥 Firebase
**Plataforma de Google utilizada para la persistencia de datos y la gestión de la base de datos NoSQL donde se almacenan productos y pedidos.**

**📚 Documentación:**  
https://firebase.google.com/docs

---

### 🔀 React Router
**Estándar para el manejo de rutas y navegación dinámica en aplicaciones de una sola página (SPA).**

**📚 Documentación:**  
https://reactrouter.com/

---

### 🎨 Bootstrap & React-Bootstrap
**Framework de diseño utilizado para estructurar la interfaz visual mediante componentes predefinidos y estilos consistentes.**

**📚 Documentación:**  
https://getbootstrap.com/  
https://react-bootstrap.github.io/

---

### 🔔 React Hot Toast
**Implementación de notificaciones visuales rápidas para informar al usuario sobre acciones realizadas (como agregar productos o confirmar compras).**

**📚 Documentación:**  
https://react-hot-toast.com/


## 🛠️ Instalación y Uso

Si deseas replicar este proyecto en tu entorno local, sigue estas instrucciones:

1. **Clonar el repositorio:**
```bash
git clone https://github.com/EnzoH97/CreaTuLanding-Herrara.git
```

2.  **Instalar dependencias:**
```bash
npm install
```

3.  **Ejecutar el proyecto en modo desarrollo:**
```bash
npm run dev
```