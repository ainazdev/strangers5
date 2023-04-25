import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router"
import BookShop from "./components/BookShop";
import Genres from "./components/Genres";
import AboutUs from "./components/AboutUs";
import React from "react";
import BooksPage from "./components/BooksPage";
import Books from "./components/Books";
import DetailPage from "./components/DetailPage";
import DetailBooks from "./components/DetailBooks";
import NewBooks from "./components/HewBooks";




function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/BookShop"} element={<BookShop/>}/>
                <Route path={"/genres"} element={<Genres/>}/>
                <Route path={"/NewBooks"} element={<NewBooks/>} />
                <Route path={"/books"} element={<Books/>}/>
                <Route path={"/aboutUs"} element={<AboutUs/>}/>

                <Route path={"/BooksPage"} element={<BooksPage/> } />
                <Route path={"/DetailPage"} element={<DetailPage/>}/>
                <Route path={"/DetailBooks"} element={<DetailBooks/>}/>

            </Routes>
            <Footer/>
        </div>
    );
}

export default App;


// аутсорсинговые компании плюсы и минусыб топ5
// продуктовые
// стартапы
// ентерприсе