const path = require('path');
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./db');
const mongoose = require('mongoose');
const router = require('./routes/router');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.set('views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

const serverAndDBConnect = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

serverAndDBConnect();
