const mongoose = require('mongoose');
const exerciseInDay = require('./ExerciseInDay');
const foodEaten = require('./FoodEaten');

const dailyRegisterSchema = new mongoose.Schema({
    day: {type: Date, required: true},
    totalCarb: {type: Number, required: true},
    totalProtein: {type: Number, required: true},
    totalFat: {type: Number, required: true},
    totalKcal: {type: Number, required: true},
    foods: [foodEaten.schema],
    exercises: [exerciseInDay.schema]
})

const DailyRegister = mongoose.model('DailyRegister', dailyRegisterSchema);

module.exports.schema = dailyRegisterSchema;
module.exports.Model = DailyRegister;