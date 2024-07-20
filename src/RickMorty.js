import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

function RickMorty() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => setCharacters(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="RikMorty">
      <header className="App-header">
        <h1>Rick and Morty Characters</h1>
      </header>
      <main>
        <div className="characters">
          {characters.map(character => (
            <Character key={character.id} character={character} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default RickMorty;
