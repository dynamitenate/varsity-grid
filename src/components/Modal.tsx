import "./Modal.css";
import { memo, useState, useRef, useEffect, ChangeEvent, KeyboardEvent, MouseEvent } from "react";

interface ModalProps {
  onClose: () => void;
  onSubmit: (value: string) => void;
}

export default memo(function Modal({ onClose, onSubmit }: ModalProps) {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
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