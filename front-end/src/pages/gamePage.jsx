
import { useState, useEffect } from "react";
import Prompt from "../components/gamePromptComponent";
import { Link, useNavigate } from 'react-router-dom'


function Game() {
  const [gameData, setGameData] = useState(null);
  const [optionSelected, setOptionSelected] = useState(0);
  let navigate = useNavigate();

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
      <h2 className="text-red-500 font-extrabold">Game Over!</h2>
      <hr className="my-0 border-red-200 sm dark:border-red-700 lg:my-4" />
      <br></br>
      <img className="w-full md:w-1/2 mx-auto pb-10" src="../../../assets/GameOver1.jpg" />
      <p className="grid grid-cols-1 gap-2 text-left text-white">{prompt.text.split("\n").map((i,key) => {
            return <div key={key}><p>{i}</p></div>;
        })}
        </p>
        <br></br>
        <div className="grid grid-cols-2 gap-6">
        <button class="gap-6 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded"
        onClick={() => navigate('/')}
        >Return to home
        </button>
        <button class="gap-6 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-4 rounded"
        onClick={() => navigate('/startGame')}>
          Play again
        </button>
      </div>
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
