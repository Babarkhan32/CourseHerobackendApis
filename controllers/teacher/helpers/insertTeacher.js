const teacher=require('../../../models/teacher');
const jwt_decode=require("jwt-decode");
const moment=require('moment');
exports.insertTeacher=async(req,res)=>{
   try{
     console.log("HEYAA",req.file);
    await teacher.collection.insertOne(req.body)
res.json({
     success:true,
     data:"Inserted"
  })
}catch(error){
 console.log(error)
  }
}