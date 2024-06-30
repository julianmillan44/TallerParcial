const express = require('express');
const router = express.Router();

var detalleVenta = [{}]

router.post('/',(req,res)=>{
    const body = req.body;
    detalleVenta.push({
        id_detalle: req.body.id_detalle,
        id_venta: req.body.id_venta,
        id_pelicula: req.body.id_pelicula,
        precio: req.body.precio
    });
    res.json({
        message: 'Detalles de venta obtenidos',
        data: body.id
    })
})

router.get('/',(req,res)=>{
    res.json(detalleVenta)
})

router.patch('/:id', (req, res) => {
    
    const id = parseInt(req.params.id);
    const detalleVentas = detalleVenta.find(s => s.id === id);
    
    if (!detalleVentas) {
      
    }
    
    const camposActualizables = ['id_detalle', 'id_venta', 'id_pelicula', 'precio'];
    
    camposActualizables.forEach(campo => {
      if (req.body[campo] !== undefined) {
        detalleVentas[campo] = req.body[campo];
      }
    });
    
    res.json({
      message: 'Puesto actualizado',
      data: detalleVentas
    });
});

router.delete('/:id', (req, res) => {
    
    const id = parseInt(req.params.id);
    const detalleVentaIndex = detalleVenta.findIndex(detalle => detalle.id === id);
    
    if (salaIndex === -1) {
      return res.status(404).json({ message: 'Puesto no encontrado'});
    }else{
      const detalleVentaEliminada = detalleVenta.splice(detalleVentaIndex, 1);
    
    res.json({
      message: 'Puesto eliminado',
      data: detalleVentaIndex
    });
 } 
    

});

module.exports = router
