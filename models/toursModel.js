const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  rating: {
    type: Number,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
