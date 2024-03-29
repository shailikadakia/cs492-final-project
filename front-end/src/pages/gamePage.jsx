
import { useState, useEffect } from "react";
import Prompt from "../components/gamePromptComponent";
import { Link } from 'react-router-dom'

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
  console.log(prompt.id)

if (prompt.isGameOver) {
  return (
    <div>
      <h1>Game Over</h1>
      <div className="promptText">
      {prompt.text.split('\n').map((i, key) => (
          <p key={key}>
          {i}
          <br />
        </p>
        ))}
      </div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        <Link to="/startGame">Return to Home</Link>
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        <Link to="/startGame">Play again</Link>
      </button>
    </div>
  );
}
  const divStyle = {
    wordWrap: 'break-word',
    maxWidth: '600px',
    width: '90%' 
  };
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
        option3ID={prompt.option3ID}
        option3text={prompt.option3text}
        setOptionSelected={handleOptionSelect}
        isTransition={prompt.isTransition}
        isThirdOption={prompt.isThirdOption}

      />
    </div>
  );
}

export default Game;
