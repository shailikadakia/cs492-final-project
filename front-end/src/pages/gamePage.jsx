
import { useState, useEffect } from "react";
import Prompt from "../components/gamePromptComponent";

function Game() {
  const [gameData, setGameData] = useState(null);
  const [optionSelected, setOptionSelected] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api/game")
      .then((res) => res.json())
      .then(data => {
        setGameData(data)
      })
      .catch(error => {
        console.error('Error fetching game data:', error);
      });
  }, []);

  const handleOptionSelect = (optionId) => {
    setOptionSelected(optionId);
  };

  if (!gameData) {
    return <div>Loading...</div>;
  }

  const prompt = gameData.find(prompt => prompt.id === optionSelected);

  return (
    <div>
      <Prompt
        key={prompt.id}
        text={prompt.text}
        image={prompt.image}
        altText={prompt.altText}
        option1ID={prompt.option1ID}
        option1text={prompt.option1text}
        option2ID={prompt.option2ID}
        option2text={prompt.option2text}
        setOptionSelected={handleOptionSelect}
      />
    </div>
  );
}

export default Game;
