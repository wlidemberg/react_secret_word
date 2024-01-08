import styles from './StartScreen.module.css'

const StartScreen = ({startGame}) => {
  return (
    <div>
        <header>
          <h1>Secret Word</h1>
        </header>
        <section className={styles.section_start_game}>
            <p>Bem vindo ao Jogo Secret Word, inicie um novo jogo e divirta-se</p>
            <button className={styles.btn_start} onClick={startGame}>Iniciar Novo Jogo</button>
        </section>
    </div>
  )
}

export default StartScreen