export const checking = [
  { libelle: "Freins ", ok: false },
  { libelle: "Ceintures", ok: false },
  { libelle: "Compteur", ok: false },
  { libelle: "Eclairage", ok: false },
  { libelle: "Signalisation", ok: false },
  { libelle: "Extincteur", ok: false },
]

export const temoins = [
  {libelle:"Check", ok:false},
  {libelle:"Brake", ok:false},
  {libelle:"ABS", ok:false},
  {libelle:"T-BELT", ok:false},
  {libelle:"Battérie", ok:false},
  {libelle:"Huile",ok:false}, 
  {libelle:"Essence", ok:false},
  {libelle:"Surchauffe", ok:false},
  {libelle:"Ceinture",ok:false}, 
  {libelle:"Feux",ok:false},
]

const accessoires = [
  {libelle:"Cric", ok:false},
{libelle:"Manivelle", ok:false},
{libelle:"Roue-secoure", ok:false},
{libelle:"Clé",ok:false},
]
const carosserie = [
  {libelle:"AV1", ok:false},
{libelle:"AV2", ok:false},
{libelle:"AR1", ok:false},
{libelle:"AR2",ok:false},
  {libelle:"D1", ok:false},
{libelle:"D2", ok:false},
{libelle:"D3", ok:false},
{libelle:"D4",ok:false},
  {libelle:"G1", ok:false},
{libelle:"G2", ok:false},
{libelle:"G3", ok:false},
{libelle:"G4",ok:false},
]

export const reception = {
  date: "",
  ref: "",
  conducteur: "",
  tel: "",
  marque: "",
  type: "",
  vehicule: {},
  kilometrage: "",
  carburant: "",
  parc: "",
  motif: "",
  taf: [],
  etat: [],
  observations: "",
  checking,
  temoins,
  accessoires,
  carosserie
};

export const type = ["VL", "PL"];

export const motifs = ["réparation", "entretien"];
const anomalies = { libelle: "", date: "" }


const carrosserie = ["Enfoncé", "Cassé", "Rayure", "Fissuré"]



