import { useContext } from 'react'
import logo from '../../../assets/logo/new-transparent-alt.png'
import { AuthContext } from '../../../contexts/AuthProvider'
import './Navbar.scss'

export function Navbar() {
    const { user, serverId } = useContext(AuthContext)
    return (
        serverId &&
        <div className="navbar">
            <div className="navbar__container">
                <div className="left">
                    <a href="/">
                        <img src={logo} alt="momento-logo" />
                    </a>
                </div>
                {/* <div className="middle">
                    <Input
                        sx={{ width: 224 }}
                        placeholder="Procurar usuário"
                        size='small'
                    />
                    <SearchIcon sx={{ fontSize: 24 }} />
                </div> */}
                <div className="right">
                    <div className="profile-info">
                        <div className="profile-info__profile-picture">
                            <a href="/profile">
                                <img src={user.profilePictureURL} alt="profile-picture" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}