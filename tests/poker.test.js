const { test } = require('node:test');
const assert = require('node:assert/strict');
const { calculerScoreMain } = require('../code/poker');

test('un brelan rapporte 30 points', () => {
  const main = [
    { valeur: 8, enseigne: 'trèfle' },
    { valeur: 8, enseigne: 'carreau' },
    { valeur: 8, enseigne: 'coeur' },
    { valeur: 3, enseigne: 'pique' },
    { valeur: 9, enseigne: 'pique' },
  ];

  assert.equal(calculerScoreMain(main), 30);
});

test('pas de combinaison donc la main rapporte la valeur de sa carte la plus forte', () => {
  const main = [
    { valeur: 3, enseigne: 'coeur' },
    { valeur: 6, enseigne: 'carreau' },
    { valeur: 8, enseigne: 'trèfle' },
    { valeur: 10, enseigne: 'pique' },
    { valeur: 13, enseigne: 'coeur' },
  ];

  assert.equal(calculerScoreMain(main), 13);
});

test('une suite rapporte 40 points', () => {
  const main = [
    { valeur: 5, enseigne: 'coeur' },
    { valeur: 6, enseigne: 'carreau' },
    { valeur: 7, enseigne: 'trèfle' },
    { valeur: 8, enseigne: 'pique' },
    { valeur: 9, enseigne: 'coeur' },
  ];

  assert.equal(calculerScoreMain(main), 40);
});

test('as, 2, 3, 4 et 5 nest pas une suite', () => {
  const main = [
    { valeur: 14, enseigne: 'coeur' },
    { valeur: 2, enseigne: 'carreau' },
    { valeur: 3, enseigne: 'trèfle' },
    { valeur: 4, enseigne: 'pique' },
    { valeur: 5, enseigne: 'coeur' },
  ];

  assert.equal(calculerScoreMain(main), 14);
});

test('une couleur rapporte 45 points', () => {
  const main = [
    { valeur: 2, enseigne: 'coeur' },
    { valeur: 5, enseigne: 'coeur' },
    { valeur: 8, enseigne: 'coeur' },
    { valeur: 10, enseigne: 'coeur' },
    { valeur: 13, enseigne: 'coeur' },
  ];

  assert.equal(calculerScoreMain(main), 45);
});

test('un carré rapporte 60 points', () => {
  const main = [
    { valeur: 2, enseigne: 'coeur' },
    { valeur: 2, enseigne: 'carreau' },
    { valeur: 2, enseigne: 'trèfle' },
    { valeur: 2, enseigne: 'pique' },
    { valeur: 3, enseigne: 'coeur' },
  ];

  assert.equal(calculerScoreMain(main), 60);
});
