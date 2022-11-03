const mongoose = require('mongoose');

const gymgoerSchema = new mongoose.Schema({
    name: {type: String, required: true, maxLength: 255},
    whatsapp: {type: String, required: false},
    physicalInformation: {
        geneticSex: {
            type: String, 
            enum:['male','female']
        },
        weightGoal: {
            type: String, 
            required: false, 
            enum:['lose','gain','maintain']
        },
        age: {type: Number},
        height: {type: Number},
        weight: {type: Number},
        imc: {type: Number},
        tmb: {type: Number},
        dailyKcal: {type: Number},
    },
    foodSaved: [{
        name: {type: String, required: true, maxLength: 255},
        description: {type: String, required: false},
        carbPer100g: {type: Number, required: true},
        proteinPer100g: {type: Number, required: true},
        fatPer100g: {type: Number, required: true},
        kcalPer100g: {
            type: Number, 
            default: function(){
                return (this.carbPer100g * 4) + (this.proteinPer100g * 4) + (this.fatPer100g * 9)
            }
        },
    }],
    dailyRegisters: [{
        date: {type: Date, required: true},
        totalCarb: {type: Number, required: true},
        totalProtein: {type: Number, required: true},
        totalFat: {type: Number, required: true},
        totalKcal: {type: Number, required: true},
        foods: [{
            name: {type: String, required: true, maxLength: 255},
            description: {type: String, required: false},
            gramsAmount: {type: Number, required: true},
            carb: {type: Number, required: true},
            protein: {type: Number, required: true},
            fat: {type: Number, required: true},
            kcal: {type: Number, required: true},
        }],
        exercises: [{
            name: {type: String, required: true, maxLength: 255},
            description: {type: String, required: false},
            done: {type: Boolean, required: true, default: false}
        }]
    }],
    exerciseModels: [{
        name: {type: String, required: true, maxLength: 255},
        description: {type: String, required: false},
        exercises: [{
            name: {type: String, required: true, maxLength: 255},
            description: {type: String, required: false}
        }],
    }]
})

//TODO: metodo para codigo com vinculo de academia, vai ser uma propriedade cujo tipo é um outro schema com o numero e data de expiracao, e uma propriedade virtual bool se tá valido ou não

const GymgoerModel = mongoose.model('Gymgoer', gymgoerSchema);

module.exports.schema = gymgoerSchema;
module.exports.Model = GymgoerModel;