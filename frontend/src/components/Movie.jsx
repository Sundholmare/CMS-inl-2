import React from 'react';

const Book = ({ movie }) => {

    return (
        <div className="itemBox"> 
            <div>
                <h1 className="itemTitle">{movie.attributes.title}</h1>
                <p className="itemInfo"><strong>Release date:</strong> {movie.attributes.releaseDate}</p>
                <p className="itemInfo"><strong>Length:</strong> {movie.attributes.length}</p>
                <p className="itemInfo"><strong>Rating:</strong> {movie.attributes.rating}</p>
            </div>
            <ul className="tagList">
                {movie.attributes.tags.data.map((tag) => {
                    return <li className="tag" key={tag.id}>{tag.attributes.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Book;