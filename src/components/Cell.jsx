import { useState } from "react";

export default function Cell() {
    const [answer, setAnswer] = useState(null);

    return <>
        <div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "#5E6875",
                borderColor: "#B4BFCF",
                color: "#B4BFCF"
            }}
            onClick={() => {
                setAnswer("clicked");
            }}
        >
            {answer}
        </div>
    </>
}