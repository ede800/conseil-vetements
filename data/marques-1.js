// Fiches des maisons. Notes sur 5 : [matières, confection, durabilité, rapport qualité-prix, éthique & transparence]
// M(nom, pays, gamme, notes, description, points forts, points faibles)

const MARQUES = {};
const M = (nom, pays, gamme, notes, desc, forts, faibles) => { MARQUES[nom] = { pays, gamme, notes, desc, forts, faibles }; };

// Variantes de noms utilisées dans les classements, rattachées à une fiche
const ALIAS = {
  "Calvin Klein Jeans": "Calvin Klein",
  "Tommy Jeans": "Tommy Hilfiger",
  "Lee 101": "Lee",
  "Moncler Grenoble": "Moncler",
  "RRL (Ralph Lauren)": "Ralph Lauren",
  "Jordan": "Nike",
  "Veilance": "Arc'teryx"
};

M("& Other Stories", "Suède", "€€", [3, 3, 3, 3, 3], "Marque du groupe H&M au style plus soigné, avec des ateliers de création à Paris, Stockholm et Los Angeles. Les pièces en fibres naturelles sont souvent réussies, les synthétiques beaucoup moins.", "Style féminin original, beaux imprimés", "Qualité inégale selon la matière");
M("1083", "France", "€€", [4, 4, 4, 4, 5], "Jeans et chaussures fabriqués en France, dans un rayon de 1 083 km (la plus grande distance entre deux villes françaises). Toile solide et filière locale.", "Fabrication française transparente, denim robuste", "Coupes sobres, choix limité");
M("7 For All Mankind", "États-Unis", "€€€", [3, 3, 3, 2, 3], "Marque californienne qui a popularisé le jean premium dans les années 2000. Belles coupes, mais beaucoup de stretch et un prix élevé.", "Coupes flatteuses", "Stretch fréquent, prix élevé");
M("A.P.C.", "France", "€€€", [4, 4, 4, 3, 3], "Maison parisienne fondée en 1987 par Jean Touitou, référence du minimalisme. Son jean brut Petit Standard est devenu un classique.", "Coupes intemporelles, jean brut de référence", "Prix en hausse, quelques pièces moins solides");
M("Acne Studios", "Suède", "€€€€", [3, 3, 3, 2, 3], "Maison suédoise de mode contemporaine, connue pour ses jeans, écharpes et coupes oversize. La qualité est correcte, mais le prix reflète surtout le style.", "Créativité, coupes", "Rapport qualité-prix faible");
M("Adidas", "Allemagne", "€€", [3, 3, 3, 3, 3], "Géant allemand du sport. Les classiques (Stan Smith, Samba, Gazelle) restent fiables et les gammes de running sont très performantes.", "Classiques intemporels, technologie running", "Qualité variable selon les gammes, prix gonflés par le marketing");
M("Aero Leather", "Royaume-Uni", "€€€€", [5, 5, 5, 4, 4], "Atelier écossais qui fabrique à la main des vestes en cuir de cheval inspirées des modèles des années 1930-1950. Construction remarquable.", "Cuir exceptionnel, fabrication artisanale", "Délais de fabrication, prix élevé");
M("Agent Provocateur", "Royaume-Uni", "€€€€", [4, 4, 3, 2, 3], "Maison de lingerie de luxe londonienne au style audacieux, fondée en 1994.", "Matières et dentelles luxueuses", "Prix très élevé");
M("Agnelle", "France", "€€€", [4, 5, 4, 4, 4], "Gantier français fondé en 1937, qui fabrique dans ses ateliers de Saint-Junien, berceau historique de la ganterie.", "Savoir-faire français, cuirs fins", "Choix de styles classique");
M("Agolde", "États-Unis", "€€€", [3, 4, 3, 3, 3], "Marque de jeans de Los Angeles, appréciée pour ses coupes féminines vintage.", "Coupes réussies", "Prix élevé");
M("Aigle", "France", "€€", [4, 4, 4, 3, 3], "Fondée en 1853, célèbre pour ses bottes en caoutchouc naturel encore vulcanisées à la main en France, et ses vêtements de pluie.", "Bottes de pluie de référence, imperméables solides", "Vêtements plus mode et moins techniques qu'avant");
M("Alain Figaret", "France", "€€", [4, 4, 4, 3, 3], "Chemisier français fondé en 1968, spécialiste de la chemise en coton.", "Large choix, tissus de qualité", "Style classique");
M("Alden", "États-Unis", "€€€€", [5, 5, 5, 3, 4], "Fabricant de souliers de la Nouvelle-Angleterre depuis 1884, célèbre pour ses modèles en cuir cordovan.", "Cordovan exceptionnel, construction Goodyear", "Prix élevés, disponibilité limitée en Europe");
M("Alexander McQueen", "Royaume-Uni", "€€€€", [3, 3, 3, 1, 3], "Maison de luxe britannique créative. Ses baskets oversize sont populaires mais chères pour leur fabrication.", "Créativité", "Prix du nom");
M("Allen Edmonds", "États-Unis", "€€€", [4, 4, 4, 4, 3], "Fabricant américain de chaussures cousues Goodyear depuis 1922.", "Bon rapport qualité-prix, ressemelage", "Style très américain");
M("AllSaints", "Royaume-Uni", "€€€", [3, 3, 3, 2, 3], "Marque londonienne connue pour ses vestes en cuir au style rock.", "Style marqué", "Prix élevé pour la qualité");
M("Alo Yoga", "États-Unis", "€€€", [3, 3, 3, 2, 3], "Marque de yoga de Los Angeles très présente sur les réseaux sociaux.", "Joli design", "Prix élevé");
M("Alpha Industries", "États-Unis", "€€", [3, 3, 4, 4, 3], "Fournisseur historique de l'armée américaine, créateur du bomber MA-1.", "Authenticité, robustesse", "Finitions simples");
M("Altra", "États-Unis", "€€", [3, 4, 3, 4, 3], "Marque de running connue pour ses chaussures à boîte à orteils large et sans drop.", "Confort pour pieds larges", "Adaptation nécessaire");
M("American Vintage", "France", "€€", [3, 3, 2, 3, 3], "Marque marseillaise de basiques au toucher très doux et aux couleurs délavées.", "Toucher doux, couleurs", "Matières fines qui vieillissent vite");
M("Ami Paris", "France", "€€€", [4, 4, 4, 2, 3], "Marque parisienne fondée par Alexandre Mattiussi en 2011, au style accessible et élégant.", "Belles matières, style", "Le logo pèse lourd dans le prix");
M("Amiri", "États-Unis", "€€€€", [3, 3, 3, 1, 2], "Marque de luxe de Los Angeles connue pour ses jeans déchirés.", "Image", "Prix extrême");
M("Ancient Greek Sandals", "Grèce", "€€€", [3, 3, 3, 3, 3], "Sandales en cuir fabriquées en Grèce, au design épuré.", "Design, cuir", "Prix élevé");
M("Anderson & Sheppard", "Royaume-Uni", "€€€€", [5, 5, 5, 3, 4], "Tailleur historique de Savile Row, connu pour sa coupe souple et drapée.", "Grande mesure d'exception", "Prix très élevé");
M("Anderson's", "Italie", "€€€", [4, 4, 4, 3, 3], "Fabricant italien de ceintures, spécialiste de la ceinture tressée.", "Ceintures tressées de référence", "Prix élevé");
M("André", "France", "€", [2, 2, 2, 3, 2], "Enseigne française de chaussures à petits prix.", "Prix bas", "Semelles collées, cuirs moyens");
M("Aquascutum", "Royaume-Uni", "€€€", [4, 4, 4, 3, 3], "Maison londonienne fondée en 1851, l'une des inventrices du trench-coat.", "Héritage, gabardine", "Marque moins présente qu'avant");
M("Aran Woollen Mills", "Irlande", "€€", [4, 3, 4, 4, 3], "Fabricant irlandais de pulls aran traditionnels en laine.", "Pulls authentiques et chauds", "Style traditionnel");
M("Arc'teryx", "Canada", "€€€€", [5, 5, 5, 3, 4], "Marque canadienne d'outdoor réputée pour la technicité de ses vestes Gore-Tex et ses finitions. Sa ligne Veilance propose un style urbain.", "Technicité et finitions au sommet", "Prix élevé, devenu une marque de mode");
M("Archiduchesse", "France", "€€", [4, 4, 4, 4, 5], "Chaussettes colorées fabriquées en France en coton peigné.", "Made in France, couleurs", "Style très coloré");
M("Arena", "Italie", "€€", [4, 4, 4, 4, 3], "Spécialiste de la natation fondé en 1973.", "Maillots résistants au chlore", "Style sportif");
M("Arizona Love", "France", "€€", [3, 3, 3, 3, 3], "Sandales françaises inspirées des sandales de randonnée.", "Confort, style", "Prix moyen");
M("Arket", "Suède", "€€", [4, 3, 4, 4, 3], "Marque du groupe H&M lancée en 2017, aux basiques soignés et intemporels, avec une bonne traçabilité.", "Basiques durables, sobriété", "Qualité un peu en baisse");
M("Armor Lux", "France", "€€", [4, 4, 4, 4, 4], "Marque bretonne fondée en 1938, connue pour ses marinières et une partie de sa production en France.", "Robustesse, fabrication française partielle", "Style marin classique");
M("Art of Soule", "France", "€€", [4, 4, 3, 4, 4], "Espadrilles faites main au Pays basque.", "Savoir-faire local", "Choix limité");
M("Asics", "Japon", "€€", [4, 4, 4, 4, 3], "Fabricant japonais réputé en running pour la fiabilité de ses modèles (Gel-Nimbus, Novablast).", "Running fiable", "Style sportif");
M("Asket", "Suède", "€€", [4, 4, 4, 4, 5], "Marque suédoise de basiques avec traçabilité complète et collection permanente sans saisons.", "Transparence exemplaire, qualité", "Choix restreint");
M("Asphalte", "France", "€€", [4, 4, 4, 4, 4], "Marque française qui précommande ses vêtements pour éviter les surstocks, conçus pour durer.", "Durabilité, démarche responsable", "Délais de précommande");
M("Atelier Private", "France", "€€€", [4, 4, 4, 4, 3], "Sur-mesure accessible à Paris, costumes et chemises.", "Ajustement sur-mesure", "Prise de mesures en boutique");
M("Atelier Tuffery", "France", "€€", [4, 4, 4, 4, 5], "Plus ancienne fabrique française de jeans (1892), en Lozère.", "Fabrication française historique", "Prix moyen-haut");
M("Athena", "France", "€", [3, 3, 3, 4, 3], "Marque française de sous-vêtements accessibles.", "Bon basique", "Simple");
M("Aubade", "France", "€€€", [4, 4, 3, 3, 3], "Maison française de lingerie fondée en 1875.", "Dentelles élégantes", "Prix élevé");
M("Autry", "États-Unis", "€€€", [4, 4, 3, 3, 3], "Baskets rétro américaines fabriquées en Asie et en Europe.", "Cuir de qualité", "Prix élevé");
M("Axel Arigato", "Suède", "€€€", [4, 4, 3, 3, 3], "Marque suédoise de baskets minimalistes.", "Design soigné", "Durabilité moyenne pour le prix");
M("ba&sh", "France", "€€€", [3, 3, 3, 2, 3], "Marque parisienne au style bohème chic.", "Style", "Viscose et synthétique fréquents pour le prix");
M("Balenciaga", "France", "€€€€", [2, 3, 3, 1, 2], "Maison de luxe parisienne devenue symbole du streetwear de luxe. La plupart des pièces se paient surtout pour l'image.", "Créativité, image", "Prix sans rapport avec la qualité");
M("Bally", "Suisse", "€€€", [4, 4, 4, 3, 3], "Chausseur suisse fondé en 1851.", "Savoir-faire", "Prix élevé");
M("Balmain", "France", "€€€€", [3, 3, 3, 1, 2], "Maison parisienne au style spectaculaire.", "Image", "Prix très élevé");
M("Banana Moon", "France", "€€", [3, 3, 2, 3, 3], "Marque française de maillots de bain colorés.", "Style", "Tenue moyenne");
M("Baracuta", "Royaume-Uni", "€€€", [4, 4, 4, 3, 3], "Inventeur du blouson Harrington G9 en 1937.", "Authenticité, solidité", "Prix élevé");
M("Barbour", "Royaume-Uni", "€€€", [4, 4, 5, 4, 4], "Maison anglaise fondée en 1894, célèbre pour ses vestes en coton ciré qu'elle recire et répare à vie.", "Durabilité, service de réparation", "Une partie de la production délocalisée");
M("Barker", "Royaume-Uni", "€€€", [4, 4, 4, 4, 3], "Chausseur anglais de Northampton depuis 1880.", "Goodyear abordable", "Style classique");
M("Begg x Co", "Royaume-Uni", "€€€", [5, 4, 4, 3, 4], "Tisserand écossais d'écharpes en cachemire et laine.", "Matières exceptionnelles", "Prix élevé");
M("Belstaff", "Royaume-Uni", "€€€", [4, 4, 4, 3, 3], "Marque anglaise de vêtements de moto, connue pour ses vestes cirées et en cuir.", "Héritage, robustesse", "Prix élevé");
M("Berluti", "France", "€€€€", [5, 5, 5, 2, 3], "Bottier parisien de luxe (LVMH), célèbre pour sa patine.", "Cuirs et patines exceptionnels", "Prix très élevé");
M("Bershka", "Espagne", "€", [2, 2, 1, 2, 2], "Marque jeune du groupe Inditex, très orientée tendance.", "Style tendance", "Faible durabilité");
M("Berwich", "Italie", "€€€", [4, 4, 4, 3, 3], "Fabricant italien de pantalons.", "Coupes italiennes", "Prix élevé");
M("Bexley", "France", "€€", [4, 4, 4, 5, 3], "Marque française de chaussures cousues Goodyear vendues en direct à prix très accessibles.", "Rapport qualité-prix imbattable", "Cuirs moins nobles que le haut de gamme");
M("Birkenstock", "Allemagne", "€€", [4, 4, 4, 4, 4], "Fabricant allemand de sandales à semelle anatomique en liège depuis 1774.", "Confort, réparabilité", "Style particulier");
M("Bleu de Chauffe", "France", "€€€", [4, 4, 5, 3, 5], "Maroquinerie fabriquée en France avec des cuirs tannés végétal.", "Fabrication française, durabilité", "Prix élevé");
M("Bleuforêt", "France", "€€", [4, 4, 4, 4, 5], "Chaussettes et collants fabriqués dans les Vosges depuis 1994.", "Made in France, solidité", "Prix moyen");
M("Blundstone", "Australie", "€€", [4, 4, 5, 4, 3], "Chelsea boots australiennes réputées increvables.", "Robustesse, confort", "Semelle injectée non cousue");
M("Bocage", "France", "€€", [3, 3, 3, 3, 3], "Marque française de chaussures de ville du groupe Eram.", "Style classique", "Semelles collées");
M("Boglioli", "Italie", "€€€€", [4, 5, 4, 3, 3], "Maison italienne connue pour ses vestes déstructurées et teintes en pièce.", "Vestes souples élégantes", "Prix élevé");
M("BonneGueule", "France", "€€", [4, 4, 4, 4, 4], "Média devenu marque française de vêtements masculins, avec des tissus sourcés en Europe et une forte pédagogie.", "Matières sélectionnées, transparence", "Style assez classique");
M("Bonobo", "France", "€", [2, 3, 3, 3, 3], "Marque française de jeans et basiques du groupe Beaumanoir.", "Prix accessibles", "Qualité moyenne");
M("Bonsoirs", "Royaume-Uni", "€€", [4, 4, 4, 3, 3], "Marque londonienne de pyjamas en popeline et en soie.", "Pyjamas réussis", "Prix moyen-haut");
M("Bottega Veneta", "Italie", "€€€€", [5, 5, 4, 2, 3], "Maroquinier italien célèbre pour son cuir tressé (intrecciato).", "Maroquinerie de très grande qualité", "Prix très élevé");
M("Bresciani", "Italie", "€€€", [5, 5, 4, 3, 4], "Fabricant italien de chaussettes de luxe depuis 1970.", "Chaussettes d'exception", "Prix élevé");
M("Brice", "France", "€", [3, 3, 3, 3, 3], "Enseigne française de prêt-à-porter masculin abordable.", "Classiques abordables", "Qualité moyenne");
M("Brioni", "Italie", "€€€€", [5, 5, 5, 2, 3], "Tailleur romain de luxe, célèbre pour avoir habillé James Bond.", "Construction d'exception", "Tarif extrême");
M("Brooks", "États-Unis", "€€", [4, 4, 4, 4, 3], "Spécialiste américain du running.", "Confort constant, fiabilité", "Style sportif");
M("Brunello Cucinelli", "Italie", "€€€€", [5, 5, 5, 2, 4], "Maison italienne du « luxe humaniste », célèbre pour son cachemire et ses conditions de travail.", "Matières somptueuses, éthique", "Prix très élevé");
M("Burberry", "Royaume-Uni", "€€€€", [4, 4, 4, 2, 3], "Inventeur de la gabardine et du trench-coat. Le trench Heritage reste une référence, le reste se paie surtout pour la marque.", "Trench de référence", "Prix gonflé hors trench");
M("Burlington", "Allemagne", "€€", [3, 3, 3, 4, 3], "Marque de chaussettes connue pour ses motifs à losanges.", "Classiques solides", "Style marqué");
M("Buttero", "Italie", "€€€", [4, 4, 4, 3, 3], "Fabricant toscan de chaussures et baskets en cuir.", "Cuir italien", "Prix élevé");
M("C&A", "Pays-Bas / Allemagne", "€", [2, 2, 2, 3, 3], "Enseigne de prêt-à-porter grand public.", "Prix bas, efforts sur le coton bio", "Qualité moyenne");
M("Calvin Klein", "États-Unis", "€€", [3, 3, 3, 2, 3], "Marque américaine connue pour ses sous-vêtements et ses jeans.", "Confort des sous-vêtements", "Prime de marque importante");
M("Calzedonia", "Italie", "€€", [3, 3, 3, 3, 3], "Spécialiste italien des collants, chaussettes et maillots.", "Large choix", "Qualité moyenne");
M("Canada Goose", "Canada", "€€€€", [4, 4, 4, 2, 2], "Fabricant canadien de parkas grand froid, très populaire en ville.", "Chaleur réelle", "Prix très élevé, controverses sur la fourrure (abandonnée depuis)");
M("Canali", "Italie", "€€€€", [4, 4, 4, 2, 3], "Tailleur industriel italien haut de gamme.", "Costumes bien faits", "Prix élevé");
M("Carhartt WIP", "États-Unis / Allemagne", "€€", [4, 4, 4, 3, 3], "Branche urbaine de la marque de vêtements de travail américaine.", "Robustesse, style workwear", "Prix gonflé par la popularité");
M("Carine Gilson", "Belgique", "€€€€", [5, 5, 4, 3, 4], "Maison de lingerie en soie et dentelle faite main en Belgique.", "Lingerie d'exception", "Prix très élevé");
M("Carmina", "Espagne", "€€€", [5, 5, 5, 4, 3], "Bottier de Majorque fondé en 1866, réputé pour ses finitions.", "Qualité exceptionnelle pour le prix", "Formes à essayer");
M("Caruso", "Italie", "€€€€", [5, 5, 4, 3, 3], "Fabricant italien de vestes et costumes.", "Savoir-faire", "Prix élevé");
M("Castañer", "Espagne", "€€", [3, 3, 3, 3, 3], "Fabricant espagnol d'espadrilles depuis 1927.", "Espadrilles iconiques", "Prix élevé");
M("Castore", "Royaume-Uni", "€€€", [3, 4, 3, 3, 3], "Marque britannique de sport haut de gamme.", "Finitions", "Prix élevé");
M("Caterpillar", "États-Unis", "€€", [3, 3, 3, 3, 3], "Chaussures de travail de la marque d'engins de chantier.", "Robustesse", "Semelles souvent collées");
M("Causse", "France", "€€€€", [5, 5, 5, 3, 4], "Gantier de Millau depuis 1892, propriété de Chanel.", "Gants d'exception", "Prix élevé");
M("CDLP", "Suède", "€€€", [4, 4, 4, 3, 4], "Sous-vêtements suédois haut de gamme en lyocell.", "Confort, matières responsables", "Prix élevé");
M("Celine", "France", "€€€€", [4, 4, 4, 2, 3], "Maison de luxe parisienne (LVMH), connue pour sa maroquinerie.", "Belle maroquinerie", "Prix du nom");
M("Celio", "France", "€", [3, 3, 3, 4, 3], "Enseigne française de prêt-à-porter masculin abordable.", "Basiques corrects, nombreuses promotions", "Qualité moyenne");
M("Chaco", "États-Unis", "€€", [4, 4, 5, 4, 3], "Sandales américaines robustes et réparables.", "Durabilité", "Style outdoor");
M("Champion", "États-Unis", "€", [3, 3, 4, 4, 3], "Inventeur du sweat Reverse Weave en 1938.", "Sweats robustes", "Qualité variable selon les gammes");
M("Chanel", "France", "€€€€", [4, 5, 4, 1, 3], "Maison de luxe parisienne. Les sacs ont vu leurs prix multipliés.", "Savoir-faire", "Prix en hausse permanente");
M("Chantelle", "France", "€€", [4, 4, 4, 4, 4], "Maison française de lingerie fondée en 1876, réputée pour son maintien.", "Maintien et dentelles", "Style classique");
M("Chapal", "France", "€€€€", [5, 5, 5, 3, 4], "Maison française historique de vestes en cuir (1832).", "Cuir et savoir-faire", "Prix élevé");
M("Charles Tyrwhitt", "Royaume-Uni", "€€", [3, 3, 3, 4, 3], "Chemiserie londonienne vendue surtout en ligne, avec de fréquentes promotions.", "Rapport qualité-prix en promotion", "Qualité moins bonne qu'avant");
M("Charvet", "France", "€€€€", [5, 5, 5, 3, 4], "Chemisier parisien de la place Vendôme depuis 1838.", "Chemises et cravates d'exception", "Prix très élevé");
M("Chloé", "France", "€€€€", [4, 4, 3, 2, 4], "Maison parisienne au style romantique, engagée sur la durabilité.", "Belles matières", "Prix du nom");
M("Church's", "Royaume-Uni", "€€€€", [4, 4, 4, 2, 3], "Chausseur de Northampton (groupe Prada).", "Classiques anglais", "Qualité moins constante qu'avant, prix élevé");
M("Ciele", "Canada", "€€", [3, 4, 4, 3, 3], "Casquettes et vêtements de running.", "Finitions", "Prix moyen-haut");
M("Cifonelli", "France", "€€€€", [5, 5, 5, 3, 4], "Tailleur parisien de grande mesure.", "Coupe d'exception", "Prix très élevé");
M("Citizens of Humanity", "États-Unis", "€€€", [4, 4, 3, 3, 3], "Marque de jeans premium de Los Angeles.", "Belles coupes", "Prix élevé");
M("Clarks", "Royaume-Uni", "€€", [3, 3, 3, 4, 3], "Chausseur anglais créateur de la Desert Boot et de la Wallabee.", "Confort, classiques", "Semelles crêpe fragiles");
M("Claudie Pierlot", "France", "€€€", [3, 3, 3, 2, 3], "Marque parisienne au style féminin classique.", "Style élégant", "Prix élevé pour la matière");
M("Coach", "États-Unis", "€€€", [4, 4, 4, 3, 3], "Maroquinier new-yorkais fondé en 1941.", "Bon cuir pour le prix", "Image grand public");
M("Colorful Standard", "Danemark", "€€", [4, 4, 4, 4, 4], "Basiques en coton bio lourd teints au Portugal.", "Coton épais, couleurs", "Coupes uniques");
M("Columbia", "États-Unis", "€€", [3, 3, 3, 4, 3], "Marque d'outdoor accessible.", "Bon rapport qualité-prix", "Moins technique que les spécialistes");
M("Common Projects", "États-Unis / Italie", "€€€€", [5, 4, 4, 2, 3], "Baskets minimalistes fabriquées en Italie, référence du genre.", "Cuir italien, design", "Prix élevé");
M("Comptoir des Cotonniers", "France", "€€", [3, 3, 3, 3, 3], "Marque française au style féminin intemporel.", "Basiques élégants", "Qualité en baisse");
M("Converse", "États-Unis", "€", [2, 3, 2, 4, 3], "Créateur de la Chuck Taylor All Star (Nike).", "Icône intemporelle", "Durée de vie limitée");
M("Corthay", "France", "€€€€", [5, 5, 5, 3, 4], "Bottier parisien de luxe.", "Souliers d'exception", "Prix très élevé");
M("COS", "Suède", "€€", [3, 3, 3, 3, 3], "Marque du groupe H&M au minimalisme architectural.", "Design épuré", "Qualité inégale");
M("Côte&Ciel", "France", "€€€", [3, 4, 4, 3, 3], "Sacs à dos au design architectural.", "Design", "Prix élevé");
M("Crockett & Jones", "Royaume-Uni", "€€€€", [5, 5, 5, 3, 4], "Chausseur familial de Northampton depuis 1879.", "Qualité constante, Goodyear", "Prix élevé");
M("Cyrillus", "France", "€€", [3, 3, 3, 3, 3], "Marque française au style classique.", "Classiques", "Qualité moyenne");
