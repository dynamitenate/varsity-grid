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

    const handleCloseModal = useCallback(() => {
        setModalOpen(false);
    }, []);

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
                        <Cell onClick={() => setModalOpen(true)} />
                        <Cell onClick={() => setModalOpen(true)} />
                        <Cell onClick={() => setModalOpen(true)} />
                    </div>
                    <div className="grid-row">
                        <HeaderCell text={categories.rows.r2} />
                        <Cell onClick={() => setModalOpen(true)} />
                        <Cell onClick={() => setModalOpen(true)} />
                        <Cell onClick={() => setModalOpen(true)} />
                    </div>
                    <div className="grid-row">
                        <HeaderCell text={categories.rows.r3} />
                        <Cell onClick={() => setModalOpen(true)} />
                        <Cell onClick={() => setModalOpen(true)} />
                        <Cell onClick={() => setModalOpen(true)} />
                    </div>
                </div>
            </div>
            {modalOpen && <Modal onClose={handleCloseModal}/>}
        </>
    );
}