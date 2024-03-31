import React, { useRef, useState } from 'react'
import Result from './Result'

export default function TimerChallenge( {title , targetTime}) {
    const timer = useRef()
    const dialog = useRef()
    // const[timerExpired , setTimerExpired] = useState(false)
    // const[timerStarted , setTimerStarted] = useState(false)
    const [timeRemained , setTimeRemained] = useState(targetTime*1000)
    const timerActive = timeRemained > 0 && timeRemained < targetTime*1000 

    if (timeRemained<=0){
        clearInterval(timer.current)
        dialog.current.open()
    }
    
    const handleReset = () =>{
        setTimeRemained(targetTime*1000)

    }

    const handleStart = () =>{
        timer.current = setInterval(()=>{
            setTimeRemained(prevTimeRemaining => prevTimeRemaining - 10)
            // setTimerExpired(true)
            // dialog.current.showModal()
            // dialog.current.open()
        } , 10)
        // setTimerStarted(true)
    }

    const handleStop = () =>{
        clearInterval(timer.current)
        dialog.current.open()
    }

  return (
    <>
        <Result
         ref={dialog} 
        remainingTime={timeRemained}
        targetTime={targetTime}
        onReset={handleReset} />
        
    <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerActive ? handleStop : handleStart}>
                {timerActive ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerActive ? 'active' : undefined}>
            {timerActive ? 'Timer is running...' : 'Timer Inactive'}
        </p>

    </section>
    </>
      )
}
