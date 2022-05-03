import React from 'react'
// import './style.css'
function ModalUser( {closeModal} ) {
  return (
    <div className='modalBackground'>
        <div className='modalConatainer'>
            <div className="titleXButton">
            <button onClick={() => {closeModal(false)}}>X</button>
            </div>
            <div className='title'>
                <h1>Add Users!</h1>
            </div>
            <div className='body'>
                <form>
                <h2>Name:</h2>
                <input></input>
                </form>
            </div>
            <div className='footer'>
                <button onClick={() => {closeModal(false)}} className="cancelButton">CANCEL</button>
                <button className="startButton">START</button>
            </div>
        </div>

    </div>
  )
}

export default ModalUser