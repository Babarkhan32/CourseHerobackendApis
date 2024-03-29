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
const basedata = require("../models/basedata");
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
  uploads.array("facultyInformation", 10),
  async function (req, res) {
    console.log(req.files, "See it here");

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

//TextFieldsApi
router.get("/textFieldData", async (req, res) => {
  let textFields = await basedata.find({});
  res.json({
    data: textFields,
  });
});

//degree Apis
router.post(
  "/degree/insert",
  auth,
  uploads.array("imageSet", 10),
  course.insertDegree
);

module.exports = router;
