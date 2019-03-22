# NodeJS DNA API

***

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
git clone https://github.com/dcamhi/dnaAPI
cd dnaAPI
npm install
```

##### Configuración

Para que el API funcione correctamente, es necesario crear un archivo de configuración (.env) en el cual se especifican las variables de ambiente.

```powershell
touch .env
nano .env


PORT=3000
DB_URL='mongodb://<user>:<pwd>@ds021326.mlab.com:21326/<db_name>'
```
Las variables definidas en el archivo .env especifican un puerto y un endpoint de conexión a la base de datos. Obtener los datos requeridos de la base de datos creada en mlab.

##### Iniciar el API

```powershell
npm start
```
***

## ESTRUCTURA DEL API
El API está construido con 2 modelos, 1 controlador y un direccionador:

```powershell

api
│   README.md
│   server.js
│   .env  
│   package.json
│   app.yaml
│
└───models
│   │   dnaModel
│   │   statsModel
│ 
└───controllers
│   |	dnaController
│   
└───routes
    │   dnaRoutes

test
│   chaiTest

```
En el archivo server.js se define la configuración del servidor virtual y la aplicación, así como la conexión a la base de datos y el parser a utilizar. 

El archivo app.yaml se utiliza para realizar el deploy en Google App Engine.

El código realmente interesante se encuentra en la definición de las rutas del API (dnaRoutes), junto con los modelos y el controlador.

En el archivo ```dnaController.js ``` se encuentra la función que valida si la secuencia de ADN introducida tiene mutación o no, la función se llama ```hasMutation ``` y es llamada en la función ```validate_dna``` cuando se hace un POST request al endpoint ```/api/v1/muation/ ```

A continuación, más información de los endpoints del API.
***

## Se tienen las siguientes funcionalidades con sus respectivos endpoints:

### DNA

##### Obtener los ADN con Mutaciones

```powershell
GET /api/v1/mutation/
```
###### RESPONSE
* **Code:** 200
* **Content:**
```
[
    {
        "_id": "5c940f26c3a510f5f6067f61",
        "__v": 0,
        "dna": "ATGCGA,CAGTGC,TTATGT,AGAAGG,CCCCTA,TCACTG"
    },
    {
        "_id": "5c941193c3a510f5f60855aa",
        "dna": "ATGCGA,CAGTGC,TTATGT,AGAAGG,CCCCTA,TCACTA",
        "__v": 0
    },
    {
        "_id": "5c95039dc3a510f5f65dbb8f",
        "dna": "ATGCGA,CAGTGC,TTATTT,AGACGG,GCGTCA,TCACT",
        "__v": 0
    }
]
```
---
##### Validar e insertar el DNA 

```powershell
POST /api/v1/muation/ 
```
###### BODY
```
{
	"dna": ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
}
```

###### RESPONSE
Si tiene mutación:
* **Code:** 200
* **Content:**
```
"OK"
```

Si no tiene mutación:
* **Code:** 403
* **Content:**
```
"Forbidden"
```
---
### ESTADÍSTICAS

##### Obtener las estadísticas de mutaciones de ADN

```powershell
GET /api/v1/stats/
```

###### RESPONSE
* **Code:** 200
* **Content:**
```
{
    "_id": "5c93d7437a557532233c3676",
    "count_mutations": 11,
    "count_no_mutation": 4,
    "ratio": 4.666666666666666,
    "__v": 0
}
```
***

## Se creó un script utilizando mocha y chai para realizar pruebas unitarias a cada función

El archivo de pruebas unitarias se encuentra en el archivo /test/testChai.js y en dicho archivo se encuentran funciones para realizar pruebas a cada uno de los endpoints del API.
Para correr las pruebas se debe correr el script especificado en el package.json

```powershell
npm test
```
El output del script debería de mostrar en la terminal el número de pruebas que se pasaron exitosamente y la respuesta de cada una de ellas:

```powershell
> dnaapi@1.0.0 test /Users/davidcamhi/Documents/projects/davichon/dnaAPI
> mocha test/*.js --timeout 15000

  Validate a DNA with mutation:
    ✓ Should return true, insert the DNA sequence if it doesnt exist and increment the count (119ms)

  Validate a DNA without mutation:
    ✓ Should return Forbidden and increment the count of dna without mutation

  get all dna with mutation:

[ { _id: '5c940f26c3a510f5f6067f61',
    __v: 0,
    dna: 'ATGCGA,CAGTGC,TTATGT,AGAAGG,CCCCTA,TCACTG' },
  { _id: '5c941193c3a510f5f60855aa',
    dna: 'ATGCGA,CAGTGC,TTATGT,AGAAGG,CCCCTA,TCACTA',
    __v: 0 },
  { _id: '5c95039dc3a510f5f65dbb8f',
    dna: 'ATGCGA,CAGTGC,TTATTT,AGACGG,GCGTCA,TCACT',
    __v: 0 } ]

    ✓ should get all stored dna (765ms)

  get all dna with mutation:

{ _id: '5c93d7437a557532233c3676',
  count_mutations: 12,
  count_no_mutation: 4,
  ratio: 3,
  __v: 0 }

    ✓ should get stats (94ms)

  4 passing (991ms)
```
<br>


Para dudas contactar a [david.camhi26@gmail.com](mailto:david.camhi26@gmail.com)
