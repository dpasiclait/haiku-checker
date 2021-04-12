
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
const CONSONANTS_INCLUDING_Y = new RegExp('[b-d]|[f-h]|[j-n]|[p-t]|[v-z]');
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

  if (letters[0] === 'y' && letters[1].match(CONSONANTS_EXCLUDING_Y)) {
    numberOfKeyVowels++;
  }

  for (i = 1; i < letters.length; i++) {
    if (letters[i].match(CONSONANTS_EXCLUDING_Y)){
      continue;
    }

    if (letters[i] === 'e' && `${letters[i + 1]}${letters[i + 2]}`.match(new RegExp('tt|ll')) && letters[i + 3] === 'e' && letters[i + 4] === 'r') {
      numberOfKeyVowels++;
      i += 2;
      continue;
    }

    if (letters[i] === 'e' && `${letters[i + 1]}${letters[i + 2]}`.match(new RegExp('tt|ll')) && letters[i + 3] === 'e') {
      numberOfKeyVowels++;
      i += 4;
      continue;
    }

    if (letters[i - 2] ==='r' && letters[i - 1] === 'u' && letters[i] === 'i' && letters[i + 1].match(new RegExp('n|d'))) {
      numberOfKeyVowels++;
      continue;
    }

    if (letters[i].match(A_E_I_O_U_AND_SOMETIMES_Y) && letters[i - 1] === 'u' && (letters[i - 2] !== 'c' && letters[i - 2] !== 'g' && letters[i - 2] !== 'k' && letters[i - 2] !== 'q' && letters[i - 2] !== 'r')) {
      numberOfKeyVowels++;
      continue;
    }

    if (letters[i - 2]?.match(new RegExp('t|s|x|c')) && letters[i - 1] === 'i' && letters[i] === 'o' && letters[i + 1] === 'n') {
      continue;
    }

    if (letters[i - 2] === 'n' && letters[i - 1] === 'i' && letters[i].match(new RegExp('a|o|u'))) {
      continue;
    }

    if (letters[i - 1] === 'i' && letters[i].match(new RegExp('a|o|u'))) {
      numberOfKeyVowels++;
      continue;
    }

    if ((i === letters.length - 1) && letters[i - 1] === 'o' && letters[i] === 'a') {
      numberOfKeyVowels++;
      continue;
    }

    if ((i === letters.length - 2) && letters[i - 1] === 'o' && letters[i] === 'a' && letters[i + 1] === 'h') {
      numberOfKeyVowels++;
      continue;
    }

    if (letters[i - 2]?.match(new RegExp('z|c|s|x')) && letters[i - 1] === 'o' && letters[i].match(new RegExp('a|e|y')) && letters[i + 1] === 'n') {
      numberOfKeyVowels++;
      continue;
    }

    if (letters[i - 2] === 'z' && letters[i - 1] === 'o' && letters[i].match(new RegExp('a|e|y'))) {
      numberOfKeyVowels++;
      continue;
    }

    if (letters[i - 2] === 'z' && letters[i - 1] === 'o' && letters[i] === 'o' && letters[i + 1]?.match(new RegExp('l|t'))) {
      numberOfKeyVowels++;
      continue;
    }

    if (letters[i - 3] === 'p' && letters[i - 2] === 'n' && letters[i - 1] === 'e' && letters[i] === 'u') {
      continue;
    }

    if (letters[i - 3] === 'p' && letters[i - 2] === 'h' && letters[i - 1] === 'e' && letters[i] === 'u' && letters[i + 1]?.match(new RegExp('m|s'))) {
      numberOfKeyVowels++;
      continue;
    }

    if (letters[i - 2]?.match(new RegExp('f|s|r|a|n|d|t')) && letters[i - 1] === 'e' && letters[i] === 'u' && letters[i + 1]?.match(new RegExp('m|s'))) {
      numberOfKeyVowels++;
      continue;
    }

    if (letters[i - 2] === 'c' && letters[i - 1] === 'o' && letters[i] === 'a' && letters[i + 1] === 'g') {
      numberOfKeyVowels++;
      continue;
    }

    if (letters[i - 2] === 'c' && letters[i - 1] === 'o' && letters[i] === 'a' && letters[i + 1] === 't' && letters[i + 2] === 'e') {
      numberOfKeyVowels++;
      continue;
    }

    if (letters[i - 2] === 'c' && letters[i - 1] === 'o' && letters[i] === 'e' && letters[i + 1] === 'x') {
      numberOfKeyVowels++;
      continue;
    }

    if (letters[i - 4] === 'a' && letters[i - 3] === 'u' && letters[i - 2] === 't' && letters[i - 1] === 'o' && letters[i].match(A_E_I_O_U)) {
      numberOfKeyVowels++;
      continue;
    }

    if (letters[i - 1].match(A_E_I_O_U)) {
      continue;
    }

    if ((i === letters.length - 1) && letters[i] === 'e' && letters[i - 1].match(CONSONANTS_INCLUDING_Y) && letters[i - 2].match(A_E_I_O_U_AND_SOMETIMES_Y)) {
      continue;
    }

    if ((i === letters.length - 2) && letters[i] === 'e' && letters[i + 1] === 'd' && numberOfKeyVowels > 0) {
      continue;
    }

    if ((i === letters.length - 2) && letters[i] === 'e' && letters[i - 1].match(new RegExp('c|s|x|z')) && letters[i + 1] === 's') {
      numberOfKeyVowels++;
      continue;
    }

    if ((i === letters.length - 2) && letters[i] === 'e' && letters[i - 1].match(CONSONANTS_INCLUDING_Y) && letters[i - 2].match(A_E_I_O_U_AND_SOMETIMES_Y) && letters[i + 1] === 's') {
      continue;
    }

    numberOfKeyVowels++;
  }

  return numberOfKeyVowels;
}
