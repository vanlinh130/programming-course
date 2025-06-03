const express = require("express");
const { googleLogout, facebookLogin } = require("../controllers/authController");

const router = express.Router();
router.post('/facebook-login', facebookLogin);
router.post('/logout', googleLogout);

module.exports = router;
