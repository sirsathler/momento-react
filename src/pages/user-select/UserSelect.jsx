
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthProvider'
import { Powered } from '../../global/components/powered/Powered'
import { ProfileCard } from './profile-card/ProfileCard'
import './UserSelect.scss'
import { UserSelectServices } from '../../services/UserSelectServices'
// import { UserSelectServices } from './UserSelectServices.ts'

export default function UserSelect() {
    const { user, setServerId, access_token, handleLogout } = useContext(AuthContext)
    const [userList, setUserList] = useState([])
    const Navigate = useNavigate()

    useEffect(() => {
        async function getUserProfiles(user) {
            UserSelectServices.fetchUserProfilesMocked('123', '21')
            const profilesList = await UserSelectServices.fetchUserProfilesMocked(user.id, access_token)
            setUserList(profilesList)
        }

        getUserProfiles(user)
    }, [])

    function selectProfile(serverId) {
        localStorage.setItem("serverId", serverId)
        setServerId(serverId)
        Navigate('/')
    }

    return (
        <div className="generic-page page-user-select">
            <h1 className="page-user-select__welcome-label">Olá, <span className="strong-font">{user.username}</span>!</h1>
            <h2 className="page-user-select__select-label light-font">escolha um perfil para começarmos...</h2>

            <div className="select-profile-container">
                {
                    userList.length > 0 &&
                    userList.map((userProfile, id) => {
                        return (
                            <ProfileCard
                                key={id}
                                name={userProfile.name}
                                surname={userProfile.surname}
                                username={userProfile.username}
                                serverId={userProfile.serverId}
                                profilePictureURL={userProfile.profilePictureURL}

                                handleSelectProfile={selectProfile}
                            />
                        )
                    })
                }
                {
                    userList.length == 0 &&
                    <p>Parece que você ainda não possui nenhum perfil cadastrado...</p>
                }
            </div>

            <a href="/login" onClick={handleLogout} className="page-user-select__logout-label light-font">acessar com outro discord</a>
            <Powered />
        </div>
    )

}