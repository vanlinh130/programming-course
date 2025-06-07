const pool = require("../config/db");

const createLesson = async ({ title, video_url, status, chapter_id, duration_minutes }) => {
  const res = await pool.query(
    "INSERT INTO lessons (title, video_url, status, chapter_id, duration_minutes ) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [title, video_url, status, chapter_id, duration_minutes]
  );
  return res.rows[0];
};

const getAllLessons = async () => {
  const result = await pool.query("SELECT * FROM lessons");
  return result.rows;
};

const getLessonById = async (id) => {
  const result = await pool.query("SELECT * FROM lessons WHERE id = $1", [id]);
  return result.rows[0];
};

const updateLesson = async (id, fields) => {
  const keys = Object.keys(fields);
  if (keys.length === 0) return null;

  const setQuery = keys
    .map((key, index) => `${key} = $${index + 1}`)
    .join(", ");
  const values = Object.values(fields);

  const query = `
    UPDATE lessons 
    SET ${setQuery}, updated_at = CURRENT_TIMESTAMP 
    WHERE id = $${values.length + 1} 
    RETURNING *`;

  const result = await pool.query(query, [...values, id]);
  return result.rows[0];
};

const deleteLesson = async (id) => {
  const result = await pool.query(
    "DELETE FROM lessons WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};

module.exports = {
  createLesson,
  getAllLessons,
  getLessonById,
  updateLesson,
  deleteLesson,
};
