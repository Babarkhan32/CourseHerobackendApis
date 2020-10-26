const course=require('../../../schema/courses');


exports.getAllCourses=async(req,res)=>{
    try{
    
    let newobj=await course.find({});

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