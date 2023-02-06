import React, { useContext, useState, useEffect, createContext} from "react";
import { auth } from "./firebase";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    // Authentication Functions

    const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password)

    const login = (email, password) => auth.signInWithEmailAndPassword(email, password)

    const logout = () => auth.signOut()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
 
} 


