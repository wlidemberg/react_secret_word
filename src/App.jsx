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
    setLetters(letters)


    setGameStage(stages[1].name)
  }

  //process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  // restarts the game
  const retry = () => {
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
          {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
          {gameStage === 'end' && <GameOver retry={retry} />}
          
          
        </div>
     </div>
    </>
  )
}
export default App
