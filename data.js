// Données du guide : vêtements, matières conseillées et tier lists par budget.
// Format d'une marque : [nom, commentaire court]

const BUDGETS = [
  { id: "petit", label: "Petit budget" },
  { id: "moyen", label: "Budget moyen" },
  { id: "premium", label: "Haut de gamme" }
];

const TIER_INFO = {
  S: "Le meilleur choix dans ce budget",
  A: "Excellent, recommandé",
  B: "Correct, avec quelques compromis",
  C: "Décevant ou trop cher pour ce que c'est"
};

const VETEMENTS = [
  {
    id: "tshirt",
    nom: "T-shirts",
    icone: "👕",
    resume: "La pièce de base. Le grammage et la qualité du coton font toute la différence.",
    budgets: { petit: "< 20 €", moyen: "20 – 50 €", premium: "> 50 €" },
    matieres: [
      { nom: "Coton peigné / longues fibres (Supima, Pima, égyptien)", pourquoi: "Les fibres longues donnent un tissu plus doux, plus résistant et qui bouloche moins. Le peignage retire les fibres courtes qui cassent et peluchent." },
      { nom: "Jersey épais (180 – 240 g/m²)", pourquoi: "Un t-shirt lourd tombe mieux, n'est pas transparent, se déforme moins au col et dure beaucoup plus longtemps." },
      { nom: "Coton biologique", pourquoi: "Même confort que le coton classique, avec moins de pesticides et souvent une meilleure traçabilité." },
      { nom: "Laine mérinos fine (150 – 190 g/m²)", pourquoi: "Idéal en voyage ou en sport : régule la température et ne garde pas les odeurs, on peut le porter plusieurs jours." },
      { nom: "Lin ou coton-lin", pourquoi: "Parfait en plein été : très respirant et sèche vite. Il froisse, mais c'est son charme." }
    ],
    eviter: [
      "Coton très fin (< 150 g/m²) : col qui gondole et tissu qui se déforme après quelques lavages",
      "Polyester 100 % hors sport : garde les odeurs, ne respire pas, bouloche",
      "Mélanges coton/polyester bas de gamme : boulochage rapide"
    ],
    astuces: [
      "Regardez le col : une bande de propreté (ruban à l'intérieur) et un col en bord-côte épais tiennent mieux.",
      "Lavez à 30 °C et évitez le sèche-linge pour limiter le rétrécissement.",
      "Un t-shirt « tubulaire » (sans coutures sur les côtés) vrille moins."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Gamme Supima et Uniqlo U : coton épais, coupe nette, imbattable à ce prix"]],
        A: [["Decathlon", "Excellent pour le sport et les basiques techniques"], ["H&M (gamme Premium Cotton)", "Correct si on choisit les modèles épais"]],
        B: [["Kiabi", "Basique, se déforme vite"], ["Primark", "Très peu cher mais faible durée de vie"]],
        C: [["Shein", "Qualité très aléatoire, matières synthétiques fréquentes"]]
      },
      moyen: {
        S: [["Asphalte", "T-shirts épais et durables, conçus pour durer"], ["Loom", "Transparence totale sur les coûts, très bonne qualité"]],
        A: [["Arket", "Coton bio épais, coupes modernes"], ["Armor Lux", "Fabrication solide, marque historique bretonne"], ["Colorful Standard", "Coton bio lourd, belles couleurs"]],
        B: [["COS", "Beau style mais qualité variable selon les modèles"], ["Zara", "Prix moyen pour une qualité de fast-fashion"]],
        C: [["Marques à gros logo (Tommy, Calvin Klein…)", "On paie surtout le logo"]]
      },
      premium: {
        S: [["Sunspel", "Référence anglaise du t-shirt en coton longues fibres"], ["Merz b. Schwanen", "Tricoté sur métiers anciens, quasi indestructible"]],
        A: [["Lady White Co.", "Jersey très épais fabriqué aux États-Unis"], ["Officine Générale", "Coton japonais, finitions soignées"]],
        B: [["Ralph Lauren", "Bonne qualité mais prix gonflé par la marque"]],
        C: [["Marques de luxe (Balenciaga, Gucci…)", "T-shirt basique vendu plusieurs centaines d'euros"]]
      }
    }
  },
  {
    id: "chemise",
    nom: "Chemises",
    icone: "👔",
    resume: "Le tissage (oxford, popeline, twill…) détermine le style et l'usage.",
    budgets: { petit: "< 40 €", moyen: "40 – 120 €", premium: "> 120 €" },
    matieres: [
      { nom: "Coton Oxford", pourquoi: "Tissage épais et texturé, très robuste. La chemise décontractée par excellence, qui s'améliore avec le temps." },
      { nom: "Popeline de coton", pourquoi: "Tissage fin, lisse et légèrement brillant. Le choix pour le bureau et les occasions habillées." },
      { nom: "Twill de coton", pourquoi: "Tissage diagonal qui froisse moins et se repasse facilement. Bon compromis pour un usage quotidien." },
      { nom: "Lin", pourquoi: "Le tissu de l'été : évacue la chaleur et l'humidité mieux que tout autre. Froisse naturellement." },
      { nom: "Flanelle de coton", pourquoi: "Brossée pour être douce et chaude, idéale en automne-hiver." },
      { nom: "Chambray / denim léger", pourquoi: "Aspect jean mais léger, très polyvalent pour un look décontracté." }
    ],
    eviter: [
      "Polyester ou mélanges majoritairement synthétiques : on transpire, ça brille",
      "Chemises « sans repassage » à traitement résine : moins respirantes et moins douces",
      "Viscose bas de gamme : rétrécit et se déforme au lavage"
    ],
    astuces: [
      "Vérifiez les coutures : 6 à 8 points par cm est signe de qualité.",
      "Un col avec baleines amovibles et des boutons en nacre sont des indices de soin.",
      "Les motifs (rayures, carreaux) bien alignés aux coutures indiquent une confection soignée."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Oxford et lin excellents à ce prix"]],
        A: [["Celio", "Coupes correctes, bons prix en soldes"], ["H&M", "Choisir les modèles 100 % coton"]],
        B: [["Kiabi", "Coton fin, finitions basiques"], ["Jules", "Correct mais vieillit vite"]],
        C: [["Shein", "Synthétique, coupe approximative"]]
      },
      moyen: {
        S: [["Kamakura Shirts", "Qualité japonaise remarquable pour le prix"], ["Hast", "Chemises bien coupées, bon rapport qualité-prix"]],
        A: [["Charles Tyrwhitt", "Excellent en soldes, nombreuses tailles de manche"], ["Bonne Gueule", "Matières sourcées avec soin, style intemporel"], ["Arket", "Bonne qualité, style épuré"]],
        B: [["Massimo Dutti", "Qualité inégale selon les collections"], ["Zara", "Style tendance mais tenue moyenne"]],
        C: [["Marques logo (Hugo Boss, Tommy…)", "Prix élevé pour une qualité standard"]]
      },
      premium: {
        S: [["Drake's", "Le haut du panier anglais, style décontracté chic"], ["Charvet", "Chemisier parisien légendaire, sur-mesure"]],
        A: [["Officine Générale", "Tissus italiens et japonais, finitions impeccables"], ["Ralph Lauren (Polo Oxford)", "Classique solide, surtout en soldes"]],
        B: [["Eton", "Qualité réelle mais prix élevé"]],
        C: [["Maisons de luxe", "Prime de marque énorme"]]
      }
    }
  },
  {
    id: "pull",
    nom: "Pulls & mailles",
    icone: "🧶",
    resume: "La laine est reine. La pire erreur : l'acrylique qui bouloche et ne tient pas chaud.",
    budgets: { petit: "< 50 €", moyen: "50 – 150 €", premium: "> 150 €" },
    matieres: [
      { nom: "Laine mérinos", pourquoi: "Fibre fine et douce qui ne gratte pas, régule la température et résiste aux odeurs. Le meilleur pull polyvalent." },
      { nom: "Lambswool (laine d'agneau)", pourquoi: "Plus épaisse et chaude que le mérinos, aspect plus rustique. Parfait pour l'hiver." },
      { nom: "Cachemire", pourquoi: "Extrêmement doux et chaud pour son poids. Préférez un cachemire 2 fils (2-ply), plus résistant." },
      { nom: "Coton", pourquoi: "Pour la mi-saison : moins chaud que la laine mais lavable facilement et sans démangeaisons." },
      { nom: "Shetland, alpaga, mohair", pourquoi: "Laines au caractère marqué : très chaudes et durables, idéales pour les pulls épais." }
    ],
    eviter: [
      "Acrylique : bouloche très vite, ne tient pas chaud, électricité statique",
      "Mélanges avec moins de 50 % de laine : on perd tous les avantages de la laine",
      "Cachemire très bon marché : fibres courtes qui boulochent et se trouent rapidement"
    ],
    astuces: [
      "Étirez légèrement la maille : elle doit revenir à sa forme. Une maille serrée dure plus longtemps.",
      "Lavez la laine à froid ou au programme laine, et faites sécher à plat.",
      "Un peu de boulochage au début est normal, même sur un bon cachemire : utilisez un peigne à pulls."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Mérinos extra-fin et cachemire à prix imbattables"]],
        A: [["Decathlon", "Mérinos technique très efficace"], ["Celio", "Quelques modèles en laine corrects"]],
        B: [["H&M", "Vérifier l'étiquette, beaucoup de synthétique"]],
        C: [["Fast-fashion en acrylique (Primark, Shein…)", "Bouloche dès le premier mois"]]
      },
      moyen: {
        S: [["Saint James", "Marinières et pulls en laine quasi indestructibles"], ["Asket", "Mérinos et lambswool traçables, très bon rapport qualité-prix"]],
        A: [["Armor Lux", "Laine solide fabriquée en France"], ["Arket", "Bonne laine, style minimaliste"], ["Howlin'", "Shetland écossais coloré"]],
        B: [["COS", "Beaux designs, qualité inégale"], ["Massimo Dutti", "Laine parfois mélangée"]],
        C: [["Marques logo moyen de gamme", "Souvent coton/synthétique à prix élevé"]]
      },
      premium: {
        S: [["John Smedley", "Mérinos et Sea Island cotton, maille fine d'exception depuis 1784"], ["Inis Meáin", "Mailles irlandaises luxueuses"]],
        A: [["William Lockie", "Cachemire et lambswool écossais"], ["Éric Bompard", "Cachemire de qualité, nombreuses couleurs"], ["Drumohr", "Mailles italiennes raffinées"]],
        B: [["Ralph Lauren", "Bonne laine mais forte prime marque"]],
        C: [["Luxe mode (Prada, Dior…)", "Prix sans rapport avec la matière"]]
      }
    }
  },
  {
    id: "jean",
    nom: "Jeans",
    icone: "👖",
    resume: "Un bon denim est en coton (presque) pur et se patine avec le temps.",
    budgets: { petit: "< 50 €", moyen: "50 – 150 €", premium: "> 150 €" },
    matieres: [
      { nom: "Denim 100 % coton", pourquoi: "Robuste, garde sa forme et se patine magnifiquement en prenant la forme de votre corps." },
      { nom: "Denim selvedge", pourquoi: "Tissé sur des métiers à navette traditionnels : tissage plus dense et finitions propres (lisière visible au revers)." },
      { nom: "Denim 12 – 16 oz", pourquoi: "Un grammage moyen à lourd dure longtemps. En dessous de 12 oz, le jean est plus léger mais moins durable." },
      { nom: "Coton + 1 à 2 % d'élasthanne", pourquoi: "Ajoute du confort pour les coupes ajustées sans trop sacrifier la durabilité." },
      { nom: "Denim brut (raw)", pourquoi: "Non lavé : vieillit de façon unique et dure le plus longtemps." }
    ],
    eviter: [
      "Plus de 3 % d'élasthanne : genouillères, tissu qui se détend et casse vite",
      "Délavages et déchirures industrielles : ils fragilisent la toile dès l'achat",
      "Mélanges avec polyester : aspect artificiel"
    ],
    astuces: [
      "Lavez votre jean rarement, à l'envers et à froid pour garder la couleur.",
      "Un jean brut détend d'environ une demi-taille : prenez-le bien ajusté.",
      "Vérifiez les rivets, la braguette à boutons et les coutures doubles."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Jeans selvedge et denim japonais à petit prix"]],
        A: [["Levi's (en soldes / outlet)", "Le 501 reste une valeur sûre"], ["Lee / Wrangler", "Classiques solides"]],
        B: [["H&M", "Trop d'élasthanne sur beaucoup de modèles"], ["Kiabi", "Correct pour dépanner"]],
        C: [["Shein", "Denim fin et synthétique"]]
      },
      moyen: {
        S: [["Levi's", "501 et modèles Made & Crafted"], ["1083", "Jeans fabriqués en France, très bon rapport qualité-prix"]],
        A: [["Nudie Jeans", "Coton bio, réparations gratuites à vie"], ["Edwin", "Denim japonais de qualité"]],
        B: [["Diesel", "Style marqué, qualité variable"], ["Pepe Jeans", "Basique"]],
        C: [["Jeans « mode » très délavés", "Durabilité faible"]]
      },
      premium: {
        S: [["A.P.C.", "Le Petit Standard, référence du jean brut minimaliste"], ["Momotaro / Iron Heart", "Denim japonais lourd, artisanal"]],
        A: [["Pure Blue Japan", "Textures uniques"], ["Naked & Famous", "Denims originaux, bon rapport pour du japonais"]],
        B: [["Acne Studios", "Belles coupes mais prix mode"]],
        C: [["Luxe (Dsquared2, Balmain…)", "Délavés et déchirures à prix d'or"]]
      }
    }
  },
  {
    id: "pantalon",
    nom: "Chinos & pantalons",
    icone: "🩳",
    resume: "Twill de coton pour le quotidien, laine pour l'élégance.",
    budgets: { petit: "< 50 €", moyen: "50 – 150 €", premium: "> 150 €" },
    matieres: [
      { nom: "Twill de coton (chino)", pourquoi: "Solide, confortable et facile d'entretien : le pantalon décontracté par excellence." },
      { nom: "Gabardine de coton", pourquoi: "Tissage serré qui tombe bien et résiste aux plis." },
      { nom: "Flanelle de laine", pourquoi: "Chaude et élégante, idéale en hiver avec un blazer ou un pull." },
      { nom: "Laine fresco / tropicale", pourquoi: "Laine légère et aérée, très confortable par temps chaud." },
      { nom: "Lin", pourquoi: "Le pantalon d'été par excellence, frais et décontracté." },
      { nom: "Velours côtelé", pourquoi: "Chaud et texturé, parfait pour l'automne." }
    ],
    eviter: [
      "Polyester brillant : aspect bon marché, inconfortable",
      "Trop d'élasthanne : poches aux genoux",
      "Coton très fin qui se froisse et se déforme"
    ],
    astuces: [
      "Faites faire l'ourlet : un pantalon à la bonne longueur change tout.",
      "Un chino avec 2 % d'élasthanne est plus confortable, mais 100 % coton dure plus longtemps."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Chinos et pantalons en laine excellents pour le prix"]],
        A: [["Celio", "Bonnes coupes basiques"], ["Dockers (outlet)", "Le chino historique"]],
        B: [["Zara", "Coupes à la mode, matière moyenne"], ["H&M", "Choisir le 100 % coton"]],
        C: [["Shein", "Synthétique"]]
      },
      moyen: {
        S: [["Bonne Gueule", "Chinos solides, tissus de qualité"], ["Dockers", "Valeur sûre"]],
        A: [["Arket", "Bonnes matières"], ["Asket", "Coupes intemporelles, traçabilité"]],
        B: [["Massimo Dutti", "Correct, qualité variable"]],
        C: [["Pantalons logo de marques de mode", "Prix élevé pour du basique"]]
      },
      premium: {
        S: [["Incotex", "Le spécialiste italien du pantalon"], ["Rota", "Pantalons de laine d'exception"]],
        A: [["Berwich", "Coupes italiennes soignées"], ["Officine Générale", "Tissus nobles"]],
        B: [["Hugo Boss", "Correct, prime de marque"]],
        C: [["Luxe mode", "Prix très élevé pour un basique"]]
      }
    }
  },
  {
    id: "manteau",
    nom: "Manteaux & vestes",
    icone: "🧥",
    resume: "Un manteau doit contenir au moins 70 % de laine pour vraiment protéger du froid.",
    budgets: { petit: "< 150 €", moyen: "150 – 450 €", premium: "> 450 €" },
    matieres: [
      { nom: "Drap de laine (≥ 70 % laine)", pourquoi: "Chaud, coupe-vent et élégant. Plus le taux de laine est élevé, mieux il isole et vieillit." },
      { nom: "Loden", pourquoi: "Laine feutrée naturellement déperlante, idéale pour le froid humide." },
      { nom: "Coton ciré", pourquoi: "Imperméable, robuste et réparable (re-cirage). Se patine avec les années." },
      { nom: "Gabardine de coton (trench)", pourquoi: "Tissage très serré qui résiste au vent et à la pluie légère. Le classique de mi-saison." },
      { nom: "Membranes techniques (Gore-Tex…)", pourquoi: "Pour une vraie imperméabilité tout en restant respirant, sous la pluie ou en montagne." },
      { nom: "Cuir pleine fleur", pourquoi: "Pour les vestes : vieillit très bien et dure des décennies." }
    ],
    eviter: [
      "Manteaux à moins de 50 % de laine : peu chauds et boulochent",
      "Cuir synthétique (PU) : craquelle et pèle en 2 ou 3 ans",
      "Doublure 100 % polyester sur un manteau cher : préférez viscose ou cupro qui respirent"
    ],
    astuces: [
      "Essayez le manteau avec un pull épais dessous.",
      "Les épaules doivent tomber pile sur les vôtres : c'est la seule chose difficile à retoucher.",
      "Brossez la laine après usage au lieu de la laver."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Manteaux en laine mélangée et parkas corrects"], ["Decathlon", "Imperméables techniques remarquables"]],
        A: [["Celio / Jules (soldes)", "Quelques modèles en laine"]],
        B: [["Zara / H&M", "Beau style mais faible taux de laine"]],
        C: [["Shein", "Polyester, peu protecteur"]]
      },
      moyen: {
        S: [["Barbour", "Vestes en coton ciré réparables à vie"], ["Harris Wharf London", "Manteaux en laine pressée, excellente valeur"]],
        A: [["Aigle", "Imperméables solides"], ["Arket", "Manteaux en bonne laine"], ["Patagonia", "Vestes techniques durables, réparations"]],
        B: [["Massimo Dutti", "Qualité inégale"], ["COS", "Style épuré, laine parfois mélangée"]],
        C: [["Marques mode moyen de gamme", "Souvent trop de synthétique pour le prix"]]
      },
      premium: {
        S: [["Mackintosh", "Imperméables en coton caoutchouté, iconiques"], ["Private White V.C.", "Fabrication anglaise exemplaire"]],
        A: [["Burberry (trench Heritage)", "Le trench de référence"], ["Arc'teryx", "Le top de la technique"], ["Grenfell", "Gabardine anglaise d'exception"]],
        B: [["Hugo Boss", "Correct mais sans plus"]],
        C: [["Luxe mode", "Prix très élevé pour la matière"]]
      }
    }
  },
  {
    id: "doudoune",
    nom: "Doudounes",
    icone: "❄️",
    resume: "Le pouvoir gonflant (fill power) compte plus que l'épaisseur.",
    budgets: { petit: "< 100 €", moyen: "100 – 350 €", premium: "> 350 €" },
    matieres: [
      { nom: "Duvet d'oie ou de canard (90/10)", pourquoi: "Le meilleur rapport chaleur/poids. « 90/10 » = 90 % de duvet, 10 % de plumes : plus de duvet = plus chaud et léger." },
      { nom: "Pouvoir gonflant ≥ 600 cuin", pourquoi: "Mesure la capacité du duvet à emprisonner l'air. 600 est bon, 800 et plus est excellent." },
      { nom: "Duvet certifié (RDS, Global TDS)", pourquoi: "Garantit que les oiseaux n'ont pas été plumés vivants." },
      { nom: "Isolation synthétique (Primaloft…)", pourquoi: "Chauffe même mouillée et sèche vite : meilleur choix sous la pluie ou pour le sport." },
      { nom: "Tissu extérieur ripstop / déperlant", pourquoi: "Protège le duvet de l'humidité et résiste aux accrocs." }
    ],
    eviter: [
      "Ouate polyester bas de gamme pour le grand froid : s'écrase et perd sa chaleur",
      "Plus de 30 % de plumes : lourd et moins chaud",
      "Duvet non certifié"
    ],
    astuces: [
      "Lavez une doudoune avec une lessive spéciale duvet et séchez-la avec des balles de tennis.",
      "Ne la stockez pas compressée tout l'été."
    ],
    tiers: {
      petit: {
        S: [["Decathlon", "Doudounes duvet et synthétiques d'excellent rapport qualité-prix"], ["Uniqlo", "Ultra Light Down : très léger, pratique en sous-couche"]],
        A: [["Columbia (soldes)", "Solide et chaud"]],
        B: [["H&M / Zara", "Souvent en ouate synthétique basique"]],
        C: [["Shein", "Isolation médiocre"]]
      },
      moyen: {
        S: [["Patagonia", "Duvet certifié, garantie et réparation"], ["Rab", "Spécialiste montagne, excellent duvet"]],
        A: [["The North Face", "Fiable, modèles iconiques"], ["Pyrenex", "Duvet français de qualité"], ["Mountain Equipment", "Technique et chaud"]],
        B: [["Superdry", "Correct, style urbain"]],
        C: [["Doudounes mode à logo", "Prix pour le nom, pas l'isolation"]]
      },
      premium: {
        S: [["Arc'teryx", "Technicité et finitions au sommet"]],
        A: [["Moncler", "Vraie qualité, mais forte prime de marque"], ["Feathered Friends / Western Mountaineering", "Duvet 850+ d'exception"]],
        B: [["Canada Goose", "Chaud mais très cher pour la qualité réelle"]],
        C: [["Luxe mode (Balenciaga…)", "Le style avant la chaleur"]]
      }
    }
  },
  {
    id: "baskets",
    nom: "Baskets",
    icone: "👟",
    resume: "Cuir véritable et semelle cousue = des baskets qui durent.",
    budgets: { petit: "< 80 €", moyen: "80 – 200 €", premium: "> 200 €" },
    matieres: [
      { nom: "Cuir pleine fleur", pourquoi: "La couche supérieure du cuir : respirante, résistante et qui se patine au lieu de craqueler." },
      { nom: "Daim / suède", pourquoi: "Doux et élégant, mais à protéger avec un spray imperméabilisant." },
      { nom: "Toile de coton épaisse", pourquoi: "Légère et respirante, idéale en été (Converse, Vans…)." },
      { nom: "Semelle caoutchouc naturel cousue", pourquoi: "Plus durable qu'une semelle seulement collée, et parfois remplaçable." },
      { nom: "Mesh technique", pourquoi: "Pour le running : léger et respirant (le synthétique est ici justifié)." }
    ],
    eviter: [
      "Cuir « reconstitué » ou « croûte de cuir » enduite : craquelle vite",
      "Simili-cuir (PU) : ne respire pas, pied qui transpire",
      "Semelles en mousse bas de gamme qui s'écrasent"
    ],
    astuces: [
      "Utilisez des embauchoirs et alternez les paires pour laisser le cuir sécher.",
      "Nettoyez et nourrissez le cuir régulièrement."
    ],
    tiers: {
      petit: {
        S: [["Adidas (Stan Smith, Samba)", "Classiques indémodables, souvent en promo"]],
        A: [["Converse / Vans", "Toile simple et efficace"], ["Le Coq Sportif", "Bon rapport qualité-prix"]],
        B: [["Decathlon (ville)", "Basique"]],
        C: [["Baskets synthétiques fast-fashion", "Durent une saison"]]
      },
      moyen: {
        S: [["Veja", "Cuir et caoutchouc sourcés de façon responsable"], ["New Balance", "Confort et qualité, surtout les modèles Made in UK/USA"]],
        A: [["Novesta", "Fabrication européenne, semelle vulcanisée"], ["Saucony / Asics (lifestyle)", "Confortables et solides"], ["Spalwart", "Design minimaliste"]],
        B: [["Nike", "Excellent marketing, qualité variable selon modèles"]],
        C: [["Éditions limitées revendues", "Prix spéculatif"]]
      },
      premium: {
        S: [["Common Projects", "La référence de la basket minimaliste en cuir italien"], ["Diemme", "Fabrication italienne robuste"]],
        A: [["Oliver Cabell", "Qualité luxe à prix plus doux"], ["Axel Arigato", "Design soigné"]],
        B: [["Golden Goose", "Style vieilli mais cher pour la qualité"]],
        C: [["Balenciaga / luxe", "Plus d'image que de qualité"]]
      }
    }
  },
  {
    id: "chaussures",
    nom: "Chaussures de ville & boots",
    icone: "🥾",
    resume: "Le montage Goodyear permet de ressemeler et de garder ses chaussures 20 ans.",
    budgets: { petit: "< 150 €", moyen: "150 – 400 €", premium: "> 400 €" },
    matieres: [
      { nom: "Cuir pleine fleur ou box calf", pourquoi: "Cuir de veau dense, qui se cire, se patine et dure des décennies." },
      { nom: "Cuir graissé / chromexcel", pourquoi: "Imprégné d'huiles, résistant à l'eau : idéal pour les boots." },
      { nom: "Montage Goodyear", pourquoi: "La semelle est cousue sur une trépointe : chaussure très solide et entièrement ressemelable." },
      { nom: "Montage Blake", pourquoi: "Plus fin et souple que le Goodyear, ressemelable aussi." },
      { nom: "Semelle gomme (Dainite, Vibram)", pourquoi: "Accroche sous la pluie tout en restant élégante." }
    ],
    eviter: [
      "Semelle simplement collée : impossible à réparer",
      "Cuir « corrigé » très brillant et plastique : craquelle aux plis",
      "Cuir synthétique"
    ],
    astuces: [
      "Mettez des embauchoirs en cèdre après chaque port.",
      "Cirez régulièrement et faites ressemeler chez un cordonnier avant d'user la trépointe."
    ],
    tiers: {
      petit: {
        S: [["Clarks (soldes)", "Desert boots et derbies confortables"]],
        A: [["Dr. Martens (soldes)", "Robustes, semelle cousue"], ["Bexley (déstockage)", "Goodyear à petit prix"]],
        B: [["Bocage / André", "Correct mais collé"]],
        C: [["Chaussures en simili", "À éviter"]]
      },
      moyen: {
        S: [["Bexley", "Goodyear à prix imbattable"], ["Loake", "Fabrication anglaise de qualité"]],
        A: [["Red Wing", "Boots de travail légendaires"], ["Meermin", "Excellent rapport qualité-prix espagnol"], ["Dr. Martens Made in England", "Plus solides que la gamme standard"]],
        B: [["Timberland", "Solide mais collé sur beaucoup de modèles"]],
        C: [["Marques mode", "Souvent collées malgré le prix"]]
      },
      premium: {
        S: [["Paraboot", "Michael et Chambord, quasi indestructibles"], ["Crockett & Jones", "Référence anglaise"], ["Carmina", "Finitions exceptionnelles"]],
        A: [["Alden", "Cordovan iconique"], ["J.M. Weston", "Mocassins légendaires"], ["Church's", "Classiques anglais"]],
        B: [["Berluti", "Superbe mais très cher"]],
        C: [["Luxe mode", "Cher et rarement ressemelable"]]
      }
    }
  },
  {
    id: "sousvetements",
    nom: "Sous-vêtements & chaussettes",
    icone: "🧦",
    resume: "Au contact de la peau : douceur et respirabilité avant tout.",
    budgets: { petit: "< 15 €", moyen: "15 – 40 €", premium: "> 40 €" },
    matieres: [
      { nom: "Coton peigné", pourquoi: "Doux, respirant, lavable à haute température." },
      { nom: "Modal / micromodal", pourquoi: "Fibre de bois très douce et soyeuse, qui absorbe bien l'humidité." },
      { nom: "Laine mérinos", pourquoi: "Pour le sport ou la randonnée : anti-odeurs et thermorégulante." },
      { nom: "Fil d'Écosse (coton mercerisé)", pourquoi: "Chaussettes fines, brillantes et résistantes, parfaites en ville." },
      { nom: "Chaussettes laine + renfort nylon", pourquoi: "Un peu de polyamide au talon et à la pointe améliore beaucoup la durabilité." }
    ],
    eviter: [
      "Polyester pur : odeurs et transpiration",
      "Chaussettes sans renfort : trouées en quelques semaines",
      "Élastiques bas de gamme qui se détendent vite"
    ],
    astuces: [
      "Retournez les chaussettes avant lavage.",
      "Lavez les sous-vêtements en coton à 40 °C, le modal à 30 °C."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Airism et coton Supima, très bonne qualité"]],
        A: [["Dim", "Fiable"], ["Decathlon", "Chaussettes de sport excellentes"]],
        B: [["H&M", "Durée de vie moyenne"]],
        C: [["Packs ultra bon marché", "Se détendent vite"]]
      },
      moyen: {
        S: [["Le Slip Français", "Fabriqué en France, solide"], ["Falke", "Chaussettes de référence"]],
        A: [["Bleuforêt", "Chaussettes françaises durables"], ["Darn Tough", "Chaussettes garanties à vie"]],
        B: [["Calvin Klein", "Correct, on paie l'élastique logo"]],
        C: [["Marques de mode logo", "Prix pour le nom"]]
      },
      premium: {
        S: [["Sunspel", "Coton longues fibres exceptionnel"], ["Zimmerli", "Le luxe suisse du sous-vêtement"]],
        A: [["Hanro", "Très confortable"], ["Pantherella / Bresciani", "Chaussettes fines haut de gamme"]],
        B: [["Hugo Boss", "Correct, sans plus"]],
        C: [["Luxe mode", "Aucun intérêt"]]
      }
    }
  },
  {
    id: "costume",
    nom: "Costumes & blazers",
    icone: "🤵",
    resume: "Laine vierge et entoilage : les deux critères essentiels.",
    budgets: { petit: "< 250 €", moyen: "250 – 800 €", premium: "> 800 €" },
    matieres: [
      { nom: "Laine vierge Super 100's – 130's", pourquoi: "Le meilleur compromis entre finesse, tombé et résistance. Au-delà de Super 150's, c'est plus fragile." },
      { nom: "Flanelle de laine", pourquoi: "Douce et chaude, idéale pour l'hiver." },
      { nom: "Tweed", pourquoi: "Laine épaisse et robuste, pour un blazer décontracté." },
      { nom: "Fresco / laine haute torsion", pourquoi: "Respire et ne froisse presque pas : le costume d'été parfait." },
      { nom: "Lin et coton", pourquoi: "Pour les blazers d'été décontractés." },
      { nom: "Entoilage (semi ou complet)", pourquoi: "Une toile cousue dans le devant donne forme et tombé ; elle épouse le corps avec le temps." }
    ],
    eviter: [
      "Polyester ou mélanges polyester : brille, chauffe, se froisse",
      "Thermocollé bas de gamme : des bulles apparaissent au lavage/pressing",
      "Laine Super 180's+ pour un usage quotidien : trop fragile"
    ],
    astuces: [
      "Le test de l'entoilage : pincez le devant de la veste, s'il y a une troisième couche qui bouge, c'est entoilé.",
      "Prévoyez un budget retouche (manches, ourlet) : c'est ce qui fait un beau costume.",
      "Ne passez pas au pressing trop souvent : brossez et aérez."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo (vestes en laine)", "Basique mais bon pour le prix"]],
        A: [["Celio / Jules (laine)", "Quelques modèles en laine corrects"]],
        B: [["Zara", "Coupes à la mode, souvent polyester"]],
        C: [["Costumes 100 % polyester", "À éviter"]]
      },
      moyen: {
        S: [["Suitsupply", "Rapport qualité-prix imbattable : laine italienne et entoilage"]],
        A: [["Hockerty / Atelier NA", "Sur-mesure en ligne accessible"], ["Hackett", "Classiques anglais"]],
        B: [["Hugo Boss", "Correct mais souvent thermocollé"], ["Massimo Dutti", "Variable"]],
        C: [["Marques mode", "On paie le nom"]]
      },
      premium: {
        S: [["Ring Jacket", "Construction japonaise exceptionnelle"], ["Tailleur sur-mesure local", "Imbattable pour l'ajustement"]],
        A: [["Boglioli / Caruso", "Savoir-faire italien"], ["Zegna", "Tissus de premier ordre"]],
        B: [["Canali", "Bon mais cher"]],
        C: [["Luxe mode", "Prix sans rapport avec la construction"]]
      }
    }
  },
  {
    id: "sport",
    nom: "Vêtements de sport",
    icone: "🏃",
    resume: "Ici, le synthétique est votre allié : il évacue la sueur et sèche vite.",
    budgets: { petit: "< 30 €", moyen: "30 – 80 €", premium: "> 80 €" },
    matieres: [
      { nom: "Polyester technique", pourquoi: "Évacue la transpiration et sèche très vite. Le standard du sport." },
      { nom: "Polyamide (nylon)", pourquoi: "Plus doux et plus résistant à l'abrasion que le polyester." },
      { nom: "Élasthanne (5 – 20 %)", pourquoi: "Liberté de mouvement indispensable pour le yoga, le fitness ou les collants." },
      { nom: "Laine mérinos", pourquoi: "Pour la randonnée et le trail : anti-odeurs, chaud même humide." }
    ],
    eviter: [
      "Coton : il absorbe la sueur, devient lourd et froid",
      "Vêtements sans coutures plates : frottements"
    ],
    astuces: [
      "Lavez à 30 °C sans adoucissant (il bouche les fibres techniques).",
      "Pour les odeurs tenaces, un peu de vinaigre blanc dans le bac."
    ],
    tiers: {
      petit: {
        S: [["Decathlon (Kalenji, Domyos, Kiprun)", "Le meilleur rapport qualité-prix au monde pour le sport"]],
        A: [["Uniqlo (Dry-Ex, Airism)", "Très bons basiques techniques"]],
        B: [["H&M Move", "Correct pour un usage léger"]],
        C: [["Shein", "Coutures fragiles"]]
      },
      moyen: {
        S: [["Asics", "Running de qualité"], ["Patagonia", "Outdoor durable"]],
        A: [["Nike / Adidas", "Bonne technologie, prix gonflés"], ["Under Armour", "Bon pour le fitness"]],
        B: [["Gymshark", "Surtout du marketing"]],
        C: [["Collections sport des marques de mode", "Peu techniques"]]
      },
      premium: {
        S: [["Arc'teryx", "Le meilleur en outdoor"], ["Satisfy / Tracksmith", "Running haut de gamme"]],
        A: [["Lululemon", "Excellent pour le yoga et le fitness"], ["On", "Running confortable"]],
        B: [["Alo Yoga", "Joli mais cher"]],
        C: [["Luxe sportswear", "Pas fait pour le sport"]]
      }
    }
  }
];

const MATIERES = [
  { nom: "Coton", type: "Naturelle", note: 4, plus: "Doux, respirant, facile d'entretien, hypoallergénique", moins: "Sèche lentement, froisse, culture gourmande en eau (préférez le bio)", usage: "T-shirts, chemises, jeans, chinos, sous-vêtements" },
  { nom: "Lin", type: "Naturelle", note: 5, plus: "Le plus frais de tous, très résistant, écologique (peu d'eau)", moins: "Froisse beaucoup", usage: "Chemises et pantalons d'été" },
  { nom: "Laine", type: "Naturelle", note: 5, plus: "Chaude même humide, thermorégulatrice, anti-odeurs, se lave peu", moins: "Peut gratter, demande un lavage délicat", usage: "Pulls, manteaux, costumes" },
  { nom: "Mérinos", type: "Naturelle", note: 5, plus: "Laine très fine qui ne gratte pas, anti-odeurs, polyvalente", moins: "Plus fragile que la laine classique, prix plus élevé", usage: "Pulls fins, t-shirts de voyage, sport, chaussettes" },
  { nom: "Cachemire", type: "Naturelle", note: 4, plus: "Extrêmement doux et chaud pour son poids", moins: "Fragile, bouloche, très variable en qualité", usage: "Pulls, écharpes, manteaux haut de gamme" },
  { nom: "Soie", type: "Naturelle", note: 3, plus: "Douce, légère, thermorégulatrice, brillance naturelle", moins: "Très fragile, entretien délicat", usage: "Cravates, pochettes, chemisiers" },
  { nom: "Cuir", type: "Naturelle", note: 5, plus: "Durable des décennies, se patine, protège du vent", moins: "Cher, demande de l'entretien", usage: "Chaussures, vestes, ceintures" },
  { nom: "Lyocell (Tencel)", type: "Artificielle", note: 4, plus: "Doux, absorbant, procédé de fabrication propre (circuit fermé)", moins: "Peut boulocher", usage: "Chemises, robes, sous-vêtements" },
  { nom: "Modal", type: "Artificielle", note: 4, plus: "Très doux, absorbant, ne rétrécit pas", moins: "Moins résistant que le coton", usage: "Sous-vêtements, t-shirts" },
  { nom: "Viscose", type: "Artificielle", note: 2, plus: "Fluide, agréable, bon marché", moins: "Rétrécit, se déforme, fabrication polluante", usage: "Doublures, vêtements fluides" },
  { nom: "Polyester", type: "Synthétique", note: 2, plus: "Résistant, sèche vite, ne froisse pas", moins: "Garde les odeurs, ne respire pas, microplastiques", usage: "Sport et technique uniquement" },
  { nom: "Polyamide (Nylon)", type: "Synthétique", note: 3, plus: "Très résistant à l'abrasion, léger", moins: "Ne respire pas, issu du pétrole", usage: "Renforts de chaussettes, vestes techniques, sport" },
  { nom: "Élasthanne", type: "Synthétique", note: 3, plus: "Apporte de l'élasticité et du confort", moins: "Vieillit mal en grande quantité", usage: "1-3 % dans les jeans et chinos, plus pour le sport" },
  { nom: "Acrylique", type: "Synthétique", note: 1, plus: "Bon marché, imite la laine", moins: "Bouloche énormément, ne tient pas chaud, statique", usage: "À éviter" }
];
