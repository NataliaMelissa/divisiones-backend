<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# 🚀 Divisiones Backend - Challenge
Este proyecto es una API REST desarrollada con **NestJS** para la gestión jerárquica de las divisiones de una organización. Permite realizar operaciones CRUD con soporte para estructuras recursivas (relación Padre/Hijo).


## 🛠️ Requisitos Previos
Para realizar el proyecto se utilizaron las siguientes dependencias con las siguientes versiones:
*   **Node.js**: `v20.12.0`
*   **npm**: `v10.5.0`
*   **nvm-windows**: `v1.2.1`
*   **Base de Datos**: `MariaDB v10.4.32 (XAMPP)`

El proyecto es compatible con las siguientes versiones de las dependencias mencionadas anteriormente:
*   **Node.js**: `v20.x` o superior.
*   **npm**: `v10.x` o superior.
*   **Base de Datos**: MariaDB `v10.4.32` o superior (Compatible con MySQL `v8.0`).
*   **Gestor de versiones (opcional):** nvm `v1.2.1`


## 📦 Instalación y Configuración
1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/NataliaMelissa/divisiones-backend.git](https://github.com/NataliaMelissa/divisiones-backend.git)
    cd divisiones-backend
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecución**
    ```bash
    npm run start:dev
    ```

## Documentación
Dentro de la carpeta /docs se encuentran los recursos necesarios para probar el sistema:

*   **seeds.sql:** Script para popular la base de datos con la pirámide de 10 divisiones y los colaboradores.
*   **diagram.png:** Diagrama del modelo Entidad-Relación de la base de datos.
*   **Divisiones-Reto.postman_collection.json:** Colección para importar en Postman y probar los endpoints (con esto se hicieron las pruebas locales).