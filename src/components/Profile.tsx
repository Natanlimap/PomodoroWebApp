import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(props){


    const {level} = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src={"https://github.com/" + props.username + ".png"} alt="Natan de Lima"></img>
            <div>
                <strong>{props.username}</strong>
                <p>
                    <img src="icons/level.svg" alt='level' />
                    level {level}
                </p>
            </div>
        </div>
    )
}