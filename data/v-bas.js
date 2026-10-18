VETEMENTS.push(
  {
    id: "jean",
    famille: "bas",
    nom: "Jeans",
    resume: "Un bon denim est en coton (presque) pur et se patine avec le temps.",
    intro: "Le jean est fait de denim : une toile de coton tissée en diagonale avec un fil bleu (teint à l'indigo) et un fil blanc. Un bon denim est dense, presque entièrement en coton et prend la forme de votre corps avec le temps. Le stretch apporte du confort, mais en excès il fragilise la toile.",
    essentiel: [
      "100 % coton ou 1 à 2 % d'élasthanne maximum pour qu'il dure.",
      "Grammage de 12 à 16 oz (340 à 450 g/m²) : assez dense pour durer.",
      "Le selvedge (lisière) n'est pas indispensable, mais signale souvent une toile de qualité."
    ],
    budgets: { petit: "< 50 €", moyen: "50 – 160 €", premium: "> 160 €" },
    matieres: [
      { nom: "Denim 100 % coton", pourquoi: "Robuste, il garde sa forme et se patine magnifiquement : les plis de votre façon de bouger se dessinent au fil des mois (« fades »)." },
      { nom: "Denim selvedge", pourquoi: "Tissé sur d'anciens métiers à navette, plus étroits et plus lents. La toile est souvent plus dense et ses bords sont finis proprement (la lisière visible quand on retourne l'ourlet)." },
      { nom: "Grammage 12 – 16 oz", pourquoi: "L'once (oz) mesure le poids d'un yard carré de toile. Sous 12 oz, le jean est léger mais s'use plus vite ; au-dessus de 16 oz, il est très robuste mais rigide au début." },
      { nom: "Coton + 1 à 2 % d'élasthanne", pourquoi: "Ajoute du confort pour les coupes ajustées sans trop sacrifier la durabilité." },
      { nom: "Denim brut (raw)", pourquoi: "Non lavé après tissage : il rétrécit un peu au premier lavage, mais vieillit de façon unique et dure le plus longtemps." },
      { nom: "Coton biologique ou recyclé", pourquoi: "Le jean est très gourmand en eau et en produits chimiques. Coton bio et procédés de délavage au laser ou à l'ozone réduisent fortement cet impact." }
    ],
    eviter: [
      "Plus de 3 % d'élasthanne : poches aux genoux, tissu qui se détend et s'use à l'entrejambe.",
      "Délavages et déchirures industriels : ils fragilisent la toile dès l'achat et sont très polluants.",
      "Mélanges avec polyester : aspect artificiel, vieillit mal.",
      "Rivets et boutons légers ou peints : ils se cassent ou s'écaillent."
    ],
    astuces: [
      "Lavez votre jean rarement, sur l'envers et à froid, pour garder la couleur.",
      "Un jean brut 100 % coton se détend d'environ une demi-taille : prenez-le bien ajusté.",
      "Vérifiez les coutures doubles, les rivets aux poches et la solidité de l'entrejambe.",
      "Faites repriser l'entrejambe dès qu'il s'amincit : beaucoup de marques le font gratuitement."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Jeans selvedge et denim japonais à petit prix"]],
        A: [["Levi's", "En soldes ou outlet, le 501 reste une valeur sûre"], ["Lee", "Classique solide"], ["Wrangler", "Robuste et sans chichi"]],
        B: [["H&M", "Trop d'élasthanne sur beaucoup de modèles"], ["Kiabi", "Correct pour dépanner"], ["Celio", "Basique"], ["Jules", "Basique"], ["C&A", "Basique"], ["Jack & Jones", "Coupes actuelles, stretch élevé"], ["Bonobo", "Correct, souvent en promotion"]],
        C: [["Primark", "Denim fin"], ["Shein", "Denim fin et synthétique"], ["Bershka", "Stretch excessif"]]
      },
      moyen: {
        S: [["Levi's", "501 et gamme Made & Crafted"], ["1083", "Jeans fabriqués en France, toile solide"]],
        A: [["Nudie Jeans", "Coton bio, réparations gratuites à vie"], ["Lee 101", "Gamme héritage en selvedge"], ["Le Temps des Cerises", "Correct pour le prix"], ["Atelier Tuffery", "Plus ancienne fabrique française de jeans"], ["Asket", "Denim traçable"], ["Arket", "Bons basiques"], ["Carhartt WIP", "Robuste"], ["Sézane", "Jolies coupes féminines"]],
        B: [["Diesel", "Style marqué, qualité variable"], ["Pepe Jeans", "Basique"], ["G-Star Raw", "Coupes originales, stretch fréquent"], ["Replay", "Correct, cher"], ["Tommy Jeans", "Prime logo"], ["Calvin Klein Jeans", "Prime logo"], ["Zara", "Mode, peu durable"]],
        C: [["Jeans mode très délavés", "Durabilité faible quel que soit le nom"]]
      },
      premium: {
        S: [["A.P.C.", "Le Petit Standard, référence du jean brut minimaliste"], ["Momotaro", "Denim japonais lourd et artisanal"], ["Iron Heart", "Toile extrêmement robuste"]],
        A: [["Pure Blue Japan", "Textures uniques"], ["Naked & Famous", "Denims originaux, bon rapport pour du japonais"], ["RRL (Ralph Lauren)", "Héritage américain très soigné"], ["Agolde", "Coupes féminines réussies"], ["Citizens of Humanity", "Belles coupes"], ["Frame", "Coupes flatteuses"], ["Mother", "Coupes flatteuses, stretch modéré"]],
        B: [["Acne Studios", "Belles coupes mais prix mode"], ["7 For All Mankind", "Correct, cher"], ["Re/Done", "Upcycling intéressant, très cher"]],
        C: [["Dsquared2", "Délavés et déchirures à prix d'or"], ["Balmain", "Image avant tout"], ["Amiri", "Image avant tout"], ["Philipp Plein", "Image avant tout"]]
      }
    },
    sources: ["denim", "selvedge", "coton", "elasthanne", "heddels", "rawdenim", "ademe"]
  },
  {
    id: "chino",
    famille: "bas",
    nom: "Chinos",
    resume: "Le pantalon de toile de coton : entre le jean et le pantalon habillé.",
    intro: "Le chino est taillé dans une toile de coton tissée en diagonale (sergé), à l'origine pour les uniformes militaires. Il se porte avec presque tout : t-shirt, chemise, blazer. Un bon chino a une toile dense qui garde son pli et ne se déforme pas aux genoux.",
    essentiel: [
      "Sergé (twill) de coton dense, 250 g/m² ou plus.",
      "100 % coton ou 2 % d'élasthanne maximum.",
      "Faites faire l'ourlet : la longueur juste change tout."
    ],
    budgets: { petit: "< 45 €", moyen: "45 – 140 €", premium: "> 140 €" },
    matieres: [
      { nom: "Sergé (twill) de coton", pourquoi: "Tissage en diagonale, dense et souple : il résiste à l'usure, tombe bien et se repasse facilement." },
      { nom: "Gabardine de coton", pourquoi: "Sergé très serré au toucher lisse : plus habillé, il résiste mieux aux plis." },
      { nom: "Coton-lin", pourquoi: "Plus léger et frais pour l'été, avec un léger aspect froissé." },
      { nom: "Velours côtelé", pourquoi: "Version d'hiver : chaud, doux, texturé." },
      { nom: "Coton + 2 % d'élasthanne", pourquoi: "Plus confortable, surtout en coupe ajustée, mais le 100 % coton vieillit mieux." }
    ],
    eviter: [
      "Toile trop fine : se froisse, se déforme et s'use vite aux poches.",
      "Plus de 3 % d'élasthanne : poches aux genoux.",
      "Mélanges polyester brillants."
    ],
    astuces: [
      "Lavez à 30 °C sur l'envers pour conserver la couleur.",
      "La longueur idéale : le bas touche à peine la chaussure (« légère cassure »).",
      "Un chino beige, un marine et un olive couvrent presque toutes les situations."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Chinos solides et bien coupés"]],
        A: [["Dockers", "En outlet, le chino historique"], ["Celio", "Bonnes coupes basiques"], ["Brice", "Correct"]],
        B: [["H&M", "Choisir le 100 % coton"], ["Zara", "Coupes à la mode, matière moyenne"], ["Jules", "Basique"], ["Springfield", "Correct"], ["Jack & Jones", "Stretch élevé"]],
        C: [["Primark", "Toile fine"], ["Shein", "Synthétique"]]
      },
      moyen: {
        S: [["BonneGueule", "Chinos solides, tissus de qualité"], ["Dockers", "Valeur sûre au prix normal"]],
        A: [["Arket", "Bonnes matières"], ["Asket", "Coupes intemporelles et traçabilité"], ["Gant", "Solide"], ["Hast", "Bon rapport qualité-prix"], ["Faguo", "Coton bio"], ["Bonobo", "Correct en promotion"], ["Carhartt WIP", "Toile robuste"]],
        B: [["Massimo Dutti", "Correct, qualité variable"], ["IKKS", "Correct mais cher"], ["Ralph Lauren", "Correct, prime de marque"], ["Tommy Hilfiger", "Prime de marque"], ["Scotch & Soda", "Style marqué, qualité inégale"]],
        C: [["Hugo Boss", "Prix élevé pour un basique"]]
      },
      premium: {
        S: [["Incotex", "Le spécialiste italien du pantalon"], ["Rota", "Coupes et tissus d'exception"]],
        A: [["Berwich", "Coupes italiennes soignées"], ["Officine Générale", "Tissus nobles"], ["PT Torino", "Coupes modernes de qualité"], ["Brunello Cucinelli", "Superbe, très cher"], ["A.P.C.", "Sobriété et bonne toile"], ["Our Legacy", "Coupes modernes"]],
        B: [["Ralph Lauren (Purple Label)", "Beau mais cher"], ["Ami Paris", "Correct, cher"]],
        C: [["Luxe mode", "Prix très élevé pour un basique"]]
      }
    },
    sources: ["chino", "chino_toile", "serge", "twill", "gabardine", "velours_cotele", "coton"]
  },
  {
    id: "pantalon",
    famille: "bas",
    nom: "Pantalons habillés",
    resume: "Laine pour l'élégance : elle tombe, respire et ne marque pas les plis.",
    intro: "Le pantalon habillé (de costume ou dépareillé) est traditionnellement en laine. Contrairement aux idées reçues, une laine fine est agréable même en été : elle respire et évacue l'humidité. La qualité se voit au tombé, à la ceinture et aux finitions intérieures.",
    essentiel: [
      "Laine vierge : flanelle en hiver, laine froide (« tropical », « fresco ») en été.",
      "Une ceinture intérieure doublée et des coutures surfilées indiquent un travail soigné.",
      "Le pli permanent tient mieux sur la laine que sur tout autre tissu."
    ],
    budgets: { petit: "< 60 €", moyen: "60 – 200 €", premium: "> 200 €" },
    matieres: [
      { nom: "Laine peignée (worsted)", pourquoi: "Laine aux fibres longues, filées parallèles : surface lisse, tombé net, résiste aux plis. Le standard du pantalon de costume." },
      { nom: "Flanelle de laine", pourquoi: "Laine brossée, douce et chaude, à l'aspect mat. Le pantalon d'hiver élégant par excellence." },
      { nom: "Laine fresco / haute torsion", pourquoi: "Fils très tordus et tissage aéré : la laine respire comme du lin mais ne froisse pas. Idéal par temps chaud." },
      { nom: "Gabardine de laine", pourquoi: "Sergé très serré : robuste, légèrement brillant, résiste à la pluie fine." },
      { nom: "Lin", pourquoi: "Très frais pour l'été, avec un aspect décontracté chic." },
      { nom: "Velours côtelé fin", pourquoi: "Alternative décontractée et chaude pour l'automne." }
    ],
    eviter: [
      "Polyester majoritaire : brille, chauffe, garde les odeurs et marque l'usure aux cuisses.",
      "Ceinture non doublée qui roule.",
      "Coutures intérieures non finies (fils apparents)."
    ],
    astuces: [
      "Suspendez le pantalon par le bas sur un cintre à pinces : les plis disparaissent naturellement.",
      "Une marge de couture généreuse à l'arrière permet d'agrandir la taille plus tard.",
      "Le pressing use la laine : brossez et aérez entre deux nettoyages."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Pantalons en laine mélangée et « Smart Ankle » très corrects"]],
        A: [["Celio", "Quelques modèles en laine"], ["Brice", "Correct"]],
        B: [["Zara", "Coupes à la mode, polyester fréquent"], ["H&M", "Polyester fréquent"], ["Jules", "Basique"], ["Mango", "Variable"], ["C&A", "Basique"]],
        C: [["Primark", "Polyester"], ["Shein", "Polyester"]]
      },
      moyen: {
        S: [["Suitsupply", "Laine italienne à prix juste"], ["BonneGueule", "Belles laines et coupes"]],
        A: [["Arket", "Bonnes laines"], ["COS", "Coupes architecturales, laine correcte"], ["Hackett", "Classique anglais"], ["Massimo Dutti", "Gamme laine correcte"], ["Sézane", "Pantalons féminins réussis"], ["Hast", "Bon rapport qualité-prix"]],
        B: [["Hugo Boss", "Correct mais cher"], ["Mango", "Variable"], ["Maje", "Mode, matières moyennes"], ["Sandro", "Mode, matières moyennes"], ["De Fursac", "Correct, prix élevé"]],
        C: [["The Kooples", "Polyester vendu cher"]]
      },
      premium: {
        S: [["Rota", "Pantalons de laine d'exception"], ["Incotex", "Référence italienne"]],
        A: [["Zegna", "Tissus maison de premier ordre"], ["Max Mara", "Pantalons féminins impeccables"], ["Berwich", "Coupes italiennes"], ["Officine Générale", "Laines nobles"], ["Joseph", "Coupes féminines modernes"], ["Ring Jacket", "Construction japonaise exceptionnelle"]],
        B: [["Canali", "Bon mais cher"], ["Brioni", "Superbe, tarif extrême"]],
        C: [["Luxe mode", "Prix sans rapport avec la construction"]]
      }
    },
    sources: ["pantalon", "laine", "flanelle", "gabardine", "super100", "permanentstyle"]
  },
  {
    id: "short",
    famille: "bas",
    nom: "Shorts & bermudas",
    resume: "Pour l'été : légèreté, respirabilité et une coupe à la bonne longueur.",
    intro: "Le short doit avant tout être frais. La longueur idéale s'arrête au-dessus du genou (5 à 7 pouces d'entrejambe pour un short, plus long pour un bermuda). Les mêmes règles que pour le chino s'appliquent : une toile dense dure plus longtemps.",
    essentiel: [
      "Coton sergé, lin ou seersucker pour la ville ; nylon pour la plage ou le sport.",
      "Une toile assez dense pour ne pas se froisser en quelques minutes.",
      "Longueur : au-dessus du genou, jamais en dessous pour un look net."
    ],
    budgets: { petit: "< 30 €", moyen: "30 – 100 €", premium: "> 100 €" },
    matieres: [
      { nom: "Sergé de coton", pourquoi: "Le short chino classique : solide, facile d'entretien, élégant." },
      { nom: "Lin ou coton-lin", pourquoi: "Le plus frais : évacue la chaleur. Il froisse, mais c'est l'esprit." },
      { nom: "Seersucker", pourquoi: "Coton gaufré qui ne colle pas à la peau, très agréable en canicule." },
      { nom: "Nylon / polyamide", pourquoi: "Pour le sport et la plage : sèche en quelques minutes." },
      { nom: "Denim léger", pourquoi: "Décontracté et robuste, préférez une toile de 10 à 12 oz." }
    ],
    eviter: [
      "Jeans coupés en short avec beaucoup d'élasthanne : se déforment.",
      "Coton très fin qui froisse et devient informe.",
      "Polyester pour la ville : chaud et brillant."
    ],
    astuces: [
      "Un short ajusté sur la cuisse mais pas serré allonge la silhouette.",
      "Avec un short, privilégiez des chaussettes invisibles ou pas de chaussettes."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Shorts chinos et lin très corrects"]],
        A: [["Decathlon", "Shorts de sport et de randonnée imbattables"], ["Celio", "Bons basiques"], ["Dockers", "En outlet"]],
        B: [["H&M", "Basique"], ["Zara", "Mode"], ["Jack & Jones", "Correct"], ["Pull&Bear", "Peu durable"]],
        C: [["Primark", "Peu durable"], ["Shein", "Peu durable"]]
      },
      moyen: {
        S: [["BonneGueule", "Shorts bien coupés en belles toiles"], ["Patagonia", "Baggies indestructibles, réparables"]],
        A: [["Arket", "Bonnes matières"], ["Gant", "Solide"], ["Faguo", "Coton bio"], ["Carhartt WIP", "Robuste"], ["Hast", "Bon rapport qualité-prix"], ["Le Mont Saint Michel", "Toiles de travail françaises"]],
        B: [["Ralph Lauren", "Prime de marque"], ["Tommy Hilfiger", "Prime de marque"], ["Massimo Dutti", "Variable"]],
        C: [["Hugo Boss", "Cher pour un basique"]]
      },
      premium: {
        S: [["Orlebar Brown", "Shorts tailleur et de bain, finitions remarquables"], ["Incotex", "Shorts chinos italiens"]],
        A: [["Officine Générale", "Toiles nobles"], ["Vilebrequin", "Lin et coton haut de gamme"], ["Brunello Cucinelli", "Superbe, très cher"], ["Norse Projects", "Coupes soignées"]],
        B: [["Ralph Lauren (Purple Label)", "Très cher"]],
        C: [["Luxe mode", "Prix du nom"]]
      }
    },
    sources: ["serge", "lin", "seersucker", "polyamide", "denim"]
  },
  {
    id: "jogging",
    famille: "bas",
    nom: "Joggings",
    resume: "Le confort à la maison ou en ville : molleton épais pour durer, technique pour le sport.",
    intro: "Le pantalon de jogging est taillé dans le même molleton que les sweats. Pour la ville ou la maison, un molleton épais en coton garde sa forme et ne bouloche pas. Pour courir, préférez une matière technique qui sèche vite.",
    essentiel: [
      "Molleton de coton épais (300 g/m² et plus) pour un usage quotidien.",
      "Côtes de cheville et ceinture élastique épaisses qui ne se détendent pas.",
      "Polyester ou polyamide technique uniquement pour le sport."
    ],
    budgets: { petit: "< 30 €", moyen: "30 – 110 €", premium: "> 110 €" },
    matieres: [
      { nom: "Molleton bouclé", pourquoi: "Respirant et agréable, il convient toute l'année." },
      { nom: "Molleton gratté", pourquoi: "Plus chaud et très doux : idéal pour l'hiver ou la maison." },
      { nom: "Coton + un peu de polyester (10 – 20 %)", pourquoi: "Aide à garder la forme aux genoux et limite le rétrécissement." },
      { nom: "Polyester / polyamide technique", pourquoi: "Pour le sport : léger, sèche vite, ne se gorge pas de sueur." },
      { nom: "Cachemire ou laine mérinos", pourquoi: "Version luxe d'intérieur : chaude et douce, mais délicate." }
    ],
    eviter: [
      "Molleton fin : poches aux genoux en quelques ports.",
      "Plus de 50 % de polyester pour la maison : boulochage et électricité statique."
    ],
    astuces: [
      "Lavez sur l'envers à 30 °C.",
      "Un jogging droit ou légèrement fuselé, sans logo, se porte plus facilement en ville."
    ],
    tiers: {
      petit: {
        S: [["Decathlon", "Imbattable pour le sport comme pour la maison"]],
        A: [["Uniqlo", "Joggings corrects, gamme Ultra Stretch confortable"], ["Champion", "Robuste"]],
        B: [["H&M", "Fin"], ["Kiabi", "Basique"], ["Jack & Jones", "Correct"], ["Celio", "Basique"]],
        C: [["Primark", "Se déforme vite"], ["Shein", "Synthétique"]]
      },
      moyen: {
        S: [["Asphalte", "Molleton épais et durable"], ["Loom", "Très dense"]],
        A: [["Nike", "Tech Fleece confortable, prime marketing"], ["Adidas", "Classiques solides"], ["Patagonia", "Durable"], ["Arket", "Bon molleton"], ["Colorful Standard", "Coton bio lourd"], ["New Balance", "Correct"], ["Le Coq Sportif", "Bon rapport qualité-prix"]],
        B: [["Puma", "Correct"], ["Under Armour", "Correct"], ["Lacoste", "Cher"], ["Gymshark", "Surtout marketing"]],
        C: [["Tommy Hilfiger", "Prix du logo"], ["Calvin Klein", "Prix du logo"]]
      },
      premium: {
        S: [["Reigning Champ", "Molleton canadien très dense"], ["Merz b. Schwanen", "Loopwheel durable"]],
        A: [["Sunspel", "Molleton loopback"], ["Ami Paris", "Bonne qualité"], ["Lululemon", "Excellent confort, technique"], ["Derek Rose", "Joggings d'intérieur luxueux"]],
        B: [["Stone Island", "Technique, très cher"], ["Sporty & Rich", "Image"]],
        C: [["Balenciaga", "Logo"], ["Moncler", "Prix du nom"]]
      }
    },
    sources: ["jogging", "french_terry", "coton", "polyester", "pilling"]
  }
);
