// CSS
import './App.css'

// React
import { useCallback, useEffect, useState } from 'react'

// data
import { wordList } from './data/words'

// images
import interrogacao from './assets/imagem_mulher_interrogacao.png'

// Components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

// Stages Game
const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]


function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordList)

  // selection of word category and letters
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  // guessed letters
  const [guessedLetters, setGuessedLetters] = useState([])

  // wrong letters
  const [wrongLetters, setWrongLetters] = useState([])

  // wrong attempts
  const attempsQtda = 3
  const [wrongAttempts, setWrongAttempts] = useState(attempsQtda)

  // user score
  const [score, setScore] = useState(0)

  // fuction pick word and category
  const pickWordAndCategory = () => {
    // armazenando as chaves da lista arrays
    const categories = Object.keys(words)
    // pick a random category
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category)

    // pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return { word, category }
  }
  
  // start of the secret word game
  const startGame = () => {
    // pick word and pick category
    const { word, category } = pickWordAndCategory()
    
    // create an array of letters
    let wordLetters = word.split('')

    // going through the array of letters and transforming all letters into lowercase
    wordLetters = wordLetters.map((l) => l.toLowerCase())
    console.log(wordLetters)

    // fill states
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)


    setGameStage(stages[1].name)
  }

  //process the letter input
  const verifyLetter = (letter) => {
    const normalizeLetter = letter.toLowerCase()    

    // check if letter has already been utilized
    if(guessedLetters.includes(normalizeLetter) || wrongLetters.includes(normalizeLetter)){
      return;
    }

    if(letters.includes(normalizeLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizeLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters, normalizeLetter
      ])
      setWrongAttempts((actualGuesses) => actualGuesses - 1)
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if(wrongAttempts <= 0){
      // reset all states
      clearLetterStates()

      setGameStage(stages[2].name)
    }
  })

  console.log(guessedLetters)
  console.log(wrongLetters) 

  // restarts the game
  const retry = () => {
    setScore(0)
    setWrongAttempts(attempsQtda)
    setGameStage(stages[0].name)
  }

  return (
    <>
     <div className='main_screen'>
        <div className='screen_left'>
          <img src={interrogacao} alt="Mulher com cartaz de interrogação" />
        </div>
        <div className='screen_right'>

          {gameStage === 'start' && <StartScreen startGame={startGame} />}
          {gameStage === 'game' && <Game 
            verifyLetter={verifyLetter}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            wrongAttempts={wrongAttempts}
            score={score}
          />}
          {gameStage === 'end' && <GameOver retry={retry} />}
          
          
        </div>
     </div>
    </>
  )
}
export default App
