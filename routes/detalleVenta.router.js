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
        data: body.id_detalle
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

router.get('/:id_detalle/id_pelicula/precio', (req,res)=>{
  const id_detalle = req.params.id_detalle;
  const buscarId = detalleVenta.find(detalle => detalle.id_detalle == id_detalle)
  res.json({
    id_pelicula: buscarId.id_pelicula,
    precio: buscarId.precio
  })
})

router.get('/:id_venta/id_detalle', (req,res)=>{
  const id_venta = req.params.id_venta;
  const buscarVenta = detalleVenta.find(detalle => detalle.id_venta == id_venta)
  res.json({
    id_detalle: buscarVenta.id_detalle
  })
})

module.exports = router
