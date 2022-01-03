import React from 'react';

const Book = ({ book }) => {

    console.log(book)
    return (
        <div className="itemBox"> 
            <h1>{book.attributes.title}</h1>
        </div>
    )
}

export default Book;