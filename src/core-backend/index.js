const userRoute = require('./routes/userRoute');
const gymgoerRoute = require('./routes/gymgoerRoute');
const trainerRoute = require('./routes/trainerRoute');
const gymRoute = require('./routes/gymRoute');
const announcementRoute = require('./routes/announcementRoute');
const physicalInformationRoute = require('./routes/physicalInformationRoute');
const foodSavedRoute = require('./routes/foodSavedRoute');
const exerciseModelRoute = require('./routes/exerciseModelRoute');
const dailyRegisterRoute = require('./routes/dailyRegisterRoute');

//TODO: Colocar num arquivo separado e salvar a senha em variável de ambiente
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:I6ZM5Nb1eM9cXjVx@cluster0.dna8nhy.mongodb.net/100ingredientes')
        .then(() => console.log('Connected successfully to MongoDB Atlas'))
        .catch((err) => console.log('Failed to connect to MongoDB Atlas', err));

const express = require('express');
const app = express();

app.use(express.json());

//TODO: Colocar num arquivo separado
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

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

//#region routes
app.use('/api/user', userRoute);
app.use('/api/gymgoer', gymgoerRoute);
app.use('/api/trainer', trainerRoute);
app.use('/api/gym', gymRoute);
app.use('/api/announcement', announcementRoute); //TODO: ajustar rota de announcement
app.use('/api/', physicalInformationRoute);
app.use('/api/foodSaved', foodSavedRoute); //TODO: Ajustar rota de food saved
app.use('/api/', exerciseModelRoute);
app.use('/api/', dailyRegisterRoute);
//#endregion

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log('App listening on port ' + port + ' using Express.js');});