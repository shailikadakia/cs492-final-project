import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function DescriptionPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/description")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="DescriptionPage">
        {/*{data.map((item) => (
          <li key={item.id}>{item.id}</li>
        ))}*/}
        
      <img className='descriptionPage-HeaderImg' src="../../assets/descriptionPage.webp" height="400"/>
      <div className='descriptionPage-TextContainer'>
        <h2>The Hidden Bias: An Interactive Exploration of AI in Hiring</h2>
        <p className='descriptionPage-text'>
          
          Algorithms seem efficient, neutral tools.  But what happens when the data used to train AI reflects the all-too-human biases of our world?  
          In this interactive game, you'll step into the role of a hiring manager and experience firsthand how AI can amplify prejudice in the workplace, often with the best of intentions.

        </p>
        <h3>The Challenge</h3>
        <p>
          Your decisions matter. As you create job postings, screen resumes, conduct interviews, and make offers, you'll confront subtle -and not so subtle- scenarios where seemingly objective AI tools perpetuate discrimination. 
          Can you build a fair and inclusive team, or will unconscious biases derail your efforts?
        </p>

        <section class="feature-section">
          <h3>Features</h3>
          <ul class="feature-list">
            <li class="feature-item">
              <p><strong>Real-World Inspiration:</strong> Discover how gender, sexual identity, minority status, age, and even a gap on a resume can lead to biased outcomes, inspired by genuine cases of AI discrimination.</p>
              
            </li>
            <li class="feature-item">
              <p><strong>The Ripple Effect: </strong> Experience how even minor choices have consequences throughout the hiring process.</p>
            </li>
            <li class="feature-item">
              <p><strong>Feedback Loops:</strong> Get insights into your decisions, helping you identify common traps and understand the complexities of AI ethics.</p>
              
            </li>
          </ul>
        </section>
        <h3>Why Play?</h3>
        <p>
          Whether you're a job seeker, a future manager, or simply someone concerned about technology's impact on society, this game will challenge your assumptions. Play to:

          Raise awareness about the unintended consequences of AI in hiring.
          Develop empathy for those impacted by discriminatory algorithms.
          Practice identifying and overcoming bias in a safe environment.
        </p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"><Link to="/startGame">Start Playing</Link></button>
      </div>

    </div>
  );
}

export default DescriptionPage;
