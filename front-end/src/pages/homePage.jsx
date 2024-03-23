import { useState, useEffect } from 'react';

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/home")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="HomePage">
        {data.map((item) => (
          <li key={item.id}>{item.id}</li>
        ))}
    </div>
  );
}

export default HomePage;
