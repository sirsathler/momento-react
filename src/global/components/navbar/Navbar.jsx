import { useContext } from 'react'
import logo from '../../../assets/logo/new-transparent-alt.png'
import { AuthContext } from '../../../contexts/AuthProvider'
import Input from '@mui/material/Input';
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';

export function Navbar() {
    const { user, serverId } = useContext(AuthContext)
    return (
        serverId &&
        <div className="navbar">
            <div className="navbar__container">
                <div className="left">
                    <img src={logo} alt="momento-logo" />
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
                            <img src={user.profilePictureURL} alt="profile-picture" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}