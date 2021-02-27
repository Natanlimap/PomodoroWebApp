import styles from '../styles/components/PersonInRanking.module.css'
import { Profile } from './Profile'
export function PersonInRanking(){
    return(
        <div className={styles.card}>
            <div className={styles.number}> 
            
            </div>    
            <div className={styles.cardInfo}>
                <div className={styles.personalInfo}>
                    <div className={styles.profileContainer}>
                        <img src="https://github.com/natanlimap.png" alt="Natan de Lima"></img>
                        <div>
                            <strong>Natan de Lima</strong>
                            <p>
                                <img src="icons/level.svg" alt='level' />
                                level 2
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.challengesInfo}>

                </div>
            </div>
        </div>
    )
}