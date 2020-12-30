var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var student = new Schema({
    Address: String,
    DateOfBirth: String,
    FullName: String,
    affordableCost: String,
    degrees: Array,
    desiredMode: String,
    desireddisciplineName: String,
    emailAddress: String,
    gender: String,
    // imageSet:Array,
    imageSet: String,
    introduction: String,
    passingYear: String,
    phoneNumber: String,
    prefferedCity: String,
    prefferedCountry: String,
    prefferedLanguages: String,
    programType: String,
    spokenLanguages: Array,
    studyProposal: String,
    whatsapp: String

})

module.exports = mongoose.model('student', student);