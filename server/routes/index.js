const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const courseRoutes = require('./courseRoutes');
const lessonRoutes = require('./lessonRoutes');
const userCourseRoutes = require('./userCourseRoutes');
const chapterRoutes = require('./chapterRoutes');

const allRoutes = (app) => {
  app.use('/api/auth', authRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/categories', categoryRoutes);
  app.use('/api/courses', courseRoutes);
  app.use('/api/lessons', lessonRoutes);
  app.use('/api/user-courses', userCourseRoutes); 
  app.use('/api/chapters', chapterRoutes); 
};

module.exports = allRoutes;
