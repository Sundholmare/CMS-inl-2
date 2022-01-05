import React, { useEffect, useState } from 'react';
import Movie from './Movie';

const MooviesLib = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:1337/api/movies?populate=*')
            .then(res => res.json())
            .then(data => {
                setMovies(data.data);
            })
    }, []);


    return (
        <div className="libContainer">
            <h1 className="libHeader">Our movies</h1>
            <div className="libWrapper">
                {movies.map(movie => {
                    return <Movie key={movie.id} movie={movie} />
                })}
            </div>
        </div>
    )
}

export default MooviesLib;