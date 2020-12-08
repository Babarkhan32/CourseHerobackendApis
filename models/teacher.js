const { array } = require('joi');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var teacher=new Schema({
    gender: String,
    name: String,
    dateofbirth: String,
    email: String,
    phone: String,
    whatsapp: String,
    files: Array,
    address: String,
    spokenlanguages: Array,
    introduction: String,
    degrees: Array,
    degreeType:String,
    degreeFrom: String,
    degreePassingYear:String,
    experience: String,
    areaofexpertise:String,
    cost:String,
    country:String,
    courseTaught:Array,
    city:String,
    prefferedLanguage:String,
    employmenthistory:String,
    currentpoistion:String,
    


    })

module.exports = mongoose.model('teacher', teacher);