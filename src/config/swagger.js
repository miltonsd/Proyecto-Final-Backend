const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path'); // Necesitamos path para rutas absolutas

// Opciones de configuración de Swagger/OpenAPI
const options = {
  definition: {
    openapi: '3.0.0', // Versión de OpenAPI
    info: {
      title: 'Pedidos Ágiles API',
      version: '1.0.0',
      description: 'Backend API construida con Node.js, Express y Sequelize, que soporta las operaciones de un sistema gastronómico. Incluye endpoints para autenticación de usuarios, gestión de menús, procesamiento de pedidos, y administración de reservas.',
      contact: {
        name: 'Pedidos Ágiles Dev Team',
        // url: 'https://tu-sitio.com', // <--- CÁMBIALO
      },
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL base para desarrollo
        description: 'Servidor de Desarrollo Local',
      },
      // Puedes añadir más servidores, por ejemplo, si despliegas en producción
      // {
      //   url: 'https://api.tu-dominio.com',
      //   description: 'Servidor de Producción',
      // },
    ],
    components: {
    //   securitySchemes: {
        // bearerAuth: {
        //   type: 'http',
        //   scheme: 'bearer',
        //   bearerFormat: 'JWT',
        //   description: 'Introduce tu token JWT aquí (ej. Bearer eyJhbGci...). Requiere estar logueado para obtenerlo.',
        // },
    //   },
      schemas: {},
    },
    // Si la mayoría de tus endpoints requieren autenticación, puedes definirla globalmente
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  // Rutas a tus archivos de rutas y modelos donde documentarás los endpoints con JSDoc.
  // Es crucial que estas rutas sean correctas respecto a la ubicación de este archivo 'swagger.js'.
  // path.join(__dirname, '..', 'routes', '**/*.js') buscará en todas las subcarpetas de routes.
  apis: [
    path.join(__dirname, '../routes/**/*.js'), // Busca JSDoc en todos los archivos JS dentro de routes
    path.join(__dirname, '../database/models/*.js') // Busca JSDoc en tus modelos para esquemas
  ],
};

const specs = swaggerJsdoc(options);

// Exporta una función que reciba la instancia de Express 'app'
module.exports = (app) => {
  // Ruta para servir la UI de Swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
    explorer: true // Permite la barra de búsqueda y exploración
  }));

  // Opcional: Ruta para acceder a la especificación OpenAPI en formato JSON
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
  });
};