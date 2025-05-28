const pool = require('../config/db');

// Thêm khóa học cho user (mặc định chưa duyệt)
const createUserCourse = async ({ user_id, course_id, is_approved = false }) => {
  const result = await pool.query(
    `INSERT INTO user_courses (user_id, course_id, is_approved)
     VALUES ($1, $2, $3) RETURNING *`,
    [user_id, course_id, is_approved]
  );
  return result.rows[0];
};

// Admin duyệt khóa học
const approveUserCourse = async ({ user_id, course_id }) => {
  const result = await pool.query(
    `UPDATE user_courses SET is_approved = TRUE, granted_at = CURRENT_TIMESTAMP
     WHERE user_id = $1 AND course_id = $2 RETURNING *`,
    [user_id, course_id]
  );
  return result.rows[0];
};

// Lấy tất cả khóa học đã duyệt của user
const getApprovedCourses = async (user_id) => {
  const result = await pool.query(
    `SELECT c.*
     FROM courses c
     JOIN user_courses uc ON c.id = uc.course_id
     WHERE uc.user_id = $1 AND uc.is_approved = TRUE`,
    [user_id]
  );
  return result.rows;
};

// Lấy tất cả khóa học của user (có/không duyệt)
const getAllCoursesOfUser = async (user_id) => {
  const result = await pool.query(
    `SELECT c.*, uc.is_approved, uc.granted_at
     FROM courses c
     JOIN user_courses uc ON c.id = uc.course_id
     WHERE uc.user_id = $1`,
    [user_id]
  );
  return result.rows;
};


module.exports = {
  createUserCourse,
  approveUserCourse,
  getApprovedCourses,
  getAllCoursesOfUser
};