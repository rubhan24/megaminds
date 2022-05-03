import React from 'react'
import { Addusers, Form, LeaderboardBtn, ModalUser } from '../../components'

function Home() {
  return (
    <div className="body">
        <h1 className="Title">MasterMinds!</h1>
        <LeaderboardBtn />
        <Form />
        <Addusers/>
        {/* {openModal && <ModalUser />} */}
    </div>
  )
}

export default Home