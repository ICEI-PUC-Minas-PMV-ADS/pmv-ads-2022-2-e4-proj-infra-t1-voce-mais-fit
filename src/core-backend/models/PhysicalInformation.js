const mongoose = require('mongoose');

const physicalInformationSchema = new mongoose.Schema({
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
    heigth: {type: Number, required: true},
    weight: {type: Number, required: true},
    imc: {type: Number},
    tbm: {type: Number},
    dailyKcal: {type: Number},
})

//TODO: criar um middleware de save e update que atualiza IMC, TMB e Kcal sempre

const PhysicalInformationModel = mongoose.model('PhysicalInformation', physicalInformationSchema);

module.exports.schema = physicalInformationSchema;
module.exports.Model = PhysicalInformationModel;