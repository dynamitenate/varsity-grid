import Grid from './components/Grid'
import Header from './components/Header'
import { GameProvider } from './context/GameContext'
import { ModalProvider } from './context/ModalContext'

function App() {
  return (
    <>
      <Header />
      <ModalProvider>
        <GameProvider>
          <Grid />
        </GameProvider>
      </ModalProvider>
    </>
  )
}

export default App
