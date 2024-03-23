function Prompt ({ 
    text,
    image,
    altText,
    option1ID,
    option1text,
    option2ID, 
    option2text,
    setOptionSelected
}) {
  return (
    <div className="Prompt Component">
      <div className="promptImage">
        <img src={image} alt={altText}></img>
      </div>
      <div className="promptText">
        <h3>{text}</h3>
      </div>
      <div className="promptOptions">
        <button 
          onClick={() => {
            setOptionSelected(option1ID)
          }}
        >{option1text}
        </button>
        <button 
          onClick={() => {
            setOptionSelected(option2ID)
          }}
        >{option2text}
        </button>
      </div>
    </div>
  );
}

export default Prompt;
