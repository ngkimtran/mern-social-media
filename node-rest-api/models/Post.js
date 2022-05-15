const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
      default: '',
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
