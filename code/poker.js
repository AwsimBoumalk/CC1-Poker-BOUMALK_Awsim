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

  return Math.max(...main.map(carte => carte.valeur));
}

module.exports = { calculerScoreMain };
