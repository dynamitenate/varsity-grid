import Cell, { HeaderCell, GhostCell } from "./Cell";
import Modal from "./Modal";
import { useState, useCallback } from "react";
import "./Grid.css";
import GameState from "../types/Game";
import { useGame } from "../context/GameContext";
import { useModal } from "../context/ModalContext";

const categories = {
    columns: {
        c1: "c1",
        c2: "c2",
        c3: "c3"
    },
    rows: {
        r1: "r1",
        r2: "r2",
        r3: "r3"
    },
}

export default function Grid() {
    const [selectedCellId, setSelectedCellId] = useState<number | undefined>(undefined);
    const { modalState, updateModalState } = useModal();
    const { game, updateGame } = useGame();

    const handleCloseModal = useCallback(() => {
        setSelectedCellId(undefined);
        updateModalState("close");
    }, []);

    const handleSubmitModal = (value: string) => {
        if (selectedCellId !== undefined) {
            const newGameState: GameState = {...game};
            newGameState.answers[selectedCellId] = value;
            newGameState.tries--;
            newGameState.score -= 100; // TODO: We'll eventually want this to be dynamic...
            updateGame(newGameState);
        }
    }

    const handleCellClick = (cellId: number) => {
        setSelectedCellId(cellId);
        updateModalState("open");
    }

    return (
        <>
            {/* TODO: Could maybe abstract this Grid component down a layer... */}
            <div className="grid-body">
                <div className="grid-table">
                    <div className="grid-row">
                        <GhostCell />
                        <HeaderCell text={categories.columns.c1} />
                        <HeaderCell text={categories.columns.c2} />
                        <HeaderCell text={categories.columns.c3} />
                    </div>
                    <div className="grid-row">
                        <HeaderCell text={categories.rows.r1} />
                        <Cell cellId={0} onClick={handleCellClick} />
                        <Cell cellId={1} onClick={handleCellClick} />
                        <Cell cellId={2} onClick={handleCellClick} />
                    </div>
                    <div className="grid-row">
                        <HeaderCell text={categories.rows.r2} />
                        <Cell cellId={3} onClick={handleCellClick} />
                        <Cell cellId={4} onClick={handleCellClick} />
                        <Cell cellId={5} onClick={handleCellClick} />
                    </div>
                    <div className="grid-row">
                        <HeaderCell text={categories.rows.r3} />
                        <Cell cellId={6} onClick={handleCellClick} />
                        <Cell cellId={7} onClick={handleCellClick} />
                        <Cell cellId={8} onClick={handleCellClick} />
                    </div>
                </div>
                {/* TODO: Make this separate component(s) */}
                <div style={{color: "black"}}>
                    {"Tries: " + game.tries}
                    <br />
                    {"Score: " + game.score}
                </div>
            </div>
            {/* TODO: Make this part of the top-level component */}
            {modalState === "open" && <Modal
                onClose={handleCloseModal}
                onSubmit={handleSubmitModal}
            />}
        </>
    );
}