const express = require("express");
const { create, getAll, getById, update, remove, getByNumber } = require("../controllers/courseController");
const router = express.Router();

router.post("/", create);
router.get("/", getAll);
router.get('/course-number/:course_number', getByNumber);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;