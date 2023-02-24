import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function Auth () {
    const Navigate = useNavigate()
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

    async function getTokenFromURL() {

        if (accessToken) {
            localStorage.setItem('access_token', accessToken)
            localStorage.setItem('token_type', tokenType)
        }

        return
    }


    useEffect(() => {
        async function fetchDiscordUser(token_type, access_token) {
            const options = { headers: { 'authorization': `${token_type} ${access_token}` } }
            const result = await axios.get("https://discord.com/api/users/@me", options)
            
            if(result.status === 200) {
                Navigate('/')
            }
        }

        getTokenFromURL()
        fetchDiscordUser(tokenType, accessToken);
    }, [])
    return
}