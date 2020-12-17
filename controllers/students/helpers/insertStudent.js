const student=require('../../../models/student');
exports.insertStudent=async(req,res)=>{
   try{
    
    await student.collection.insertOne(req.body)
res.json({
     success:true,
     data:"Inserted"
  })
}catch(error){
 console.log(error)
  }
}