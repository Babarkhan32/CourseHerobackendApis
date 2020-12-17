const degree=require('../../../models/courses');


exports.getDegrees=async(req,res)=>{
    try{
    
    let newobj=await degree.find({}).sort({creation_date:-1});

      res.json({
          success:true,
          data:newobj
      })

    }catch(error){
        console.log(error);
        res.json({
            success:false,
            data:error
        })
    }
}