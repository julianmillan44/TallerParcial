const express = require('express');
const router = express.Router();

var puestos = [{}]

router.post('/', (req,res)=>{
    const body = req.body;
    puestos.push({
        id: req.body.id,
        id_fila: req.body.id_fila,
        tipo_puesto: req.body.tipo_puesto
    })
    res.json({
        message: 'Puesto Agregado',
        data: body.id
    })
})

router.get('/', (req,res)=>{
    res.json(puestos)
})

router.patch('/:id', (req, res) => {
    
    const id = parseInt(req.params.id);
    const puesto = puestos.find(s => s.id === id);
    
    if (!puesto) {
      
    }
    
    const camposActualizables = ['id', 'id_fila', 'tipo_puesto'];
    
    camposActualizables.forEach(campo => {
      if (req.body[campo] !== undefined) {
        puesto[campo] = req.body[campo];
      }
    });
    
    res.json({
      message: 'Puesto actualizado',
      data: puesto
    });
});

router.delete('/:id', (req, res) => {
    
    const id = parseInt(req.params.id);
    const puestoIndex = puestos.findIndex(s => s.id === id);
    
    if (salaIndex === -1) {
      return res.status(404).json({ message: 'Sala no encontrada'});
    }else{
      const puestoEliminada = puesto.splice(puestoIndex, 1);
    
    res.json({
      message: 'Puesto eliminada',
      data: puestoIndex
    });
 } 
    

});

module.exports = router