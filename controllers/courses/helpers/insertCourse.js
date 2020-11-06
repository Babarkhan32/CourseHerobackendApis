const course=require('../../../models/courses');
const jwt_decode=require("jwt-decode");


exports.insertCourses=(req,res)=>{
   try{
    const value =jwt_decode(req.headers.authorization);
    console.log(value);
    req.body.owner_id=value._id
  course.collection.insertOne(req.body)
res.json({
     success:true,
     data:"Inserted"
  })
}catch(error){

   console.log(error)
  
  }
}