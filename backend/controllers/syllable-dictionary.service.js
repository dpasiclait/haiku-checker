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
    let substring1 = get_substring(letters, i - 1, i)
    if (does_the_special_y_vowel_rule_apply(substring1)) {
      // console.log('does_the_special_y_vowel_rule_apply', letters[i]);
      numberOfKeyVowels++;
      continue;
    }

    // * consonants and special exceptions
    substring1 = get_preceding_prefix_substring(letters, i);
    if (
      is_letter_a_consonant(letters[i]) ||
      ((i >= 5 && i <= 6) && does_special_ae_vowel_exception_rule_apply(substring1))
    ) {
      // console.log('is_letter_a_consonant or special exceptions', letters[i]);
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
    substring1 = get_substring(letters, i - 3, i + 6);
    if (
      (i === letters.length - 2 || (i >= letters.length - 7 && i <= letters.length - 5)) &&
      does_special_ael_ending_apply(substring1)
    ) {
      // console.log('does_special_ael_ending_apply', letters[i]);
      numberOfKeyVowels++;
      continue;
    }

    substring1 = get_substring(letters, i - 1, i + 1);
    // TODO: can be simplified after all rules are defined
    if (
      does_special_aa_vowel_rule_apply(substring1) ||
      does_special_ae_vowel_rule_apply(substring1)
    ) {
      // console.log('does_special_aa_vowel_rule_apply or does_special_ae_vowel_rule_apply', letters[i]);
      numberOfKeyVowels++;
      i++;
      continue;
    }

    // * suffixes
    const suffixSubstring = get_trailing_suffix_substring(letters, i);
    substring1 = get_substring(letters, i - 3, i);
    let substring2 = get_substring(letters, i - 3, i + 1);
    if (
      ((i >= letters.length - 6 && i <= letters.length - 2) && does_a_suffix_beginning_in_a_vowel_trails_after_a_vowel_rule_apply(suffixSubstring)) ||
      ((i === letters.length - 1) && does_the_special_e_ending_rule_apply(substring1)) ||
      ((i === letters.length - 2) && does_the_special_e_s_ending_rule_apply(substring2))
    ) {
      // console.log('does_a_suffix_beginning_in_a_vowel_after_a_vowel_rule_apply', letters[i]);
      numberOfKeyVowels++;
      continue;
    }

    // * silent vowels
    substring1 = get_substring(letters, i - 3, i);
    substring2 = get_substring(letters, i - 1, i + 1);
    let substring3 = get_substring(letters, i - 2, i + 1);
    let substring4 = get_substring(letters, i - 1, i);
    if (
      ((i === letters.length - 1) && does_the_standard_silent_e_ending_rule_apply(substring1)) ||
      ((i === letters.length - 2) && numberOfKeyVowels > 0 && does_the_standard_silent_e_d_ending_rule_apply(substring2)) ||
      ((i === letters.length - 2) && does_the_standard_silent_e_s_ending_rule_apply(substring3)) ||
      does_the_standard_silent_vowel_rule_apply(substring4)
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

function does_special_ae_vowel_exception_rule_apply(substring) {
  return substring.match(new RegExp('^(medi|micro|photo|poly)ae'));
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
  if(substring.match(new RegExp('^(ambi|ante|anti|auto|bene|deca|ecto|fore|giga|hemi|homo|hypo|kilo|medi|meta|mega|mono|nano|octo|omni|para|peri|poly|pyro|semi|tele|tera)[aeiouy]'))) {
    // console.log('(ambi|ante|anti|auto|bene|deca|ecto|fore|giga|hemi|homo|hypo|kilo|medi|mega|mono|nano|octo|omni|para|peri|poly|semi|tele|tera)[aeiouy]');
    return true;
  }

  if(substring.match(new RegExp('^(centi|extra|extro|infra|intra|macro|micro|milli|multi|ortho|photo|retro|supra|tetra|ultra)[aeiouy]'))) {
    // console.log('(centi|extra|extro|infra|intra|macro|micro|milli|multi|ortho|photo|retro|supra|tetra|ultra)[aeiouy]');
    return true;
  }

  if(substring.match(new RegExp('^(chrono|contra|hetero|pseudo|psycho)[aeiouy]'))) {
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

  if (substring.match('(ph|.f|.m|.r)aelesque')) {
    return true;
  }

  return false;
}

function does_special_aa_vowel_rule_apply(substring) {
  return substring.match('aa(i)');
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
  if (substring.match(new RegExp('[aeiouy](acy|ant|ary|ate|eer|est|ify|ile|ing|ian|ion|ise|ish|ism|ist|ite|ity|ive|ize|ous)$'))) {
    return true;
  }

  if (substring.match(new RegExp('[aeiouy](iance|ience)$'))) {
    return true;
  }

  if (substring.match(new RegExp('[aeouy](able|ance|ence|ians|ible|ical|ions|ious|isms|ists|ites|itic|itis|ized|izer|izes|osis)$'))) {
    return true;
  }

  if (substring.match(new RegExp('[i](able|ians|ible|ical|ions|ious|isms|ists|ites|itic|itis|ized|izer|izes|osis)$'))) {
    return true;
  }

  // ! -ology not included
  if (substring.match(new RegExp('[aeiouy](esque|istic|izing)$'))) {
    return true;
  }

  if (substring.match(new RegExp('[aeiouy]ically$'))) {
    return true;
  }

  return false;
}

function does_the_special_e_ending_rule_apply(substring) {
  return substring.match(new RegExp('ae[dr]e'));
}

function does_the_special_e_s_ending_rule_apply(substring) {
  return substring.match(new RegExp('..[csxz]es|ae[dr]es'));
}

function does_the_standard_silent_e_ending_rule_apply(substring) {
  return substring.match(new RegExp('.[aeiouy][^aeiou]e|aste|..[cs]e|.nge|.gne'));
}

function does_the_standard_silent_e_d_ending_rule_apply(substring) {
  return substring.match(new RegExp('[^dt]ed'));
}

function does_the_standard_silent_e_s_ending_rule_apply(substring) {
  return substring.match(new RegExp('[aeiouy][^aeiou]es'));
}

function does_the_standard_silent_vowel_rule_apply(substring) {
  return substring.match(new RegExp('[aeiou][aeiouy]'));
}
