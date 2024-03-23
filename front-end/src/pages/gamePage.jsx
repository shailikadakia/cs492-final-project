import gamePromptPage from "../../../back-end/data/gamePromptPage";
import { useState, useEffect } from "react";
import Prompt from "../components/gamePromptComponent";

function Game() {
  console.log('in game')
  const [optionSelected, setOptionSelected] = useState(gamePromptPage.data[0].id)


  const prompts = gamePromptPage.data.map((prompt) => {
    return (
      <>
      <Prompt
        key = {prompt.id}
        text = {prompt.text}
        image = {prompt.image}
        altText = {prompt.altText}
        option1ID = {prompt.option1ID}
        option1text = {prompt.option1text}
        option2ID = {prompt.option2ID}
        option2text = {prompt.option2text}
        setOptionSelected = {setOptionSelected}
      >
      </Prompt>
      </>
    )
  })
  return <div>{prompts[optionSelected]}</div>
}

export default Game;