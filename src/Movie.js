import React from 'react';

function Movie({ movie }) {
  return (
    <div className="movie">
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
    </div>
  );
}

export default Movie;
