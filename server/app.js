const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const allRoutes = require('./routes');

app.use(cors({
  origin: 'http://localhost:3000', // hoặc '*'
  credentials: true
}));
app.use(express.json());

allRoutes(app)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
