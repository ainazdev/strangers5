import React, {useEffect, useState} from 'react';
import './index.scss'
import {Link, NavLink} from "react-router-dom";
import {HiOutlineArrowSmDown} from "react-icons/hi";
import axios from "axios";
import Checkbox from '../../img/Checkbox Off.png'
// import sublte from '../../img/subtleBook.png'
// import rules from '../../img/rulesBook.png'
// import markey from '../../img/markeyBook.png'
// import hevver from '../../img/hovverBook.png'
// import harry from '../../img/harryBook.png'
// import glob from '../../img/globBook.png'
// import starts from '../../img/endsBook.png'
// import heart from '../../img/heard.png'
// import jojo from '../../img/jojoBooks.png'

const BooksPage = () => {

    const [books, setBooks] = useState([])

    const getBooks = async () => {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=code+complete`)
            const {data} = await response
            setBooks(data.items)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBooks()
    }, [])
    return (
        <div className='container'>
            <div className='booksPage'>
                <div className="booksPage__first">
                    <h1>All Books</h1>
                    <p>Here you can find all the books you need</p>
                </div>
                <div className="booksPage__second">
                    <div className="">
                        <button>Sort By <span>Popular</span> <HiOutlineArrowSmDown/></button>
                    </div>
                </div>
                <div className="booksPage__third">
                    <div className="booksPage__third--main">
                        <h2>Filters</h2>
                        <a className=''>Clear filters</a>
                    </div>

                    <h3 className='booksPage__genres'>Genres</h3>

                </div>
                <div className="booksPage__fourth">
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Autographed Books</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Sci-Fi</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>For kids</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>For teenagers</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Finance</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Detective</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Romantic</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Psychology</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Self-Improvement</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Educational</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Literature</h3>
                    </div>
                    <div className="booksPage__fourth--blok">
                        <img src={Checkbox} alt=""/>
                        <h3>Religion</h3>
                    </div>

                </div>
                <div className="booksPage__fifth">
                    <div className="">
                        <img src={sublte} alt=""/>
                        <h1>THE SUBTLE ART OF <br/> NOT GIVING A F*CK</h1>
                        <p>by Mark Manson</p>
                    </div>
                    <div className="">
                        <img src={rules} alt=""/>
                        <h1>8 RULES OF LOVE</h1>
                        <p>by Jay Shetty</p>
                    </div>
                    <div className="">
                        <img src={glob} alt=""/>
                        <h1>THE CREATIVE ACT</h1>
                        <p>by Rick Rubin with Neil Strauss</p>
                    </div>
                    <div className="">
                        <NavLink to={"/DetailPage"}>
                            <img src={markey} alt=""/>
                        </NavLink>

                        <h1>THE BOY, THE MOLE, <br/> THE FOX AND THE <br/> HORSE</h1>
                        <p>by Charlie Mackesy</p>
                    </div>
                    <div className="">
                        <img src={harry} alt=""/>
                        <h1>HARRY POTTER</h1>
                        <p>by J.K. Rowling</p>
                    </div>
                    <div className="">
                        <img src={hevver} alt=""/>
                        <h1>IT ENDS WITH US</h1>
                        <p>by Colleen Hoover</p>
                    </div>
                    <div className="">
                        <img src={starts} alt=""/>
                        <h1>IT STARTS WITH US</h1>
                        <p>by Colleen Hoover</p>
                    </div>
                    <div className="">
                        <img src={heart} alt=""/>
                        <h1>HEART BONES</h1>
                        <p>by Colleen Hoover</p>
                    </div>
                    <div className="">
                        <img src={jojo} alt=""/>
                        <h1>SOMEONE ELSE'S <br/> SHOES</h1>
                        <p>by Jojo Moyes</p>
                    </div>
                    {/*<div className="">*/}

                    {books.map((item) => (
                        <div key={item.id}>
                            <img src={item.volumeInfo.imageLinks.thumbnail} alt=""/>
                            <h2>{item.volumeInfo.title}</h2>
                            <p>{item.volumeInfo.authors}</p>
                        </div>
                    ))}

                    {/*    <img src={sublte} alt=""/>*/}
                    {/*    <h1>THE SUBTLE ART OF <br/> NOT GIVING A F*CK</h1>*/}
                    {/*    <p>by Mark Manson</p>*/}
                    {/*</div>*/}
                    {/*<div className="">*/}
                    {/*    <img src={rules} alt=""/>*/}
                    {/*    <h1>8 RULES OF LOVE</h1>*/}
                    {/*    <p>by Jay Shetty</p>*/}
                    {/*</div>*/}
                    {/*<div className="">*/}
                    {/*    <img src={glob} alt=""/>*/}
                    {/*    <h1>THE CREATIVE ACT</h1>*/}
                    {/*    <p>by Rick Rubin with Neil Strauss</p>*/}
                    {/*</div>*/}
                    {/*<div className="">*/}
                    {/*    <NavLink to={"/DetailPage"}>*/}
                    {/*        <img src={markey} alt=""/>*/}
                    {/*    </NavLink>*/}

                    {/*    <h1>THE BOY, THE MOLE, <br/> THE FOX AND THE <br/> HORSE</h1>*/}
                    {/*    <p>by Charlie Mackesy</p>*/}
                    {/*</div>*/}
                    {/*<div className="">*/}
                    {/*    <img src={harry} alt=""/>*/}
                    {/*    <h1>HARRY POTTER</h1>*/}
                    {/*    <p>by J.K. Rowling</p>*/}
                    {/*</div>*/}
                    {/*<div className="">*/}
                    {/*    <img src={hevver} alt=""/>*/}
                    {/*    <h1>IT ENDS WITH US</h1>*/}
                    {/*    <p>by Colleen Hoover</p>*/}
                    {/*</div>*/}
                    {/*<div className="">*/}
                    {/*    <img src={starts} alt=""/>*/}
                    {/*    <h1>IT STARTS WITH US</h1>*/}
                    {/*    <p>by Colleen Hoover</p>*/}
                    {/*</div>*/}
                    {/*<div className="">*/}
                    {/*    <img src={heart} alt=""/>*/}
                    {/*    <h1>HEART BONES</h1>*/}
                    {/*    <p>by Colleen Hoover</p>*/}
                    {/*</div>*/}
                    {/*<div className="">*/}
                    {/*    <img src={jojo} alt=""/>*/}
                    {/*    <h1>SOMEONE ELSE'S <br/> SHOES</h1>*/}
                    {/*    <p>by Jojo Moyes</p>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};


export default BooksPage;