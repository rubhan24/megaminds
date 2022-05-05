import React from 'react'
import {  useDispatch } from "react-redux";

function NameInputFour() {
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

  const savePlayer4=(e)=>{
    dispatch({
        type: "ADD_PLAYERFOUR",
        value: e.target.value,
      });  
  }

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
    <div className='body'  >
        <h2 data-testid="name4">Name:</h2>
        <input type="text" onChange={savePlayer4} required></input>
    </div>
    </>
  )
}

export default NameInputFour