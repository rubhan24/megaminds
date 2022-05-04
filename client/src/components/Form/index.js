import React, {useState} from 'react'
// import ModalUser from '../ModalUser'
import NameInputFour from '../NameInputFour'
import NameInputOne from '../NameInputOne'
import NameInputThree from '../NameInputThree'
import NameInputTwo from '../NameInputTwo'
import './style.css'

function Form() {
  const optionArray = [
    { category: "General Knowledge", value: 9,},
    { category: "Books", value: 10 },
    { category: "Films", value: 11 },
    { category: "Music", value: 12 },
    { category: "Musicals and Theaters", value: 13 },
    { category: "Television", value: 14 },
    { category: "Video Games", value: 15 },
    { category: "Board Games", value: 16 },
    { category: "Science and Nature", value: 17 },
    { category: "Computer", value: 18 },
    { category: "Mathematics", value: 19 },
    { category: "Mythology", value: 20 },
    { category: "Sports", value: 21 },
    { category: "Geography", value: 22 },
    { category: "History", value: 23 },
    { category: "Politics", value: 24 },
    { category: "Art", value: 25 },
    { category: "Celebrities", value: 26 },
    { category: "Animals", value: 27 },
    { category: "Vehicles", value: 28 },
    { category: "Comics", value: 29 },
    { category: "Gadgets", value: 30 },
    { category: "Japanese Anime", value: 31 },
    { category: "Cartoon and Animations", value: 32 },
  ]

  
  // const [openModal, setOpenModal] = useState(false)
  const [category, setCategory] = useState(9)
  const [difficulty, setDifficulty] = useState('Easy')
  const [numPlayers, setNumPlayers] = useState(1)

  const [playerOne, setPlayerOne] =useState('')
  const [playerTwo, setPlayerTwo] =useState('')
  const [playerThree, setPlayerThree] =useState('')
  const [playerFour, setPlayerFour] =useState('')

 
  const playerName = () => {
    if (numPlayers==1){
      return( <NameInputOne playerOne = {setPlayerOne}/>)
    } else if (numPlayers==2){
      return(<NameInputTwo playerOne={setPlayerOne} playerTwo={setPlayerTwo}/>)
    } else if(numPlayers==3){
      return(<NameInputThree playerOne={setPlayerOne} playerTwo={setPlayerTwo} playerThree={setPlayerThree}/>)
    } else if (numPlayers==4){
      return(<NameInputFour playerOne={setPlayerOne} playerTwo={setPlayerTwo} playerThree={setPlayerThree} playerFour={setPlayerFour}/>)
    }
  }
  
  return (
    <div className='form'>
      <form>
        <label className="players">
          Pick number of players:
          <select id="pla" className="playersOption" onChange={(e)=>setNumPlayers(e.target.value)} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>

        {playerName()}

        <ul className="topics">
          Pick topic:
          <select className="topicOption" onChange={(e)=>setCategory(e.target.value)}>
            {optionArray.map((option, i)=><option value={option.value} key={i}>{option.category}</option>)}
          </select>
        </ul>
        <ul className="difficulty">
            Difficulty:
          <select className="difficultyOption" onChange={(e)=>setDifficulty(e.target.value)}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </ul>
      {console.log(playerOne, playerTwo, playerThree, playerFour)}
      
        <button className="startButton">START</button>
      </form>
    </div>
  )
}

export default Form