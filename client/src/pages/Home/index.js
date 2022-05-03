import React from 'react'
import { Addusers, Form, Leaderboard, ModalUser } from '../../components'

function Home() {
  return (
    <div className="body">
        <h1 className="Title">MasterMinds!</h1>
        <Leaderboard />
        <Form />
        <Addusers/>
        {/* {openModal && <ModalUser />} */}
    </div>
  )
}

export default Home