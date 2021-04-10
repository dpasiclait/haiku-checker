const SyllableDictionaryService = require('./syllable-dictionary.service');

describe('Testing countSyllablesByCountingKeyVowels', () => {

  it('Word: zucco', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zucco');
    expect(result).toBe(2);
  });

  it('Word: druid', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('druid');
    expect(result).toBe(2);
  });

  it('Word: fluid', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('fluid');
    expect(result).toBe(2);
  });

  it('Word: cuisine', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cuisine');
    expect(result).toBe(2);
  });

  it('Word: quid', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('quid');
    expect(result).toBe(1);
  });

  it('Word: quidproquo', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('quidproquo');
    expect(result).toBe(3);
  });

  it('Word: line', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('line');
    expect(result).toBe(1);
  });

  it('Word: little', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('little');
    expect(result).toBe(2);
  });

  it('Word: petal', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('petal');
    expect(result).toBe(2);
  });

  it('Word: turtle', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('turtle');
    expect(result).toBe(2);
  });

  it('Word: ankle', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ankle');
    expect(result).toBe(2);
  });

  it('Word: riddle', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('riddle');
    expect(result).toBe(2);
  });

  it('Word: arrow', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('arrow');
    expect(result).toBe(2);
  });

  it('Word: nickle', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('nickle');
    expect(result).toBe(2);
  });

  it('Word: cotton', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cotton');
    expect(result).toBe(2);
  });

  it('Word: student', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('student');
    expect(result).toBe(2);
  });

  it('Word: teacher', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('teacher');
    expect(result).toBe(2);
  });

  it('Word: children', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('children');
    expect(result).toBe(2);
  });

  it('Word: pottery', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('pottery');
    expect(result).toBe(3);
  });

  it('Word: learning', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('learning');
    expect(result).toBe(2);
  });

  it('Word: textbook', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('textbook');
    expect(result).toBe(2);
  });

  it('Word: watching', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('watching');
    expect(result).toBe(2);
  });

  it('Word: screaming', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('screaming');
    expect(result).toBe(2);
  });

  it('Word: misbehaving', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('misbehaving');
    expect(result).toBe(4);
  });

  it('Word: quack', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('quack');
    expect(result).toBe(1);
  });

  it('Word: ivy', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ivy');
    expect(result).toBe(2);
  });

  it('Word: day', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('day');
    expect(result).toBe(1);
  });

  it('Word: query', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('query');
    expect(result).toBe(2);
  });

  it('Word: coy', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coy');
    expect(result).toBe(1);
  });

  it('Word: Hippoglossus', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('Hippoglossus');
    expect(result).toBe(4);
  });

  it('Word: w', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('w');
    expect(result).toBe(1);
  });

});
