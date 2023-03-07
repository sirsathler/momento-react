import "./Profile.scss"
import { useContext, useEffect, useState } from "react"
import Collage from "./collage/Collage"
import { ProfileService } from "../../services/ProfileService"
import { AuthContext } from "../../contexts/AuthProvider"
import { useParams } from "react-router-dom"
import Notfound from "../../global/components/notfound/Notfound"

export default function Profile() {
    const [user, setUser] = useState()
    const { access_token } = useContext(AuthContext)
    const params = useParams()

    useEffect(() => {
        async function getUserInformations() {
            //MOCKED!
            const user = await ProfileService.fetchUserProfileMocked(params.user, access_token)
            setUser(user)
        }
        getUserInformations()
    }, [])

    if (user) {
        return (
            <div className="page-profile generic-container">
                <div className="profile-info">
                    <div className="profile-info__profile-picture">
                        <img src={user.profilePictureURL} alt="profile-picture" />
                    </div>
                    <h2 className="profile-info__username forte-font">{`@${user.user}`}</h2>
                    <h1 className="profile-info__fullname">{`${user.name} ${user.surname}`}</h1>
                    <h3 className="profile-info__bio">{user.bio}</h3>
                </div>

                <div className="profile-stats">
                    <div className="profile-stats-container">
                        <span className="profile-stats-container__value">120</span>
                        <span className="profile-stats-container__label forte-font">momentos</span>
                    </div>
                    <div className="profile-stats-container">
                        <span className="profile-stats-container__value">10</span>
                        <span className="profile-stats-container__label forte-font">trends</span>
                    </div>
                    <div className="profile-stats-container">
                        <span className="profile-stats-container__value">12.5k</span>
                        <span className="profile-stats-container__label forte-font">seguidores</span>
                    </div>
                </div>
                <Collage
                    img1={user.collage.img1}
                    img2={user.collage.img2}
                    img3={user.collage.img3}
                    img4={user.collage.img4}
                    img5={user.collage.img5}
                    img6={user.collage.img6}
                />
            </div>
        )
    }
    else {
        return (
            <Notfound />
        )
    }
}