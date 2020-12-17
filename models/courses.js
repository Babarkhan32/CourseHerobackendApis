var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var courses=new Schema({

    type:String,
    courseName:String,
    courseOverView: String,
    courseContent: String,
    courseCity:String,
    facultyName: String,
    facultyResume:Array,
    ProgramType:String,
    additionalSubject1:String,
    additionalSubject2:String,
    mainSubject:String,
    mainDisciplinarySubject: String,
    additionalSubject3:String,
    mode: String,
    courseInfo: String,
    subjectCategory: String,
    courseCountry: String,
    courseLanguage: String,
    courseName: String,
    courseOfferingInstitute: String,
    instituteWebAddress: String,
    mediumInstitute: String,
    mediumInstituteDetails:String,
    mediumInstituteWebAddress:String,
    duration: String,
    durationFor: String,
    cost : String,
    currency: String,
    costBreakDown: String,
    financialAid: String,
    financialDetails: String,
    startingDate: String,
    endingDate: String,
    creation_date: String,
    part: String,
    instituteDetails:String,
    programName:String,
    programSpecs: String,
    courseSpecification:String,
    hoursPerWeek:String ,
    totalCost:String,
    courseBreakDown: String,
    owner_id:{type:Schema.Types.ObjectId,ref:'User'}
})

module.exports = mongoose.model('courses', courses);