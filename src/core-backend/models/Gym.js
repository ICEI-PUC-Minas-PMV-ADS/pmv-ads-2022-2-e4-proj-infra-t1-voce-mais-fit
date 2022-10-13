const mongoose = require('mongoose');

const gymSchema = new mongoose.Schema({
    name: {type: String, required: true, maxLength: 255},
    description: {type: String, required: false},
    address: {type: String, required: false, maxLength: 255},
    announcements: [{
        description: {type: String, required: true},
        date: {type: Date, default: () => Date.now()}
    }],
    trainers: [{
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'Trainer'
    }]
})

const GymModel = mongoose.model('gym', gymSchema);

module.exports.schema = gymSchema;
module.exports.Model = GymModel;