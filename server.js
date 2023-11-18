const express = require('express')
const app = express()

//importar conexion a mongo db

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend')
} )

//configurar server 
app.listen(3000, function(){
    console.log('Se esta ejecutando por el puerto 3000')
})