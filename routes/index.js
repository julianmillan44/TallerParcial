const express = require('express');

const peliculasRouter = require('./peliculas.router');
const salaRouter = require('./sala.router');
const filaRouter = require('./fila.router');
const puestosRouter = require('./puestos.router');
const detalleVentaRouter = require('./detalleVenta.router');



function rutas(tallerParcial){
    const router = express.Router();
    tallerParcial.use('/', router)
    
    router.use('/peliculas', peliculasRouter)
    router.use('/sala', salaRouter)
    router.use('/fila', filaRouter)
    router.use('/puestos', puestosRouter)
    router.use('/detalleVenta', detalleVentaRouter)
    
}

module.exports = rutas
