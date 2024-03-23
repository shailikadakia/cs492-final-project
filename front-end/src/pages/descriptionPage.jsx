import { useState, useEffect } from 'react';

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
        {data.map((item) => (
          <li key={item.id}>{item.id}</li>
        ))}
    </div>
  );
}

export default DescriptionPage;
