import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from "./components/Home";
import {Route, Routes} from "react-router"
import BookShop from "./components/BookShop";
import Genres from "./components/Genres";
import Books from "./components/Books";
import AboutUs from "./components/AboutUs";
import React from "react";
import NewBooks from "./components/HewBooks";
import BooksPage from "./components/BooksPage";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                {/*<Route path={"/home"} element={<Home/>}/>*/}
                <Route path={"/bookShop"} element={<BookShop/>}/>
                <Route path={"/genres"} element={<Genres/>}/>
                <Route path={"/books"} element={<Books/>}/>
                <Route path={"/aboutUs"} element={<AboutUs/>}/>
                <Route path={"/BooksPage"} element={<BooksPage/> } />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
