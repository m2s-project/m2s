import React, { useEffect, useMemo, useState } from "react";

import "./dataTable.css"; // Importation des styles
import { useLocation, useNavigate } from "react-router-dom";
import Drop from "../drop/Drop";
import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";

import Action from "../acttion/Action";
import { exportCSV } from "../../helpers";
import Title from "../titlebar/Title";
import Button from "../../ui/button/Button";

const DaTable = ({ alias, items }) => {
  // handleSearch global
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  useEffect(() => {
    searchParams.get("query") &&
      setSearchTerm(searchParams.get("query").toString());
    !searchParams.get("query") && setSearchTerm("");
  }, [searchParams]);

  // État local pour le tri, la pagination, et la recherche
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Fonction de tri
  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
  };

  // Tri des données en fonction du champ sélectionné
  const sortedData = [...items].sort((a, b) => {
    if (!sortField) return 0;
    const aField = a[sortField] ? a[sortField].toString().toLowerCase() : "";
    const bField = b[sortField] ? b[sortField].toString().toLowerCase() : "";
    if (aField < bField) return sortOrder === "asc" ? -1 : 1;
    if (aField > bField) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  // Filtrage des données selon le terme de recherche
  const filteredData = sortedData.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination des données
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Gestion du changement de page
  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fonction d'exportation CSV

  // Fonction pour changer le nombre de lignes par page
  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1); // Réinitialiser à la première page
  };

  // Fonction pour générer les boutons de pagination
  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`${pathname}/nouveau`, { state: { type: "new" } });
  };
  const contents = (
    <div style={{}}>
      <Button label={"Nouveau"} onClick={handleClick} />
      <Button
        label={"Exporter"}
        onClick={() => exportCSV(alias, filteredData)}
      />
    </div>
  );
  return (
    <div className="data-table-container">
      <Title contents={contents} />
      {/* Barre de recherche */}
      <input
        type="hidden"
        placeholder="Recherche..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Affichage du tableau */}

      <table className="data-table">
        <thead>
          <tr>
            {alias.map((col, index) => (
              <th
                key={index}
                onClick={() => handleSort(`${Object.keys(col)[0]}`)}
              >
                {Object.values(col)[0]}
                {sortField === `${Object.keys(col)[0]}`
                  ? sortOrder === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
            ))}

            <th style={{ width: 5 }}>
              <Icon path={mdiDotsVertical} size={0.8} title={"Actions"} />
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              {alias.map((col, index) => (
                <td key={index}>{row[Object.keys(col)[0]]}</td>
              ))}

              <td>
                <Drop contents={<Action item={row} />}>
                  <Icon path={mdiDotsVertical} size={0.8} title={"Actions"} />
                </Drop>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination avec numéros de page */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        {renderPaginationButtons()}
        <button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>

      {/* Sélecteur de lignes par page */}
      <div className="rows-per-page">
        <label>
          Lignes par page :
          <select value={rowsPerPage} onChange={handleRowsPerPageChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default DaTable;
