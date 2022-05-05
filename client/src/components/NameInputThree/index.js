import React from 'react'
import { useSelector, useDispatch } from "react-redux";

function NameInputThree() {
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

  const savePlayer3=(e)=>{
    dispatch({
        type: "ADD_PLAYERTHREE",
        value: e.target.value,
      });  
  }

  const playerNameOne = useSelector((state) => state.playerOne);
  console.log(playerNameOne)

  const playerNameTwo = useSelector((state) => state.playerTwo);
  console.log(playerNameTwo)


  const playerNameThree = useSelector((state) => state.playerThree);
  console.log(playerNameThree)
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
    <div className='body'  >
          <h2>Name:</h2>
          <input type="text" onChange={savePlayer3} required></input>
    </div>
    </>
  )
}

export default NameInputThree