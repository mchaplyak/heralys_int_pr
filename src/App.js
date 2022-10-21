import  'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.scss"


function App() {
  return (
    <div id={"main"}>
        <NavBar/>
        <Footer/>
    </div>
  );
}

export default App;
