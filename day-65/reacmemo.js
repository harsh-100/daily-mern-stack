import React, { useState } from "react";

const CharacterInfo = React.memo(({ character }) => {
  return (
    <div>
      <h2>{character.name}</h2>
      <p>Level: {character.level}</p>
      <p>Health: {character.health}</p>
    </div>
  );
});

const Game = () => {
  const [character, setCharacter] = useState({
    name: "Hero",
    level: 1,
    health: 100,
  });

  const levelUp = () => {
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      level: prevCharacter.level + 1,
    }));
  };

  return (
    <div>
      <CharacterInfo character={character} />
      <button onClick={levelUp}>Level Up</button>
    </div>
  );
};

export default Game;
