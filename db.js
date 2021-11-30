const mongoose = require('mongoose');

const connectDB = async (URL) => {
  try {
    await new mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Database connected successfully');
  } catch (e) {
    console.error(e.message);
  }
};

module.exports = connectDB;
