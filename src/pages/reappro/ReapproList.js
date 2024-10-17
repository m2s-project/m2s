import React from "react";
import "./reappro.css";
import { useSelector } from "react-redux";
import DaTable from "../../components/dataTable/DaTable";
import useArticles from "../../redux/hooks/useArticle";

const ReapproList = () => {
  useArticles();
  const articles = useSelector((state) => state.articles.items).filter(
    (article) => {
      let actuel = parseInt(article.stock_actuel);
      let seuil = parseInt(article.seuil_reappro);
     

      if (actuel <= seuil ) {
        return article;
      }
      return null;
    }
  );;


 
  const alias = [
 
    { designation: "désignations" },
    { marque: "marques" },
    { modele: "modèles" },
    { categorie: "catégories" },
    { fournisseur: "fournisseur" },
    { stock_min: "mininal" },
    { seuil_reappro: "seuil" },
    { stock_actuel: "stock" },

    { statut: "statut" },
  ];

  return (
    <div className="article col-12">
      <DaTable items={articles} alias={alias} />
    </div>
  );
};
export default ReapproList;
