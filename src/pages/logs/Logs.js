import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLog } from "../../redux/logSlice";
import DataTable from "../../components/dataTable/DataTable";
import "./logs.css"
import Title from "../../components/titlebar/Title";
const Logs = () => {
  const dispatch = useDispatch();
  const { logs, loading, error } = useSelector((state) => state.logs);
  const user = useSelector((state) => state.users.user); // Assurez-vous que l'utilisateur est connecté

  // Fonction pour ajouter un nouveau log
  const handleAddLog = () => {
    if (!user) {
      dispatch(addLog({
        uid: "user.uid",
        actionType: "USER_ACTION",
        message: "L'utilisateur a effectué une action importante.",
      }));
    }
  };

  return (
    <div className="logs col-12" >
      <Title />
      <h2>Logs des Actions Utilisateur</h2>
      {loading && <p>Chargement des logs...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      {/* Bouton pour ajouter un log */}
      <button onClick={handleAddLog}>Ajouter un log</button>

      {/* Affichage des logs */}
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            <p>
              <strong>Action :</strong> {log.actionType} <br />
              <strong>Message :</strong> {log.message} <br />
              <strong>Heure :</strong> {log.timestamp.toDate().toLocaleString()}
            </p>
          </li>
        ))}
      </ul>

      <DataTable  />
    </div>
  );
};

const db = [
    {
      "id": "1",
      "nom": "John Doe",
      "email": "john.doe@example.com",
      "date": "2024-10-10"
    },
    {
      "id": "2",
      "nom": "Jane Smith",
      "email": "jane.smith@example.com",
      "date": "2024-10-09"
    },
    {
      "id": "3",
      "nom": "John Doe",
      "email": "john.doe@example.com",
      "date": "2024-10-10"
    },
    {
      "id": "4",
      "nom": "Jane Smith",
      "email": "jane.smith@example.com",
      "date": "2024-10-09"
    },
    {
      "id": "5",
      "nom": "John Doe",
      "email": "john.doe@example.com",
      "date": "2024-10-10"
    },
    {
      "id": "6",
      "nom": "Jane Smith",
      "email": "jane.smith@example.com",
      "date": "2024-10-09"
    },
    {
      "id": "7",
      "nom": "John Doe",
      "email": "john.doe@example.com",
      "date": "2024-10-10"
    },
    {
      "id": "8",
      "nom": "Jane Smith",
      "email": "jane.smith@example.com",
      "date": "2024-10-09"
    },
    {
      "id": "9",
      "nom": "John Doe",
      "email": "john.doe@example.com",
      "date": "2024-10-10"
    },
    {
      "id": "10",
      "nom": "Jane Smith",
      "email": "jane.smith@example.com",
      "date": "2024-10-09"
    },
    {
      "id": "11",
      "nom": "Jane Smith",
      "email": "jane.smith@example.com",
      "date": "2024-10-09"
    },
  ]
  
export default Logs;
