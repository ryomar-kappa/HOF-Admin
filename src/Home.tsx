import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>ようこそHOFAdminプロジェクトへ!</p>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/addBook"
          >
            始める
          </Button>
        </header>
      </div>
    </>
  );
};

export default Home;
