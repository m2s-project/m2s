import moment from "moment/moment";

const pointage = {
    date: moment().format("yyyy-MM-DD"),
    duree: "",
    article: "-",
    quantite: "",
   
  };

export const ot = {
  numero: "",
  date: moment().format("yyyy-MM-DD"),
  reception: "",
  atelier: "",
  equipe:[],
  responsable: "",
  travaux:[],
  pointage,
  fin:""
};


