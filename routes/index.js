var express = require("express");
var router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log(file, "Req.files");
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${new Date().getTime()}_${file.originalname}`);
  },
});
const uploads = multer({ storage });
var course = require("../controllers/courses/courses");
var teacher = require("../controllers/teacher/teacher");
var institute = require("../controllers/institute/institute");
var student = require("../controllers/students/students");
var auth = require("../middleware/auth");
var degree = require("../controllers/degree/degree");
/* GET home page. */
router.get("/", function (req, res) {
  res.json({
    data: "Home",
  });
});

/*Courses Api*/

router.post(
  "/courses/insert",
  auth,
  uploads.single("facultyResume"),
  course.insertCourses
);
router.get("/courses/:id", course.getCourses);
router.get("/all/courses", course.getAllCourses);
router.post("/search", course.searchCourse);
router.post("/nav/search", course.navbarSearch);
router.post(
  "/images",
  async function (req, res, next) {
    try {
      uploads.array("facultyInformation", 10);

      next();
    } catch (err) {
      res.json({
        success: false,
        catch: true,
        error: err,
      });
    }
  },
  async function (req, res, err) {
    console.log(err);
    if (err) {
      return res.json({
        success: false,
        valid: false,
        data: err || "error",
      });
    }
    res.json({
      success: true,
      data: req.files,
    });
  }
);

/*Teacher Apis*/
router.post(
  "/teacher/insert",
  uploads.single("imageSet"),
  teacher.insertTeacher
);

/*Institute Apis*/
router.post(
  "/institute/insert",
  uploads.array("imageSet", 10),
  institute.insertInstitute
); //changed to single by sulaiman

/*Student Apis*/
router.post(
  "/student/insert",
  uploads.single("imageSet"),
  student.insertStudent
);

//degree Apis
router.post(
  "/degree/insert",
  auth,
  uploads.array("imageSet", 10),
  course.insertDegree
);

module.exports = router;
