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
    const [disabled, setDisabled] = useState(false)
    const [style, setStyle] = useState('green')

    const randomiser = () =>{
      return(Math.floor(Math.random()*3))
    }

    useEffect(()=>{
      if(quizData?.length) {
        const question = quizData[questionIndex]
        const answer = [...question.incorrect_answers]
        answer.splice(randomiser(), 0, question.correct_answer)
        setOptions(answer)
      }
    }, [quizData, questionIndex])

        
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
        setDisabled(true)

        console.log(e.target)
        e.target.style.color = 'green'
        setStyle('black')
        dispatch({
          type: "UPDATE_SCORE",
        });  
      } else if (e.target.value !== question.correct_answer ){
        e.target.style.color = 'red'
        setDisabled(true)

      }
    }

    const score = useSelector((state) => state.score);
    const playerOne = useSelector((state) => state.playerOne);
    
    const handleNextClick =()=>{
      setDisabled(false)
      const button = document.querySelector('.default')
      if(questionIndex+1 <quizData.length){
        setQuestionIndex(questionIndex+1)
      } else{
          navigate('/results')
      }
    }


  return (
    <div>
      {playerOne && <p>{playerOne}</p>}
      {quizData && <p>{question}</p>}
      {options && options.map((answer, i)=> (<button onClick={handleClick} className="default" disabled={disabled} value={answer} key={i}>{answer}</button>))}
      {score}
      <button onClick={handleNextClick}>Next!</button> 
    </div>
  )
}

export default Questionaire