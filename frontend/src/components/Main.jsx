import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const Main = ({ children }) => {
    const navigate = useNavigate();

    const [chosen, setChosen] = useState(false)

    useEffect(() => {
        setChosen(false);
        console.log(chosen, 'ping')
    }, []);


    const handleClick = (page) => {
        navigate(page);
        setChosen(true);
    }

    return (
        <div className="home">
            <h1 className="intro" >Welcome to the library</h1>
            <div className="header">
                <div className="moviesBtn hover">
                    <Link 
                    onClick={() => handleClick('/movies')} 
                    className="scroller" 
                    to="library" 
                    smooth={true}>
                        <h1 className="titleChoice">Movies</h1>
                    </Link>
                </div>

                <div className="booksBtn hover">
                    <Link 
                    onClick={() => handleClick('/books')} 
                    className="scroller" 
                    to="library" 
                    smooth={true} >
                        <h1 className="titleChoice">Books</h1>
                    </Link>
                </div>
            </div>
            <main id="library" className="mainBox">
                {children}
            </main>
        </div>
    )
}

export default Main;