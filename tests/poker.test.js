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
