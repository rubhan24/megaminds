import React, { useEffect, useState } from 'react'
import './styles.css'

function Leaderboard() {
    const [data, setData] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch('http://localhost:8000/users')
            const response_json = await response.json()
            console.log(response_json)
            setData(response_json)
        }
        fetchData()
    }, [])

   const renderData = () => data.map((player, i) => {
        return (<>
            <tr key={i} className="info" >
                <td >{i+1}</td>
                <td >{`${player.username}#${player.users_id}`}</td>
                <td>{player.score}</td>
            </tr>
        </>)
    })

  return (
      <table data-testid="table">
        <thead>
            <tr data-testid="tr">
                <th>Rank</th>
                <th>Username</th>
                <th>Score</th>
            </tr>
        </thead>
            {data.length>1 && renderData()}
    </table>
  )
}

export default Leaderboard

