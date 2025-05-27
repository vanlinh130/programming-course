const pool = require('../config/db');

const createCategory = async (name, value) => {
  const result = await pool.query(
    'INSERT INTO categories (name, value) VALUES ($1, $2) RETURNING *',
    [name, value]
  );
  return result.rows[0];
};

const getAllCategories = async () => {
  const catRes = await pool.query('SELECT * FROM categories');
  const categories = catRes.rows;

  for (const category of categories) {
    // Lấy courses theo category_id
    const courseRes = await pool.query('SELECT * FROM courses WHERE category_id = $1', [category.id]);
    const courses = courseRes.rows;

    // Lấy lessons theo từng course
    for (const course of courses) {
      const lessonRes = await pool.query('SELECT * FROM lessons WHERE course_id = $1', [course.id]);
      course.lessons = lessonRes.rows;
    }

    category.courses = courses;
  }

  return categories;
};

const getCategoryByValue = async (value) => {
  const catRes = await pool.query('SELECT * FROM categories WHERE value = $1', [value]);
  const category = catRes.rows[0];
  if (!category) return null;

  // Get courses
  const courseRes = await pool.query('SELECT * FROM courses WHERE category_id = $1', [category.id]);
  const courses = courseRes.rows;

  // For each course, get lessons
  for (let course of courses) {
    const lessonRes = await pool.query('SELECT * FROM lessons WHERE course_id = $1', [course.id]);
    course.lessons = lessonRes.rows;
  }

  category.courses = courses;
  return category;
};

const updateCategory = async (id, name, value) => {
  const result = await pool.query(
    'UPDATE categories SET name = $1, value = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *',
    [name, value, id]
  );
  return result.rows[0];
};

const deleteCategory = async (id) => {
  const result = await pool.query('DELETE FROM categories WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryByValue,
  updateCategory,
  deleteCategory
};