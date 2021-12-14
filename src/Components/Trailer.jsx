import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Trailer = ({match,movies}) => {
    const movie=movies.find(el=>el.id==match.params.id)
    console.log(movies)
    console.log(match)


    return (
        <div>
            <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
            <h1>{movie.description}</h1>
            <Link to="/"><Button>Home</Button> </Link>
        </div>
    )
}

export default Trailer


