import React from "react";
import "./article.css";
import { useSelector } from "react-redux";
import DaTable from "../../components/dataTable/DaTable";
import useArticles from "../../redux/hooks/useArticle";

const AlertList = () => {
  useArticles();
  const articles = useSelector((state) => state.articles.items).filter(
    (article) => {
      let actuel = parseInt(article.stock_actuel);
      let min = parseInt(article.stock_min);
      let max = parseInt(article.stock_max);

      if (actuel <= min || actuel >= max) {
        return article;
      }
      return null;
    }
  );;
  const notifications = articles.reduce(
    (prev, curr) => {
      let stock_actuel = parseInt(curr.stock_actuel);
      let stock_min = parseInt(curr.stock_min);
      let stock_max = parseInt(curr.stock_max);
  

      if (stock_actuel <= stock_min) {
        return { ...prev, min: [...prev.min, curr] };
      }
      if (stock_actuel >= stock_max) {
        return { ...prev, max: [...prev.max, curr] };
      }
 
    
    },
    {reappro:[],  min: [], max: [] }
  );

  console.log(notifications);


  const alias = [
 
    { designation: "désignations" },
    { marque: "marques" },
    { modele: "modèles" },
    { categorie: "catégories" },
    { stock_min: "mininal" },
    { stock_actuel: "stock" },
    { seuil_reappro: "seuil" },
    { stock_max: "maximal" },
    { statut: "statut" },
  ];

  return (
    <div className="article col-12">
      <DaTable items={articles} alias={alias} />
    </div>
  );
};
export default AlertList;
