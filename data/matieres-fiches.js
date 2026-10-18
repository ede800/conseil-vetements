// Fiches détaillées des matières (page #/matiere/<slug>).
// Les prix sont des ordres de grandeur indicatifs (2024–2025), qui varient selon la qualité, les cours et les volumes.
// cles : mots qui permettent de retrouver la matière dans les fiches des pièces.

const FICHES = {};
const F = (nom, d) => { FICHES[nom] = d; };

// ---------- Fibres végétales ----------
F("Coton", {
  cles: ["coton", "coton peigne"],
  origine: "Le coton pousse sur un arbuste, le cotonnier. Après la floraison, le fruit (la capsule) s'ouvre et libère une boule de fibres blanches qui entourent les graines. On récolte ces fibres, on les sépare des graines (égrenage), puis on les nettoie, on les carde et on les file.",
  pays: "Inde, Chine, États-Unis, Brésil, Pakistan, Ouzbékistan",
  prix: "≈ 1,4 à 1,8 $ le kilo de fibre brute (cours mondial)",
  production: "≈ 25 millions de tonnes par an, environ un cinquième des fibres textiles",
  histoire: "Cultivé depuis plus de 7 000 ans dans la vallée de l'Indus et en Amérique. L'invention de l'égreneuse mécanique par Eli Whitney en 1793 a fait exploser la production… et l'esclavage dans le sud des États-Unis.",
  impact: "Très gourmand en eau en culture irriguée et grand consommateur de pesticides. L'assèchement de la mer d'Aral est en grande partie dû à l'irrigation des champs de coton d'Asie centrale.",
  reconnaitre: "Toucher mat et doux, légèrement frais. Il absorbe l'eau immédiatement et se froisse quand on le serre dans la main.",
  anecdote: "On cite souvent le chiffre de 2 700 litres d'eau pour fabriquer un seul t-shirt en coton conventionnel.",
  sources: ["coton", "cotton_en", "icac", "ice_cotton", "cottoninc"]
});
F("Coton biologique", {
  cles: ["coton bio", "coton biologique"],
  origine: "Même plante que le coton classique, cultivée sans pesticides ni engrais de synthèse et à partir de semences non OGM. La fibre est ensuite transformée comme un coton classique ; le label GOTS contrôle aussi les étapes de teinture et de confection.",
  pays: "Inde (plus de la moitié de l'offre mondiale), Turquie, Chine, Tanzanie, Ouganda",
  prix: "En général 10 à 30 % plus cher que le coton conventionnel à la fibre",
  production: "Moins de 2 % du coton mondial",
  histoire: "Les premières filières certifiées se développent dans les années 1990, portées par des marques pionnières comme Patagonia, qui passe à 100 % de coton biologique en 1996.",
  impact: "Moins de produits chimiques et des sols mieux préservés. Le rendement plus faible demande plus de surface pour la même quantité de fibre.",
  reconnaitre: "Impossible à distinguer au toucher : seule la certification (GOTS, OCS) fait foi.",
  anecdote: "Le coton bio est très majoritairement cultivé par de petits producteurs, sur des exploitations de quelques hectares.",
  sources: ["organic_cotton", "gots", "textileexchange"]
});
F("Coton à fibres longues (Supima, Pima, égyptien, Sea Island)", {
  cles: ["supima", "pima", "egyptien", "sea island", "fibres longues", "longues fibres"],
  origine: "Variétés de cotonnier (Gossypium barbadense) dont les fibres dépassent 3,5 cm. On peut en tirer un fil plus fin, plus lisse et plus solide. Le Supima est un coton Pima cultivé aux États-Unis et certifié par une association de producteurs.",
  pays: "États-Unis (Supima), Égypte (Giza), Pérou (Pima), Inde, Chine (Xinjiang), Antilles (Sea Island)",
  prix: "Environ 1,5 à 2,5 fois le prix du coton classique ; le Sea Island est beaucoup plus cher",
  production: "Environ 3 % du coton mondial",
  histoire: "Le Sea Island, cultivé au XVIIIe siècle sur les îles de Géorgie et de Caroline, était le coton le plus prisé d'Europe. Le nom « Pima » vient des Amérindiens Pima qui aidaient à le cultiver en Arizona au début du XXe siècle.",
  impact: "Mêmes enjeux que le coton classique, mais le vêtement dure plus longtemps, ce qui réduit l'impact par port.",
  reconnaitre: "Toucher plus lisse et soyeux, légère brillance, couleurs plus vives. Les marques sérieuses précisent toujours la variété.",
  anecdote: "Le marché du « coton égyptien » a connu de grandes fraudes : des études ont montré qu'une partie importante des produits étiquetés égyptiens n'en contenaient pas.",
  sources: ["supima", "pima", "egyptien", "sea_island", "supima_org"]
});
F("Coton recyclé", {
  cles: ["coton recycle"],
  origine: "Fabriqué à partir de chutes de coupe ou de vieux vêtements, triés par couleur, puis effilochés mécaniquement pour retrouver des fibres qui sont refilées.",
  pays: "Inde, Espagne, Italie (région de Prato), Turquie",
  prix: "Proche ou légèrement inférieur au coton neuf",
  production: "Environ 1 % des fibres de coton utilisées",
  histoire: "La ville de Prato, en Toscane, recycle la laine et le coton depuis le XIXe siècle : c'est l'un des plus anciens centres de recyclage textile au monde.",
  impact: "Évite la culture de nouveau coton et économise beaucoup d'eau. Les fibres raccourcies obligent souvent à le mélanger avec du coton neuf ou du polyester.",
  reconnaitre: "Toucher un peu plus rustique, couleurs souvent chinées (mélangées).",
  anecdote: "Comme on trie par couleur, le coton recyclé n'a souvent pas besoin d'être reteint.",
  sources: ["recycled_cotton", "refashion"]
});
F("Lin", {
  cles: ["lin"],
  origine: "Le lin est une plante à fleurs bleues. Après l'arrachage, les tiges restent au sol plusieurs semaines : la rosée et les micro-organismes détachent les fibres du bois (c'est le rouissage). On sépare ensuite les fibres par teillage puis peignage.",
  pays: "France (premier producteur mondial, environ deux tiers de la fibre), Belgique, Pays-Bas ; filature surtout en Chine",
  prix: "≈ 2 à 5 € le kilo de fibre teillée (cours très variables selon les récoltes)",
  production: "Quelques centaines de milliers de tonnes, moins de 1 % des fibres textiles",
  histoire: "Les Égyptiens enveloppaient leurs momies dans du lin. Au Moyen Âge, il servait au linge de corps et aux voiles des navires.",
  impact: "L'une des fibres les plus vertueuses : en Europe, il pousse avec l'eau de pluie, peu d'engrais et presque pas de pesticides, et toute la plante est utilisée.",
  reconnaitre: "Fil légèrement irrégulier avec de petites « flammes », toucher frais et sec, plis marqués.",
  anecdote: "La bande côtière qui va de la Normandie aux Pays-Bas offre un climat idéal : c'est pour cela que l'Europe domine la production mondiale.",
  sources: ["lin", "flax", "linen_en", "alliance_lin"]
});
F("Chanvre", {
  cles: ["chanvre"],
  origine: "Les tiges de chanvre industriel (sans effet psychotrope) sont rouies et teillées comme le lin. La fibre obtenue est longue, très solide et un peu raide.",
  pays: "Chine, France (premier producteur européen), Canada",
  prix: "Pas de cours mondial unifié ; les fibres textiles restent proches du lin",
  production: "Fibre de niche, en développement",
  histoire: "Les cordages, les voiles et les toiles des navires étaient en chanvre : le mot « canevas » vient de cannabis.",
  impact: "Pousse vite, sans irrigation ni pesticides, et améliore la structure du sol.",
  reconnaitre: "Aspect proche du lin, plus rustique et plus rêche au début.",
  anecdote: "Il s'adoucit à chaque lavage sans perdre en solidité.",
  sources: ["chanvre", "hemp_en", "alliance_lin"]
});
F("Ramie", {
  cles: ["ramie"],
  origine: "Fibre extraite de l'écorce d'une ortie d'Asie (Boehmeria nivea). Elle doit être décortiquée et dégommée chimiquement avant d'être filée.",
  pays: "Chine (la quasi-totalité), Philippines, Brésil",
  prix: "Fibre de niche, sans cours mondial largement suivi",
  production: "Quelques centaines de milliers de tonnes",
  histoire: "Utilisée en Chine depuis des millénaires ; certains linceuls égyptiens contiennent de la ramie.",
  impact: "Plante vivace peu exigeante, mais le dégommage consomme des produits chimiques.",
  reconnaitre: "Brillance naturelle et toucher frais, proche du lin.",
  anecdote: "C'est l'une des fibres végétales les plus résistantes, encore plus quand elle est mouillée.",
  sources: ["ramie"]
});
F("Jute", {
  cles: ["jute"],
  origine: "Fibre tirée de la tige d'une plante tropicale, rouie dans l'eau puis séchée. Grossière et brillante, elle est surnommée la « fibre d'or ».",
  pays: "Inde et Bangladesh (plus de 90 %)",
  prix: "≈ 0,6 à 1 $ le kilo",
  production: "≈ 3 millions de tonnes par an",
  histoire: "Dundee, en Écosse, est devenue au XIXe siècle la capitale mondiale du jute, importé du Bengale.",
  impact: "Pousse vite avec peu d'intrants, entièrement biodégradable.",
  reconnaitre: "Fibre brune, épaisse et rêche ; odeur caractéristique.",
  anecdote: "C'est la fibre des sacs à café et des semelles d'espadrilles.",
  sources: ["jute", "faostat"]
});
F("Liège", {
  cles: ["liege"],
  origine: "C'est l'écorce du chêne-liège. On la retire à la main, sans abattre l'arbre, puis elle se reforme. Elle est bouillie, aplatie et découpée.",
  pays: "Portugal (environ la moitié de la production mondiale), Espagne, Maroc, Algérie",
  prix: "Prix variable selon la qualité ; le meilleur liège part en bouchons",
  production: "≈ 200 000 tonnes par an",
  histoire: "Le chêne-liège n'est démasclé pour la première fois que vers 25 ans, puis tous les 9 ans environ.",
  impact: "Récolte qui ne tue pas l'arbre ; les forêts de chênes-lièges (montados) abritent une grande biodiversité.",
  reconnaitre: "Léger, souple, légèrement élastique, aspect alvéolé.",
  anecdote: "Un même arbre peut être récolté une quinzaine de fois dans sa vie, qui dépasse souvent 150 ans.",
  sources: ["liege"]
});
F("Caoutchouc naturel", {
  cles: ["caoutchouc"],
  origine: "Latex récolté en incisant l'écorce de l'hévéa, puis coagulé et séché. Il est ensuite vulcanisé (chauffé avec du soufre) pour devenir élastique et résistant.",
  pays: "Thaïlande (environ un tiers), Indonésie, Vietnam, Côte d'Ivoire, Inde",
  prix: "≈ 1,5 à 2 $ le kilo",
  production: "≈ 14 millions de tonnes par an, surtout pour les pneus",
  histoire: "Charles Goodyear découvre la vulcanisation en 1839 ; son fils donnera son nom au montage Goodyear des chaussures.",
  impact: "L'expansion des plantations contribue à la déforestation en Asie du Sud-Est et en Afrique de l'Ouest.",
  reconnaitre: "Odeur caractéristique, toucher souple et légèrement collant.",
  anecdote: "Veja achète son caoutchouc directement à des seringueiros d'Amazonie, pour donner de la valeur à la forêt debout.",
  sources: ["caoutchouc", "rubber_en", "irsg"]
});

// ---------- Fibres animales ----------
F("Laine", {
  cles: ["laine", "drap de laine", "laine (flanelle, tweed, crepe)"],
  origine: "Les moutons sont tondus une fois par an. La toison brute contient beaucoup de graisse (lanoline) et d'impuretés : elle est lavée, cardée (ou peignée pour les laines fines), puis filée.",
  pays: "Australie, Chine, Nouvelle-Zélande, Turquie, Royaume-Uni, Afrique du Sud",
  prix: "De moins de 2 $ le kilo pour les laines épaisses à plus de 10 $ le kilo pour les mérinos fins (laine lavée)",
  production: "≈ 2 millions de tonnes de laine brute, environ 1 % des fibres textiles",
  histoire: "Le mouton est domestiqué depuis plus de 10 000 ans. Au Moyen Âge, le commerce de la laine anglaise fait la richesse de la Flandre et de l'Angleterre.",
  impact: "Fibre renouvelable et biodégradable, mais l'élevage émet du méthane et certaines pratiques (mulesing) posent des questions de bien-être animal.",
  reconnaitre: "Fibre ondulée et élastique, toucher chaud. Elle sent la corne brûlée quand on la brûle.",
  anecdote: "La laine peut absorber jusqu'à environ 30 % de son poids en humidité sans paraître mouillée.",
  sources: ["laine", "wool_en", "iwto", "awex", "woolmark"]
});
F("Laine mérinos", {
  cles: ["merinos"],
  origine: "Laine du mouton mérinos, sélectionné pour une toison extrêmement fine (souvent moins de 20 microns, soit le quart d'un cheveu). Elle est peignée pour aligner ses fibres longues.",
  pays: "Australie (l'essentiel du mérinos fin mondial), Afrique du Sud, Argentine, Nouvelle-Zélande, Uruguay",
  prix: "≈ 8 à 15 $ le kilo de laine lavée, beaucoup plus pour les qualités ultra-fines",
  production: "Environ la moitié de la laine destinée à l'habillement",
  histoire: "La race vient d'Espagne, qui en interdit l'exportation pendant des siècles. Les premiers mérinos arrivent en Australie en 1797 : le pays en est devenu le leader mondial.",
  impact: "Le mulesing (ablation de peau pour éviter les infestations de mouches) est controversé ; les labels « non mulesed » ou ZQ garantissent son absence.",
  reconnaitre: "Très douce, ne gratte pas, maille fine et légère.",
  anecdote: "Un seul mouton mérinos peut produire de quoi tricoter plusieurs pulls par an.",
  sources: ["merinos", "merinos_en", "awex", "wool_com", "woolmark"]
});
F("Lambswool (laine d'agneau)", {
  cles: ["lambswool", "laine d'agneau"],
  origine: "Laine de la toute première tonte d'un agneau, vers 7 mois. Les extrémités des fibres n'ont jamais été coupées : elles sont fines et douces.",
  pays: "Royaume-Uni, Australie, Nouvelle-Zélande",
  prix: "Un peu plus chère que la laine classique",
  production: "Une petite fraction de la laine mondiale (une seule tonte par animal)",
  histoire: "Les tricoteurs écossais l'utilisent depuis longtemps pour les pulls ras-du-cou classiques.",
  impact: "Mêmes enjeux que la laine.",
  reconnaitre: "Douce, gonflante, avec un léger duvet en surface.",
  anecdote: "C'est la seule laine qu'un mouton ne peut produire qu'une fois dans sa vie.",
  sources: ["lambswool", "laine"]
});
F("Shetland", {
  cles: ["shetland"],
  origine: "Laine d'une petite race de moutons rustiques des îles Shetland, au nord de l'Écosse. Elle existe dans de nombreuses couleurs naturelles, du blanc au brun foncé.",
  pays: "Royaume-Uni (îles Shetland)",
  prix: "Plus chère que la laine standard en raison de sa rareté",
  production: "Très faible",
  histoire: "Les îliens tricotent depuis des siècles des pulls et des châles, dont le célèbre motif Fair Isle.",
  impact: "Élevage extensif sur des pâturages naturels.",
  reconnaitre: "Fibre nerveuse, légèrement piquante au début, très gonflante.",
  anecdote: "Le terme « Shetland » est souvent utilisé pour des laines de style similaire qui ne viennent pas des îles.",
  sources: ["shetland", "laine"]
});
F("Cachemire", {
  cles: ["cachemire"],
  origine: "Duvet que la chèvre cachemire développe sous ses longs poils pour survivre aux hivers de Mongolie. Au printemps, on le peigne à la main, puis on le « déjarre » (on retire les poils grossiers).",
  pays: "Chine (Mongolie-Intérieure, environ deux tiers), Mongolie, Afghanistan, Iran",
  prix: "≈ 80 à 120 $ le kilo de fibre déjarrée",
  production: "≈ 20 000 tonnes de fibre brute par an, moins de 0,1 % des fibres textiles",
  histoire: "Le nom vient de la région du Cachemire, d'où venaient les châles prisés en Europe au XVIIIe siècle.",
  impact: "Le cheptel de chèvres a fortement augmenté en Mongolie depuis les années 1990 : le surpâturage accélère la désertification des steppes.",
  reconnaitre: "Toucher exceptionnellement doux et chaud ; un bon cachemire est dense et ne s'étire pas trop.",
  anecdote: "Une chèvre fournit environ 150 g de duvet par an : il en faut plusieurs pour un seul pull.",
  sources: ["cachemire", "pashmina"]
});
F("Mohair", {
  cles: ["mohair"],
  origine: "Poil de la chèvre angora, tondue deux fois par an. Fibre longue, lisse et brillante.",
  pays: "Afrique du Sud (environ la moitié), États-Unis (Texas), Lesotho, Turquie",
  prix: "≈ 10 à 20 $ le kilo ; le « kid mohair » des jeunes chèvres est plus cher",
  production: "Quelques milliers de tonnes par an",
  histoire: "La chèvre angora vient de la région d'Ankara (autrefois Angora), en Turquie.",
  impact: "Des enquêtes ont révélé des maltraitances ; plusieurs marques ont abandonné le mohair non certifié.",
  reconnaitre: "Brillant, aérien, avec un halo de poils.",
  anecdote: "Ne pas confondre : le mohair vient de la chèvre angora, et la laine angora… du lapin angora.",
  sources: ["mohair", "mohair_en", "mohair_sa"]
});
F("Alpaga", {
  cles: ["alpaga"],
  origine: "Toison de l'alpaga, cousin du lama domestiqué dans les Andes. Tondu une fois par an, il donne une fibre creuse, très isolante et sans lanoline.",
  pays: "Pérou (environ 80 % des alpagas), Bolivie, Chili",
  prix: "≈ 3 à 10 $ le kilo de fibre brute selon la finesse",
  production: "Quelques milliers de tonnes par an",
  histoire: "Domestiqué il y a environ 6 000 ans, l'alpaga était au cœur de l'économie inca.",
  impact: "Les alpagas ont des coussinets qui abîment peu les sols et broutent sans arracher les plantes.",
  reconnaitre: "Soyeux, doux, avec un léger tombant ; plus lourd que la laine.",
  anecdote: "Sans lanoline, il convient souvent aux personnes qui ne supportent pas la laine.",
  sources: ["alpaga"]
});
F("Angora", {
  cles: ["angora"],
  origine: "Poil du lapin angora, récolté par tonte ou par épilation. Fibre très fine, creuse et duveteuse.",
  pays: "Chine (environ 90 %)",
  prix: "Plusieurs dizaines de dollars le kilo",
  production: "Quelques milliers de tonnes",
  histoire: "Très à la mode dans les années 1980 pour les pulls duveteux.",
  impact: "Une enquête vidéo de 2013 montrant des lapins épilés vivants a conduit de nombreuses enseignes (H&M, Inditex, Marks & Spencer…) à l'abandonner.",
  reconnaitre: "Extrêmement duveteux, perd ses poils.",
  anecdote: "C'est l'une des rares fibres que de grandes marques ont bannie pour des raisons éthiques.",
  sources: ["angora"]
});
F("Poil de chameau", {
  cles: ["chameau"],
  origine: "Duvet que le chameau de Bactriane perd naturellement au printemps. Il est ramassé ou peigné, puis séparé des poils grossiers.",
  pays: "Mongolie, Chine",
  prix: "Bien moins cher que le cachemire, plus cher que la laine",
  production: "Très faible",
  histoire: "Le manteau en poil de chameau devient un classique des campus et des tribunes de polo dans les années 1920.",
  impact: "Récolte sur des animaux en élevage extensif.",
  reconnaitre: "Teinte naturelle beige doré, toucher doux et chaud.",
  anecdote: "La couleur « camel » tire son nom de cette fibre.",
  sources: ["chameau", "camel_en"]
});
F("Yak", {
  cles: ["yak"],
  origine: "Duvet du yak, bovin des hauts plateaux himalayens, peigné au moment de la mue.",
  pays: "Chine (Tibet, Qinghai), Mongolie, Népal",
  prix: "Proche du cachemire, souvent un peu moins cher",
  production: "Très faible",
  histoire: "Utilisé depuis toujours par les nomades tibétains pour les tentes et les vêtements.",
  impact: "Alternative intéressante au cachemire, les yaks abîmant moins les steppes que les chèvres.",
  reconnaitre: "Très doux, couleurs naturelles brunes ou grises.",
  anecdote: "Un yak ne fournit qu'environ 100 g de duvet par an.",
  sources: ["yack", "yak_en"]
});
F("Vigogne (vicuña)", {
  cles: ["vigogne", "vicuna"],
  origine: "Toison de la vigogne, camélidé sauvage des Andes. Les animaux sont rassemblés lors d'une cérémonie héritée des Incas (le chaccu), tondus puis relâchés.",
  pays: "Pérou (environ la moitié), Bolivie, Argentine, Chili",
  prix: "≈ 400 à 600 $ le kilo de fibre brute ; un manteau dépasse souvent 20 000 €",
  production: "Quelques dizaines de tonnes par an",
  histoire: "Sous les Incas, seule la famille royale pouvait la porter. Il ne restait que quelques milliers de vigognes dans les années 1960 ; la protection de l'espèce a permis de dépasser les 400 000 aujourd'hui.",
  impact: "Commerce strictement encadré (CITES) ; les revenus vont en partie aux communautés andines.",
  reconnaitre: "Couleur naturelle cannelle, douceur inégalée.",
  anecdote: "Une vigogne n'est tondue que tous les deux ou trois ans et donne environ 200 g de fibre.",
  sources: ["vigogne"]
});
F("Soie", {
  cles: ["soie", "soie sergee", "soie tricotee"],
  origine: "Le ver à soie (chenille du bombyx du mûrier) fabrique un cocon fait d'un seul fil continu. Les cocons sont ébouillantés et dévidés : plusieurs fils sont réunis pour former la soie grège.",
  pays: "Chine et Inde (plus de 90 % à elles deux), Ouzbékistan, Vietnam, Thaïlande",
  prix: "≈ 50 à 70 $ le kilo de soie grège",
  production: "≈ 100 000 tonnes par an, environ 0,1 % des fibres textiles",
  histoire: "Selon la légende, l'impératrice chinoise Leizu découvre la soie vers 2 700 av. J.-C. La Chine garde le secret pendant des siècles ; la route de la Soie relie l'Asie à l'Europe. Lyon devient la capitale européenne de la soierie.",
  impact: "Les chrysalides meurent lors de l'ébouillantage ; la « soie de la paix » (ahimsa) laisse le papillon sortir du cocon.",
  reconnaitre: "Éclat naturel nacré, toucher lisse et tiède, froissement caractéristique.",
  anecdote: "Un seul cocon peut contenir un fil de 300 à 900 mètres de long.",
  sources: ["soie", "silk_en"]
});
F("Duvet", {
  cles: ["duvet"],
  origine: "Petits flocons sans tige qui poussent sous les plumes des oies et des canards. Ils sont récupérés, majoritairement comme sous-produit de l'industrie de la viande, puis lavés et triés.",
  pays: "Chine (environ trois quarts), Hongrie, Pologne, Ukraine, Taïwan",
  prix: "≈ 50 à plus de 100 $ le kilo pour un duvet d'oie 90/10",
  production: "Non publiée de manière fiable",
  histoire: "Les premières doudounes modernes apparaissent dans les années 1930 (Eddie Bauer aux États-Unis) ; Moncler équipe les expéditions en montagne dans les années 1950.",
  impact: "Le plumage à vif et le gavage existent encore : les labels RDS ou Global TDS garantissent leur absence.",
  reconnaitre: "Flocons sans tige rigide ; les plumes, elles, ont un tuyau dur.",
  anecdote: "Le duvet d'eider, ramassé à la main dans les nids en Islande, se vend plus de 1 000 $ le kilo.",
  sources: ["duvet", "down_en", "fill_power", "rds", "idfl"]
});

// ---------- Fibres artificielles ----------
F("Viscose (rayonne)", {
  cles: ["viscose", "rayonne"],
  origine: "Du bois (eucalyptus, pin, hêtre, bambou) est réduit en pâte de cellulose, dissous dans des produits chimiques (soude, sulfure de carbone), puis la solution est extrudée à travers des filières pour former des filaments.",
  pays: "Chine (environ deux tiers), Indonésie, Inde, Autriche",
  prix: "≈ 1,8 à 2 $ le kilo",
  production: "≈ 6 à 7 millions de tonnes par an",
  histoire: "Brevetée en 1892 par trois chimistes britanniques, elle est vendue comme « soie artificielle ».",
  impact: "Le sulfure de carbone est toxique pour les ouvriers et les riverains ; une partie du bois provient de forêts anciennes.",
  reconnaitre: "Fluide, douce, légèrement brillante ; devient fragile une fois mouillée.",
  anecdote: "Elle n'est ni naturelle ni synthétique : on l'appelle fibre « artificielle » ou « cellulosique ».",
  sources: ["viscose", "rayon", "textileexchange"]
});
F("Viscose certifiée (EcoVero)", {
  cles: ["ecovero", "viscose de qualite"],
  origine: "Viscose produite par Lenzing à partir de bois issu de forêts certifiées, avec un procédé qui réduit les rejets.",
  pays: "Autriche, Indonésie, Chine (usines Lenzing)",
  prix: "Un peu plus chère que la viscose standard",
  production: "Une petite part de la viscose mondiale",
  histoire: "Lancée en 2017 par le groupe autrichien Lenzing.",
  impact: "Selon Lenzing, environ moitié moins d'émissions et de consommation d'eau que la viscose générique.",
  reconnaitre: "Identique à la viscose : seule l'étiquette le précise.",
  anecdote: "Lenzing marque ses fibres pour qu'on puisse les identifier en laboratoire dans le vêtement fini.",
  sources: ["viscose", "lenzing"]
});
F("Lyocell (Tencel)", {
  cles: ["lyocell", "tencel"],
  origine: "La pâte de bois est dissoute dans un solvant organique non toxique (NMMO), puis filée. Plus de 99 % du solvant est récupéré et réutilisé : on parle de circuit fermé.",
  pays: "Autriche, Royaume-Uni, États-Unis, Chine",
  prix: "≈ 2,5 à 3,5 $ le kilo",
  production: "Quelques centaines de milliers de tonnes par an, en forte croissance",
  histoire: "Mis au point par le britannique Courtaulds dans les années 1980, commercialisé sous le nom Tencel en 1992 ; Lenzing a racheté la marque.",
  impact: "Procédé nettement plus propre que la viscose, bois issu de forêts gérées.",
  reconnaitre: "Toucher doux et frais, légèrement « peau de pêche », tombé fluide.",
  anecdote: "Il absorbe l'humidité mieux que le coton, ce qui limite le développement des bactéries.",
  sources: ["lyocell", "tencel", "lenzing"]
});
F("Modal", {
  cles: ["modal", "micromodal"],
  origine: "Fibre cellulosique fabriquée à partir de bois de hêtre, selon un procédé proche de la viscose mais qui donne une fibre plus solide et plus stable.",
  pays: "Autriche (Lenzing), Chine, Inde",
  prix: "Un peu plus cher que la viscose",
  production: "Fibre de niche",
  histoire: "Développé à partir des années 1950-60 ; Lenzing en est devenu le grand producteur à partir du hêtre européen.",
  impact: "Hêtre issu de forêts européennes gérées ; procédé chimique proche de la viscose.",
  reconnaitre: "Très doux et soyeux, ne rétrécit presque pas.",
  anecdote: "Le micromodal est filé encore plus fin, pour une douceur proche de la soie.",
  sources: ["modal", "lenzing"]
});
F("Cupro", {
  cles: ["cupro", "bemberg", "doublure en cupro"],
  origine: "Fabriqué à partir du « linter », le duvet très court qui reste sur les graines de coton après l'égrenage. Il est dissous dans une solution de cuivre et d'ammoniaque, puis filé.",
  pays: "Japon (Asahi Kasei, à Nobeoka, quasiment seul producteur au monde)",
  prix: "Nettement plus cher que la viscose",
  production: "Très faible",
  histoire: "Le procédé a été industrialisé en Allemagne par la société J.P. Bemberg à la fin du XIXe siècle : on parle encore de « doublure Bemberg ».",
  impact: "Valorise un déchet du coton ; le cuivre et l'ammoniaque sont récupérés.",
  reconnaitre: "Soyeux, fluide, antistatique : la doublure de veste haut de gamme.",
  anecdote: "Les tailleurs le préfèrent à la soie pour les doublures : il glisse aussi bien et résiste mieux.",
  sources: ["cupro", "bemberg"]
});
F("Acétate", {
  cles: ["acetate"],
  origine: "Cellulose traitée à l'acide acétique, dissoute dans un solvant puis filée à sec.",
  pays: "États-Unis, Japon, Chine",
  prix: "Fibre de niche",
  production: "Faible",
  histoire: "Industrialisé dans les années 1920 ; très utilisé pour les doublures et les robes du soir.",
  impact: "Procédé chimique, solvants récupérés en grande partie.",
  reconnaitre: "Brillant, drapé, sensible à la chaleur du fer.",
  anecdote: "C'est aussi la matière de nombreuses montures de lunettes.",
  sources: ["acetate"]
});
F("« Bambou »", {
  cles: ["bambou"],
  origine: "Le bambou est broyé, transformé en pâte de cellulose et dissous comme pour la viscose. Le bambou réellement filé mécaniquement est extrêmement rare.",
  pays: "Chine",
  prix: "Comparable à la viscose",
  production: "Faible",
  histoire: "Popularisé dans les années 2000 avec des arguments écologiques et antibactériens.",
  impact: "Le bambou pousse vite, mais le procédé chimique est celui de la viscose : l'argument « naturel » est trompeur.",
  reconnaitre: "Toucher doux et fluide, comme la viscose.",
  anecdote: "En 2022, la FTC américaine a infligé des amendes à Kohl's et Walmart pour avoir présenté de la viscose comme du « bambou ».",
  sources: ["bambou_textile", "bambou"]
});

// ---------- Fibres synthétiques ----------
F("Polyester", {
  cles: ["polyester", "pbt"],
  origine: "Fabriqué à partir de pétrole : on produit un plastique (le PET, le même que les bouteilles), fondu puis extrudé en filaments.",
  pays: "Chine (environ trois quarts), Inde, Indonésie, Taïwan",
  prix: "≈ 0,9 à 1,2 $ le kilo",
  production: "≈ 70 millions de tonnes par an, environ 57 % de toutes les fibres textiles",
  histoire: "Inventé en 1941 par deux chimistes britanniques, Whinfield et Dickson ; commercialisé sous les noms Terylene puis Dacron.",
  impact: "Issu d'une ressource fossile ; chaque lavage libère des microfibres plastiques dans l'eau.",
  reconnaitre: "Toucher lisse, parfois brillant ; il fond au lieu de brûler.",
  anecdote: "C'est la fibre qui a rendu possible la « fast-fashion », grâce à son prix très bas.",
  sources: ["polyester", "textileexchange", "microplastiques"]
});
F("Polyester recyclé", {
  cles: ["polyester recycle"],
  origine: "Principalement fabriqué à partir de bouteilles en plastique broyées, fondues et refilées ; plus rarement à partir de vêtements.",
  pays: "Chine, Taïwan, Inde, Japon",
  prix: "Souvent légèrement plus cher que le polyester neuf",
  production: "Environ un huitième du polyester mondial",
  histoire: "Patagonia est l'une des premières marques à en utiliser, dès 1993, pour ses polaires.",
  impact: "Moins d'énergie que le neuf, mais il libère toujours des microplastiques ; et l'industrie textile retire les bouteilles de leur propre filière de recyclage.",
  reconnaitre: "Identique au polyester.",
  anecdote: "Moins de 1 % des textiles usagés sont aujourd'hui recyclés en nouveaux textiles.",
  sources: ["polyester", "pet_recycling", "textileexchange"]
});
F("Polyamide (nylon)", {
  cles: ["polyamide", "nylon"],
  origine: "Plastique issu du pétrole, polymérisé puis filé à chaud.",
  pays: "Chine, Taïwan, États-Unis, Europe",
  prix: "≈ 2 à 3 $ le kilo",
  production: "≈ 5 à 6 millions de tonnes par an",
  histoire: "Inventé en 1935 par Wallace Carothers chez DuPont. Les premiers bas nylon, en 1940, provoquent des émeutes devant les magasins américains.",
  impact: "Production énergivore et émettrice de protoxyde d'azote ; microfibres au lavage.",
  reconnaitre: "Lisse, très solide, légèrement brillant.",
  anecdote: "Pendant la guerre, le nylon est réquisitionné pour les parachutes.",
  sources: ["polyamide", "nylon", "polyamide6"]
});
F("Polyamide régénéré (ECONYL)", {
  cles: ["econyl", "regenere", "polyamide regenere"],
  origine: "Filets de pêche, chutes de tapis et déchets industriels en nylon sont dépolymérisés puis transformés en un nylon identique au neuf.",
  pays: "Italie et Slovénie (groupe Aquafil)",
  prix: "Plus cher que le nylon neuf",
  production: "Quelques dizaines de milliers de tonnes",
  histoire: "Lancé en 2011 par l'italien Aquafil, notamment à son usine de Ljubljana.",
  impact: "Recyclable en boucle sans perte de qualité ; aide à retirer des filets de pêche abandonnés des océans.",
  reconnaitre: "Identique au polyamide.",
  anecdote: "C'est la matière de nombreux maillots de bain et sacs de luxe, dont certains chez Prada.",
  sources: ["econyl", "econyl_en"]
});
F("Élasthanne (Lycra, spandex)", {
  cles: ["elasthanne", "lycra", "spandex"],
  origine: "Polymère synthétique (polyuréthane) filé en fils capables de s'étirer jusqu'à 5 à 7 fois leur longueur et de revenir en place.",
  pays: "Chine (environ trois quarts), Corée du Sud, Taïwan",
  prix: "≈ 4 à 6 $ le kilo",
  production: "Environ 1 million de tonnes par an",
  histoire: "Inventé en 1958 par Joseph Shivers chez DuPont, vendu sous la marque Lycra.",
  impact: "Rend les vêtements quasi impossibles à recycler ; il vieillit avec la chaleur et le chlore.",
  reconnaitre: "On ne le voit pas : il est toujours mélangé, le plus souvent à moins de 5 %.",
  anecdote: "Le mot « spandex » est l'anagramme de « expands » (s'étire).",
  sources: ["elasthanne", "spandex"]
});
F("Acrylique", {
  cles: ["acrylique"],
  origine: "Plastique issu du pétrole (polyacrylonitrile) filé pour imiter la laine.",
  pays: "Chine, Turquie, Japon, Inde",
  prix: "≈ 2 $ le kilo",
  production: "Moins de 2 millions de tonnes, en baisse",
  histoire: "Commercialisé par DuPont sous le nom Orlon dans les années 1950, comme substitut bon marché de la laine.",
  impact: "Issu du pétrole et parmi les fibres qui libèrent le plus de microfibres au lavage.",
  reconnaitre: "Aspect laineux mais toucher « plastique », électricité statique, bouloches rapides.",
  anecdote: "Il représente encore une grande partie des pulls bon marché étiquetés « effet laine ».",
  sources: ["acrylique", "acrylic_en", "microplastiques"]
});
F("Polypropylène", {
  cles: ["polypropylene"],
  origine: "Plastique issu du pétrole, filé en fibres très légères.",
  pays: "Production mondiale, Chine en tête",
  prix: "≈ 1 $ le kilo",
  production: "Surtout utilisé hors habillement (tapis, emballages)",
  histoire: "Mis au point en 1954 par Giulio Natta, prix Nobel de chimie 1963.",
  impact: "Issu du pétrole, peu recyclé dans le textile.",
  reconnaitre: "Très léger, toucher sec.",
  anecdote: "C'est la fibre textile la plus légère : elle flotte sur l'eau.",
  sources: ["polypropylene"]
});
F("Polaire (fleece)", {
  cles: ["polaire", "fleece", "sherpa", "polaire polyester"],
  origine: "Tissu en polyester tricoté puis brossé pour faire lever les fibres, qui emprisonnent l'air.",
  pays: "États-Unis (Polartec), Chine, Taïwan",
  prix: "Bon marché à produire",
  production: "Non publiée",
  histoire: "Inventée en 1979 par l'entreprise américaine Malden Mills avec Patagonia. Le patron, Aaron Feuerstein, ne l'a pas brevetée pour qu'elle se répande.",
  impact: "Les polaires font partie des textiles qui libèrent le plus de microfibres au lavage.",
  reconnaitre: "Duveteuse, légère, sèche très vite.",
  anecdote: "Après l'incendie de son usine en 1995, Aaron Feuerstein a continué à payer ses employés pendant des mois.",
  sources: ["polaire", "fleece_en", "polartec"]
});
F("Isolant synthétique (PrimaLoft…)", {
  cles: ["primaloft", "climashield", "isolation synthetique"],
  origine: "Microfibres de polyester très fines, organisées en nappes pour imiter la structure du duvet.",
  pays: "États-Unis, Chine",
  prix: "Moins cher que le duvet",
  production: "Non publiée",
  histoire: "PrimaLoft a été développé en 1983 pour l'armée américaine, qui voulait un isolant qui reste chaud mouillé.",
  impact: "Issu du pétrole, mais existe en version recyclée.",
  reconnaitre: "Nappe blanche et souple, plus plate que le duvet.",
  anecdote: "Il garde la majeure partie de sa chaleur même mouillé, contrairement au duvet.",
  sources: ["primaloft", "primaloft_site"]
});
F("Membrane imper-respirante (Gore-Tex…)", {
  cles: ["gore-tex", "goretex", "membrane"],
  origine: "Film ultra-fin percé de milliards de pores microscopiques, laminé entre deux tissus. Les pores sont trop petits pour une goutte d'eau, mais assez grands pour la vapeur.",
  pays: "États-Unis (W. L. Gore & Associates), Allemagne, Japon",
  prix: "Fortement répercuté sur le prix des vestes",
  production: "Non publiée",
  histoire: "En 1969, Bob Gore découvre qu'on peut étirer brusquement le PTFE (Téflon) pour le rendre poreux. Les premières vestes Gore-Tex arrivent en 1976.",
  impact: "La membrane historique en PTFE fait partie des PFAS ; Gore a lancé une nouvelle membrane en polyéthylène sans PFAS d'intérêt environnemental en 2022.",
  reconnaitre: "Étiquette de la marque, coutures étanchées par une bande à l'intérieur.",
  anecdote: "Un centimètre carré de membrane compte environ 1,4 milliard de pores.",
  sources: ["goretex", "goretex_en", "goretex_site"]
});
F("Néoprène", {
  cles: ["neoprene"],
  origine: "Caoutchouc synthétique (polychloroprène) moussé pour emprisonner de minuscules bulles de gaz, très isolantes.",
  pays: "Japon, Chine, Taïwan",
  prix: "Fibre technique de niche",
  production: "Non publiée",
  histoire: "Inventé par DuPont en 1930 ; les combinaisons de surf apparaissent dans les années 1950.",
  impact: "Issu du pétrole ; il existe un néoprène fabriqué à partir de calcaire (Yamamoto) et des alternatives en caoutchouc naturel.",
  reconnaitre: "Épais, élastique, toucher caoutchouteux.",
  anecdote: "Les surfeurs californiens popularisent la combinaison néoprène grâce à Jack O'Neill.",
  sources: ["neoprene"]
});
F("Simili-cuir (PU, PVC)", {
  cles: ["simili", "pu", "pvc", "vegan"],
  origine: "Un tissu (souvent polyester) est recouvert d'une couche de plastique (polyuréthane ou PVC) gaufrée pour imiter le grain du cuir.",
  pays: "Chine, Inde, Italie",
  prix: "Bien moins cher que le cuir",
  production: "Non publiée",
  histoire: "Le « skaï » se répand dans les années 1950-60 sur les sièges et les sacs.",
  impact: "Issu du pétrole, dure peu et finit en déchet plastique. En France, le mot « cuir » est réservé aux matières d'origine animale.",
  reconnaitre: "Grain trop régulier, odeur de plastique, tranche avec un tissu visible.",
  anecdote: "Les cuirs dits « végétaux » (cactus, pomme, champignon) contiennent souvent encore une part importante de polyuréthane.",
  sources: ["synthetic_leather", "polyurethane"]
});

// ---------- Cuirs & peaux ----------
F("Cuir pleine fleur", {
  cles: ["pleine fleur", "cuir", "box-calf", "veau", "vachette"],
  origine: "La peau (en grande majorité un sous-produit de l'industrie de la viande) est tannée pour devenir imputrescible. « Pleine fleur » signifie que sa surface d'origine, la « fleur », est conservée intacte.",
  pays: "Italie (Toscane, Vénétie), France, Allemagne, Espagne ; peaux brutes : Brésil, États-Unis, Chine",
  prix: "≈ 5 à 12 € le pied carré pour un veau pleine fleur (1 pied carré ≈ 0,09 m²)",
  production: "Non publiée de manière fiable",
  histoire: "Le travail du cuir remonte à la préhistoire. La France compte des tanneries réputées comme Du Puy, d'Annonay ou Haas, dont plusieurs appartiennent aujourd'hui à des maisons de luxe.",
  impact: "Valorise un déchet de l'élevage, mais le tannage peut être polluant s'il est mal maîtrisé. Le label LWG évalue les tanneries.",
  reconnaitre: "Pores et petites irrégularités visibles, odeur naturelle, il se patine.",
  anecdote: "Les plus beaux veaux viennent souvent d'Europe, où les animaux ont moins de piqûres d'insectes et de cicatrices.",
  sources: ["cuir", "leather_en", "tannage"]
});
F("Cuir fleur corrigée", {
  cles: ["fleur corrigee", "corrige"],
  origine: "Cuir dont la surface présentait des défauts : on la ponce, puis on la recouvre d'une finition pigmentée et gaufrée.",
  pays: "Production mondiale",
  prix: "Moins cher que la pleine fleur",
  production: "La majorité des chaussures et sacs d'entrée de gamme",
  histoire: "Technique développée pour valoriser les peaux de moindre qualité.",
  impact: "La finition plastique empêche le cuir de respirer et de se patiner.",
  reconnaitre: "Aspect très uniforme et brillant, pas de pores visibles, craquelures aux plis.",
  anecdote: "Le « cuir glacé » des chaussures de cérémonie est souvent un cuir corrigé.",
  sources: ["cuir"]
});
F("Cuir croûte", {
  cles: ["croute"],
  origine: "Les peaux épaisses sont refendues en plusieurs couches. La croûte est la couche du dessous, sans la fleur.",
  pays: "Production mondiale",
  prix: "Bon marché",
  production: "Non publiée",
  histoire: "Utilisée pour le daim et les cuirs enduits bon marché.",
  impact: "Valorise une partie de la peau qui serait sinon jetée.",
  reconnaitre: "Fibres lâches au dos, se fend facilement quand elle est enduite.",
  anecdote: "Le terme « cuir véritable » est souvent apposé sur de la croûte enduite.",
  sources: ["cuir"]
});
F("Daim (suède)", {
  cles: ["daim", "suede"],
  origine: "Cuir poncé côté chair (le revers de la peau) pour obtenir un toucher velouté. Il peut provenir de veau, d'agneau ou de chèvre, et non du daim, l'animal.",
  pays: "Italie, France, Espagne",
  prix: "Proche du cuir lisse de même origine",
  production: "Non publiée",
  histoire: "Le mot anglais « suede » vient du français : on appelait « gants de Suède » ces gants en cuir velouté.",
  impact: "Mêmes enjeux que le cuir.",
  reconnaitre: "Toucher velouté, change de couleur quand on passe la main à rebrousse-poil.",
  anecdote: "Bien imperméabilisé, il résiste étonnamment bien à la pluie.",
  sources: ["suede", "cuir"]
});
F("Nubuck", {
  cles: ["nubuck"],
  origine: "Cuir pleine fleur légèrement poncé côté fleur, ce qui lui donne un aspect velouté plus fin et plus résistant que le daim.",
  pays: "Italie, Allemagne, États-Unis",
  prix: "Proche du cuir pleine fleur",
  production: "Non publiée",
  histoire: "Très utilisé pour les boots de travail et de randonnée.",
  impact: "Mêmes enjeux que le cuir.",
  reconnaitre: "Velours très court et serré, se marque au toucher.",
  anecdote: "La célèbre boot jaune de Timberland est en nubuck.",
  sources: ["nubuck"]
});
F("Cuir tanné végétal", {
  cles: ["tanne vegetal", "tannage vegetal"],
  origine: "Les peaux trempent des semaines dans des bains de tanins extraits d'écorces et de bois (châtaignier, mimosa, quebracho).",
  pays: "Italie (Toscane), Royaume-Uni, États-Unis, France",
  prix: "Plus cher que le tannage au chrome",
  production: "Une petite part de la production de cuir",
  histoire: "La méthode de tannage la plus ancienne, utilisée depuis l'Antiquité.",
  impact: "Évite les sels de chrome, mais demande beaucoup d'eau et de temps.",
  reconnaitre: "Cuir ferme, odeur boisée, tranche brune ; il fonce avec la lumière.",
  anecdote: "Un tannage végétal prend environ 30 à 60 jours, contre une journée pour le chrome.",
  sources: ["vegtan", "tannage"]
});
F("Cuir tanné au chrome", {
  cles: ["chrome"],
  origine: "Les peaux sont tannées dans des tambours avec des sels de chrome : rapide, il donne un cuir souple et stable.",
  pays: "Production mondiale",
  prix: "Le tannage le plus économique",
  production: "La grande majorité du cuir produit dans le monde",
  histoire: "Industrialisé à la fin du XIXe siècle aux États-Unis.",
  impact: "Mal maîtrisés, les rejets de chrome polluent l'eau, comme dans la région de Kanpur en Inde ou d'Hazaribagh au Bangladesh.",
  reconnaitre: "Tranche bleu-gris, cuir souple.",
  anecdote: "Avant teinture, le cuir chromé est bleu : on l'appelle « wet blue ».",
  sources: ["chrome_tanning", "tannage"]
});
F("Cordovan", {
  cles: ["cordovan"],
  origine: "Membrane fibreuse située sous la peau de la croupe du cheval. Chaque cheval n'en fournit que deux petites pièces (les « shells »), tannées pendant environ six mois.",
  pays: "États-Unis (Horween, Chicago), Japon (Shinki)",
  prix: "Parmi les cuirs les plus chers au monde",
  production: "Très faible",
  histoire: "Le nom vient de Cordoue, en Espagne, célèbre pour son travail du cuir. La tannerie Horween le produit depuis 1905.",
  impact: "Sous-produit de l'industrie de la viande chevaline.",
  reconnaitre: "Très dense, brillance profonde, il forme des vagues au lieu de plis.",
  anecdote: "Il faut jusqu'à six mois pour transformer une peau en cordovan.",
  sources: ["cordovan", "horween"]
});
F("Agneau", {
  cles: ["agneau"],
  origine: "Peau d'agneau fine, tannée pour rester très souple.",
  pays: "France, Italie, Espagne, Turquie",
  prix: "Plus cher que la vachette à la surface",
  production: "Non publiée",
  histoire: "Millau et Saint-Junien sont les capitales françaises de la ganterie en agneau.",
  impact: "Sous-produit de l'industrie de la viande.",
  reconnaitre: "Très souple, toucher beurré, grain fin.",
  anecdote: "Les meilleurs gants en agneau se cousent encore à la main.",
  sources: ["cuir"]
});
F("Peau lainée (shearling)", {
  cles: ["peau lainee", "shearling", "mouton retourne"],
  origine: "Peau de mouton tannée en conservant sa laine : le cuir est à l'extérieur, la laine à l'intérieur.",
  pays: "Espagne, Turquie, Australie, Italie",
  prix: "Élevé : il faut plusieurs peaux pour une veste",
  production: "Non publiée",
  histoire: "La veste d'aviateur B-3 de la Seconde Guerre mondiale était en peau lainée.",
  impact: "Sous-produit de l'industrie de la viande.",
  reconnaitre: "Laine naturelle d'un côté, cuir ou daim de l'autre, une seule épaisseur.",
  anecdote: "C'est la matière des bottes UGG et des « mouton retourné ».",
  sources: ["shearling"]
});
F("Coton ciré", {
  cles: ["coton cire", "cire"],
  origine: "Une toile de coton serrée est imprégnée de cire ou de paraffine, qui bouche les espaces entre les fils.",
  pays: "Royaume-Uni (British Millerain, Halley Stevensons)",
  prix: "Toile plus chère qu'un coton classique",
  production: "Faible",
  histoire: "Les marins enduisaient leurs voiles et leurs capes d'huile de lin au XIXe siècle ; la toile cirée moderne naît en Écosse et dans le Lancashire.",
  impact: "Durable et réparable ; il faut le recirer régulièrement.",
  reconnaitre: "Toucher légèrement gras, il marque en blanc quand on le plie.",
  anecdote: "Barbour recire gratuitement ou à petit prix les vestes de ses clients depuis des décennies.",
  sources: ["waxed"]
});

// ---------- Étoffes & tissages ----------
F("Jersey", {
  cles: ["jersey"],
  origine: "Maille tricotée à partir d'un seul fil formant des boucles imbriquées, sur des métiers circulaires.",
  pays: "Production mondiale (Portugal, Turquie, Chine, Inde)",
  prix: "≈ 8 à 25 € le mètre selon la fibre et le poids",
  production: "La maille la plus répandue",
  histoire: "Le nom vient de l'île de Jersey, où l'on tricotait des pulls pour les pêcheurs. Coco Chanel l'utilise dès 1916 pour des vêtements féminins.",
  impact: "Dépend de la fibre utilisée.",
  reconnaitre: "Petits « V » à l'endroit, boucles à l'envers, s'étire en largeur.",
  anecdote: "Le jersey de laine était considéré comme un tissu de sous-vêtement avant Chanel.",
  sources: ["jersey", "jersey_en"]
});
F("Piqué", {
  cles: ["pique"],
  origine: "Maille double qui forme de petits reliefs en nid d'abeille.",
  pays: "France, Portugal, Pérou, Asie",
  prix: "≈ 10 à 25 € le mètre",
  production: "—",
  histoire: "René Lacoste fait tricoter en 1933 une chemise en piqué de coton pour jouer au tennis : le polo moderne est né.",
  impact: "Dépend de la fibre.",
  reconnaitre: "Texture gaufrée, aérée.",
  anecdote: "Le relief éloigne le tissu de la peau et laisse passer l'air.",
  sources: ["polo", "polo_en"]
});
F("Molleton", {
  cles: ["molleton"],
  origine: "Maille lisse à l'extérieur, bouclée ou grattée à l'intérieur pour emprisonner l'air.",
  pays: "Portugal, Turquie, Japon, Chine",
  prix: "≈ 10 à 30 € le mètre",
  production: "—",
  histoire: "Le sweat-shirt apparaît dans les années 1920 aux États-Unis pour les joueurs de football américain ; Champion invente le Reverse Weave en 1938.",
  impact: "Dépend de la fibre.",
  reconnaitre: "Petites boucles ou duvet à l'intérieur.",
  anecdote: "Le « loopwheel » japonais est tricoté si lentement qu'un métier produit à peine quelques mètres par heure.",
  sources: ["sweat", "french_terry"]
});
F("Côtes (bord-côte)", {
  cles: ["cotes", "cotele", "bord-cote", "maille cotelee"],
  origine: "Maille où les mailles endroit et envers alternent en colonnes, ce qui crée des rayures en relief élastiques.",
  pays: "Production mondiale",
  prix: "Comparable au jersey",
  production: "—",
  histoire: "Utilisée depuis toujours pour les poignets et les cols, et pour le débardeur « marcel ».",
  impact: "Dépend de la fibre.",
  reconnaitre: "Rayures verticales en relief, s'étire beaucoup en largeur.",
  anecdote: "On parle de côtes 1×1 ou 2×2 selon le nombre de mailles alternées.",
  sources: ["debardeur"]
});
F("Popeline", {
  cles: ["popeline"],
  origine: "Tissage simple (toile) très serré, avec une chaîne plus fine et plus dense que la trame.",
  pays: "Italie, Suisse, Portugal, Japon, Chine",
  prix: "≈ 8 à 30 € le mètre",
  production: "—",
  histoire: "Le nom viendrait de « papeline », un tissu fabriqué à Avignon, ville des papes, au XVe siècle.",
  impact: "Dépend de la fibre.",
  reconnaitre: "Lisse, légèrement brillant, froisse.",
  anecdote: "Les meilleures popelines sont tissées avec des fils « retors » (deux fils torsadés ensemble).",
  sources: ["popeline", "poplin"]
});
F("Oxford", {
  cles: ["oxford"],
  origine: "Tissage « natté » : deux fils de trame passent ensemble, ce qui donne une texture en petits carrés.",
  pays: "Italie, Japon, Portugal, Inde",
  prix: "≈ 10 à 25 € le mètre",
  production: "—",
  histoire: "Au XIXe siècle, une filature écossaise baptise quatre tissus du nom d'universités : Oxford, Cambridge, Yale et Harvard. Seul l'Oxford a survécu. Brooks Brothers lance la chemise Oxford à col boutonné en 1896.",
  impact: "Dépend de la fibre.",
  reconnaitre: "Texture en damier, aspect chiné quand la trame est blanche.",
  anecdote: "Le col boutonné vient des joueurs de polo anglais, qui voulaient éviter que le col batte au vent.",
  sources: ["oxford"]
});
F("Sergé (twill)", {
  cles: ["serge", "twill"],
  origine: "Tissage où chaque fil de trame passe sur deux fils de chaîne ou plus, en se décalant : il crée des côtes en diagonale.",
  pays: "Production mondiale",
  prix: "≈ 8 à 30 € le mètre",
  production: "—",
  histoire: "Le sergé est l'une des trois armures de base du tissage, avec la toile et le satin.",
  impact: "Dépend de la fibre.",
  reconnaitre: "Lignes diagonales visibles à la surface.",
  anecdote: "Le denim, le chino et la gabardine sont tous des sergés.",
  sources: ["serge", "twill"]
});
F("Denim", {
  cles: ["denim", "jean"],
  origine: "Sergé de coton dont la chaîne est teinte à l'indigo et la trame laissée blanche : c'est pour cela que l'envers d'un jean est clair.",
  pays: "Japon (Okayama), Italie, Turquie, Pakistan, Bangladesh, États-Unis",
  prix: "≈ 10 à 40 € le mètre ; le selvedge japonais peut dépasser 30 €",
  production: "Plusieurs milliards de mètres par an",
  histoire: "Le nom vient de « serge de Nîmes ». Le 20 mai 1873, Levi Strauss et le tailleur Jacob Davis brevètent le pantalon à rivets : le jean est né.",
  impact: "La teinture indigo et les délavages consomment beaucoup d'eau et de produits chimiques.",
  reconnaitre: "Diagonale visible, envers clair, se décolore aux frottements.",
  anecdote: "La dernière usine de denim selvedge des États-Unis (Cone Mills White Oak) a fermé en 2017.",
  sources: ["denim", "selvedge", "heddels"]
});
F("Chambray", {
  cles: ["chambray"],
  origine: "Tissage simple (toile) avec une chaîne colorée et une trame blanche : il ressemble au denim mais en plus léger.",
  pays: "Japon, Italie, Inde",
  prix: "≈ 10 à 25 € le mètre",
  production: "—",
  histoire: "Le nom vient de Cambrai, dans le Nord, réputée pour ses toiles fines.",
  impact: "Dépend de la fibre.",
  reconnaitre: "Aspect chiné, même couleur sur l'envers et l'endroit (contrairement au denim).",
  anecdote: "La chemise en chambray était l'uniforme de travail de la marine américaine.",
  sources: ["chambray"]
});
F("Gabardine", {
  cles: ["gabardine"],
  origine: "Sergé très serré, souvent en coton ou en laine peignée, parfois imperméabilisé fil par fil avant tissage.",
  pays: "Royaume-Uni, Italie, Japon",
  prix: "≈ 15 à 50 € le mètre",
  production: "—",
  histoire: "Inventée en 1879 et brevetée en 1888 par Thomas Burberry. Roald Amundsen la portait lors de sa conquête du pôle Sud en 1911.",
  impact: "Dépend de la fibre.",
  reconnaitre: "Diagonale fine et nette, surface dense et légèrement brillante.",
  anecdote: "Les trenchs des officiers britanniques de la Première Guerre mondiale étaient en gabardine.",
  sources: ["gabardine", "trench"]
});
F("Flanelle", {
  cles: ["flanelle"],
  origine: "Tissu de laine ou de coton dont la surface est brossée pour faire lever un léger duvet.",
  pays: "Royaume-Uni, Italie (Biella), Portugal",
  prix: "≈ 30 à 80 € le mètre pour une flanelle de laine",
  production: "—",
  histoire: "Originaire du Pays de Galles, où elle est tissée dès le XVIe siècle.",
  impact: "Dépend de la fibre.",
  reconnaitre: "Toucher doux et duveteux, aspect mat.",
  anecdote: "Le costume en flanelle grise est devenu le symbole de l'homme d'affaires des années 1950.",
  sources: ["flanelle", "flannel_en"]
});
F("Tweed", {
  cles: ["tweed"],
  origine: "Lainage épais tissé avec des fils de plusieurs couleurs mélangées, ce qui donne un aspect chiné.",
  pays: "Écosse (Hébrides extérieures pour le Harris Tweed), Irlande (Donegal)",
  prix: "≈ 30 à 70 € le mètre",
  production: "—",
  histoire: "Le nom viendrait d'une erreur de lecture d'un marchand londonien : « tweel » (sergé en écossais) aurait été confondu avec la rivière Tweed. Le Harris Tweed est protégé par une loi de 1993 : il doit être tissé à la main, au domicile des tisserands.",
  impact: "Laine locale, production artisanale pour le Harris Tweed.",
  reconnaitre: "Fils de couleurs mélangées, toucher rêche et épais. Le Harris Tweed porte un logo en forme d'orbe.",
  anecdote: "Le Harris Tweed est le seul tissu au monde protégé par une loi du Parlement britannique.",
  sources: ["tweed", "tweed_en", "harris_tweed", "harristweed_org"]
});
F("Loden", {
  cles: ["loden"],
  origine: "Laine tissée puis foulée (feutrée) longuement dans l'eau, ce qui la rend dense, coupe-vent et déperlante.",
  pays: "Autriche, Allemagne, Italie (Tyrol)",
  prix: "≈ 40 à 90 € le mètre",
  production: "—",
  histoire: "Les paysans du Tyrol le portent depuis le Moyen Âge ; la maison Lodenfrey est fondée à Munich en 1842.",
  impact: "Laine pure, très durable.",
  reconnaitre: "Feutré, épais, souvent vert sapin.",
  anecdote: "Le foulage peut réduire la surface du tissu de près de moitié.",
  sources: ["loden", "loden_en"]
});
F("Velours côtelé", {
  cles: ["velours cotele"],
  origine: "Tissu de coton à fils de trame supplémentaires, coupés pour former des côtes de velours parallèles.",
  pays: "Italie, Japon, Inde, Chine",
  prix: "≈ 12 à 30 € le mètre",
  production: "—",
  histoire: "Produit en masse à Manchester au XVIIIe siècle pour les vêtements de travail.",
  impact: "Dépend de la fibre.",
  reconnaitre: "Côtes veloutées ; plus elles sont nombreuses par pouce, plus il est fin.",
  anecdote: "L'étymologie « corde du roi » est une légende : le mot anglais « corduroy » apparaît en Angleterre.",
  sources: ["velours_cotele", "corduroy"]
});
F("Velours", {
  cles: ["velours"],
  origine: "Tissu dont les fils forment des boucles coupées, ce qui crée un poil court et dense à la surface.",
  pays: "Italie, France, Inde",
  prix: "≈ 20 à 100 € le mètre (beaucoup plus en soie)",
  production: "—",
  histoire: "Gênes et Venise sont célèbres pour leurs velours de soie à la Renaissance.",
  impact: "Dépend de la fibre.",
  reconnaitre: "Toucher très doux, reflets qui changent selon le sens.",
  anecdote: "Le velours de soie était si cher qu'il était réservé à la noblesse.",
  sources: ["velours", "velvet"]
});
F("Seersucker", {
  cles: ["seersucker"],
  origine: "Tissu de coton dont certains fils sont tissés plus tendus que d'autres : en se rétractant, ils créent des bandes gaufrées.",
  pays: "Inde, Italie, États-Unis",
  prix: "≈ 10 à 25 € le mètre",
  production: "—",
  histoire: "Le nom vient du persan « shir o shakar », « lait et sucre », pour ses bandes lisses et rugueuses.",
  impact: "Dépend de la fibre.",
  reconnaitre: "Bandes alternées lisses et froissées.",
  anecdote: "Le Sénat américain organise un « Seersucker Thursday » où les élus portent ce tissu.",
  sources: ["seersucker"]
});
F("Moleskine", {
  cles: ["moleskine"],
  origine: "Coton très serré dont la surface est rasée puis brossée, au toucher de peau de taupe (« mole skin »).",
  pays: "Royaume-Uni, France, Italie",
  prix: "≈ 15 à 35 € le mètre",
  production: "—",
  histoire: "Tissu des vestes de travail françaises, notamment des cheminots et des ouvriers.",
  impact: "Dépend de la fibre.",
  reconnaitre: "Toucher peau de pêche, très dense.",
  anecdote: "Le nom anglais « moleskin » signifie « peau de taupe », pour son toucher velouté.",
  sources: ["moleskine", "moleskin_en"]
});
F("Toile (canvas, duck)", {
  cles: ["toile", "canvas", "duck"],
  origine: "Tissage simple (une trame sur une chaîne) avec des fils épais et très serrés.",
  pays: "États-Unis, Inde, Europe",
  prix: "≈ 8 à 25 € le mètre",
  production: "—",
  histoire: "Le mot canvas vient de cannabis : les premières toiles étaient en chanvre. « Duck » vient du néerlandais « doek », la toile.",
  impact: "Dépend de la fibre.",
  reconnaitre: "Épais, rigide au départ, quadrillage régulier.",
  anecdote: "La Detroit Jacket de Carhartt est en toile « duck ».",
  sources: ["canvas", "chino_toile"]
});
F("Satin", {
  cles: ["satin"],
  origine: "Armure où les fils de chaîne flottent sur plusieurs fils de trame : la surface est lisse et brillante.",
  pays: "Chine, Italie, France",
  prix: "≈ 10 € le mètre en polyester, 30 à 100 € et plus en soie",
  production: "—",
  histoire: "Le nom viendrait de Zaitun, nom arabe du port chinois de Quanzhou, d'où il était exporté.",
  impact: "Dépend de la fibre : la plupart des satins bon marché sont en polyester.",
  reconnaitre: "Endroit brillant et glissant, envers mat.",
  anecdote: "Le satin n'est pas une fibre mais une façon de tisser.",
  sources: ["satin"]
});
F("Crêpe", {
  cles: ["crepe"],
  origine: "Tissu fait de fils très tordus qui donnent une surface granuleuse et un tombé fluide.",
  pays: "Italie, France, Japon, Chine",
  prix: "≈ 15 à 60 € le mètre",
  production: "—",
  histoire: "Le crêpe de Chine, en soie, est très en vogue dans les années 1920.",
  impact: "Dépend de la fibre.",
  reconnaitre: "Surface légèrement granuleuse, ne froisse presque pas.",
  anecdote: "La torsion des fils est si forte qu'ils « crêpent » en se détendant au finissage.",
  sources: ["robe"]
});
F("Fil d'Écosse", {
  cles: ["fil d'ecosse", "mercerise"],
  origine: "Coton à fibres longues, retordu (deux fils torsadés) puis mercerisé : traité à la soude sous tension, il devient lisse, brillant et plus solide.",
  pays: "France, Italie, Royaume-Uni",
  prix: "Plus cher que le coton classique",
  production: "—",
  histoire: "Le procédé de mercerisage est inventé par John Mercer en 1844.",
  impact: "Dépend du coton.",
  reconnaitre: "Fil brillant et lisse, couleurs profondes.",
  anecdote: "En anglais, on l'appelle « lisle », du nom de la ville de Lille, autrefois réputée pour ce fil.",
  sources: ["fil_ecosse", "lisle"]
});
F("Ripstop", {
  cles: ["ripstop"],
  origine: "Tissu renforcé par un quadrillage de fils plus épais, tissés à intervalles réguliers.",
  pays: "Production mondiale",
  prix: "Variable selon la fibre",
  production: "—",
  histoire: "Développé pendant la Seconde Guerre mondiale pour les parachutes.",
  impact: "Dépend de la fibre.",
  reconnaitre: "Petit quadrillage visible.",
  anecdote: "Une déchirure s'arrête au premier fil de renfort, d'où son nom (« stop la déchirure »).",
  sources: ["ripstop"]
});
F("Dentelle Leavers (Calais)", {
  cles: ["dentelle", "leavers"],
  origine: "Dentelle fabriquée sur des métiers Leavers, d'énormes machines du XIXe siècle qui croisent des milliers de fils.",
  pays: "France (Calais et Caudry)",
  prix: "Souvent plus de 100 € le mètre, bien davantage pour les modèles complexes",
  production: "Quelques fabricants seulement",
  histoire: "Le métier inventé à Nottingham par John Levers vers 1813 est introduit clandestinement à Calais en 1816, malgré l'interdiction anglaise d'exporter ces machines.",
  impact: "Production locale et artisanale.",
  reconnaitre: "Motifs fins et nets, souplesse remarquable, label « Dentelle de Calais-Caudry ».",
  anecdote: "Il faut plusieurs semaines pour préparer un métier Leavers avant de lancer un nouveau motif.",
  sources: ["lingerie"]
});
