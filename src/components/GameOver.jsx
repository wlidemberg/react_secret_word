import styles from './GameOver.module.css'

const GameOver = ({ retry }) => {
  return (
    <div>
      <header>
        <h1>Game Over</h1>
      </header>
      <section className={styles.section_end_game}>

        <button className={styles.btn_end} onClick={retry}>Resetar Jogo</button>
      </section>
      
    </div>
  )
}

export default GameOver