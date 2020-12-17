const course=require('../../../models/courses');
const moment=require('moment');

exports.insertDegree=async(req,res)=>{
   try{
       req.body.creation_date=moment().unix().toString();
       req.body.isDegree=true;
      await course.collection.insertOne(req.body)
res.json({
     success:true,
     data:"Inserted"
  })
}catch(error){
 console.log(error)
  }
}