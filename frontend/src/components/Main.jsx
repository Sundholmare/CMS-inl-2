import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = ({ children }) => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="header">
                <h1>Pick the library of your choice</h1>
                <div className="btnBox">
                    <button 
                    className="btn" 
                    onClick={() => navigate('/books')} 
                    >Books</button>

                    <button 
                    className="btn" 
                    onClick={() => navigate('/movies')} 
                    >Movies</button>
                </div>
            </div>
            <main className="mainBox">
                {children}
            </main>
        </div>
    )
}

export default Main;