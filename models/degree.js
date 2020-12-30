
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var degree = new Schema({
    AdditionalSubject1: String,
    AdditionalSubject2: String,
    AdditionalSubject3: String,
    AppDeadline: String,
    MainDisciplinary: String,
    breakDown: String,
    city: String,
    compulsory: Array,
    country: String,
    course: Array,
    currency: String,
    degreeContent: String,
    degreeName: String,
    degreeOfferingInstitute: String,
    degreeOverview: String,
    degreeType: String,
    durationCrit: String,
    durationfrom: String,
    facName: String,
    financialAid: String,
    financialAidDetails: String,
    hoursPerWeek: String,
    inssdetails: String,
    instDetails: String,
    offline: Array,
    offlinetotal: String,
    online: Array,
    optional: Array,
    startingdate: String,
    teachingmedium: String,
    teachingmediumweb: String,
    totalCost: String,
    totalCourses: String,
    totalNumberCourses: String,
    type: String,
    webaddress: String,
})

module.exports = mongoose.model('degree', degree);







