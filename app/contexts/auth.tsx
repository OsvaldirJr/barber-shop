import React, { useState, createContext } from 'react';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [counterValue, setCounterValue] = useState(0);

    function signIn(email: string, password: string) {
        if (email !== '' && password !== '') {
            setUser({
                email: email,
                isLogged: true
            })
        }
    }

    function addCount(counterValue: number) {
        setCounterValue(counterValue += 1)
    }

    return (
        <AuthContext.Provider value={{ signIn, user, addCount, counterValue }}>
            {children}
        </AuthContext.Provider>
    )
}