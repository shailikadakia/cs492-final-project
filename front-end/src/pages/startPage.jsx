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
    <div className="StartPage  h-1/4 flex justify-center items-center bg-indigo-950 border-2 border-rose-400 text-neutral-100 rounded-sm" >
        {/*data.map((item) => (
          <li key={item.id}>{item.id}</li>
        ))*/}
        <img width="400" height="300" src="../../../assets/manager.webp"/>
         <div className='startPage-TextContainer p-8'>

          <h2 className='text-xl font-extrabold text-rose-400'>Congratulations!</h2>
          <h3>You have just been promoted to Engineering Manager at Avengers4U.</h3>
          <h3>You are thrilled to take on this new role and lead a team of talented engineers.</h3>
          <br></br>
          <button className='rounded-sm bg-indigo-600 hover:border-2 hover:border-neutral-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white font-semibold py-2 px-4 sm-rounded"'><Link to="/game" style={{textDecoration: 'none'}}>Continue...</Link></button>

        </div>
        
    </div>
  );
}

export default StartPage;