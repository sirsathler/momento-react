import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [access_token, setAccess_Token] = useState()
    const [loading, setLoading] = useState(true)
    let Navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (token) {
            setAccess_Token(token)
        }
        else {
            Navigate("/login")
        }

        setLoading(false)
    }, [])

    function handleLogout() {
        localStorage.removeItem('access_token')
        setAccess_Token()
        Navigate("/login")
        return true
    }

    return (
        <AuthContext.Provider value={{ access_token, handleLogout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}
