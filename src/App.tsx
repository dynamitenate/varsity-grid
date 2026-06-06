import Grid from './components/Grid'
import { GameProvider } from './context/GameContext'
import { ModalProvider } from './context/ModalContext'

function App() {
  return (
    <>
      <ModalProvider>
        <GameProvider>
          <Grid />
        </GameProvider>
      </ModalProvider>
    </>
  )
}

export default App
