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
