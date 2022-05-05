import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import Questionaire from '../../components/Questionaire';

function Quiz() {
    const dispatch = useDispatch();
    const numPlayers = useSelector((state) => state.num_players);
    const difficulty = useSelector((state) => state.question_difficulty);
    const cat = useSelector((state) => state.question_cat);

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(`https://opentdb.com/api.php?amount=${numPlayers*10}&category=${cat}&difficulty=${difficulty}&type=multiple`)
            const response_json = await response.json()
              dispatch({
                type: "ADD_QUIZDATA",
                value: response_json.results,
              });  
            }
        fetchData()
    }, [cat])

   
  return (
    <div>
      {<Questionaire/>}
    </div>
  )
}

export default Quiz