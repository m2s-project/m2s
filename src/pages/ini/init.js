export const client = {
    uuid:"",
    nif:"",
    rccm:"",
    nom:"",
    tel:"",
    bp:"",
    email:"",
    adresse:"",
    type:""
}


export const dossier = {
    uuid:"",
    intitule: "",
    description: "",
    client: {},
    lots: []

}
export const lot = {
    uuid:"",
    reference: "",
    localite: "",
    devis: {},
    bordereau: []
}
export const devis = {
    uuid:"",
    articles: [],
    total: "",
    type: ""
}
export const type = {
    numero: "",
    libelle: ""

}
// generer a partir du devis
export const bordereau = {
    articles: []
}
export const article = {
    uuid:"",
    numero: "",
    designation: "",
    unite: "",
    prix: "",
    quantite: "",
    taux: "",
    famille: {}

}
export const famille = {
    reference: "",
    libelle: ""
}
export const saha = {
    nif:"",
    rccm:"",
    nom:"",
    tel:"",
    bp:"",
    email:"",
    adresse:"",
    banque:{}
}

export const experience = {
    debut:"",
    fin:"",
    marche:{},
    role:"Entrepreneur Principal",
    soumissionnaire : "SAHA - SARL"
}
export const marche = {
    reference:"",
    description:"",
    montant:"",
    maitre:"",
    adresse : ""
}




