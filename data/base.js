// Réglages communs, familles de pièces et bibliothèque des sources.
// Les fichiers data/v-*.js ajoutent les pièces dans VETEMENTS.

const BUDGETS = [
  { id: "petit", label: "Petit budget" },
  { id: "moyen", label: "Budget moyen" },
  { id: "premium", label: "Haut de gamme" }
];

const TIER_NOMS = { S: "Excellence", A: "Recommandé", B: "Honorable", C: "À éviter" };
const TIER_INFO = {
  S: "Le meilleur choix dans ce budget",
  A: "Excellent, recommandé sans hésiter",
  B: "Correct, avec quelques compromis",
  C: "Décevant ou trop cher pour ce que c'est"
};

const FAMILLES = [
  { id: "hauts", nom: "Hauts" },
  { id: "bas", nom: "Bas" },
  { id: "robes", nom: "Robes & jupes" },
  { id: "vestes", nom: "Vestes & manteaux" },
  { id: "dessous", nom: "Dessous & nuit" },
  { id: "sport", nom: "Sport" },
  { id: "chaussures", nom: "Chaussures" },
  { id: "accessoires", nom: "Accessoires" }
];

const VETEMENTS = [];

const W = (t) => "https://fr.wikipedia.org/wiki/" + t;
const E = (t) => "https://en.wikipedia.org/wiki/" + t;

const SOURCES = {
  // Encyclopédie — fibres et matières
  coton: ["Wikipédia — Coton", W("Coton")],
  lin: ["Wikipédia — Lin textile", W("Lin_textile")],
  chanvre: ["Wikipédia — Chanvre", W("Chanvre")],
  laine: ["Wikipédia — Laine", W("Laine")],
  merinos: ["Wikipédia — Mérinos", W("M%C3%A9rinos")],
  merinos_en: ["Wikipedia (EN) — Merino", E("Merino")],
  cachemire: ["Wikipedia (EN) — Cashmere wool", E("Cashmere_wool")],
  pashmina: ["Wikipedia (EN) — Pashmina", E("Pashmina")],
  alpaga: ["Wikipédia — Alpaga (fibre)", W("Alpaga_(fibre)")],
  mohair: ["Wikipédia — Mohair", W("Mohair")],
  soie: ["Wikipédia — Soie", W("Soie")],
  cuir: ["Wikipédia — Cuir", W("Cuir")],
  tannage: ["Wikipédia — Tannage", W("Tannage")],
  vegtan: ["Wikipedia (EN) — Vegetable tanning", E("Vegetable_tanning")],
  nubuck: ["Wikipédia — Nubuck", W("Nubuck")],
  cordovan: ["Wikipedia (EN) — Shell cordovan", E("Shell_cordovan")],
  duvet: ["Wikipédia — Duvet", W("Duvet")],
  fill_power: ["Wikipedia (EN) — Fill power", E("Fill_power")],
  viscose: ["Wikipédia — Viscose", W("Viscose")],
  lyocell: ["Wikipédia — Lyocell", W("Lyocell")],
  tencel: ["Wikipedia (EN) — Tencel", E("Tencel")],
  modal: ["Wikipédia — Modal (textile)", W("Modal_(textile)")],
  polyester: ["Wikipédia — Polyester", W("Polyester")],
  polyamide: ["Wikipédia — Polyamide", W("Polyamide")],
  elasthanne: ["Wikipédia — Élasthanne", W("%C3%89lasthanne")],
  acrylique: ["Wikipédia — Fibre acrylique", W("Fibre_acrylique")],
  polaire: ["Wikipédia — Laine polaire", W("Laine_polaire")],
  primaloft: ["Wikipedia (EN) — PrimaLoft", E("Primaloft")],
  goretex: ["Wikipédia — Gore-Tex", W("Gore-Tex")],
  caoutchouc: ["Wikipédia — Caoutchouc", W("Caoutchouc")],
  microplastiques: ["Wikipedia (EN) — Microplastics", E("Microplastics")],
  supima: ["Wikipedia (EN) — Supima", E("Supima")],
  pima: ["Wikipedia (EN) — Pima cotton", E("Pima_cotton")],
  egyptien: ["Wikipedia (EN) — Egyptian cotton", E("Egyptian_cotton")],
  sea_island: ["Wikipedia (EN) — Sea Island cotton", E("Sea_Island_cotton")],

  // Encyclopédie — étoffes et tissages
  jersey: ["Wikipédia — Jersey (tissu)", W("Jersey_(tissu)")],
  denim: ["Wikipédia — Denim", W("Denim")],
  selvedge: ["Wikipedia (EN) — Selvedge denim", E("Selvedge_denim")],
  popeline: ["Wikipédia — Popeline", W("Popeline")],
  oxford: ["Wikipedia (EN) — Oxford (cloth)", E("Oxford_(cloth)")],
  serge: ["Wikipédia — Sergé", W("Serg%C3%A9")],
  twill: ["Wikipedia (EN) — Twill", E("Twill")],
  flanelle: ["Wikipédia — Flanelle", W("Flanelle")],
  tweed: ["Wikipédia — Tweed", W("Tweed")],
  gabardine: ["Wikipédia — Gabardine", W("Gabardine")],
  loden: ["Wikipédia — Loden", W("Loden")],
  velours: ["Wikipédia — Velours", W("Velours")],
  velours_cotele: ["Wikipédia — Velours côtelé", W("Velours_c%C3%B4tel%C3%A9")],
  seersucker: ["Wikipedia (EN) — Seersucker", E("Seersucker")],
  french_terry: ["Wikipedia (EN) — French terry", E("French_terry")],
  fil_ecosse: ["Wikipédia — Fil d'Écosse", W("Fil_d%27%C3%89cosse")],
  chino_toile: ["Wikipedia (EN) — Chino cloth", E("Chino_cloth")],
  waxed: ["Wikipedia (EN) — Waxed cotton", E("Waxed_cotton")],
  super100: ["Wikipedia (EN) — Super 100's", E("Super_100")],
  fabric_weight: ["Wikipedia (EN) — Fabric weight (grammage)", E("Fabric_weight")],
  thread_count: ["Wikipedia (EN) — Thread count", E("Thread_count")],
  pilling: ["Wikipedia (EN) — Pilling (boulochage)", E("Pilling")],
  wicking: ["Wikipedia (EN) — Moisture wicking", E("Moisture_wicking")],
  canvassing: ["Wikipedia (EN) — Canvassing (entoilage)", E("Canvassing")],

  // Encyclopédie — pièces
  chemise: ["Wikipédia — Chemise", W("Chemise")],
  polo: ["Wikipédia — Polo (vêtement)", W("Polo_(v%C3%AAtement)")],
  polo_en: ["Wikipedia (EN) — Polo shirt", E("Polo_shirt")],
  debardeur: ["Wikipédia — Débardeur", W("D%C3%A9bardeur")],
  tank_top: ["Wikipedia (EN) — Tank top", E("Tank_top")],
  sweat: ["Wikipédia — Sweat-shirt", W("Sweat-shirt")],
  sweat_en: ["Wikipedia (EN) — Sweatshirt", E("Sweatshirt")],
  cardigan: ["Wikipédia — Cardigan", W("Cardigan")],
  pantalon: ["Wikipédia — Pantalon", W("Pantalon")],
  chino: ["Wikipédia — Chino", W("Chino")],
  jogging: ["Wikipédia — Jogging (vêtement)", W("Jogging_(v%C3%AAtement)")],
  jupe: ["Wikipédia — Jupe", W("Jupe")],
  robe: ["Wikipédia — Robe", W("Robe")],
  costume: ["Wikipédia — Costume", W("Costume")],
  blazer: ["Wikipédia — Blazer", W("Blazer")],
  manteau: ["Wikipédia — Manteau", W("Manteau")],
  trench: ["Wikipédia — Trench-coat", W("Trench-coat")],
  doudoune: ["Wikipédia — Doudoune", W("Doudoune")],
  lingerie: ["Wikipédia — Lingerie", W("Lingerie")],
  soutien_gorge: ["Wikipédia — Soutien-gorge", W("Soutien-gorge")],
  chaussette: ["Wikipédia — Chaussette", W("Chaussette")],
  collant: ["Wikipédia — Collant", W("Collant")],
  pyjama: ["Wikipédia — Pyjama", W("Pyjama")],
  maillot: ["Wikipédia — Maillot de bain", W("Maillot_de_bain")],
  swimsuit: ["Wikipedia (EN) — Swimsuit", E("Swimsuit")],
  basket: ["Wikipédia — Basket (chaussure)", W("Basket_(chaussure)")],
  goodyear: ["Wikipédia — Cousu Goodyear", W("Cousu_Goodyear")],
  goodyear_en: ["Wikipedia (EN) — Goodyear welt", E("Goodyear_welt")],
  blake: ["Wikipedia (EN) — Blake stitch", E("Blake_stitch")],
  richelieu: ["Wikipédia — Richelieu (chaussure)", W("Richelieu_(chaussure)")],
  derby: ["Wikipédia — Derby (chaussure)", W("Derby_(chaussure)")],
  mocassin: ["Wikipédia — Mocassin", W("Mocassin")],
  sandale: ["Wikipédia — Sandale", W("Sandale")],
  espadrille: ["Wikipédia — Espadrille", W("Espadrille")],
  echarpe: ["Wikipédia — Écharpe", W("%C3%89charpe")],
  bonnet: ["Wikipédia — Bonnet", W("Bonnet")],
  gant: ["Wikipédia — Gant", W("Gant")],
  ceinture: ["Wikipédia — Ceinture (vêtement)", W("Ceinture_(v%C3%AAtement)")],
  cravate: ["Wikipédia — Cravate", W("Cravate")],
  necktie: ["Wikipedia (EN) — Necktie", E("Necktie")],
  sac: ["Wikipédia — Sac à main", W("Sac_%C3%A0_main")],

  // Organismes, labels et environnement
  woolmark: ["The Woolmark Company — ressources sur la laine", "https://www.woolmark.com/"],
  iwto: ["IWTO — Organisation textile lainière internationale", "https://www.iwto.org/"],
  supima_org: ["Supima — association du coton Supima", "https://www.supima.com/"],
  cottoninc: ["Cotton Incorporated", "https://www.cottoninc.com/"],
  rds: ["Textile Exchange — Responsible Down Standard", "https://textileexchange.org/responsible-down-standard/"],
  idfl: ["IDFL — laboratoire de tests du duvet", "https://www.idfl.com/"],
  goretex_site: ["GORE-TEX — documentation officielle", "https://www.gore-tex.com/"],
  oekotex: ["OEKO-TEX — label textile", "https://www.oeko-tex.com/"],
  gots: ["GOTS — Global Organic Textile Standard", "https://global-standard.org/"],
  ademe: ["ADEME — impact environnemental de la mode", "https://www.ademe.fr/"],
  refashion: ["Refashion — filière textile française", "https://refashion.fr/"],
  fashionrev: ["Fashion Revolution — transparence de la mode", "https://www.fashionrevolution.org/"],
  fastfashion: ["Wikipédia — Fast fashion", W("Fast_fashion")],
  modeethique: ["Wikipédia — Mode éthique", W("Mode_%C3%A9thique")],
  goodonyou: ["Good On You — notes éthiques des marques", "https://goodonyou.eco/"],
  patagonia: ["Patagonia — garantie et réparation", "https://www.patagonia.com/ironclad-guarantee/"],

  // Médias et communautés spécialisés
  bonnegueule: ["BonneGueule — média mode masculine", "https://www.bonnegueule.fr/"],
  permanentstyle: ["Permanent Style — élégance classique", "https://www.permanentstyle.com/"],
  dieworkwear: ["Die, Workwear! — analyses de vêtements", "https://www.dieworkwear.com/"],
  putthison: ["Put This On — style masculin", "https://putthison.com/"],
  heddels: ["Heddels — denim et workwear", "https://www.heddels.com/"],
  rawdenim: ["Reddit r/rawdenim — communauté denim brut", "https://www.reddit.com/r/rawdenim/"],
  goodyearwelt: ["Reddit r/goodyearwelt — chaussures cousues", "https://www.reddit.com/r/goodyearwelt/"],
  mfa: ["Reddit r/malefashionadvice", "https://www.reddit.com/r/malefashionadvice/"],
  ffa: ["Reddit r/femalefashionadvice", "https://www.reddit.com/r/femalefashionadvice/"],
  outdoorgearlab: ["OutdoorGearLab — tests de matériel outdoor", "https://www.outdoorgearlab.com/"],
  runnersworld: ["Runner's World — tests running", "https://www.runnersworld.com/"]
};

// Sources communes à toutes les fiches (classements de marques)
const SOURCES_MARQUES = ["bonnegueule", "permanentstyle", "dieworkwear", "mfa", "ffa", "goodonyou"];
