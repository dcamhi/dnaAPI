# NodeJS CharactersAPI


## API con conexión a mongoDB 

El api está construido en JavaScript utilizando NodeJS. El almacenamiento es con una base de datos basada en documentos, MongoDB. Para imbplementarla, se utilizó mlab.com, una base de datos como servicio para MongoDB.

##### Requerimientos

```powershell
- npm
- node
```

##### Dependencias

```powershell
- nodemon (para detectar cambios y re iniciar el servidor)
- mongoose (para conexión a base de datos)
- express (para estructurar el API)
- dotenv (para variables de ambiente)
- mocha (pruebas unitarias)
- chai (pruebas unitarias)
- chai-http (pruebas unitarias)
```

##### Instalación
Clonar el repositorio e instalar todas las dependencias de npm

```powershell
git clone https://github.com/dcamhi/workyCharactersAPI.git
cd workyCharactersAPI
npm install
```

##### Configuración

Para que el API funcione correctamente, es necesario crear un archivo de configuración (.env) en el cual se especifican las variables de ambiente.

```powershell
touch .env
nano .env


PORT=3000
DB_URL='mongodb://<user>:<pwd>@ds021326.mlab.com:21326/<collection>'
```
Las variables definidas en el archivo .env especifican un puerto y un endpoint de conexión a la base de datos. Obtener los datos requeridos de la base de datos creada en mlab.

##### Iniciar el API

```powershell
npm start
```

## Se tienen las siguientes funcionalidades con sus respectivos endpoints:

### PERSONAJES

##### Obtener todos los personajes

```powershell
GET /api/v1/characters
```

##### Obtener el personaje con el id especificado

```powershell
GET /api/v1/characters/<_id>
```

##### Insertar un nuevo personaje

```powershell
POST /api/v1/characters/ 
```
###### BODY
```
{
    "title": "Title",
    "info":[{
        "Attribute":
            {"1":"Paragraph 1", "2":"Paragraph2"}
        },{
         "Attribute 2":
            {"1":"Paragraph 1", "2":"Paragraph2"}
        }],
    "details":[{
        "details1":
            {"key":"detail", "key":"detail"}
        },{
            "details 2":
            {"key":"detail 1", "key":"detail"}
        }]

}
```

##### Actualizar el personaje especificado

```powershell
PUT /api/v1/characters/<_id> 
```
###### BODY
```
{
    "title": "Title",
    "info":[{
        "Attribute":
            {"1":"Paragraph 1", "2":"Paragraph2"}
        },{
         "Attribute 2":
            {"1":"Paragraph 1", "2":"Paragraph2"}
        }],
    "details":[{
        "details1":
            {"key":"detail", "key":"detail"}
        },{
            "details 2":
            {"key":"detail 1", "key":"detail"}
        }]

}
```


##### Eliminar el personaje especificado

```powershell
DELETE /api/v1/characters/<_id>
```

## Se creó un script utilizando mocha y chai para realizar pruebas unitarias a cada función

El archivo de pruebas unitarias se encuentra en el archivo /test/testChai.js y en dicho archivo se encuentran funciones para realizar pruebas a cada uno de los endpoints del API.
Para correr las pruebas se debe correr el script especificado en el package.json

```powershell
npm test
```
El output del script debería de mostrar en la terminal el número de pruebas que se pasaron exitosamente y la respuesta de cada una de ellas.
<br>

Para dudas contactar a [david.camhi26@gmail.com](mailto:david.camhi26@gmail.com)
