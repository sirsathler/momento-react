import logo from '../../../assets/logo/new-transparent-alt.png'
import './Navbar.scss'

export function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="left">
                    <img src={logo} alt="momento-logo" />
                </div>
                <div className="middle">procurar</div>
                <div className="right">perfil</div>
            </div>
        </div>
    )
}