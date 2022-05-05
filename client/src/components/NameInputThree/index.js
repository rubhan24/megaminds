import React from 'react'

function NameInputThree({playerOne, playerTwo, playerThree}) {

  const savePlayer1 = (e) =>{
    playerOne(e.target.value)
}
  const savePlayer2 = (e) =>{
    playerTwo(e.target.value)
  }
  const savePlayer3 = (e) =>{
    playerThree(e.target.value)
  }

  return (
    <>
    <div className='body'  >
        <h2 data-testid="name3">Name:</h2>
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
    </>
  )
}

export default NameInputThree