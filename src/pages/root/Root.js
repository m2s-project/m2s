import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import "./root.css";
import SideBar from "../../components/sidebar/SideBar";
import TitleBar from "../../components/titleBar/TitleBar";
import FooterBar from "../../components/footerBar/FooterBar";
import Header from "../../components/header/Header";
import Panel from "../panel/Panel";
const Root = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      {login ? (
        <div>
          <TitleBar />
          {/* <Login setLogin={setLogin} login={login} /> */}
          <Panel />
        </div>
      ) : (
        <div>
          <TitleBar />
          <Header />

          <div className="root_content">
            <SideBar />

            <div className="col-12 outlet margin_side_bar">
              <Outlet />
            </div>
          </div>

          <FooterBar />
        </div>
      )}
    </>
  );
};

export default Root;
