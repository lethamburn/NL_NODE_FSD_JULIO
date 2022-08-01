# Superhero API - Marvel & DC

- Creamos nuestra estructura de carpetas y ficheros:
|_📁 name_project
	|_📁 src
		|_📁 api -> Carpeta que define modelos-controladores-rutas
			|_📁 elements
					📝 element.controller.js
					📝 element.model.js
					📝 element.routes.js
		|_📁 helpers -> Carpeta funciones auxiliares para dejar el index.js limpio
				📝 db.js
				📝 utils.js
		📝 index.js -> Fichero disparador o inicializador
	📝 .env
	📝 .gitignore
	📝 LICENSE
	📝 package.json
	📝 README.md

- Instalamos las dependencias
- Completamos el package.json con los scripts
- Creamos la conexión a la base de datos en db.js
- Definimos el controlador de errores en utils.js
- Creamos el modelo del elemento
- Creamos los controladores del elemento
- Creamos la ruta del elemento
- Enlazamos todo lo anterior en el index.js
- Arrancamos el servidor con npm start o npm run dev
- A través de Insomnia atacaremos a la ruta de crear y crearemos nuevos elementos correspondiendose con los datos indicados en el modelo
- Comprobaremos que en la ruta especificada van apareciendo los elementos creados y que nuestras rutas funcionan correspondiendose con las funciones indicadas en los controladores y rutas