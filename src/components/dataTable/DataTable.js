// components/DataTable.js

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addData, updateData, deleteData } from "../../redux/dataTableSlice";
import './dataTable.css'; // Importation des styles
import { v4 as uuidv4 } from 'uuid'; // Pour générer des IDs uniques

const DataTable = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.dataTable);

  // État local pour le tri, la pagination, et la recherche
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // État pour les colonnes visibles
  const [visibleColumns, setVisibleColumns] = useState({
    id: true,
    nom: true,
    email: true,
    date: true
  });

  // État pour le formulaire d'ajout/modification
  const [form, setForm] = useState({ id: null, nom: "", email: "", date: "" });

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Fonction de tri
  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
  };

  // Tri des données en fonction du champ sélectionné
  const sortedData = [...data].sort((a, b) => {
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
  const exportToCSV = () => {
    const csvRows = [];

    // Titres des colonnes
    const headers = [];
    if (visibleColumns.id) headers.push('ID');
    if (visibleColumns.nom) headers.push('Nom');
    if (visibleColumns.email) headers.push('Email');
    if (visibleColumns.date) headers.push('Date');
    csvRows.push(headers.join(','));

    // Données du tableau
    filteredData.forEach(row => {
      const values = [];
      if (visibleColumns.id) values.push(row.id);
      if (visibleColumns.nom) values.push(row.nom);
      if (visibleColumns.email) values.push(row.email);
      if (visibleColumns.date) values.push(row.date);
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

  // Fonction pour gérer la visibilité des colonnes
  const handleColumnVisibility = (column) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column]
    }));
  };

  // Gestion des formulaires d'ajout et de modification
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      // Mise à jour d'une commande existante
      dispatch(updateData({ id: form.id, updatedData: { nom: form.nom, email: form.email, date: form.date } }));
    } else {
      // Ajout d'une nouvelle commande
      const newCommand = { nom: form.nom, email: form.email, date: form.date };
      dispatch(addData(newCommand));
    }
    setForm({ id: null, nom: "", email: "", date: "" });
  };

  const handleEdit = (row) => {
    setForm({ id: row.id, nom: row.nom, email: row.email, date: row.date });
  };

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

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

  return (
    <div className="data-table-container">
      <h2>Tableau de Données</h2>

      {/* Formulaire d'ajout/modification */}
      <form onSubmit={handleSubmit} className="data-form">
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={form.nom}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={form.date}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{form.id ? "Mettre à jour" : "Ajouter"} Commande</button>
        {form.id && <button type="button" onClick={() => setForm({ id: null, nom: "", email: "", date: "" })}>Annuler</button>}
      </form>

      {/* Bouton d'exportation CSV */}
      <button onClick={exportToCSV} className="export-button">Exporter en CSV</button>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Recherche..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Cases à cocher pour les colonnes */}
      <div className="column-visibility">
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
        <p className="error">Erreur : {error}</p>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              {visibleColumns.id && <th onClick={() => handleSort("id")}>ID {sortField === "id" ? (sortOrder === "asc" ? "↑" : "↓") : ""}</th>}
              {visibleColumns.nom && <th onClick={() => handleSort("nom")}>Nom {sortField === "nom" ? (sortOrder === "asc" ? "↑" : "↓") : ""}</th>}
              {visibleColumns.email && <th onClick={() => handleSort("email")}>Email {sortField === "email" ? (sortOrder === "asc" ? "↑" : "↓") : ""}</th>}
              {visibleColumns.date && <th onClick={() => handleSort("date")}>Date {sortField === "date" ? (sortOrder === "asc" ? "↑" : "↓") : ""}</th>}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row) => (
              <tr key={row.id}>
                {visibleColumns.id && <td>{row.id}</td>}
                {visibleColumns.nom && <td>{row.nom}</td>}
                {visibleColumns.email && <td>{row.email}</td>}
                {visibleColumns.date && <td>{row.date}</td>}
                <td>
                  <button onClick={() => handleEdit(row)}>Modifier</button>
                  <button onClick={() => handleDelete(row.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination avec numéros de page */}
      <div className="pagination">
        <button onClick={() => handlePageChange("prev")} disabled={currentPage === 1}>
          Précédent
        </button>
        {renderPaginationButtons()}
        <button onClick={() => handlePageChange("next")} disabled={currentPage === totalPages}>
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

export default DataTable;
