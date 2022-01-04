import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = ({ children }) => {
    const navigate = useNavigate();

    const [chosen, setChosen] = useState(false)

    useEffect(() => {
        setChosen(false);
        console.log('hello')
    }, [])

    const handleClick = (page) => {
        navigate(page);
        setChosen(!chosen);
    }

    return (
        <div className="home">
            {!chosen && <div className="header">
                <div onClick={() => handleClick('/movies')} className="moviesBtn hover">
                    <h1 className="titleChoice">Movies</h1>
                </div>
                <div onClick={() => handleClick('/books')} className="booksBtn hover">
                    <h1 className="titleChoice">Books</h1>
                </div>
            </div>}
            <main className="mainBox">
                {children}
            </main>
        </div>
    )
}

export default Main;