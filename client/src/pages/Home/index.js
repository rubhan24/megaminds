import React from 'react'
import { Addusers, Form, LeaderboardBtn, ModalUser } from '../../components'
import './home.css';

function Home() {
  return (
    <div className="body" role="Home">
        <h1 className="Title">MegaMinds!</h1>
        <LeaderboardBtn />
        <Form />
    </div>
  )
}

export default Home