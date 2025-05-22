const axios = require("axios");
const {
  createUser,
  findUserByGoogleIdDetail,
} = require("../models/userModel");

// POST login with Google
const googleLogin = async (req, res) => {
  const { credential } = req.body;

  try {
    // Decode token from Google
    const response = await axios.get(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${credential}`
    );
    const { sub, email, name, picture } = response.data;

    let user = await findUserByGoogleIdDetail(sub);
    if (!user) {
      user = await createUser({
        google_id: sub,
        email,
        name,
        picture,
        role: 'user'
      });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

// POST login with Google
const googleLogout = async (req, res) => {
  try {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) {
          return res.status(500).json({ message: 'Failed to destroy session' });
        }
        return res.status(200).json({ message: 'Logout successful' });
      });
    } else {
      return res.status(200).json({ message: 'Logout successful' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Logout failed', error: error.message });
  }
};

module.exports = { googleLogin, googleLogout };
