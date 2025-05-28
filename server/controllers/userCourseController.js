const { createUserCourse, approveUserCourse, getApprovedCourses, getAllCoursesOfUser } = require("../models/userCourseModel");

// Gán user với course
const create = async (req, res) => {
  try {
    const course = await createUserCourse(req.body);
    res.status(201).json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Lỗi tạo user_course' });
  }
};

// Admin duyệt quyền truy cập
const approve = async (req, res) => {
  try {
    const course = await approveUserCourse(req.body);
    if (!course) return res.status(404).json({ message: 'Không tìm thấy bản ghi' });
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Lỗi duyệt khóa học' });
  }
};

// Lấy các khóa học đã duyệt
const getApproved = async (req, res) => {
  try {
    const courses = await getApprovedCourses(req.params.userId);
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Lỗi lấy danh sách khóa học đã duyệt' });
  }
};

// Lấy tất cả khóa học đã/ chưa duyệt
const getAll = async (req, res) => {
  try {
    const courses = await getAllCoursesOfUser(req.params.userId);
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Lỗi lấy danh sách khóa học' });
  }
};

module.exports = {
    create,
    approve,
    getApproved,
    getAll
};
