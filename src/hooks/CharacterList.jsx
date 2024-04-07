import React from 'react';
import Character from './Characters';

const CharacterList = ({ characters }) => {
  return (
    <div>
      {characters.map((character, index) => (
        <Character key={index} name={character.name} image={character.image || character.sprites.front_default} />
      ))}
    </div>
  );
};

export default CharacterList;