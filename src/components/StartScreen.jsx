import styles from './StartScreen.module.css'

import { BsDpad } from "react-icons/bs";

const StartScreen = ({startGame}) => {
  return (
    <div>
        <header>
          <h1>Secret Word</h1>
        </header>
        <section className={styles.section_start_game}>
            <p>Bem vindo ao Jogo Secret Word, inicie um novo jogo e divirta-se</p>
            <button className={styles.btn_start} onClick={startGame}><BsDpad /> Iniciar Novo Jogo</button>
        </section>
    </div>
  )
}

export default StartScreen