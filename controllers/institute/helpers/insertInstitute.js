const institute = require('../../../models/institute');
const jwt_decode = require("jwt-decode");
const moment = require('moment');
exports.insertInstitute = async (req, res) => {
  console.log('institute', req.files)
  let pathsArr = []
  pathsArr = req.files.map((file) => file.path)
  try {

    console.log('path', pathsArr)
    let date = moment().unix().toString();
    req.body.creation_date = date;
    req.body.imageSet = pathsArr

    console.log('reqBody', req.body)
    await institute.collection.insertOne(req.body)
    res.json({
      success: true,
      data: "Inserted"
    })
  } catch (error) {
    console.log(error)
  }
}