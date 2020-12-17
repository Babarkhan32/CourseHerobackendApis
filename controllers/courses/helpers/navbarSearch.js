const course=require('../../../models/courses');


exports.navbarSearch=async(req,res)=>{
    try{
        let coursQuery=req.body.searchString
    let newobj=await course.find( { "courseName" : { $regex : new RegExp(coursQuery, "i") } } );
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