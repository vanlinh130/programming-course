const express = require("express");
const { googleLogin, googleLogout } = require("../controllers/authController");

const router = express.Router();
router.post("/google-login", googleLogin);
router.post('/logout', googleLogout);

module.exports = router;
