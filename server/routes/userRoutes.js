const express = require("express");
const {
  getUsers,
  updateUserFacebook,
  getUserByFacebookId,
  updateUserRole,
  deleteUserByFacebook,
} = require("../controllers/userController");

const router = express.Router();
router.get("/:facebook_id", getUserByFacebookId);
router.get("/", getUsers);
router.put("/:facebook_id", updateUserFacebook);
router.delete("/:facebook_id", deleteUserByFacebook);
router.put("/:facebook_id/role", updateUserRole);

module.exports = router;
