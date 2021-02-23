import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/natanlimap.png" alt="Natan de Lima"></img>
            <div>
                <strong>Natan de Lima</strong>
                <p>
                    <img src="icons/level.svg" alt='level' />
                    level 1
                </p>
            </div>
        </div>
    )
}