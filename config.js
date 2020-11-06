const mongoose=require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  };
connectDB=async()=>{
    try{
        await mongoose.connect(
         process.env.MONGODB_URI || "mongodb+srv://BabarKhan:babar123@cluster0.xikk7.mongodb.net/CourseDb?retryWrites=true&w=majority",options
        )

        console.log("Mongo Connected");
    }catch(err){
            console.error('here is the error',err);

            process.exit(1)
    }
}

module.exports=connectDB;