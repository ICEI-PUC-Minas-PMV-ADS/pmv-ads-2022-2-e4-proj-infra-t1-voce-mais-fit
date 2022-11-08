const moongoseConfig = require('./configuration/mongooseConfig');
moongoseConfig.connect();

const expressConfig = require('./configuration/expressConfig');
expressConfig.init();

const swaggerConfig = require('./configuration/swaggerConfig');
swaggerConfig.enableSwaggerDocs();