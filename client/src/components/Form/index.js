import React  from 'react'
// import ModalUser from '../ModalUser'
import NameInputFour from '../NameInputFour'
import NameInputOne from '../NameInputOne'
import NameInputThree from '../NameInputThree'
import NameInputTwo from '../NameInputTwo'
import './style.css'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router';

function Form() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

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
  
  const playerName = () => {
    if (parseInt(numPlayers)===1){
      return( <NameInputOne />)
    } else if (parseInt(numPlayers)===2){
      return(<NameInputTwo />)
    } else if(parseInt(numPlayers)===3){
      return(<NameInputThree  />)
    } else if (parseInt(numPlayers)===4){
      return(<NameInputFour/>)
    }
  }

  const saveNumPlayer=(e)=>{
    dispatch({
      type: "UPDATE_NUM_PLAYERS",
      value: e.target.value,
    })
  }

  const saveCategory = (e) =>{
    dispatch({
      type: "UPDATE_CAT",
      value: e.target.value,
    })
  }

  const saveDifficulty = (e) =>{
    dispatch({
      type: "SET_DIFFICULTY",
      value: e.target.value,
    })
  }

  const numPlayers = useSelector((state) => state.num_players);

  const handleClick = ()=>{
    navigate('/quiz')
  }


  return (
    <div className='form'>
      <form onSubmit={handleClick}>
        <label className="players">
          Number of Players: 
          <select id="pla" className="playersOption" onChange={saveNumPlayer} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>

        {playerName()}

        <ul className="topics">
          Pick topic:
          <select className="topicOption" onChange={saveCategory}>
            {optionArray.map((option, i)=><option value={option.value} key={i}>{option.category}</option>)}
          </select>
        </ul>
        <ul className="difficulty">
            Difficulty:
          <select className="difficultyOption" onChange={saveDifficulty}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </ul>
      
        <button className="startButton" type="submit" >START</button>
      </form>
    </div>
  )
}

export default Form