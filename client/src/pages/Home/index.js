import React from 'react'
import { Addusers, Form, LeaderboardBtn, ModalUser } from '../../components'

function Home() {
  return (
    <div className="body">
        <h1 className="Title" role="Header">MasterMinds!</h1>
        <LeaderboardBtn />
        <Form />
    </div>
  )
}

export default Home