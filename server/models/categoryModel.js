const pool = require('../config/db');

const createCategory = async (name, value, title) => {
  const result = await pool.query(
    'INSERT INTO categories (name, value, title) VALUES ($1, $2, $3) RETURNING *',
    [name, value, title]
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

const updateCategory = async (id, fields) => {
  const keys = Object.keys(fields);
  if (keys.length === 0) return null;

  const setQuery = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');
  const values = Object.values(fields);

  // Add updated_at timestamp
  const query = `
    UPDATE categories 
    SET ${setQuery}, updated_at = CURRENT_TIMESTAMP 
    WHERE id = $${values.length + 1} 
    RETURNING *`;

  const result = await pool.query(query, [...values, id]);
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