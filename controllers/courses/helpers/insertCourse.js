const course=require('../../../models/courses');
const jwt_decode=require("jwt-decode");
const moment=require('moment');
exports.insertCourses=async(req,res)=>{
   try{
    const value =jwt_decode(req.headers.authorization);
    let date=moment().unix().toString();
    req.body.creation_date=date;
    req.body.owner_id=value._id
    req.body.isDegree=false;
    
    await course.collection.insertOne(req.body)
res.json({
     success:true,
     data:"Inserted"
  })
}catch(error){
 console.log(error)
  }
}