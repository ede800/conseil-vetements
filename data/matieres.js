// Guide des matières. note : intérêt global sur 5 pour l'habillement.
// Familles : vegetale, animale, artificielle, synthetique, cuir, etoffe

const FAMILLES_MATIERES = [
  { id: "vegetale", nom: "Fibres végétales" },
  { id: "animale", nom: "Fibres animales" },
  { id: "artificielle", nom: "Fibres artificielles" },
  { id: "synthetique", nom: "Fibres synthétiques" },
  { id: "cuir", nom: "Cuirs & peaux" },
  { id: "etoffe", nom: "Étoffes & tissages" }
];

const MATIERES = [];
const MAT = (famille, nom, note, bref, plus, moins, usage, entretien, sources) =>
  MATIERES.push({ famille, nom, note, bref, plus, moins, usage, entretien, sources });

// ---------- Fibres végétales ----------
MAT("vegetale", "Coton", 4, "La fibre la plus utilisée au monde, issue de la capsule du cotonnier.", "Doux, respirant, absorbant, hypoallergénique, facile à laver", "Sèche lentement, froisse, culture très gourmande en eau et en pesticides (hors bio)", "T-shirts, chemises, jeans, chinos, sous-vêtements", "Machine 30–40 °C, éviter le sèche-linge qui le fait rétrécir", ["coton", "cottoninc"]);
MAT("vegetale", "Coton biologique", 4, "Coton cultivé sans pesticides ni engrais de synthèse.", "Même confort que le coton, moins d'impact sur les sols et la santé des cultivateurs", "Rendement plus faible, prix un peu plus élevé", "Tous les vêtements en coton", "Comme le coton", ["coton", "gots"]);
MAT("vegetale", "Coton à fibres longues (Supima, Pima, égyptien, Sea Island)", 5, "Variétés de coton aux fibres plus longues que la moyenne (plus de 3,5 cm).", "Fil plus fin, plus solide et plus doux ; bouloche moins ; couleurs plus vives", "Plus cher ; les appellations sont parfois utilisées abusivement", "T-shirts, polos et chemises haut de gamme", "Comme le coton, de préférence à 30 °C", ["supima", "pima", "egyptien", "sea_island", "supima_org"]);
MAT("vegetale", "Coton recyclé", 3, "Coton issu de vêtements ou de chutes de tissu recyclés.", "Évite la culture de nouveau coton", "Fibres raccourcies par le recyclage : souvent mélangé à du coton neuf ou du polyester", "Sweats, jeans, t-shirts", "Comme le coton", ["coton", "refashion"]);
MAT("vegetale", "Lin", 5, "Fibre tirée de la tige du lin, cultivé surtout en France et en Belgique.", "Le plus frais de tous, très solide, sèche vite, culture peu gourmande en eau", "Froisse beaucoup, un peu rêche au début", "Chemises, pantalons, robes d'été, linge de maison", "Machine 30–40 °C, sécher sur cintre, repasser humide", ["lin"]);
MAT("vegetale", "Chanvre", 4, "Fibre tirée de la tige du chanvre, cousin robuste du lin.", "Très résistant, antibactérien, culture sans pesticides et peu d'eau", "Toucher rêche au départ, encore rare", "Pantalons, chemises, sacs", "Comme le lin", ["chanvre"]);
MAT("vegetale", "Ramie", 3, "Fibre d'une ortie asiatique, brillante et solide.", "Très résistante, fraîche, brillance naturelle", "Cassante aux plis, souvent mélangée", "Chemises et mélanges d'été", "Comme le lin", []);
MAT("vegetale", "Jute", 3, "Fibre grossière issue d'une plante tropicale.", "Robuste, bon marché, biodégradable", "Rêche, craint l'eau", "Semelles d'espadrilles, sacs", "Ne pas mouiller", ["espadrille"]);
MAT("vegetale", "Liège", 4, "Écorce du chêne-liège, récoltée sans abattre l'arbre.", "Léger, isolant, amortissant, prend la forme du pied", "Craint l'eau prolongée", "Semelles de sandales", "Protéger avec un vernis spécial liège", ["sandale"]);
MAT("vegetale", "Caoutchouc naturel", 4, "Latex de l'hévéa, transformé par vulcanisation.", "Imperméable, souple, résistant", "Craint les UV et la chaleur", "Semelles, bottes de pluie", "Nettoyer à l'eau, stocker à l'abri du soleil", ["caoutchouc"]);

// ---------- Fibres animales ----------
MAT("animale", "Laine", 5, "Toison du mouton, la fibre isolante par excellence.", "Chaude même humide, régule la température, absorbe l'humidité, anti-odeurs, se lave peu", "Peut gratter, sensible aux mites, lavage délicat", "Pulls, manteaux, costumes, chaussettes", "Programme laine à froid ou à la main, séchage à plat", ["laine", "woolmark", "iwto"]);
MAT("animale", "Laine mérinos", 5, "Laine très fine (moins de 24 microns) du mouton mérinos.", "Ne gratte pas, thermorégulatrice, anti-odeurs, polyvalente toute l'année", "Plus fragile que la laine classique, plus chère", "Pulls fins, t-shirts de voyage, sport, chaussettes", "Programme laine, séchage à plat", ["merinos", "merinos_en", "woolmark"]);
MAT("animale", "Lambswool (laine d'agneau)", 4, "Laine de la première tonte de l'agneau.", "Douce, gonflante et très chaude", "Bouloche un peu, plus délicate", "Pulls d'hiver, écharpes", "Lavage à la main, séchage à plat", ["laine"]);
MAT("animale", "Shetland", 4, "Laine des moutons des îles Shetland.", "Quasi indestructible, chaude, couleurs naturelles", "Gratte au début", "Pulls rustiques", "À la main, rarement", ["laine"]);
MAT("animale", "Cachemire", 4, "Duvet de la chèvre cachemire, peignée à la mue.", "Extrêmement doux, jusqu'à trois fois plus chaud que la laine à poids égal", "Fragile, bouloche, qualité très variable ; élevage intensif qui dégrade les steppes de Mongolie", "Pulls, écharpes, manteaux", "À la main à l'eau froide, séchage à plat, peigne anti-bouloches", ["cachemire", "pashmina"]);
MAT("animale", "Mohair", 3, "Poil de la chèvre angora.", "Brillant, léger, très chaud, résiste au froissement", "Peut piquer, pelucheux", "Pulls aériens, costumes d'été (mélangé)", "À la main", ["mohair"]);
MAT("animale", "Alpaga", 4, "Toison de l'alpaga, cousin du lama, dans les Andes.", "Plus chaud que la laine, doux, peu allergisant, bouloche peu", "Plus cher, se détend un peu", "Pulls, manteaux, écharpes", "À la main", ["alpaga"]);
MAT("animale", "Angora", 2, "Poil du lapin angora.", "Très doux et chaud", "Très fragile, sérieuses questions de bien-être animal", "Pulls (à éviter)", "À la main", []);
MAT("animale", "Poil de chameau", 4, "Duvet du chameau de Bactriane.", "Très chaud et léger, teinte naturelle", "Cher, délicat", "Manteaux classiques", "Nettoyage à sec", ["manteau"]);
MAT("animale", "Yak", 4, "Duvet du yak des hauts plateaux d'Asie.", "Aussi doux que le cachemire, plus résistant", "Rare, couleurs naturelles sombres", "Pulls, bonnets", "À la main", []);
MAT("animale", "Vigogne (vicuña)", 5, "La fibre animale la plus fine du monde, d'un camélidé sauvage des Andes.", "Douceur inégalée, très chaude", "Prix extrême (plusieurs milliers d'euros)", "Manteaux et écharpes de très grand luxe", "Nettoyage professionnel", []);
MAT("animale", "Soie", 4, "Filament produit par le ver à soie pour son cocon.", "Douce, légère, thermorégulatrice, éclat naturel", "Fragile, craint la transpiration et le soleil", "Chemisiers, cravates, lingerie, doublures", "À la main à froid, repasser à basse température", ["soie"]);
MAT("animale", "Duvet", 5, "Petits flocons sous les plumes d'oie ou de canard.", "Le meilleur isolant chaleur/poids", "Perd son pouvoir isolant mouillé ; vérifier le bien-être animal (RDS)", "Doudounes, couettes", "Lessive spéciale duvet, séchage avec balles de tennis", ["duvet", "fill_power", "rds"]);

// ---------- Fibres artificielles (cellulose) ----------
MAT("artificielle", "Viscose (rayonne)", 2, "Fibre fabriquée à partir de pulpe de bois dissoute chimiquement.", "Fluide, douce, agréable, bon marché", "Rétrécit, se déforme, faible solidité mouillée, procédé polluant", "Robes, blouses, doublures", "À froid, à la main ou en filet, séchage à plat", ["viscose"]);
MAT("artificielle", "Viscose certifiée (EcoVero)", 3, "Viscose produite avec un procédé et un bois mieux contrôlés.", "Même toucher que la viscose, impact réduit", "Mêmes faiblesses mécaniques", "Robes, blouses", "Comme la viscose", ["viscose"]);
MAT("artificielle", "Lyocell (Tencel)", 4, "Fibre de bois fabriquée en circuit fermé (le solvant est recyclé).", "Fluide, solide, très absorbant, procédé propre", "Peut boulocher, froisse un peu", "Chemises, robes, jeans, sous-vêtements", "Machine 30 °C", ["lyocell", "tencel"]);
MAT("artificielle", "Modal", 4, "Fibre de hêtre, version améliorée de la viscose.", "Très doux, absorbant, ne rétrécit pas", "Moins résistant que le coton", "Sous-vêtements, t-shirts, pyjamas", "Machine 30 °C", ["modal"]);
MAT("artificielle", "Cupro", 4, "Fibre issue des déchets de coton (linter).", "Soyeux, respirant, antistatique", "Fragile mouillé", "Doublures de costumes, robes", "À la main ou nettoyage à sec", []);
MAT("artificielle", "Acétate", 2, "Fibre de cellulose traitée, brillante.", "Brillant, drapé, bon marché", "Fragile, fond au fer chaud, ne respire pas bien", "Doublures, robes de soirée", "Nettoyage à sec", []);
MAT("artificielle", "« Bambou »", 2, "Le plus souvent, de la viscose fabriquée à partir de bambou.", "Doux et absorbant", "Argument écologique trompeur : le procédé est celui de la viscose", "Chaussettes, sous-vêtements", "Comme la viscose", ["viscose"]);

// ---------- Fibres synthétiques (pétrole) ----------
MAT("synthetique", "Polyester", 2, "La fibre synthétique la plus produite au monde, issue du pétrole.", "Très résistant, sèche vite, ne froisse pas, bon marché", "Ne respire pas, garde les odeurs, bouloche, libère des microplastiques", "Sport et technique uniquement", "Machine 30 °C, sac anti-microfibres", ["polyester", "microplastiques"]);
MAT("synthetique", "Polyester recyclé", 3, "Polyester fabriqué à partir de bouteilles ou de textiles recyclés.", "Mêmes performances, moins de pétrole neuf", "Libère toujours des microplastiques ; bouteilles retirées de leur propre filière de recyclage", "Polaires, sport, doublures", "Comme le polyester", ["polyester", "microplastiques"]);
MAT("synthetique", "Polyamide (nylon)", 3, "Fibre synthétique très résistante.", "Très solide, résiste à l'abrasion, léger, sèche vite", "Ne respire pas, issu du pétrole", "Renforts de chaussettes, collants, maillots, vestes techniques", "Machine 30 °C", ["polyamide"]);
MAT("synthetique", "Polyamide régénéré (ECONYL)", 4, "Nylon recyclé à partir de filets de pêche et déchets.", "Mêmes performances, recyclable à l'infini", "Microplastiques au lavage", "Maillots, sport", "Comme le polyamide", ["polyamide"]);
MAT("synthetique", "Élasthanne (Lycra, spandex)", 3, "Fibre synthétique très élastique.", "Confort et liberté de mouvement, même à faible dose", "Vieillit mal (se détend et casse), rend le recyclage difficile", "1–3 % dans les jeans et chinos, plus pour le sport et la lingerie", "Pas de chaleur, pas de sèche-linge", ["elasthanne"]);
MAT("synthetique", "Acrylique", 1, "Fibre synthétique imitant la laine.", "Bon marché, léger, couleurs vives", "Bouloche énormément, ne tient pas chaud, électricité statique", "À éviter", "À froid", ["acrylique", "pilling"]);
MAT("synthetique", "Polypropylène", 3, "Fibre synthétique très légère qui n'absorbe pas l'eau.", "Évacue la transpiration, très léger", "Garde les odeurs, craint la chaleur", "Sous-couches thermiques", "À froid, pas de sèche-linge", []);
MAT("synthetique", "Polaire (fleece)", 3, "Polyester brossé pour emprisonner l'air.", "Chaude, légère, sèche vite", "Libère beaucoup de microfibres, bouloche en entrée de gamme", "Couches intermédiaires outdoor", "Sac anti-microfibres, sans adoucissant", ["polaire", "microplastiques"]);
MAT("synthetique", "Isolant synthétique (PrimaLoft…)", 4, "Fibres creuses qui imitent le duvet.", "Isole même mouillé, sèche vite, hypoallergénique", "Un peu moins chaud que le duvet à poids égal, s'écrase avec le temps", "Doudounes synthétiques, gants", "Machine à basse température", ["primaloft"]);
MAT("synthetique", "Membrane imper-respirante (Gore-Tex…)", 5, "Film microporeux qui bloque la pluie et laisse sortir la vapeur.", "Imperméable et respirant", "Cher ; certains traitements déperlants contiennent des PFAS", "Vestes de pluie et de montagne, chaussures", "Lavage doux, réactiver au sèche-linge tiède", ["goretex", "goretex_site"]);
MAT("synthetique", "Néoprène", 3, "Caoutchouc synthétique alvéolé.", "Isolant même dans l'eau, extensible", "Ne respire pas", "Combinaisons de surf et de plongée", "Rincer à l'eau douce", []);
MAT("synthetique", "Simili-cuir (PU, PVC)", 1, "Plastique enduit sur un tissu pour imiter le cuir. Souvent appelé « cuir vegan ».", "Bon marché, sans origine animale", "Pèle et craquelle en 2–3 ans, ne respire pas, issu du pétrole", "À éviter pour les pièces durables", "Chiffon humide", ["cuir"]);

// ---------- Cuirs & peaux ----------
MAT("cuir", "Cuir pleine fleur", 5, "La couche supérieure de la peau, conservée intacte.", "La plus solide, respire, se patine magnifiquement", "Plus cher, montre les marques naturelles", "Chaussures, vestes, ceintures, sacs", "Crème nourrissante 1–2 fois par an", ["cuir", "tannage"]);
MAT("cuir", "Cuir fleur corrigée", 2, "Cuir poncé puis recouvert d'une finition (souvent plastique).", "Aspect uniforme, bon marché", "Craquelle aux plis, ne se patine pas", "Chaussures d'entrée de gamme", "Cirage", ["cuir"]);
MAT("cuir", "Cuir croûte", 2, "Couche inférieure de la peau, souvent enduite.", "Bon marché", "Peu résistant, s'effrite", "À éviter, sauf daim de qualité", "—", ["cuir"]);
MAT("cuir", "Daim (suède)", 4, "Cuir poncé côté chair, au toucher velouté.", "Doux, élégant, résistant si bien protégé", "Craint les taches et la pluie sans protection", "Chaussures, vestes", "Spray imperméabilisant, brosse et gomme", ["cuir"]);
MAT("cuir", "Nubuck", 4, "Cuir pleine fleur légèrement poncé côté fleur.", "Plus résistant que le daim, toucher velouté", "Se tache facilement", "Chaussures, boots", "Brosse et imperméabilisant", ["nubuck"]);
MAT("cuir", "Cuir tanné végétal", 5, "Cuir tanné aux extraits d'écorces et de bois.", "Ferme, se patine et fonce avec le temps, procédé plus naturel", "Plus long à produire, craint l'eau", "Ceintures, sacs, semelles", "Graisse ou crème nourrissante", ["vegtan", "tannage"]);
MAT("cuir", "Cuir tanné au chrome", 4, "Le tannage le plus courant, aux sels de chrome.", "Souple, stable, résiste à l'eau", "Procédé polluant s'il est mal maîtrisé", "Vestes, chaussures, gants", "Crème nourrissante", ["tannage"]);
MAT("cuir", "Cordovan", 5, "Cuir issu d'une membrane de la croupe du cheval.", "Extrêmement dense, ne se plisse pas mais « roule », brillance profonde", "Très rare et cher", "Chaussures de luxe", "Cirage spécifique, peu de produit", ["cordovan"]);
MAT("cuir", "Agneau", 4, "Peau d'agneau fine et souple.", "Très souple et léger", "Plus fragile", "Vestes, gants", "Crème légère", ["cuir"]);
MAT("cuir", "Peau lainée (shearling)", 5, "Peau de mouton tannée avec sa laine.", "La plus chaude des peaux", "Lourde, chère", "Vestes d'hiver, bottes fourrées", "Nettoyage spécialisé", ["cuir"]);
MAT("cuir", "Coton ciré", 4, "Coton imprégné de cire ou de paraffine.", "Imperméable, coupe-vent, réparable, se patine", "À recirer chaque année, odeur légère", "Vestes (Barbour), sacs", "Recirage annuel, pas de machine", ["waxed"]);

// ---------- Étoffes & tissages ----------
MAT("etoffe", "Jersey", 4, "Maille lisse et extensible.", "Confortable, souple, ne froisse pas", "Se déforme si trop fin", "T-shirts, robes, sous-vêtements", "Selon la fibre", ["jersey"]);
MAT("etoffe", "Piqué", 4, "Maille en relief (petits nids d'abeille).", "Respirante, texturée, cache la transpiration", "Un peu plus rêche que le jersey", "Polos", "Selon la fibre", ["polo"]);
MAT("etoffe", "Molleton", 4, "Maille lisse dessus, bouclée ou grattée dessous.", "Douillet, chaud, confortable", "Rétrécit au sèche-linge", "Sweats, joggings", "30 °C sur l'envers", ["sweat", "french_terry"]);
MAT("etoffe", "Côtes (bord-côte)", 4, "Maille formant de petites rayures en relief.", "Élastique naturellement, épouse le corps", "Se détend si de mauvaise qualité", "Cols, poignets, débardeurs", "Selon la fibre", []);
MAT("etoffe", "Popeline", 4, "Tissage serré à fils fins, surface lisse.", "Élégante, légère, fraîche", "Froisse, demande du repassage", "Chemises habillées, pyjamas", "Repassage humide", ["popeline"]);
MAT("etoffe", "Oxford", 5, "Tissage en panier, épais et texturé.", "Robuste, s'adoucit, peu de repassage", "Moins habillé", "Chemises décontractées", "Machine 40 °C", ["oxford"]);
MAT("etoffe", "Sergé (twill)", 5, "Tissage en diagonale.", "Dense, souple, résiste aux plis et à l'usure", "—", "Chinos, chemises, denim, gabardine", "Selon la fibre", ["serge", "twill"]);
MAT("etoffe", "Denim", 5, "Sergé de coton avec chaîne teinte à l'indigo.", "Très robuste, se patine", "Lourd, déteint au début", "Jeans, vestes", "Rarement, à froid, sur l'envers", ["denim", "selvedge"]);
MAT("etoffe", "Chambray", 4, "Toile unie avec chaîne colorée et trame blanche.", "Aspect jean, léger et frais", "—", "Chemises", "Machine 30–40 °C", ["denim"]);
MAT("etoffe", "Gabardine", 5, "Sergé très serré, inventé par Burberry.", "Déperlant, robuste, tombe bien", "Peut briller à l'usure", "Trenchs, pantalons", "Nettoyage à sec ou machine douce", ["gabardine"]);
MAT("etoffe", "Flanelle", 4, "Tissu brossé (laine ou coton), doux et gonflant.", "Chaude, douce, mate", "Bouloche un peu", "Pantalons, costumes, chemises d'hiver", "Selon la fibre", ["flanelle"]);
MAT("etoffe", "Tweed", 4, "Lainage épais et chiné, souvent écossais.", "Très robuste et chaud, caractère", "Lourd, peut piquer", "Vestes, manteaux", "Brossage, nettoyage à sec", ["tweed"]);
MAT("etoffe", "Loden", 5, "Laine feutrée du Tyrol.", "Coupe-vent, déperlant, chaud", "Lourd", "Manteaux", "Brossage", ["loden"]);
MAT("etoffe", "Velours côtelé", 4, "Coton à côtes veloutées.", "Chaud, doux, résistant", "Les côtes s'usent aux frottements", "Pantalons, vestes", "Sur l'envers, pas de repassage écrasant", ["velours_cotele"]);
MAT("etoffe", "Velours", 3, "Tissu à poils courts et serrés.", "Riche, doux, élégant", "Marque les plis et la pression", "Vestes de soirée, robes", "Nettoyage à sec", ["velours"]);
MAT("etoffe", "Seersucker", 4, "Coton gaufré à rayures en relief.", "Ne colle pas à la peau, aucun repassage", "Style estival marqué", "Chemises, costumes, shorts d'été", "Machine 30 °C", ["seersucker"]);
MAT("etoffe", "Moleskine", 4, "Coton très serré et brossé, toucher de peau.", "Coupe-vent, doux, robuste", "Se marque un peu", "Vestes de travail", "Machine 30 °C", []);
MAT("etoffe", "Toile (canvas, duck)", 4, "Coton très dense en armure toile.", "Très robuste, coupe-vent", "Rigide au départ", "Vestes de travail, sacs", "Brossage, lavage rare", ["chino_toile"]);
MAT("etoffe", "Satin", 2, "Tissage brillant (souvent polyester).", "Brillant, glissant", "En polyester : ne respire pas, s'accroche", "Lingerie, robes du soir (préférer en soie)", "À la main", []);
MAT("etoffe", "Crêpe", 4, "Tissu à surface granuleuse (laine, soie ou synthétique).", "Tombé fluide, ne froisse pas", "En polyester : moins agréable", "Robes, blouses, pantalons", "Selon la fibre", []);
MAT("etoffe", "Fil d'Écosse", 5, "Coton longues fibres retors et mercerisé.", "Brillant, lisse, très résistant", "Plus cher", "Chaussettes, polos", "Machine 30–40 °C", ["fil_ecosse"]);
MAT("etoffe", "Ripstop", 4, "Tissu renforcé par un quadrillage de fils épais.", "Les déchirures ne s'étendent pas", "Aspect technique", "Doudounes, vêtements outdoor", "Selon la fibre", []);
MAT("etoffe", "Dentelle Leavers (Calais)", 5, "Dentelle tissée sur des métiers anciens dans le nord de la France.", "Finesse, souplesse et solidité", "Chère", "Lingerie haut de gamme", "À la main", ["lingerie"]);
