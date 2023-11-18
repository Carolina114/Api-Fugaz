const express = require('express')
const router = express.Router

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    name_rol: { type: String, require: true },
    state_rol: { type: Boolean, require: true },
    name_permission: { type: String, require: true },
    name_user: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    state_user: { type: String, require: true },
    date_register: { type: String, require: true },
    iduser: String
})
const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
module.exports = router

/*router.get('./ejemplo', (req, res) => {
    res.end('ruta ejemplo')
})*/

router.post('/Agregarusuario', (req, res) =>{
    const nuevousuario = new ModeloUsuario({
    name_rol: req.body.name_rol,
    state_rol: req.body.state_rol,
    name_permission: req.body.name_permission,
    name_user: req.body.name_user,
    email: req.body.email,
    password: req.body.password,
    state_user: req.body.state_user,
    date_register: req.body.date_register,
    iduser: req.body.iduser
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send('✅Usuario agregado satisfactoriamente✅')
        }
        else{
            res.send(err)
        }
    })
})