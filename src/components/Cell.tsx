import { ReactNode } from "react";
import "./Cell.css";
import { useGame } from "../context/GameContext";

interface CellProps {
    cellId: number;
    onClick: (cellId: number) => void;
}

export default function Cell({ cellId, onClick }: CellProps) {
    const { game } = useGame();
    return (
        <div
            className="cell"
            onClick={() => onClick(cellId)}
        >
            {game.answers[cellId]}
        </div>
    );
}

interface HeaderCellProps {
  text: string;
}

export function HeaderCell({ text }: HeaderCellProps) {
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