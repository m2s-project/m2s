export const employe = {
  // Informations Générales
  
  nom: "",
  prenom: "",
  sexe: "",
  naissance: "",
  tel: "",
  email: "",
  bp: "",
  ville: "",
  pays: "",
  cnss: "", //optionnel
  statut: "inactif", //Actif, en congé, en mission, etc.
  //Informations Professionnelles
  matricule: "",
  poste: "", //Technicien, Responsable Maintenance, Ingénieur, etc
  service: "", //Maintenance, Logistique, RH).
  embauche: "", //Date à laquelle l'employé a rejoint l'organisation
  contrat: "", //CDI, CDD, Contrat freelance, etc
  horaires: {
    jours: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"],
    heures: "08:00 - 17:00",
  }, //Plage horaire et jours de travail habituels de l'employé
  responsabilites: "", //Liste des tâches principales et responsabilités associées à l'employé
  //Informations sur les Rôles et Accès
  role: "", //administrateur, technicien, superviseur, etc.
  acces: "", //lecture, écriture, modification, suppression
  modules: [], //Gestion des stocks, Gestion des ordres de travail, Tableau de bord
  connexions: [], //historiques
  actions: [], //historiques
  authentification: "", //méthode d'authentification utilisée (mot de passe, 2FA, SSO, etc.).
  //Informations sur les Compétences
  certifications: [], //liste des certifications obtenues par l'employé
  formations: [], //formations suivies par l'employé (internes et externes).
  competences: [], //liste des compétences techniques et spécifiques (mécanique, hydraulique, automatisme, etc.).
  langues: [], //maîtrisées par l'utilisateur.
  permis: [], // ou autorisations spécifiques (ex : permis de conduire d'engins).
  experience: "", //nombre d'années d'expérience dans le domaine spécifique
  //Informations sur la Gestion des Interventions
  ordres: [], //•	Ordres de Travail Attribués et Liste des interventions ou tâches en cours affectées à cet utilisateur
  interventions: [], //historiques
  performance: "", // nombre pour évaluation des performances
  tmi: "", //Temps moyen que l'employé met pour réaliser une intervention
  reussite: "", //Pourcentage de succès des interventions sans incidents ou retours.
  disponibilite: "", //si l'employé est actuellement libre pour une intervention ou en mission

  //Informations RH et Paie

  salaire: "",
  heures_sup: "", //suivi des heures supplémentaires réalisées
  conges: {
    pris: 0,
    restants: 30,
  }, //historique des congés pris et jours de congé restant.
  absences: [], //liste des absences (justifiées ou non) avec les raisons associées.
  evaluations: [], //evaluations de performance réalisées par les responsables ou superviseurs.
  primes: [], //primes obtenues pour les performances exceptionnelles ou projets réalisés.
  // Informations sur la Sécurité
  formations_secu: [], //Formation spécifique suivie par l'employé concernant les normes de sécurité.
  epi: [], //Équipement de protection que l'employé doit utiliser dans son travail (ex : casque, gants, lunettes).
  accidents: [], //Historique des accidents de travail, avec détails sur les incidents.
  procedures: [], //Procédures spécifiques que l'utilisateur doit suivre dans ses tâches
  // Notes et Commentaires

  remarques: "", // Remarques générales sur l'employé, utiles pour la gestion des ressources humaines.
  feedback: "", // Commentaires de l'employé sur son travail, l'environnement de travail ou les outils utilisés.
  suggestions: "", //Suggestions faites par l'employé pour améliorer les processus ou la maintenance.
};
