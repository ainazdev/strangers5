import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {Route, Routes} from "react-router"


function App() {
  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path={"/bookShop"} element={Home}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
