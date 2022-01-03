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

    console.log(movies)


    return (
        <div className="libContainer">
            {movies.map(movie => {
                return <Movie key={movie.id} movie={movie} />
            })}
        </div>
    )
}

export default MooviesLib;