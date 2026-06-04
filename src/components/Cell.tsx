import { ReactNode } from "react";
import "./Cell.css";
import { useGame } from "../context/GameContext";

interface CellProps {
    cellId: number;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Cell({ cellId, onClick }: CellProps) {
    const { game } = useGame();
    const value = game.answers[cellId];
    return (
        <div
            className="cell"
            onClick={onClick}
        >
            {value}
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