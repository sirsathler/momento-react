import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom"

export default function (props) {
    const Navigate = useNavigate()

    function getTokenFromURL() {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

        // http://localhost:3000/auth#token_type=Bearer&access_token=ccrRpBpUzuuTSFG8SXo1mQd15R2MxT&expires_in=604800&scope=email+identify+guilds
        if (accessToken) {
            localStorage.setItem('access_token', accessToken)
            console.log(accessToken)
            Navigate('/')
        }
    }
    useEffect(getTokenFromURL, [])
    return
}