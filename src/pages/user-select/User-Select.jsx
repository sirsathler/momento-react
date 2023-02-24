import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthProvider"

export default function () {
    const { handleLogout } = useContext(AuthContext)    
    return (
        <button onClick={handleLogout}>logout</button>
    )
}