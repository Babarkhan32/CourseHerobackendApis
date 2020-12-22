var express = require('express');
var router = express.Router();
const multer=require('multer');


const storage=multer.diskStorage({
    destination:function(req,file,cb){

        console.log(file,"Req.files");
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
});
const uploads=multer({storage})
var course=require('../controllers/courses/courses')
var teacher=require('../controllers/teacher/teacher')
var institute=require('../controllers/institute/institute')
var student =require ('../controllers/students/students')
var auth=require("../middleware/auth")
var degree=require("../controllers/degree/degree")
/* GET home page. */
router.get('/',function(req,res){
    res.json({
        data:"Home"
    })
});

/*Courses Api*/

router.post('/courses/insert',auth,course.insertCourses)
router.get('/courses/:id',course.getCourses)
router.get('/all/courses',course.getAllCourses)
router.post('/search',course.searchCourse)
router.post('/nav/search',course.navbarSearch)


/*Teacher Apis*/
router.post('/teacher/insert',uploads.array('imageSet',10),teacher.insertTeacher);


/*Institute Apis*/
router.post('/institute/insert',uploads.array('imageSet',10),institute.insertInstitute);

/*Student Apis*/
router.post('/student/insert',uploads.array('imageSet',10),student.insertStudent);


//degree Apis
router.post('/degree/insert',auth,course.insertDegree)

module.exports = router;
