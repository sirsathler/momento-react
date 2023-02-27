
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'
import { ProfileCard } from './profile-card/ProfileCard'
import './UserSelect.scss'

export default function UserSelect() {
    const { user } = useContext(AuthContext)
    return (
        <div className="generic-page page-user-select">
            <h1 className="page-user-select__welcome-label">Olá, <strong>{user.username}</strong>!</h1>
            <h2 className="page-user-select__select-label">escolha um perfil para começarmos...</h2>

            <div className="select-profile-container">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>
        </div>
    )
}