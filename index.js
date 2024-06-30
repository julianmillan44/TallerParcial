const express = require('express');
const rutas = require('./routes')
const tallerParcial = express();
const port = 3000;
tallerParcial.use(express.json());

rutas(tallerParcial);

tallerParcial.listen(port, () => {
    console.log(`El servidor funciona correctamente en http://localhost:${port}`);
})