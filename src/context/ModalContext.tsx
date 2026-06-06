import { createContext, useContext, useState } from "react";

type ModalState = "open" | "close";

interface ModalContextType {
    modalState: ModalState;
    updateModalState: (state: ModalState) => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [modalState, setModalState] = useState<ModalState>("close");

    const updateModalState = (newState: ModalState) => {
        setModalState(newState);
    }

    return (
        <ModalContext.Provider value={{modalState, updateModalState}}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal(): ModalContextType {
    let context = useContext(ModalContext);
    if (!context) throw new Error("useModal must be used within a ModalProvider");
    return context;
}