const expressConfig = require('./expressConfig');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
 swaggerDefinition: {
  info: {
   title: "Você Mais Fit",
   version: "1.0.0"
  }
 },
 apis: ['./routes/*.js']
};

const app = expressConfig.app;
const swaggerDocs = swaggerJsDoc(swaggerOptions);

function enableSwaggerDocs(){
    app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
}

module.exports.enableSwaggerDocs = enableSwaggerDocs;