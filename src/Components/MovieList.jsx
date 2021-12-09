import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies,handleEdit}) => {
    return (
        <div className="listMovies" >
            {movies.map((el,i)=><MovieCard handleEdit={handleEdit} key={i} movie={el} />)}
        </div>
    )
}

export default MovieList
