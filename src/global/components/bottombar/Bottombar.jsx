import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthProvider'
import './Bottombar.scss'
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
import WhatshotIcon from '@mui/icons-material/Whatshot';

export function Bottombar() {
    const { user, serverId } = useContext(AuthContext)
    return (
        user, serverId &&
        <div className="bottombar">
            <div className="bottombar__container">
                <div className="bottombar__button">
                    <FeedIcon sx={{fontSize: 32}}/>
                </div>
                <div className="bottombar__button">
                    <WhatshotIcon sx={{fontSize: 32}}/>
                </div>
                <div className="bottombar__button">
                    <SearchIcon sx={{fontSize: 32}}/>
                </div>
            </div>
        </div>
    )
}