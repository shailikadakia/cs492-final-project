import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useEffect, useState} from 'react'
import DescriptionPage from './pages/descriptionPage';
import StartPage from './pages/startPage';
import HomePage from './pages/homePage';


function App() {
  const [message, setMessage] = useState("");

  
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/startGame' element={<StartPage/>}></Route>
          <Route path='/description' element={<DescriptionPage/>}></Route>
        </Routes>
      </Router>
      <h3>{message}</h3>
    </div>
  );
}

export default App
