const Word = require('../models/word.model');
const jsonData = require('../resources/syllables.json');

const countVerseSyllables = (line, wordSyllableIndex) => {
  let syllableCount = 0;
  line.forEach(word => {
    syllableCount += wordSyllableIndex[word];
  });

  return syllableCount;
}

exports.verifyHaiku = (req, res, next) => {
  const {
    firstVerse,
    secondVerse,
    thirdVerse
  } = req.body;

  if (!firstVerse || !secondVerse || !thirdVerse) {
    return res.status(400).json({
      payload: 'At least one verse is missing',
      timestamp: Date.now()
    });
  }

  firstVerse = firstVerse.split(' ');
  secondVerse = secondVerse.split(' ');
  thirdVerse = thirdVerse.split(' ');

  // Word.find({ word: ['placers', 'two', 'writable', 'best', 'prosing']})
  //   .then(words => {
  //     let wordSyllableIndex = {};
  //     words.forEach(wordSyllable => {
  //       const { word, syllables } = wordSyllable;
  //       wordSyllableIndex[word] = syllables;
  //     });

  //     const haikuSyllablesCount = {
  //       firstLineCount: countLineSyllables(['placers', 'two', 'prosing'], wordSyllableIndex),
  //       secondLineCount: countLineSyllables(['writable', 'best', 'prosing'], wordSyllableIndex),
  //       thirdLineCount: countLineSyllables(['writable', 'prosing'], wordSyllableIndex),
  //     };

  //     res.status(200).json({
  //       payload: haikuSyllablesCount,
  //       timestamp: Date.now()
  //     });
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });

  Word.find({ word: [...firstVerse, ...secondVerse, ...thirdVerse]})
    .then(words => {
      let wordSyllableIndex = {};
      words.forEach(wordSyllable => {
        const { word, syllables } = wordSyllable;
        wordSyllableIndex[word] = syllables;
      });

      const haikuSyllablesCount = {
        firstVerseCount: countVerseSyllables(firstVerse, wordSyllableIndex),
        secondVerseCount: countVerseSyllables(secondVerse, wordSyllableIndex),
        thirdVerseCount: countVerseSyllables(thirdVerse, wordSyllableIndex),
      };

      res.status(200).json({
        payload: haikuSyllablesCount,
        timestamp: Date.now()
      });
    })
    .catch(error => {
      res.status(500).json({
        payload: error,
        timestamp: Date.now()
      });
    });
};

exports.uploadSyllablesToDictionary = (req, res, next) => {
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
