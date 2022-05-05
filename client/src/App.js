import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Quiz from './pages/Quiz';
import Results from './pages/Results';



function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/leaderboard' element={<Leaderboard/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/results' element={<Results/>}/>

    </Routes>
  );
}

export default App;
