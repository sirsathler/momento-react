import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [access_token, setAccess_Token] = useState()
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    let Navigate = useNavigate()

    useEffect(() => {
        console.log(user)
        const userStoraged = localStorage.getItem('user')
        const tokenStoraged = localStorage.getItem('access_token')
        if (tokenStoraged && userStoraged && !user) {
            const parsedUser = JSON.parse(userStoraged)
            setAccess_Token(tokenStoraged)
            setUser(parsedUser)
            console.log('ata')
            // Navigate('/')
        }

        setLoading(false)
    }, [user])

    function handleLogout() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('user')
        setAccess_Token()
        setUser()
        Navigate("/login")
        return true
    }

    return (
        <AuthContext.Provider value={{ access_token, handleLogout, loading, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
