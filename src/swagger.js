const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration
const options = {
  definition: {
    openapi: '3.0.0', // version of OpenAPI spec
    info: {
      title: 'My Node.js API Documentation',
      version: '1.0.0',
      description: 'This is a sample Express API documented with Swagger',
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./routes/*.js', 'app.js'], // Files containing annotations
};

// Initialize swagger-jsdoc → returns validated swagger spec in JSON
const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };