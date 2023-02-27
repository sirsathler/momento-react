import './Login.scss';
import logo from '../../assets/logo/new-big.png'
import LoginButton from './login-button/LoginButton';
import { Powered } from '../../global/components/powered/Powered';

export default function Login () {
    return (
        <div className="page-login">
            <div className="logo-container">
                <img src={logo} alt="momento-logo" />
            </div>
            <h1 className="page-login__title forte-font">momento</h1>
            <h2 className="page-login__subtitle forte-font">a rpg social media</h2>
            <div className="generic-container">
                <LoginButton type="dc"/>
                <LoginButton type="momento"/>
            </div>

            <Powered/>
        </div>
    );
}