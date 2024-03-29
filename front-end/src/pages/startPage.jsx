import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function StartPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/start")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="StartPage bg-blue-950 min-h-screen text-neutral-100 text-left" >
        {/*data.map((item) => (
          <li key={item.id}>{item.id}</li>
        ))*/}
         <div className='startPage-TextContainer'>
          <h2>Congratulations! You have just been promoted to Engineering Manager at Avengers4U.</h2>
          <h3>You are thrilled to take on this new role and lead a team of talented engineers.</h3>
        </div>
        <br></br>
        <button><Link to="/game" style={{textDecoration: 'none'}}>Continue</Link></button>



    </div>
  );
}

export default StartPage;