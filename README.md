# NodeJS CharactersAPI


## API con conexión a mongoDB 

El api está construido en JavaScript utilizando NodeJS. La base de datos es una basada en documentos, actualmente mongodb en mlab.

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
- mocha (pruebas unitarias)
- chai (pruebas unitarias)
- chai-http (pruebas unitarias)
```

##### Instalación

```powershell
git clone https://github.com/dcamhi/workyCharactersAPI.git
cd workyCharactersAPI
npm install
npm start
```

## Se tienen las siguientes funcionalidades con sus respectivos endpoints:

### 1. PERSONAJES

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

Para dudas contactar a [david.camhi26@gmail.com](mailto:david.camhi26@gmail.com)
