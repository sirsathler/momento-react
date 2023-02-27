import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [access_token, setAccess_Token] = useState()
    const [serverId, setServerId] = useState()
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    let Navigate = useNavigate()

    useEffect(() => {
        const userStoraged = localStorage.getItem('user')
        const tokenStoraged = localStorage.getItem('access_token')
        const serverIdStoraged = localStorage.getItem('serverId')
        if (tokenStoraged && userStoraged && !user) {
            const parsedUser = JSON.parse(userStoraged)
            setAccess_Token(tokenStoraged)
            setUser(parsedUser)
            setServerId(serverIdStoraged)
        }

        setLoading(false)
    }, [user])

    function handleLogout() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('user')
        localStorage.removeItem('serverId')
        setAccess_Token()
        setUser()
        setServerId()
        Navigate("/login")
        return true
    }

    return (
        <AuthContext.Provider value={{ access_token, handleLogout, loading, user, setUser, serverId, setServerId }}>
            {children}
        </AuthContext.Provider>
    )
}
