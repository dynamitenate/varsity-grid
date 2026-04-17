import Cell from "./Cell";
import "./Grid.css";

export default function Grid() {
    return (
        <>
            <h1>{"Varsity Grid"}</h1>
            <table className="grid-table">
                <tbody>
                    <tr>
                        <td><Cell /></td>
                        <td><Cell /></td>
                        <td><Cell /></td>
                    </tr>
                    <tr>
                        <td><Cell /></td>
                        <td><Cell /></td>
                        <td><Cell /></td>
                    </tr>
                    <tr>
                        <td><Cell /></td>
                        <td><Cell /></td>
                        <td><Cell /></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}