import React from 'react'
import { useSelector, useDispatch } from "react-redux";

function NameInputTwo() {
  const dispatch = useDispatch();

  const savePlayer1=(e)=>{
    dispatch({
        type: "ADD_PLAYERONE",
        value: e.target.value,
      });  
  }

  const savePlayer2=(e)=>{
    dispatch({
        type: "ADD_PLAYERTWO",
        value: e.target.value,
      });  
  }

  const playerNameOne = useSelector((state) => state.playerOne);
  console.log(playerNameOne)

  const playerNameTwo = useSelector((state) => state.playerTwo);
  console.log(playerNameTwo)
  
  return (
    <>
    <div className='body'  >
        <h2>Name:</h2>
        <input type="text" onChange={savePlayer1} required></input>
    </div>
    <div className='body'  >
        <h2>Name:</h2>
        <input type="text" onChange={savePlayer2} required></input>
    </div>
    </>
  )
}

export default NameInputTwo