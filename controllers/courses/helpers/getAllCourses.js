const course=require('../../../models/courses');


exports.getAllCourses=async(req,res)=>{
    try{
    
    let newobj=await course.find({}).sort({creation_date:-1});

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