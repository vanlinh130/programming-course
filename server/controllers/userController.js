const {
  getAllUsers,
  updateUserByGoogleId,
  deleteUserByGoogleId,
  findUserByGoogleIdDetail,
  updateUserRoleByGoogleId,
} = require("../models/userModel");

// GET user by google_id
const getUserByGoogleId = async (req, res) => {
  const { google_id } = req.params;
  try {
    const user = await findUserByGoogleIdDetail(google_id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to get user", error: err.message });
  }
};

// GET all users
const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch users", error: err.message });
  }
};

// PUT user by google_id
const updateUserByGoogle = async (req, res) => {
  const { google_id } = req.params;
  const { email, name, picture } = req.body;
  try {
    const updated = await updateUserByGoogleId(google_id, {
      email,
      name,
      picture,
    });
    if (!updated) return res.status(404).json({ message: "User not found" });
    res.json(updated);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update user", error: err.message });
  }
};

// DELETE user by google_id
const deleteUserByGoogle = async (req, res) => {
  const { google_id } = req.params;
  try {
    const deleted = await deleteUserByGoogleId(google_id);
    if (!deleted) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete user", error: err.message });
  }
};

// update user role
const updateUserRole = async (req, res) => {
  const googleId = req.params.google_id;
  const { role } = req.body;

  const allowedRoles = ["user", "seo", "admin"];
  if (!allowedRoles.includes(role)) {
    return res.status(400).json({ message: "Invalid role" });
  }

  try {
    const result = await updateUserRoleByGoogleId(googleId, role);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Role updated", user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

module.exports = {
  getUserByGoogleId,
  getUsers,
  updateUserByGoogle,
  deleteUserByGoogle,
  updateUserRole,
};
