const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
    name: {type: String, required: true, maxLength: 255},
    whatsapp: {type: String, required: false},
    workHoursDescription: {type: String, required: false}
})

const TrainerModel = mongoose.model('Trainer', trainerSchema);

module.exports.Model = TrainerModel;