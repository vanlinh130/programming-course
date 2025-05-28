const express = require("express");
const { create, approve, getApproved, getAll } = require("../controllers/userCourseController");
const router = express.Router();

router.post("/", create);
router.put('/approve', approve);
router.get('/approved/:userId', getApproved);
router.get('/all/:userId', getAll);

module.exports = router;