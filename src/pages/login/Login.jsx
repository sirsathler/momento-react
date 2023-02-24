import './Login.scss';
import logo from '../../assets/logo/new-big.png'
import logo_alt from '../../assets/logo/new-transparent.png'
import discord_logo from '../../assets/others/discord.png'

export default function () {
    return (
        <div className="page-login">
            <div className="logo-container">
                <img src={logo} alt="momento-logo" />
            </div>
            <div className="generic-container">
                <a className="login-button discord">
                    <div className="login-button__login-logo-container">
                        <img src={discord_logo} alt="next" />
                    </div>
                    <p className="login-button__label discord">Continuar com Discord</p>
                </a>
                <a className="login-button momento disabled">
                    <div className="login-button__login-logo-container">
                        <img src={logo_alt} alt="next" />
                    </div>
                    <p className="login-button__label">Continuar com momento</p>
                </a>
            </div>

            <p className="page-login__trademark">powered by momento</p>
        </div>
    );
}