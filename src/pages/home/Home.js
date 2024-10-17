import { Module, modulesList } from "../../views/module";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-list">
        {modulesList.map((module, index) => (
          <Module key={index} module={module} />
        ))}
      </div>
    </div>
  );
};

export default Home;
