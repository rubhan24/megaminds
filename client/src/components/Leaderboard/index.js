import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function Leaderboard() {
  return (
    <div className="leaderboard">
      <NavLink to="/leaderboard">Leaderboard</NavLink>
        {/* <button className="leaderbutton">Leaderboard</button> */}
    </div>
  )
}

export default Leaderboard