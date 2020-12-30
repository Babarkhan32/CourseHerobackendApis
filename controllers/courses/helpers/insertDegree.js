const course = require('../../../models/courses');
const moment = require('moment');

exports.insertDegree = async (req, res) => {
  console.log('institute', req.files)
  let pathsArr = []
  pathsArr = req.files.map((file) => file.path)
  try {
    req.body.creation_date = moment().unix().toString();
    req.body.isDegree = true;
    req.body.facultyResume = pathsArr
    console.log('reqBody', req.body)
    await course.collection.insertOne(req.body)
    res.json({
      success: true,
      data: "Inserted"
    })
  } catch (error) {
    console.log(error)
  }
}