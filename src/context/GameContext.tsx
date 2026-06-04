import { createContext, useContext, useState } from "react";
import GameState from "../types/Game";

interface GameContextType {
    game: GameState;
    updateGame: (newGame: GameState) => void;
}

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
    const [game, setGame] = useState<GameState>({
        answers: ["", "", "", "", "", "", "", "", ""],
        tries: 10,
        score: 900
    });

    const updateGame = (newGame: GameState) => {
        setGame(newGame);
    }

    return (
        <GameContext.Provider value={{game, updateGame}}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame(): GameContextType {
    let context = useContext(GameContext);
    if (!context) throw new Error("useGame must be used within a GameProvider");
    return context;
}