import { mdiDelete, mdiEye, mdiFileEdit } from "@mdi/js";
import Icon from "@mdi/react";
import { useLocation, useNavigate } from "react-router-dom";

export const Action = (item) => {
  const navigate = useNavigate();
  const {pathname} = useLocation()
  return (
    <>
      <span
        className="item"
        onClick={(e) => navigate(`${pathname}/details`, { state:{ ...item, type: 'view'} })}
      >
        <Icon
          path={mdiEye}
          size={0.8}
          color={"var(--main-color)"}
          title={"Détails"}
        />
      </span>
      <span
        className="item"
        onClick={(e) => navigate(`${pathname}/edition`, { state: {...item , type: 'update'}})}
      >
        <Icon
          path={mdiFileEdit}
          size={0.8}
          color={"var(--main-color)"}
          title={"Modifier"}
        />
      </span>
      <span
        className="item"
        onClick={(e) => navigate(`${pathname}/suppression`, { state: {...item, type: 'delete'}})}
      >
        <Icon
          path={mdiDelete}
          size={0.8}
          color={"var(--main-color)"}
          title={"Supprimer"}
        />
      </span>
    </>
  );
};

export default Action