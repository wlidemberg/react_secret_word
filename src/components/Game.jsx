import styles from './Game.module.css'
import { useState, useRef } from 'react'
import { GiLifeBar } from "react-icons/gi";
import { RiProhibitedLine } from "react-icons/ri";
import { MdScoreboard } from "react-icons/md";

const Game = ({
  verifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters, 
  guessedLetters, 
  wrongLetters, 
  wrongAttempts, 
  score}) => {
    const [letter, setLetter] = useState('')
    const letterInputRef = useRef(null)

    const handleSubmit = (e) => {
      e.preventDefault()

      verifyLetter(letter)
      setLetter('')
      letterInputRef.current.focus()
    }

  return (
    <div className={styles.container}>
      <section className={styles.section_info}>
        <div><p className={styles.container_icon_life}><MdScoreboard /><span>Score: {score}</span></p></div>
        {/* <div><p><span className={styles.container_icon_life}><GiLifeBar /></span> 000 </p></div> */}
        
        <div><p className={styles.container_icon_life}><GiLifeBar /><span>Life: {wrongAttempts}</span></p></div>
      </section>
      <section className={styles.section_to_game}>
        <h2>Advinhe a palavra: </h2>
        <h3>Dica: <span>{pickedCategory}</span></h3>
        <div className={styles.words_container}>
          {letters.map((letter, i) => (
            guessedLetters.includes(letter) ? 
            (<span key={i} className={styles.letters}>{letter}</span>) : (<span key={i} className={styles.blackSquare}></span>)
          ))}
          
          
        </div>
        <div className={styles.container_game}>
          <p>Tente adivinhar uma letra da palavra.</p>
          <form onSubmit={handleSubmit} className={styles.form_game}>
            <input type="text" name='letter' maxLength='1' required 
            onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef} />
            <button className={styles.btn_jogar}>
              Jogar!
            </button>
          </form>
        </div>
        <div className={styles.dicartedLetters}>
          <p><RiProhibitedLine /> Descartadas: </p>
          {wrongLetters.map((letter, i) => (
            <p><span key={i}>{letter}</span>,</p>
          ))}
        </div>
        <button className={styles.btn_finalizar}>Finalizar Jogo</button> 
      </section>
    </div>
  )
}

export default Game