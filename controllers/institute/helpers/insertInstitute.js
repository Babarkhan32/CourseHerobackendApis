const institute=require('../../../models/institute');
const jwt_decode=require("jwt-decode");
const moment=require('moment');
exports.insertInstitute=async(req,res)=>{
   try{
    
    
  
     let date=moment().unix().toString();
    req.body.creation_date=date;
    
   
    await institute.collection.insertOne(req.body)
res.json({
     success:true,
     data:"Inserted"
  })
}catch(error){
 console.log(error)
  }
}