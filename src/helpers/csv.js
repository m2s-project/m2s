export const exportCSV = (alias, items) => {
    const csvRows = [];

    // Titres des colonnes
    const headers = [];
    alias.map(
      (col) =>
        
        headers.push(Object.keys(col)[0])
    );

    csvRows.push(headers.join(","));

    // Données du tableau
    items.forEach((row) => {
      const values = [];
      alias.map(
        (col) =>
         
          values.push(row[Object.keys(col)[0]])
      );

      csvRows.push(values.join(","));
    });

    // Générer le fichier CSV
    const csvContent = `data:text/csv;charset=utf-8,${csvRows.join("\n")}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);

    // Télécharger le fichier CSV
    link.click();
  };
