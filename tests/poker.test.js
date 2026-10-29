const { test } = require('node:test');
const assert = require('node:assert/strict');
const { calculerScoreMain } = require('../code/poker');

test('un brelan rapporte 30 points', () => {
  const main = [
    { valeur: 8, couleur: 'trèfle' },
    { valeur: 8, couleur: 'carreau' },
    { valeur: 8, couleur: 'coeur' },
    { valeur: 3, couleur: 'pique' },
    { valeur: 9, couleur: 'pique' },
  ];

  assert.equal(calculerScoreMain(main), 30);
});

test('pas de combinaison donc la main rapporte la valeur de sa carte la plus forte', () => {
  const main = [
    { valeur: 3, couleur: 'coeur' },
    { valeur: 6, couleur: 'carreau' },
    { valeur: 8, couleur: 'trèfle' },
    { valeur: 10, couleur: 'pique' },
    { valeur: 13, couleur: 'coeur' },
  ];

  assert.equal(calculerScoreMain(main), 13);
});

test('une suite rapporte 40 points', () => {
  const main = [
    { valeur: 5, couleur: 'coeur' },
    { valeur: 6, couleur: 'carreau' },
    { valeur: 7, couleur: 'trèfle' },
    { valeur: 8, couleur: 'pique' },
    { valeur: 9, couleur: 'coeur' },
  ];

  assert.equal(calculerScoreMain(main), 40);
});

test('as, 2, 3, 4 et 5 nest pas une suite', () => {
  const main = [
    { valeur: 14, couleur: 'coeur' },
    { valeur: 2, couleur: 'carreau' },
    { valeur: 3, couleur: 'trèfle' },
    { valeur: 4, couleur: 'pique' },
    { valeur: 5, couleur: 'coeur' },
  ];

  assert.equal(calculerScoreMain(main), 14);
});
