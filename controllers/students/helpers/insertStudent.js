const student = require('../../../models/student');
exports.insertStudent = async (req, res) => {
  console.log('studentFile', req.file)
  const { path } = req.file
  try {
    req.body.imageSet = path
    await student.collection.insertOne(req.body)
    res.json({
      success: true,
      data: "Inserted"
    })
  } catch (error) {
    console.log(error)
  }
}