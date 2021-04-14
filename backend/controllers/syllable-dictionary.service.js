
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

  if (does_word_start_with_a_vowel(letters[0], letters[1])) {
    numberOfKeyVowels++;
  }

  for (i = 1; i < letters.length; i++) {

    const substring3210 = `${letters[i - 3]}${letters[i - 2]}${letters[i - 1]}${letters[i]}`;
    if ((i === letters.length - 1) && does_the_following_substring_follow_the_same_rule_as_the_word_mania(substring3210)) {
      numberOfKeyVowels++;
      continue;
    }

    const substring210 = `${letters[i - 2]}${letters[i - 1]}${letters[i]}`;
    const substring2101 = `${letters[i - 2]}${letters[i - 1]}${letters[i]}${letters[i + 1]}`;
    if (
      is_letter_a_consonant(letters[i]) ||
      does_the_following_substring_follow_the_standard_i_o_n_rule(substring2101) ||
      does_the_following_substring_follow_the_standard_n_i_rule(substring210)||
      does_the_following_substring_follow_the_standard_p_n_e_u_rule(substring3210)
    ) { continue; }

    const substring01234 = `${letters[i]}${letters[i + 1]}${letters[i + 2]}${letters[i + 3]}${letters[i + 4]}`;
    if (does_the_following_substring_follow_the_same_rule_as_the_word_better_or_teller(substring01234)) {
      numberOfKeyVowels++;
      i += 2; // * skip to second e to count it as a key vowel
      continue;
    }

    const substring0123 = `${letters[i]}${letters[i + 1]}${letters[i + 2]}${letters[i + 3]}`;
    if (does_the_following_substring_follow_the_same_rule_as_the_word_belle_or_yvette(substring0123)) {
      numberOfKeyVowels++;
      i += 4; // * skip pass the second e because it is a silent vowel
      continue;
    }

    const substring10 = `${letters[i - 1]}${letters[i]}`;
    const substring101 = `${letters[i - 1]}${letters[i]}${letters[i + 1]}`;
    if (
      does_the_following_substring_follow_the_special_i_vowel_rule(substring10) ||
      does_following_substring_follow_the_special_o_vowel_rule(substring2101) ||
      does_following_substring_follow_the_special_u_vowel_rule(substring2101) ||
      does_following_substring_follow_the_special_z_o_rule(substring210) ||
      does_following_substring_follow_the_special_z_o_o_rule(substring2101) ||
      ((i === letters.length - 1) && does_following_substring_follow_the_special_o_a_vowels_rule(substring10)) ||
      ((i === letters.length - 2) && does_following_substring_follow_the_special_o_a_h_ending_rule(substring101))
    ) {
      numberOfKeyVowels++;
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

function does_word_start_with_a_vowel(firstLetter, followingLetter) {
  return firstLetter.match(A_E_I_O_U) || firstLetter === 'y' && followingLetter.match(CONSONANTS_EXCLUDING_Y);
}

function does_the_following_substring_follow_the_same_rule_as_the_word_mania(substring) {
  return substring.match(new RegExp('a[^aeiouy]i[aou]'));
}

function is_letter_a_consonant(letter) {
  return letter.match(CONSONANTS_EXCLUDING_Y);
}

function does_the_following_substring_follow_the_standard_i_o_n_rule(substring) {
  return substring.match(new RegExp('[cstx]ion'));
}

function does_the_following_substring_follow_the_standard_n_i_rule(substring) {
  return substring.match(new RegExp('ni[aou]'));
}

function does_the_following_substring_follow_the_standard_p_n_e_u_rule(substring) {
  return substring.match(new RegExp('pneu'));
}

function does_the_following_substring_follow_the_same_rule_as_the_word_better_or_teller(substring) {
  return substring.match(new RegExp('eller|etter'));
}

function does_the_following_substring_follow_the_same_rule_as_the_word_belle_or_yvette(substring) {
  return substring.match(new RegExp('elle|ette'));
}

function does_the_following_substring_follow_the_special_i_vowel_rule(substring) {
  return substring.match(new RegExp('i[aou]'));
}

function does_following_substring_follow_the_special_o_vowel_rule(substring) {
  return substring.match(new RegExp('[csxz]o[aey]n'));
}

function does_following_substring_follow_the_special_u_vowel_rule(substring) {
  return substring.match(new RegExp('ruid|ruin|[^cgkqr]u[aeioy].'));
}

function does_following_substring_follow_the_special_z_o_rule(substring) {
  return substring.match(new RegExp('zo[aey]'));
}

function does_following_substring_follow_the_special_z_o_o_rule(substring) {
  return substring.match(new RegExp('zoo[lt]'));
}

function does_following_substring_follow_the_special_o_a_vowels_rule(substring) {
  return substring.match(new RegExp('oa'));
}

function does_following_substring_follow_the_special_o_a_h_ending_rule(substring) {
  return substring.match(new RegExp('oah'));
}
