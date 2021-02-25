const Word = require('../models/word.model');
const jsonData = require('../resources/syllables.json');
const fs = require('fs');

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
  let count = 0;
  jsonData.forEach(data => {
    let { word, syllables} = data;

    let newWord = new Word({
      word: word.toLocaleLowerCase(),
      syllables
    });

    newWord.save()
      .then(() => {
        console.log(`${++count} out of ${jsonData.length} words.`);
      })
      .catch(error => {
        console.error(`error at word ${word.word} - ${error}`);
      });
  });

  res.status(200).json({
    payload: 'Dictionary filled',
    timestamp: Date.now()
  });
}
