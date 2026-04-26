import Grid from "./Grid";

export default function Game() {
    return (
        <>
            <h1
                style={{
                    "color": "#dedede",
                    "fontFamily": "'Chakra Petch', sans-serif",
                    "fontSize": "50px",
                    "fontWeight": "700"
                }}
            >
                {"Varsity Grid"}
            </h1>
            <Grid />
        </>
    );
}