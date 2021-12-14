import React from 'react'
import { Card } from 'react-bootstrap';
import MovieEdit from './MovieEdit';
import StarsRating from './StarsRating';
import { Link } from 'react-router-dom';


const MovieCard = ({movie,handleEdit}) => {
    return (
        <div className="movie" >
             <Card style={{ width: '18rem' }}>
				 
				<Card.Img variant="top" src={movie.image} />
				<Card.Body>
					<Card.Title>{movie.name}</Card.Title>
					<Card.Text>{movie.year}</Card.Text>
					<StarsRating rating={movie.rating} />
				</Card.Body>
				<MovieEdit handleEdit={handleEdit} movie={movie}/>
				<Link to={`/${movie.id} `}><button>Trailer</button></Link>
			</Card>
        </div>
    )
}

export default MovieCard
