// Ajouts aux classements : marques existantes dans de nouvelles pièces et nouvelles maisons.
// A(pièce, budget, rang, marque, commentaire)
const A = (id, budget, rang, nom, note) => {
  const v = VETEMENTS.find((x) => x.id === id);
  if (!v) throw new Error("Pièce inconnue : " + id);
  const liste = (v.tiers[budget][rang] ||= []);
  if (!liste.some(([n]) => n === nom)) liste.push([nom, note]);
};

// ---------- Hauts ----------
A("tshirt", "petit", "A", "Hanes", "Lots de t-shirts épais (Beefy-T) à très petit prix");
A("tshirt", "petit", "B", "Gap", "Basiques corrects en promotion");
A("tshirt", "petit", "C", "Fruit of the Loom", "Coton fin qui se déforme vite");
A("tshirt", "moyen", "A", "Patagonia", "Coton bio et recyclé, durable");
A("tshirt", "moyen", "A", "Velva Sheen", "Coton épais au style américain vintage");
A("tshirt", "moyen", "A", "Sunspel", "Les modèles d'entrée de gamme restent excellents");
A("tshirt", "premium", "A", "Our Legacy", "Coupes originales, bon coton");
A("tshirt", "premium", "C", "Valentino", "T-shirt basique vendu au prix du luxe");

A("polo", "moyen", "A", "Hackett", "Polos en piqué solides, style anglais");
A("polo", "moyen", "A", "Brooks Brothers", "Polo classique américain, correct en promotion");
A("polo", "moyen", "B", "Benetton", "Couleurs vives, qualité correcte");
A("polo", "premium", "B", "Paul Smith", "Bonne qualité, prix élevé");

A("debardeur", "petit", "A", "Hanes", "Débardeurs côtelés en lot, bon rapport qualité-prix");
A("debardeur", "petit", "B", "Jockey", "Classique confortable");

A("chemise", "petit", "B", "Gap", "Oxford correct en promotion");
A("chemise", "moyen", "A", "Brooks Brothers", "L'inventeur de l'Oxford à col boutonné en prêt-à-porter");
A("chemise", "moyen", "A", "J.Crew", "Oxford et chambray solides");
A("chemise", "moyen", "B", "Olymp", "Pratique, mais traitements sans repassage");
A("chemise", "premium", "A", "Van Laack", "Chemisier allemand haut de gamme");
A("chemise", "premium", "A", "De Bonne Facture", "Chemises fabriquées en France");
A("chemise", "premium", "B", "Paul Smith", "Belle chemise, prix élevé");

A("surchemise", "moyen", "S", "Arpenteur", "Vestes de travail françaises très bien faites");
A("surchemise", "premium", "A", "De Bonne Facture", "Surchemises en laine fabriquées en France");

A("pull", "petit", "A", "Benetton", "Pulls en laine d'agneau colorés à prix doux");
A("pull", "petit", "B", "Gap", "Correct, beaucoup de mélanges");
A("pull", "moyen", "A", "Kujten", "Cachemire doux et coloré");
A("pull", "moyen", "A", "J.Crew", "Mailles en mérinos et cachemire correctes");
A("pull", "premium", "S", "Andersen-Andersen", "Pulls marins en mérinos quasi indestructibles");
A("pull", "premium", "A", "De Bonne Facture", "Mailles fabriquées en France");
A("pull", "premium", "B", "Paul Smith", "Joli, prix élevé");

A("sweat", "petit", "B", "Gap", "Sweats à logo corrects");
A("sweat", "petit", "C", "Fruit of the Loom", "Molleton fin");
A("sweat", "moyen", "A", "Velva Sheen", "Molleton épais fabriqué aux États-Unis");
A("sweat", "moyen", "B", "Abercrombie & Fitch", "Confortable, prix élevé");

A("blouse", "moyen", "A", "Balzac Paris", "Blouses rétro en petites séries");
A("blouse", "moyen", "A", "Soeur", "Belles matières et coupes durables");
A("blouse", "moyen", "B", "Kookaï", "Mode, matières souvent synthétiques");
A("blouse", "petit", "B", "Naf Naf", "Prix bas, tenue moyenne");
A("blouse", "premium", "B", "Marni", "Créatif, prix élevé");

// ---------- Bas ----------
A("jean", "petit", "B", "Gap", "Coupes correctes, stretch fréquent");
A("jean", "moyen", "A", "Abercrombie & Fitch", "Jeans bien coupés, prix élevé");
A("jean", "premium", "A", "Rogue Territory", "Selvedge japonais fabriqué à Los Angeles");

A("chino", "petit", "B", "Gap", "Chino honnête en promotion");
A("chino", "moyen", "A", "J.Crew", "Chinos classiques bien coupés");
A("chino", "moyen", "A", "Brooks Brothers", "Chino américain classique");
A("chino", "moyen", "A", "Arpenteur", "Pantalons de travail français");

A("pantalon", "premium", "A", "Paul Smith", "Pantalons de tailleur soignés");
A("pantalon", "premium", "A", "Giorgio Armani", "Tombé fluide et élégant");
A("pantalon", "premium", "A", "Isaia", "Laines napolitaines de qualité");

A("short", "petit", "B", "Gap", "Basique");
A("short", "moyen", "A", "J.Crew", "Shorts chinos solides");

A("jogging", "petit", "B", "Gap", "Molleton correct");

// ---------- Robes & jupes ----------
A("robe", "moyen", "A", "Balzac Paris", "Robes rétro en petites séries");
A("robe", "moyen", "S", "Soeur", "Robes élégantes en belles matières");
A("robe", "moyen", "B", "Kookaï", "Mode, matières souvent synthétiques");
A("robe", "petit", "B", "Naf Naf", "Prix bas, tenue moyenne");
A("robe", "premium", "B", "Marni", "Créatif, prix élevé");
A("robe", "premium", "C", "Valentino", "Prix de couture pour du prêt-à-porter");

A("jupe", "moyen", "A", "Soeur", "Jupes bien coupées");
A("jupe", "moyen", "A", "Balzac Paris", "Style rétro réussi");
A("jupe", "moyen", "B", "Kookaï", "Mode");

// ---------- Vestes & manteaux ----------
A("costume", "moyen", "A", "Tagliatore", "Vestes italiennes au style affirmé");
A("costume", "moyen", "A", "Brooks Brothers", "Costumes classiques américains");
A("costume", "premium", "S", "Isaia", "Construction napolitaine exceptionnelle");
A("costume", "premium", "A", "Husbands", "Tailleur parisien élégant");
A("costume", "premium", "A", "De Bonne Facture", "Vestes fabriquées en France");
A("costume", "premium", "A", "Paul Smith", "Tailoring anglais de qualité");
A("costume", "premium", "B", "Giorgio Armani", "Élégant, mais très cher");

A("manteau", "premium", "A", "Mackage", "Manteaux élégants, prix élevé");
A("manteau", "premium", "A", "Giorgio Armani", "Manteaux souples et élégants");

A("trench", "petit", "A", "Guy Cotten", "Le ciré breton, réellement imperméable");
A("trench", "moyen", "S", "Guy Cotten", "Ciré Glentop quasi indestructible");
A("trench", "moyen", "A", "Petit Bateau", "Cirés en coton enduit iconiques");
A("trench", "moyen", "A", "Saint James", "Cirés marins solides");

A("doudoune", "petit", "B", "Jott", "Doudounes légères, isolation modeste");
A("doudoune", "moyen", "A", "Rossignol", "Doudounes de ski techniques");
A("doudoune", "moyen", "B", "Jott", "Pratique et légère, pas pour le grand froid");
A("doudoune", "premium", "A", "Mackage", "Élégantes et chaudes, prix élevé");
A("doudoune", "premium", "B", "Peuterey", "Style italien, prix élevé");

A("blouson", "moyen", "A", "Arpenteur", "Vestes de travail françaises");
A("blouson", "moyen", "B", "Gap", "Vestes en jean correctes");
A("blouson", "premium", "A", "Rogue Territory", "Vestes en denim japonais");

A("polaire", "moyen", "A", "Rossignol", "Polaires techniques de qualité");

// ---------- Dessous & nuit ----------
A("calecon", "petit", "A", "Jockey", "Confortables et durables pour le prix");
A("calecon", "petit", "B", "Hanes", "Lots bon marché");
A("calecon", "petit", "C", "Fruit of the Loom", "Se détendent vite");
A("calecon", "moyen", "B", "Björn Borg", "Confortable, prix moyen-haut");

A("lingerie", "petit", "A", "Playtex", "Maintien correct à petit prix");
A("lingerie", "moyen", "A", "Triumph", "Bon maintien et nombreuses tailles");

A("chaussettes", "moyen", "A", "Bombas", "Très confortables, une paire donnée pour une achetée");
A("chaussettes", "petit", "B", "Hanes", "Lots bon marché");

A("maillot", "petit", "A", "TYR", "Maillots de natation résistants");
A("maillot", "moyen", "A", "Rip Curl", "Boardshorts techniques");
A("maillot", "moyen", "B", "Billabong", "Boardshorts, qualité variable");

// ---------- Sport ----------
A("sport", "moyen", "A", "Craft", "Sous-couches et vêtements techniques fiables");
A("sport", "moyen", "B", "Björn Borg", "Vêtements de sport corrects");

// ---------- Chaussures ----------
A("baskets", "petit", "A", "Superga", "La 2750 en toile, classique abordable");
A("baskets", "petit", "B", "Bensimon", "Tennis simple et colorée");
A("baskets", "moyen", "A", "Onitsuka Tiger", "Mexico 66, classique élégant");
A("baskets", "moyen", "B", "Camper", "Design original, semelles collées");
A("baskets", "moyen", "B", "Ecco", "Confort, style sage");
A("baskets", "premium", "C", "Valentino", "Prix extrême pour la construction");
A("baskets", "premium", "C", "Christian Louboutin", "Prix du nom");

A("running", "moyen", "A", "Merrell", "Trail confortable et robuste");

A("ville", "moyen", "S", "Finsbury", "Goodyear français à prix doux");
A("ville", "moyen", "B", "Ecco", "Confortable, mais collé");
A("ville", "moyen", "B", "Geox", "Confort, semelles collées");
A("ville", "premium", "S", "Gaziano & Girling", "Parmi les plus beaux souliers au monde");
A("ville", "premium", "B", "Salvatore Ferragamo", "Bien fait mais cher");

A("boots", "moyen", "A", "Merrell", "Chaussures de randonnée confortables");
A("boots", "moyen", "B", "Pataugas", "Classique français, collé");
A("boots", "moyen", "A", "Keen", "Robustes pour la randonnée");

A("sandales", "moyen", "A", "Keen", "Sandales outdoor protectrices");
A("sandales", "moyen", "B", "Camper", "Design, confort");
A("sandales", "moyen", "B", "Geox", "Confort");

// ---------- Accessoires ----------
A("echarpe", "moyen", "S", "Hestra", "Gants de ski et de ville d'excellente qualité");
A("echarpe", "premium", "A", "Maison Fabre", "Gants en agneau fabriqués à Millau");
A("echarpe", "moyen", "A", "Kujten", "Écharpes en cachemire");
A("echarpe", "petit", "A", "Benetton", "Bonnets et écharpes en laine abordables");

A("ceinture", "petit", "B", "Fossil", "Cuir correct pour le prix");
A("ceinture", "premium", "B", "Salvatore Ferragamo", "Ceinture à boucle Gancini, prix du nom");

A("cravate", "moyen", "A", "Brooks Brothers", "Cravates en soie rayées classiques");
A("cravate", "premium", "A", "Paul Smith", "Cravates colorées de qualité");

A("sac", "moyen", "A", "Jérôme Dreyfuss", "Sacs souples en beaux cuirs");
A("sac", "moyen", "A", "Samsonite", "Valises fiables et garanties");
A("sac", "moyen", "B", "Lancaster", "Correct pour le prix");
A("sac", "moyen", "B", "Kate Spade", "Couleurs, qualité moyenne");
A("sac", "moyen", "B", "Fossil", "Maroquinerie accessible");
A("sac", "premium", "S", "Rimowa", "Valises en aluminium quasi éternelles");
A("sac", "premium", "A", "Tumi", "Sacs et valises très robustes");
A("sac", "premium", "B", "Marc Jacobs", "The Tote Bag, prix du nom");
