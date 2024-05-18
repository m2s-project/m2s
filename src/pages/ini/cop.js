/* eslint-disable no-sparse-arrays */
export const cop = {
  tache: "",
  atelier: "",
 type:"",
 emplacement:"",
 duree:"",
  resultat:false,
  status:true,
  remarques:""

};

const vl = [
  {
    emplacement: "Dans la cabine",
    taches: [
      "Voyants tableau de bord",
      "Compteur kilométrique",
      "Fonctionnement climatisation",
      "Contrôler essuie glace et lave glace",
      "Poignets intérieurs",
      "Ceinture de sécurité",
      "Sièges",
      "Vérifier le fonctionnement des lampes de l'habitacle",
      "Souflage de filtre habitacle",
    ],
  },
  {
    emplacement: "Sous le capot",
    taches: [
      "Contôler niveau d'huile moteur, direction, frein, liquide",
      "Contôler la tension et l'état des courroies",
      "Fixer la batterie et niveau si possible",
      "Fixer la batterie et niveau si possible",
      "Nettoyaer le filtre à air (basse pression)",
      "Purger le décanteur carburant (si monté, diesel)",
      "Contrôler le verrou capot",
    ],
  },
  {
    emplacement: "Autour du vehicule",
    taches: [
      "Contôler la pression et l'état des pneus et lot de bord (roue de secours, crique, manivelle)",
      "Contrôler visuellement la plaquette de freins avant",
      "Contrôler visuellement le frein arrière (fuite sur tambour)",
      "Contrôler le jeu rotules de direction",
      "Contrôler l'éclairage et avertisseur et bruiteur marche arrière",
      "Contrôler la carrosserie (portière, coffre arrière, poignets)",
      "Contrôler l'état amortisseurs AV/AR voir si il y a fuite",
      "Contrôler sous le véhicule, (fuite moteur, boite, pont, état transmission, silent bloc...)",
    ],
  },
  {
    emplacement: "Sur véhicule",
    taches: ["Nettoyage et lavage après entretien "],
  },
  {
    emplacement: "Autres",
    taches: [
        "Contrôler voyant tableau de bord et informations",

        "Nettoyager filtre à air (basse pression)",
        
        "Contrôler moteur essuie glace et injection d'eau",
        
        "Contrôler climatisation et soufflage évaporateur",
        
         "Contrôler visuel plaquette de frein",
        
        "Contrôler visuel frein arrière (fuite sur les tambours à l'arrière)",
        
        "Contrôler des niveaux, boite de vitesse, transfert et ponts",
        
        "Contrôler silentbloc suspension et jeu de direction",
        
        "Contrôler arbre de transmission et cardan",
        
        "Vidanger l'huile moteur",
        
        "Graissage véhicule"
        ],
  },
];

const pl = [
  {
    emplacement: "Dans la cabine",
    taches: [
      "Vérifier le fonctionnement des serrures",
      "Metter en route le moteur pour contrôler le(s) bruit(s) et/ou la fumé",
      "Vérifier le fonctionnement du frein de stationnement en essayant d'avancer doucement le frein serré)",
      "Inspecter les éléments de vision (pare-brise, vitres, rétroviseurs)",
      "Vérifier le fonctionnement des éléments de sécurité: avertisseur sonore, essuie-glaces (fonctionnement de l'intermittence), lave-glace et ceinture de sécuité",
      "Contrôler le fonctionnement de l'instrumentation de la planche de bord (sélecteurs, plafonniers…)",
      "Contrôler le fonctionnement de la climatisation",
    ],
  },
  {
    emplacement: "Sous la cabine",
    taches: [
      "Inspecter les fixations de cabine",
      "Graisser les crochets de verrouillage cabine",
      "Inspecter le filtre habitacle nettoyer si nécessaire. Selon l'emplacement",
      "Inspecter le filtre à air ; nettoyez si nécessaire. Selon l'emplacement",
      "Vérifier le fonctionnement de l'indicateur de colmatage du filtre à air ou le branchement du capteur Selon l'emplacement",
      "Inspecter l'état général et les fixations du faisceau , des connexions et du joint d'étanchéité du dispositif de préchauffage du circuit de refroidissement moteur",
      "Vérifier l'étanchéité du moteur (huile, liquide refroidissement, combustible, circuit échappement)",
      "Vérifier l'étanchéité du circuit d'admission d'air (position des durites, serrage des colliers…)",
      "Vérifier l'état et la tension de la ou des courroie(s)",
      "Vérifier l'état des organes de direction (boîtier, flexible, pompe, cardans)",
      "Vérifier le niveau d'huile de direction; complétez si nécessaire",
    ],
  },
  {
    emplacement: "Autour du véhicule",
    taches: [
      "Inspecter l'état général de la cabine (portes, retroviseurs, …)",
      "Inspecter l'état général du pare-chocs avant, de la calandre, des optiques et de la signalisation avant",
      "Inspecter l'état des balais d'essuie-glaces, de leurs tringles et du pare-brise",
      "Vérifier le niveau de lave-glace; complétez si nécessaire",
      "Vérifier le niveau du liquide de refroidissement; complétez si necessaire",
      "Vérifier le niveau du liquide d'embrayage; complétez si nécessaire",
      "Vérifier la proprété extérieure des faisceaux de radiateur(s)",
      "Contrôler les points de rotation avant cabine",
      "Contrôler les feux arrières et la signalisation arrière (feux de recul, feux stop, feux de gabarit…)",
      "Contrôler les disques de limitations de vitesse",
      "Inspecter le pare-chocs arrière et la barre anti-encastrement",
      "Inspecter les fixations des batteries d'accumulateurs, contrôlez les niveaux et vérifiez le fonctionnement de l'intérupteur général",
      "Vérifier l'étanchéité des reducteurs de roues avant et arrière (huile et/ou graisse)",
      "Vérifier l'état d'usure et la pression des pneumatiques (y compris la roue de secours)",
      "Remplacer la graisse sur la sellette ou le crochet et vérifiez son bon fonctionnement",
    ],
  },
  {
    emplacement: "Sous le véhicule",
    taches: [
      "Effectuer un graissage du châssis",
      "Contrôler les coussins d'air de la suspension pneumatique",
      "Vérifier l'étanchéité du ou des pont(s) et contrôlez la (les) mise(s) à l'air libre",
      "Inspecter l'état du système de freinage",
      "Inspecter l'usure des garnitures de frein et le réglage des leviers",
      "Inspecter l'état des ressorts, patins et barres stabilisatrices",
      "Inspecter l'état et la fixation des amortisseurs",
      "Inspecter l'état général et les supports de fixation des faisceaux ",
      "Contrôler le jeu des transmissions",
      "Contrôler (par purge) la préence d'eau ou d'huile dans les reservoirs d'air comprimé",
      "Vérifier l'étanchéité de la boîte de transfert ",
      "Vérifier l'étanchéité du ou des reservoir(s) de combustibles",
      "nspecter l'état général et les fixations de la ligne d'échappement",
      "Vérifier l'étanchéité du ralentisseur hydraulique ",
      "Vérifier l'étanchéité de la prise de mouvement (huile air)",
      "Vérifier l'étanchéité de la boîte de vitesses (huile, eau, air)",
      "Vérifier l'étanchéité du circuit hydraulique de débrayage ",
      "Vérifier l'usure de l'embrayage",
      "Vérifier l'étanchéité du moteur ",
      "Vérifier les organes de direction ",
      ,
    ],
  },

  {
    emplacement: "Autres",
    taches: [
      "Contrôler voyant tableau de bord et informations",
      "Nettoyage filtre à air (basse pression)",
      "Contrôler moteur essuie glace et injection d'eau",
      "Contrôler climatisation et soufflage évaporateur",
      "Contrôler des systèmes électronique (lecture des codes défaut)",
      "Contrôler visuel des garnitures de frein",
      "Contrôler et réglage si besoin de la course des poumons de frein",
      "Contrôler des niveaux, boite de vitesse, transfert et ponts",
      "Purger décanteur carburant",
      "Contrôler arbre de transmission et cardan",
      "Vidanger l'huile moteur",
      "Prélèver l'huile pour analyse",
      "Graissage véhicule",
    ],
  },
  {
    emplacement: "Sur véhicule",
    taches: ["Nettoyage et lavage après entretien "],
  },
 
];
