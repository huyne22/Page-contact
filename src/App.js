import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import Header from "./component/Header/headers";
const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
        <div className="app-contain">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
