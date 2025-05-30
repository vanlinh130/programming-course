const jwt = require('jsonwebtoken');

const axios = require("axios");
const {
  createUser,
  findUserByGoogleIdDetail,
} = require("../models/userModel");

// POST login with Google
const googleLogin = async (req, res) => {
  const { credential } = req.body;

  try {
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

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(200).json({ user });

  } catch (err) {
    console.error('Google login error:', err);
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

// POST login with Google
const googleLogout = async (req, res) => {
  try {
    ['accessToken', 'userInfo', 'expiresAt'].forEach((cookie) => {
      res.clearCookie(cookie, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      });
    });

    return res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    return res.status(500).json({ message: 'Logout failed', error: error.message });
  }
};

module.exports = { googleLogin, googleLogout };
