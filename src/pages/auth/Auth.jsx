import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthProvider";

export default function Auth() {
    const Navigate = useNavigate()
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

    const { user, setUser } = useContext(AuthContext)

    
    
    useEffect(() => {
        async function getUserFromURL() {
            if (accessToken) {
                const config = {'Authorization': `${tokenType} ${accessToken}`}
                const response = await axios.get('https://discordapp.com/api/users/@me', {headers: config})
    
                localStorage.setItem('access_token', accessToken)
                localStorage.setItem('token_type', tokenType)
                localStorage.setItem('user', JSON.stringify(response.data))
                setUser(response.data)
                
                Navigate('/')
            }
            else{
                Navigate('/login')
            }
            return
        }
        
        getUserFromURL()
    }, [])
    return
}