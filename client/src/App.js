import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import Timer from './components/Timer';



function App() {
  return (
    <div>
      <Timer />  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/leaderboard' element={<Leaderboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
