import React, { useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

const API_KEY = 'f3659090';

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      setMovies(response.data.Search);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-films">
      <header className="App-header">
        <h1>Movie Search</h1>
        <form onSubmit={searchMovies}>
          <input
          className='film-input'
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a movie..."
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <div className="movies">
          {movies?.map(movie => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
