import "./Modal.css";
import { memo, useState, useRef, useEffect } from "react";

export default memo(function Modal({ onClose, onSubmit }) {
    let [value, setValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && value.length > 0) {
            onSubmit(value);
            onClose();
        }
    }

    return (
        <div
            className="modal-backdrop"
            onClick={handleBackdropClick}>
            <input
                ref={inputRef}
                id={"input0"}
                className="modal-content"
                value={value}
                placeholder={"Type a school name..."}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
});