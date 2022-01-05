import React from 'react';

const Book = ({ book }) => {

    return (
        <div className="itemBox">
            <div>
                <h1 className="itemTitle">{book.attributes.title}</h1>
                <p className="itemInfo"><strong>Author:</strong> {book.attributes.author}</p>
                <p className="itemInfo"><strong>Pages:</strong> {book.attributes.pages}</p>
                <p className="itemInfo"><strong>Rating:</strong> {book.attributes.rating}</p>
            </div>
            <ul className="tagList">
                {book.attributes.tags.data.map((tag) => {
                    return <li className="tag" key={tag.id}>{tag.attributes.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Book;