const Word     = require('../models/word.model');
const jsonData = require('../resources/syllables.json');

const countVerseSyllables = (verse, wordSyllableIndex) => {
  let   syllableCount     = 0;
  const unrecognizedWords = []
  verse.forEach(word => {
    if (wordSyllableIndex[word]) {
      syllableCount += wordSyllableIndex[word];
    } else {
      unrecognizedWords.push(word);
    }
  });

  return {
    syllableCount,
    unrecognizedWords
  };
}

exports.verifyHaiku = (req, res, next) => {
  let {
    firstVerse,
    secondVerse,
    thirdVerse
  } = req.body;

  if (
    !firstVerse  || firstVerse === '' ||
    !secondVerse || secondVerse === '' ||
    !thirdVerse  || thirdVerse === ''
  ) {
    return res.status(400).json({
      payload  : 'At least one verse is missing',
      timestamp: Date.now()
    });
  }

  firstVerse  = firstVerse.toLocaleLowerCase().split(' ');
  secondVerse = secondVerse.toLocaleLowerCase().split(' ');
  thirdVerse  = thirdVerse.toLocaleLowerCase().split(' ');

  Word.find({
      word: [...firstVerse, ...secondVerse, ...thirdVerse]
    })
    .then(words => {
      let wordSyllableIndex = {};
      words.forEach(wordSyllable => {
        const {
          word,
          syllables
        } = wordSyllable;
        wordSyllableIndex[word] = syllables;
      });

      const {
        syllableCount    : firstVerseCount,
        unrecognizedWords: missingInFirstVerse
      } = countVerseSyllables(firstVerse, wordSyllableIndex);
      const {
        syllableCount    : secondVerseCount,
        unrecognizedWords: missingInSecondVerse
      } = countVerseSyllables(secondVerse, wordSyllableIndex);
      const {
        syllableCount    : thirdVerseCount,
        unrecognizedWords: missingInThirdVerse
      } = countVerseSyllables(thirdVerse, wordSyllableIndex);

      const unknownWords = missingInFirstVerse.concat(missingInSecondVerse, missingInThirdVerse);

      const haikuSyllablesCount = {
        firstVerseCount,
        secondVerseCount,
        thirdVerseCount,
        unknownWords
      };

      res.status(200).json({
        payload  : haikuSyllablesCount,
        timestamp: Date.now()
      });
    })
    .catch(error => {
      res.status(500).json({
        payload  : error,
        timestamp: Date.now()
      });
    });
};

exports.uploadSyllablesToDictionary = (req, res, next) => {

  console.log(`Saving ${jsonData.length} words!`);

  let count = 0;
  jsonData.forEach(({
    word,
    syllables}) => {

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
    payload  : 'Dictionary filled',
    timestamp: Date.now()
  });
}
