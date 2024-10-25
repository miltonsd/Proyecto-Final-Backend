require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const { json } = require('body-parser');
const app = express();

// Requerir router
const router = require('./routes/index.routes');

// Settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extend: false }));
app.use(json());

// Rutas
// Servir archivos estáticos desde el directorio de imágenes
app.use('/img', express.static('src/img'));

app.use('/', router);

app.use((req, res, next) => {
    res.status(404).json({
        status: '404',
        descripcion: 'Página no encontrada.'
    })
})

module.exports = app;