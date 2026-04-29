import { useState } from "react";
import "./Cell.css";

export default function Cell({ onClick }) {
    const [answer, setAnswer] = useState(null);

    return (
        <div
            className="cell"
            onClick={onClick}
        >
            {answer}
        </div>
    );
}

export function HeaderCell({ text }) {
    return (
        <div
            className="cell header"
        >
            {text}
        </div>
    );
}

export function GhostCell() {
    return (
        <div
            className="cell ghost"
        />
    );
}