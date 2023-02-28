import { useContext } from 'react'
import logo from '../../../assets/logo/new-transparent-alt.png'
import { AuthContext } from '../../../contexts/AuthProvider'
import './Navbar.scss'

export function Navbar() {
    const { user } = useContext(AuthContext)
    return (
        user &&
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