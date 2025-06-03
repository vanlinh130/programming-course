const pool = require('../config/db');


// Create a new user
const findOrCreateUser = async ({ id, name, email, picture, role = 'user' }) => {
  const client = await pool.connect();
  try {
    const check = await client.query(
      'SELECT * FROM users WHERE facebook_id = $1',
      [id]
    );

    if (check.rows.length > 0) return check.rows[0];

    const result = await client.query(
      `INSERT INTO users (facebook_id, name, email, picture, role) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [id, name, email, picture, role]
    );

    return result.rows[0];
  } finally {
    client.release();
  }
};

const findUserByFacebookIdDetail = async (facebookId) => {
  const res = await pool.query(
    `
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
    WHERE u.facebook_id = $1
    GROUP BY u.id
    `,
    [facebookId]
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


// Update user by facebook_id
const updateUserByFacebookId = async (facebookId, user) => {
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

  const query = `UPDATE users SET ${fields.join(', ')} WHERE facebook_id = $${index} RETURNING *`;
  values.push(facebookId);

  const res = await pool.query(query, values);
  return res.rows[0];
};

// Delete user by facebook_id
const deleteUserByFacebookId = async (facebookId) => {
  const res = await pool.query('DELETE FROM users WHERE facebook_id = $1 RETURNING *', [facebookId]);
  return res.rows[0];
};

// Update user role by facebookId
const updateUserRoleByFacebook = async (facebookId, role) => {
  const result = await pool.query(
    'UPDATE users SET role = $1 WHERE facebook_id = $2 RETURNING *',
    [role, facebookId]
  );
  return result;
};

module.exports = {
  findOrCreateUser,
  getAllUsers,
  findUserByFacebookIdDetail,
  updateUserByFacebookId,
  deleteUserByFacebookId,
  updateUserRoleByFacebook,
};