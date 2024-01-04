import './App.css'
import interrogacao from './assets/imagem_mulher_interrogacao.png'

function App() {
  return (
    <>
     <div className='main_screen'>
        <div className='screen_left'>
          <img src={interrogacao} alt="Mulher com cartaz de interrogação" />
        </div>
        <div className='screen_right'>
          <header>
          <h1>Secret Word</h1>
        </header>
        </div>
     </div>
    </>
  )
}
export default App
