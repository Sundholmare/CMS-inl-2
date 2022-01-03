import React from 'react';

const Book = ({ movie }) => {

    return (
        <div className="itemBox"> 
            <h1>{movie.attributes.title}</h1>
        </div>
    )
}

export default Book;