const mongoose = require('mongoose');

function connect(){
    mongoose.connect('mongodb+srv://admin:I6ZM5Nb1eM9cXjVx@cluster0.dna8nhy.mongodb.net/100ingredientes')
        .then(() => console.log('Connected successfully to MongoDB Atlas'))
        .catch((err) => console.log('Failed to connect to MongoDB Atlas', err));
}

module.exports.connect = connect;