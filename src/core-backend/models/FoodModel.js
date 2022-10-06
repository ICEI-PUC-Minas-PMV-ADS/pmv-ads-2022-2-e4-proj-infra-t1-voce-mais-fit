const mongoose = require('mongoose');

const foodModelSchema = new mongoose.Schema({
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
})

const FoodModelModel = mongoose.model('FoodModel', foodModelSchema);

module.exports.schema = foodModelSchema;
module.exports.Model = FoodModelModel;