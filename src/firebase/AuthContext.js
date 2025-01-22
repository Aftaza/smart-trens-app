"use client"

import { onAuthStateChanged } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "./Firebase"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={{user, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)