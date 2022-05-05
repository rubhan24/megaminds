import React from 'react'
import { Addusers, Form, LeaderboardBtn, ModalUser } from '../../components'
import './style.css'
function Home() {
  return (
    <div className="body">
        <h1 className="Title">MasterMinds!</h1>
        <LeaderboardBtn />
        <Form />
    </div>
  )
}

export default Home