const {
  getAllUsers,
  updateUserByFacebookId,
  findUserByFacebookIdDetail,
  updateUserRoleByFacebook,
  deleteUserByFacebookId,
} = require("../models/userModel");

// GET user by facebook_id
const getUserByFacebookId = async (req, res) => {
  const { facebook_id } = req.params;
  try {
    const user = await findUserByFacebookIdDetail(facebook_id);
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

// PUT user by facebook_id
const updateUserFacebook = async (req, res) => {
  const { facebook_id } = req.params;
  const { email, name, picture } = req.body;
  try {
    const updated = await updateUserByFacebookId(facebook_id, {
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

// DELETE user by facebook_id
const deleteUserByFacebook = async (req, res) => {
  const { facebook_id } = req.params;
  try {
    const deleted = await deleteUserByFacebookId(facebook_id);
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
  const facebookId = req.params.facebook_id;
  const { role } = req.body;

  const allowedRoles = ["user", "seo", "admin"];
  if (!allowedRoles.includes(role)) {
    return res.status(400).json({ message: "Invalid role" });
  }

  try {
    const result = await updateUserRoleByFacebook(facebookId, role);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Role updated", user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

module.exports = {
  getUserByFacebookId,
  getUsers,
  updateUserFacebook,
  deleteUserByFacebook,
  updateUserRole,
};
