const teacher=require('../../../models/teacher');
const jwt_decode=require("jwt-decode");
const moment=require('moment');
exports.insertTeacher=async(req,res)=>{
   try{
    await teacher.collection.insertOne(req.body)
res.json({
     success:true,
     data:"Inserted"
  })
}catch(error){
 console.log(error)
  }
}