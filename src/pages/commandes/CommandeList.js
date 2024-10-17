import React from "react";
import "./commande.css";
import Title from "../../components/titlebar/Title";
import Button from "../../ui/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Drop from "../../components/drop/Drop";
import Icon from "@mdi/react";
import { mdiDotsVertical } from "@mdi/js";
import Table from "../../components/table/Table";
import { useSelector } from "react-redux";
import  Actions  from "../utils/actions";
import useCommandes from "../../redux/hooks/useCommandes";

const CommandeList = () => {
  const commandes = useSelector((state) => state.commandes.commandes);
  const { pathname } = useLocation();
  const navigate = useNavigate();
useCommandes()

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`${pathname}/nouveau`,{ state:{type:'new'}});
  };

  const headerData = [
    "numero",
    "date",
    "type",
    "reference",
    "tiers",
    "crée par",
    "montant",
    "prevue",
    "statut",
    "a",
  ];
  const renderHeader = (item, index) => <th key={index}>{item}</th>;
 
  const renderBody = (item, index) => (
    <tr className="col-12" key={index} >
      <td>{item.numero}</td>
      <td>{item.date}</td>
      <td>{item.type}</td>
      <td>{item.reference}</td>
      <td>{item.tiers}</td>
      <td>{item.cree_par}</td>
      <td>{item.montant}</td>
      <td>{item.date_prevue}</td>
      <td>{item.statut}</td>
      <td style={{ width: 5 }}>
        <Drop contents={<Actions item={item} />}>
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
    </div>
  );
  return (
    <div className="commande">
      <Title contents={contents} />

      <div className="col-12">
        <Table
          headerData={headerData}
          renderHeader={renderHeader}
          bodyData={commandes}
          renderBody={renderBody}
        />
      </div>
    </div>
  );
};

export default CommandeList;
