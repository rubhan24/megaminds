import React, {useState, useEffect} from 'react'
import { useSelector } from "react-redux";

function Quiz() {
    const [data, setData] = useState(null)
    const numPlayers = useSelector((state) => state.num_players);
    const difficulty = useSelector((state) => state.question_difficulty);
    const cat = useSelector((state) => state.question_cat);


    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(`https://opentdb.com/api.php?amount=${numPlayers*10}&category=${cat}&difficulty=${difficulty}&type=multiple`)
            const response_json = await response.json()
            console.log(response_json)
            setData(response_json)
        }
        fetchData()
    }, [])


  return (
    <div>Quiz</div>
  )
}

export default Quiz