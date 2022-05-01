import React from 'react'
import { Addusers, Form, Leaderboard } from '../../components'

function Home() {
  return (
    <div>
        <h1 className="Title">MasterMinds!</h1>
        <Leaderboard />
        <Form />
        <Addusers/>
    </div>
  )
}

export default Home