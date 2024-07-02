const express = require('express');
const router = express.Router();

var ventas = [{}]

router.post('/', (req, res) => {

    const body = req.body;
    ventas.push({
        id: req.body.id,
        id_cliente: req.body.id_cliente,
        id_empleado: req.body.id_empleado,
        fecha_venta: req.body.fecha_venta,
        funcion_vendida: req.body.funcion_vendida

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

  router.get('/:id/funcion_vendida', (req,res)=> {
    const id = req.params.id;
    const buscarId = ventas.find(venta => venta.id == id)
    res.json({
      funcion_vendida: buscarId.funcion_vendida
    })
  })

  router.get('/:funcion_vendida/id_empleado', (req,res)=>{
    const funcion_vendida = req.params.funcion_vendida;
    const buscarEmpleado = ventas.find(venta => venta.funcion_vendida == funcion_vendida)
    res.json({
      id_empleado: buscarEmpleado.id_empleado
    })
  })

  router.get('/:id/fecha_venta/id_cliente', (req,res)=>{
    const id = req.params.id;
    const buscarId = ventas.find(ventas => ventas.id == id)
    res.json({
      fecha_venta: buscarId.fecha_venta,
      id_cliente: buscarId.id_cliente
    })
  })


  module.exports = router