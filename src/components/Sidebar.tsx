import styles from '../styles/components/Sidebar.module.css'
export function Sidebar(){
    return(
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <header>
                    <img src={"/Logo.svg"}/>
                </header>
                <div className={styles.content}>
                    <img src={"/home.svg"} />
                    <img src={"/home.svg"} />
                </div>
            </div>
        </div>
    )
}