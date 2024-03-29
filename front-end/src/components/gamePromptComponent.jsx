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
  console.log(text)
  return (
    <div className="Prompt Component bg-gray-900">
      <div className="promptImage p-8 mx-auto">
        <img src={image} alt={altText}></img>
      </div>
      <div className="promptText text-zinc-100 text-left grid grid-cols-1 gap-3">
        {text.split("\n").map((i,key) => {
            return <div key={key}><p>{i}</p></div>;
        })}
        {/*<pre>{text}</pre>*/}
      </div>
      <br></br>
      <br></br>
      <div className={`promptOptions grid ${isThirdOption ? 'grid-cols-3' : 'grid-cols-2'} gap-6`}>
        {isTransition && !isThirdOption ? (
          <button class="bg-sky-600 hover:bg-sky-800 text-white font-semibold py-2 px-4 border border-sky-900 rounded"
          onClick={() => {
            setOptionSelected(option1ID)
          }}
        >{option1text}
        </button>
        ): (
          <>
        <button class="bg-sky-600 hover:bg-sky-800 text-white font-semibold py-2 px-4 border border-sky-900 rounded"
          onClick={() => {
            setOptionSelected(option1ID)
          }}
        >{option1text}
        </button>
        <button class="bg-sky-600 hover:bg-sky-800 text-white font-semibold py-2 px-4 border border-sky-900 rounded"
          onClick={() => {
            setOptionSelected(option2ID)
          }}
        >{option2text}
        </button>
        { isThirdOption && 
          <button class="py-2 px-4 bg-sky-600  hover:bg-sky-800 text-white font-semibold border border-neutral-900 rounded"
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
