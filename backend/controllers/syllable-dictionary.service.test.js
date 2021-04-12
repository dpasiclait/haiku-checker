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

  it('Word: more', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('more');
    expect(result).toBe(1);
  });

  it('Word: silhouette', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('silhouette');
    expect(result).toBe(3);
  });

  it('Word: tourette', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('tourette');
    expect(result).toBe(2);
  });

  it('Word: house', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('house');
    expect(result).toBe(1);
  });

  it('Word: lines', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('lines');
    expect(result).toBe(1);
  });

  it('Word: belle', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('belle');
    expect(result).toBe(1);
  });

  it('Word: by', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('by');
    expect(result).toBe(1);
  });

  it('Word: duel', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('duel');
    expect(result).toBe(2);
  });

  it('Word: aguelike', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('aguelike');
    expect(result).toBe(3);
  });

  it('Word: guava', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('guava');
    expect(result).toBe(2);
  });

  it('Word: guest', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('guest');
    expect(result).toBe(1);
  });

  it('Word: eve', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('eve');
    expect(result).toBe(1);
  });

  it('Word: peeve', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('peeve');
    expect(result).toBe(1);
  });

  it('Word: believe', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('believe');
    expect(result).toBe(2);
  });

  it('Word: perceive', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('perceive');
    expect(result).toBe(2);
  });

  it('Word: leave', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('leave');
    expect(result).toBe(1);
  });

  it('Word: cleaver', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cleaver');
    expect(result).toBe(2);
  });

  it('Word: better', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('better');
    expect(result).toBe(2);
  });

  it('Word: teller', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('teller');
    expect(result).toBe(2);
  });

  it('Word: letter', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('letter');
    expect(result).toBe(2);
  });

  it('Word: lettering', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('lettering');
    expect(result).toBe(3);
  });

  it('Word: trying', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('trying');
    expect(result).toBe(2);
  });

  it('Word: houses', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('houses');
    expect(result).toBe(2);
  });

  it('Word: fox', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('fox');
    expect(result).toBe(1);
  });

  it('Word: foxes', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('foxes');
    expect(result).toBe(2);
  });

  it('Word: quest', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('quest');
    expect(result).toBe(1);
  });

  it('Word: yvette', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('yvette');
    expect(result).toBe(2);
  });

  it('Word: buzz', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('buzz');
    expect(result).toBe(1);
  });

  it('Word: buzzes', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('buzzes');
    expect(result).toBe(2);
  });

  it('Word: place', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('place');
    expect(result).toBe(1);
  });

  it('Word: places', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('places');
    expect(result).toBe(2);
  });

  it('Word: witness', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('witness');
    expect(result).toBe(2);
  });

  it('Word: witnesses', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('witnesses');
    expect(result).toBe(3);
  });

  it('Word: cruise', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cruise');
    expect(result).toBe(1);
  });

  it('Word: cruises', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cruises');
    expect(result).toBe(2);
  });

  it('Word: bruise', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bruise');
    expect(result).toBe(1);
  });

  it('Word: bruises', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bruises');
    expect(result).toBe(2);
  });

  it('Word: gloves', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('gloves');
    expect(result).toBe(1);
  });

  it('Word: jovial', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('jovial');
    expect(result).toBe(3);
  });

  it('Word: pianist', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('pianist');
    expect(result).toBe(3);
  });

  it('Word: biology', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('biology');
    expect(result).toBe(4);
  });

  it('Word: remedial', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('remedial');
    expect(result).toBe(4);
  });

  it('Word: abecedarium', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('abecedarium');
    expect(result).toBe(6);
  });

  it('Word: wolframium', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('wolframium');
    expect(result).toBe(4);
  });

  it('Word: bacterial', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bacterial');
    expect(result).toBe(4);
  });

  it('Word: trial', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('trial');
    expect(result).toBe(2);
  });

  it('Word: vial', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('vial');
    expect(result).toBe(2);
  });

  it('Word: dial', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('dial');
    expect(result).toBe(2);
  });

  it('Word: ion', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ion');
    expect(result).toBe(2);
  });

  it('Word: zion', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zion');
    expect(result).toBe(2);
  });

  it('Word: superrheumatized', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('superrheumatized');
    expect(result).toBe(5);
  });

  it('Word: rheumatism', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('rheumatism');
    expect(result).toBe(3);
  });

  it('Word: rheumic', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('rheumic');
    expect(result).toBe(2);
  });

  it('Word: question', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('question');
    expect(result).toBe(2);
  });

  it('Word: afficionado', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('afficionado');
    expect(result).toBe(5);
  });

  it('Word: mission', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('mission');
    expect(result).toBe(2);
  });

  it('Word: transfixion', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('transfixion');
    expect(result).toBe(3);
  });

  it('Word: quad', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('quad');
    expect(result).toBe(1);
  });

  it('Word: ruin', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ruin');
    expect(result).toBe(2);
  });

  it('Word: zoological', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zoological');
    expect(result).toBe(5);
  });

  it('Word: azoology', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('azoology');
    expect(result).toBe(5);
  });

  it('Word: zoology', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zoology');
    expect(result).toBe(4);
  });

  it('Word: enzootic', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('enzootic');
    expect(result).toBe(4);
  });

  it('Word: antherozoid', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('antherozoid');
    expect(result).toBe(4);
  });

  it('Word: trapezoid', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('trapezoid');
    expect(result).toBe(3);
  });

  it('Word: protozoa', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('protozoa');
    expect(result).toBe(4);
  });

  it('Word: zoe', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zoe');
    expect(result).toBe(2);
  });

  it('Word: benzoyl', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('benzoyl');
    expect(result).toBe(3);
  });

  it('Word: benzoylate', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('benzoylate');
    expect(result).toBe(4);
  });

  it('Word: allozooid ', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('allozooid ');
    expect(result).toBe(4);
  });

  it('Word: zoo', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zoo');
    expect(result).toBe(1);
  });

  it('Word: zoom', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zoom');
    expect(result).toBe(1);
  });

  it('Word: Zouave', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('Zouave');
    expect(result).toBe(2);
  });

  it('Word: bouzouki', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bouzouki');
    expect(result).toBe(3);
  });

  it('Word: neural', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('neural');
    expect(result).toBe(2);
  });

  it('Word: adieu', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('adieu');
    expect(result).toBe(2);
  });

  it('Word: amateur', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('amateur');
    expect(result).toBe(3);
  });

  it('Word: boudoir', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('boudoir');
    expect(result).toBe(2);
  });

  it('Word: phobia', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('phobia');
    expect(result).toBe(3);
  });

  it('Word: amoeba', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('amoeba');
    expect(result).toBe(3);
  });

  it('Word: moe', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('moe');
    expect(result).toBe(1);
  });

  it('Word: aloe', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('aloe');
    expect(result).toBe(2);
  });

  it('Word: feudal', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('feudal');
    expect(result).toBe(2);
  });

  it('Word: therapeutic', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('therapeutic');
    expect(result).toBe(4);
  });

  it('Word: heuristic', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('heuristic');
    expect(result).toBe(3);
  });

  it('Word: eukaryotic', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('eukaryotic');
    expect(result).toBe(5);
  });

  it('Word: alpheus', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('alpheus');
    expect(result).toBe(3);
  });

  it('Word: cepheus', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cepheus');
    expect(result).toBe(3);
  });


  it('Word: museum', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('museum');
    expect(result).toBe(3);
  });

  it('Word: vitreum', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('vitreum');
    expect(result).toBe(3);
  });

  it('Word: pneumonia', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('pneumonia');
    expect(result).toBe(3);
  });

  it('Word: pneumatic', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('pneumatic');
    expect(result).toBe(3);
  });

  it('Word: suppedaneum', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('suppedaneum');
    expect(result).toBe(5);
  });

  it('Word: trophaeum', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('trophaeum');
    expect(result).toBe(3);
  });

  it('Word: stomodeum', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('stomodeum');
    expect(result).toBe(4);
  });

  it('Word: stomatodaeum', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('stomatodaeum');
    expect(result).toBe(5);
  });

  it('Word: aphroditeum', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('aphroditeum');
    expect(result).toBe(5);
  });

  it('Word: boa', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('boa');
    expect(result).toBe(2);
  });

  it('Word: noah', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('noah');
    expect(result).toBe(2);
  });

  it('Word: coop', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coop');
    expect(result).toBe(1);
  });

  it('Word: coupe', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coupe');
    expect(result).toBe(1);
  });

  it('Word: coerce', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coerce');
    expect(result).toBe(2);
  });

  it('Word: coexist', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coexist');
    expect(result).toBe(3);
  });

  it('Word: alcoate', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('alcoate');
    expect(result).toBe(3);
  });

  it('Word: coagulate', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coagulate');
    expect(result).toBe(4);
  });

  it('Word: coagulase', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coagulase');
    expect(result).toBe(4);
  });

  it('Word: autoactivation', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('autoactivation');
    expect(result).toBe(6);
  });

  it('Word: aboard', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('aboard');
    expect(result).toBe(2);
  });

  it('Word: coast', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coast');
    expect(result).toBe(1);
  });

  it('Word: foam', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('foam');
    expect(result).toBe(1);
  });

  it('Word: accroached', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('accroached');
    expect(result).toBe(2);
  });

  it('Word: approach', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('approach');
    expect(result).toBe(2);
  });

  it('Word: eye', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('eye');
    expect(result).toBe(1);
  });

  it('Word: ewe', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ewe');
    expect(result).toBe(1);
  });

  it('Word: you', () => {
    const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('you');
    expect(result).toBe(1);
  });

});
