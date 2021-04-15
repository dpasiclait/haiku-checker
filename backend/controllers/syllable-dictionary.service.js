
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

  if (is_first_letter_vowel(`${letters[0]}${letters[1]}`)) {
    numberOfKeyVowels++;
  }

  for (i = 1; i < letters.length; i++) {
    const substring_1_0 = `${letters[i - 1]}${letters[i]}`;
    const substring_3_2_1_0 = `${letters[i - 3]}${letters[i - 2]}${letters[i - 1]}${letters[i]}`;
    if (
      does_the_special_y_vowel_rule_apply(substring_1_0) ||
      (i === letters.length - 1) && does_the_special_i_a_ending_rule_apply(substring_3_2_1_0)
    ) {
      numberOfKeyVowels++;
      continue;
    }

    const substring_2_1_0 = `${letters[i - 2]}${letters[i - 1]}${letters[i]}`;
    const substring_2_1_0_1 = `${letters[i - 2]}${letters[i - 1]}${letters[i]}${letters[i + 1]}`;
    if (
      does_the_standard_i_o_n_rule_apply(substring_2_1_0_1) ||
      does_the_standard_n_i_rule_apply(substring_2_1_0)||
      does_the_standard_p_n_e_u_rule_apply(substring_3_2_1_0) ||
      does_the_standard_u_e_vowels_rule_apply(substring_3_2_1_0)
    ) { continue; }

    const substring_0_1_2_3_4 = `${letters[i]}${letters[i + 1]}${letters[i + 2]}${letters[i + 3]}${letters[i + 4]}`;
    if (does_the_same_rule_as_the_word_better_or_teller_apply(substring_0_1_2_3_4)) {
      numberOfKeyVowels++;
      i += 2; // * skip to second e to count it as a key vowel
      continue;
    }

    const substring_0_1_2_3 = `${letters[i]}${letters[i + 1]}${letters[i + 2]}${letters[i + 3]}`;
    if (does_the_same_rule_as_the_word_belle_or_yvette_apply(substring_0_1_2_3)) {
      numberOfKeyVowels++;
      i += 4; // * skip pass the second e because it is a silent vowel
      continue;
    }

    const substring_1_0_1 = `${letters[i - 1]}${letters[i]}${letters[i + 1]}`;
    const substring_2_1_0_1_2 = `${letters[i - 2]}${letters[i - 1]}${letters[i]}${letters[i + 1]}${letters[i + 2]}`;
    const substring_3_2_1_0_1 = `${letters[i - 3]}${letters[i - 2]}${letters[i - 1]}${letters[i]}${letters[i + 1]}`;
    const substring_4_3_2_1_0 = `${letters[i - 4]}${letters[i - 3]}${letters[i - 2]}${letters[i - 1]}${letters[i]}`;
    if (
      does_the_special_a_u_t_o_prefix_rule_apply(substring_4_3_2_1_0) ||
      does_the_special_c_o_rule(substring_2_1_0_1_2) ||
      does_the_special_e_u_rule_apply(substring_3_2_1_0_1) ||
      does_the_special_preceding_i_vowel_rule_apply(substring_1_0) ||
      // does_the_special_preceding_o_vowel_rule_apply(substring_2_1_0_1) ||
      does_the_special_preceding_u_vowel_rule_apply(substring_2_1_0_1) ||
      does_the_special_z_o_rule_apply(substring_2_1_0_1) ||
      ((i === letters.length - 1) && does_the_special_o_a_ending_rule_apply(substring_1_0)) ||
      ((i === letters.length - 2) && does_the_special_o_a_h_ending_rule_apply(substring_1_0_1)) ||
      (i === letters.length - 2) && does_the_special_e_s_ending_rule_apply(substring_1_0_1)
    ) {
      numberOfKeyVowels++;
      continue;
    }

    if (
      is_letter_a_consonant(letters[i]) ||
      (i === letters.length - 1) && does_the_standard_silent_e_ending_rule_apply(substring_3_2_1_0) ||
      (i === letters.length - 2) && numberOfKeyVowels > 0 && does_the_standard_silent_e_d_ending_rule_apply(substring_1_0_1) ||
      (i === letters.length - 2) && does_the_standard_silent_e_s_ending_rule_apply(substring_2_1_0_1) ||
      does_the_standard_silent_vowel_rule_apply(substring_1_0)
    ) {
      continue;
    }

    numberOfKeyVowels++;
  }

  return numberOfKeyVowels;
}

function is_first_letter_vowel(substring) {
  return substring.match(new RegExp('[aeiou].|y[^aeiou]'));
}

function does_the_special_y_vowel_rule_apply(substring) {
  return substring.match(new RegExp('[^aeiouy]y'));
}

function does_the_special_i_a_ending_rule_apply(substring) {
  return substring.match(new RegExp('a[^aeiouy]i[aou]'));
}

function is_letter_a_consonant(letter) {
  return letter.match(new RegExp('[b-d]|[f-h]|[j-n]|[p-t]|[v-z]'));
}

function does_the_standard_i_o_n_rule_apply(substring) {
  return substring.match(new RegExp('[cstx]ion'));
}

function does_the_standard_n_i_rule_apply(substring) {
  return substring.match(new RegExp('ni[aou]'));
}

function does_the_standard_p_n_e_u_rule_apply(substring) {
  return substring.match(new RegExp('pneu'));
}

function does_the_same_rule_as_the_word_better_or_teller_apply(substring) {
  return substring.match(new RegExp('eller|etter'));
}

function does_the_same_rule_as_the_word_belle_or_yvette_apply(substring) {
  return substring.match(new RegExp('elle|ette'));
}

function does_the_special_a_u_t_o_prefix_rule_apply(substring) {
  return substring.match(new RegExp('auto[aeiou]'));
}

function does_the_special_c_o_rule(substring) {
  return substring.match(new RegExp('coate|coag.|coe[drx].'));
}

function does_the_special_e_u_rule_apply(substring) {
  return substring.match(new RegExp('pheu[ms]|.[adfnrst]eu[ms]'));
}

function does_the_special_preceding_i_vowel_rule_apply(substring) {
  return substring.match(new RegExp('i[aou]'));
}

function does_the_special_preceding_o_vowel_rule_apply(substring) {
  return substring.match(new RegExp('[csxz]o[aey]n'));
}

function does_the_standard_u_e_vowels_rule_apply(substring) {
  return substring.match(new RegExp('ueue'));
}

function does_the_special_preceding_u_vowel_rule_apply(substring) {
  return substring.match(new RegExp('ruid|ruin|[^cgkqr]u[aeioy].'));
}

function does_the_special_z_o_rule_apply(substring) {
  return substring.match(new RegExp('zo[aey].|zoo[lt]'));
}

function does_the_special_o_a_ending_rule_apply(substring) {
  return substring.match(new RegExp('oa'));
}

function does_the_special_o_a_h_ending_rule_apply(substring) {
  return substring.match(new RegExp('oah'));
}

function does_the_special_e_s_ending_rule_apply(substring) {
  return substring.match(new RegExp('[csxz]es'));
}

function does_the_standard_silent_vowel_rule_apply(substring) {
  return substring.match(new RegExp('[aeiou][aeiouy]'));
}

function does_the_standard_silent_e_ending_rule_apply(substring) {
  return substring.match(new RegExp('.[aeiouy][^aeiou]e|aste|..[cs]e'));
}

function does_the_standard_silent_e_d_ending_rule_apply(substring) {
  return substring.match(new RegExp('[^dt]ed'));
}

function does_the_standard_silent_e_s_ending_rule_apply(substring) {
  return substring.match(new RegExp('[aeiouy][^aeiou]es'));
}
