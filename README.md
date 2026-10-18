# Bien Vêtu

Guide d'achat de vêtements : matières conseillées pour chaque pièce (et pourquoi), tier lists de marques par budget, fiches détaillées des maisons, guide des matières et lexique.

Site statique (HTML/CSS/JS, sans dépendance), hébergé sur GitHub Pages : https://ede800.github.io/conseil-vetements/

## Modifier le contenu

Tout le contenu se trouve dans `data/` :

- `base.js` : budgets, familles de pièces, bibliothèque des sources
- `v-*.js` : les pièces (matières, conseils, tier lists par budget, sources)
- `marques-*.js` : fiches des maisons (pays, gamme, notes sur 5 critères, avis)
- `matieres.js` : guide des matières

Une marque citée dans une tier list devient cliquable dès qu'elle a une fiche dans `marques-*.js` (ou un alias dans `ALIAS`).

## Tester en local

Ouvrir `index.html` dans un navigateur.
