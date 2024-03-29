import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DescriptionPage from './pages/descriptionPage';
import StartPage from './pages/startPage';
import HomePage from './pages/homePage';
import Game from './pages/gamePage';
import Footer from './components/footer';

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
      <Footer></Footer>
    </div>
  );
}

export default App
