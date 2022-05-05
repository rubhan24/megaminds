import React from 'react'

function NameInputOne({playerOne}) {

  const savePlayer1=(e)=>{
    playerOne(e.target.value)
  }

  return (
    <>
    <div className='body'  >
        <h2 data-testid="name1">Name:</h2>
        <input type="text" onChange={savePlayer1}></input>
    </div>
    </>
  )
}

export default NameInputOne