import React, { useEffect, useState } from 'react';
import Book from './Book';

const BooksLib = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://localhost:1337/api/books?populate=*')
            .then(res => res.json())
            .then(data => {
                setBooks(data.data);
            })
    }, []);

    return (
        <div className="libContainer">
            <h1 className="libHeader">Our books</h1>
            <div className="libWrapper">
                {books.map(book => {
                    return <Book key={book.id} book={book} />
                })}
            </div>
        </div>
    )
}

export default BooksLib;