const pool = require('../config/db');

// Get user by google_id
const findUserByGoogleIdDetail = async (googleId) => {
  const res = await pool.query('SELECT * FROM users WHERE google_id = $1', [googleId]);
  return res.rows[0];
};

// Create a new user
const createUser = async (user) => {
  const { google_id, email, name, picture, role = 'user' } = user;
  const res = await pool.query(
    'INSERT INTO users (google_id, email, name, picture, role) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [google_id, email, name, picture, role]
  );
  return res.rows[0];
};

const getAllUsers = async () => {
  const result = await pool.query(`
    SELECT 
      u.*,
      COALESCE(json_agg(
        json_build_object(
          'course_id', uc.course_id,
          'is_approved', uc.is_approved,
          'granted_at', uc.granted_at
        )
      ) FILTER (WHERE uc.course_id IS NOT NULL), '[]') AS courses
    FROM users u
    LEFT JOIN user_courses uc ON uc.user_id = u.id
    GROUP BY u.id
    ORDER BY u.id DESC
  `);

  return result.rows;
};


// Update user by google_id
const updateUserByGoogleId = async (googleId, user) => {
  const fields = [];
  const values = [];
  let index = 1;

  for (const [key, value] of Object.entries(user)) {
    if (value !== undefined) {
      fields.push(`${key} = $${index}`);
      values.push(value);
      index++;
    }
  }

  if (fields.length === 0) return null; // No fields to update

  const query = `UPDATE users SET ${fields.join(', ')} WHERE google_id = $${index} RETURNING *`;
  values.push(googleId);

  const res = await pool.query(query, values);
  return res.rows[0];
};

// Delete user by google_id
const deleteUserByGoogleId = async (googleId) => {
  const res = await pool.query('DELETE FROM users WHERE google_id = $1 RETURNING *', [googleId]);
  return res.rows[0];
};

// Update user role by googleId
const updateUserRoleByGoogleId = async (googleId, role) => {
  const result = await pool.query(
    'UPDATE users SET role = $1 WHERE google_id = $2 RETURNING *',
    [role, googleId]
  );
  return result;
};

module.exports = {
  createUser,
  getAllUsers,
  findUserByGoogleIdDetail,
  updateUserByGoogleId,
  deleteUserByGoogleId,
  updateUserRoleByGoogleId
};