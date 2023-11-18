const express = require('express')
const app = express()

//importar conexion a mongo db
const archivoBD = require('./conexion')

//Import of archivo of routes and model user
const rutausuario = require('./routes/Usuario')

//import body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: 'true' }))

app.use('api/Usuario', rutausuario)

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend')
})
//configurar server 
app.listen(4000, function () {
    console.log('Se esta ejecutando por el puerto 3000')
})