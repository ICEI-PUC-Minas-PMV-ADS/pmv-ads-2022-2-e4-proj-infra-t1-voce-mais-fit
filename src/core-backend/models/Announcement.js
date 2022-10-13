const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    description: {type: String, required: true},
    date: {type: Date, default: () => Date.now()}
})

const AnnouncementModel = mongoose.model('Announcement', announcementSchema);

module.exports.schema = announcementSchema;
module.exports.Model = AnnouncementModel;