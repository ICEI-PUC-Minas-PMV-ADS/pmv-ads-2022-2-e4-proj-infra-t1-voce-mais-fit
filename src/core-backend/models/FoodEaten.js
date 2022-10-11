const mongoose = require('mongoose');

const foodEatenSchema = new mongoose.Schema({
    name: {type: String, required: true, maxLength: 255},
    description: {type: String, required: false},
    gramsAmount: {type: Number, required: true},
    carb: {type: Number, required: true},
    protein: {type: Number, required: true},
    fat: {type: Number, required: true},
    kcal: {
        type: Number, 
        default: function(){
            return (this.carb * 4) + (this.protein * 4) + (this.fat * 9)
        }
    },
})

const FoodEatenModel = mongoose.model('FoodEaten', foodEatenSchema);

module.exports.schema = foodEatenSchema;
module.exports.Model = FoodEatenModel;