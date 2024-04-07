import React from 'react';
import useDataHook from './hooks/useCustomHook';
import CharacterList from './hooks/CharacterList';

import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  
  const { data: pokemonData, isLoading: pokemonLoading, error: pokemonError } = useDataHook(urlPokemon);
  const { data: rickData, isLoading: rickLoading, error: rickError } = useDataHook(urlRick);
  
  return (
    <div className="container">
      <div className="character-container">
        <h2 className="character-title">Personaje Pokemon</h2>
        {pokemonLoading && <p className="character-loading">Loading...</p>}
        {pokemonError && <p className="character-error">Error: {pokemonError.message}</p>}
        {pokemonData && <CharacterList characters={[pokemonData]} />}
      </div>

      <div className="character-container">
        <h2 className="character-title">Personaje Rick and Morty</h2>
        {rickLoading && <p className="character-loading">Loading...</p>}
        {rickError && <p className="character-error">Error: {rickError.message}</p>}
        {rickData && <CharacterList characters={[rickData]} />}
      </div>
    </div>
  );
}

export default App;