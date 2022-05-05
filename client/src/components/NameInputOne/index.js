import React from 'react'
import { useSelector, useDispatch } from "react-redux";

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
        <label for="PlayerOneName">Name:</label>
        <input id="PlayerOneName" type="text" onChange={savePlayer1} required></input>
    </div>
    </>
  )
}

export default NameInputOne