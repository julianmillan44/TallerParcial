const express = require('express');
const router = express.Router();

var sala = [{}];

router.post('/', (req,res)=>{
    const body = req.body;
    sala.push({
        id: req.body.id,
        id_pelicula: req.body.id_pelicula,
        numero_sala: req.body.numero_sala,
        total_personas: req.body.total_personas
    })
    res.json({
        message: 'Sala Creada',
        data: body.id
    })
})

router.get('/', (req,res)=>{
    res.json(sala)
})

router.patch('/:id', (req, res) => {
    
    const id = parseInt(req.params.id);
    const salas = sala.find(s => s.id === id);
    
    if (!salas) {
      
    }
    
    const camposActualizables = ['id', 'id_pelicula', 'numero_sala', 'total_personas'];
    
    camposActualizables.forEach(campo => {
      if (req.body[campo] !== undefined) {
        salas[campo] = req.body[campo];
      }
    });
    
    res.json({
      message: 'Sala actualizada',
      data: salas
    });
});


router.delete('/:id', (req, res) => {
    
    const id = parseInt(req.params.id);
    const salaIndex = sala.findIndex(s => s.id === id);
    
    if (salaIndex === -1) {
      return res.status(404).json({ message: 'Sala no encontrada'});
    }else{
      const salaEliminada = sala.splice(salaIndex, 1);
    
    res.json({
      message: 'Sala eliminada',
      data: salaIndex
    });
 } 
    

});

module.exports = router