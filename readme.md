
# TRANSACTIONS API

Aplicación Backend para la gestión de transacciones de usuarios (Retiros y depósitos)




## Instalación

Clona el repositorio con git e instala las librerías con NPM


```bash
  npm install 
```
    
Creas un archivo .env con las variables:

```bash
PORT=
DB_HOST= 
DB_USER= 
DB_PASSWORD=
DB_NAME=
DB_PORT=
```

PORT es el puerto de escucha del servidor.
DB_HOST es el host de la base de datos
DB_USER es el usuario de la base de datos
DB_PASSWORD es la contraseña del usuario de la base de datos
DB_NAME es el nombre de la base de datos
DB_PORT es el puerto de la base de datos

Una vez hecho, probar con el comando para ejecutarlo en local:
```bash
  npm run dev 
```


## Estructura

El código mayormente está dentro de una carpeta llamada src. La cuales tienen otras subcarpetas:


Config: Archivos de configuración del proyecto, como obtención de variables de entorno y conexión a PostgreSQL

Entities: Los esquemas de las tablas de Postgre en código TypeScript

DTO: Las definiciones de los cuerpos de las peticiones HTTP

Middlewares: Funcionalidades que se ejecutan en medio de una petición HTTP para validaciones

Controllers: Los manejadores de las peticiones y que devuelven respuestas a estos. Contienen la lógica de las operaciones

Routes: Definición de endpoints

Services: Capa de abstracción que se conecta directamente con la base de datos y opera bajo la lógica de la app

Utils: Funcionalidades y utilidades vatias