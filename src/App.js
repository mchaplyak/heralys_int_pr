import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Edit from "./components/Edit";
import EditClient from "./components/EditClient";
import EditContact from "./components/EditContact";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id={"main"}>
      <NavBar />
      <Routes>
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/editClient/:id" element={<EditClient />} />
        <Route path="/editContact/:id" element={<EditContact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
