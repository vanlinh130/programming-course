require('dotenv').config();
const express = require('express');
const app = express();
const employeeRoutes = require('./routes/employeeRoutes');

app.use(express.json());
app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
