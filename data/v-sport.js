VETEMENTS.push(
  {
    id: "sport",
    famille: "sport",
    nom: "Vêtements de sport",
    resume: "Ici, le synthétique est votre allié : il évacue la sueur et sèche vite.",
    intro: "Pour le sport, les règles s'inversent : le coton absorbe la transpiration, devient lourd et froid. Les fibres synthétiques techniques et la laine mérinos évacuent l'humidité vers l'extérieur (on dit qu'elles sont « respirantes »). La coupe compte aussi : coutures plates pour éviter les frottements.",
    essentiel: [
      "Polyester ou polyamide technique pour le cardio et le fitness.",
      "Mérinos pour la randonnée et le trail : anti-odeurs.",
      "Coutures plates et élasthanne pour la liberté de mouvement."
    ],
    budgets: { petit: "< 30 €", moyen: "30 – 90 €", premium: "> 90 €" },
    matieres: [
      { nom: "Polyester technique", pourquoi: "Évacue la transpiration et sèche très vite. Le standard du sport." },
      { nom: "Polyamide (nylon)", pourquoi: "Plus doux et plus résistant aux frottements que le polyester : idéal pour les leggings et les shorts." },
      { nom: "Élasthanne (5 – 25 %)", pourquoi: "Liberté de mouvement indispensable pour le yoga, le fitness et les collants de course." },
      { nom: "Laine mérinos", pourquoi: "Pour la randonnée, le ski et le trail : chaud même humide, et ne sent presque pas." },
      { nom: "Mailles ajourées (mesh)", pourquoi: "Zones aérées placées là où l'on transpire le plus (dos, aisselles)." }
    ],
    eviter: [
      "Coton : il absorbe la sueur, devient lourd et froid.",
      "Coutures épaisses : frottements et irritations.",
      "Leggings trop fins qui deviennent transparents quand on se penche."
    ],
    astuces: [
      "Lavez à 30 °C sans adoucissant : il bouche les fibres techniques.",
      "Pour les odeurs tenaces, un peu de vinaigre blanc dans le bac.",
      "Faites le test du squat devant un miroir pour vérifier l'opacité d'un legging."
    ],
    tiers: {
      petit: {
        S: [["Decathlon", "Le meilleur rapport qualité-prix au monde pour le sport (Kalenji, Domyos, Kiprun)"]],
        A: [["Uniqlo", "Très bons basiques techniques (Dry-Ex, Airism)"], ["Puma", "Correct en promotion"], ["Kappa", "Basique"]],
        B: [["H&M", "Gamme Move correcte pour un usage léger"], ["Intersport", "Marques propres basiques"], ["Jako", "Correct"]],
        C: [["Shein", "Coutures fragiles"], ["Primark", "Peu durable"]]
      },
      moyen: {
        S: [["Asics", "Running de qualité"], ["Patagonia", "Outdoor durable"]],
        A: [["Nike", "Bonne technologie, prix gonflés"], ["Adidas", "Bonne technologie, prix gonflés"], ["Under Armour", "Bon pour le fitness"], ["New Balance", "Bons vêtements de course"], ["Brooks", "Running fiable"], ["Salomon", "Trail technique"], ["Odlo", "Sous-couches de référence"], ["Icebreaker", "Mérinos"], ["Girlfriend Collective", "Leggings recyclés de qualité"]],
        B: [["Gymshark", "Surtout du marketing"], ["Reebok", "Correct"], ["Fila", "Correct"], ["Champion", "Basique"]],
        C: [["Collections sport des marques de mode", "Peu techniques"]]
      },
      premium: {
        S: [["Arc'teryx", "Le meilleur en outdoor"], ["Satisfy", "Running haut de gamme"], ["Tracksmith", "Running classique très soigné"]],
        A: [["Lululemon", "Excellent pour le yoga et le fitness"], ["On", "Running confortable"], ["Ciele", "Casquettes et running"], ["Rapha", "Le cyclisme de référence"], ["Castore", "Fitness haut de gamme"], ["Norrøna", "Outdoor norvégien"]],
        B: [["Alo Yoga", "Joli mais cher"], ["Varley", "Mode sport"]],
        C: [["Luxe sportswear", "Pas fait pour le sport"]]
      }
    },
    sources: ["polyester", "polyamide", "elasthanne", "merinos", "wicking", "runnersworld", "outdoorgearlab"]
  }
);
