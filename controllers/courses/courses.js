const {getCourses}=require('./helpers/getCourses'),
{insertCourses}=require("./helpers/insertCourse"),
{getAllCourses}=require('./helpers/getAllCourses'),
{insertDegree}=require("./helpers/insertDegree")
const { navbarSearch } = require('./helpers/navbarSearch')

const { searchCourse } = require('./helpers/searchCourse')


module.exports={
    getCourses:getCourses,
    insertCourses:insertCourses,
    getAllCourses:getAllCourses,
    searchCourse:searchCourse,
    navbarSearch:navbarSearch,
    insertDegree:insertDegree
}