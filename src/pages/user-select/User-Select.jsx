
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider'
import './User-Select.scss'

export default function UserSelect() {
    const { user } = useContext(AuthContext)
    return (
        <div className="generic-page page-user-select">
            <h1 className="page-user-select__welcome-label">Olá, {user.username}!</h1>
            <h2 className="page-user-select__select-label">Escolha um Perfil</h2>
        </div>
    )
}