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
  totalVote: {
    type: Number,
    default: 0,
  },
  options: {
    type: [
      {
        name: String,

        vote: {
          type: Number,
          default: 0,
        },
      },
    ],
    required: [true, 'Poll option is required'],
  },
});

module.exports = mongoose.model('Poll', pollSchema);
