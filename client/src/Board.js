import React, {useState} from 'react'
import Profiles from './Profiles'
import {Leaderboard} from './database'

export default function Board() {

    const [period, setPeriod] = useState(0);
    // the useState hook allows us to track the leaderboard by date

    const handleClick = (e) => {
     
    setPeriod(e.target.dataset.id)
    // return the data id for us to get scores via duration
}

    return (
    <div className='board'>
        <h1 className='leaderboard'>MegaMinds Leaderboard</h1>

        <div className='duration'>
            <button onClick={handleClick} data-id='7'>7 days</button>
            <button onClick={handleClick} data-id='30'>30 days</button>
            <button onClick={handleClick} data-id='0'>All-Time</button>
        </div>

        <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>


    </div>
  )
}

function between(data, between){
    const today = new Date();
    // returns current date
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));
    // previous stores the previous 7 days data, +1 is required to get the 7th day

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
    // using the filte method 
        if (between == 0) return val;
    // do not change to === otherwise all-time data would not function
        return previous <= userDate && today >= userDate;
    })

    // the sort method return the leaderboard with highest to lowest score
    return filter.sort((a, b) => {
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })

}
