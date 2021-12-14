import React from 'react'

const Trailer = ({match,movies}) => {
    const movie=movies.find(el=>el.id==match.params.id)
    console.log(movies)
    console.log(match)


    return (
        <div>
            <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h1>{movie.description}</h1>
        </div>
    )
}

export default Trailer


