import { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import { Movies } from './MovieData';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddModal from './Components/AddModal';
import Filter from './Components/Filter';
import { BrowserRouter, Route } from 'react-router-dom';
import Trailer from './Components/Trailer';

function App () {
	const [ movies, setMovies ] = useState(Movies);

	const [ text, setText ] = useState('');
	const handleChange = (e) => {
		setText(e.target.value);
	};

	const addMovie = (newMovie) => {
		setMovies([ ...movies, newMovie ]);
	};

	const [ rating, setRating ] = useState(1);

	const handleRating = (x) => {
		setRating(x);
	};

	const handleEdit = (editMovie) => {
		setMovies([ ...movies.map((el) => (el.id === editMovie.id ? editMovie : el)) ]);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Movie App</h1>
				<BrowserRouter>
					<Filter text={text} handleChange={handleChange} rating={rating} handleRating={handleRating} />
					<br />
					<MovieList
						handleEdit={handleEdit}
						movies={movies.filter(
							(el) =>
								(el.name.toLowerCase().includes(text.toLowerCase()) || el.year.includes(text)) &&
								el.rating >= rating
						)}
					/>
					<AddModal add={addMovie} />
					<Route path="/:id" render={(props) => <Trailer movies={movies} {...props} />} />
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
