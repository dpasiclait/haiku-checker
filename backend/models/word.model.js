const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const wordSchema = mongoose.Schema({
  word: {
    type: String,
    required: true,
    unique: true
  },
  syllables: {
    type    : Number,
    required: true
  }
});

//wordSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Word', wordSchema);
