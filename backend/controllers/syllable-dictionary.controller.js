const Word = require('../models/word.model');

exports.findSyllables = (req, res, next) => {
  const {
    firstLine,
    secondLine,
    thirdLine
  } = req.body;

  res.status(200).json({
    payload: 'Hello world',
    timestamp: Date.now()
  });
};


exports.writeSyllableDictionary = (req, res, next) => {

  res.status(200).json({
    payload: 'Dictionary filled',
    timestamp: Date.now()
  });
}
