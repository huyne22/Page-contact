import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import Header from "./component/Header/headers";
const App = () => {
  return (
    <div className="app-container">
      <Header />

      <div>
        test Link
        <button>
          <Link to={`/user`}>go to user page</Link>
        </button>
        <button>
          <Link to={`/admin`}>go to admin page</Link>
        </button>
      </div>
    </div>
  );
};

export default App;
