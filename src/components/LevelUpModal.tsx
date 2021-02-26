import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal(){
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>2</header>

                <strong>Parabéns</strong>
                <p>Você subiu de level</p>

                <button type="button">
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>
    )
}