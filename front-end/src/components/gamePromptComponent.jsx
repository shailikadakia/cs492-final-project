import PropTypes from 'prop-types';

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

Prompt.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  option1ID: PropTypes.number.isRequired,
  option1text: PropTypes.string.isRequired,
  option2ID: PropTypes.number.isRequired,
  option2text: PropTypes.string.isRequired,
  setOptionSelected: PropTypes.func.isRequired
};


export default Prompt;
