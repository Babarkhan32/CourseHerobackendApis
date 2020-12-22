const course=require('../../../models/courses');
const jwt_decode=require("jwt-decode");

exports.searchCourse=async (req,res)=>{
   try{

    let finalArray=[];
    let newArray=[];
    let uniqueArray=[]

               if(req.body.online){
                        let array=await course.find({mode:req.body.online});

                        if(array.length>0){
                        finalArray.push(array)
                        };
              }
              if(req.body.offline){
                let array=await course.find({mode:req.body.offline});
                if(array.length>0){
                    finalArray.push(array)
                    };
                }
                if(req.body.certificate){
                    let array=await course.find({courseSpecification:req.body.certificate});
                    if(array.length>0){
                        finalArray.push(array)
                        };
                 }
                 if(req.body.nonCertificate){
                    let array=await course.find({courseSpecification:req.body.nonCertificate});
                    if(array.length>0){
                        finalArray.push(array)
                        };
                }
                if(req.body.certificateCredit){
                    let array=await course.find({courseSpecification:req.body.certificateCredit});
                    if(array.length>0){
                        finalArray.push(array)
                        };
                }
                if(req.body.associate){
                    let array=await course.find({type:req.body.associate});
                    if(array.length>0){
                        finalArray.push(array)
                        };
                }
                if(req.body.bachelor){
                    let array=await course.find({type:req.body.bachelor});
                    if(array.length>0){
                        finalArray.push(array)
                        };
                }
                if(req.body.master){
                    let array=await course.find({courseSpecification:"Master's"});
                    if(array.length>0){
                        finalArray.push(array)
                        };
                }
                if(req.body.phd){
                    let array=await course.find({mode:req.body.phd});
                    if(array.length>0){
                        finalArray.push(array)
                        };
                }
                if(req.body.postDoc){
                    let array=await course.find({courseSpecification:'Post Doc'});
                    if(array.length>0){
                        finalArray.push(array)
                        };
                }
                    if(req.body.language){
                        let array=await course.find({language:req.body.language});

                        if(array.length>0){
                            finalArray.push(array)
                            };
                    }
                    if(req.body.subject){
                        let array=await course.find({subjectCategory:req.body.subject});

                        if(array.length>0){
                            finalArray.push(array)
                            };
                    }

                    if(req.body.country){
                        let array=await course.find({country:req.body.country});

                        if(array.length>0){
                            finalArray.push(array)
                            };
                    }


                    if(req.body.cost){
                        let array=await course.find({cost: {$lt:req.body.cost}});

                        if(array.length>0){
                            finalArray.push(array)
                            };
                    }

                    if(req.body.duration){
                        let array=await course.find({cost: {$lt:req.body.duration}});

                        if(array.length>0){
                            finalArray.push(array)
                            };
                    }

                    for(let i=0;i<finalArray.length;i++){
                        for(let j=0;j<finalArray[i].length;j++){
                            newArray.push(finalArray[i][j]);
                        }
                    }

                    for(i=0; i < newArray.length; i++){
                        if(uniqueArray.indexOf(newArray[i]) === -1) {
                            uniqueArray.push(newArray[i]);
                        }
                    }
                    
                    res.json({
                        data:uniqueArray
                    })
                }
                 
                        

catch(error){

   console.log(error)
  
  }
}