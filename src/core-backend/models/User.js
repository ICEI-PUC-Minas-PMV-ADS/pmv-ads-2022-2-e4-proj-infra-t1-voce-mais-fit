const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, lowercase: true, maxLength: 255},
    password: {type: String, required: true},
    userType: {
        type: String, 
        required: true, 
        enum:['gymgoer','trainer']
    },
    trainerInfo: {
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'Trainer', 
        required: function() { 
            return this.userType == 'trainer'
        }
    },
    gymgoerInfo: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Gymgoer',
        required: function() {
            return this.userType == 'gymgoer'
        }
    }
})


const UserModel = mongoose.model('User', userSchema);

module.exports.Model = UserModel;