import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from "react-redux";
import {NavLink, useNavigate} from 'react-router-dom'
import Timer from '../Timer';
import './style.css'
function Questionaire() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [questionIndex, setQuestionIndex] = useState(0)
    const [options, setOptions] = useState([])
    const [question, setQuestion]=useState([])
    const [answerSelected, setAnswerSelected] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);    
    const quizData = useSelector((state) => state.quizData);
    const [disabled, setDisabled] = useState(false)
    const [style, setStyle] = useState('blue')

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
      setAnswerSelected(true)
      setSelectedAnswer(e.target.value)
      const question = quizData[questionIndex]
      if(e.target.value === question.correct_answer ){
        setDisabled(true)
        
        dispatch({
          type: "UPDATE_SCORE",
        });  
      } else if (e.target.value !== question.correct_answer ){
        setDisabled(true)

      }
    }

    const score = useSelector((state) => state.score);
    const playerOne = useSelector((state) => state.playerOne);
    
    // const handleNextClick =()=>{
    //   setDisabled(false)
    //   if(questionIndex+1 <quizData.length){
    //     setAnswerSelected(false)
    //     setSelectedAnswer(null)
    //     setQuestionIndex(questionIndex+1)
        
    //   } else{
    //       navigate('/results')
    //   }
    // }

    const getClass = (option) => {
      const correctAnswer = quizData[questionIndex].correct_answer
      if (!answerSelected) { 
        return "";
      }
      if (option === correctAnswer) {
        return "correct";
      }
      if (selectedAnswer !== correctAnswer) {
        return "selected";
      }
    };

    const handleHome = () => {
      navigate('/')
    }

  return (
    <div className='button' >
      {console.log('fired called')}
      <button className='homeButton'onClick={handleHome}>Megaminds</button>
      {playerOne && <p className='name'>{playerOne}</p>}
      
      <div className='questionCon'>
      {quizData && <p className='question'>{question}</p>}
      </div>
      {options && options.map((answer, i)=> (<button style={{color: {style}}} onClick={handleClick} className={getClass(answer)} disabled={disabled} value={answer} key={i}>{answer}</button>))}
      <p className='score'>Score: {score}/{questionIndex+1}</p>
      <Timer
      questionIndexFunc = {setQuestionIndex}
      questionIndex = {questionIndex}
      answerSelectedFun = {setAnswerSelected}
      answerSelected = {answerSelected}
      selectedAnswerFunc = {setAnswerSelected}
      selectedAnswer = {answerSelected}
      disabledFunc = {setDisabled}
      disabled = {disabled}
      />
      {/* <button onClick={handleNextClick}>Next!</button>  */}
    </div>
  )
}

export default Questionaire