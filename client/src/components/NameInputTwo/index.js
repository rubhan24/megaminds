import React from 'react'

function NameInputTwo({playerOne, playerTwo}) {
  const savePlayer1 = e =>{
    playerOne(e.target.value)
  }

  const savePlayer2 = e =>{
    playerTwo(e.target.value)
  }
  
  return (
    <>
    <div className='body'  >
        <h2 data-testid="name2">Name:</h2>
        <input type="text" onChange={savePlayer1} ></input>
    </div>
    <div className='body'  >
        <h2>Name:</h2>
        <input type="text" onChange={savePlayer2} ></input>
    </div>
    </>
  )
}

export default NameInputTwo