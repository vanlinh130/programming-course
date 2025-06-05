const pool = require("../config/db");

const createChapters = async ({ title, course_id }) => {
  const res = await pool.query(
    "INSERT INTO chapters (title, course_id) VALUES ($1, $2) RETURNING *",
    [title, course_id]
  );
  return res.rows[0];
};

const getAllChapters = async () => {
  const res = await pool.query("SELECT * FROM chapters ORDER BY id");
  return res.rows;
};

const getByIdChapters = async (id) => {
  const chapterResult = await pool.query('SELECT * FROM chapters WHERE id = $1', [id]);
  const chapter = chapterResult.rows[0];
  if (!chapter) return null;

  const lessonResult = await pool.query('SELECT * FROM lessons WHERE chapter_id = $1', [id]);
  chapter.lessons = lessonResult.rows;

  return chapter;
};

const updateChapters = async (id, { title, course_id }) => {
  const res = await pool.query(
    "UPDATE chapters SET title = $1, course_id = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *",
    [title, course_id, id]
  );
  return res.rows[0];
};

const deleteChapters = async (id) => {
  const res = await pool.query(
    "DELETE FROM chapters WHERE id = $1 RETURNING *",
    [id]
  );
  return res.rows[0];
};

module.exports = {
  createChapters,
  getAllChapters,
  getByIdChapters,
  updateChapters,
  deleteChapters,
};
