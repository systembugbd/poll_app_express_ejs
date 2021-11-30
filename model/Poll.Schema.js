const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
  },
  totalVote: Number,
  options: {
    type: {
      name: String,
      vote: Number,
    },
  },
});

module.exports = mongoose.model('Poll', pollSchema);
