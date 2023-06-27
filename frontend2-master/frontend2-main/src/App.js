import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Jogos from "./Jogos";
import Historia from "./Historia.js";
import Carrinho from "./Carrinho";
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/Jogos" element={<Jogos/>} />
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/Historia" element={<Historia/>} />
          <Route exact path="/Carrinho" element={<Carrinho/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
