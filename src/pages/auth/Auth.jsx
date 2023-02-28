import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { fetchUserByDiscordToken } from "../../api/DiscordAPI";
import { AuthContext } from "../../contexts/AuthProvider";

export default function Auth() {
    const Navigate = useNavigate()
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

    const { setUser } = useContext(AuthContext)



    useEffect(() => {
        async function getUserFromURL() {
            const discordUser = await fetchUserByDiscordToken(accessToken, tokenType);
            if (accessToken && discordUser) {
                localStorage.setItem('access_token', accessToken)
                localStorage.setItem('token_type', tokenType)
                localStorage.setItem('user', JSON.stringify(discordUser))
                setUser(discordUser)

                Navigate('/')
            }
            else {
                Navigate('/login')
            }
            return
        }

        getUserFromURL()
    }, [])
    return
}