var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var courses=new Schema({
    type: String,
    name: String,
    courseOverView: String,
    courseContent: String,
    teacher: String,
    ProgramType:String,
    additionalSubject1:String,
    additionalSubject2:String,
    additionalSubject3:String,
    mode: String,
    courseInfo: String,
    subjectCategory: String,
    courseCountry: String,
    courseLanguage: String,
    institute: String,
    instituteWebAddress: String,
    mediumInstitute: String,
    duration: String,
    durationFor: String,
    cost : String,
    currency: String,
    costBreakDown: String,
    financialAid: Boolean,
    financialDetails: String,
    starting_date: String,
    ending_date: String,
    creation_date: String,
    part: String,
    programName:String,
    programSpecs: String,

    owner_id:{type:Schema.Types.ObjectId,ref:'User'}
})

module.exports = mongoose.model('courses', courses);