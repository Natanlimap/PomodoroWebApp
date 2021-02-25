import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const {activeChallenge, cancelChallenge, completeChallenge} = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceded(){
        completeChallenge();
        resetCountdown();
    }
 
    function handleChallengeFailed(){
        cancelChallenge();
        resetCountdown();
    }

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge == null ? (
            <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src='icons/level-up.svg'></img>
                    Complete-os e ganhe
                    experiência e avance de leve.    
                </p>
            </div>
            ):(
            <div className={styles.challengeActive}>
                <header>
                    <span>Ganhe {activeChallenge.amount}xp</span>
                </header>
                <main>
                    <img src={`icons/${activeChallenge.type}.svg`}></img>
                    <strong>Novo desafio</strong>
                    <p>
                        {activeChallenge.description}   
                    </p>
                </main>
               <footer>
                    <button onClick={handleChallengeFailed} className={styles.failed} type='button'>Falhei</button>
                    <button onClick={handleChallengeSucceded} className={styles.completed} type='button'>Completei</button>
               </footer>
            </div>
            )}
      
          
        </div>
    )
}