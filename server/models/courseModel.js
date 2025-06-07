const pool = require('../config/db');

const createCourse = async (course) => {
  const {
    title,
    description,
    label,
    image_url,
    price,
    original_price,
    category_id,
    tag, 
    short, 
    students, 
    likes,
    video_url,
    author,
  } = course;

  const result = await pool.query(
    `INSERT INTO courses 
      (title, description, label, image_url, price, original_price, category_id, tag, short, students, likes, video_url, author ) 
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) 
     RETURNING *`,
    [title, description, label, image_url, price, original_price, category_id, tag, short, students, likes, video_url, author]
  );

  return result.rows[0];
};

const getAllCourses = async () => {
  const result = await pool.query('SELECT * FROM courses');
  return result.rows;
};

const getCourseById = async (id) => {
  const courseResult = await pool.query('SELECT * FROM courses WHERE id = $1', [id]);
  const course = courseResult.rows[0];
  if (!course) return null;

  const chapterResult = await pool.query('SELECT * FROM chapters WHERE course_id = $1', [id]);
  course.chapters = chapterResult.rows;

  return course;
};

const getCourseByNumber = async (course_number) => {
  const courseResult = await pool.query('SELECT * FROM courses WHERE course_number = $1', [course_number]);
  const course = courseResult.rows[0];
  if (!course) return null;

  const chapterResult = await pool.query('SELECT * FROM chapters WHERE course_id = $1 ORDER BY id ASC', [course.id]);
  const chapters = chapterResult.rows;

  for (let chapter of chapters) {
    const lessonResult = await pool.query(
      'SELECT * FROM lessons WHERE chapter_id = $1 ORDER BY id ASC',
      [chapter.id]
    );
    chapter.lessons = lessonResult.rows;
  }

  course.chapters = chapters;

  return course;
};

const updateCourse = async (id, fields) => {
  const keys = Object.keys(fields);
  if (keys.length === 0) return null;

  const setQuery = keys.map((key, index) => `${key} = $${index + 1}`).join(', ');
  const values = Object.values(fields);

  // Add updated_at timestamp
  const query = `
    UPDATE courses 
    SET ${setQuery}, updated_at = CURRENT_TIMESTAMP 
    WHERE id = $${values.length + 1} 
    RETURNING *`;

  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
};

const deleteCourse = async (id) => {
  const result = await pool.query('DELETE FROM courses WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};


module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  getCourseByNumber,
  updateCourse,
  deleteCourse
};