const jwt = require('jsonwebtoken');

const {
  findOrCreateUser,
} = require("../models/userModel");

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

const facebookLogin = async (req, res) => {
  const { userId, accessToken } = req.body;

  try {
    const url = `https://graph.facebook.com/v2.11/${userId}/?fields=id,name,picture,email&access_token=${accessToken}`;
    const fbRes = await fetch(url);
    const fbData = await fbRes.json();

    if (!fbData || fbData.error) {
      return res.status(400).json({ success: false, error: 'Invalid Facebook token' });
    }

    const user = await findOrCreateUser({
      id: fbData.id,
      name: fbData.name,
      email: fbData.email,
      picture: fbData.picture?.data?.url,
      role: 'user'
    });

    // Tạo JWT token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Set cookie chứa accessToken
    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 ngày
    });

    return res.json({ success: true, user });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

module.exports = { googleLogout, facebookLogin };
