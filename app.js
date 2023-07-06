const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const messageRoutes = require('./src/routes/messageRoutes');

app.use('/', authRoutes);
app.use('/', userRoutes);
app.use('/', messageRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log('Server running on PORT ' + PORT));
