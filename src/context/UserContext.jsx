import React from 'react'
import { useContext, useState, useEffect } from 'react'

const UserContext = React.createContext()
export default function ThemeProvider() {
    const [current_user, setCurrentUser] = useState({})
    useEffect(() => {
        api.post("/auth/login", data)
        .then(resp => {
        localStorage.setItem('token', resp.data.token);
        })
        .catch(error => console.error(error.message))
    })

    return (
        <ThemeContext.Provider value={current_user}>
            {children}
        </ThemeContext.Provider>
    )
}
