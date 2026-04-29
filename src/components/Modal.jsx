import "./Modal.css";

export default function Modal({ onClose }) {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                <h2>Modal Title</h2>
                <p>Modal content goes here</p>
            </div>
        </div>
    );
}