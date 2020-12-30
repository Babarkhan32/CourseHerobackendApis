var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var institute = new Schema({
    instituteType: String,
    instituteName: String,
    institutionMode: String,
    department: Array,
    imageSet: Array,
    instituteAddress: String,
    campuses: Array,
    program: Array,
    instituteFacilitation: String,
    instituteWebAddress: String,
    instituteEmail: String,
    institutePhoneNumber: String,
    instituteWhatsAppNumber: String,
    faculty: Array,
    instituteMarkOfDistinction: String,
},
    { timestamps: true }
)

module.exports = mongoose.model('institute', institute);