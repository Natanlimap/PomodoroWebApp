import { GetServerSideProps } from "next";
import {UserProvider} from '../contexts/UserContext'
import styles from '../styles/pages/Login.module.css';

interface LoginProps{
    username: string
}

export default function LoginPage(props: LoginProps){
    return(
        <UserProvider>
            <div className={styles.background}>
                <div className={styles.container}>
                    <div>
                        <img src='/Logo.svg' />
                        <strong>Bem-vindo</strong>
                        <p>
                            <img src='/icons/Github.svg'/>
                            Faça login com seu github para começar    
                        </p>
                        <div className={styles.inputGroup}>
                            <input placeholder="Digite seu username" />
                            <button><img src='/arrow.png' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </UserProvider>
    )
}
