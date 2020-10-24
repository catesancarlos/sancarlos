import React, { useEffect, useState } from 'react'
import firebase from './dBase'

export const AuthContext = React.createContext({})

export const AuthProvider = ({ children }) => {
    const [sesion, setSesion] = useState({ 
        logged: false, 
        user: null, 
        listo: false 
    })

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setSesion({
                  logged: true,
                  user,
                  listo: true
                })
            } else {
                setSesion({
                  logged: false,
                  user: null,
                  listo: true
                })
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={ sesion } >
          {children}
        </AuthContext.Provider>
    )
}