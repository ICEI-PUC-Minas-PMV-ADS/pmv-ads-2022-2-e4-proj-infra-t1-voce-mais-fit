const express = require('express');
const app = express();

app.use(express.json());

//#region routes
const userRoute = require('../routes/userRoute');
const gymgoerRoute = require('../routes/gymgoerRoute');
const trainerRoute = require('../routes/trainerRoute');
const gymRoute = require('../routes/gymRoute');
const announcementRoute = require('../routes/announcementRoute');
const physicalInformationRoute = require('../routes/physicalInformationRoute');
const foodSavedRoute = require('../routes/foodSavedRoute');
const exerciseModelRoute = require('../routes/exerciseModelRoute');
const dailyRegisterRoute = require('../routes/dailyRegisterRoute');

app.use('/api/user', userRoute);
app.use('/api/gymgoer', gymgoerRoute);
app.use('/api/trainer', trainerRoute);
app.use('/api/gym', gymRoute);
app.use('/api/', announcementRoute);
app.use('/api/', physicalInformationRoute);
app.use('/api/', foodSavedRoute);
app.use('/api/', exerciseModelRoute);
app.use('/api/', dailyRegisterRoute);
//#endregion

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

function init(){
    const port = process.env.PORT || 3000;
    app.listen(port, () => {console.log('App listening on port ' + port + ' using Express.js');});
}

module.exports.app = app;
module.exports.init = init;