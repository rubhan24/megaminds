import React, {useState, useEffect} from 'react'
import './styles.css';
import { useSelector, useDispatch } from "react-redux";
import {useNavigate} from 'react-router-dom'
function Results() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const score = useSelector((state) => state.score);
    const username = useSelector((state) => state.playerOne);
    const [playerInfo, setPlayerInfo] = useState([])
    const [allPlayerInfo, setAllPlayerInfo] = useState([])

    const playerOneInformation = [{username: username, score:score}]

    useEffect(()=>{
        async function postGetData(){
            console.log('function called')
            const options = {
                method: 'POST', 
                body: JSON.stringify(playerOneInformation),
                headers: {'Content-Type': 'application/json'}
            }
            const postData = await fetch('http://localhost:8000/users', options)
            const response_json_postData = await postData.json()
            console.log(response_json_postData)
            setPlayerInfo(response_json_postData)

            const getData = await fetch('http://localhost:8000/users')
            const response_json_getData = await getData.json()
            console.log(response_json_getData)
            setAllPlayerInfo(response_json_getData)
        }
        postGetData()
    }, [])

    const renderData = () => allPlayerInfo.map((player, i) => {
        return (<>
            <tr key={i} className="info" >
                <td >{i+1}</td>
                <td >{`${player.username}#${player.users_id}`}</td>
                <td>{player.score}</td>
            </tr>
        </>)
    })

    const renderPlayerData = () => playerInfo.map((player, i) => {
        return (<>
            <tr key={i} className="info" >
                <td >{i+1}</td>
                <td >{`${player.username}#${player.id}`}</td>
                <td>{player.score}</td>
            </tr>
        </>)
    })

    const handleClick = () => {
        dispatch({
            type: "RESET",
          });  
        navigate('/')
    }

  return (
      <>
    <div role="resultstable">
        <table data-testid="table">
            <thead>
                <tr data-testid="tr">
                    <th>Rank</th>
                    <th>Username</th>
                    <th>Score</th>
                </tr>
            </thead>
                {playerInfo.length && renderPlayerData()}
        </table>

    <table id='resultsTable'>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Score</th>
            </tr>
        </thead>
            {allPlayerInfo.length>1 && renderData()}
    </table>
    </div>
    <button id='playbtn' role="playAgain" onClick={handleClick}>Play Again!</button>
    </>
  )
}

export default Results