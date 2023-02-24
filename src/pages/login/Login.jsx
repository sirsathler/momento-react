import './Login.scss';
import logo from '../../assets/logo/new-big.png'
import discord_logo from '../../assets/others/discord.png'

export default function () {
    return (
        <div className="page-login">
            <div className="logo-container">
                <img src={logo} alt="momento-logo" />
            </div>
            <div className="generic-container">
                <a className="login-button">
                    <div className="login-button__dc-logo-container">
                        <img src={discord_logo} alt="next" />
                    </div>
                    <p className="login-button__label">Login with Discord</p>
                </a>
            </div>

            <p className="page-login__trademark">powered by momento</p>
        </div>
    );
}