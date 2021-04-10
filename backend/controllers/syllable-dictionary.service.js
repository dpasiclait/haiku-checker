
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
];


const A_E_I_O_U = new RegExp('a|e|i|o|u');
const A_E_I_O_U_AND_SOMETIMES_Y = new RegExp('a|e|i|o|u|y');
const CONSONANTS_INCLUDING_Y = new RegExp('[b-d]|[f-h]|[j-n]|[p-t]|[y-z]');
const CONSONANTS_EXCLUDING_Y = new RegExp('[b-d]|[f-h]|[j-n]|[p-t]|v|w|x|z');


exports.countSyllablesBySplittingWord = (word) => {

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
};

exports.countSyllablesByCountingKeyVowels = (word) => {
  letters = word.split('');

  if (letters.length === 1) {
    return 1;
  }

  numberOfKeyVowels = 0;

  if (letters[0].match(A_E_I_O_U)) {
    numberOfKeyVowels++;
  }

  for (i = 1; i < letters.length; i++) {
    if (letters[i].match(CONSONANTS_EXCLUDING_Y)){
      continue;
    }

    if (letters[i].match(A_E_I_O_U_AND_SOMETIMES_Y) && letters[i - 1] === 'u' && (letters[i - 2] !== 'c' && letters[i - 2] !== 'k' && letters[i - 2] !== 'q')) {
      numberOfKeyVowels++;
      continue;
    }

    if (letters[i - 1].match(A_E_I_O_U)) {
      continue;
    }

    if ((i === letters.length - 2) && letters[i] === 'e' && letters[i + 1] === 'd' && numberOfKeyVowels > 0) {
      continue;
    }

    if ((i === letters.length - 1) && letters[i] === 'e' && letters[i - 1].match(CONSONANTS_INCLUDING_Y) && letters[i - 2].match(A_E_I_O_U_AND_SOMETIMES_Y)) {
      continue;
    }

    numberOfKeyVowels++;
  }

  return numberOfKeyVowels;
}
