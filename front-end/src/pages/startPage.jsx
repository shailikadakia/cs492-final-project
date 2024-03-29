import { useState, useEffect } from 'react';

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
    <div className="StartPage">
        {data.map((item) => (
          <li key={item.id}>{item.id}</li>
        ))}
    </div>
  );
}

export default StartPage;