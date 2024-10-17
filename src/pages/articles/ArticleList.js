import React from "react";
import "./article.css";
import { useSelector } from "react-redux";
import DaTable from "../../components/dataTable/DaTable";
import useArticles from "../../redux/hooks/useArticle";

const ArticleList = () => {
  useArticles();
  const articles = useSelector((state) => state.articles.items)

  const alias = [
    { code: "code" },
    { designation: "désignations" },
    { ref_fabricant: "reférences" },
    { marque: "marques" },
    { modele: "modèles" },
    { categorie: "catégories" },
    { stock_actuel: "stock" },
    { statut: "statut" },
  ];
  return (
    <div className="article col-12">
      <DaTable items={articles} alias={alias} />
    </div>
  );
};
export default ArticleList;
