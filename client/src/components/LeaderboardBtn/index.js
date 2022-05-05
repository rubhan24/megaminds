import React from 'react'
import './style.css'
import { useNavigate } from 'react-router';


function LeaderboardBtn() {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/leaderboard')
  }

  return (
    <div className="leaderboard">
        <button role="leaderboardbtn" className="leaderbutton" onClick={handleClick}>Leaderboard</button>
    </div>
  )
}

export default LeaderboardBtn