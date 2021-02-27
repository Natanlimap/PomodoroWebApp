import styles from '../styles/components/Sidebar.module.css'
import {useRouter} from 'next/router'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export function Sidebar(){
    const router = useRouter()

    
    const { logout } = useContext(UserContext) 
    function handleLogout(){
        logout();
        router.push("/login")
    }
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
                <button onClick={handleLogout}>Sair</button>

            </div>
        </div>
    )
}