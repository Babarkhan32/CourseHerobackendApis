var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var student=new Schema({
    gender: String,
    name: String,
    dateofbirth: String,
    email: String,
    phone: String,
    whatsapp: String,
    imageSet: Array,
    address: String,
    spokenlanguages: Array,
    introduction: String,
    degrees: Array,
    degreeType:String,
    degreeFrom: String,
    degreePassingYear:String,
    interestedDegree: String,
    availability:String,
    cost:String,
    country:String,
    city:String,
    prefferedLanguage:String




    })

module.exports = mongoose.model('student', student);