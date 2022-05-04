import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/leaderboard' element={<Leaderboard/>}/>
    </Routes>
  );
}

export default App;
