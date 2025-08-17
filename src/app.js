const app = require('./server');
const http = require('http').createServer(app);
const { sequelize } = require('./database/models/index');

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
    console.log(`Running on a port: ${PORT}`);
    sequelize.sync({ force: false })
        .then(() => { 
            console.log('Conexion a DB exitosa');
            console.log(`Documentación de la API disponible en http://localhost:${PORT}/api-docs`);
         })
        .catch(error => { console.error('Se ha producido un error', error) })
});