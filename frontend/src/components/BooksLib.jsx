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

    console.log(books)

    return (
        <div className="libContainer">
            {books.map(book => {
                return <Book key={book.id} book={book} />
            })}
        </div>
    )
}

export default BooksLib;