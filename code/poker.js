function calculerScoreMain(main) {
  const comptesParValeur = new Map();

  for (const carte of main) {
    const compte = comptesParValeur.get(carte.valeur) || 0;
    comptesParValeur.set(carte.valeur, compte + 1);
  }

  for (const compte of comptesParValeur.values()) {
    if (compte === 3) {
      return 30;
    }
  }

  const valeurs = main.map(carte => carte.valeur).sort((a, b) => a - b);
  const suite = valeurs.every((valeur, index) => {
    return index === 0 || valeur === valeurs[index - 1] + 1;
  });

  if (suite) {
    return 40;
  }

  return Math.max(...main.map(carte => carte.valeur));
}

module.exports = { calculerScoreMain };
