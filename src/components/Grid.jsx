import Cell, { HeaderCell, GhostCell } from "./Cell";
import "./Grid.css";

export default function Grid() {
    return (
        <div className="grid-body">
            <div className="grid-table">
                <div className="grid-row">
                    <div className="grid-table-cell"><GhostCell /></div>
                    <div className="grid-table-cell"><HeaderCell /></div>
                    <div className="grid-table-cell"><HeaderCell /></div>
                    <div className="grid-table-cell"><HeaderCell /></div>
                </div>
                <div className="grid-row">
                    <div className="grid-table-cell"><HeaderCell /></div>
                    <div className="grid-table-cell"><Cell /></div>
                    <div className="grid-table-cell"><Cell /></div>
                    <div className="grid-table-cell"><Cell /></div>
                </div>
                <div className="grid-row">
                    <div className="grid-table-cell"><HeaderCell /></div>
                    <div className="grid-table-cell"><Cell /></div>
                    <div className="grid-table-cell"><Cell /></div>
                    <div className="grid-table-cell"><Cell /></div>
                </div>
                <div className="grid-row">
                    <div className="grid-table-cell"><HeaderCell /></div>
                    <div className="grid-table-cell"><Cell /></div>
                    <div className="grid-table-cell"><Cell /></div>
                    <div className="grid-table-cell"><Cell /></div>
                </div>
            </div>
        </div>
    );
}