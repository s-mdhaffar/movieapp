import React from 'react'
import { Card } from 'react-bootstrap';

const MovieCard = ({movie}) => {
    return (
        <div className="movie" >
             <Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={movie.image} />
				<Card.Body>
					<Card.Title>{movie.name}</Card.Title>
					<Card.Text>{movie.year}</Card.Text>
				</Card.Body>
			</Card>
        </div>
    )
}

export default MovieCard
