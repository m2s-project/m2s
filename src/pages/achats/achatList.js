import React from "react";
import "./achat.css";
import Title from "../../components/titlebar/Title";
import Button from "../../ui/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Drop from "../../components/drop/Drop";
import Icon from "@mdi/react";
import { mdiDelete, mdiDotsVertical, mdiEye, mdiFileEdit } from "@mdi/js";
import Table from "../../components/table/Table";
import { useSelector } from "react-redux";

const AchatList = () => {
  const achats = useSelector((state) => state.achats.items);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`${pathname}/nouveau`);
  };

  const headerData = [
    "désignations",
    "catégories",
    "marques",
    "modèles",
    "achats",
    "Mis en service",
    "dernière opi",
    "prochaine opi",
    "état",
    "a",
  ];
  const renderHeader = (item, index) => <th key={index}>{item}</th>;
 
  const actions = (
    <>
      <span className="item">
        <Icon
          path={mdiEye}
          size={0.8}
          color={"var(--main-color)"}
          title={"Détails"}
        />
      </span>
      <span className="item">
        <Icon
          path={mdiFileEdit}
          size={0.8}
          color={"var(--main-color)"}
          title={"Modifier"}
        />
      </span>
      <span className="item">
        <Icon
          path={mdiDelete}
          size={0.8}
          color={"var(--main-color)"}
          title={"Supprimer"}
        />
      </span>
    </>
  );
  const renderBody = (item, index) => (
    <tr className="col-12" key={index} onMouseEnter={() => console.log(item)}>
      <td>{item.designation}</td>
      <td>{item.categorie}</td>
      <td>{item.marque}</td>
      <td>{item.modele}</td>
      <td>{item.date}</td>
      <td>{item.debut}</td>
      <td>{item.derniere}</td>
      <td>{item.prochaine}</td>
      <td>{item.etat}</td>
      <td style={{ width: 5 }}>
        <Drop contents={actions}>
     
          <Icon
            path={mdiDotsVertical}
            size={0.8}
            color={"var(--main-color)"}
            title={"Actions"}
          />
        </Drop>
      </td>
    </tr>
  );

  const contents = (
    <div style={{}}>
      <Button label={"Nouveau"} onClick={handleClick} />
      {/* <Button label={"Importation"}  onClick={handleClick} /> */}
      {/* <Button label={"Exportation"} onClick={handleClick} /> */}
    </div>
  );
  return (
    <div className="achat">
      <Title contents={contents} />

      <div className="col-12">
        <Table
          headerData={headerData}
          renderHeader={renderHeader}
          bodyData={achats}
          renderBody={renderBody}
        />
      </div>
    </div>
  );
};

export default AchatList;
