# Bien Vêtu

Guide d'achat de vêtements : matières conseillées pour chaque pièce (et pourquoi), tier lists de marques par budget, fiches détaillées des maisons et des matières, lexique.

Site statique hébergé sur GitHub Pages : https://ede800.github.io/conseil-vetements/

## Organisation

- `app.js`, `style.css` : application (navigation par `#/…`) et styles
- `data/` : tout le contenu
  - `base.js` : budgets, familles de pièces, bibliothèque des sources
  - `v-*.js` : les pièces (matières, conseils, tier lists par budget)
  - `marques-*.js` : notes des maisons sur 5 critères et avis
  - `infos-*.js` : carte d'identité des maisons (fondation, siège, groupe, qualité, conseil, site)
  - `histoires-*.js` : récits détaillés et dates clés
  - `matieres.js`, `matieres-fiches.js` : guide et fiches des matières
  - `logos.js` : liste des logos disponibles (généré)
- `logos/` : icônes officielles (128 px) et miniatures `logos/64/` (WebP, générées)
- `outils/` : script de construction, gabarit HTML et ordre des scripts

## Construire le site

Après toute modification de `app.js`, `style.css` ou `data/`, lancer :

```
node outils/build.js
```

Le script (dépendances : `esbuild`, `jsdom`, `sharp`) :

1. regroupe et compresse le JavaScript (`site.min.js`) et le CSS (`style.min.css`) ;
2. crée les miniatures des logos ;
3. régénère `index.html` et une page HTML par maison, matière et pièce (`maison/…/`, `matiere/…/`, `vetement/…/`), avec titre, description, données structurées et contenu lisible sans JavaScript ;
4. écrit `sitemap.xml` et `robots.txt`.

Les fichiers générés doivent être commités : GitHub Pages sert le dépôt tel quel.
