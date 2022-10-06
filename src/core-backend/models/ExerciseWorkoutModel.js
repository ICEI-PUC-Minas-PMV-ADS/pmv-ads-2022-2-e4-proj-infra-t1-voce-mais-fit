const mongoose = require('mongoose');
const exerciseInWorkout = require('./ExerciseInWorkout');

const exerciseWorkoutModelSchema = new mongoose.Schema({
    name: {type: String, required: true, maxLength: 255},
    description: {type: String, required: false},
    exercises: [exerciseInWorkout.schema],
})

const ExerciseWorkoutModel = mongoose.model('ExerciseWorkoutModel', exerciseWorkoutModelSchema);

module.exports.schema = exerciseWorkoutModelSchema;
module.exports.Model = ExerciseWorkoutModel;