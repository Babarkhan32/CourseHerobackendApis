const teacher = require('../../../models/teacher');
const jwt_decode = require("jwt-decode");
const moment = require('moment');
exports.insertTeacher = async (req, res) => {
  const { path } = req.file
  try {
    console.log("HEYAA", path);
    req.body.imageSet = path;
    await teacher.collection.insertOne(req.body)
    res.json({
      success: true,
      data: "Inserted"
    })
  } catch (error) {
    console.log(error)
  }
}