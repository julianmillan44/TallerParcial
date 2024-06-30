const express = require('express');

const peliculasRouter = require('./peliculas.router');


function rutas(tallerParcial){
    const router = express.Router();
    tallerParcial.use('/', router)
    
    router.use('/peliculas', peliculasRouter);
}

module.exports = rutas