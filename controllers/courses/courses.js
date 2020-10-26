const {getCourses}=require('./helpers/getCourses'),
{insertCourses}=require("./helpers/insertCourse"),
{getAllCourses}=require('./helpers/getAllCourses')


module.exports={
    getCourses:getCourses,
    insertCourses:insertCourses,
    getAllCourses:getAllCourses
}