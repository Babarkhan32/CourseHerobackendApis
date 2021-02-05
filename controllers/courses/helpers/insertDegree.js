const courses = require('../../../models/courses');
const moment = require('moment');

exports.insertDegree = async (req, res) => {
  console.log('institute', req.files)
  let pathsArr = []
  pathsArr = req.files.map((file) => file.path)
  try {
    req.body.creation_date = moment().unix().toString();
    req.body.isDegree = true;
    req.body.facultyResume = pathsArr

    let course=req.body.course.split(',');
    req.body.course=course;

    let online=req.body.online.split(',');
    req.body.online=online;

    let offline=req.body.offline.split(',');
    req.body.offline=offline;

    let facultyInfo=req.body.facultyInfo.split(',');
    req.body.facultyInfo=facultyInfo;

    let compulsory=req.body.compulsory.split(',');
    req.body.compulsory=compulsory;


    let optional=req.body.optional.split(",");
    req.body.optional=optional;


    let facultyInformation=[];
    for(let i=0;i<req.body.facultyInfo.length;i++){
      let obj={};
        obj.facultyName=req.body.facultyInfo[i],
        obj.facultyResume=req.body.facultyResume[i]

        facultyInformation.push(obj);
    }
req.body.facultyInformation=facultyInformation;
   
    await courses.collection.insertOne(req.body)
    res.json({
      success: true,
      data: "Inserted"
    })
  } catch (error) {
    console.log(error)
  }
}