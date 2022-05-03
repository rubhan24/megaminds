import React from 'react'
import './style.css'

function Form() {
  return (
    <div className='form'>
      <form>
        <ul className="players">
          Pick number of players:
          <select className="playersOption" >
            <option value="onePlayer">1</option>
            <option value="twoPlayers">2</option>
            <option value="threePlayers">3</option>
            <option value="fourPlayers">4</option>
          </select>
        </ul>
        <ul className="topics">
          Pick topic:
          <select className="topicOption">
            <option value="topicOne">1</option>
            <option value="topicTwo">2</option>
            <option value="topicThree">3</option>
            <option value="topicFour">4</option>
          </select>
        </ul>
        <ul className="difficulty">
            Difficulty:
          <select className="difficultyOption">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </ul>


      </form>
    </div>
  )
}

export default Form