import { useState } from "react";

export default function Cell() {
    const [answer, setAnswer] = useState(null);

    return <>
        <div
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "red"
            }}
            onClick={() => {
                setAnswer("clicked");
            }}
        >
            {answer}
        </div>
    </>
}