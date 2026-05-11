import { ReactNode } from "react";
import "./Cell.css";

interface CellProps {
  answer: ReactNode;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Cell({ answer, onClick }: CellProps) {
    return (
        <div
            className="cell"
            onClick={onClick}
        >
            {answer}
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