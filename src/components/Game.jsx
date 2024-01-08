import styles from './Game.module.css'

const Game = ({verifyLetter}) => {
  return (
    <div>
      <header>
        <h1>Game</h1>
      </header>
      <section className={styles.section_to_game}>

        <button className={styles.btn_finalizar} onClick={verifyLetter}>Finalizar Jogo</button> 
      </section>
    </div>
  )
}

export default Game