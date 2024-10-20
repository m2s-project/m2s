export const achat = {
  id_achat: "ORD20240924-001",
  reference_commande: "CMD-2024-00123",
  date_commande: "2024-09-20",
  fournisseur: {
    id_fournisseur: "F12345",
    nom: "ABC Fournitures Industrielles",
    adresse: "12 Rue des Industries, 75001 Paris",
    contact: {
      nom: "Jean Durand",
      email: "j.durand@abcfournitures.com",
      telephone: "+33 1 23 45 67 89",
    },
  },
  etat_commande: "Expédiée",
  date_reception_prevue: "2024-09-30",
  articles_commandes: [
    {
      id_article: "ART98765",
      nom_article: "Pompe à eau haute pression",
      quantite_commande: 2,
      quantite_recue: 0,
      prix_unitaire: 1500.0,
      montant_total: 3000.0,
    },
    {
      id_article: "ART12345",
      nom_article: "Joint d'étanchéité",
      quantite_commande: 10,
      quantite_recue: 0,
      prix_unitaire: 5.0,
      montant_total: 50.0,
    },
  ],
  donnees_financieres: {
    total_commande: 3050.0,
    taxes_applicables: 610.0,
    remises: 0.0,
    total_apres_taxes: 3660.0,
    conditions_paiement: "Paiement sous 30 jours",
  },
  details_livraison: {
    adresse_livraison: "Usine Centrale - 75002 Paris",
    mode_livraison: "Transporteur",
    date_livraison_effective: null,
    transporteur: "DHL",
    numero_suivi: "DHL1234567890",
  },
  personne_responsable: {
    nom: "Marie Martin",
    email: "m.martin@usinecentrale.com",
  },
  commentaires: "Urgent : besoin de la pompe avant la fin du mois.",
  documents_associes: {
    bon_commande: "http://example.com/docs/bon_commande_CMD-2024-00123.pdf",
    facture: null,
  },
  statut_reception: "En cours",
  historique_modifications: [
    {
      date_modification: "2024-09-21",
      details_modification: "Commande validée et expédiée",
    },
  ],
};
