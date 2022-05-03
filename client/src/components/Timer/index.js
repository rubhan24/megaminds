import React, {useState, useRef, useEffect} from 'react';
// we need to use a Ref hook because this helps us when using JS' setInterval for the timer
// we are able to track/stop it when needed

function Timer() {
    const intervalRef = useRef(null)
    const [counter, setCounter] = useState()
    const [timer, setTimer] = useState();
    // this would be the state of our time, going down from 60 seconds
    // the function below allows the timer to have a target endtime
    function getTimeLeft(endtime){
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor( (total/1000) % 60);
        
        return{
            total, seconds
        };
    }

    function startTimer(deadline){
        let {total, seconds} = getTimeLeft(deadline);
        if(total>=0){
            setTimer(  
                (seconds > 9 ? seconds : '0'+seconds)
            )
    }else{
        clearInterval(intervalRef.current);
    
    }
}
// below allows us to reset the timer when clicking on the next question
function clearTimer(endtime){
    setTimer('00');
    if(intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(() => {
        startTimer(endtime);
    }, 1000)
    intervalRef.current = id;
}

function getDeadlineTime(){
    let deadline = new Date();
// we can update 15 if we want to add more or less time
    deadline.setSeconds(deadline.getSeconds()+15);
    return deadline
}

useEffect(() => {
    clearTimer(getDeadlineTime());
    return () => {if(intervalRef.current) clearInterval(intervalRef.current)}
    },[]);

function onClickNextBtn(){
    // this allows the timer to reset rather than it continuing when we click the next Q button
    if(intervalRef.current) clearInterval(intervalRef.current);
    clearTimer(getDeadlineTime());
}

    return (
        <div className='Timer'>
            {timer}
            {counter}
            <button onClick={onClickNextBtn}>Next</button>
        </div>
    )
}

export default Timer;