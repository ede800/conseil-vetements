VETEMENTS.push(
  {
    id: "tshirt",
    famille: "hauts",
    nom: "T-shirts",
    resume: "La pièce de base. Le poids du tissu et la qualité du coton font toute la différence.",
    intro: "Un t-shirt semble simple, mais deux modèles d'apparence identique peuvent durer trois mois ou cinq ans. Ce qui compte : la longueur des fibres de coton (plus elles sont longues, plus le fil est solide et doux), le grammage (le poids du tissu au mètre carré) et la tenue du col.",
    essentiel: [
      "Choisissez du 100 % coton, idéalement à fibres longues (Supima, Pima, égyptien) ou biologique.",
      "Visez un grammage de 180 à 240 g/m² : le tissu n'est pas transparent et ne se déforme pas.",
      "Vérifiez le col : épais, bien cousu, avec un ruban intérieur. C'est lui qui lâche en premier."
    ],
    budgets: { petit: "< 20 €", moyen: "20 – 60 €", premium: "> 60 €" },
    matieres: [
      { nom: "Coton à fibres longues (Supima, Pima, égyptien)", pourquoi: "Les fibres de coton font naturellement entre 2 et 5 cm. Les variétés « longues fibres » dépassent 3,5 cm : on peut en faire un fil plus fin et plus solide, avec moins de bouts de fibres qui dépassent. Résultat : un toucher plus doux, moins de boulochage et une couleur qui tient mieux." },
      { nom: "Coton peigné", pourquoi: "Le peignage est une étape qui retire les fibres trop courtes avant de filer. Le fil est plus régulier et plus lisse. C'est un gage de qualité que l'on trouve même sur des t-shirts abordables." },
      { nom: "Jersey épais (180 – 240 g/m²)", pourquoi: "Le jersey est la maille utilisée pour les t-shirts. Plus il est lourd, mieux il tombe et moins il est transparent. Un jersey de moins de 150 g/m² se déforme et vrille vite." },
      { nom: "Coton biologique", pourquoi: "Même confort que le coton classique, mais cultivé sans pesticides ni engrais de synthèse. Les labels GOTS ou OCS garantissent l'origine." },
      { nom: "Laine mérinos fine (150 – 190 g/m²)", pourquoi: "Idéal en voyage ou en randonnée : la laine régule la température et ne garde pas les odeurs. On peut porter le même t-shirt plusieurs jours. Plus fragile que le coton, il faut le laver délicatement." },
      { nom: "Lin ou coton-lin", pourquoi: "Pour les fortes chaleurs : le lin évacue la transpiration et sèche vite. Il froisse, mais c'est son charme." }
    ],
    eviter: [
      "Coton très fin (< 150 g/m²) : col qui gondole, coutures qui tournent sur le côté après quelques lavages.",
      "Polyester en dehors du sport : il ne respire pas et garde les odeurs.",
      "Mélanges coton/polyester bon marché : ils boulochent (petites boules de fibres) rapidement.",
      "Imprimés plastifiés épais : ils craquellent au lavage et rendent le tissu moins respirant."
    ],
    astuces: [
      "Regardez à l'intérieur du col : une bande de propreté (ruban cousu sur la couture) indique un t-shirt soigné.",
      "Lavez à 30 °C, sur l'envers, et évitez le sèche-linge : c'est lui qui fait rétrécir et vieillir le coton.",
      "Un t-shirt « tubulaire » (sans couture sur les côtés) vrille moins.",
      "Prenez la taille juste : la couture d'épaule doit tomber pile sur l'os de l'épaule."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Gammes Supima et Uniqlo U : coton épais, coupe nette, imbattable à ce prix"]],
        A: [["Decathlon", "Basiques techniques et coton correct, excellent pour le sport"], ["Petit Bateau", "Coton doux et résistant, coupes adultes réussies"], ["Celio", "Basiques en coton bio honnêtes, surtout en lot"]],
        B: [["H&M", "Correct si on choisit les modèles épais en coton bio"], ["C&A", "Basique, se déforme assez vite"], ["Jack & Jones", "Coupes actuelles, coton fin"], ["Kiabi", "Prix très bas, durée de vie courte"]],
        C: [["Primark", "Coton très fin qui se déforme en quelques lavages"], ["Shein", "Qualité très aléatoire, synthétique fréquent, impact social et environnemental lourd"]]
      },
      moyen: {
        S: [["Asphalte", "T-shirts épais conçus pour durer, production européenne"], ["Loom", "Transparence totale sur les coûts, coton lourd très solide"]],
        A: [["Arket", "Coton bio épais, coupes modernes"], ["Armor Lux", "Fabrication solide, marque historique bretonne"], ["Colorful Standard", "Coton bio lourd, très belles couleurs"], ["Le Slip Français", "Made in France, bonne tenue"], ["Asket", "Traçabilité complète, coupe intemporelle"], ["American Vintage", "Toucher très doux, mais coton fin qui vieillit plus vite"]],
        B: [["COS", "Beau style mais qualité variable selon les modèles"], ["Zara", "Prix moyen pour une qualité de fast-fashion"], ["Levi's", "Correct, on paie une partie du logo"], ["Carhartt WIP", "Coton épais, mais prix gonflé par la marque"]],
        C: [["Tommy Hilfiger", "Basique vendu cher pour le logo"], ["Calvin Klein", "Coton standard, prime de marque élevée"], ["Lacoste", "Les t-shirts sont nettement moins bons que les polos de la marque"]]
      },
      premium: {
        S: [["Sunspel", "Référence anglaise depuis 1860, coton longues fibres exceptionnel"], ["Merz b. Schwanen", "Tricoté sur métiers anciens, quasi indestructible"]],
        A: [["Officine Générale", "Coton japonais, finitions soignées"], ["Norse Projects", "Coton épais, style scandinave sobre"], ["A.P.C.", "Coupes nettes, coton de qualité"], ["Ami Paris", "Bonne qualité, mais le logo pèse dans le prix"], ["Brunello Cucinelli", "Coton et coton-cachemire somptueux, prix très élevé"]],
        B: [["Ralph Lauren", "Bonne qualité mais prix gonflé par la marque"], ["Hugo Boss", "Correct, sans plus"], ["Acne Studios", "Jolies coupes, qualité inégale pour le prix"]],
        C: [["Balenciaga", "T-shirt basique vendu plusieurs centaines d'euros"], ["Gucci", "On paie l'imprimé, pas le coton"], ["Off-White", "Logo et marketing avant tout"], ["Dior", "Prix sans rapport avec la matière"]]
      }
    },
    sources: ["coton", "supima", "pima", "jersey", "fabric_weight", "pilling", "gots", "supima_org"]
  },
  {
    id: "polo",
    famille: "hauts",
    nom: "Polos",
    resume: "Entre le t-shirt et la chemise. Le piqué de coton et la tenue du col sont essentiels.",
    intro: "Le polo est né sur les courts de tennis grâce à René Lacoste. Un bon polo garde un col qui reste droit et ne « gondole » pas après lavage, et un tissu qui respire. Tout se joue sur la maille (piqué ou jersey) et sur la qualité du col.",
    essentiel: [
      "Le piqué de coton est le choix classique : texturé, respirant, il cache bien la transpiration.",
      "Le col doit être en maille côtelée épaisse ou tissé : c'est le premier point d'usure.",
      "Un polo en maille fine (laine, coton fil d'Écosse) s'habille plus facilement sous une veste."
    ],
    budgets: { petit: "< 30 €", moyen: "30 – 100 €", premium: "> 100 €" },
    matieres: [
      { nom: "Piqué de coton", pourquoi: "Maille en relief (petits nids d'abeille) qui laisse passer l'air et décolle le tissu de la peau. C'est la matière du polo de tennis originel : respirante et robuste." },
      { nom: "Coton fil d'Écosse (mercerisé)", pourquoi: "Coton traité pour être plus lisse, plus brillant et plus résistant. Il donne un polo très élégant, au toucher frais, qui se porte facilement en ville." },
      { nom: "Jersey de coton", pourquoi: "Maille lisse comme celle d'un t-shirt : plus doux et plus fluide que le piqué, mais il marque davantage la transpiration." },
      { nom: "Laine mérinos ou maille fine", pourquoi: "Le polo en maille (tricoté) est la version la plus habillée. En mérinos, il se porte toute l'année et reste net sous un blazer." },
      { nom: "Lin ou coton-lin", pourquoi: "Pour l'été : très frais, avec un aspect décontracté et un tombé souple." }
    ],
    eviter: [
      "Cols fins qui s'enroulent : impossible de les remettre droits après quelques lavages.",
      "Polyester majoritaire hors sport : brille, garde les odeurs.",
      "Gros logos brodés qui gonflent le prix sans améliorer la qualité.",
      "Boutons en plastique fin qui se cassent : signe de finitions économisées."
    ],
    astuces: [
      "Séchez vos polos à plat ou sur cintre, col bien remis en forme, pour qu'il reste droit.",
      "Les manches doivent s'arrêter à mi-biceps et la longueur couvrir la ceinture sans dépasser le haut des poches arrière.",
      "Un polo à patte de boutonnage longue (3 boutons) se porte plus facilement ouvert."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Polos en piqué et en coton Dry corrects, gamme maille très réussie"]],
        A: [["Decathlon", "Polos de sport et piqué basique solides"], ["Celio", "Piqué honnête, souvent en promotion"], ["Jules", "Bon basique en soldes"]],
        B: [["H&M", "Col fragile sur les modèles d'entrée"], ["Kiabi", "Dépanne, sans plus"], ["C&A", "Coton fin"], ["Jack & Jones", "Coupes actuelles mais tenue moyenne"]],
        C: [["Primark", "Col qui s'enroule rapidement"], ["Shein", "Synthétique et finitions fragiles"]]
      },
      moyen: {
        S: [["Lacoste", "Le polo L.12.12 reste une référence de piqué solide, surtout fabriqué en France ou en Europe"], ["Fred Perry", "Polos M12 robustes, cols tissés qui durent"]],
        A: [["Armor Lux", "Piqué épais, fabrication française pour une partie de la gamme"], ["Saint James", "Polos solides d'inspiration marine"], ["Gant", "Bonne qualité régulière"], ["Faguo", "Coton bio, bon rapport qualité-prix"], ["Arket", "Belles mailles fines"]],
        B: [["Ralph Lauren", "Le polo Polo reste correct, mais la qualité a baissé et le logo coûte cher"], ["Tommy Hilfiger", "Correct, prime de marque"], ["Massimo Dutti", "Variable"], ["Zara", "Style actuel, tenue moyenne"]],
        C: [["Hugo Boss", "Prix élevé pour une qualité standard"], ["Calvin Klein", "Coton moyen, logo avant tout"]]
      },
      premium: {
        S: [["John Smedley", "Polos en maille Sea Island et mérinos, fabrication anglaise d'exception"], ["Sunspel", "Le polo Riviera, élégant et très bien construit"]],
        A: [["Brunello Cucinelli", "Coton piqué et mailles somptueux, prix très élevé"], ["Zegna", "Mailles fines haut de gamme"], ["Loro Piana", "Matières rares, pour budgets très confortables"], ["Officine Générale", "Polos en maille élégants"], ["Drumohr", "Mailles italiennes raffinées"]],
        B: [["Ralph Lauren (Purple Label)", "Belle qualité mais tarif luxe"], ["Moncler", "Correct, surtout pour l'image"]],
        C: [["Gucci", "Prix du logo"], ["Prada", "Qualité standard pour le tarif"], ["Burberry", "Prix gonflé par les motifs maison"]]
      }
    },
    sources: ["polo", "polo_en", "coton", "fil_ecosse", "merinos", "pilling"]
  },
  {
    id: "debardeur",
    famille: "hauts",
    nom: "Débardeurs",
    resume: "Pour la chaleur, le sport ou en sous-couche : douceur et maintien avant tout.",
    intro: "Le débardeur sert à trois choses : se rafraîchir en été, faire du sport, ou se porter discrètement sous une chemise. Dans tous les cas, il est en contact direct avec la peau : il doit être doux, respirant et garder sa forme.",
    essentiel: [
      "Côtes de coton (maille « marcel ») pour la tenue et le maintien.",
      "Modal ou lyocell pour la douceur en sous-couche.",
      "Polyester technique uniquement pour le sport."
    ],
    budgets: { petit: "< 15 €", moyen: "15 – 45 €", premium: "> 45 €" },
    matieres: [
      { nom: "Maille côtelée de coton", pourquoi: "La maille à côtes (petites rayures en relief) est élastique naturellement : elle épouse le corps sans élasthanne et reprend sa forme. C'est la matière du débardeur classique." },
      { nom: "Coton peigné", pourquoi: "Plus lisse et plus résistant que le coton ordinaire, il reste agréable au fil des lavages." },
      { nom: "Modal ou lyocell", pourquoi: "Fibres issues du bois, très douces et absorbantes. Idéales en sous-couche : elles évacuent la transpiration et ne collent pas." },
      { nom: "Lin", pourquoi: "Le plus frais en canicule. Moins près du corps, plus décontracté." },
      { nom: "Polyester ou polyamide technique", pourquoi: "Pour le sport uniquement : sèche très vite et évacue la sueur." }
    ],
    eviter: [
      "Coton très fin qui se détend et devient transparent.",
      "Emmanchures qui baillent après lavage : signe d'une maille de mauvaise qualité.",
      "Polyester pour un usage quotidien : odeurs."
    ],
    astuces: [
      "En sous-couche sous une chemise, préférez un débardeur blanc cassé ou couleur peau : il se voit moins qu'un blanc pur.",
      "Lavez à 40 °C maximum pour éviter le rétrécissement de la maille côtelée."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Airism et côtes de coton très bien faits"]],
        A: [["Petit Bateau", "Coton côtelé doux et solide"], ["Dim", "Classique fiable en sous-couche"], ["Decathlon", "Sport : excellent rapport qualité-prix"]],
        B: [["H&M", "Correct, se détend"], ["Celio", "Basique"], ["Monoprix", "Bon dépannage, qualité variable"]],
        C: [["Primark", "Se déforme vite"], ["Shein", "Synthétique, fragile"]]
      },
      moyen: {
        S: [["Le Slip Français", "Débardeurs côtelés fabriqués en France"], ["Sunspel", "Gamme d'entrée déjà très bonne"]],
        A: [["Arket", "Côtes épaisses"], ["Calzedonia", "Bon basique féminin"], ["Intimissimi", "Doux, coton et modal"], ["Armor Lux", "Solide"], ["Organic Basics", "Coton bio et lyocell, bonne tenue"]],
        B: [["Calvin Klein", "Correct mais prime logo"], ["Hom", "Bon confort, prix un peu élevé"], ["Zara", "Mode, tenue moyenne"]],
        C: [["Tommy Hilfiger", "Prix pour le logo"]]
      },
      premium: {
        S: [["Zimmerli", "Le débardeur de luxe par excellence, coton et modal suisses"], ["Sunspel", "Coton Sea Island, durable"]],
        A: [["Hanro", "Douceur remarquable"], ["Derek Rose", "Finitions soignées"], ["Wolford", "Mailles féminines de grande qualité"]],
        B: [["Hugo Boss", "Correct"]],
        C: [["Marques de luxe à logo", "Aucun intérêt technique"]]
      }
    },
    sources: ["debardeur", "tank_top", "modal", "lyocell", "coton", "wicking"]
  },
  {
    id: "chemise",
    famille: "hauts",
    nom: "Chemises",
    resume: "Le tissage (oxford, popeline, twill…) détermine le style et l'usage.",
    intro: "Une chemise se choisit d'abord par son tissage, c'est-à-dire la façon dont les fils sont croisés. Il détermine l'aspect (brillant, mat, texturé), la tenue (froisse ou non) et l'usage (bureau, week-end, été). Ensuite, la qualité se voit dans les coutures, le col et les boutons.",
    essentiel: [
      "Oxford pour le décontracté, popeline pour le bureau, twill pour une chemise qui froisse peu, lin pour l'été.",
      "100 % coton (ou lin) : les mélanges avec polyester font transpirer.",
      "Regardez les coutures : fines, serrées (6 à 8 points par cm) et des motifs alignés."
    ],
    budgets: { petit: "< 40 €", moyen: "40 – 130 €", premium: "> 130 €" },
    matieres: [
      { nom: "Coton Oxford", pourquoi: "Tissage épais et légèrement texturé (fils croisés deux par deux). Très robuste, il s'adoucit avec les lavages et se porte sans repassage parfait. La chemise décontractée par excellence." },
      { nom: "Popeline de coton", pourquoi: "Tissage serré avec des fils fins : surface lisse et légèrement brillante. C'est la chemise de bureau et des occasions habillées. Plus fragile que l'oxford et elle demande un repassage." },
      { nom: "Twill (sergé) de coton", pourquoi: "Tissage en diagonale, souple et dense. Il froisse moins que la popeline et se repasse très facilement : bon compromis pour un usage quotidien." },
      { nom: "Lin", pourquoi: "Le tissu de l'été : il évacue la chaleur et l'humidité mieux que tout autre. Il froisse naturellement, c'est attendu et élégant." },
      { nom: "Flanelle de coton", pourquoi: "Coton brossé pour être doux et gonflant : chaud et confortable en automne-hiver." },
      { nom: "Chambray / denim léger", pourquoi: "Aspect jean mais léger. Polyvalent, il va avec presque tout dans une garde-robe décontractée." },
      { nom: "Seersucker", pourquoi: "Coton gaufré qui ne colle pas à la peau : idéal par forte chaleur, ne se repasse pas." }
    ],
    eviter: [
      "Polyester ou mélanges majoritairement synthétiques : on transpire et le tissu brille.",
      "Chemises « sans repassage » traitées à la résine : moins respirantes, moins douces et la traitement disparaît avec les lavages.",
      "Viscose bon marché : rétrécit et se déforme au lavage.",
      "Cols collés (thermocollés) de mauvaise qualité : des bulles apparaissent."
    ],
    astuces: [
      "Les coutures doivent être fines et serrées (6 à 8 points par centimètre).",
      "Un col avec baleines amovibles et des boutons en nacre sont des indices de soin.",
      "Les rayures et carreaux bien alignés aux coutures d'épaule et de poche montrent une confection soignée.",
      "Le « nombre de fils » (ex. 100/2) indique la finesse : plus il est élevé, plus c'est fin… mais aussi plus fragile."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Oxford et lin excellents à ce prix"]],
        A: [["Celio", "Coupes correctes, bons prix en soldes"], ["Jules", "Oxford basique honnête"], ["Brice", "Choix classique abordable"], ["Decathlon", "Chemises de randonnée techniques"]],
        B: [["H&M", "Choisir les modèles 100 % coton"], ["Kiabi", "Coton fin, finitions simples"], ["C&A", "Basique"], ["Springfield", "Correct en promotion"], ["Pull&Bear", "Mode, tenue moyenne"]],
        C: [["Primark", "Coutures fragiles"], ["Shein", "Synthétique, coupe approximative"]]
      },
      moyen: {
        S: [["Kamakura Shirts", "Qualité japonaise remarquable pour le prix (marque non occidentale mais incontournable)"], ["Hast", "Chemises bien coupées, rapport qualité-prix excellent"], ["BonneGueule", "Tissus sourcés avec soin, style intemporel"]],
        A: [["Charles Tyrwhitt", "Excellent en promotion, nombreuses longueurs de manche"], ["Arket", "Bonne qualité, style épuré"], ["Gant", "Oxford solide"], ["Alain Figaret", "Spécialiste français de la chemise"], ["Façonnable", "Bonne maison niçoise"], ["Hawes & Curtis", "Chemiserie londonienne abordable"], ["Asket", "Oxford durable et traçable"]],
        B: [["Massimo Dutti", "Qualité inégale selon les collections"], ["Zara", "Style tendance mais tenue moyenne"], ["IKKS", "Correct, plutôt cher"], ["Mango", "Variable"], ["Sézane", "Jolies chemises féminines, qualité parfois inégale"], ["Ralph Lauren", "Oxford correct mais moins bon qu'avant"]],
        C: [["Tommy Hilfiger", "Prix élevé pour une qualité standard"], ["Hugo Boss", "Logo et thermocollage"], ["The Kooples", "Prix mode pour des matières moyennes"]]
      },
      premium: {
        S: [["Drake's", "Le haut du panier anglais, style décontracté chic"], ["Charvet", "Chemisier parisien légendaire, sur-mesure"], ["Turnbull & Asser", "Maison londonienne historique"]],
        A: [["Officine Générale", "Tissus italiens et japonais, finitions impeccables"], ["Finamore", "Chemise napolitaine faite main"], ["Emma Willis", "Fabrication anglaise exceptionnelle"], ["Brunello Cucinelli", "Superbe, mais très cher"], ["Our Legacy", "Coupes modernes, belles matières"], ["A.P.C.", "Chemises nettes et durables"]],
        B: [["Eton", "Qualité réelle mais prix élevé"], ["Ralph Lauren (Purple Label)", "Très beau, tarif luxe"], ["Acne Studios", "Mode avant tout"]],
        C: [["Saint Laurent", "Prix de luxe pour une chemise standard"], ["Balenciaga", "Image avant matière"], ["Versace", "On paie l'imprimé"]]
      }
    },
    sources: ["chemise", "oxford", "popeline", "serge", "twill", "lin", "flanelle", "seersucker", "thread_count"]
  },
  {
    id: "surchemise",
    famille: "hauts",
    nom: "Surchemises",
    resume: "À mi-chemin entre chemise et veste : un tissu épais qui protège sans encombrer.",
    intro: "La surchemise (ou « overshirt ») se porte ouverte sur un t-shirt ou fermée comme une chemise épaisse. Elle remplace une veste légère à la mi-saison. Le critère clé est l'épaisseur du tissu : elle doit tenir chaud et garder sa forme.",
    essentiel: [
      "Tissu épais : laine, flanelle épaisse, velours côtelé ou toile de coton robuste.",
      "Coutures renforcées et poches solides : c'est une pièce de travail à l'origine.",
      "Une laine mélangée doit contenir au moins 60 % de laine."
    ],
    budgets: { petit: "< 50 €", moyen: "50 – 160 €", premium: "> 160 €" },
    matieres: [
      { nom: "Drap de laine", pourquoi: "Tient chaud, coupe le vent et reste chaud même humide. Une surchemise en laine remplace un pull et une veste à la fois." },
      { nom: "Velours côtelé épais", pourquoi: "Coton à côtes en relief : chaud, doux et très résistant. Plus les côtes sont larges, plus c'est décontracté." },
      { nom: "Toile de coton (canvas, moleskine)", pourquoi: "Coton très dense, héritier des vestes de travail. Coupe le vent, se patine avec le temps." },
      { nom: "Flanelle épaisse", pourquoi: "Coton ou laine brossée, gonflante et douce : confort maximal." },
      { nom: "Denim épais", pourquoi: "Robuste, se patine comme un jean. Une alternative à la veste en jean." }
    ],
    eviter: [
      "Laine mélangée à moins de 50 % : bouloche et tient peu chaud.",
      "Polyester « effet laine » : boulochage et électricité statique.",
      "Coton trop fin : ce n'est plus une surchemise mais une chemise."
    ],
    astuces: [
      "Prenez une taille qui permet de porter un pull fin dessous.",
      "Brossez la laine plutôt que de la laver souvent."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Surchemises en flanelle et laine mélangée très correctes"]],
        A: [["Decathlon", "Surchemises polaires et outdoor solides"], ["Celio", "Bons modèles en velours"]],
        B: [["H&M", "Choisir les modèles riches en laine"], ["Zara", "Style réussi, matières moyennes"], ["Pull&Bear", "Tendance, peu durable"], ["Jack & Jones", "Correct"]],
        C: [["Primark", "Synthétique"], ["Shein", "Synthétique"]]
      },
      moyen: {
        S: [["BonneGueule", "Surchemises en laine et moleskine très bien construites"], ["Le Laboureur", "Vestes de travail françaises authentiques"]],
        A: [["Vetra", "Veste de travail française historique"], ["Arket", "Bonne laine"], ["Carhartt WIP", "Toile robuste, style workwear"], ["Portuguese Flannel", "Flanelles portugaises de grande qualité"], ["Asket", "Laine traçable"], ["Faguo", "Bon rapport qualité-prix"]],
        B: [["Massimo Dutti", "Correct, variable"], ["Levi's", "Correct en denim"], ["Dickies", "Solide mais coupes larges"]],
        C: [["Marques mode à logo", "Prix élevé, matières moyennes"]]
      },
      premium: {
        S: [["Private White V.C.", "Fabrication mancunienne exemplaire"], ["Universal Works", "Workwear anglais de qualité"]],
        A: [["A.P.C.", "Belle sobriété"], ["Our Legacy", "Matières intéressantes"], ["Officine Générale", "Laines italiennes"], ["Norse Projects", "Construction solide"], ["Barbour", "Surchemises en laine et coton ciré"]],
        B: [["Acne Studios", "Mode, prix élevé"], ["Stone Island", "Technique mais très cher"]],
        C: [["Luxe mode", "Prix sans rapport avec la construction"]]
      }
    },
    sources: ["laine", "velours_cotele", "flanelle", "denim", "heddels"]
  },
  {
    id: "pull",
    famille: "hauts",
    nom: "Pulls & cardigans",
    resume: "La laine est reine. La pire erreur : l'acrylique qui bouloche et ne tient pas chaud.",
    intro: "Un pull tient chaud grâce à l'air emprisonné entre les fibres. La laine est imbattable : elle isole, reste chaude même humide et absorbe l'humidité sans être mouillée au toucher. Le cachemire et le mérinos sont plus doux, les laines plus rustiques (shetland, lambswool) plus résistantes.",
    essentiel: [
      "Au moins 70 % de fibres animales (laine, mérinos, cachemire…).",
      "Une maille serrée dure plus longtemps qu'une maille lâche.",
      "Méfiez-vous du cachemire très bon marché : fibres courtes qui boulochent et se trouent."
    ],
    budgets: { petit: "< 50 €", moyen: "50 – 180 €", premium: "> 180 €" },
    matieres: [
      { nom: "Laine mérinos", pourquoi: "Laine très fine (moins de 24 microns) issue du mouton mérinos : elle ne gratte pas, régule la température et résiste aux odeurs. Le meilleur pull polyvalent, du bureau au week-end." },
      { nom: "Lambswool (laine d'agneau)", pourquoi: "Laine de la première tonte : douce, gonflante, très chaude. Aspect plus rustique que le mérinos, parfaite en hiver." },
      { nom: "Shetland", pourquoi: "Laine des îles Shetland, nerveuse et un peu piquante, mais quasi indestructible. Elle s'adoucit avec le temps." },
      { nom: "Cachemire", pourquoi: "Duvet de la chèvre cachemire : extrêmement doux et jusqu'à trois fois plus chaud que la laine à poids égal. Choisissez un cachemire « 2 fils » (2-ply), plus dense et plus durable." },
      { nom: "Alpaga, mohair, yak", pourquoi: "Fibres très chaudes et légères, au caractère marqué : l'alpaga est doux et gonflant, le mohair brillant et aérien." },
      { nom: "Coton", pourquoi: "Pour la mi-saison : moins chaud que la laine mais lavable facilement et sans démangeaisons." },
      { nom: "Laine shetland ou aran torsadée", pourquoi: "Les pulls irlandais (aran) sont tricotés épais avec une laine qui conserve sa lanoline (graisse naturelle) : chaleur et résistance à la pluie." }
    ],
    eviter: [
      "Acrylique : bouloche dès les premières semaines, ne tient pas chaud, crée de l'électricité statique.",
      "Mélanges avec moins de 50 % de laine : on perd les avantages de la laine.",
      "Cachemire à moins de 80 € : fibres courtes de mauvaise qualité, maille lâche.",
      "Laine « superwash » de bas de gamme : traitée pour passer en machine, elle perd une partie de son gonflant."
    ],
    astuces: [
      "Étirez légèrement la maille : elle doit revenir à sa forme. Une maille serrée dure plus longtemps.",
      "Lavez la laine à froid ou au programme laine, séchez à plat, jamais sur cintre.",
      "Un peu de boulochage au début est normal, même sur un bon cachemire : un peigne à pulls suffit.",
      "Rangez les pulls pliés, avec du bois de cèdre contre les mites."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Mérinos extra-fin et cachemire à prix imbattables"]],
        A: [["Decathlon", "Mérinos technique très efficace"], ["Celio", "Quelques modèles en laine corrects"], ["Monoprix", "Collections laine et cachemire honnêtes en promotion"]],
        B: [["H&M", "Lire l'étiquette : beaucoup de synthétique"], ["Mango", "Variable"], ["Jules", "Basique"], ["C&A", "Laine rare"]],
        C: [["Primark", "Acrylique qui bouloche dès le premier mois"], ["Shein", "Synthétique"], ["Zara", "Prix moyen pour beaucoup d'acrylique et de polyester"]]
      },
      moyen: {
        S: [["Saint James", "Marinières et pulls en laine quasi indestructibles"], ["Asket", "Mérinos et lambswool traçables, très bon rapport qualité-prix"], ["Howlin'", "Shetland écossais coloré"]],
        A: [["Armor Lux", "Laine solide fabriquée en France"], ["Arket", "Bonne laine, style minimaliste"], ["Le Minor", "Pulls marins tricotés en Bretagne"], ["Hartford", "Belles mailles décontractées"], ["Jamieson's of Shetland", "Shetland authentique"], ["Aran Woollen Mills", "Pulls irlandais authentiques"], ["Patagonia", "Laine recyclée et responsable"], ["Sézane", "Belles mailles féminines, qualité correcte"]],
        B: [["COS", "Beaux designs, qualité inégale"], ["Massimo Dutti", "Laine parfois mélangée"], ["Gant", "Correct"], ["& Other Stories", "Jolies mailles, matière variable"], ["Maje", "Mode, matières moyennes pour le prix"], ["Sandro", "Mode, matières moyennes pour le prix"]],
        C: [["Tommy Hilfiger", "Souvent coton/synthétique à prix élevé"], ["The Kooples", "Prix mode"], ["Zadig & Voltaire", "Cachemire mélangé cher"]]
      },
      premium: {
        S: [["John Smedley", "Mérinos et coton Sea Island, maille fine d'exception depuis 1784"], ["Inis Meáin", "Mailles irlandaises luxueuses"], ["Loro Piana", "Le sommet du cachemire, prix à l'avenant"]],
        A: [["William Lockie", "Cachemire et lambswool écossais"], ["Éric Bompard", "Cachemire de qualité, nombreuses couleurs"], ["Drumohr", "Mailles italiennes raffinées"], ["Johnstons of Elgin", "Cachemire écossais intégré de la fibre au pull"], ["Brunello Cucinelli", "Cachemire somptueux"], ["Officine Générale", "Belles laines"]],
        B: [["Ralph Lauren", "Bonne laine mais forte prime marque"], ["Acne Studios", "Mode avant tout"], ["Ami Paris", "Correct, logo cher"]],
        C: [["Prada", "Prix sans rapport avec la matière"], ["Dior", "Prix du nom"], ["Gucci", "Prix du nom"]]
      }
    },
    sources: ["laine", "merinos", "merinos_en", "cachemire", "alpaga", "mohair", "acrylique", "pilling", "woolmark", "iwto", "cardigan"]
  },
  {
    id: "sweat",
    famille: "hauts",
    nom: "Sweats & hoodies",
    resume: "Le confort décontracté. Un bon sweat est en molleton épais et garde sa forme.",
    intro: "Le sweat-shirt est fait de molleton : une maille de coton lisse à l'extérieur et bouclée (ou gratté) à l'intérieur. Le grammage (300 à 500 g/m²) et la qualité des côtes (bas, poignets) font la différence entre un sweat qui dure dix ans et un qui se déforme en une saison.",
    essentiel: [
      "Visez au moins 80 % de coton et un grammage de 300 g/m² ou plus.",
      "Molleton bouclé (« french terry ») pour la mi-saison, gratté pour l'hiver.",
      "Les côtes des poignets et du bas doivent être épaisses et revenir en place quand on les étire."
    ],
    budgets: { petit: "< 35 €", moyen: "35 – 120 €", premium: "> 120 €" },
    matieres: [
      { nom: "Molleton bouclé (french terry)", pourquoi: "Petites boucles à l'intérieur : respirant et agréable, il convient à toutes les saisons et bouloche peu." },
      { nom: "Molleton gratté (brossé)", pourquoi: "L'intérieur est brossé pour devenir duveteux : plus chaud et plus doux, mais il peut perdre un peu de son gonflant avec le temps." },
      { nom: "Coton épais (350 – 500 g/m²)", pourquoi: "Un sweat lourd tombe bien, garde sa forme et vieillit avec du caractère." },
      { nom: "Loopwheel", pourquoi: "Molleton tricoté lentement sur d'anciens métiers circulaires : sans couture latérale, très doux, très durable. Une spécialité de qualité." },
      { nom: "Coton + 5 à 20 % de polyester", pourquoi: "Un peu de polyester limite le rétrécissement et aide à garder la forme. Au-delà de 30 %, le boulochage augmente." }
    ],
    eviter: [
      "Molleton fin (< 250 g/m²) : se déforme et bouloche.",
      "Majorité polyester : électricité statique, odeurs, boulochage.",
      "Gros imprimés plastifiés qui craquellent."
    ],
    astuces: [
      "Lavez sur l'envers à 30 °C pour protéger la surface et les imprimés.",
      "Évitez le sèche-linge : le coton rétrécit de 5 à 10 %."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Sweats corrects, gamme Uniqlo U épaisse"]],
        A: [["Decathlon", "Sweats solides et pas chers"], ["Champion", "Reverse Weave robuste, souvent en promotion"], ["Celio", "Bon basique"]],
        B: [["H&M", "Fin sur l'entrée de gamme"], ["Jack & Jones", "Correct"], ["Pull&Bear", "Mode, peu durable"], ["Bershka", "Peu durable"], ["Kiabi", "Basique"]],
        C: [["Primark", "Bouloche"], ["Shein", "Synthétique"]]
      },
      moyen: {
        S: [["Asphalte", "Sweats épais pensés pour durer"], ["Loom", "Molleton très dense"], ["Colorful Standard", "Coton bio lourd, belles couleurs"]],
        A: [["Arket", "Bon molleton"], ["Le Slip Français", "Made in France"], ["Carhartt WIP", "Robuste, coupe généreuse"], ["Patagonia", "Coton recyclé, durable"], ["Asket", "Molleton traçable"], ["Faguo", "Coton bio"], ["Norse Projects", "Construction soignée"]],
        B: [["Nike", "Correct, prime logo"], ["Adidas", "Correct, prime logo"], ["Levi's", "Basique"], ["Lacoste", "Bien, mais cher"], ["New Balance", "Correct"]],
        C: [["Tommy Hilfiger", "Prix du logo"], ["Calvin Klein", "Prix du logo"], ["Superdry", "Lourd en apparence, finitions moyennes"]]
      },
      premium: {
        S: [["Merz b. Schwanen", "Loopwheel allemand d'exception"], ["Sunspel", "Molleton loopback très bien fait"]],
        A: [["A.P.C.", "Sweats sobres et durables"], ["Reigning Champ", "Molleton canadien très dense"], ["Norse Projects", "Construction soignée"], ["Ami Paris", "Bonne qualité, logo cher"], ["Stone Island", "Qualité technique, prix très élevé"]],
        B: [["Acne Studios", "Mode, prix élevé"], ["Maison Kitsuné", "On paie le logo renard"], ["Sporty & Rich", "Image avant tout"]],
        C: [["Balenciaga", "Logo"], ["Off-White", "Logo"], ["Vetements", "Logo"]]
      }
    },
    sources: ["sweat", "sweat_en", "french_terry", "coton", "pilling", "fabric_weight"]
  },
  {
    id: "blouse",
    famille: "hauts",
    nom: "Blouses & tops",
    resume: "Fluides et légers : les fibres naturelles et le lyocell surpassent largement le polyester.",
    intro: "Les blouses et tops féminins misent sur la fluidité : le tissu doit tomber et bouger avec le corps. Beaucoup de marques utilisent du polyester ou de la viscose bon marché pour cet effet. Les meilleures alternatives respirent, ne collent pas et vieillissent mieux.",
    essentiel: [
      "Soie, lyocell (Tencel), coton voile ou lin pour un tombé fluide et respirant.",
      "Viscose : acceptable si elle est de bonne qualité (EcoVero, LENZING), mais fragile au lavage.",
      "Évitez le polyester satiné : il ne respire pas et marque la transpiration."
    ],
    budgets: { petit: "< 35 €", moyen: "35 – 150 €", premium: "> 150 €" },
    matieres: [
      { nom: "Soie", pourquoi: "Fibre naturelle douce, légère et thermorégulatrice : fraîche en été, isolante en hiver. Elle a un éclat naturel qu'aucun synthétique n'imite vraiment. Fragile, elle se lave à la main ou au programme délicat." },
      { nom: "Lyocell (Tencel)", pourquoi: "Fibre de bois produite en circuit fermé (solvant recyclé). Fluide comme la soie, plus solide que la viscose et très absorbante. Une excellente alternative éthique." },
      { nom: "Coton voile ou batiste", pourquoi: "Coton très fin et léger, presque transparent : frais et naturel." },
      { nom: "Lin", pourquoi: "Plus structuré, très frais, parfait pour l'été." },
      { nom: "Crêpe de laine", pourquoi: "Laine fine au tombé fluide, élégante pour le bureau et qui ne froisse pas." },
      { nom: "Viscose de qualité (EcoVero)", pourquoi: "Fluide et agréable, mais rétrécit et se déforme si mal lavée. Les versions certifiées sont moins polluantes." }
    ],
    eviter: [
      "Polyester satiné : effet soie artificiel, ne respire pas, marque la transpiration.",
      "Viscose bas de gamme : rétrécit de plusieurs centimètres au premier lavage.",
      "Coutures non surfilées (bords qui s'effilochent) à l'intérieur."
    ],
    astuces: [
      "Lavez la soie et la viscose à froid, à la main ou en filet, et séchez à plat.",
      "Repassez la soie sur l'envers, à basse température.",
      "Tenez le tissu face à la lumière : un tissage régulier, sans zones plus fines, est un signe de qualité."
    ],
    tiers: {
      petit: {
        S: [["Uniqlo", "Blouses en rayonne et lin, bonnes basiques"]],
        A: [["Mango", "Quelques beaux modèles en lin et lyocell"], ["Monoprix", "Correct en coton et lin"], ["Promod", "Bons basiques"]],
        B: [["H&M", "Beaucoup de polyester"], ["Zara", "Joli style, matière souvent synthétique"], ["Pimkie", "Basique"], ["Stradivarius", "Peu durable"], ["Bershka", "Peu durable"]],
        C: [["Primark", "Synthétique"], ["Shein", "Synthétique, impact social lourd"]]
      },
      moyen: {
        S: [["Sézane", "Belles matières naturelles, coupes féminines"], ["Rouje", "Style parisien, soie et coton"], ["Everlane", "Soie lavable et transparence des prix"]],
        A: [["& Other Stories", "Jolies blouses, à choisir en fibres naturelles"], ["Arket", "Bonnes matières"], ["Des Petits Hauts", "Coton et lin bien travaillés"], ["Comptoir des Cotonniers", "Classique et correct"], ["Reformation", "Matières responsables"], ["Sessùn", "Matières naturelles soignées"], ["Ganni", "Créatif, qualité correcte"]],
        B: [["Maje", "Très beau style, matières parfois synthétiques pour le prix"], ["Sandro", "Même constat"], ["ba&sh", "Viscose fréquente"], ["Claudie Pierlot", "Correct"], ["Massimo Dutti", "Variable"], ["COS", "Variable"]],
        C: [["The Kooples", "Polyester vendu cher"], ["Zadig & Voltaire", "Prix mode"]]
      },
      premium: {
        S: [["Vince", "Soie et cachemire sobres et durables"], ["The Row", "Matières d'exception, sobriété absolue"], ["Max Mara", "Qualité constante, coupes intemporelles"]],
        A: [["Isabel Marant", "Beaux tissus, style bohème"], ["Vanessa Bruno", "Matières naturelles"], ["Totême", "Minimalisme scandinave soigné"], ["Joseph", "Belles matières"], ["Loro Piana", "Matières rares"], ["Lemaire", "Coupes et tissus remarquables"]],
        B: [["Chloé", "Très beau mais prix du nom"], ["Zimmermann", "Joli, cher pour la matière"]],
        C: [["Balenciaga", "Image avant matière"], ["Versace", "Image avant matière"]]
      }
    },
    sources: ["soie", "lyocell", "tencel", "viscose", "lin", "coton", "polyester"]
  }
);
