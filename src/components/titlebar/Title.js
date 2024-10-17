import React from "react";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Icon from "@mdi/react";
import { mdiDotsHorizontal } from "@mdi/js";

import "./title.css";
import Drop from "../drop/Drop";

function Title({ contents }) {
  return (
    <div className="col-12 title">
      <Breadcrumbs />
      {contents && (
        <span className="title-icon">
          <Drop top={"calc(100% + 5px)"} contents={contents}>
            <Icon
              path={mdiDotsHorizontal}
              color={"var(--main-color)"}
              size={0.7}
            />
          </Drop>
        </span>
      )}
    </div>
  );
}

export default Title;
