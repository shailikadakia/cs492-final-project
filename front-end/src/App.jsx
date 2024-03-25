import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { useState} from 'react'
import DescriptionPage from './pages/descriptionPage';
import StartPage from './pages/startPage';
import HomePage from './pages/homePage';
import Game from './pages/gamePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/startGame' element={<StartPage/>}></Route>
          <Route path='/description' element={<DescriptionPage/>}></Route>
          <Route path='/game' element={<Game/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
