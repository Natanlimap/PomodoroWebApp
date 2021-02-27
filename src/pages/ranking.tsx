import { PersonInRanking } from '../components/PersonInranking';
import styles from '../styles/pages/Ranking.module.css';
export default function Ranking(){
    return(
        <div className={styles.container}>
            <h1>Leaderboard</h1>
            <div className={styles.labels}>
                <span>Posição</span>
                <span>Usuário</span>
                <span>Desafios</span>
                <span>Experiência</span>
            </div>
            <PersonInRanking />
            <PersonInRanking />
            <PersonInRanking />
            <PersonInRanking />

            
        </div>
    )
}