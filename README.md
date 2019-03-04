# NodeJS CharactersAPI


## API con conexión a mongoDB 

El api está construido en JavaScript utilizando NodeJS. La base de datos es una basada en documentos, actualmente mongodb en mlab.com

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

```powershell
git clone https://github.com/dcamhi/workyCharactersAPI.git
cd workyCharactersAPI
touch .env
npm install
npm start
```

##### .env
Para que el API funcione correctamente, es necesario agregar las siguientes variables al archivo .env en el cual se especifica un puerto y la liga de conexión a la base de datos de la siguiente manera:

```powershell
PORT=3000
DB_URL='mongodb://<user>:<pwd>@ds021326.mlab.com:21326/<collection>'
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
    "info":{
        "Attribute":
            {"1":"Paragraph 1", "2":"Paragraph2"}
        },
         "Attribute 2":
            {"1":"Paragraph 1", "2":"Paragraph2"}
        }
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
    "info":{
        "Attribute":
            {"1":"Paragraph 1", "2":"Paragraph2"}
        },
         "Attribute 2":
            {"1":"Paragraph 1", "2":"Paragraph2"}
        }
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
