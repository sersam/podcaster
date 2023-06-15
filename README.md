# Podcast app

Este proyecto se ha creado desde cero, **sin hacer uso de ningun boilerplate y usando webpack/babel.**

El proyecto consiste en hacer una aplicación que te permita tener una lista de podcasts, donde puedas acceder a los detalles de cada uno y reproducir cada uno de sus episodios.

Además de esto, se almacena en el cliente la información para no realizar las peticiones constantemente, y solo hacerlas una vez al día, por lo que cuando se obtiene información de la api (tanto de la lista como de los detalles de un podcast) esta información se almacenará en `localstorage`.

Aparte del desarrollo de la aplicación se le han añadido dos tipos de tests:
 - Test unitarios: Para comprobar el correcto funcionamiento de cada uno de nuestros componentes por separado.
 - Test end to end: Para comprobar el correcto funcionamiento de la aplicación con todos los componentes integrados.

## Librerías
Para el proyecto se han usado las siguientes librerias:
- babel: Para compilar el código.
- webpack: Para empaquetar el código.
- react-testing-library y jest: Para realizar los test unitarios de nuestros componentes.
- eslint y prettier: Para mantener el el formato y analizar el código.
- cypress: Para realizar los tests e2e.
- react-router-dom: Para el redireccionado de la aplicación.

### Librerías para UI 
Además de las librerias mencionadas anteriormente, se ha usado la librería `@mui` para hacer uso de dos componentes:
- Table -> Componente para gestionar la lista de episodios.
- CircularProgress -> Spinner presente en la cabecera que nos informa mientras se está trayendo información.

## estructura
El proyecto tiene la siguiente estructura:
  - src /
    - services -> Carpeta usada para las "conexiones" externas como son las llamadas a la API y el storage.
    - tests/
      - unit-tests
      - cypress
    - views /
      - Episode -> En esta carpeta tenemos la vista con el detalle de un episodio
      - EpisodeList
        - EpisodeList.js -> Este archivo nos muestra la información de la lista de episodios (numero y lista)
        - Table.js -> Archivo para gestionar la lista de episodios.
      - Header -> Carpeta para controlar la vista de la cabecera.
      - PodcastDetails 
        - PodcastDetails.js -> Archivo para gestion
        - SideBar -> Componente para la side bar de la vista podcast details.
      - PodcastList -> Carpeta para manejar la vista con la lista de podcasts.
    - App.js -> Para gestionar el redireccionado de la aplicación
    - Layout.js -> Para gestionar el estado "global" de la aplicacion y las vistas
   

## Scripts disponibles

En el direcotorio del proyecto se pueden ejecutar los siguientes comandos: 

Antes de lanzar el proyecto es conveniente lanzar el comando `npm i` para instalar todas las dependencias y paquetes necesarios que se han usado en el proyecto.

### `npm start`
Lanzará la aplicación en modo desarrollo. Esta será lanzada en [http://localhost:3000](http://localhost:3000)

### `npm run unit-test`
Este script será el encargado de lanzar los unit-tests disponibles en el proyecto.
Estos se encontrarán dentro de la carpeta `tests/unit-tests`.

### `npm run cypress`
Este script será el encargado de lanzar los tests e2e disponibles en el proyecto.
Estos se encontrarán dentro de la carpeta `tests/cypress`.
Para poder lanzar los e2e tests, la aplicación debe estar lanzada primero, ya que apuntan a la url `localhost:3000`.

### `npm run build`
Con este script haremos la build del proyecto para el modo producción.
Se creará una carpeta `dist` en la raiz del proyecto que contendrá los archivos necesarios para nuestro modo de producción.

### `npm run lint`
Con este comando podremos comprobar el código para ver posibles errores. Haremos la comprobación con `eslint` que previamente se ha configurado en el archivo `eslintrc.json`. 
