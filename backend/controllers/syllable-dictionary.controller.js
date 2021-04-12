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
};

exports.test = (req, res, next) => {
  const {
    word
  } = req.body;

  res.status(200).json({
    payload  : {
      wordSplitting: countSyllables(word.toLowerCase()),
      vowelCounting: countKeyVowels(word.toLowerCase())
    },
    timestamp: Date.now()
  });
};

const prefixes = [
  'de',
  'dis',
  'ex',
  'il',
  'im',
  'in',
  'mis',
  'non',
  'pre',
  'pro',
  're',
  'un'
];

const suffix = [
  'able',
  'al',
  'er',
  'est',
  'ful',
  'ible',
  'ily',
  'ing',
  'less',
  'ly',
  'ness',
  'y'
]
function countSyllables(word) {

  if (word.length === 1) {
    return 1;
  }

  let syllableCount = 0;

  // * Separate prefixes and suffixes from root words
  // * examples:  pre-view, work-ing, re-do, end-less, & out-ing
  prefixes.forEach(prefix => {
    let regex = new RegExp(`${prefix}[a-z]+`);
    if (word.match(regex)) {
      syllableCount = 100000;
      // Todo trim down te word
    }
  });


  return syllableCount;
}

const A_E_I_O_U = new RegExp('a|e|i|o|u');
const A_E_I_O_U_AND_SOMETIMES_Y = new RegExp('a|e|i|o|u|y');
const CONSONANTS_INCLUDING_Y = new RegExp('[b-d]|[f-h]|[j-n]|[p-t]|[v-z]');
const CONSONANTS_EXCLUDING_Y = new RegExp('[b-d]|[f-h]|[j-n]|[p-t]|v|w|x|z');
function countKeyVowels(word) {
  letters = word.split('');

  numberOfKeyVowels = 0;

  if (letters[0].match(A_E_I_O_U)) {
    numberOfKeyVowels++;
  }
  console.log(numberOfKeyVowels);

  for (i = 1; i < letters.length; i++) {
    console.log(letters[i]);

    if (letters[i].match(CONSONANTS_EXCLUDING_Y)){
      console.log('consonant skip rule');
      continue;
    }

    if (letters[i - 1].match(A_E_I_O_U)) {
      console.log('vowel following vowel skip rule');
      continue;
    }

    if ((i === letters.length - 2) && letters[i] === 'e' && letters[i + 1] === 'd' && numberOfKeyVowels > 0) {
      console.log('ed ending skip rule');
      continue;
    }

    if ((i === letters.length - 1) && letters[i] === 'e' && letters[i - 1].match(CONSONANTS_INCLUDING_Y) && letters[i - 2].match(A_E_I_O_U_AND_SOMETIMES_Y)) {
      console.log('silent e skip rule');
      continue;
    }

    numberOfKeyVowels++;
    console.log(numberOfKeyVowels);
  }

  return numberOfKeyVowels;
}
