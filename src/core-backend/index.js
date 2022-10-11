const userRoute = require('./routes/userRoute');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:I6ZM5Nb1eM9cXjVx@cluster0.dna8nhy.mongodb.net/100ingredientes')
        .then(() => console.log('Connected successfully to MongoDB Atlas'))
        .catch((err) => console.log('Failed to connect to MongoDB Atlas', err));

const express = require('express');
const app = express();

app.use(express.json());

//#region routes
app.use('/api/userRoute', userRoute);

//#endregion

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log('App listening on port ' + port + ' using Express.js');});

