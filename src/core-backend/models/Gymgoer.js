const mongoose = require('mongoose');
const foodModel = require('./FoodModel');
const dailyRegister = require('./DailyRegister');
const exerciseModel = require('./ExerciseWorkoutModel');

const gymgoerSchema = new mongoose.Schema({
    name: {type: String, required: true, maxLength: 255},
    whatsapp: {type: String, required: false},
    physicalInformation: {
        geneticSex: {
            type: String, 
            required: true, 
            enum:['male','female']
        },
        weightGoal: {
            type: String, 
            required: true, 
            enum:['lose','gain','maintain']
        },
        age: {type: Number, required: true},
        height: {type: Number, required: true},
        weight: {type: Number, required: true},
        imc: {type: Number},
        tmb: {type: Number},
        dailyKcal: {type: Number},
    },
    foodModels: [foodModel.schema],
    dailyRegisters: [dailyRegister.schema],
    exerciseModels: [exerciseModel.schema]
})

//TODO: metodo para codigo com vinculo de academia, vai ser uma propriedade cujo tipo é um outro schema com o numero e data de expiracao, e uma propriedade virtual bool se tá valido ou não

const GymgoerModel = mongoose.model('Gymgoer', gymgoerSchema);

module.exports.schema = gymgoerSchema;
module.exports.Model = GymgoerModel;