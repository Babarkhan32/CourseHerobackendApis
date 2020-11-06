const course=require('../../../models/courses');


exports.getCourses=async(req,res)=>{
    try{
        let id=req.params.id
    let newobj=await course.find({_id:id})

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