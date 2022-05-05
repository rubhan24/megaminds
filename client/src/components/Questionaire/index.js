import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'

function Questionaire() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [questionIndex, setQuestionIndex] = useState(0)
    const [options, setOptions] = useState([])
    const [question, setQuestion]=useState([])
    const quizData = useSelector((state) => state.quizData);

    useEffect(()=>{
      if(quizData?.length) {
        const question = quizData[questionIndex]
        const answer = [...question.incorrect_answers]
        answer.splice(randomiser, 0, question.correct_answer)
        setOptions(answer)
      }
    }, [quizData, questionIndex])

    const randomiser = () =>{
      return(Math.floor(Math.random()*3))
    }
    
    
    useEffect(()=>{
      if(quizData?.length) {
        const questions = quizData[questionIndex]
        const question = [questions.question]
        setQuestion(question)
      } 
    }, [quizData, questionIndex])
    
    const handleClick = (e) => {
      const question = quizData[questionIndex]
      if(e.target.value === question.correct_answer ){
        dispatch({
          type: "UPDATE_SCORE",
        });  
      }
      if(questionIndex+1 <quizData.length){
        setQuestionIndex(questionIndex+1)
      } else{
          navigate('/results')
      }
    }

    const score = useSelector((state) => state.score);
    const playerOne = useSelector((state) => state.playerOne);


  return (
    <div role="questionairediv">
      {playerOne && <p>{playerOne}</p>}
      {quizData && <p>{question}</p>}
      {options && options.map((answer, i)=> (<button role="questionairebtn" onClick={handleClick} value={answer} key={i}>{answer}</button>))}
      {score}

    </div>
  )
}

export default Questionaire