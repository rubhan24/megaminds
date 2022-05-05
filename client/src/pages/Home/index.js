import React from 'react'
import { Addusers, Form, LeaderboardBtn, ModalUser } from '../../components'

function Home() {
  return (
    <div className="body" role="Home">
        <h1 className="Title">MasterMinds!</h1>
        <LeaderboardBtn />
        <Form />
    </div>
  )
}

export default Home