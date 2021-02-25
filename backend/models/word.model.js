const mongoose = require('mongoose');
const UniqueValidator = require('mongoose-unique-validator');

const wordSchema = mongoose.Schema({
  word: { type: String, required: true, unique: true },
  syllables: { type: Number, required: true }
});

wordSchema.plugin(UniqueValidator);

module.exports = mongoose.model('Word', wordSchema);
