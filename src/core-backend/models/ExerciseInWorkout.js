const mongoose = require('mongoose');

const exerciseInWorkoutSchema = new mongoose.Schema({
    name: {type: String, required: true, maxLength: 255},
    description: {type: String, required: false},
})

const ExerciseInWorkout = mongoose.model('ExerciseInWorkout', exerciseInWorkoutSchema);

module.exports.schema = exerciseInWorkoutSchema;
module.exports.Model = ExerciseInWorkout;