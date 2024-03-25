import PropTypes from 'prop-types';

function Prompt ({ 
    text,
    image,
    altText,
    option1ID,
    option1text,
    option2ID, 
    option2text,
    setOptionSelected,
    isTransition,
    isThirdOption,
    option3text,
    option3ID
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
        {isTransition && !isThirdOption ? (
          <button 
          onClick={() => {
            setOptionSelected(option1ID)
          }}
        >{option1text}
        </button>
        ): (
          <>
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
        { isThirdOption && 
          <button 
          onClick={() => {
            setOptionSelected(option3ID)
          }}
        >{option3text}
        </button>
        }
          </>
        )}
      </div>
    </div>
  );
}

Prompt.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  option1ID: PropTypes.number,
  option1text: PropTypes.string,
  option2ID: PropTypes.number,
  option2text: PropTypes.string,
  setOptionSelected: PropTypes.func.isRequired,
  isTransition: PropTypes.bool,
  isThirdOption: PropTypes.bool,
  option3text: PropTypes.string,
  option3ID: PropTypes.bool
};


export default Prompt;
