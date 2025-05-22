const express = require("express");
const {
  getUsers,
  updateUserByGoogle,
  deleteUserByGoogle,
  getUserByGoogleId,
  updateUserRole,
} = require("../controllers/userController");

const router = express.Router();
router.get("/:google_id", getUserByGoogleId);
router.get("/", getUsers);
router.put("/:google_id", updateUserByGoogle);
router.delete("/:google_id", deleteUserByGoogle);
router.patch("/:google_id/role", updateUserRole);

module.exports = router;
