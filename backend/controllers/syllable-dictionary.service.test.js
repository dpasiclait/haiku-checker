const SyllableDictionaryService = require('./syllable-dictionary.service');

describe('Testing countSyllablesByCountingKeyVowels', () => {

  // describe('words that begin with vowels', () => {
  //   it('Word: abecedarium', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('abecedarium');
  //     expect(result).toBe(6);
  //   });

  //   it('Word: aboard', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('aboard');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: absorb', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('absorb');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: absorbed', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('absorbed');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: accroached', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('accroached');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: adieu', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('adieu');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: afficionado', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('afficionado');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: ahead', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ahead');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: alcoate', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('alcoate');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: allozooid ', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('allozooid ');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: alpheus', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('alpheus');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: aloe', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('aloe');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: amateur', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('amateur');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: ankle', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ankle');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: antherozoid', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('antherozoid');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: aphroditeum', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('aphroditeum');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: arrow', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('arrow');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: ascribe', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ascribe');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: ascribed', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ascribed');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: autoactivation', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('autoactivation');
  //     expect(result).toBe(6);
  //   });

  //   it('Word: azoology', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('azoology');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: enzootic', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('enzootic');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: eukaryotic', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('eukaryotic');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: eve', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('eve');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: ewe', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ewe');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: eye', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('eye');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: ion', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ion');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: ivy', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ivy');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: onion', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('onion');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: uncle', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('uncle');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: yvette', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('yvette');
  //     expect(result).toBe(2);
  //   });
  // });

  // describe('Words where "y" is a vowel', () => {
  //   it('Word: azoology', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('azoology');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: autoanalysis', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('autoanalysis');
  //     expect(result).toBe(6);
  //   });

  //   it('Word: biology', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('biology');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: bryan', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bryan');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: by', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('by');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: crying', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('crying');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: cryo', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cryo');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: cryogenic', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cryogenic');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: cyan', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cyan');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: denying', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('denying');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: drying', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('drying');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: eukaryotic', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('eukaryotic');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: frying', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('frying');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: gypsy', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('gypsy');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: ivy', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ivy');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: myanmar', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('myanmar');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: pottery', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('pottery');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: query', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('query');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: synergy', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('synergy');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: trying', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('trying');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: zoology', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zoology');
  //     expect(result).toBe(4);
  //   });
  // });

  // describe('Words that end in "ia"', () => {
  //   it('Word: castlevania', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('castlevania');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: mania', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('mania');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: romania', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('romania');
  //     expect(result).toBe(4);
  //   });
  // });

  // describe('Words that contain an "ion" substring', () => {
  //   it('Word: afficionado', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('afficionado');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: autoactivation', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('autoactivation');
  //     expect(result).toBe(6);
  //   });

  //   it('Word: mission', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('mission');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: question', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('question');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: transfixion', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('transfixion');
  //     expect(result).toBe(3);
  //   });
  // });

  // describe('Words that contain an "ni" substring', () => {
  //   it('Word: onion', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('onion');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: pneumonia', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('pneumonia');
  //     expect(result).toBe(3);
  //   });
  // });

  // describe('Words that contain a "pneu" substring', () => {
  //   it('Word: pneumatic', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('pneumatic');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: pneumonia', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('pneumonia');
  //     expect(result).toBe(3);
  //   });
  // });

  // describe('Words that have a silent "ue" ending', () => {
  //   it('Word: queue', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('queue');
  //     expect(result).toBe(1);
  //   });
  // });

  // describe('Words that contain an "eller" or "etter" substring', () => {
  //   it('Word: better', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('better');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: letter', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('letter');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: lettering', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('lettering');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: teller', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('teller');
  //     expect(result).toBe(2);
  //   });
  // });

  // describe('Words that contain an "elle" or "ette" substring', () => {
  //   it('Word: belle', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('belle');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: silhouette', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('silhouette');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: tourette', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('tourette');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: yvette', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('yvette');
  //     expect(result).toBe(2);
  //   });
  // });

  // describe('Words that contain the "auto" prefix before a vowel', () =>{
  //   it('Word: autoactivation', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('autoactivation');
  //     expect(result).toBe(6);
  //   });

  //   it('Word: autoanalysis', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('autoanalysis');
  //     expect(result).toBe(6);
  //   });

  //   it('Word: autoevaluation', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('autoevaluation');
  //     expect(result).toBe(7);
  //   });

  //   it('Word: autoimmune', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('autoimmune');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: autooxidation', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('autooxidation');
  //     expect(result).toBe(6);
  //   });

  //   it('Word: autourine', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('autourine');
  //     expect(result).toBe(4);
  //   });
  // });

  // describe('Words that contain a "co" before a non silent "a" and "e" vowels', () => {
  //   it('Word: alcoate', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('alcoate');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: coagulase', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coagulase');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: coagulate', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coagulate');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: coexist', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coexist');
  //     expect(result).toBe(3);
  //   });
  // });

  // describe('Words that end in "eum" and "eus"', () => {
  //   it('Word: alpheus', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('alpheus');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: aphroditeum', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('aphroditeum');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: cepheus', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cepheus');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: museum', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('museum');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: stomatodaeum', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('stomatodaeum');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: stomodeum', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('stomodeum');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: suppedaneum', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('suppedaneum');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: trophaeum', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('trophaeum');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: vitreum', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('vitreum');
  //     expect(result).toBe(3);
  //   });
  // });

  // describe('Words that have a "i" preceding a non silent vowel', () => {
  //   it('Word: abecedarium', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('abecedarium');
  //     expect(result).toBe(6);
  //   });

  //   it('Word: bacterial', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bacterial');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: bio', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bio');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: biology', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('biology');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: brian', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('brian');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: dial', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('dial');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: fiat', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('fiat');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: ian', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ian');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: ion', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ion');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: jovial', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('jovial');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: mia', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('mia');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: niece', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('niece');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: pianist', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('pianist');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: phobia', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('phobia');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: remedial', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('remedial');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: trial', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('trial');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: vial', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('vial');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: wolframium', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('wolframium');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: zion', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zion');
  //     expect(result).toBe(2);
  //   });
  // });

  // describe('Words that have a "u" preceding a non silent vowel', () => {
  //   it('Word: dual', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('dual');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: duel', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('duel');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: druid', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('druid');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: fluid', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('fluid');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: ruin', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ruin');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: zouave', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zouave');
  //     expect(result).toBe(2);
  //   });
  // });

  // describe('Words that that a "zo" preceding non silent vowels', () => {
  //   it('Word: azoology', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('azoology');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: benzoyl', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('benzoyl');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: benzoylate', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('benzoylate');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: enzootic', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('enzootic');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: zoe', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zoe');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: zoological', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zoological');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: zoology', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zoology');
  //     expect(result).toBe(4);
  //   });
  // });

  // describe('Words that have a two syllable "oa" substring ending', () => {
  //   it('Word: barbacoa', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('barbacoa');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: boa', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('boa');
  //     expect(result).toBe(2);
  //   });
  // });

  // describe('Words that have a two syllable "oah" substring ending', () => {
  //   it('Word: noah', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('noah');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: eloah', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('eloah');
  //     expect(result).toBe(3);
  //   });
  // });

  // describe('Words that have a non silent "es" ending', () => {
  //   it('Word: bruises', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bruises');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: cruises', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cruises');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: foxes', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('foxes');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: houses', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('houses');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: places', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('places');
  //     expect(result).toBe(2);
  //   });
  // });

  // describe('Words that have silent "e" ending', () => {
  //   it('Word: aguelike', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('aguelike');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: alcoate', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('alcoate');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: ascribe', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ascribe');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: babe', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('babe');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: believe', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('believe');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: benzoylate', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('benzoylate');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: bruise', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bruise');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: coagulase', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coagulase');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: coagulate', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coagulate');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: coerce', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coerce');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: coupe', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coupe');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: cruise', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cruise');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: cuisine', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cuisine');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: defense', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('defense');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: dependence', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('dependence');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: eevee', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('eevee');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: eve', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('eve');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: ewe', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ewe');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: eye', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('eye');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: fate', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('fate');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: haste', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('haste');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: house', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('house');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: leave', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('leave');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: line', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('line');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: more', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('more');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: niece', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('niece');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: paste', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('paste');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: peeve', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('peeve');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: perceive', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('perceive');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: place', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('place');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: waste', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('waste');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: zouave', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zouave');
  //     expect(result).toBe(2);
  //   });
  // });

  // describe('Words that have a silent "ed" ending', () => {
  //   it('Word: absorbed', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('absorbed');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: accroached', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('accroached');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: barfed', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('barfed');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: combed', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('combed');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: superrheumatized', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('superrheumatized');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: trained', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('trained');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: trapped', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('trapped');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: wormed', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('wormed');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: zoomed', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zoomed');
  //     expect(result).toBe(1);
  //   });
  // });

  // describe('Words that have silent "es" ending', () => {
  //   it('Word: gloves', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('gloves');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: lines', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('lines');
  //     expect(result).toBe(1);
  //   });
  // });

  // describe('Words that have non silent vowels followed by silent vowels', () => {
  //   it('Word: aboard', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('aboard');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: accroached', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('accroached');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: adieu', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('adieu');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: aguelike', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('aguelike');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: allozooid ', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('allozooid ');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: aloe', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('aloe');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: amateur', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('amateur');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: amoeba', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('amoeba');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: approach', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('approach');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: antherozoid', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('antherozoid');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: autoactivation', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('autoactivation');
  //     expect(result).toBe(6);
  //   });

  //   it('Word: believe', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('believe');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: boudoir', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('boudoir');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: bouzouki', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bouzouki');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: bruise', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bruise');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: bruises', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bruises');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: cleaver', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cleaver');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: coal', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coal');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: coast', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coast');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: coop', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coop');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: coupe', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coupe');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: cruise', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cruise');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: cruises', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cruises');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: cuisine', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cuisine');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: eukaryotic', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('eukaryotic');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: eye', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('eye');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: feudal', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('feudal');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: foam', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('foam');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: guava', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('guava');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: guest', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('guest');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: heuristic', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('heuristic');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: house', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('house');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: houses', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('houses');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: learning', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('learning');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: leave', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('leave');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: maya', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('maya');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: mayan', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('mayan');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: neural', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('neural');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: paint', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('paint');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: painted', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('painted');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: peeve', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('peeve');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: perceive', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('perceive');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: quack', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('quack');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: quad', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('quad');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: queef', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('queef');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: queen', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('queen');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: query', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('query');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: quest', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('quest');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: question', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('question');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: queue', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('queue');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: quid', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('quid');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: quidproquo', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('quidproquo');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: rheumatism', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('rheumatism');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: rheumic', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('rheumic');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: screaming', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('screaming');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: silhouette', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('silhouette');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: stomatodaeum', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('stomatodaeum');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: superrheumatized', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('superrheumatized');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: teacher', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('teacher');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: textbook', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('textbook');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: therapeutic', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('therapeutic');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: tourette', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('tourette');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: train', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('train');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: trained', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('trained');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: trapezoid', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('trapezoid');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: trophaeum', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('trophaeum');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: wound', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('wound');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: wounded', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('wounded');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: young', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('young');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: zoom', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zoom');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: zoomed', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zoomed');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: zouave', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zouave');
  //     expect(result).toBe(2);
  //   });
  // });

  // describe('Flexible words with special vowel combinations that can be accurately counted by 2 or more rules', () => {
  //   describe('Words that can be counted using the special "zo" rule or the "oa" ending rule', () => {
  //     it('Word: protozoa', () => {
  //       const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('protozoa');
  //       expect(result).toBe(4);
  //     });
  //   });

  //   describe('Words that can be counted using the silent "e" rule, silent vowel following non silent vowel rule, or the "ue" ending rule', () => {
  //     it('Word: cue', () => {
  //       const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cue');
  //       expect(result).toBe(1);
  //     });

  //     it('Word: moe', () => {
  //       const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('moe');
  //       expect(result).toBe(1);
  //     });
  //   });
  // });

  // describe('Words that can count vowel without applying other rules', () => {
  //   it('Word: absorb', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('absorb');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: barf', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('barf');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: bed', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bed');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: bitches', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bitches');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: buzz', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('buzz');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: buzzes', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('buzzes');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: children', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('children');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: comb', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('comb');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: cotton', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cotton');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: croatian', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('croatian');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: fed', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('fed');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: fox', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('fox');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: hippoglossus', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('hippoglossus');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: little', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('little');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: misbehaving', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('misbehaving');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: nickle', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('nickle');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: petal', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('petal');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: riddle', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('riddle');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: shred', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('shred');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: shredded', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('shredded');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: student', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('student');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: trap', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('trap');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: want', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('want');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: turtle', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('turtle');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: wanted', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('wanted');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: watching', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('watching');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: witches', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('witches');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: witness', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('witness');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: witnesses', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('witnesses');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: word', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('word');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: worded', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('worded');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: worm', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('worm');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: yang', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('yang');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: ying', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ying');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: yung', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('yung');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: zucco', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zucco');
  //     expect(result).toBe(2);
  //   });
  // });

  // describe('Words that are correct but hard to pinpoint rules that bind them', () => {
  //   it('Word: coy', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('coy');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: day', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('day');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: you', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('you');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: zoo', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('zoo');
  //     expect(result).toBe(1);
  //   });
  // });

  // describe('Words that need rules', () => {
  //   it('Word: abridgeable', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('abridgeable');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: advantageous', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('advantageous');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: ageing', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('ageing');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: bludgeon', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bludgeon');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: bogeying', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bogeying');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: bourgeois', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bourgeois');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: bungey', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('bungey');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: congeal', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('congeal');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: dungeon', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('dungeon');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: gear', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('gear');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: geiger', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('geiger');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: geoff', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('geoff');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: geoffrey', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('geoffrey');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: geyser', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('geyser');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: georgette', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('georgette');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: geulah', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('geulah');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: interchangeably', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('interchangeably');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: longeing', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('longeing');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: orangeish', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('orangeish');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: pageant', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('pageant');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: voyageur', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('voyageur');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: eleanor', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('eleanor');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: glean', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('glean');
  //     expect(result).toBe(1);
  //   });



  //   it('Word: apogeic', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('apogeic');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: archeology', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('archeology');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: boolean', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('boolean');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: cleo', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cleo');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: cleopatra', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('cleopatra');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: eon', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('eon');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: galilean', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('Galilean');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: geo', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('geo');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: geographer', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('geographer');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: geoid', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('geoid');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: geotropism', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('geotropism');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: georgia', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('georgia');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: geoscopic', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('geoscopic');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: lea', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('lea');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: leo', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('leo');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: leon', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('leon');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: lymphangeitis', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('lymphangeitis');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: noachian', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('noachian');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: oasis', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('oasis');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: oceanic', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('oceanic');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: orlean', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('orlean');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: orleans', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('orleans');
  //     expect(result).toBe(3);
  //   });

  //   it('Word: pangea', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('pangea');
  //     expect(result).toBe(3);
  //   });
  // });

  // it('Word: w', () => {
  //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels('w');
  //   expect(result).toBe(1);
  // });












  describe('Words with prefixes preceeding vowels: ', () => {
    it('Word: ambient', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('ambient');
      expect(result).toBe(3);
    });

    it('Word: aqueduct', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aqueduct');
      expect(result).toBe(3);
    });

    it('Word: aquifer', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aquifer');
      expect(result).toBe(3);
    });

    it('Word: duet', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('duet');
      expect(result).toBe(2);
    });

    it('Word: intraabdominal', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('intraabdominal');
      expect(result).toBe(6);
    });

    it('Word: medieval', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('medieval');
      expect(result).toBe(4);
    });

    it('Word: mediocre', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('mediocre');
      expect(result).toBe(4);
    });

    it('Word: medium', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('medium');
      expect(result).toBe(3);
    });

    it('Word: metaethics', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('metaethics');
      expect(result).toBe(4);
    });

    it('Word: metaethical', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('metaethical');
      expect(result).toBe(5);
    });

    it('Word: paraesthetic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('paraesthetic');
      expect(result).toBe(5);
    });

    it('Word: paraaminobenzoic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('paraaminobenzoic');
      expect(result).toBe(8);
    });

    it('Word: retroactivity', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('retroactivity');
      expect(result).toBe(6);
    });

    it('Word: ultraenergetic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('ultraenergetic');
      expect(result).toBe(6);
    });
  });

  describe('Words with aa vowel combinations', () => {
    it('Word: aardvark', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aardvark');
      expect(result).toBe(2);
    });

    it('Word: Aaron', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Aaron');
      expect(result).toBe(2);
    });

    it('Word: aasvogel', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aasvogel');
      expect(result).toBe(3);
    });

    it('Word: advocaat', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('advocaat');
      expect(result).toBe(3);
    });

    it('Word: Afrikaans', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Afrikaans');
      expect(result).toBe(3);
    });

    it('Word: ahaaina', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('ahaaina');
      expect(result).toBe(4);
    });

    it('Word: akaakai', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('akaakai');
      expect(result).toBe(3);
    });

    it('Word: baaed', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('baaed');
      expect(result).toBe(1);
    });

    it('Word: baaing', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('baaing');
      expect(result).toBe(2);
    });

    it('Word: balaam', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('balaam');
      expect(result).toBe(2);
    });

    it('Word: balmacaan', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('balmacaan');
      expect(result).toBe(3);
    });

    it('Word: Canaanitic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Canaanitic');
      expect(result).toBe(4);
    });

    it('Word: intraabdominal', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('intraabdominal');
      expect(result).toBe(6);
    });

    it('Word: Isaac', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Isaac');
      expect(result).toBe(2);
    });

    it('Word: kamaaina', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('kamaaina');
      expect(result).toBe(4);
    });

    it('Word: laager', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('laager');
      expect(result).toBe(2);
    });

    it('Word: maar', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('maar');
      expect(result).toBe(1);
    });

    it('Word: macaasim', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('macaasim');
      expect(result).toBe(3);
    });

    it('Word: meshugaas', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('meshugaas');
      expect(result).toBe(3);
    });

    it('Word: nagmaal', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('nagmaal');
      expect(result).toBe(2);
    });

    it('Word: paraaminobenzoic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('paraaminobenzoic');
      expect(result).toBe(8);
    });

    it('Word: Quaalude', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Quaalude');
      expect(result).toBe(2);
    });

    it('Word: raadzaal', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('raadzaal');
      expect(result).toBe(2);
    });

    it('Word: saanen', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('saanen');
      expect(result).toBe(2);
    });

    it('Word: Saarbrucken', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Saarbrucken');
      expect(result).toBe(3);
    });

    it('Word: salaam', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('salaam');
      expect(result).toBe(2);
    });

    it('Word: paauw', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('paauw');
      expect(result).toBe(1);
    });
  });

  describe('Words with ae vowel combinations', () => {
    // it('Word: acetonaemia', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('acetonaemia');
    //   expect(result).toBe(6);
    // });

    it('Word: acalephae', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('acalephae');
      expect(result).toBe(4);
    });

    it('Word: Achaean', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Achaean');
      expect(result).toBe(3);
    });

    // it('Word: Achaemenian', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Achaemenian');
    //   expect(result).toBe(5);
    // });

    it('Word: acmaea', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('acmaea');
      expect(result).toBe(3);
    });

    it('Word: acmaeidae', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('acmaeidae');
      expect(result).toBe(4);
    });

    it('Word: acraein', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('acraein');
      expect(result).toBe(3);
    });

    it('Word: Actaeon', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Actaeon');
      expect(result).toBe(3);
    });

    // it('Word: aecium', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aecium');
    //   expect(result).toBe(3);
    // });

    it('Word: aeacus', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aeacus');
      expect(result).toBe(3);
    });

    it('Word: aeolid', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aeolid');
      expect(result).toBe(3);
    });

    it('Word: aeolodicon', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aeolodicon');
      expect(result).toBe(5);
    });

    it('Word: aeon', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aeon');
      expect(result).toBe(2);
    });

    it('Word: aerate', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aerate');
      expect(result).toBe(2);
    });

    it('Word: aeluroidea', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aeluroidea');
      expect(result).toBe(4);
    });

    it('Word: aes', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aes');
      expect(result).toBe(1);
    });

    it('Word: algae', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('algae');
      expect(result).toBe(2);
    });

    it('Word: Althaea', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Althaea');
      expect(result).toBe(3);
    });

    it('Word: althaein', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('althaein');
      expect(result).toBe(3);
    });

    it('Word: amebae', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('amebae');
      expect(result).toBe(3);
    });

    it('Word: amoebae', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('amoebae');
      expect(result).toBe(3);
    });

    it('Word: amoebaeum', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('amoebaeum');
      expect(result).toBe(4);
    });

    it('Word: apogaeic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('apogaeic');
      expect(result).toBe(4);
    });

    it('Word: archaeologist', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('archaeologist');
      expect(result).toBe(5);
    });

    it('Word: archaeocyte ', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('archaeocyte');
      expect(result).toBe(4);
    });

    it('Word: athenaeum ', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('athenaeum');
      expect(result).toBe(4);
    });

    // it('Word: auriculariae ', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('auriculariae');
    //   expect(result).toBe(6);
    // });

    it('Word: Azrael ', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Azrael');
      expect(result).toBe(3);
    });

    it('Word: bae', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('bae');
      expect(result).toBe(1);
    });

    it('Word: blae', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('blae');
      expect(result).toBe(1);
    });

    it('Word: Bombidae ', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Bombidae');
      expect(result).toBe(3);
    });

    it('Word: Bovidae ', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Bovidae');
      expect(result).toBe(3);
    });

    it('Word: caecum', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('caecum');
      expect(result).toBe(2);
    });

    // it('Word: Caelian', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Caelian');
    //   expect(result).toBe(3);
    // });

    it('Word: caeoma', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('caeoma');
      expect(result).toBe(3);
    });

    it('Word: Caesar', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Caesar');
      expect(result).toBe(2);
    });

    // it('Word: cloacae', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('cloacae');
    //   expect(result).toBe(3);
    // });

    it('Word: cobaea', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('cobaea');
      expect(result).toBe(3);
    });

    it('Word: corvidae', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('corvidae');
      expect(result).toBe(3);
    });

    it('Word: coryphaei', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('coryphaei');
      expect(result).toBe(4);
    });

    it('Word: coryphaeus', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('coryphaeus');
      expect(result).toBe(4);
    });

    it('Word: coxae', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('coxae');
      expect(result).toBe(2);
    });

    it('Word: dicaeidae', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('dicaeidae');
      expect(result).toBe(4);
    });

    it('Word: enchytraeid', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('enchytraeid');
      expect(result).toBe(4);
    });

    it('Word: fae', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('fae');
      expect(result).toBe(1);
    });

    it('Word: Gael', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Gael');
      expect(result).toBe(1);
    });

    it('Word: Gaelic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Gaelic');
      expect(result).toBe(2);
    });

    // it('Word: glycaemia', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('glycaemia');
    //   expect(result).toBe(4);
    // });

    it('Word: haecceity', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('haecceity');
      expect(result).toBe(4);
    });

    // it('Word: haliaeetus', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('haliaeetus');
    //   expect(result).toBe(4);
    // });

    it('Word: Ishmael', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Ishmael');
      expect(result).toBe(3);
    });

    it('Word: Ishmaelite', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Ishmaelite');
      expect(result).toBe(4);
    });

    it('Word: ishmaelitic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('ishmaelitic');
      expect(result).toBe(5);
    });

    it('Word: ishmaelitish', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('ishmaelitish');
      expect(result).toBe(5);
    });

    it('Word: ishmaelitism', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('ishmaelitism');
      expect(result).toBe(5);
    });

    it('Word: Israel', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Israel');
      expect(result).toBe(3);
    });

    it('Word: Israeli', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Israeli');
      expect(result).toBe(3);
    });

    it('Word: Israelite', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Israelite');
      expect(result).toBe(4);
    });

    it('Word: laemodipoda', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('laemodipoda');
      expect(result).toBe(5);
    });

    it('Word: laet', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('laet');
      expect(result).toBe(1);
    });

    it('Word: laetic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('laetic');
      expect(result).toBe(2);
    });

    it('Word: lilaeopsis', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('lilaeopsis');
      expect(result).toBe(4);
    });

    it('Word: maelstrom', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('maelstrom');
      expect(result).toBe(2);
    });

    it('Word: Maccabaeus', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Maccabaeus');
      expect(result).toBe(4);
    });

    it('Word: mediaeval', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('mediaeval');
      expect(result).toBe(4);
    });

    it('Word: Michael', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Michael');
      expect(result).toBe(2);
    });

    it('Word: microaerophile', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('microaerophile');
      expect(result).toBe(5);
    });

    it('Word: micropalaeontology', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('micropalaeontology');
      expect(result).toBe(8);
    });

    it('Word: Nicaea', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Nicaea');
      expect(result).toBe(3);
    });

    it('Word: nonaerated', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('nonaerated');
      expect(result).toBe(4);
    });

    it('Word: notaeal', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('notaeal');
      expect(result).toBe(3);
    });

    it('Word: oligochaete', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('oligochaete');
      expect(result).toBe(4);
    });

    // it('Word: palaetiology', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('palaetiology');
    //   expect(result).toBe(6);
    // });

    it('Word: pezizaeform', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('pezizaeform');
      expect(result).toBe(4);
    });

    it('Word: phaeism', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('phaeism');
      expect(result).toBe(2);
    });

    it('Word: praecoces', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('praecoces');
      expect(result).toBe(3);
    });

    it('Word: primaeval', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('primaeval');
      expect(result).toBe(3);
    });

    it('Word: proctodaedaea', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('proctodaedaea');
      expect(result).toBe(5);
    });

    it('Word: propraetor', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('propraetor');
      expect(result).toBe(3);
    });

    it('Word: proquaestor', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('proquaestor');
      expect(result).toBe(3);
    });

    it('Word: psychodidae', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('psychodidae');
      expect(result).toBe(4);
    });

    it('Word: pteropaedes', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('pteropaedes');
      expect(result).toBe(4);
    });

    it('Word: pteropaedic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('pteropaedic');
      expect(result).toBe(4);
    });

    it('Word: ptilopaedes', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('ptilopaedes');
      expect(result).toBe(4);
    });

    it('Word: ptilopaedic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('ptilopaedic');
      expect(result).toBe(4);
    });

    it('Word: quaere', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('quaere');
      expect(result).toBe(2);
    });

    it('Word: quaeres', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('quaeres');
      expect(result).toBe(2);
    });

    it('Word: quaestor', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('quaestor');
      expect(result).toBe(2);
    });

    it('Word: Rafael', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Rafael');
      expect(result).toBe(3);
    });

    it('Word: Raphael', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Raphael');
      expect(result).toBe(3);
    });

    // it('Word: raphaelesque', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('raphaelesque');
    //   expect(result).toBe(4);
    // });

    // it('Word: esque', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('esque');
    //   expect(result).toBe(1);
    // });

    it('Word: Rhaetian', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Rhaetian');
      expect(result).toBe(2);
    });

    it('Word: Sabaean', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Sabaean');
      expect(result).toBe(3);
    });

    it('Word: sabaeanism', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('sabaeanism');
      expect(result).toBe(4);
    });

    it('Word: scarabaeus', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('scarabaeus');
      expect(result).toBe(4);
    });

    it('Word: scarabaei', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('scarabaei');
      expect(result).toBe(4);
    });

    it('Word: sphaerella', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('sphaerella');
      expect(result).toBe(3);
    });

    // it('Word: subaerial', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('subaerial');
    //   expect(result).toBe(4);
    // });

    it('Word: tael', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('tael');
      expect(result).toBe(1);
    });

    it('Word: uraei', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('uraei');
      expect(result).toBe(3);
    });

    it('Word: usquabae', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('usquabae');
      expect(result).toBe(3);
    });

    // it('Word: villaette', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('villaette');
    //   expect(result).toBe(2);
    // });

    it('Word: vistaed', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('vistaed');
      expect(result).toBe(2);
    });
  });

  describe('Words with ai vowel combinations', () => {
    it('Word: abaisse', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('abaisse');
      expect(result).toBe(2);
    });

    it('Word: abigail', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('abigail');
      expect(result).toBe(3);
    });

    it('Word: abraid', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('abraid');
      expect(result).toBe(2);
    });

    it('Word: abstain', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('abstain');
      expect(result).toBe(2);
    });

    it('Word: acclaim', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('acclaim');
      expect(result).toBe(2);
    });

    it('Word: achakzai', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('achakzai');
      expect(result).toBe(3);
    });

    it('Word: adai', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('adai');
      expect(result).toBe(2);
    });

    // it('Word: adaize', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('adaize');
    //   expect(result).toBe(2);
    // });

    it('Word: Adelaide', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Adelaide');
      expect(result).toBe(3);
    });

    it('Word: again', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('again');
      expect(result).toBe(2);
    });

    it('Word: agelaius', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('agelaius');
      expect(result).toBe(4);
    });

    it('Word: Aglaia', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Aglaia');
      expect(result).toBe(3);
    });

    it('Word: agpaite', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('agpaite');
      expect(result).toBe(3);
    });

    it('Word: agpaitic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('agpaitic');
      expect(result).toBe(4);
    });

    it('Word: ahaaina', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('ahaaina');
      expect(result).toBe(4);
    });

    it('Word: aiblins', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aiblins');
      expect(result).toBe(2);
    });

    // it('Word: aichmophobia', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aichmophobia');
    //   expect(result).toBe(5);
    // });

    it('Word: aid', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aid');
      expect(result).toBe(1);
    });

    it('Word: aide', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aide');
      expect(result).toBe(1);
    });

    it('Word: aided', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aided');
      expect(result).toBe(2);
    });

    // it('Word: aiguille', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aiguille');
    //   expect(result).toBe(2);
    // });

    // it('Word: aiguillesque', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aiguillesque');
    //   expect(result).toBe(3);
    // });

    // it('Word: aiguillette', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aiguillette');
    //   expect(result).toBe(3);
    // });

    it('Word: aikinite', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aikinite');
      expect(result).toBe(3);
    });

    // it('Word: aioli', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aioli');
    //   expect(result).toBe(3);
    // });

    it('Word: aitch', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aitch');
      expect(result).toBe(1);
    });

    it('Word: aitches', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aitches');
      expect(result).toBe(2);
    });

    it('Word: alaite', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('alaite');
      expect(result).toBe(3);
    });

    it('Word: Alcaic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Alcaic');
      expect(result).toBe(3);
    });

    // it('Word: alcaide', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('alcaide');
    //   expect(result).toBe(3);
    // });

    it('Word: algebraic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('algebraic');
      expect(result).toBe(4);
    });

    it('Word: algebraical', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('algebraical');
      expect(result).toBe(5);
    });

    it('Word: algebraically', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('algebraically');
      expect(result).toBe(6);
    });

    // it('Word: algebraization', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('algebraization');
    //   expect(result).toBe(6);
    // });

    it('Word: algebraize', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('algebraize');
      expect(result).toBe(4);
    });

    it('Word: algebraized', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('algebraized');
      expect(result).toBe(4);
    });

    it('Word: algebraizing', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('algebraizing');
      expect(result).toBe(5);
    });

    // it('Word: antiaircraft', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('antiaircraft');
    //   expect(result).toBe(4);
    // });

    it('Word: apotropaism', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('apotropaism');
      expect(result).toBe(5);
    });

    it('Word: appraise', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('appraise');
      expect(result).toBe(2);
    });

    it('Word: appraises', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('appraises');
      expect(result).toBe(3);
    });

    it('Word: araise', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('araise');
      expect(result).toBe(2);
    });

    it('Word: araises', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('araises');
      expect(result).toBe(3);
    });

    it('Word: arakawaite', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('arakawaite');
      expect(result).toBe(5);
    });

    it('Word: azerbaijanese', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('azerbaijanese');
      expect(result).toBe(5);
    });

    // it('Word: Baianism', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Baianism');
    //   expect(result).toBe(3);
    // });

    it('Word: balalaika', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('balalaika');
      expect(result).toBe(4);
    });

    // it('Word: billionaire', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('billionaire');
    //   expect(result).toBe(3);
    // });

    it('Word: bohairic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('bohairic');
      expect(result).toBe(3);
    });

    it('Word: bonailie', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('bonailie');
      expect(result).toBe(3);
    });

    it('Word: braid', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('braid');
      expect(result).toBe(1);
    });

    // it('Word: Braille', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Braille');
    //   expect(result).toBe(1);
    // });

    // it('Word: Brailled', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Brailled');
    //   expect(result).toBe(1);
    // });

    it('Word: capercaillie', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('capercaillie');
      expect(result).toBe(4);
    });

    it('Word: capillaire', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('capillaire');
      expect(result).toBe(3);
    });

    it('Word: caraibe', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('caraibe');
      expect(result).toBe(2);
    });

    it('Word: cataian', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('cataian');
      expect(result).toBe(3);
    });

    it('Word: claik', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('claik');
      expect(result).toBe(1);
    });

    it('Word: claim', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('claim');
      expect(result).toBe(1);
    });

    // it('Word: coaita', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('coaita');
    //   expect(result).toBe(3);
    // });

    it('Word: Cordaites', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Cordaites');
      expect(result).toBe(3);
    });

    it('Word: dadaism', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('dadaism');
      expect(result).toBe(3);
    });

    it('Word: dadaistic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('dadaistic');
      expect(result).toBe(4);
    });

    it('Word: eucaine', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('eucaine');
      expect(result).toBe(2);
    });

    it('Word: eucairite', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('eucairite');
      expect(result).toBe(3);
    });

    it('Word: eurylaimi', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('eurylaimi');
      expect(result).toBe(4);
    });

    it('Word: extramorainal', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('extramorainal');
      expect(result).toBe(5);
    });

    it('Word: exclaim', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('eucaine');
      expect(result).toBe(2);
    });

    it('Word: faience', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('faience');
      expect(result).toBe(2);
    });

    it('Word: failance', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('failance');
      expect(result).toBe(2);
    });

    // it('Word: faille', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('faille');
    //   expect(result).toBe(1);
    // });

    // it('Word: fainaigue', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('fainaigue');
    //   expect(result).toBe(2);
    // });

    it('Word: faineance', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('faineance');
      expect(result).toBe(3);
    });

    // it('Word: faineancy', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('faineancy');
    //   expect(result).toBe(4);
    // });

    // it('Word: faineants', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('faineants');
    //   expect(result).toBe(3);
    // });

    it('Word: formulaic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('formulaic');
      expect(result).toBe(4);
    });

    it('Word: formulaically', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('formulaically');
      expect(result).toBe(6);
    });

    it('Word: fraik', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('fraik');
      expect(result).toBe(1);
    });

    it('Word: Gaia', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Gaia');
      expect(result).toBe(2);
    });

    it('Word: gaiassa', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('gaiassa');
      expect(result).toBe(3);
    });

    it('Word: gabbai', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('gabbai');
      expect(result).toBe(2);
    });

    it('Word: gaieties', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('gaieties');
      expect(result).toBe(3);
    });

    it('Word: Galbraith', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Galbraith');
      expect(result).toBe(2);
    });

    // it('Word: galbraithian', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('galbraithian');
    //   expect(result).toBe(4);
    // });

    it('Word: gervais', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('gervais');
      expect(result).toBe(2);
    });

    it('Word: ghaist', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('ghaist');
      expect(result).toBe(1);
    });

    it('Word: graith', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('graith');
      expect(result).toBe(1);
    });

    it('Word: habutai', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('habutai');
      expect(result).toBe(3);
    });

    it('Word: haiari', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('haiari');
      expect(result).toBe(3);
    });

    it('Word: haiathalah', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('haiathalah');
      expect(result).toBe(4);
    });

    it('Word: haiku', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('haiku');
      expect(result).toBe(2);
    });

    it('Word: hainai', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('hainai');
      expect(result).toBe(2);
    });

    it('Word: havaiki', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('havaiki');
      expect(result).toBe(3);
    });

    // it('Word: havaikian', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('havaikian');
    //   expect(result).toBe(4);
    // });

    it('Word: Hebraic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Hebraic');
      expect(result).toBe(3);
    });

    it('Word: hebraica', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('hebraica');
      expect(result).toBe(4);
    });

    it('Word: Hebraically', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Hebraically');
      expect(result).toBe(5);
    });

    it('Word: Hebraization', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Hebraization');
      expect(result).toBe(5);
    });

    it('Word: Hebraize', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Hebraize');
      expect(result).toBe(3);
    });

    it('Word: Hebraizer', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Hebraizer');
      expect(result).toBe(4);
    });

    it('Word: hennaing', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('hennaing');
      expect(result).toBe(3);
    });

    it('Word: hydroairplane', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('hydroairplane');
      expect(result).toBe(4);
    });

    it('Word: interavailability', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('interavailability');
      expect(result).toBe(8);
    });

    it('Word: praise', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('praise');
      expect(result).toBe(1);
    });

    it('Word: praises', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('praises');
      expect(result).toBe(2);
    });

    it('Word: raise', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('raise');
      expect(result).toBe(1);
    });

    it('Word: raises', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('raises');
      expect(result).toBe(2);
    });

    it('Word: said', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('said');
      expect(result).toBe(1);
    });

    it('Word: stain', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('stain');
      expect(result).toBe(1);
    });

    it('Word: waiter', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('waiter');
      expect(result).toBe(2);
    });
  });

  describe('ee', () => {
    it('Word: breeze', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('breeze');
      expect(result).toBe(1);
    });
  });

  describe('Words with trailing suffixes after a vowel: ', () => {
    it('Word: agpaite', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('agpaite');
      expect(result).toBe(3);
    });

    it('Word: agpaitic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('agpaitic');
      expect(result).toBe(4);
    });

    it('Word: virtuous', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('virtuous');
      expect(result).toBe(3);
    });

    it('Word: haecceity', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('haecceity');
      expect(result).toBe(4);
    });

    it('Word: paraaminobenzoic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('paraaminobenzoic');
      expect(result).toBe(8);
    });

    it('Word: stoic', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('stoic');
      expect(result).toBe(2);
    });
  });

  describe('Problematic Words', () => {
      // it('Word: aioli', () => {
      //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aioli');
      //   expect(result).toBe(3);
      // });

  //   it('Word: abovesaid', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('abovesaid');
  //     expect(result).toBe(3);
  //   });

      // // e is not silent ending
      // it('Word: alcaide', () => {
      //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('alcaide');
      //   expect(result).toBe(3);
      // });

    // it('Word: algebraization', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('algebraization');
    //   expect(result).toBe(6);
    // });

    // it('Word: antiaircraft', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('antiaircraft');
    //   expect(result).toBe(4);
    // });

    // it('Word: Baianism', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Baianism');
    //   expect(result).toBe(3);
    // });

  //   it('Word: gabriella', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('gabriella');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: clique', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('clique');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: coach', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('coach');
  //     expect(result).toBe(1);
  //   });

  //   it('Word: villette', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('villette');
  //     expect(result).toBe(2);
  //   });

  //   it('Word: Caribbean', () => {
  //     const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Caribbean');
  //     expect(result).toBe(4);
  //   });

  //   it('Word: acrasieae', () => {
  //     const result = Syllable
  //     DictionaryService.countSyllablesByCountingKeyVowels2('acrasieae');
  //     expect(result).toBe(5);
  //   });

  //   it('Word: tetraamylose', () => {
  //     const result = Syllable
  //     DictionaryService.countSyllablesByCountingKeyVowels2('tetraamylose');
  //     expect(result).toBe(5);
  //   });

      // // silent ize ending
      // it('Word: adaize', () => {
      //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('adaize');
      //   expect(result).toBe(2);
      // });

      // // silent ille ending
      // it('Word: aiguille', () => {
      //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aiguille');
      //   expect(result).toBe(2);
      // });

    // it('Word: Braille', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('Braille');
    //   expect(result).toBe(1);
    // });

      // // silent esque ending
    // it('Word: aiguillesque', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aiguillesque');
    //   expect(result).toBe(3);
    // });

    // // silent ette ending
    // it('Word: aiguillette', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('aiguillette');
    //   expect(result).toBe(3);
    // });

    // it('Word: ache', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('ache');
    //   expect(result).toBe(1);
    // });

    // it('Word: coaita', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('coaita');
    //   expect(result).toBe(3);
    // });

    // it('Word: eudaemonia', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('eudaemonia');
    //   expect(result).toBe(5);
    // });

    // it('Word: faience', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('faience');
    //   expect(result).toBe(2);
    // });

    // it('Word: fainaigue', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('fainaigue');
    //   expect(result).toBe(2);
    // });

    // it('Word: faineants', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('faineants');
    //   expect(result).toBe(3);
    // });

    // it('Word: faineancy', () => {
    //   const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('faineancy');
    //   expect(result).toBe(4);
    // });

    it('Word: challenge', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('challenge');
      expect(result).toBe(2);
    });

    it('Word: champagne', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('champagne');
      expect(result).toBe(2);
    });

    it('Word: beach', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('beach');
      expect(result).toBe(1);
    });

    it('Word: beaches', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('beaches');
      expect(result).toBe(2);
    });

    it('Word: peach', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('peach');
      expect(result).toBe(1);
    });

    it('Word: peaches', () => {
      const result = SyllableDictionaryService.countSyllablesByCountingKeyVowels2('peaches');
      expect(result).toBe(2);
    });
  });
});
