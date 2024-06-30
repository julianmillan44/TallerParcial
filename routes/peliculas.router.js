const express = require('express');
const router = express.Router();

var peliculas = [{}];



router.post('/',(req,res)=>{
    const body = req.body; 
    peliculas.push({id: req.body.id, 
        nombre: req.body.nombre,
        sipnosis: req.body.sipnosis,
        clasificacion: req.body.clasificacion,
        genero: req.body.genero,
        idioma: req.body.idioma
    })
    res.json({
        message: 'Pelicula agregada',
        data: body.id
    })
})

router.get('/', (req,res)=>{
    res.json(peliculas);
})

router.patch('/:id', (req, res) => {
    
      const id = parseInt(req.params.id);
      const pelicula = peliculas.find(p => p.id === id);
      
      if (!pelicula) {
        
      }
      
      const camposActualizables = ['nombre', 'sinopsis', 'clasificacion', 'genero', 'idioma'];
      
      camposActualizables.forEach(campo => {
        if (req.body[campo] !== undefined) {
          pelicula[campo] = req.body[campo];
        }
      });
      
      res.json({
        message: 'Película actualizada',
        data: pelicula
      });
  });

    router.delete('/:id', (req, res) => {
    
      const id = parseInt(req.params.id);
      const peliculaIndex = peliculas.findIndex(p => p.id === id);
      
      if (peliculaIndex === -1) {
        return res.status(404).json({ message: 'Película no encontrada'});
      }else{
        const peliculaEliminada = peliculas.splice(peliculaIndex, 1);
      
      res.json({
        message: 'Película eliminada',
        data: peliculaEliminada
      });
   } 
      

  });


  module.exports = router
  


