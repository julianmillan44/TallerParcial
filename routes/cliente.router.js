const express = require('express');
const router  = express.Router();

var clientes = [{}];

router.post('/', (req, res) => {

    const body = req.body;
    cliente.push({
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.sipnosis,
        telefono: req.body.telefono
    })
    res.json({
        message: 'Cliente agregado',
        data: body.id
    })
})

router.get('/', (req,res)=>{
    res.json(clientes)
})
router.patch('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const cliente = clientes.find(p => p.id === id);

    if (!cliente) {

    }

    const actualizacionCliente = ['nombre', 'apellido', 'telefono'];

    actualizacionCliente.forEach(campo => {
        if (req.body[campo] !== undefined) {
            cliente[campo] = req.body[campo];
        }
    });

    res.json({
        message: 'cliente actualizado',
        data: cliente
    });
});
router.delete('/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const clienteIndex = clientes.findIndex(c => c.id === id);

    if (clienteIndex === -1) {
        return res.status(404).json({ message: 'Película no encontrada' });
    } else {
        const clienteliminado = clientes.splice(clienteIndex, 1);

        res.json({
            message: 'cliente eliminado',
            data: clienteliminado
        });
    }
});

module.exports = router
