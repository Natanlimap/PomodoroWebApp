import Head from 'next/head';
import React, { useState, useEffect, useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;



export function Countdown(){

    const { startNewChallenges} = useContext(ChallengesContext)

    const [interval, setInterval] = useState(1000)

    if(document.addEventListener){
        document.addEventListener("visibilitychange", function(){
            if(interval == 1000){
                setInterval(500)
            }else{
                setInterval(1000)
            }
        })
    }

    const [time, setTime] = useState(60*25)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  
    function startCountdown(){
        setIsActive(true)
    }
    function resetCountdown(){
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(25*60)
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, interval)
        }else if(isActive && time == 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenges();
        }
    }, [isActive, time])

    return(
       <div>
          <Head>
                <title>Pomo {minuteLeft}{minuteRight}:{secondLeft}{secondRight}</title>
         </Head>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button disabled  className={styles.countdownButton}>Ciclo encerrado <img src="icons/check_circle.svg"></img></button>
            ):
                <>
                     { isActive && !hasFinished ? (
                        <button onClick={resetCountdown} type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`}> Abandonar ciclo</button>
                    ):(
                        <button onClick={startCountdown} type="button" className={styles.countdownButton}>Iniciar ciclo</button>
                    )
                    }

                </>
            }

       
       </div>
    )
}