// const degree=require('../../../models/degree');
exports.insertDegree = async (req, res) => {
   console.log('institute1', req.files)

   try {
      // await degree.collection.insertOne(req.body)
      // res.json({
      //      success:true,
      //      data:"Inserted"
      //   })
   } catch (error) {
      console.log(error)
   }
}