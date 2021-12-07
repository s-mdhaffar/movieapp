import { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import { Movies } from './MovieData';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddModal from './Components/AddModal';

function App () {
	const [ movies, setMovies ] = useState(Movies);
	return (
		<div className="App">
			<header className="App-header">
				<h1>Movie App</h1>
				<MovieList movies={movies} />
				<AddModal />
			</header>
		</div>
	);
}

export default App;
