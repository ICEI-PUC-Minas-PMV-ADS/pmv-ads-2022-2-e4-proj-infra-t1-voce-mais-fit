const mongoose = require('mongoose');

const exerciseInDaySchema = new mongoose.Schema({
    name: {type: String, required: true, maxLength: 255},
    description: {type: String, required: false},
    done: {type: Boolean, required: true, default: false},
})

const ExerciseInDay = mongoose.model('exerciseInDay', exerciseInDaySchema);

module.exports.schema = exerciseInDaySchema;
module.exports.Model = ExerciseInDay;