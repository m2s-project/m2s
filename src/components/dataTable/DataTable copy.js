// components/DataTable.js

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../redux/dataTableSlice";
import './dataTable.css'; // Importation des styles

const DataTable = ({db}) => {
  const dispatch = useDispatch();
//   const { data, loading, error } = useSelector((state) => state.dataTable);
let loading = false
let error = false
let data = db
// const { data, loading, error } = db
  // État local pour le tri, la pagination, et la recherche
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 5;

  const [rowsPerPage, setRowsPerPage] = useState(5)

  // Charger les données lors du montage du composant
//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);

  // Fonction de tri
  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
  };

  // Tri des données en fonction du champ sélectionné
  const sortedData = data.sort((a, b) => {
    if (!sortField) return 0;
    const aField = a[sortField] ? a[sortField].toString().toLowerCase() : "";
    const bField = b[sortField] ? b[sortField].toString().toLowerCase() : "";
    if (sortOrder === "asc") return aField > bField ? 1 : -1;
    return aField < bField ? 1 : -1;
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

  // Gérer le changement de page
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fonction d'exportation CSV
const exportToCSV = () => {
    const csvRows = [];
    // Titres des colonnes
    const headers = ['ID', 'Nom', 'Email', 'Date'];
    csvRows.push(headers.join(','));
  
    // Données du tableau
    filteredData.forEach(row => {
      const values = [row.id, row.nom, row.email, row.date];
      csvRows.push(values.join(','));
    });
  
    // Générer le fichier CSV
    const csvContent = `data:text/csv;charset=utf-8,${csvRows.join('\n')}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
  
    // Télécharger le fichier CSV
    link.click();
  };
  
//   Sélection des colonnes
// Ajoutez une fonctionnalité pour permettre à l'utilisateur de masquer ou d'afficher des colonnes
const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    nom: true,
    email: true,
    date: true
  });
  
  // Fonction pour gérer la visibilité des colonnes
  const handleColumnVisibility = (column) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column]
    }));
  };
  

  return (
    <div className="data-table-container">
      <h2>Tableau de Données</h2>
      <button onClick={exportToCSV}>Exporter en CSV</button>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Recherche..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      {/* cases à cocher pour que l'utilisateur puisse choisir les colonnes */}
<div>
  <label>
    <input
      type="checkbox"
      checked={visibleColumns.id}
      onChange={() => handleColumnVisibility("id")}
    />
    ID
  </label>
  <label>
    <input
      type="checkbox"
      checked={visibleColumns.nom}
      onChange={() => handleColumnVisibility("nom")}
    />
    Nom
  </label>
  <label>
    <input
      type="checkbox"
      checked={visibleColumns.email}
      onChange={() => handleColumnVisibility("email")}
    />
    Email
  </label>
  <label>
    <input
      type="checkbox"
      checked={visibleColumns.date}
      onChange={() => handleColumnVisibility("date")}
    />
    Date
  </label>
</div>

      {/* Affichage du tableau */}
      {loading ? (
        <p>Chargement...</p>
      ) : error ? (
        <p>Erreur : {error}</p>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
            {visibleColumns.id && <th onClick={() => handleSort("id")}>ID</th>}
    {visibleColumns.nom && <th onClick={() => handleSort("nom")}>Nom</th>}
    {visibleColumns.email && <th onClick={() => handleSort("email")}>Email</th>}
    {visibleColumns.date && <th onClick={() => handleSort("date")}>Date</th>}
              {/* <th onClick={() => handleSort("nom")}>Nom</th>
              <th onClick={() => handleSort("email")}>Email</th>
              <th onClick={() => handleSort("telephone")}>Téléphone</th> */}
              {/* Ajoutez plus de colonnes ici selon les besoins */}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row) => (
                <tr key={row.id}>
                {visibleColumns.id && <td>{row.id}</td>}
                {visibleColumns.nom && <td>{row.nom}</td>}
                {visibleColumns.email && <td>{row.email}</td>}
                {visibleColumns.date && <td>{row.date}</td>}
              </tr>
            //   <tr key={row.id}>
            //     <td>{row.nom}</td>
            //     <td>{row.email}</td>
            //     <td>{row.telephone}</td>
            //   </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => handlePageChange("prev")} disabled={currentPage === 1}>
          Précédent
        </button>
        <span>
          Page {currentPage} sur {totalPages}
        </span>
        <button onClick={() => handlePageChange("next")} disabled={currentPage === totalPages}>
          Suivant
        </button>
      </div>

      <select onChange={(e) => setRowsPerPage(Number(e.target.value))}>
  <option value="5">5 lignes</option>
  <option value="10">10 lignes</option>
  <option value="20">20 lignes</option>
</select>

    </div>
  );
};

export default DataTable;
