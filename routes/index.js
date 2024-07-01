const express = require('express');

const peliculasRouter = require('./peliculas.router');
const salaRouter = require('./sala.router');
const filaRouter = require('./fila.router');
const puestosRouter = require('./puestos.router');
const detalleVentaRouter = require('./detalleVenta.router');
const ventaRouter = require('./ventaBoleta.router');
const empleadoRouter = require('./empleado.router');
const clienteRouter = require('./cliente.router');



function rutas(tallerParcial){
    const router = express.Router();
    tallerParcial.use('/', router)
    
    router.use('/peliculas', peliculasRouter)
    router.use('/sala', salaRouter)
    router.use('/fila', filaRouter)
    router.use('/puestos', puestosRouter)
    router.use('/detalleVenta', detalleVentaRouter)
    router.use('/ventaBoleta', ventaRouter)
    router.use('/empleado', empleadoRouter)
    router.use('/cliente', clienteRouter)

}

module.exports = rutas
