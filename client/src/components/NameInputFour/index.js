import React from 'react'

function NameInputFour({playerOne, playerTwo, playerThree, playerFour}) {
  const savePlayer1=(e)=>{
    playerOne(e.target.value)
  }

  const savePlayer2=(e)=>{
    playerTwo(e.target.value)
  }

  const savePlayer3=(e)=>{
    playerThree(e.target.value)
  }

  const savePlayer4=(e)=>{
    playerFour(e.target.value)
  }

  return (
    <>
    <div className='body'  >
        <h2>Name:</h2>
        <input type="text" onChange={savePlayer1}></input>
    </div>
    <div className='body'  >
        <h2>Name:</h2>
        <input type="text" onChange={savePlayer2}></input>
    </div>
    <div className='body'  >
        <h2>Name:</h2>
        <input type="text" onChange={savePlayer3}></input>
    </div>
    <div className='body'  >
        <h2>Name:</h2>
        <input type="text" onChange={savePlayer4}></input>
    </div>
    </>
  )
}

export default NameInputFour