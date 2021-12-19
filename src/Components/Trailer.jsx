import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Trailer = (props) => {
    const movie=props.movies.find(el=>el.id==props.match.params.id)
    console.log(props)
    


    return (
        <div>
            <h1>{movie.name}</h1>
            <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
            <h2>{movie.description}</h2>
            <Link to="/"><Button>Home</Button> </Link>
        </div>
    )
}

export default Trailer


