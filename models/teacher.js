const { array } = require('joi');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var teacher = new Schema({
    DegreeDetails: Array,
    Expertise: Array,
    FullName: String,
    // Previousinstitute: "ims"
    address: String,
    availability: String,
    consultation: String,
    courseTaughtList: Array,
    currentPosition: String,
    dateofbirth: String,
    desiredCourse: String,
    email: String,
    empHistory: Array,
    experience: String,
    gender: String,
    // imageSet:Array,
    imageSet: String,
    introduction: Array,
    periodFrom: String,
    phone: String,
    spokenlanguages: String,
    whatsapp: String



})

module.exports = mongoose.model('teacher', teacher);