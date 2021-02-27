import { GetServerSideProps } from "next";
import {useRouter} from 'next/router';
import { useContext, useState } from "react";
import {UserContext, UserProvider} from '../contexts/UserContext'
import styles from '../styles/pages/Login.module.css';

interface LoginProps{
    username: string
}

export default function LoginPage(props: LoginProps){
    const router = useRouter()
    const [invalidName, setInvalidName] = useState(false)

    const {handleUserInput, addUserCookie, isUserValid} = useContext(UserContext)

    function handleSubmit(){
        if(isUserValid()){
            console.log("valid")
            addUserCookie()
            router.push('/')
        }
        else{
            setInvalidName(true);
        }
        
    }

    return(
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
                            <input onChange={handleUserInput} type='text' placeholder="Digite seu username" />
                            <button onClick={handleSubmit}><img src='/arrow.png' /></button>
                        </div>
                        {invalidName && <span>Nome não válido</span>}
                    </div>
                </div>
            </div>
    )
}
