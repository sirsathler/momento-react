import { useContext } from 'react'
import logo from '../../../assets/logo/new-transparent-alt.png'
import { AuthContext } from '../../../contexts/AuthProvider'
import Input from '@mui/material/Input';
import './Bottombar.scss'
import SearchIcon from '@mui/icons-material/Search';

export function Bottombar() {
    const { user, serverId } = useContext(AuthContext)
    return (
        serverId &&
        <div className="bottombar">
            <div className="bottombar__container">
                <div className="left">
                </div>
                <div className="middle">
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}