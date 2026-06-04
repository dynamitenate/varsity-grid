import Grid from './components/Grid'
import { GameProvider } from './context/GameContext'

function App() {
  return (
    <>
      <GameProvider>
        <Grid />
      </GameProvider>
    </>
  )
}

export default App
