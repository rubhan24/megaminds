import React, {useState} from 'react'
import './style.css'
import ModalUser from '../ModalUser'

function AddUsers() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="addUser">
        <button className="adduserButton" onClick={ () => {
          setOpenModal(true)
          }}>
            Add Users
        </button>
        {openModal && <ModalUser closeModal={setOpenModal}/>}
    </div>
  )
}

export default AddUsers