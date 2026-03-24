
# Centro Copérnico - Frontend

Este repositorio contiene el código fuente de la aplicación frontend para [Centro Copérnico](https://www.crcopernico.com/). Está construido con React y Material-UI, y configurado para despliegue continuo en un entorno de hosting compartido.

## 🚀 Enlaces Importantes

* **Sitio en Producción:** [https://www.crcopernico.com/](https://www.crcopernico.com/)
* **Panel de Administración (Hosting):** [hPanel de crcopernico.com](https://hpanel.hostinger.com/websites/crcopernico.com)

## 🛠️ Stack Tecnológico Principal

* **Framework:** React 18 (Bootstrapped con Create React App)
* **Enrutamiento:** React Router v6 (`react-router-dom`)
* **Componentes y Estilos:** Material-UI (MUI v5) y Emotion

## ⚙️ Arquitectura y Despliegue (Lectura Obligatoria)

El flujo de despliegue de este proyecto está automatizado. Por favor, ten en cuenta la siguiente topología antes de realizar cambios en la infraestructura:

1. **Dominio y DNS:** El dominio `crcopernico.com` está registrado y gestionado en **GoDaddy**. Los Nameservers (DNS) están apuntando a los servidores de Hostinger.
2. **Hosting:** El sitio se aloja en un plan de **Hostinger**. Los archivos estáticos compilados se sirven desde la carpeta `public_html` del servidor web (Apache/LiteSpeed).
3. **CI/CD (Despliegue Automático):** El proyecto utiliza **GitHub Actions**. Cualquier *commit* que sea pusheado o mergeado a la rama `main` disparará un flujo de trabajo que ejecuta `npm run build` y sube los archivos resultantes automáticamente a Hostinger a través de FTP. **No es necesario (ni recomendable) subir archivos manualmente mediante FileZilla o el administrador web.**

### ⚠️ El archivo `.htaccess` y React Router
Al ser una Single Page Application (SPA), React Router maneja las rutas del lado del cliente. Para evitar errores **404 (Página en blanco)** al recargar una ruta directa en el navegador (ej. `/conocenos`), el servidor necesita saber cómo enrutar el tráfico.

**Regla de oro:** Existe un archivo `.htaccess` que **debe vivir dentro de la carpeta `public/`** del código fuente. De esta manera, al ejecutar el *build*, Webpack lo copia automáticamente a la raíz de producción e indica al servidor que redirija todas las peticiones físicas no encontradas hacia el archivo `index.html`. ¡No elimines ni modifiques este archivo a menos que cambies de servidor web!

### ⚠️ Rutas relativas en `package.json`
Notarás que el `package.json` incluye la propiedad `"homepage": "."`. Esto es vital para que el *build* de React genere rutas relativas correctas para los assets (archivos JS y CSS) y la interfaz no cargue en blanco por errores de rutas estáticas en Hostinger.

## 💻 Desarrollo Local

Para levantar el entorno de desarrollo en tu máquina:

1. **Instalar dependencias:**
   ```bash
   npm install
    ```

2.  **Iniciar el servidor local:**

    ```bash
    npm start
    ```

    Abre [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) para verlo en el navegador. La página se recargará automáticamente al guardar cambios.

3.  **Validar el Build (Importante para GitHub Actions):**

    ```bash
    npm run build
    ```

    *Nota sobre Integración Continua:* El entorno CI de GitHub Actions ejecuta este mismo comando, pero trata los *warnings* (advertencias de ESLint, como variables sin usar o imágenes sin etiqueta `alt`) como **errores fatales** que detienen el despliegue. Asegúrate de que tu código esté limpio de advertencias antes de hacer push a `main`.

