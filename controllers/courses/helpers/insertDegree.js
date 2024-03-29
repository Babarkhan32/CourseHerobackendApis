const courses = require("../../../models/courses");
const moment = require("moment");
const jwt_decode = require("jwt-decode");

exports.insertDegree = async (req, res) => {
  let pathsArr = [];
  pathsArr = req.files.map((file) => file.path);
  try {
    req.body.creation_date = moment().unix().toString();
    req.body.isDegree = true;

    req.body.facultyResume = pathsArr;

    let course = JSON.parse(req.body.course);

    req.body.course = course;

    let facultyInfo = req.body.facultyInfo.split(",");
    req.body.facultyInfo = facultyInfo;

    let compulsory = req.body.compulsory.split(",");
    req.body.compulsory = compulsory;

    let optional = req.body.optional.split(",");
    req.body.optional = optional;

    let facultyInformation = [];
    for (let i = 0; i < req.body.facultyInfo.length; i++) {
      let obj = {};
      (obj.facultyName = req.body.facultyInfo[i]),
        (obj.facultyResume = req.body.facultyResume[i]);

      facultyInformation.push(obj);
    }
    req.body.facultyInformation = facultyInformation;
    const value = jwt_decode(req.headers.authorization);

    req.body.owner_id = value._id;

    console.log("Last Object", req.body);
    await courses.collection.insertOne(req.body);
    res.json({
      success: true,
      data: "Inserted",
    });
  } catch (error) {
    console.log(error);
  }
};
