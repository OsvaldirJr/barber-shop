import React, { useState, createContext } from 'react';

export const ModalsContext = createContext({});

export default function LoginModalProvider({ children }) {
    const [isModalVisible, setModalVisible] = useState(false);

    const modalVisibility = (newValue: boolean) => {
        setModalVisible(newValue)
    }

    return (
        <ModalsContext.Provider value={{ modalVisibility, isModalVisible }}>
            {children}
        </ModalsContext.Provider>
    )
}