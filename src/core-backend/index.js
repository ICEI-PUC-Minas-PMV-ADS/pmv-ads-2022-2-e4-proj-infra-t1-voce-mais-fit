const physicalInformation = require('./routes/physicalInformation');

const express = require('express');
const app = express();

//#region routes
app.use('/api/physicalInformation', physicalInformation);

//#endregion

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log('Listening on port ' + port);});

