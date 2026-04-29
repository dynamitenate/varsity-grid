import Cell, { HeaderCell, GhostCell } from "./Cell";
import "./Grid.css";

export default function Grid() {
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
    return (
        <div className="grid-body">
            <div className="grid-table">
                <div className="grid-row">
                    <div className="grid-table-cell"><GhostCell /></div>
                    <div className="grid-table-cell"><HeaderCell text={categories.columns.c1} /></div>
                    <div className="grid-table-cell"><HeaderCell text={categories.columns.c2} /></div>
                    <div className="grid-table-cell"><HeaderCell text={categories.columns.c3} /></div>
                </div>
                <div className="grid-row">
                    <div className="grid-table-cell"><HeaderCell text={categories.rows.r1} /></div>
                    <div className="grid-table-cell"><Cell /></div>
                    <div className="grid-table-cell"><Cell /></div>
                    <div className="grid-table-cell"><Cell /></div>
                </div>
                <div className="grid-row">
                    <div className="grid-table-cell"><HeaderCell text={categories.rows.r2} /></div>
                    <div className="grid-table-cell"><Cell /></div>
                    <div className="grid-table-cell"><Cell /></div>
                    <div className="grid-table-cell"><Cell /></div>
                </div>
                <div className="grid-row">
                    <div className="grid-table-cell"><HeaderCell text={categories.rows.r3} /></div>
                    <div className="grid-table-cell"><Cell /></div>
                    <div className="grid-table-cell"><Cell /></div>
                    <div className="grid-table-cell"><Cell /></div>
                </div>
            </div>
        </div>
    );
}