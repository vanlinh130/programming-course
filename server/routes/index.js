const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');

const allRoutes = (app) => {
  app.use('/api/auth', authRoutes);
  app.use('/api/user', userRoutes);
};

module.exports = allRoutes;
