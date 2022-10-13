const userRoute = require('./routes/userRoute');
const gymgoerRoute = require('./routes/gymgoerRoute');
const trainerRoute = require('./routes/trainerRoute');
const gymRoute = require('./routes/gymRoute');
const announcementRoute = require('./routes/announcementRoute');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:I6ZM5Nb1eM9cXjVx@cluster0.dna8nhy.mongodb.net/100ingredientes')
        .then(() => console.log('Connected successfully to MongoDB Atlas'))
        .catch((err) => console.log('Failed to connect to MongoDB Atlas', err));

const express = require('express');
const app = express();

app.use(express.json());

//#region routes
app.use('/api/user', userRoute);
app.use('/api/gymgoer', gymgoerRoute);
app.use('/api/trainer', trainerRoute);
app.use('/api/gym', gymRoute);
app.use('/api/announcement', announcementRoute);

//#endregion

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log('App listening on port ' + port + ' using Express.js');});

