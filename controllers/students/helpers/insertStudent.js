const student=require('../../../models/student');
exports.insertStudent=async(req,res)=>{
   try{
    const value =jwt_decode(req.headers.authorization);
    await student.collection.insertOne(req.body)
res.json({
     success:true,
     data:"Inserted"
  })
}catch(error){
 console.log(error)
  }
}