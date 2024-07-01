const express = require('express');
const router = express.Router();

var ventas = [{}]

router.post('/', (req, res) => {

    const body = req.body;
    boleta.push({
        id: req.body.id,
        id_cliente: req.body.id_cliente,
        id_empleado: req.body.id_empleado
    })
    res.json({
        message: 'Boleta agregada',
        data: body.id


    })
})

router.get('/', (req,res)=>{
    res.json(ventas);
})


router.patch('/:id', (req, res) => {
    
      const id = parseInt(req.params.id);
      const venta = ventas.find(v => v.id === id);
      
      if (!venta) {
        
      }
      
      const camposActualizables = ['id', 'id_cliente', 'id_empleado'];
      
      camposActualizables.forEach(campo => {
        if (req.body[campo] !== undefined) {
          venta[campo] = req.body[campo];
        }
      });
      
      res.json({
        message: 'Película actualizada',
        data: venta
      });
  });

    router.delete('/:id', (req, res) => {
    
      const id = parseInt(req.params.id);
      const ventaIndex = ventas.findIndex(p => p.id === id);
      
      if (ventaIndex === -1) {
        return res.status(404).json({ message: 'Venta no encontrada'});
      }else{
        const ventaEliminada = ventas.splice(ventaIndex, 1);
      
      res.json({
        message: 'Película eliminada',
        data: ventaEliminada
      });
   } 
  });

  module.exports = router