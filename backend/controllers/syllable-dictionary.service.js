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
  letters = word.toLowerCase().split('');

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
      does_the_special_preceding_u_vowel_rule_apply(substring_2_1_0_1) ||
      does_the_special_z_o_rule_apply(substring_2_1_0_1) ||
      does_the_special_f_a_e_l_rule_apply(substring_2_1_0_1) ||
      does_the_special_a_e_rule_apply(substring_2_1_0) ||
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

function does_the_standard_silent_e_d_ending_rule_apply(substring) {
  return substring.match(new RegExp('[^dt]ed'));
}

function does_the_standard_silent_e_s_ending_rule_apply(substring) {
  return substring.match(new RegExp('[aeiouy][^aeiou]es'));
}

function does_the_special_f_a_e_l_rule_apply(substring){
  return substring.match(new RegExp('fael'));
}

function does_the_special_a_e_rule_apply(substring){
  return substring.match(new RegExp('ae[aeiou]'));
}

exports.countSyllablesByCountingKeyVowels2 = (word) => {
  letters = word.toLowerCase().split('');

  if (letters.length === 1) {
    return 1;
  }

  numberOfKeyVowels = 0;

  if (is_first_letter_vowel(`${letters[0]}${letters[1]}`)) {
    numberOfKeyVowels++;
  }

  for (i = 1; i < letters.length; i++) {
    let substring = get_substring(letters, i - 1, i)
    if (does_the_special_y_vowel_rule_apply(substring)) {
      // console.log('does_the_special_y_vowel_rule_apply', letters[i]);
      numberOfKeyVowels++;
      continue;
    }

    // * consonants
    if (is_letter_a_consonant(letters[i])) {
      // console.log('is_letter_a_consonant', letters[i]);
      continue;
    }

    // * special exceptions
    substring = get_preceding_prefix_substring(letters, i);
    if (
      (i >= 5 && i <= 6) &&
      does_special_ae_vowel_exception_rule_apply(substring)
    ) {
      // console.log('does_special_ae_vowel_exception_rule_apply', letters[i]);
      continue;
    }

    // * prefixes
    const prefixSubstring = get_preceding_prefix_substring(letters, i);
    if (
      (i >= 2 && i <= 6) &&
      does_a_prefix_ending_in_a_vowel_precede_a_vowel_rule_apply(prefixSubstring)
    ) {
      // console.log('does_a_prefix_ending_in_a_vowel_precede_a_vowel_rule_apply', letters[i], i, prefixSubstring);
      numberOfKeyVowels++;
      continue;
    }

    // * special cases
    substring = get_substring(letters, i - 3, i + 6);
    if (
      (i === letters.length - 2 || (i >= letters.length - 7 && i <= letters.length - 5)) &&
      does_special_ael_ending_apply(substring)
    ) {
      // console.log('does_special_ael_ending_apply', letters[i]);
      numberOfKeyVowels++;
      continue;
    }

    substring = get_substring(letters, i - 1, i + 1);
    if (
      does_special_aa_vowel_rule_apply(substring) ||
      does_special_ae_vowel_rule_apply(substring)
    ) {
      // console.log('does_special_aa_vowel_rule_apply or does_special_ae_vowel_rule_apply', letters[i]);
      numberOfKeyVowels++;
      i++;
      continue;
    }

    // * suffixes
    const suffixSubstring = get_trailing_suffix_substring(letters, i);
    if (
      (i >= letters.length - 5 && i <= letters.length - 2) &&
      does_a_suffix_beginning_in_a_vowel_trails_after_a_vowel_rule_apply(suffixSubstring)
    ) {
      // console.log('does_a_suffix_beginning_in_a_vowel_after_a_vowel_rule_apply', letters[i]);
      numberOfKeyVowels++;
      continue;
    }

    // * silent vowels
    substring = get_substring(letters, i - 1, i);
    if (
      (i === letters.length - 1) && does_the_standard_silent_e_ending_rule_apply(get_substring(letters, i - 3, i)) ||
      (i === letters.length - 1) && does_the_standard_silent_e_ending_rule_apply(get_substring(letters, i - 2, i)) ||
      (i === letters.length - 2) && numberOfKeyVowels > 0 && does_the_standard_silent_e_d_ending_rule_apply(get_substring(letters, i - 1, i + 1)) ||
      (i === letters.length - 2) && does_the_standard_silent_e_s_ending_rule_apply(get_substring(letters, i - 2, i + 1)) ||
      does_the_standard_silent_vowel_rule_apply(substring)
    ) {
      // console.log('does_the_standard_silent_vowel_rule_apply or silent endings', letters[i]);
      continue;
    }

    numberOfKeyVowels++;
    // console.log('normal count', letters[i]);
  }

  return numberOfKeyVowels;
};

function get_preceding_prefix_substring(letters, position) {
  return letters.slice(0, position + 1).join('');
}

function does_a_prefix_ending_in_a_vowel_precede_a_vowel_rule_apply(substring){
  // ! be- not included
  if(substring.match(new RegExp('^(bi|co|de|di|du|eu|re)[aeiouy]'))) {
    // console.log('(bi|co|de|di|du|eu|re)[aeiouy]');
    return true;
  }

  // ! aqu- bio- dia- equ- uni- zoo- not included
  if (substring.match(new RegExp('^(dia|epi|exo|iso|neo|pre|pro|tri|uni)[aeiouy]'))) {
    // console.log('(dia|epi|exo|iso|neo|pre|pro|tri|uni)[aeiouy]');
    return true;
  }

  // ! soci- not included
  if(substring.match(new RegExp('^(ambi|ante|anti|auto|bene|deca|ecto|fore|giga|hemi|homo|hypo|kilo|medi|meta|mega|mono|nano|octo|omni|para|peri|poly|semi|tele|tera)[aeiouy]'))) {
    // console.log('(ambi|ante|anti|auto|bene|deca|ecto|fore|giga|hemi|homo|hypo|kilo|medi|mega|mono|nano|octo|omni|para|peri|poly|semi|tele|tera)[aeiouy]');
    return true;
  }

  if(substring.match(new RegExp('^(centi|extra|extro|infra|intra|macro|micro|milli|multi|ortho|photo|retro|supra|tetra|ultra)[aeiouy]'))) {
    // console.log('(centi|extra|extro|infra|intra|macro|micro|milli|multi|ortho|photo|retro|supra|tetra|ultra)[aeiouy]');
    return true;
  }

  if(substring.match(new RegExp('^(chrono|contra|hetero)[aeiouy]'))) {
    // console.log('(chrono|contra|hetero)[aeiouy]');
    return true;
  }

  return false;
}

function get_substring(letters, start, end) {
  return letters.slice(start, end + 1).join('');
}

function does_special_ael_ending_apply(substring) {
  if (substring.match('(ph|.f|.m|.r)ael')) {
    return true;
  }

  if (substring.match('(ph|.f|.m|.r)aelite')) {
    return true;
  }

  if (substring.match('(ph|.f|.m|.r)aeliti(c|sh|sm)')) {
    return true;
  }

  return false;
}

function does_special_aa_vowel_rule_apply(substring) {
  return substring.match('aa(i)');
}

function does_special_ae_vowel_exception_rule_apply(substring) {
  return substring.match(new RegExp('^(medi|micro)ae'));
}

function does_special_ae_vowel_rule_apply(substring) {
  return substring.match(new RegExp('ae[aiou]'));
}

function get_trailing_suffix_substring(letters, position) {
  return letters.slice(position - 1).join('');
}

function does_a_suffix_beginning_in_a_vowel_trails_after_a_vowel_rule_apply(substring) {
  // ! -ed -en -er -al not included
  if (substring.match(new RegExp('[aeiouy](or|ic)$'))) {
    return true;
  }

  // ! -ian not included
  if (substring.match(new RegExp('[aeiouy](acy|ant|ary|ate|eer|est|ify|ile|ing|ion|ise|ish|ism|ist|ity|ive|ize|ous)$'))) {
    return true;
  }

  if (substring.match(new RegExp('[aeiouy](able|ance|ence|ible|ical|ious|itis|osis)$'))) {
    return true;
  }

  // ! -ology not included
  if (substring.match(new RegExp('[aeiouy](esque)$'))) {
    return true;
  }

  return false;
}

function does_the_standard_silent_e_ending_rule_apply(substring) {
  if (substring.match(new RegExp('[aeiouy][^aeiou]e'))) {
    return true;
  }

  if (substring.match(new RegExp('.[aeiouy][^aeiou]e|aste|..[cs]e'))) {
    return true
  }

  return false;
}

