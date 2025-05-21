const pool = require('../config/db');

const Employee = {
  async getAll() {
    const res = await pool.query('SELECT * FROM employees');
    return res.rows;
  },

  async getById(id) {
    const res = await pool.query('SELECT * FROM employees WHERE id = $1', [id]);
    return res.rows[0];
  },

  async create({ name, email, position }) {
    const res = await pool.query(
      'INSERT INTO employees (name, email, position) VALUES ($1, $2, $3) RETURNING *',
      [name, email, position]
    );
    return res.rows[0];
  },

  async update(id, { name, email, position }) {
    const res = await pool.query(
      'UPDATE employees SET name = $1, email = $2, position = $3 WHERE id = $4 RETURNING *',
      [name, email, position, id]
    );
    return res.rows[0];
  },

  async delete(id) {
    const res = await pool.query('DELETE FROM employees WHERE id = $1 RETURNING *', [id]);
    return res.rows[0];
  },
};

module.exports = Employee;
