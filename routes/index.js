var express = require('express');
var router = express.Router();

var course=require('../controllers/courses/courses')
var auth=require("../middleware/auth")
/* GET home page. */
router.get('/',function(req,res){
    res.json({
        data:"Home"
    })
});

/*getCourses */
router.post('/courses/insert',auth,course.insertCourses)
router.get('/courses/:id',course.getCourses)
router.get('/all/courses',course.getAllCourses)
router.post('/search',course.searchCourse)

module.exports = router;
