import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
    return (
        <div className="listMovies" >
            {movies.map((el,i)=><MovieCard key={i} movie={el} />)}
        </div>
    )
}

export default MovieList
