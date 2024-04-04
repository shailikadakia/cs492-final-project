import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="HomePage">
        <img className='border-x-violet-500 homePage-HeaderImg mx-auto' src="../../../assets/AITeamLookingAtCandidate.webp" alt="AI ethics" height="200"/>
        <br></br>
        <br></br>
      <div className='homePage-TextContainer text-neutral-200'>
        <h2 className='text-xl font-bold'>Welcome to a world where technology shapes our choices!</h2>
        <br></br>
        <p className='homwPage-text text-sm'>

          AI is changing the game of recruitment and streamlining the hiring process. These algorithms promise efficiency but also raise questions of biases, discrimination, and data privacy.
          <br></br>  
          <br></br>
          Are YOU ready to step into the role of HR leader, and ensure fairness prevails in this high-tech hiring landscape?
          <br></br>
          <br></br>
          This interactive simulation will guide you through real-world scenarios, teaching you the hidden biases in hiring and see if you can build a truly fair workplace.
          Let's explore the power and pitfalls of using AI in hiring. Discover how it can help -and sometimes hinder- finding the best people.  
          <br></br>
          <h3>Ready to play?</h3>
          <br></br>
          <button className= "bg-pink-400 animate-bounce hover:bg-pink-600 text-white font-semibold py-2 px-4 border border-sky-900 rounded"><Link to="/startGame">Start Game</Link></button>
        </p>
      </div>
    </div>
  );
}

export default HomePage;
