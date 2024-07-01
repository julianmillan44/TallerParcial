const express = require('express');
const router  = express.Router();

var empleados = [{}];

router.post('/', (req, res) => {

    const body = req.body;
    empleados.push({
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        metodo_pago: req.body.metodo_pago,
    })
    res.json({
        message: 'Empleado agregado',
        data: body.id
    })
})

router.get('/', (req, res) => {
    res.json(empleados)
})

router.patch('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const empleado = empleados.find(e => e.id === id);

    if (!empleado) {

    }

    const actualizaciontaquillero = ['id', 'nombre', 'apellido', 'metodo_pago'];

    actualizaciontaquillero.forEach(campo => {
        if (req.body[campo] !== undefined) {
            empleado[campo] = req.body[campo];
        }
    });

    res.json({
        message: 'taquillero actualizado',
        data: empleado
    });
});
router.delete('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const empleadoIndex = empleados.findIndex(e => e.id === id);

    if (empleadoIndex === -1) {
        return res.status(404).json({ message: 'taquillero no encontrada' });
    } else {
        const empleadoEliminado = empleados.splice(empleadoIndex, 1);

        res.json({
            message: 'taquillero eliminado',
            data: empleadoEliminado
        });
    }
});

module.exports = router
