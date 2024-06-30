const express = require('express');
const router = express.Router();

var filas = [{}]

router.post('/',(req,res)=>{
    const body = req.body;
    filas.push({
        id: req.body.id,
        cantidad_sillas: req.body.cantidad_sillas,
        numero_fila: req.body.numero_fila
    })
    res.json({
        message: 'Fila Creada',
        data: body.id
    })
})

router.get('/', (req,res)=>{
    res.json(filas)
})

router.patch('/:id', (req, res) => {
    
    const id = parseInt(req.params.id);
    const fila = filas.find(s => s.id === id);
    
    if (!fila) {
      
    }
    
    const camposActualizables = ['id', 'cantidad_sillas', 'numero_fila'];
    
    camposActualizables.forEach(campo => {
      if (req.body[campo] !== undefined) {
        fila[campo] = req.body[campo];
      }
    });
    
    res.json({
      message: 'Fila actualizada',
      data: fila
    });
});

router.delete('/:id', (req, res) => {
    
    const id = parseInt(req.params.id);
    const filaIndex = filas.findIndex(f => f.id === id);
    
    if (filaIndex === -1) {
      return res.status(404).json({ message: 'Sala no encontrada'});
    }else{
      const filaEliminada = filas.splice(filaIndex, 1);
    
    res.json({
      message: 'Fila eliminada',
      data: filaIndex
    });
 } 
    

});


module.exports = router