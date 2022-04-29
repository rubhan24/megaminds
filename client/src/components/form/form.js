import React from 'react'

function form() {
  return (
    <div className='form'>
      <form>
        <label className="players">
          Pick number of players:
          <select value="Choose number of players">
            <option value="onePlayer">1</option>
            <option value="twoPlayers">2</option>
            <option value="threePlayers">3</option>
            <option value="fourPlayers">4</option>
          </select>
        </label>
        <label className="topics">
          Pick topic:
          <select value="Choose topic">
            <option value="topicOne">1</option>
            <option value="topicTwo">2</option>
            <option value="topicThree">3</option>
            <option value="topicFour">4</option>
          </select>
        </label>
        <label>
            Difficulty:
          <select value="Choose difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>


      </form>
    </div>
  )
}

export default form