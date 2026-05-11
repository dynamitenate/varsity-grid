import Cell, { HeaderCell, GhostCell } from "./Cell";
import Modal from "./Modal";
import { useState, useCallback } from "react";
import "./Grid.css";

let categories = {
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
    let [modalOpen, setModalOpen] = useState(false);
    let [selectedCell, setSelectedCell] = useState();
    let [answers, setAnswers] = useState(["", "", "", "", "", "", "", "", ""]);

    const handleCloseModal = useCallback(() => {
        setSelectedCell(undefined);
        setModalOpen(false);
    }, []);

    const handleSubmitModal = (value) => {
        let newAnswers = [...answers];
        let cellInt = parseInt(selectedCell);
        newAnswers[cellInt] = value;
        setAnswers(newAnswers);
    }

    const handleCellClick = (e, cellId) => {
        // TODO: this seems to cause a double-render
        setSelectedCell(cellId);
        setModalOpen(true);
    }
    console.log(selectedCell);

    return (
        <>
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
                        <Cell answer={answers[0]} onClick={(e) => handleCellClick(e, "0")} />
                        <Cell answer={answers[1]} onClick={(e) => handleCellClick(e, "1")} />
                        <Cell answer={answers[2]} onClick={(e) => handleCellClick(e, "2")} />
                    </div>
                    <div className="grid-row">
                        <HeaderCell text={categories.rows.r2} />
                        <Cell answer={answers[3]} onClick={(e) => handleCellClick(e, "3")} />
                        <Cell answer={answers[4]} onClick={(e) => handleCellClick(e, "4")} />
                        <Cell answer={answers[5]} onClick={(e) => handleCellClick(e, "5")} />
                    </div>
                    <div className="grid-row">
                        <HeaderCell text={categories.rows.r3} />
                        <Cell answer={answers[6]} onClick={(e) => handleCellClick(e, "6")} />
                        <Cell answer={answers[7]} onClick={(e) => handleCellClick(e, "7")} />
                        <Cell answer={answers[8]} onClick={(e) => handleCellClick(e, "8")} />
                    </div>
                </div>
            </div>
            {modalOpen && <Modal
                onClose={handleCloseModal}
                onSubmit={handleSubmitModal}
            />}
        </>
    );
}