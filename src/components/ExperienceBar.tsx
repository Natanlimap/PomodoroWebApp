import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar(){
    return(
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{ width: '50%'}}></div>
                <span className={styles.experienceCurrent} style={{left: "50%"}}>340xp</span>
            </div>
            <span>680 xp</span>
        </header>
    )
}