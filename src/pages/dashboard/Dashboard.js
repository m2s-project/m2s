import React from "react";
import { useLocation } from "react-router-dom";
import "./dashboard.css";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import ReduxBarChart from "./charts/ReduxBarChart";
const Dashboard = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="dashboard">
      <div className="col-12 title">
        <Breadcrumbs />
        <div>Autres..</div>{" "}
      </div>

      <div className="col-6"><ReduxBarChart />  </div>
 
    </div>
  );
};

export default Dashboard;
