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
  console.log(words)

  return (
    <>
     <div className='main_screen'>
        <div className='screen_left'>
          <img src={interrogacao} alt="Mulher com cartaz de interrogação" />
        </div>
        <div className='screen_right'>

          {gameStage === 'start' && <StartScreen />}
          {gameStage === 'game' && <Game />}
          {gameStage === 'end' && <GameOver />}
          
          
        </div>
     </div>
    </>
  )
}
export default App
