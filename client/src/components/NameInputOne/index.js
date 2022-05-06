import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import './NameOne.css'

function NameInputOne() {
  const dispatch = useDispatch();

  const savePlayer1=(e)=>{
    dispatch({
        type: "ADD_PLAYERONE",
        value: e.target.value,
      });  
  }

  const playerNameOne = useSelector((state) => state.playerOne);
  console.log(playerNameOne)

  return (
    <>
    <div className='body'  >
        <h2 data-testid="name1">Name:</h2>
        <input type="text" onChange={savePlayer1} required></input>
    </div>
    </>
  )
}

export default NameInputOne