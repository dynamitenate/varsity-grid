import { useState } from "react";
import "./Cell.css";

export default function Cell() {
    const [answer, setAnswer] = useState(null);

    return (
        <div
            className="cell"
            onClick={() => {
                setAnswer("clicked");
            }}
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