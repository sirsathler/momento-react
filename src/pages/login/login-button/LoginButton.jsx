import discord_logo from '../../../assets/others/discord.png'
import logo_alt from '../../../assets/logo/new-transparent.png'

import './LoginButton.scss'

export default function LoginButton(props) {
    switch (props.type) {
        case "dc":
            return (
                <a href="https://discord.com/api/oauth2/authorize?client_id=1042472796846034955&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=token&scope=guilds%20identify%20email" className="login-button discord">
                    <div className="login-button__login-logo-container">
                        <img src={discord_logo} alt="next" />
                    </div>
                    <p className="login-button__label discord">Continuar com Discord</p>
                </a>
            )
        case "momento":
            return (
                <a href="https://discord.com/api/oauth2/authorize?client_id=1042472796846034955&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=token&scope=guilds%20identify%20email" className="login-button momento disabled">
                    <div className="login-button__login-logo-container">
                        <img src={logo_alt} alt="next" />
                    </div>
                    <p className="login-button__label">Continuar com momento</p>
                </a>
            )
        default:
            break
    }
}