import './Login.scss';
import logo from '../../assets/logo/new-big.png'
import LoginButton from './login-button/LoginButton';

export default function Login () {
    return (
        <div className="page-login">
            <div className="logo-container">
                <img src={logo} alt="momento-logo" />
            </div>
            <div className="generic-container">
                <LoginButton type="dc"/>
                <LoginButton type="momento"/>
            </div>

            <p className="page-login__trademark">powered by momento</p>
        </div>
    );
}