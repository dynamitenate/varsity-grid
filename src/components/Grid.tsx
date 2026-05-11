import Cell, { HeaderCell, GhostCell } from "./Cell";
import Modal from "./Modal";
import { useState, useCallback } from "react";
import "./Grid.css";

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
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCell, setSelectedCell] = useState<string | undefined>(undefined);
    const [answers, setAnswers] = useState(["", "", "", "", "", "", "", "", ""]);

    const handleCloseModal = useCallback(() => {
        setSelectedCell(undefined);
        setModalOpen(false);
    }, []);

    const handleSubmitModal = (value: string) => {
        const newAnswers = [...answers];
        const cellInt = parseInt(selectedCell as string);
        newAnswers[cellInt] = value;
        setAnswers(newAnswers);
    }

    const handleCellClick = (cellId: string) => {
        setSelectedCell(cellId);
        setModalOpen(true);
    }

    return (
        <>
            <h1
                style={{
                    "color": "#dedede",
                    "fontFamily": "'Chakra Petch', sans-serif",
                    "fontSize": "50px",
                    "fontWeight": "700"
                }}
            >
                {"Varsity Grid"}
            </h1>
            <div>
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
                            <Cell answer={answers[0]} onClick={() => handleCellClick("0")} />
                            <Cell answer={answers[1]} onClick={() => handleCellClick("1")} />
                            <Cell answer={answers[2]} onClick={() => handleCellClick("2")} />
                        </div>
                        <div className="grid-row">
                            <HeaderCell text={categories.rows.r2} />
                            <Cell answer={answers[3]} onClick={() => handleCellClick("3")} />
                            <Cell answer={answers[4]} onClick={() => handleCellClick("4")} />
                            <Cell answer={answers[5]} onClick={() => handleCellClick("5")} />
                        </div>
                        <div className="grid-row">
                            <HeaderCell text={categories.rows.r3} />
                            <Cell answer={answers[6]} onClick={() => handleCellClick("6")} />
                            <Cell answer={answers[7]} onClick={() => handleCellClick("7")} />
                            <Cell answer={answers[8]} onClick={() => handleCellClick("8")} />
                        </div>
                    </div>
                </div>
                {modalOpen && <Modal
                    onClose={handleCloseModal}
                    onSubmit={handleSubmitModal}
                />}
            </div>
        </>
    );
}