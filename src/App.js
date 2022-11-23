import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Edit from "./components/Edit";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id={"main"}>
      <NavBar />
      <Routes>
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
